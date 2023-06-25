class PickedSandwich extends CursorObject {
    constructor(pic=new Pic("images/picked/sandwich.png", 50, 25)) {
        super(pic, 1, "sandwich")
        this.all_pics = [pic];
        this.names_in = [];
        this.filter_bonus = 0;
    }

    nextState() {
        this._state += 1;
    }

    maybe_append_object(cursor_object) {
        if (cursor_object.state === this.state && !this.names_in.includes(cursor_object.name)) {
            this.all_pics.push(cursor_object.pic);
            this.names_in.push(cursor_object.name);
        } else if (this.names_in.includes(cursor_object.name)) {
            document.getElementById("hint").innerText = "You already have this in sandwich!";
        } else if (cursor_object.state > this.state) {
            document.getElementById("hint").innerText = "Put it in oven first!";
        }
        cursor_object.delete();
    }

    onUpdate(delta) {
        this.filter_bonus = Math.max(this.filter_bonus - delta / 4.0, 0)
    }

    draw(ctx) {
        ctx.filter = `brightness(${100 + this.filter_bonus}%) saturate(${100 + this.filter_bonus}%)`;
        for (const i in this.all_pics) {
            ctx.drawImage(this.all_pics[i].as_image, this.x, this.y - Number(i) * 2, this.width, this.height);
        }
        ctx.filter = "none";
    }

}