// Max Marinescu
// Running Forrest
// Approx time: 22 hours
// Creative Tilt:
// Citations:
// Background Music: drmseq - https://pixabay.com/music/video-games-summer-mix-243341/

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
    scene: [ Load, Title, Play ]
}

let game = new Phaser.Game(config)

let cursors = null
let { height, width } = game.config