using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserWebAPI.Models;

namespace UserWebAPI.Controllers
{
    [RoutePrefix("Api/User")]
    public class UserController : ApiController
    {
        ProjectManagerEntities objEntity = new ProjectManagerEntities();

        // GET: api/User
        [HttpGet]
        [Route("AllUserDetails")]
        public IQueryable<User> GetUsers()
        {
            try
            {
                return objEntity.Users;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetUserDetailsById/{userId}")]
        public IHttpActionResult GetUserById(string userId)
        {
            User objEmp = new User();
            int ID = Convert.ToInt32(userId);
            try
            {
                objEmp = objEntity.Users.Find(ID);
                if (objEmp == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objEmp);
        }

        [HttpGet]
        [Route("SearchUserDetails")]
        public IHttpActionResult SearchUser(string FirstName,string LastName,string UserName)
        {
            List<User> objEmp = new List<User>();
          
            try
            {
                objEmp = objEntity.Users.Where(x => x.FirstName == FirstName || x.LastName == LastName || x.UserName == UserName).ToList();
                if (objEmp == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objEmp);
        }

        [HttpPost]       
        [Route("InsertUserDetails")]
        public IHttpActionResult PostUser(User data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Users.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(data);
        }

        [HttpPost]
        [Route("UpdateUserDetails")]
        public IHttpActionResult PutUserMaster(User employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                User objEmp = new User();
                objEmp = objEntity.Users.Find(employee.UserId);
                if (objEmp != null)
                {
                    objEmp.UserName = employee.UserName;
                    objEmp.FirstName = employee.FirstName;
                    objEmp.LastName = employee.LastName;
                    objEmp.EmpId = employee.EmpId;
                    objEmp.ProjectId = employee.ProjectId;
                    objEmp.TaskId = employee.TaskId;
                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(employee);
        }
        [HttpPost]
        [Route("DeleteUserDetails")]
        public IHttpActionResult DeleteUser(User data)
        {
            //int empId = Convert.ToInt32(id);  
            User employee = objEntity.Users.Find(data.UserId);
            if (employee == null)
            {
                return NotFound();
            }

            objEntity.Users.Remove(employee);
            objEntity.SaveChanges();

            return Ok(employee);
        }
    }
}
