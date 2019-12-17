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
  public class UserUnitTest
  {
    [TestMethod]
    public void GetUsersTest()
    {
      // Set up Prerequisites   
      var controller = new UserController();
      var testUsers = GetTestUsers();

      // Act on Test  
      var result = controller.GetUsers() as IQueryable<User>;
      Assert.AreEqual(testUsers.Count, result.ToList().Count);
    }

    [TestMethod]
    public void GetUserByIdTest()
    {
      // Set up Prerequisites   
      var controller = new UserController();
      // Act on Test  
      var response = controller.GetUserById("1");
      var contentResult = response as OkNegotiatedContentResult <User>;
      // Assert the result  
      Assert.IsNotNull(contentResult);
      Assert.IsNotNull(contentResult.Content);
      Assert.AreEqual("409451", contentResult.Content.EmpId);
    }

    [TestMethod]
    public void SearchUserTest()
    {
      // Set up Prerequisites   
      var controller = new UserController();
      User user = new User
      {
        UserName = "padungar",
        FirstName = "Paras",
        LastName = "Dungarwal1"
      };
      // Act  
      IHttpActionResult actionResult = controller.SearchUser(user.FirstName,user.LastName,user.UserName);
      var createdResult = actionResult as OkNegotiatedContentResult<List<User>>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.IsTrue(createdResult.Content.Count > 0);
    }

    [TestMethod]
    public void AddUserTest()
    {
      // Arrange  
      var controller = new UserController();
      User user= new  User
      {
          UserName = "Test User",  
          FirstName ="Sanjay",
          LastName="Singh",
          EmpId="124560",
          ProjectId=null,TaskId=null
      };
        // Act  
      IHttpActionResult actionResult = controller.PostUser(user);
      var createdResult = actionResult as OkNegotiatedContentResult<User>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(user, createdResult.Content);
    }

    [TestMethod]
    public void UpdateUserTest()
    {
      // Arrange  
      var controller = new UserController();
      User user = new User
      {
        UserId = 1,
        UserName = "smithdiya",
        FirstName= "Samyak",
        LastName="Jain",
        EmpId= "409451",
        ProjectId = 1,
        TaskId = 0
      };
      // Act  
      IHttpActionResult actionResult = controller.PutUserMaster(user);
      var createdResult = actionResult as OkNegotiatedContentResult<User>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(user, createdResult.Content);
    }

    [TestMethod]
    public void DeleteUserTest()
    {
      // Arrange  
      var controller = new UserController();
      User user = new User
      {
        UserId = 1004
      };
      // Act  
      IHttpActionResult actionResult = controller.DeleteUser(user);
      var createdResult = actionResult as OkNegotiatedContentResult<User>;
      // Assert  
      Assert.IsNotNull(createdResult);
      Assert.IsNotNull(createdResult.Content);
      Assert.AreEqual(user.UserId, createdResult.Content.UserId);
    }

    private List<User> GetTestUsers()
    {
      var testUsers = new List<User>();
      testUsers.Add(new User { UserId = 1, UserName = "smithdiya", FirstName = "Samyak",LastName="Jain",EmpId= "409451",ProjectId=1,TaskId=0 });
      testUsers.Add(new User { UserId = 2, UserName = "padungar", FirstName = "Paras", LastName = "Dungarwal", EmpId = "409754", ProjectId = 1, TaskId = 0 });

      return testUsers;
    }
  }
}
