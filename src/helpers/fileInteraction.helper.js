const fs = require('fs');
const util = require('util');
const path = require('path');

class FileInteractionHelper {
  constructor() {
    this.readFile = util.promisify(fs.readFile);
    this.writeFile = util.promisify(fs.writeFile);
    this.file = path.resolve(__dirname, '..', '..', 'projects.json');
  }

  async getFile() {
    const items = await this.readFile(this.file, 'utf8');
    return JSON.parse(items);
  }

  async createFile(item) {
    await this.writeFile(this.file, JSON.stringify(item));
    const items = await this.getFile();
    return items;
  }
}

module.exports = new FileInteractionHelper();