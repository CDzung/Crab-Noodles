import { GameConfig } from "../components/game-config.js";
import { MonsterSpawner } from "../weapon/monster-spawner.js";
import { Enemy } from "./enemy.js";
import { Pirate } from "./pirate.js";

export class RedGate extends Enemy {
    constructor(scene, x, y, stats) {
        stats = Object.assign({}, GameConfig.entities["red-gate"], stats);
        super(scene, x, y, stats);

        this.timeout = 0;

        this.weapon = new MonsterSpawner(scene, x, y, [Pirate]);
    }

    create_anims() {
        this.animations.idle = this.anims.create({
            key: "anims.red-gate",
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers("spritesheet.gate", { start: 8 })
        })

        this.animations.die = this.animations.idle;
    }

    update() {
        super.update();

        if (this.isAlive) this.weapon.fire();
    }
}