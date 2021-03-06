USE [ProjectManager]
GO
/****** Object:  Table [dbo].[ParentTask]    Script Date: 10/12/2019 11:36:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ParentTask](
	[ParentTaskId] [int] IDENTITY(1,1) NOT NULL,
	[ParentTaskName] [nvarchar](200) NOT NULL,
CONSTRAINT [PK_ParentTask] PRIMARY KEY CLUSTERED 
(
	[ParentTaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Project]    Script Date: 10/12/2019 11:36:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[ProjectId] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [nvarchar](200) NULL,
	[ProjectStartDate] [datetime] NULL,
	[ProjectEndDate] [datetime] NULL,
	[ProjectPriority] [int] NULL,
	[ProjectStatus] [nvarchar](50) NULL,
	[UserId] [int] NULL,
CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 

GO
/****** Object:  Table [dbo].[Task]    Script Date: 10/12/2019 11:36:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[TaskID] [int] IDENTITY(1,1) NOT NULL,
	[TaskName] [nvarchar](200) NOT NULL,
	[TaskDescription] [nvarchar](max) NOT NULL,
	[TaskPriority] [int] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[TaskStatus] [nvarchar](50) NOT NULL,
	[ParentTaskId] [int] NULL,
	[ProjectId] [int] NULL,
	[TaskAssignedTo] [nvarchar](100) NULL, 
CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[TaskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 

GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/12/2019 11:36:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](100) NOT NULL,
	[FirstName] [nvarchar](100) NOT NULL,
	[LastName] [nvarchar](100) NOT NULL,
	[EmpId] [nvarchar](100) NOT NULL,
	[ProjectId] [int] NULL,
	[TaskId] [int] NULL,
CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
