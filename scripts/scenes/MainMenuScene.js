export default class MainMenuScene extends Phaser.Scene {

    constructor() {
        super( 'MainMenuScene' );
    }

    create() {
        this.add.image( 0, 0, 'mainmenu' ).setOrigin( 0, 0 );

        let start = this.add.image( 350, 400, 'starticon' );
        start.setInteractive({ useHandCursor: true });
        start.on( 'pointerdown', () => this.startButton() );

        let credits = this.add.image( 512, 400, 'creditsicon' );
        credits.setInteractive({ useHandCursor: true });
        credits.on( 'pointerdown', () => this.creditsButton() );

        let exit = this.add.image( 674, 400, 'exiticon' );
        exit.setInteractive({ useHandCursor: true });
        exit.on( 'pointerdown', () => this.exitButton() );
    }

    startButton() {
        this.scene.start( 'InstructionsScene' );
    }

    creditsButton() {
        this.scene.start( 'CreditsScene' );
    }

    exitButton() {
        alert( 'You have exited the game. Thank you for playing!' );
    }

}