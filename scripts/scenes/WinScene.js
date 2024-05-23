export default class WinScene extends Phaser.Scene{

    constructor() {
        super('WinScene')
    }

    create() {
        
        this.add.image( 0, 0, 'win' ).setOrigin( 0, 0 );

        let menuIcon = this.add.image( 612, 400, 'menuicon' );
        menuIcon.setInteractive({ useHandCursor: true });
        menuIcon.on( 'pointerdown', () => this.menuButton());

        let retry = this.add.image( 412, 400, 'retryicon' );
        retry.setInteractive({ useHandCursor: true });
        retry.on( 'pointerdown', () => this.retryButton() );

    }

    retryButton() {
        this.scene.start( 'GameScene' );
    }

    menuButton() {
        this.scene.start( 'MainMenuScene' );
    }
    

}