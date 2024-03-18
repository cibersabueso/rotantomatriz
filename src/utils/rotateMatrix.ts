export function rotateMatrix(matrix: number[][]): number[][] {
    if (!matrix || matrix.length === 0 || !Array.isArray(matrix[0])) {
      throw new Error('La matriz proporcionada no es válida o está vacía');
    }
  
    const rows = matrix.length;
    const cols = matrix[0].length;
    const rotated = Array.from({ length: cols }, () => new Array(rows).fill(0));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotated[j][rows - 1 - i] = matrix[i][j];
      }
    }
  
    return rotated;
  }