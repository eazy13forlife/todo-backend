const express = require("express");
require("./db/mongoose.js");
const path = require("path");

const usersRouter = require("./routers/users.js");
const tasksRouter = require("./routers/tasks.js");
const notesRouter = require("./routers/notes.js");
const projectsRouter = require("./routers/projects.js");
const User = require("./models/user.js");
const Task = require("./models/task.js");
//creates our express application
const app = express();

//set up our port
const port = process.env.PORT || 3000;

//set up public path
const publicPath = path.join(__dirname, "../public/");

//set up express to use public directory
//app.use(express.static(publicPath));

//server parses incoming json received
app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);
app.use(notesRouter);
app.use(projectsRouter);

app.listen(port, () => {
  console.log(`Your express server is running on port ${port}.`);
});