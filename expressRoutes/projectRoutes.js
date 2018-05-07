var express = require('express');
// var todoList = require('../controllers/todoListController');
var projectRoutes = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projectmanagement'
});

// Defined store route
projectRoutes.route('/project/add').post(function (req, res) {
  console.log('req.body-', req.body);
  
  if (req.body) {
    var project_obj = {
      project_name:  req.body.name,
      project_desc: req.body.desc,
      project_start_date: req.body.startdate,
      project_end_date: req.body.enddate
    };
    connection.query(
      'Insert into project (project_name, project_desc, project_start_date, project_end_date) value("'+project_obj.project_name+'", "'+project_obj.project_desc+'", "'+project_obj.project_start_date+'", "'+project_obj.project_end_date+'")', 
      function(err, rows, fields) {
      if (!err) {
          res.send(rows);
          console.log('The solution is: ', rows);
      } else
          console.log('Error while performing Query.');
  });
  }
  
  // connection.query('SELECT * from user', function(err, rows, fields) {
  //   connection.end();
  //   if (!err) {
  //       res.send(rows);
  //       console.log('The solution is: ', rows);
  //   } else
  //       console.log('Error while performing Query.');
  // });
  // var project = new Project(req.body);
  //  project.save()
  //   .then(item => {
  //   res.status(200).json({'project': 'Project added successfully'});
  //   })
  //   .catch(err => {
  //   res.status(400).send("unable to save to database");
  //   });
});

// Defined get data(index or listing) route
projectRoutes.route('/projects').get(function (req, res) {
  //  Project.find(function (err, projects){
  //   if(err){
  //     console.log(err);
  //   }
  //   else {
  //     res.json(projects);
  //   }
  // });
  connection.query('SELECT * from project', function(err, rows, fields) {
    
    if (!err) {
        res.send(rows);
        console.log('The solution is: ', rows);
    } else
        console.log('Error while performing Query.', err);
  });
});

// Defined edit route
projectRoutes.route('/project/edit/:id').get(function (req, res) {
  console.log('req--', req);
  if (req) {
    var id = req.params.id;
    connection.query('SELECT * from project where project_id="'+id+'"', function(err, rows, fields) {
    
      if (!err) {
          res.send(rows);
          console.log('The solution is: ', rows);
      } else
          console.log('Error while performing Query.', err);
    });
  }
  // var id = req.params.id;
  // Project.findById(id, function (err, project){
  //     res.json(project);
  // });
});

//  Defined update route
projectRoutes.route('/project/update/:id').post(function (req, res) {
  console.log('req--', req);
  if (req) {
    var id = req.params.id;
    connection.query('SELECT * from project where project_id="'+id+'"', function(err, rows, fields) {
    
      if (!err) {
        if (req.body) {
          var project_obj = {
            project_name:  req.body.name,
            project_desc: req.body.desc,
            project_start_date: req.body.startdate,
            project_end_date: req.body.enddate
          };
          connection.query('Update project set project_name="'+project_obj.project_name+'", project_desc="'+project_obj.project_desc+'", project_start_date="'+project_obj.project_start_date+'", project_end_date="'+project_obj.project_end_date+'" where project_id="'+id+'"', function(err, rows, fields) {
            if (!err) {
                res.send(rows);
                console.log('The solution is: ', rows);
            } else
                console.log('Error while performing Query.', err);
          });
        }
      } else
          console.log('Error while performing Query.', err);
    });
  }
  //  Project.findById(req.params.id, function(err, project) {
  //   if (!project)
  //     return next(new Error('Could not load Document'));
  //   else {
  //     project.name = req.body.name;
  //     project.desc = req.body.desc;
  //     project.startdate = req.body.startdate;
  //     project.enddate = req.body.enddate;

  //     project.save().then(coin => {
  //         res.json('Update complete');
  //     })
  //     .catch(err => {
  //           res.status(400).send("unable to update the database");
  //     });
  //   }
  // });
});

// Defined delete | remove | destroy route
projectRoutes.route('/project/delete/:id').get(function (req, res) {
  console.log('req--', req);
  if (req) {
    var id = req.params.id;
    connection.query('delete from project where project_id="'+id+'"', function(err, rows, fields) {
      if (!err) {
          res.send(rows);
          console.log('The solution is: ', rows);
      } else
          console.log('Error while performing Query.', err);
    });
  }
  //  Project.findByIdAndRemove({_id: req.params.id}, function(err, coin){
  //       if(err) res.json(err);
  //       else res.json('Successfully removed');
  //   });
});

module.exports = projectRoutes;
  



