using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserWebAPI.Models;

namespace UserWebAPI.Controllers
{
    [RoutePrefix("Api/Task")]
    public class TaskController : ApiController
    {
        ProjectManagerEntities objEntity = new ProjectManagerEntities();

        // GET: api/Task
        [HttpGet]
        [Route("AllTaskDetails")]
        public IQueryable<Task> GetTasks()
        {
            try
            {        
                return objEntity.Tasks;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetParentTaskDetails")]
        public IQueryable<ParentTask> GetParentTasks()
        {
            try
            {
                return objEntity.ParentTasks;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetTaskDetailsById/{taskId}")]
        public IHttpActionResult GetTaskById(string taskId)
        {
            Task objTask = new Task();
            int ID = Convert.ToInt32(taskId);
            try
            {
                objTask= objEntity.Tasks.Find(ID);
                if (objTask== null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objTask);
        }

    [HttpGet]
    [Route("SearchTaskDetails")]
    public IHttpActionResult SearchTask(string TaskName, string TaskStartDate, string TaskEndDate)
    {
      List<Task> objTask = new List<Task>();

      try
      {
        DateTime startDate = TaskStartDate != null ? Convert.ToDateTime(TaskStartDate) : new DateTime();
        DateTime endDate = TaskEndDate != null ? Convert.ToDateTime(TaskEndDate) : new DateTime();
        objTask = objEntity.Tasks.Where(x => x.TaskName == TaskName || x.StartDate == startDate || x.EndDate == endDate).ToList();
        if (objTask == null)
        {
          return NotFound();
        }

      }
      catch (Exception)
      {
        throw;
      }

      return Ok(objTask);
    }


    [HttpPost]       
        [Route("InsertTaskDetails")]
        public IHttpActionResult PostTask(Task data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Tasks.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(data);
        }

        [HttpPost]
        [Route("UpdateTaskDetails")]
        public IHttpActionResult PutTaskMaster(Task task)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Task objTask = new Task();
                objTask = objEntity.Tasks.Find(task.TaskID);
                if (objTask != null)
                {
                    objTask.TaskName = task.TaskName;
                    objTask.TaskPriority = task.TaskPriority;
                    objTask.TaskDescription= task.TaskDescription;
                    objTask.StartDate = task.StartDate;
                    objTask.EndDate= task.EndDate;
                    objTask.TaskStatus = task.TaskStatus;
                    objTask.ParentTaskId = task.ParentTaskId;
                    objTask.ProjectId = task.ProjectId;
                    objTask.TaskAssignedTo = task.TaskAssignedTo;
                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(task);
        }
        [HttpPost]
        [Route("DeleteTaskDetails")]
        public IHttpActionResult DeleteTask(int id)
        {
            //int empId = Convert.ToInt32(id);  
            Task task = objEntity.Tasks.Find(id);
            if (task == null)
            {
                return NotFound();
            }

            objEntity.Tasks.Remove(task);
            objEntity.SaveChanges();

            return Ok(task);
        }
    }
}
