export default class InstructionsScene extends Phaser.Scene {

    constructor() {
        super('InstructionsScene')
    }

    create() {
        
        this.add.image( 0, 0, 'instructions' ).setOrigin( 0, 0 );

        let playIcon = this.add.image( 512, 390, 'playicon' );
        playIcon.setInteractive({ useHandCursor: true });
        playIcon.on( 'pointerdown', () => this.playButton());
    }

    playButton() {
        this.scene.start( 'GameScene' );
    }
}