

export class Board {
    public columns: number;
    public rows: number;

    public width: number;
    public height: number;

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

    constructor(  scene: Phaser.Scene, width = 800, height = 600, columns = 8, rows = 8, xOffset = 0, yOffset = 0, color1 = 0x706677, color2 = 0xccb7ae ) {

        this.scene = scene;
        this.columns = columns;
        this.rows = rows;
        this.squareWidth = width / columns;
        this.squareHeight = height / rows;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        console.log(`(square-width, square-height): (${this.squareWidth},${this.squareHeight})`);

        this.color1 = color1;
        this.color2 = color2;

        this.xSquareOffset = this.squareWidth/2 + xOffset;
        this.ySquareOffset = this.squareHeight/2 + yOffset;
        this.currentColor = this.color1;

        this.squares = []
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
                    square.setAlpha(0.8)
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
            this.ySquareOffset = this.squareHeight/2;
            this.xSquareOffset += this.squareWidth;
        }
    }


}