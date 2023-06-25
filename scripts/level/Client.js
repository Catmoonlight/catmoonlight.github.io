class Client extends SelectableObject {

    constructor(pic, sandwich_desc, cursor, dollars) {
        super(pic);
        this.dollars = dollars;
        this.cursor = cursor;
        this.layer = -50;
        this.active = true;
        this.sandwich_desc = sandwich_desc;
        this.pics = [];
        for (const desc of sandwich_desc) {
            this.pics.push(new Pic(desc.defaultPath, 50, 22))
        }
    }

    onClick() {
        if (!(this.cursor.inside instanceof PickedSandwich))
            return;
        if (this.cursor.inside.names_in.length !== this.sandwich_desc.length) {
            this.defer_go_away(false);
            return;
        }

        for (const ing of this.sandwich_desc) {
            if (!(this.cursor.inside.names_in.includes(ing.name))) {
                this.defer_go_away(false);
                return;
            }
        }
        this.defer_go_away(true);
    }

    defer_go_away(happiness) {
        this.cursor.clearInside()
        this.happy = happiness;
        if (happiness) {
            document.getElementById("hint").innerText = "Well done!";
            this.dollars.increase(5 + 3 * this.sandwich_desc.length);
        }
        else {
            document.getElementById("hint").innerText = "You failed :(";
            this.dollars.increase(-5);
        }
        this.active = false;
        setTimeout(() => this.delete(), 2000);
    }

    draw(ctx) {

        if (this.active) {
            super.draw(ctx);

            ctx.fillStyle = 'white';
            ctx.fillRect(this.x + this.width - 20, this.y - 40, 70, 170);
            for (const i in this.sandwich_desc) {
                ctx.drawImage(
                    this.pics[i].as_image,
                    this.x + this.width - 10,
                    this.y - 40 + 19 * i,
                    this.pics[i].width,
                    this.pics[i].height
                );
            }
        } else {
            const color = this.happy ? "green" : "red";
            ctx.filter = `drop-shadow(-5px 0px 6px ${color})`
            super.draw(ctx);
            ctx.filter = "none"
        }
    }

}