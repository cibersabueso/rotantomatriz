import { rotateMatrix } from '@/utils/rotateMatrix';

describe('rotateMatrix', () => {
  it('should rotate a 2x2 matrix', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
  });

  it('should rotate a 3x3 matrix', () => {
    expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });

  // Añade más pruebas según sea necesario
  it('should rotate a 4x4 matrix', () => {
    expect(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
  });
});

