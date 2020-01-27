const fileInteraction = require('../helpers/fileInteraction.helper');

class ProjectsController {
  async index(req, res) {
    const projects = await fileInteraction.getFile();
    return res.json(projects);
  }

  async store(req, res) {
    const projects = await fileInteraction.getFile();
    projects.push(req.body);
    await fileInteraction.createFile(projects);
    return res.json(projects);
  }

  async update(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const projects = await fileInteraction.getFile();
    const update = projects.find(project => project.id === id.toString());
    update.title = title;
    await fileInteraction.createFile(projects);
    return res.json(projects);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const projects = await fileInteraction.getFile();
    const index = projects.map(project => project.id).indexOf(id.toString());
    projects.splice(index, 1);
    await fileInteraction.createFile(projects);
    return res.json(projects);
  }
}

module.exports = new ProjectsController();