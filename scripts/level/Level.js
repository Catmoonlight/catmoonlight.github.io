class Dollars {
    constructor(goal) {
        this.value = 0;
        this.goal = goal;
        document.getElementById("money").innerText = `${0}$ / ${goal}$`
    }

    increase(value) {
        this.value += value;
        document.getElementById("money").innerText = `${this.value}$ / ${this.goal}$`
    }
}

class Level {
    constructor(settings) {
        this.settings = settings;
        this.dollars = new Dollars(settings.goal);

        document.getElementById("hint").innerText = "First, take some bread";
    }

    get isFinished() {
        if (this.clientManager != null)
            return this.clientManager.isFinished;
        return false;
    }

    start() {
        this.cursor = new Cursor();
        this.initBackground();
        this.initSingletons();
        this.initIngredients();
        this.clientManager = new ClientManager(this.settings, this.cursor, this.dollars);
        this.clientManager.startGeneration();
    }

    initBackground() {
        const background = new PictureObject(new Pic("images/background.png", 640, 480));
        background.layer = -100;

        const working_table = new PictureObject(new Pic("images/front.png", 640, 400));
        working_table.layer = -10;
        working_table.y = 80;
    }

    initSingletons() {
        new TrashBin(this.cursor);
        new Bread(this.cursor);
        new Oven(this.cursor);
    }

    initIngredients() {
        for (const desc of c_ingredients) {
            const ingredient = new Ingredient(
                new Pic(desc.defaultPath, 50, 25),
                desc.name,
                () => new CursorObject(
                    new Pic(desc.pickedPath, 50, 25),
                    desc.state,
                    desc.name,
                ),
                this.cursor,
            )
            ingredient.x = desc.x;
            ingredient.y = desc.y;
        }

    }

}