import { Board } from "../objects/board";
export class BoardScene extends Phaser.Scene {

    private board: Board;
    constructor() {
        super({ key:'BoardScene' });
    }

    preload(): void{

    }

    create(): void{
        this.board = new Board({
            scene: this,
            boardWidth: 600,
            boardHeight: 600,
            xOffset: 100,
            yOffset: 100
        });
        
    }

    update(): void{

    }
}