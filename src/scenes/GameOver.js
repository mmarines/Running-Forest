class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOver')
    }

    create() {
        this.cameras.main.setBackgroundColor('#000000')

        this.sound.play('vomit')

        // game over text
        this.add.text(400, 300, 'GAME OVER', { fontSize: '64px', fill: '#ff0000' }).setOrigin(0.5)

        // restart instructions
        this.add.text(400, 380, 'Press up to return to title', { fontSize: '20px', fill: '#fff' }).setOrigin(0.5)

        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
         if (Phaser.Input.Keyboard.JustDown(cursors.up)) {
            this.scene.start('titleScene')
        }
    }
}
