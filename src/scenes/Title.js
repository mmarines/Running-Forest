class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.add.text(400, 150, 'Running Forrest', { fontSize: '48px', fill: '#fff' }).setOrigin(0.5)

        this.add.text(400, 250, 'Press up to start', { fontSize: '24px', fill: '#fff' }).setOrigin(0.5)
        this.add.text(400, 310, 'Use the up and down arrows to eat shrimp', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5)
        this.add.text(400, 360, 'Avoid raw shrimp!', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5)
        
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
         if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            if (this.sound) this.sound.play('startup')
            this.scene.start('playScene')
        }
    }
}