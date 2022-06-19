// Kevin Han 1521885
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
	/*
	POST localhost:3000/api/create
	
	200 status request body (JSON):
	{
		"projectname": "123",
		"projectdesc": "123",
		"startdate": "2001-01-01 0100",
		"enddate": "2001-02-01 1900"
	}
	
	404 status request body (JSON): {}
	*/
	router.post("/projects",function(req,res) {
		projectsController.createProject(req,res);
	});
	//Retrive All Project
	/*
   	GET localhost:3000/api/projects
   	*/
	router.get("/projects",function(req,res) {
		projectsController.retrieveAllProject(req,res);
	});
	//Retrieve Project by ID
	/*
   	GET localhost:3000/api/projects/1 (200 status code)
   	GET localhost:3000/api/projects/1000 (404 status code)
   	*/
	router.get("/projects/:id",function(req,res) {
		projectsController.retrieveProjectID(req,res);
	});
	//Retrieve Project by Name
	/*
   	GET localhost:3000/api/projects/project/CRM%20System (200 status code)
   	GET localhost:3000/api/projects/project/IDK (404 status code)
   	*/
	router.get("/projects/project/:projectName",function(req,res) {
		projectsController.retrieveProjectName(req,res);
	});
	//Update Project By ID
	/*
	PUT localhost:3000/api/projects/1 (200 status code)
    PUT localhost:3000/api/projects/1000 (404 status code)

	200 status request body (JSON): {
		"projectName": "1234",
		"projectDesc": "1234",
		"startDate": "2001-01-01 0100",
		"endDate": "2001-02-01 1900"
	}
	404 status request body (JSON): {}
	*/
	router.put("/projects/:id",function(req,res) {
		projectsController.updateProjectID(req,res);
	});
	//Delete Project By ID
	/*
	DELETE localhost:3000/api/projects/1 (200 status code)
   	DELETE localhost:3000/api/projects/1000 (404 status code)
	*/
	router.delete("/projects/:id",function(req,res) {
		projectsController.deleteProjectID(req,res);
	});
	//Delete All Project
	/*
	DELETE localhost:3000/api/projects
	*/
	router.delete("/projects",function(req,res) {
		projectsController.deleteProjectAll(req,res);
	});

	// Now tell express to use this router, prefixed with /api
	app.use("/api",router);
}