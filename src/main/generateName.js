class GenerateName {

  constructor() {
    this.names = [
      'Mariana',
      'Gillian',
      'Luz',
      'Karly',
      'Edith',
      'Lila',
      'Addison',
      'Yaritza',
      'Lauryn',
      'Monique',
      'Avery',
      'London',
      'Hanna',
      'Isabela',
      'Annie',
    ];
  }

  getResultName() {
    return `${this.getRandomName()} ${this.getRandomAdjective()}`;
  }

  getRandomName() {
    const randomIndex = Math.floor(Math.random() * (this.names.length + 1));
    return this.names[randomIndex];
  }

  getRandomAdjective() {
    return '';
  }
}

module.exports = GenerateName;