// Kevin Han 1521885
const Project = require("../models/projects.model");
 
// TODO: complete the code as per the instructions given in Assignment 4
exports.createProject = (req, res) => {
	// Check if the request body is not empty
	if (req.body.constructor === Object && Object.keys(req.body).length === 0) 
	  	res.status(400).json({
			message: "Content can not be empty!"
		}
	);
	else 
	  	Project.insertProject(new Project(req.body), (err, project) => {
			// Something went wrong with the server or database
			if (err)
				res.status(500).send(err);
			else 
				res.json(project);
		});
}

exports.retrieveAllProject = (req,res) => {
    Project.getProjectAll( (err,data) => {
		// Something went wrong with the server or database
		if (err)
			res.status(500).send(err);
		else
			res.json(data);
    });
}

exports.retrieveProjectID = (req,res) => {
    Project.getProjectID( req.params.id, (err,data) => {
		// Something went wrong with the server or database
		if (err)
			res.status(500).send(err);
		else
			// Check that the data is not empty
			if (!data || !data.length)
			  	res.status(404).json({
					message: "Cannot not find project with project id: " + req.query.pID,  
			  	});
			else
			  	res.json(data);
    });
}

exports.retrieveProjectName = (req,res) => {
    Project.getProjectName( req.params.projectName, (err,data) => {
		// Something went wrong with the server or database
		if (err) 
			res.status(500).send(err);
		else
			// Check that the data is not empty
			if (!data || !data.length)
			  	res.status(404).json({
					error: true,
					message: "Cannot not find project with project name: " + req.query.pName,  
			  	});
			else
			  	res.json(data);
    });
}

exports.updateProjectID = (req, res) => {
	// Check if the request body is not empty
	if (req.body.constructor === Object && Object.keys(req.body).length === 0)
		res.status(400).json({
		  	message: "Content can not be empty!"
		});
	else 
	  	Project.updateProjectID(req.params.id, new Project(req.body), (err, affectedRows) => {
			// something went wrong with the server or database
			if (err) 
				res.status(500).send(err);
			else
				// None of the rows in the database were affected
				if (affectedRows === 0)
					res.status(404).json({
						message: "Failed to update project at id: " + req.params.id,  
					});
				else
					res.json({
						message: "Successfully updated project at id: " + req.params.id,
					});
	  	}); 
}

exports.deleteProjectID = (req,res) => {
    Project.removeProjectID( req.params.id, (err, affectedRows) => {
		if (err)
			res.status(500).send(err);
		else
			// No projects with the ID were affected
			if (affectedRows === 0)
				res.status(404).json({
					message: "Failed to delete project at id: " + req.params.id,
				});
			else
				res.json({
					message: 'Successfully deleted project at id : ' + req.params.id,
				});
    });
}

exports.deleteProjectAll = (req,res) => {
    Project.removeProjectAll( (err) => {
		// Something went wrong with the server or database
		if (err)
			res.status(500).send(err);
		else
			res.json({
				message: 'All projects successfully deleted'
			});
    });
}