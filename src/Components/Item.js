import { v4 as uuidv4 } from 'uuid';

export default class Item {
    constructor(name, desc) {
        this.id = uuidv4();
        this.name = name;
        this.description = desc || '';
        this.quantity = 1;
    }
}