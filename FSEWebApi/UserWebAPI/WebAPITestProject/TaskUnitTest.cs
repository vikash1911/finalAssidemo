using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http.Results;
using UserWebAPI.Controllers;
using UserWebAPI.Models;
using System.Web.Http;
using System.Collections.Generic;
using System.Linq;

namespace WebAPITestProject
{
  [TestClass]
  public class TaskUnitTest
  {
    [TestMethod]
    public void GetTaskTest()
    {
      // Set up Prerequisites   
      var controller = new TaskController();
      var testTask = GetTestTask();

      // Act on Test  
      var result = controller.GetTasks() as IQueryable<Task>;
      Assert.AreEqual(testTask.Count, result.ToList().Count);
    }

    [TestMethod]
    public void GetTaskByIdTest()
    {
      // Set up Prerequisites   
      var controller = new TaskController();
      // Act on Test  
      var response = controller.GetTaskById("2");
      var contentResult = response as OkNegotiatedContentResult <Task>;
      // Assert the result  
      Assert.IsNotNull(contentResult);
      Assert.IsNotNull(contentResult.Content);
      Assert.AreEqual("Admin Module", contentResult.Content.TaskName);
    }

    //[TestMethod]
    //public void SearchTaskTest()
    //{
    //  // Set up Prerequisites   
    //  var controller = new TaskController();
    //  string startDate = "2019-11-29";
    //  string endDate = "2020-01-31";
    //  Task Task = new Task
    //  {
    //    TaskName = "Test Task22"
    //  };
    //  // Act  
    //  IHttpActionResult actionResult = controller.SearchTask(Task.TaskName, startDate, endDate);
    //  var createdResult = actionResult as OkNegotiatedContentResult<List<Task>>;
    //  // Assert  
    //  Assert.IsNotNull(createdResult);
    //  Assert.IsNotNull(createdResult.Content);
    //  Assert.IsTrue(createdResult.Content.Count > 0);
    //}

    [TestMethod]
    public void AddTaskTest()
    {
      // Arrange  
      var controller = new TaskController();
      Task Task = new Task
      {
        TaskName = "RTA Module",
        TaskDescription="test module desc",
        TaskPriority = 10,
        StartDate = DateTime.Now,
        EndDate = DateTime.Now,
        TaskStatus = "In Progress",
        ParentTaskId=null,ProjectId=null,TaskAssignedTo="2"
      };
        // Act  
      IHttpActionResult actionResult = controller.PostTask(Task);
      var createdResult = actionResult as OkNegotiatedContentResult<Task>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Task, createdResult.Content);
    }

    [TestMethod]
    public void UpdateTaskTest()
    {
      // Arrange  
      var controller = new TaskController();
      Task Task = new Task
      {
        TaskID= 1002,
        TaskName = "RTA Module",
        TaskDescription = "test module desc",
        TaskPriority = 10,
        StartDate = DateTime.Now,
        EndDate = DateTime.Now,
        TaskStatus = "Completed",
        ParentTaskId = 2,
        ProjectId = 1,
        TaskAssignedTo = "1"
      };
      // Act  
      IHttpActionResult actionResult = controller.PutTaskMaster(Task);
      var createdResult = actionResult as OkNegotiatedContentResult<Task>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Task, createdResult.Content);
    }

    [TestMethod]
    public void DeleteTaskTest()
    {
      // Arrange  
      var controller = new TaskController();
      Task Task = new Task
      {
        TaskID = 1
      };
      // Act  
      IHttpActionResult actionResult = controller.DeleteTask(Task.TaskID);
      var createdResult = actionResult as OkNegotiatedContentResult<Task>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Task.TaskID, createdResult.Content.TaskID);
    }

    private List<Task> GetTestTask()
    {
      var testTask = new List<Task>();
      testTask.Add(new Task { TaskID = 1,TaskName= "Dashboard Module",TaskDescription= "Overall dashboard module",TaskPriority=7, StartDate=Convert.ToDateTime("2019-10-09 00:00:00.000"),EndDate= Convert.ToDateTime("2019-12-31 00:00:00.000"), TaskStatus= "Completed",ParentTaskId=2,ProjectId=1, TaskAssignedTo="1" });
      testTask.Add(new Task { TaskID = 2, TaskName = "Admin Module", TaskDescription = "create overall dashboard module", TaskPriority = 19, StartDate = Convert.ToDateTime("2019-10-09 00:00:00.000"), EndDate = Convert.ToDateTime("2019-12-31 00:00:00.000"), TaskStatus = "Completed", ParentTaskId = 1, ProjectId = 1, TaskAssignedTo = "2" });
      return testTask;
    }
  }
}
