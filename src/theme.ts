export const colorClasses = {
    "primary": "blue",
    "secondary": "violet",
    "warning": "yellow",
    "danger": "red",
    "success": "green"
};

export const getBackgroundClass = (color: keyof typeof colorClasses, shade = 500) => {
    return `bg-${colorClasses[color]}-${shade}`;
};

export const getTextClass = (color: keyof typeof colorClasses, shade = 500) => {
    return `text-${colorClasses[color]}-${shade}`;
};

export const backgroundClasses = {
    'primary': "blue",
    "secondary": "violet",
    "warning": "yellow",
    "danger": "red",
    "success": "green"
}

export const textClasses = {
    'primary': "text-blue-500",
    "secondary": "text-violet-500",
    "warning": "text-yellow-500",
    "danger": "text-red-500",
    "success": "text-green-500"
};

export const borderClasses = {
    'primary': "border border-blue-500",
    "secondary": "border border-violet-500",
    "warning": "border border-yellow-500",
    "danger": "border border-red-500",
    "success": "border border-green-500"
};

export const lightbgClasses = {
    'primary': "bg-blue-200",
    "secondary": "bg-violet-200",
    "warning": "bg-yellow-200",
    "danger": "bg-red-200",
    "success": "bg-green-200"
};
