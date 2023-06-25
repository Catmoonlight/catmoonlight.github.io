class CursorObject extends PictureObject {

    constructor(pic, state, name) {
        super(pic);
        this.layer = 1000;
        this._state = state;
        this._name = name;
    }

    get state() {
        return this._state
    }

    get name() {
        return this._name
    }

    onUpdate(delta) {
        super.onUpdate(delta);
    }

    clickEvent(x, y) {
        super.clickEvent(x, y);
        this.x = x
        this.y = y
    }

    hoverEvent(x, y) {
        this.x = x
        this.y = y
    }
}