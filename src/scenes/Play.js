class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload () {
        this.load.spritesheet('gumpi', './assets/spritesheet/gumpi.png', {
            frameWidth: 64
        })
    }
    
    create() {
        this.anims.create({
            key: 'run',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('gumpi', {
                frames: [0, 3, 1]
            })
        })

        this.player = this.physics.add.sprite(width / 7, height / 2, 'gumpi').setScale(1.5)
        this.player.body.setCollideWorldBounds(true)
        this.player.play('run', true)
    }   
}