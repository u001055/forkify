import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem (id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);
        //console.dir(this.items.id);
    }

    updateCount (id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }

    deleteAllItems () {
        for (let i = 0; i < this.items.length; i++) {
            this.deleteItem(this.items[i].id);
        }
        
    }
}