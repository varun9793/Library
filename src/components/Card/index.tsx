import React from 'react';

interface CardProps {
  heading: string;
  content: string;
  regards: string;
  imageUrl: string;

}

const Card: React.FC<CardProps> = ({ heading, content, regards, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <p className="italic text-gray-500">Regards, {regards}</p>
      </div>
    </div>
  );
};

export default Card;
