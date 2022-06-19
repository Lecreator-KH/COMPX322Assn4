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
	router.post("/create/",function(req,res) {
		projectsController.createProject(req,res);
	});
	//Retrive All Project
	/**
   	* GET/api/projects
   	*/
	router.get("/projects/",function(req,res) {
		projectsController.retrieveAllProject(req,res);
	});
	//Retrieve Project by ID
	router.get("/projects/:id",function(req,res) {
		projectsController.retrieveProjectID(req,res);
	});
	//Retrieve Project by Name
	router.get("/projects/get/:projectName",function(req,res) {
		projectsController.retrieveProjectName(req,res);
	});
	//Update Project By ID
	router.get("/update/:id",function(req,res) {
		projectsController.updateProjectID(req,res);
	});
	//Delete Project By ID
	router.get("/delete/:id",function(req,res) {
		projectsController.deleteProjectID(req,res);
	});
	//Delete All Project
	router.get("/delete/",function(req,res) {
		projectsController.deleteProjectAll(req,res);
	});

	// Now tell express to use this router, prefixed with /api
	app.use("/api",router);
}