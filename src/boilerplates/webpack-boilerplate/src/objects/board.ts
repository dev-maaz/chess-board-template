
import { BoardConstructor } from "../interfaces/board.interface";

export class Board {
    public columns: number;
    public rows: number;

    public boardWidth: number;
    public boardHeight: number;

    public squareWidth: number;
    public squareHeight: number;

    public color1: number;
    public color2: number;

    public xOffset: number;
    public yOffset: number;

    private scene: Phaser.Scene;

    public squares: Phaser.GameObjects.Rectangle[][];

    // variables for construction only
    private xSquareOffset: number;
    private ySquareOffset: number;
    private currentColor: number;

    constructor(  params: BoardConstructor ) {

        this.scene = params.scene;
        this.columns = params.columns ?? 8;
        this.rows = params.rows ?? 8;

        this.boardWidth = params.boardWidth ?? 800;
        this.boardHeight = params.boardHeight ?? 800;

        this.xOffset = params.xOffset ?? 0;
        this.yOffset = params.yOffset ?? 0;

        this.color1 = params.color1 ?? 0x706677;
        this.color2 = params.color2 ?? 0xccb7ae;

        this.squareWidth = this.boardWidth / this.columns;
        this.squareHeight = this.boardHeight / this.rows;

        this.squares = []

        //Private params for construction only
        this.xSquareOffset = this.squareWidth/2 + this.xOffset;
        this.ySquareOffset = this.squareHeight/2 + this.yOffset;
        this.currentColor = this.color1;

        this.createBoard()
    }

    createBoard() {
        for( let row = 0; row < this.rows ; row++) {

            this.squares[row] = [];
            for( let column = 0; column < this.columns ; column++) {
                const square = this.scene.add.rectangle( this.xSquareOffset, this.ySquareOffset, this.squareWidth, this.squareHeight, this.currentColor, 1)

                square.setInteractive();
                const squareColor = this.currentColor
                square.setData('originalColor', squareColor);

                square.on('pointerover', () => {
                    // Create a desaturated version of the original color
                    square.setAlpha(0.7)
                });

                square.on('pointerout', () => {
                    // Create a desaturated version of the original color
                    square.setAlpha(1)
                });

                this.squares[row][column] = square;
                this.currentColor === this.color1 ? this.currentColor = this.color2 : this.currentColor = this.color1;
                this.ySquareOffset += this.squareHeight;
            }
            this.currentColor === this.color1 ? this.currentColor = this.color2 : this.currentColor = this.color1;
            this.ySquareOffset = this.squareHeight/2 + this.yOffset;
            this.xSquareOffset += this.squareWidth;
        }
    }


}