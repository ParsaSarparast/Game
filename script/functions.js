class Game {
    constructor(questions) {
        this.qs = questions;
        this.c = -1;
    }

    getNext() {
        this.c++;
        return this.qs[this.c];
    }

}