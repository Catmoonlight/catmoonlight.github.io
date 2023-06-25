class Oven extends SelectableObject {

    constructor(cursor) {
        super(new Pic(
            "images/other/real_russian_pechka.png",
            160,
            130
        ));
        this.x = 160;
        this.y = 335;
        this.cursor = cursor
    }

    onClick() {
        if (!(this.cursor.inside instanceof PickedSandwich))
            return;
        if (this.cursor.inside.state !== 1)
            return;

        this.cursor.inside.nextState();
        this.cursor.inside.filter_bonus = 200;
        document.getElementById("hint").innerText = "Add vegetables and sauces, then give client"

    }

}