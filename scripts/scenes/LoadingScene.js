export default class LoadingScene extends Phaser.Scene {

    constructor() {
        super( 'LoadingScene' )
    }

    preload() {
        this.load.image( 'layer1', '../assets/background/layer1.png' );
        this.load.image( 'layer2', '../assets/background/layer2.png' );
        this.load.image( 'layer3', '../assets/background/layer3.png' );
        this.load.image( 'layer4', '../assets/background/layer4.png' );
        this.load.image( 'layer5', '../assets/background/layer5.png' );
        this.load.image( 'layer6', '../assets/background/layer6.png' );
        this.load.image( 'layer7', '../assets/background/layer7.png' );

        this.load.image( 'eye', '../assets/objects/eye.png' );
        this.load.image( 'bullet', '../assets/objects/bullet.png' );
        this.load.image( 'character', '../assets/sprites/character.png' );

        this.load.image( 'creditsicon', '../assets/menu/creditsicon.png' );
        this.load.image( 'exiticon', '../assets/menu/exiticon.png' );
        this.load.image( 'menuicon', '../assets/menu/menuicon.png' );
        this.load.image( 'retryicon', '../assets/menu/retryicon.png' );
        this.load.image( 'starticon', '../assets/menu/starticon.png' );
        this.load.image( 'backicon', '../assets/menu/backicon.png' );
        this.load.image( 'playicon', '../assets/menu/playicon.png' );

        this.load.image( 'mainmenu', '../assets/background/mainmenu.png' );
        this.load.image( 'credits', '../assets/background/credits.png' );
        this.load.image( 'gameover', '../assets/background/gameover.png' );
        this.load.image( 'win', '../assets/background/win.png' );
        this.load.image( 'instructions', '../assets/background/instructions.png' );

        this.load.audio( 'music', '../assets/audio/ToArms.ogg');
        this.load.audio( 'firebolt', '../assets/audio/firebolt.mp3' );
        this.load.audio( 'destroy', '../assets/audio/destroy.mp3' );
    }

    create() {
        this.add.text( 20, 20, 'Loading game...' );

        this.music = this.sound.add( 'music', { loop: true } );
        this.music.play();
        
        console.log( 'Loading scene accessed!' );
        this.scene.start( 'MainMenuScene' );

        
    }
}