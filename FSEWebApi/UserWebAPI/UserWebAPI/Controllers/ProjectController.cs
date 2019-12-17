using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserWebAPI.Models;

namespace UserWebAPI.Controllers
{
    [RoutePrefix("Api/Project")]
    public class ProjectController : ApiController
    {
        ProjectManagerEntities objEntity = new ProjectManagerEntities();

        // GET: api/Project
        [HttpGet]
        [Route("AllProjectDetails")]
        public IQueryable<Project> GetProjects()
        {
            try
            {
                return objEntity.Projects;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("SearchProjectDetails")]
        public IHttpActionResult SearchProject(string ProjectName, string ProjectStartDate, string ProjectEndDate)
        {
            List<Project> objProject = new List<Project>();

            try
            {
                DateTime startDate =ProjectStartDate !=null?Convert.ToDateTime(ProjectStartDate):new DateTime();
                DateTime endDate = ProjectEndDate != null ? Convert.ToDateTime(ProjectEndDate) : new DateTime();
                objProject = objEntity.Projects.Where(x => x.ProjectName == ProjectName || x.ProjectStartDate == startDate || x.ProjectEndDate == endDate).ToList();
                if (objProject == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objProject);
        }

        [HttpGet]
        [Route("GetProjectDetailsById/{projectId}")]
        public IHttpActionResult GetProjectById(string projectId)
        {
            Project objProject = new Project();
            int ID = Convert.ToInt32(projectId);
            try
            {
                objProject= objEntity.Projects.Find(ID);
                if (objProject== null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objProject);
        }

        [HttpPost]       
        [Route("InsertProjectDetails")]
        public IHttpActionResult PostProject(Project data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Projects.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return Ok(data);
        }

        [HttpPost]
        [Route("UpdateProjectDetails")]
        public IHttpActionResult PutProjectMaster(Project project)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Project objProject = new Project();
                objProject = objEntity.Projects.Find(project.ProjectId);
                if (objProject != null)
                {
                    objProject.ProjectName = project.ProjectName;
                    objProject.ProjectPriority = project.ProjectPriority;
                    objProject.ProjectStartDate= project.ProjectStartDate;
                    objProject.ProjectEndDate = project.ProjectEndDate;
                    objProject.ProjectStatus = project.ProjectStatus;
                    objProject.UserId = project.UserId;

                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(project);
        }
        [HttpPost]
        [Route("DeleteProjectDetails")]
        public IHttpActionResult DeleteProject(Project data)
        {
            Project projData = objEntity.Projects.Find(data.ProjectId);
            if (projData == null)
            {
                return NotFound();
            }

            objEntity.Projects.Remove(projData);
            objEntity.SaveChanges();

            return Ok(projData);
        }
    }
}
