const generateName = require('./src/main/generateName');

const generator = new generateName();

for (let i = 1; i <= 10; i++) {
  console.log(`Name Generated (${i}): ${generator.getResultName()}`);
}
