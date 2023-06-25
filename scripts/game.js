class Game {

    constructor() {
        this.onLevel = false;
    }

    startLevel(levelName) {
        allObjects = [];
        if (this.onLevel) {
            console.log("Can't start level")
            return;
        }

        for (const settings of level_settings) {
            if (settings.name === levelName) {
                this.level = new Level(settings);
                this.onLevel = true;
                this.level.start();
            }
        }
    }

    startMenu() {
        document.getElementById("hint").innerText = "";
        document.getElementById("money").innerText = "";
        document.getElementById("time").innerText = "";

        allObjects = [];
        this.level = undefined;
        this.onLevel = false;

        const background = new PictureObject(new Pic("images/background.png", 640, 480));
        background.layer = -100;
        new LevelStarter(new Pic("images/other/1.png", 100, 100), 160, 50, () => this.startLevel("1"));
        new LevelStarter(new Pic("images/other/2.png", 100, 100), 380, 50, () => this.startLevel("2"));
        new LevelStarter(new Pic("images/other/3.png", 100, 100), 160, 300, () => this.startLevel("3"));
        new LevelStarter(new Pic("images/other/4.png", 100, 100), 380, 300, () => this.startLevel("4"));

    }

    process() {
        if (this.onLevel && this.level.isFinished) {
            setTimeout(() => this.startMenu(), 1500);
            if (this.level.dollars.value >= this.level.dollars.goal)
                document.getElementById("hint").innerText = "You're great!";
            else
                document.getElementById("hint").innerText = "Better next time!";


        }
    }
}