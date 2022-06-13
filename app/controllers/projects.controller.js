const Project = require("../models/projects.model");
 
// TODO: complete the code as per the instructions given in Assignment 4
exports.retrieveAllProject = (req,res) => {

    Project.getAll( (err,data) => {
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