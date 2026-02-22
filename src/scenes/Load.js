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

        //load audio assets
        this.load.audio('bgm', './assets/audio/drmseq-summer-mix-243341.mp3')
    }
    
    create() {
        this.scene.start('titleScene')
    }
}