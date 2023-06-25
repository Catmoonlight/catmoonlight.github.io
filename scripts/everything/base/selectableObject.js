class SelectableObject extends PictureObject {

    draw(ctx) {
        super.draw(ctx)

        if (this.isHovered) {
            ctx.shadowColor = "white";
            ctx.shadowBlur = 0;

            for (let x = -2; x <= 2; x++) {
                for (let y = -2; y <= 2; y++) {
                    ctx.shadowOffsetX = x;
                    ctx.shadowOffsetY = y;

                    ctx.drawImage(this.pic.as_image, this.x, this.y, this.width, this.height);
                }
            }

            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
        }
    }

}