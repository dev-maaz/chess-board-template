export interface BoardConstructor {
    scene: Phaser.Scene;
    boardWidth?: number;
    boardHeight?: number;
    columns?: number;
    rows?: number;
    xOffset?: number;
    yOffset?: number;
    color1?: number;
    color2?: number;
  }
  