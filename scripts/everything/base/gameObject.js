class GameObject {

    constructor() {
        allObjects.push(this);
        this.x = 0;
        this.y = 0;
        this._layer = 0;
        this.is_deleted = false;
    }

    get layer() {
        return this._layer;
    }

    set layer(value) {
        this._layer = value;
    }

    onUpdate(delta) {}

    draw(ctx) {}

    clickEvent(x, y) {}

    hoverEvent(x, y) {}

    delete() {
        this.is_deleted = true;
    }
}