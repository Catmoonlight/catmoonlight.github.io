class Cursor {

    constructor() {
        this.clearInside()
    }

    get is_empty() {
        return this.hanging == null
    }

    get inside() {
        return this.hanging
    }

    clearInside() {
        if (!this.is_empty) {
            this.hanging.delete()
        }
        this.hanging = null
    }

    setInside(cursorObject) {
        if (!this.is_empty) {
            this.hanging.delete()
        }
        this.hanging = cursorObject
    }



}