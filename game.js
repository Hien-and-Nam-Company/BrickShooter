var brickSide = 30;
var wall = [];
wallSetup();
var weapon = new Weapon();
var bullet = new Bullet();

document.addEventListener("keyup", function (event) {
    if (event.keyCode == 37) {
        bullet.shoot();
        weapon.color = randomWeaponColor();
    }
})

function collisionBulletBrick() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (Physics.collision(wall[i][j], bullet) && !wall[i][j].isBroken) {
                if (wall[i][j].color == bullet.color) {
                    wall[i][j].setBroken(true);
                    checkAround(i, j, bullet.color);
                } else if (i < cols - 1 && wall[i][j].y == bullet.y) {
                    wall[i + 1][j].setBroken(false);
                    wall[i + 1][j].setColor(bullet.color);
                    wallDraw();
                }
                bullet.disappear();
                //else colorEffect(wall[i][j], bullet.color);
                //bullet.stopMovingLeft();
            }
        }
    }
}

function draw() {
    weapon.draw();
    wallDraw();
    bullet.draw();
}

function update() {
    wallUpdate();
    bullet.update();
}

function loop() {
    clearCanvas();
    update();
    draw();
    requestAnimationFrame(loop);
}

loop();