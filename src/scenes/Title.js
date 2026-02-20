class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.add.text(400, 300, 'Running Forrest', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5)
    }
}