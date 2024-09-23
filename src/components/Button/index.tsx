import clsx from 'clsx';
import React from 'react';
import { backgroundClasses, borderClasses, getBackgroundClass, getTextClass, lightbgClasses, textClasses } from '../../theme';


interface ButtonProps {
    onClick?: () => void;
    variant?: "filled" | "outlined" | "light" | "transparent";
    color?: "primary" | "secondary" | "warning" | "danger" | "success";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    children: React.ReactNode; // Typing for the children prop
}



const variantClasses = (variant: string, color: "primary" | "secondary" | "warning" | "danger" | "success") => {
    if (variant === 'filled') {
        return clsx(getBackgroundClass(color), `hover:${getBackgroundClass(color, 600)}`, "text-white")

    } else if (variant === 'outline') {
        // return (textClasses[color],
        //     borderClasses[color])
        return (clsx(getTextClass(color),`hover:${getTextClass(color,600)}`),borderClasses[color])
    } else if (variant === 'light') {
        // return (textClasses[color],
        //     lightbgClasses[color]
        // )
        return(clsx(lightbgClasses[color],`hover:${getBackgroundClass(color,600)}`,`hover:${getTextClass(color,600)}`,getTextClass(color)))

    }
    else if (variant === 'success') {
        return clsx(backgroundClasses[color],`hover:${getBackgroundClass(color,600)}`,
            "text-white"
        )
    } else {
        return clsx(textClasses[color],`hover:${getBackgroundClass(color,600)}`,"text-white")
    }
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color = "primary", variant = "filled", type = "submit", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={clsx(variantClasses(variant, color), `px-4 py-2 rounded-md transition duration-300 ease-in-out
                  disabled:bg-gray-400 disabled:cursor-not-allowed`)}
        >
            {children}
        </button>
    );
};

export default Button;
