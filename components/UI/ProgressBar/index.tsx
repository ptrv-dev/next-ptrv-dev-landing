import React from 'react';

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, className }) => {
  return (
    <div
      className={`1 rounded-sm bg-stone-50 h-1 flex${
        className ? ' ' + className : ''
      }`}
    >
      <div
        className="rounded-sm bg-gradient-to-l from-teal-500 to-teal-700"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
