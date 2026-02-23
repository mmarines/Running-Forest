class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        //load visual assets
        this.load.spritesheet('gumpi', './assets/images/gumpi.png', {
            frameWidth: 64
        })
        this.load.image('dirtpath', './assets/images/dirtpath.png')
        this.load.spritesheet('shrimp', './assets/images/shrimp.png', {
            frameWidth: 160,
            frameHeight: 160
        })

        //load audio assets
        this.load.audio('bgm', './assets/audio/drmseq-summer-mix-243341.mp3')
        this.load.audio('startup', './assets/audio/floraphonic-90s-game-ui-7-185100.mp3')
        this.load.audio('eat', './assets/audio/freesound_community-game-eat-sound-83240.mp3')
        this.load.audio('vomit', './assets/audio/dragon-studio-vomit-386168.mp3')
        this.load.audio('milestone', './assets/audio/ribhavagrawal-energy-drink-effect-230559.mp3')
    }
    
    create() {
        // Create border for game window
        const graphics = this.add.graphics()
        graphics.lineStyle(10, 0xffffff, 1)
        graphics.strokeRect(0, 0, 800, 600)
        this.scene.start('titleScene')
    }
}