class Pic {

    constructor(picture, width, height) {
        this.width = width
        this.height = height

        if (typeof picture === "string") {
            this.as_image = new Image();
            this.as_image.src = picture;

            this.as_image.onload = () => {
                if (this.height === undefined)
                    this.height = this.as_image.height;
                if (this.width === undefined)
                    this.width = this.as_image.width;
            }

        } else {
            this.as_image = picture;
        }
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

}