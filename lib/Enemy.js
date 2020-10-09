const Potion = require('../lib/Potion');

const Character = require('./Character');

class Enemy extends Character {
    constructor(name, weapon) {
        // call to parent constructor
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();
    }
    getDescription() {
        return `A ${this.name} weilding a ${this.weapon} has appeared!`;
    }
};


module.exports = Enemy;