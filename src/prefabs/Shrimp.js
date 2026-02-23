
class Shrimp extends Phaser.Physics.Arcade.Sprite {
    // shrimpType: 0 = orange, 1 = pink
    constructor(scene, x, y, shrimpType) {
        super(scene, x, y, 'shrimp', shrimpType)

        this.parentScene = scene
        this.shrimpType = shrimpType

        // add to scene and enable physics body
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)

        this.setDepth(1)
        this.setDisplaySize(160, 160)
        this.speed = -300
        this.body.setVelocityX(this.speed)
        this.setImmovable()
    }

    update() {
        if (this.x + this.displayWidth < 0) {
            this.destroy()
        }
    }

    // Helper to enable overlap collision with player and call handler
    enableOverlap(player, onCollect) {
        this.parentScene.physics.add.overlap(player, this, (p, s) => {
            // only collect cooked shrimp 
            if (typeof onCollect === 'function') onCollect(p, s)
            if (s && s.destroy) s.destroy()
        }, null, this.scene)
    }

    destroy() {
        if (this.body) {
            this.body.enable = false
        }
        super.destroy()
    }
}

// expose globally for index.html script loading
window.Shrimp = Shrimp
