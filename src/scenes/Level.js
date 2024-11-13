// // You can write more code here

// /* START OF COMPILED CODE */

// import FoodPrefab from "../FoodPrefab.js";
// import BurgerPrefab from "../BurgerPrefab.js";
// import BlockPrefab from "../BlockPrefab.js";
// /* START-USER-IMPORTS */
// /* END-USER-IMPORTS */

// export default class Level extends Phaser.Scene {

// 	constructor() {
// 		super("Level");

// 		/* START-USER-CTR-CODE */
// 		// Write your code here.
// 		/* END-USER-CTR-CODE */
// 	}

// 	/** @returns {void} */
// 	editorCreate() {

// 		// upKey
// 		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

// 		// downKey
// 		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

// 		// leftKey
// 		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

// 		// rightKey
// 		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

// 		// dino
// 		const dino = this.physics.add.image(634, 377, "dino");
// 		dino.scaleX = 0.75;
// 		dino.scaleY = 0.75;
// 		dino.body.collideWorldBounds = true;
// 		dino.body.setSize(250, 250, false);

// 		// arcadeimage_1
// 		const arcadeimage_1 = new FoodPrefab(this, 178, 546);
// 		this.add.existing(arcadeimage_1);
// 		arcadeimage_1.scaleX = 0.6;
// 		arcadeimage_1.scaleY = 0.6;
// 		arcadeimage_1.tintTopLeft = 12502015;
// 		arcadeimage_1.tintTopRight = 12502015;
// 		arcadeimage_1.tintBottomLeft = 12502015;
// 		arcadeimage_1.tintBottomRight = 12502015;

// 		// foodPrefab
// 		const foodPrefab = new FoodPrefab(this, 1120, 525);
// 		this.add.existing(foodPrefab);

// 		// ui
// 		const ui = this.add.layer();

// 		// scoreText
// 		const scoreText = this.add.text(10, 10, "", {});
// 		scoreText.text = "Score: 0";
// 		scoreText.setStyle({ "fontSize": "48px" });
// 		ui.add(scoreText);

// 		// burgerPrefab
// 		const burgerPrefab = new BurgerPrefab(this, 652, 89);
// 		this.add.existing(burgerPrefab);

// 		// tile_0000
// 		const tile_0000 = new BlockPrefab(this, 364, 534);
// 		this.add.existing(tile_0000);

// 		// tile
// 		const tile = new BlockPrefab(this, 902, 549);
// 		this.add.existing(tile);

// 		// tile_1
// 		const tile_1 = new BlockPrefab(this, 899, 177);
// 		this.add.existing(tile_1);

// 		// tile_2
// 		const tile_2 = new BlockPrefab(this, 348.39477072196263, 171.78084593533595);
// 		this.add.existing(tile_2);

// 		// lists
// 		const food = [arcadeimage_1, foodPrefab, burgerPrefab];
// 		const wall = [tile_2, tile_1, tile, tile_0000];

// 		// collider
// 		this.physics.add.collider(dino, wall);

// 		// collider_1
// 		this.physics.add.overlap(dino, food, this.eatFruit, undefined, this);

// 		this.dino = dino;
// 		this.scoreText = scoreText;
// 		this.upKey = upKey;
// 		this.downKey = downKey;
// 		this.leftKey = leftKey;
// 		this.rightKey = rightKey;
// 		this.food = food;
// 		this.wall = wall;

// 		this.events.emit("scene-awake");
// 	}

// 	/** @type {Phaser.Physics.Arcade.Image} */
// 	dino;
// 	/** @type {Phaser.GameObjects.Text} */
// 	scoreText;
// 	/** @type {Phaser.Input.Keyboard.Key} */
// 	upKey;
// 	/** @type {Phaser.Input.Keyboard.Key} */
// 	downKey;
// 	/** @type {Phaser.Input.Keyboard.Key} */
// 	leftKey;
// 	/** @type {Phaser.Input.Keyboard.Key} */
// 	rightKey;
// 	/** @type {Array<FoodPrefab|BurgerPrefab>} */
// 	food;
// 	/** @type {BlockPrefab[]} */
// 	wall;

// 	/* START-USER-CODE */

// 	// Write more your code here
// 	playerVelocity = 200;
// 	score = 0;

// 	create() {

// 		this.editorCreate();
// 	}

// 	update() {
// 		if (this.upKey.isDown) {
// 			// this.dino.y -= 4;
// 			this.dino.setVelocityY(this.playerVelocity * -1);
// 		} else if (this.downKey.isDown) {
// 			// this.dino.y += 4;
// 			this.dino.setVelocityY(this.playerVelocity);
// 		} else {
// 			this.dino.setVelocityY(0);
// 		}

// 		if (this.leftKey.isDown) {
// 			//this.dino.x -= 4;
// 			this.dino.setVelocityX(this.playerVelocity * -1);
// 		} else if (this.rightKey.isDown) {
// 			// this.dino.x += 4;
// 			this.dino.setVelocityX(this.playerVelocity);
// 		} else {
// 			this.dino.setVelocityX(0);
// 		}
// 	}

// 	eatFruit(dino, food) {
// 		food.disableBody();
// 		food.destroy();
// 		this.score += 1;
// 		this.scoreText.setText(`Score: ${this.score}`);
// 	}

// 	/* END-USER-CODE */
// }

// /* END OF COMPILED CODE */

// // You can write more code here

// You can write more code here

/* START OF COMPILED CODE */

import FoodPrefab from "../FoodPrefab.js";
import BurgerPrefab from "../BurgerPrefab.js";
import BlockPrefab from "../BlockPrefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // upKey
    const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    // downKey
    const downKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );

    // leftKey
    const leftKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );

    // rightKey
    const rightKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );

    // dino
    const dino = this.physics.add.image(634, 377, "dino");
    dino.scaleX = 0.75;
    dino.scaleY = 0.75;
    dino.body.collideWorldBounds = true;
    dino.body.setSize(250, 250, false);

    // arcadeimage_1
    const arcadeimage_1 = new FoodPrefab(this, 178, 546);
    this.add.existing(arcadeimage_1);
    arcadeimage_1.scaleX = 0.6;
    arcadeimage_1.scaleY = 0.6;
    arcadeimage_1.tintTopLeft = 12502015;
    arcadeimage_1.tintTopRight = 12502015;
    arcadeimage_1.tintBottomLeft = 12502015;
    arcadeimage_1.tintBottomRight = 12502015;

    // foodPrefab
    const foodPrefab = new FoodPrefab(this, 1120, 525);
    this.add.existing(foodPrefab);

    // ui
    const ui = this.add.layer();

    // scoreText
    const scoreText = this.add.text(10, 10, "", {});
    scoreText.text = "Score: 0";
    scoreText.setStyle({ fontSize: "48px" });
    ui.add(scoreText);

    // burgerPrefab
    const burgerPrefab = new BurgerPrefab(this, 652, 89);
    this.add.existing(burgerPrefab);

    // tile_0000
    const tile_0000 = new BlockPrefab(this, 364, 534);
    this.add.existing(tile_0000);

    // tile
    const tile = new BlockPrefab(this, 902, 549);
    this.add.existing(tile);

    // tile_1
    const tile_1 = new BlockPrefab(this, 899, 177);
    this.add.existing(tile_1);

    // tile_2
    const tile_2 = new BlockPrefab(
      this,
      348.39477072196263,
      171.78084593533595
    );
    this.add.existing(tile_2);

    // lists
    const food = [arcadeimage_1, foodPrefab, burgerPrefab];
    const wall = [tile_2, tile_1, tile, tile_0000];

    // collider
    this.physics.add.collider(dino, wall);

    // collider_1
    this.physics.add.overlap(dino, food, this.eatFruit, undefined, this);

    this.dino = dino;
    this.scoreText = scoreText;
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.food = food;
    this.wall = wall;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.Physics.Arcade.Image} */
  dino;
  /** @type {Phaser.GameObjects.Text} */
  scoreText;
  /** @type {Phaser.Input.Keyboard.Key} */
  upKey;
  /** @type {Phaser.Input.Keyboard.Key} */
  downKey;
  /** @type {Phaser.Input.Keyboard.Key} */
  leftKey;
  /** @type {Phaser.Input.Keyboard.Key} */
  rightKey;
  /** @type {Array<FoodPrefab|BurgerPrefab>} */
  food;
  /** @type {BlockPrefab[]} */
  wall;

  /* START-USER-CODE */

  // Write more your code here
  playerVelocity = 200;
  score = 0;

  //   create() {
  //     this.editorCreate();

  //     // Add touch areas for mobile controls
  //     this.createTouchControls();
  //   }
  create() {
    this.editorCreate();

    // Add button graphics
    const buttonSize = 50; // Size of the buttons
    const buttonSpacing = 10; // Space between buttons

    const screenWidth = this.scale.width;
    const screenHeight = this.scale.height;

    const buttonY = screenHeight - buttonSize - buttonSpacing;

    // Right Button
    this.rightButton = this.add.rectangle(
      screenWidth - buttonSize - buttonSpacing,
      buttonY,
      buttonSize,
      buttonSize,
      0x00ff00
    );
    this.add
      .image(screenWidth - buttonSize - buttonSpacing, buttonY, "arrow-right")
      .setDisplaySize(buttonSize * 0.6, buttonSize * 0.6);

    // Left Button
    this.leftButton = this.add.rectangle(
      screenWidth - 2 * (buttonSize + buttonSpacing),
      buttonY,
      buttonSize,
      buttonSize,
      0x00ff00
    );
    this.add
      .image(
        screenWidth - 2 * (buttonSize + buttonSpacing),
        buttonY,
        "arrow-left"
      )
      .setDisplaySize(buttonSize * 0.6, buttonSize * 0.6);

    // Up Button
    this.upButton = this.add.rectangle(
      screenWidth - buttonSize - buttonSpacing,
      buttonY - (buttonSize + buttonSpacing),
      buttonSize,
      buttonSize,
      0x00ff00
    );
    this.add
      .image(
        screenWidth - buttonSize - buttonSpacing,
        buttonY - (buttonSize + buttonSpacing),
        "arrow-up"
      )
      .setDisplaySize(buttonSize * 0.6, buttonSize * 0.6);

    // Down Button
    this.downButton = this.add.rectangle(
      screenWidth - buttonSize - buttonSpacing,
      buttonY + (buttonSize + buttonSpacing),
      buttonSize,
      buttonSize,
      0x00ff00
    );
    this.add
      .image(
        screenWidth - buttonSize - buttonSpacing,
        buttonY + (buttonSize + buttonSpacing),
        "arrow-down"
      )
      .setDisplaySize(buttonSize * 0.6, buttonSize * 0.6);

    // Enable interactivity for buttons
    this.rightButton.setInteractive();
    this.leftButton.setInteractive();
    this.upButton.setInteractive();
    this.downButton.setInteractive();

    this.rightButton.on("pointerdown", () => {
      this.dino.setVelocityX(this.playerVelocity);
    });
    this.leftButton.on("pointerdown", () => {
      this.dino.setVelocityX(-this.playerVelocity);
    });
    this.upButton.on("pointerdown", () => {
      this.dino.setVelocityY(-this.playerVelocity);
    });
    this.downButton.on("pointerdown", () => {
      this.dino.setVelocityY(this.playerVelocity);
    });

    this.input.on("pointerup", () => {
      this.dino.setVelocity(0, 0);
    });
  }

  update() {
    if (this.upKey.isDown || this.upPressed) {
      this.dino.setVelocityY(this.playerVelocity * -1);
    } else if (this.downKey.isDown || this.downPressed) {
      this.dino.setVelocityY(this.playerVelocity);
    } else {
      this.dino.setVelocityY(0);
    }

    if (this.leftKey.isDown || this.leftPressed) {
      this.dino.setVelocityX(this.playerVelocity * -1);
    } else if (this.rightKey.isDown || this.rightPressed) {
      this.dino.setVelocityX(this.playerVelocity);
    } else {
      this.dino.setVelocityX(0);
    }
  }

  eatFruit(dino, food) {
    food.disableBody();
    food.destroy();
    this.score += 1;
    this.scoreText.setText(`Score: ${this.score}`);
  }

  createTouchControls() {
    // Define button dimensions and positions
    const buttonSize = 100;
    const buttonAlpha = 0.5;

    // Left button
    const leftButton = this.add.rectangle(
      50,
      this.cameras.main.height - 50,
      buttonSize,
      buttonSize,
      0x0000ff,
      buttonAlpha
    );
    leftButton.setInteractive();
    leftButton.on("pointerdown", () => (this.leftPressed = true));
    leftButton.on("pointerup", () => (this.leftPressed = false));
    leftButton.on("pointerout", () => (this.leftPressed = false));

    // Right button
    const rightButton = this.add.rectangle(
      150,
      this.cameras.main.height - 50,
      buttonSize,
      buttonSize,
      0x0000ff,
      buttonAlpha
    );
    rightButton.setInteractive();
    rightButton.on("pointerdown", () => (this.rightPressed = true));
    rightButton.on("pointerup", () => (this.rightPressed = false));
    rightButton.on("pointerout", () => (this.rightPressed = false));

    // Up button
    const upButton = this.add.rectangle(
      100,
      this.cameras.main.height - 150,
      buttonSize,
      buttonSize,
      0x0000ff,
      buttonAlpha
    );
    upButton.setInteractive();
    upButton.on("pointerdown", () => (this.upPressed = true));
    upButton.on("pointerup", () => (this.upPressed = false));
    upButton.on("pointerout", () => (this.upPressed = false));

    // Down button
    const downButton = this.add.rectangle(
      100,
      this.cameras.main.height - 50,
      buttonSize,
      buttonSize,
      0x0000ff,
      buttonAlpha
    );
    downButton.setInteractive();
    downButton.on("pointerdown", () => (this.downPressed = true));
    downButton.on("pointerup", () => (this.downPressed = false));
    downButton.on("pointerout", () => (this.downPressed = false));
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
