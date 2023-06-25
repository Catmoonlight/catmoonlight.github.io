class PictureObject extends GameObject {

    constructor(pic) {
        super();

        this.pic = pic;
        this.isHovered = false;
    }

    setSize(width, height) {
        this.pic.width = width;
        this.pic.height = height;
    }

    get width() { return this.pic.width }
    get height() { return this.pic.height }

    draw(ctx) {
        super.draw(ctx);
        ctx.drawImage(this.pic.as_image, this.x, this.y, this.width, this.height);
    }

    onClick() {}

    clickEvent(x, y) {
        if (this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height) {
            this.onClick()
        }
    }

    hoverEvent(x, y) {
        this.isHovered = this.x <= x && x <= this.x + this.width && this.y <= y && y <= this.y + this.height;
    }
}