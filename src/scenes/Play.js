class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        //scene parameters
        this.playerVelocity = 150
        this.playerMaxVelocity = 500
    }
    
    create() {
        //set up bgm
        this.bgm = this.sound.add('bgm', {
            mute: false,
            volume: 0.5,
            rate: 1,
            loop: true
        })
        this.bgm.play()

        //create scrolling background
        this.dirtpath = this.add.tileSprite(0, 0, width, height, 'dirtpath').setOrigin(0, 0)

        //create player animations
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
        this.player.setMaxVelocity(0, this.playerMaxVelocity)
        this.player.setDragY(200)
        this.player.play('run', true)

        //cursor keys
        cursors = this.input.keyboard.createCursorKeys()
    }   

    update() {
        //scroll background
        this.dirtpath.tilePositionX += 5
        
        //player movement
        if (cursors.up.isDown) {
            this.player.body.velocity.y -= this.playerVelocity
        } else if (cursors.down.isDown) {
            this.player.body.velocity.y += this.playerVelocity
        }
    }
}