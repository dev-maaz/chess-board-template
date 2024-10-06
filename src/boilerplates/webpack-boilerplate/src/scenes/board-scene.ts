import { Board } from "../objects/board";
export class BoardScene extends Phaser.Scene {

    private board: Board;
    constructor() {
        super({ key:'BoardScene' });
    }

    preload(){

    }

    create(){
        this.board = new Board(this, 600, 600, 8, 8, 100);
        
    }

    update(){

    }
}