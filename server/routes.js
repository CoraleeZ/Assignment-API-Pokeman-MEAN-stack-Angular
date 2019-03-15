const controller = require('./controllers');

module.exports = app => {
    app
        .get('/api/tasks', controller.getAllTasks)
        .get('/api/tasks/:id', controller.getOneTask)
        .post('/api/tasks', controller.createTask)
        .put('/api/tasks/:id', controller.updateTask)
        .delete('/api/tasks/:id', controller.deleteTask);
}