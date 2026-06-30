import React from 'react';

interface PlaceholderImageProps {
  alt?: string;
  className?: string;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ alt, className }) => {
  return (
    <div className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium border border-gray-300 rounded ${className}`}>
      {alt || 'Image Placeholder'}
    </div>
  );
};
