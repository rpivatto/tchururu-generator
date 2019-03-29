const generateName = require('../../src/main/generateName');
let generator;
describe('generateName', () => {

  beforeAll(() => {
    generator = new generateName();
  });

  it('should generate a random name', () => {
    expect(generator.getRandomName()).toBeTruthy();
  });

  it('should generate a random name with one name and one adjective', () => {
    const spyGetRandomName = jest.spyOn(generator, 'getRandomName');
    const spyGetResultName = jest.spyOn(generator, 'getResultName');

    const generatedName = generator.getResultName();
    expect(generatedName).toBeTruthy();

    expect(spyGetRandomName).toHaveBeenCalledTimes(1);
    expect(spyGetResultName).toHaveBeenCalledTimes(1);
  });

});