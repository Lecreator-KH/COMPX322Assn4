const express = require("express");

module.exports = app => {
	const projectsController = require("../controllers/projects.controller");

	// TODO: complete the code as per the instructions given in Assignment 4
	// Creating Router() object
	let router = express.Router();

	// Provides general logging function
	router.use(function(req,res,next) {
		console.log("/" + req.method);
		next();
	});

	// Provide all routes here
	//Create Project
	/**
	* POST /api/projects
	* 
	* 200 status request body (JSON):
	*     {
	*        "projectname": "123",
	*        "projectdesc": "123",
	*        "startdate": "2001-01-01 0100",
	*        "enddate": "2001-02-01 1900"
	*      }
	* 
	* 404 status request body (JSON): {}
	*/
	router.post("/create/", projectsController.createProject());
	//Retrive All Project
	/**
   	* GET/api/projects
   	*/
	router.get("/projects/", projectsController.retrieveAllProject());
	//Retrieve Project by Name
	router.get("/projects/project", projectsController.retrieveProjectName());
	//Retrieve Project by ID
	router.get("/projects/:id", projectsController.retrieveProjectID());
	//Update Project By ID
	router.put("/update/:id", projectsController.updateProjectID());
	//Delete Project By ID
	router.delete("/delete/:id", projectsController.deleteProjectID());
	//Delete All Project
	router.delete("/delete/", projectsController.deleteProjectAll());

	// Now tell express to use this router, prefixed with /api
	app.use("/api",router);
}