import { WaveGroup } from './wavegroup.js'
// import { Wave } from './wave.js'

class App {
    constructor() {
        // 캔버스 생성
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        // resize 이벤트 걸기
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // 애니메이션 시작
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // 캔버스 더블 사이즈로 지정 = 레티나 디스플레이에서도 잘 보이기 위함
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    // 캔버스 클리어
    animate(t) {
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }

}

// App 생성
window.onload = () => {
    new App();
};