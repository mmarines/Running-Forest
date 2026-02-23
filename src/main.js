/* Max Marinescu
Running Forrest
Approx time: 28 hours
Creative Tilt:
    Technical: I took some inspiration from Paddle Parkour's use of a Barrier Scene class that helped to implement 
    the functionality of the shrimp whether it be counting the score, or detecting collision. I learned how to use a helper function
    and made one to detect collision between the player and shrimp and then call a handler function that I could customize for different shrimp types.
    Visual Style: I worked pretty hard on making a visually appealing background that looped nicely.
    I spent like 3-4 hrs on it and am pretty proud of it. Although my shrimp was kinda a rush job, I still like how it came out
    and it fits together nicely with the game.
Citations:
    Background Music: drmseq - https://pixabay.com/music/video-games-summer-mix-243341/
    Startup SFX: floraphonic - https://pixabay.com/sound-effects/film-special-effects-90s-game-ui-7-185100/
    Eat SFX: freesound_community - https://pixabay.com/sound-effects/film-special-effects-game-eat-sound-83240/
    Vomit SFX: DRAGON-STUDIO - https://pixabay.com/sound-effects/people-vomit-386168/
    Milestone SFX: RibhavAgrawal - https://pixabay.com/sound-effects/film-special-effects-energy-drink-effect-230559/
*/

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_VERTICALLY
    },
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
    scene: [ Load, Title, Play, GameOver ]
}

let game = new Phaser.Game(config)

let cursors = null
let { height, width } = game.config