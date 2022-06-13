const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 4


const Project = function(project) {
  this.projectName = project.projectName;
  this.projectDesc = project.projectDesc;
  this.startDate = project.startDate;
  this.endDate = project.endDate;
};

//Create Project





//Retrieve Project
Project.getAll = (resultCallback) => {
    
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









//Retrieve Project by Project Name





module.exports = Project;