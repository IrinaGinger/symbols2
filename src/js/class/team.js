export default class Team {
    constructor() {
        this.members = new Set();
    }

    *[Symbol.iterator]() {
        let current = 0;
        let members = this.members.values();
        while (current < this.members.size) {
          yield members.next().value;
          current++;
        }
        return undefined;
    }

    add(character) {
        if (this.members.has(character)) {
            return new Error('Такой персонаж в команде уже есть');
        }
        this.members.add(character);        
    }

    addAll(...characters) {
        characters.forEach((item) => {
            this.members.add(item);
        });
    } 
}