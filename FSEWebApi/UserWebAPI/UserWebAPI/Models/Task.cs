//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace UserWebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Task
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public int TaskPriority { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime EndDate { get; set; }
        public string TaskStatus { get; set; }
        public Nullable<int> ParentTaskId { get; set; }
        public Nullable<int> ProjectId { get; set; }
        public string TaskAssignedTo { get; set; }
    }
}
