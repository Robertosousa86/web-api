// classe responsável por manipular os dados
const { readFile, writeFile } = require("fs/promises");

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }
  // Lê o conteúdo atual do arquivo(database/data.json)
  async _currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }
  // Retorna os dados(JSON) a partir do Id
  async find(itemId) {
    const all = await this._currentFileContent();
    if (!itemId) return "not found";

    return all.find(({ id }) => itemId === id);
  }
  // Cria um novo 'personagem' reescrevendo o arquivo a partir do arquivo atual
  async create(data) {
    const currentFile = await this._currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));
    // retorna o id que foi criado
    return data.id;
  }

  async delete(itemId) {
    const currentFile = await this._currentFileContent();
    currentFile.pop(itemId);

    return itemId;
  }
}

module.exports = HeroRepository;
/*
const heroRepository = new HeroRepository({
  file: "./../../database/data.json",
});
*/
