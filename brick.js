class Brick {
    constructor(col, row, color, isVisual) {
        this.col = col;
        this.row = row;
        this.color = color;
        this.x = this.row * brickWidth;
        this.y = this.col * brickWidth + 50;
        this.isVisual = isVisual;
        this.isBroken = false;
    }

    // Get the brick coordinate
    getBrickCoordinate(col, row) {
        var brickX = col * brickWidth;
        // X offset for odd rows
        if (row % 2) {
            brickX += brickWidth/2;
        }
        var brickX = row * brickWidth;
        return { brickX: brickX, brickY: brickY };
    }

    setVisual(isVisual){
        this.isVisual = isVisual;
    }

    setBroken(value) {
        this.isBroken = value;
    }

    setColor(color) {
        this.color = color;
    }

}
