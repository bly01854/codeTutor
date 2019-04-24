const express = require("express");
const projectRouter = express.Router();
const projectController = require("../server/controllers/project");
const verifyToken = require("../server/auth/VerifyToken");

// Retrieves Project
// Parameter: Id
projectRouter.get("/:id", verifyToken, projectController.getProjectById)

// Retrieves Projects owned by a particular user
// Parameter: userId
projectRouter.get("/projects/:userId", verifyToken, projectController.getProjectsByUserId)

// Retrieves All Projects
projectRouter.get("/get/all", verifyToken, projectController.getAllProjects)

// Creates a Project
// Parameters: name, userId (grabbed from token)
projectRouter.post("/create", verifyToken, projectController.create)

// Deletes a Project and its files
// Parameter: projectId, userId (grabbed from token)
projectRouter.post("/delete", verifyToken, projectController.delete)

// Updates a Project
// Parameter: projectName, description
projectRouter.post("/update", verifyToken, projectController.update)

// Favorites a Project
// Parameter: Id, userId(grabbed from token)
projectRouter.get("/favorite/:id", verifyToken, projectController.favorite)

// Votes on a Project
// Parameter: Id, userId(grabbed from token)
projectRouter.get("/vote/:id", verifyToken, projectController.vote)

module.exports = projectRouter;