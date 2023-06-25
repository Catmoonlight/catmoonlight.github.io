class Bread extends SelectableObject {

    constructor(cursor) {
        super(new Pic(
            "images/other/hleb.png",
            140,
            90
        ));
        this.x = 10;
        this.y = 355;
        this.cursor = cursor
    }

    onClick() {
        if (this.cursor.is_empty) {
            this.cursor.setInside(new PickedSandwich())
            document.getElementById("hint").innerText = "Click to add meat and cheese, then put to oven"
        }
    }

}