import LoadingScene from "./scenes/LoadingScene.js";
import GameScene from "./scenes/GameScene.js";
import MainMenuScene from "./scenes/MainMenuScene.js";
import CreditsScene from "./scenes/CreditsScene.js"
import InstructionsScene from "./scenes/Instructions.js";
import WinScene from "./scenes/WinScene.js";
import GameOverScene from "./scenes/GameOverScene.js";

let loadingScene = new LoadingScene();
let gameScene = new GameScene();
let mainMenuScene = new MainMenuScene();
let creditsScene = new CreditsScene();
let instructionsScene = new InstructionsScene();
let winScene = new WinScene();
let gameOverScene = new GameOverScene();

let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 512,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }
    }
    
};

let game = new Phaser.Game( config );

game.scene.add( 'LoadingScene', loadingScene );
game.scene.add( 'GameScene', gameScene );
game.scene.add( 'MainMenuScene', mainMenuScene );
game.scene.add( 'CreditsScene', creditsScene );
game.scene.add( 'InstructionsScene', instructionsScene );
game.scene.add( 'WinScene', winScene );
game.scene.add( 'GameOverScene', gameOverScene );

game.scene.start( 'LoadingScene' );