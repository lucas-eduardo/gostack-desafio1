const fileInteraction = require('../helpers/fileInteraction.helper');

class TasksController {
  async store(req, res) {
    const { id } = req.params;
    const { title } = req.body;
    const projects = await fileInteraction.getFile();
    const project = projects.find(project => project.id === id.toString());
    project.tasks.push(title);
    await fileInteraction.createFile(projects);
    return res.json(project);
  }
}

module.exports = new TasksController();
