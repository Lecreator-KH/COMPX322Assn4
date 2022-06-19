const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 4

const Project = function(project) {
  this.projectName = projectName;
  this.projectDesc = projectDesc;
  this.startDate = startDate;
  this.endDate = endDate;
};

//Create Project
Project.insertProject = (project, resultCallback) => {
  var sql = "INSERT INTO projects SET " + project;
  db.query(sql, function(err, res) {
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
  var sql = "SELECT * FROM projects WHERE ID=`" + pID + "`";
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
    
  var sql = "SELECT * FROM projects WHERE projectname=`" + pName + "`";
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
  db.query("UPDATE projects SET projectname=?, projectdesc=?, startdate=?, enddate=? WHERE ID=?", [project.projectname, project.projectdesc, project.startdate, project.enddate, pid], function(err, res) {
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
    
  var sql = "DELETE * FROM `" + TableName + "` WHERE ID=`" + pID + "`";
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
  var sql = "TRUNCATE TABLE `" + TableName + "`";
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