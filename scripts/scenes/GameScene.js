export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        
        this.add.image( 0, 0, 'layer1' ).setScale( 2 ).setOrigin( 0, 0 );
        this.add.image( 0, 0, 'layer2' ).setScale( 2 ).setOrigin( 0, 0 );
        this.add.image( 0, 0, 'layer3' ).setScale( 2 ).setOrigin( 0, 0 );
        this.add.image( 0, 0, 'layer4' ).setScale( 2 ).setOrigin( 0, 0 );
        this.add.image( 0, 0, 'layer7' ).setScale( 2 ).setOrigin( 0, 0 );

        this.player = this.physics.add.sprite( 512, 445, 'character' );
        this.player.setScale( 0.5 );
        this.player.setBounce( 0.2 );
        this.player.setCollideWorldBounds( true );

        this.add.image( 0, 0, 'layer6' ).setScale( 2 ).setOrigin( 0, 0 );

        this.bullets = this.physics.add.group();
        this.firebolt = this.sound.add( 'firebolt' );
        this.bombs = this.physics.add.group(); 
        this.impact = this.sound.add( 'destroy' );

        this.cursors = this.input.keyboard.createCursorKeys();
        this.input.keyboard.on('keydown-SPACE', () => this.shootBullet()); 

        this.score = 0;
        this.scoreText = this.add.text( 50, 50, 'Coins: 0', { fontSize: '32px', fill: '#000000' } );

        //timer
        this.timeAlive = 0;
        this.timeAliveText = this.add.text(800, 50, 'Time Alive: 0', { fontSize: '20px', fill: '#000000' });

        this.time.addEvent({
            delay: 1000, // Fire every 1 second
            callback: () => {
                this.timeAlive++; // Increment time alive
                this.timeAliveText.setText(`Time Alive: ${this.timeAlive}`);
            },
            callbackScope: this,
            loop: true
        });


        // to spawn bombs endlessly
        this.spawnTimer = this.time.addEvent({
            delay: 500, 
            callback: () => this.spawnBomb(), 
            callbackScope: this,
            loop: true 
        });

        // bullets and bombs colliding
        this.physics.add.collider(this.bullets, this.bombs, (bullet, bomb) => {
            bullet.destroy(); 
            bomb.destroy(); 
            this.impact.play();
            this.score += 10; 
            this.scoreText.setText(`Coins: ${this.score}`); 

            if (this.score >= 200) {
                this.winGame();
            }
        });

        // checking collision
        this.physics.add.collider(this.player, this.bombs, () => {
            this.gameOver(); 
        });
    }

    shootBullet() {
        let bullet = this.bullets.create( this.player.x, this.player.y - 5, 'bullet' );
        bullet.setVelocityY( -600 );
        this.firebolt.play();
    }

    spawnBomb() {
        let x = Phaser.Math.Between( 0, 1024 ); 
        let bomb = this.bombs.create( x, -50, 'eye' ); 
        bomb.setVelocityY(Phaser.Math.Between( 100, 300 )); 
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX( -400 ); 
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX( 400 ); 
        } else {
            this.player.setVelocityX( 0 ); 
        }

        // checking for bombs reaching the bottom of the screen
        this.bombs.children.each(bomb => {
            if (bomb.y > this.sys.game.config.height) {
                bomb.destroy(); 
                this.score = Math.max( 0, this.score - 5 );
                this.scoreText.setText(`Coins: ${this.score}`); 
            }
        });
    }

    gameOver() {
        this.spawnTimer.remove();
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        this.player.body.enable = false;
        this.scene.start( 'GameOverScene' );
    }

    winGame() {
        this.spawnTimer.remove(); 
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        this.player.body.enable = false;
        this.scene.start( 'WinScene' );
    }
}
