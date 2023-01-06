const soldier = {
  name: Haizenberg,
  health: 10,
  military: {
    model: Javelin,
    ammunition: 30,
  },
  supply: 3,

  fire: function () {
    if (this.ammunition > 0) {
      this.ammunition--;
      console.log("Бах-бах");
    } else {
      console.log("обойма пуста. Перезаредитесь");
    }
  },

  recharge: function () {
    if (this.supply > 0) {
      this.ammunition = 30 && this.supply--;
    }
  },

  hurt: function () {
    if (this.health > 0) {
      this.health--;
    } else {
      console.log("Ты проиграл");
    }
  },
};
