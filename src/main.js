// Max Marinescu
// Running Forrest
// Approx time: 22 hours
// Creative Tilt:

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Title, Play]
}

let game = new Phaser.Game(config)

let cursors = null
let { height, width } = game.config