import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        // 웨이브 개수
        this.totalWaves = 3;
        // 포인트 개수
        this.totalPoints = 6;

        // 각 웨이브 마다 다른 색상 설정
        // this.color = ['rgba(0,199,235,0.4)','rgba(0,146,199,0.4)','rgba(0,87,158,0.4)'];
        this.color = ['rgba(255,0,0,0.4)','rgba(255,255,0,0.4)','rgba(0,255,255,0.4)'];

        this.waves = [];

        for(let i=0; i<this.totalWaves;i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i=0;i<this.totalWaves;i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i=0;i<this.totalWaves;i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}