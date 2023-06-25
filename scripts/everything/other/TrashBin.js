class TrashBin extends SelectableObject {

    constructor(cursor) {
        super(new Pic(
            "images/other/trash.png",
            140,
            90
        ));
        this.x = 485;
        this.y = 355;
        this.cursor = cursor
    }

    onClick() {
        // if (this.cursor.inside instanceof PickedSandwich) {
        //     console.log(this.cursor.inside.names_in);
        // }
        this.cursor.clearInside()
        document.getElementById("hint").innerText = "Click to add meat and cheese, then put to oven";
    }

}