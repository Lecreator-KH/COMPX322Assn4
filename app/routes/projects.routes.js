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
	router.get("/projects/",function(req,res) {
		movies.retrieveAllProject(req,res);
	});
	// Now tell express to use this router, prefixed with /api
	app.use("/api",router);
}