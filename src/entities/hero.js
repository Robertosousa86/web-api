class Hero {
  constructor({ id, name, age, attribute }) {
    this.id = Math.floor(Math.random() * 100) + Date.now();
    this.name = name;
    this.age = age;
    this.attribute = attribute;
  }

  isValid() {
    // Guarda os valores das propriedades
    const propertyNames = Object.getOwnPropertyNames(this);

    const amountInvalid = propertyNames
      .map((property) =>
        // !! transforma o valor do parametro em buleano, se caso for rue retorna null, se não retorna is missing
        !!this[property] ? null : `${property} is missing`
      )
      // retornará vaziu, só retornará um valor quando estiverem null ou missing
      .filter((item) => !!item);

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid,
    };
  }
}

module.exports = Hero;

/*
const hero = new Hero({
  age: 300,
  name: "Leão",
  attribute: "intelligence",
});

console.log("Valid", hero.isValid());
console.log("Valid", hero);
*/
