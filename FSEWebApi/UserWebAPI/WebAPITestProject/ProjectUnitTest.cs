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
  public class ProjectUnitTest
  {
    [TestMethod]
    public void GetProjectTest()
    {
      // Set up Prerequisites   
      var controller = new ProjectController();
      var testProject = GetTestProject();

      // Act on Test  
      var result = controller.GetProjects() as IQueryable<Project>;
      Assert.AreEqual(testProject.Count, result.ToList().Count);
    }

    [TestMethod]
    public void GetProjectByIdTest()
    {
      // Set up Prerequisites   
      var controller = new ProjectController();
      // Act on Test  
      var response = controller.GetProjectById("1");
      var contentResult = response as OkNegotiatedContentResult <Project>;
      // Assert the result  
      Assert.IsNotNull(contentResult);
      Assert.IsNotNull(contentResult.Content);
      Assert.AreEqual("Test Project1", contentResult.Content.ProjectName);
    }

    [TestMethod]
    public void SearchProjectTest()
    {
      // Set up Prerequisites   
      var controller = new ProjectController();
      string startDate = "2019-11-29";
      string endDate = "2020-01-31";
      Project Project = new Project
      {
        ProjectName = "Test Project22"
      };
      // Act  
      IHttpActionResult actionResult = controller.SearchProject(Project.ProjectName, startDate, endDate);
      var createdResult = actionResult as OkNegotiatedContentResult<List<Project>>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.IsTrue(createdResult.Content.Count > 0);
    }

    [TestMethod]
    public void AddProjectTest()
    {
      // Arrange  
      var controller = new ProjectController();
      Project Project = new Project
      {
        ProjectName = "Test Project4",
        ProjectStartDate = DateTime.Now,
        ProjectEndDate = DateTime.Now,
        ProjectPriority=10,
        ProjectStatus = "In Progress", UserId=1
      };
        // Act  
      IHttpActionResult actionResult = controller.PostProject(Project);
      var createdResult = actionResult as OkNegotiatedContentResult<Project>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Project, createdResult.Content);
    }

    [TestMethod]
    public void UpdateProjectTest()
    {
      // Arrange  
      var controller = new ProjectController();
      Project Project = new Project
      {
        ProjectId = 1002,
        ProjectName = "Test Project4",
        ProjectStartDate = DateTime.Now,
        ProjectEndDate = DateTime.Now,
        ProjectPriority = 12,
        ProjectStatus = "Completed",
        UserId = 1
      };
      // Act  
      IHttpActionResult actionResult = controller.PutProjectMaster(Project);
      var createdResult = actionResult as OkNegotiatedContentResult<Project>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Project, createdResult.Content);
    }

    [TestMethod]
    public void DeleteProjectTest()
    {
      // Arrange  
      var controller = new ProjectController();
      Project Project = new Project
      {
        ProjectId = 1002
      };
      // Act  
      IHttpActionResult actionResult = controller.DeleteProject(Project);
      var createdResult = actionResult as OkNegotiatedContentResult<Project>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(Project.ProjectId, createdResult.Content.ProjectId);
    }

    private List<Project> GetTestProject()
    {
      var testProject = new List<Project>();
      testProject.Add(new Project { ProjectId = 1,ProjectName= "Test Project1", ProjectStartDate=Convert.ToDateTime("2019-10-09 00:00:00.000"),ProjectEndDate= Convert.ToDateTime("2019-12-31 00:00:00.000"), ProjectPriority=14,ProjectStatus= "In Progress", UserId=1 });
      testProject.Add(new Project { ProjectId = 2, ProjectName = "Test Project2", ProjectStartDate = Convert.ToDateTime("2019-11-30 00:00:00.000"), ProjectEndDate = Convert.ToDateTime("2020-01-31 00:00:00.000"), ProjectPriority = 10, ProjectStatus = "In Progress", UserId = 2 });
      testProject.Add(new Project { ProjectId = 3, ProjectName = "Test Project3", ProjectStartDate = Convert.ToDateTime("2019-10-16 00:00:00.000"), ProjectEndDate = Convert.ToDateTime("2019-12-26 00:00:00.000"), ProjectPriority = 23, ProjectStatus = "Completed", UserId = 1 });
      return testProject;
    }
  }
}
