// Kevin Han 1521885

const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 4

//Constructor for project
const Project = function(project) {
  this.projectName = project.projectName;
  this.projectDesc = project.projectDesc;
  this.startDate = project.startDate;
  this.endDate = project.endDate;
};

//Create Project
Project.insertProject = (project, resultCallback) => {
  // var sql = "INSERT INTO projects SET ?", project;
  db.query('INSERT INTO projects SET ?', project, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      console.log('Created project: ', {id: res.insertId, ...project});
      resultCallback(null, {id: res.insertId, ...project});
    }
  });
}

//Retrieve Project
Project.getProjectAll = (resultCallback) => {
  var sql = "SELECT * FROM projects";
  db.query(sql, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      console.log('Project :', !res || !res.length ? 'Empty response ' + res : res);
      resultCallback(null, res);
    }        
  });
}

//Retrieve Project By ID
Project.getProjectID = (pID,resultCallback) => {
  var sql = "SELECT * FROM projects WHERE ID=" + pID;
  db.query(sql, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      console.log('Project :', !res || !res.length ? 'empty response ' + res : res);
      resultCallback(null, res);
    }
  });
}

//Retrieve Project by Project Name
Project.getProjectName = (pName,resultCallback) => {
    
  var sql = "SELECT * FROM projects WHERE projectname ='" + pName + "'";
  db.query(sql, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      console.log('Projects :', !res || !res.length ? 'empty response ' + res : res);
      resultCallback(null, res);
    }
  });
}

//Update Project By ID
Project.updateProjectID = (pid, project, resultCallback) => {
  db.query("UPDATE projects SET projectname=?, projectdesc=?, startdate=?, enddate=? WHERE ID=?", [project.projectName, project.projectDesc, project.startDate, project.endDate, pid], function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);   
    }
    else {
      resultCallback(null, res.affectedRows);
    }          
  });
}

//Delete Projects By ID
Project.removeProjectID = (pID,resultCallback) => {
    
  var sql = "DELETE FROM projects WHERE ID=" + pID;
  db.query(sql, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      resultCallback(null, res.affectedRows);
    }
  });
}

//Delete All Projects
Project.removeProjectAll = (resultCallback) => {
  var sql = "TRUNCATE TABLE projects";
  db.query(sql, function(err, res) {
    if (err) {
      console.log('Error: ', err);
      resultCallback(err, null);
    }
    else {
      resultCallback(null, res);
    }
  });
}

module.exports = Project;