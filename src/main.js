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
            debug: true
        }
    },
    scene: [Title]
}

let game = new Phaser.Game(config)