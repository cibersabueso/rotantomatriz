import { useState } from 'react';
import Head from 'next/head'; 
import { rotateMatrix } from '@/utils/rotateMatrix';
import MatrixDisplay from '@/components/MatrixDisplay';
import RotatedMatrixDisplay from '@/components/RotatedMatrixDisplay';
import '../../styles/matrix.css';

const IndexPage = () => {
  const [matrixInput, setMatrixInput] = useState('');
  const [inputMatrix, setInputMatrix] = useState<number[][] | null>(null);
  const [rotatedMatrix, setRotatedMatrix] = useState<number[][] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMatrixInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMatrixInput(event.target.value);
    setError(null);
    setRotatedMatrix(null);
  };

  const handleRotate = () => {
    try {
      const formattedInput = matrixInput.trim().startsWith('[') ? matrixInput : `[${matrixInput}]`;
      const parsedInputMatrix = JSON.parse(formattedInput);
      if (!Array.isArray(parsedInputMatrix) || !parsedInputMatrix.length || !parsedInputMatrix.every(Array.isArray)) {
        throw new Error('La entrada debe ser una matriz 2D válida');
      }
      setInputMatrix(parsedInputMatrix);
      const result = rotateMatrix(parsedInputMatrix);
      setRotatedMatrix(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    }
  };

  return (
    <>
      <Head>
        <title>Rotador de Matrices</title>
        <meta name="description" content="Rota matrices en línea con facilidad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Aquí se puede agregar etiquetas meta según sea necesario */}
      </Head>
      <div className="container mx-auto p-4">
        <textarea
          className="w-full p-2 border"
          rows={4}
          value={matrixInput}
          onChange={handleMatrixInput}
          placeholder="Ejemplo: [[1,2],[3,4]]"
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleRotate}
        >
          Rotar Matriz
        </button>
        {inputMatrix && (
          <div>
            <p>Matriz de Entrada:</p>
            <MatrixDisplay matrix={inputMatrix} />
          </div>
        )}
        {rotatedMatrix && (
          <div>
            <p>Matriz Rotada:</p>
            <RotatedMatrixDisplay matrix={rotatedMatrix} />
          </div>
        )}
        {error && (
          <div className="mt-4 text-red-500">
            <p>Error: {error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default IndexPage;