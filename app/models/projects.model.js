const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 4
const TableName = "projects";

const Project = function(id,projectName,projectDesc,startDate,endDate) {
  this.id = id;
  this.projectName = projectName;
  this.projectDesc = projectDesc;
  this.startDate = startDate;
  this.endDate = endDate;
};

//Create Project
Project.insertProject = (project,resultCallback) => {

  var sql = "INSERT INTO `" + TableName + "` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`)";
  sql += " VALUES ('"+project.id+"',"+project.projectName+"',"+project.projectDesc+"',"+project.startDate+"',"+project.endDate+")";

  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      resultCallback(err,null);
    }
    else {
      // get the id, and return it to the controller via 2nd argument to resultCallback()
      console.log("Added: " + project.id + " " + project.projectName + " " + project.projectDesc + " " + project.startDate + " " + project.endDate + ")");
    }
  });
}

//Retrieve Project
Project.getProjectAll = (resultCallback) => {
    
  var sql = "SELECT * FROM `" + TableName + "`";
  connection.query(sql, function (err, result) {
    let project_List = []
    if (err) {
      resultCallback(err,null);
    }
    else {
      for (const project_entry_rdp of result) {
        const project_entry = {
          id: project_entry_rdp.id,
          projectName: project_entry_rdp.projectName,
          projectDesc: project_entry_rdp.projectDesc,
          startDate: project_entry_rdp.startDate,
          endDate: project_entry_rdp.endDate
        };
        project_List.push(movie_entry);
      }
      resultCallback(null,project_List);
    }
  });
}

//Retrieve Project By ID
Project.getProjectID = (pID,resultCallback) => {
    
  var sql = "SELECT * FROM `" + TableName + "` WHERE ID=`" + pID + "`";
  connection.query(sql, function (err, result) {
    let project_List = []
    if (err) {
      resultCallback(err,null);
    }
    else {
      for (const project_entry_rdp of result) {
        const project_entry = {
          id: project_entry_rdp.id,
          projectName: project_entry_rdp.projectName,
          projectDesc: project_entry_rdp.projectDesc,
          startDate: project_entry_rdp.startDate,
          endDate: project_entry_rdp.endDate
        };
        project_List.push(movie_entry);
      }
      resultCallback(null,project_List);
    }
  });
}

//Retrieve Project by Project Name
Project.getProjectName = (pName,resultCallback) => {
    
  var sql = "SELECT * FROM `" + TableName + "` WHERE ID=`" + pName + "`";
  connection.query(sql, function (err, result) {
    let project_List = []
    if (err) {
      resultCallback(err,null);
    }
    else {
      for (const project_entry_rdp of result) {
        const project_entry = {
          id: project_entry_rdp.id,
          projectName: project_entry_rdp.projectName,
          projectDesc: project_entry_rdp.projectDesc,
          startDate: project_entry_rdp.startDate,
          endDate: project_entry_rdp.endDate
        };
        project_List.push(movie_entry);
      }
      resultCallback(null,project_List);
    }
  });
}

//Update Project By ID


//Delete Projects By ID
Project.removeProjectID = (pID,resultCallback) => {
    
  var sql = "DELETE * FROM `" + TableName + "` WHERE ID=`" + pName + "`";
  connection.query(sql, function (err, result) {
    if (err) {
      resultCallback(err);
    }
    else {
      resultCallback(null);
    }
  });
}

//Delete All Projects
Project.removeProjectAll = (resultCallback) => {
    
  var sql = "TRUNCATE TABLE `" + TableName + "`";
  connection.query(sql, function (err, result) {
    if (err) {
      resultCallback(err);
    }
    else {
      resultCallback(null);
    }
  });
}

module.exports = Project;