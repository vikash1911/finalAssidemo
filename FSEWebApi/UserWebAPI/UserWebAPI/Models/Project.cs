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
    
    public partial class Project
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public Nullable<System.DateTime> ProjectStartDate { get; set; }
        public Nullable<System.DateTime> ProjectEndDate { get; set; }
        public Nullable<int> ProjectPriority { get; set; }
        public string ProjectStatus { get; set; }
        public Nullable<int> UserId { get; set; }
    }
}
