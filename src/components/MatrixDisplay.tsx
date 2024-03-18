import React from 'react';
import '../../styles/matrix.css'; 

interface MatrixDisplayProps {
  matrix: number[][];
}

const MatrixDisplay: React.FC<MatrixDisplayProps> = ({ matrix }) => {
  return (
    <div className="matrix-display">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="matrix-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="matrix-cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixDisplay;