module.exports = app => {
	const projects = require("../controllers/projects.controller");

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
	router.post("/create/",function(req,res) {
		projects.createProject(req,res);
		res.sendStatus(204);
	});
	//Retrive All Project
	router.get("/projects/",function(req,res) {
		projects.retrieveAllProject(req,res);
	});
	//Retrieve Project by ID
	router.get("/projects/:id",function(req,res) {
		res.json({"message" : "Request for projects id: "+req.params.id});
		projects.retrieveProjectID(req,res);
	});
	//Retrieve Project by Name
	router.get("/projects/:projectName",function(req,res) {
		res.json({"message" : "Request for projects name: "+req.params.projectName});
		projects.retrieveProjectName(req,res);
	});
	//Update Project By ID

	//Delete Project By ID
	router.get("/delete/:id",function(req,res) {
		res.json({"message" : "Delete projects "+req.params.projectName});
		projects.deleteProjectID(req,res);
	});
	//Delete All Project
	router.get("/delete/",function(req,res) {
		projects.deleteProjectAll(req,res);
	});
	// Now tell express to use this router, prefixed with /api
	app.use("/api",router);
}