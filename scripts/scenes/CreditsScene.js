export default class CreditsScene extends Phaser.Scene {

    constructor() {
        super('CreditsScene')
    }

    create() {
        
        this.add.image( 0, 0, 'credits' ).setOrigin( 0, 0 );

        let backIcon = this.add.image( 50, 50, 'backicon' );
        backIcon.setScale( 0.5 );
        backIcon.setInteractive({ useHandCursor: true });
        backIcon.on( 'pointerdown', () => this.backButton());
    }

    backButton() {
        this.scene.start( 'MainMenuScene' );
    }
}