import { Melee } from "./melee.js";

export class LightSaber extends Melee {
    /**
     * light-saber.init
     * @param {Phaser.Scene} scene 
     * @param {number} x 
     * @param {number} y 
     * @param {StatsWeapon} stats 
     */
    constructor(scene, x, y, stats) {
        super(scene, x, y, "image-light-saber", stats);
        this.setOrigin(0, 0.5);

        this.scene.anims.create({
            key: "anims-light-saber-effect",
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("spritesheet-light-saber-effect", { start: 0, end: 5 })
        });

        this.effect = this.scene.add.sprite(x, y, null);
    }

    fire(pointer) {
        super.fire(pointer);
        this.effect.setVisible(true).setPosition(this.x, this.y).play("anims-light-saber-effect", true);
    }

    notFire(pointer) {
        super.notFire(pointer);
        this.effect.setVisible(false);
    }

    /**
     * load game resources
     * @param {Phaser.Scene} scene 
     */
    static preload(scene) {
        if (scene instanceof Phaser.Scene) {
            scene.load.image("image-light-saber", "./assets/images/light-saber.png");
            scene.load.spritesheet("spritesheet-light-saber-effect", "./assets/images/light-saber-effect.png", { frameWidth: 38, frameHeight: 38 });
        }
    }
}