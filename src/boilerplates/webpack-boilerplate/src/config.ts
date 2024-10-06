import { BoardScene } from './scenes/board-scene';
import { GameScene } from './scenes/game-scene';

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Webpack-Boilerplate',
  url: 'https://github.com/digitsensitive/phaser3-typescript',
  version: '0.0.1',
  backgroundColor: 0x3a404d,
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.MAX_ZOOM,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
    width: 800,
    height: 800
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 100 }
    }
  },
  scene: [BoardScene]
};
