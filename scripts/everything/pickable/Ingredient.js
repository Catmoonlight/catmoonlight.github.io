class Ingredient extends SelectableObject {

    constructor(pic, name, picked_object_factory, cursor) {
        super(pic);
        this.factory = picked_object_factory;
        this.cursor = cursor;
        this.name = name;
    }

    onClick() {
        if (!this.cursor.is_empty && this.cursor.inside instanceof PickedSandwich)
            this.cursor.inside.maybe_append_object(this.factory())
    }

}