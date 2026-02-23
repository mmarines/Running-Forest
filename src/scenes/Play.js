class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        //scene parameters
        this.playerVelocity = 150
        this.playerMaxVelocity = 500
        
        //lane positions for shrimp spawning
        this.lanes = [height / 6, height / 2, 5 * height / 6]

        //custom shrimp variables
        this.currentShrimp = null
        this.nextShrimpSpawned = false
        
        //score
        this.shrimpEaten = 0
    }
    
    create() {
        //set up bgm
        this.bgm = this.sound.add('bgm', {
            mute: false,
            volume: 0.2,
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

        //create player
        this.player = this.physics.add.sprite(width / 7, height / 2, 'gumpi').setScale(1.5)
        this.player.setCollideWorldBounds(true)
        this.player.setImmovable()
        this.player.setMaxVelocity(0, this.playerMaxVelocity)
        this.player.setDragY(200)
        this.player.play('run', true)

        //spawn first shrimp
        this.spawnShrimp()

        //cursor keys
        cursors = this.input.keyboard.createCursorKeys()
        
        //create score display
        this.scoreText = this.add.text(width - 100, 10, this.shrimpEaten, { fontSize: '32px', fill: '#fff' }).setOrigin(1, 0)
        this.scoreShrimp = this.add.sprite(width - 60, 45, 'shrimp', 0)
        this.scoreShrimp.setScale(0.5)
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

        //spawn new shrimp when current shrimp reaches halfway across screen
        if (this.currentShrimp && !this.nextShrimpSpawned && this.currentShrimp.x < width / 2) {
            this.nextShrimpSpawned = true
            this.spawnShrimp()
        }
    }

    spawnShrimp() {
        //randomly choose shrimp type (0 = orange, 1 = pink)
        const shrimpType = Phaser.Math.Between(0, 1)
        
        //randomly choose lane
        const randomLane = Phaser.Utils.Array.GetRandom(this.lanes)
        
        //spawn shrimp using Shrimp class
        this.currentShrimp = new Shrimp(this, width + 80, randomLane, shrimpType)

        // wire overlap handler using the Shrimp helper
        this.currentShrimp.enableOverlap(this.player, (player, shrimp) => {
            if (!shrimp) return
            // orange shrimp: collect and increase score
            if (shrimp.shrimpType === 0) {
                this.collectShrimp(player, shrimp)
                return
            }
            // pink shrimp: end the game
            if (shrimp.shrimpType === 1) {
                if (this.bgm && this.bgm.isPlaying) this.bgm.stop()
                this.scene.start('gameOver')
            }
        })

        this.nextShrimpSpawned = false
    }

    collectShrimp(player, shrimp) {
        this.shrimpEaten += 1
        this.scoreText.setText(this.shrimpEaten)
        
        this.sound.play('eat')

        // every 10 shrimp collected, play milestone SFX
        if (this.shrimpEaten % 10 === 0) {
            if (this.sound) this.sound.play('milestone')
        }

        // shrimp instance will be destroyed by the Shrimp.enableOverlap helper
        this.nextShrimpSpawned = false
        this.spawnShrimp()
    }
}