const fileInteraction = require("../helpers/fileInteraction.helper");

module.exports = async (req, res, next) => {
  const { id } = req.params
  const projects = await fileInteraction.getFile();
  const project = projects.find(project => project.id === id.toString());
  if (!!project) {
    return next();
  }
  return res.status(400).json({ error: 'Id not found' });
}