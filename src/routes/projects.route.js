const { Router } = require('express');

const projectsController = require('../controllers/projects.controller');
const tasksContrller = require('../controllers/tasks.controller');
const verifyExistIdMiddleware = require('../middlewares/verifyExistIdProject.middleware');

const router = Router();

router.route('/projects')
  .post(projectsController.store)
  .get(projectsController.index);

router.route('/projects/:id')
  .put(verifyExistIdMiddleware, projectsController.update)
  .delete(verifyExistIdMiddleware, projectsController.destroy);

router.route('/projects/:id/tasks')
  .post(verifyExistIdMiddleware, tasksContrller.store);

module.exports = router;