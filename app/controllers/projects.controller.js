const Project = require("../models/projects.model");
 
// TODO: complete the code as per the instructions given in Assignment 4
exports.createProject = (req,res) => {
    //console.log(req.body);
	let id = req.body.id; 
    let projectName = req.body.projectName;
    let projectDesc = req.body.projectDesc;
	let startDate = req.body.startDate;
	let endDate = req.body.endDate;

    let project = new Project(id,projectName,projectDesc,startDate,endDate);
    
    Project.insertProject( project, (err) => {
		if (err) {
			res.status(500).send({
				message: "An error occurred while setting a movie entry"
			});
		}
		else {
			// More to be done here
			res.sendStatus(204);
		}	
    });
}

exports.retrieveAllProject = (req,res) => {

    Project.getProjectAll( (err,data) => {
		if (err) {
			res.status(500).send({
				message: "Some error occurred while retrieving project"
			});
		}
		else {
			res.json(data);
		}	
    });
}

exports.retrieveProjectID = (req,res) => {

    Project.getProjectID( pID, (err,data) => {
		if (err) {
			res.status(500).send({
				message: "Some error occurred while retrieving project"
			});
		}
		else {
			res.json(data);
		}	
    });
}

exports.retrieveProjectName = (req,res) => {

    Project.getProjectName( pName, (err,data) => {
		if (err) {
			res.status(500).send({
				message: "Some error occurred while retrieving project"
			});
		}
		else {
			res.json(data);
		}	
    });
}

exports.deleteProjectID = (req,res) => {

    Project.removeProjectID( pID, (err) => {
		if (err) {
			res.status(500).send({
				message: "Some error occurred while retrieving project"
			});
		}
		else {
			// More to be done here
			res.sendStatus(204);
		}	
    });
}

exports.deleteProjectAll = (req,res) => {

    Project.removeProjectAll( (err) => {
		if (err) {
			res.status(500).send({
				message: "Some error occurred while retrieving project"
			});
		}
		else {
			// More to be done here
			res.sendStatus(204);
		}
    });
}