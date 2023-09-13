export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: { shape: [['I', 'I']], color: '80, 227, 230'},
  J: { shape: [['J', 'J', 'J','J']], color: '36, 95, 223' },
  L: { shape: [['L', 'L', 'L','L']], color: '223, 173, 36' },
  O: { shape: [['O', 'O','O', 'O']], color: '223, 217, 36' },
  S: { shape: [['S', 'S','S', 'S' ]], color: '48, 211, 56' },
  T: { shape: [['T','T', 'T', 'T']], color: '132, 61, 198' },
  Z: { shape: [['Z', 'Z', 'Z', 'Z']], color: '227, 78, 78' },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
