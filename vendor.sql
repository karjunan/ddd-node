-- ==============================
-- Create External Table Template
-- ==============================
USE tempdb
GO

drop table dbo.vendor;

IF  NOT EXISTS (SELECT 1 FROM sys.tables WHERE name = N'address')
    BEGIN
        CREATE DATABASE [tempdb]
		CONTAINMENT = NONE
    END;
GO

CREATE TABLE [dbo].[vendor](
	[vendorId] [uniqueidentifier] NOT NULL,
	[vendorName] [varchar](50) NOT NULL,
	[nationallyManaged] [varchar](1) NOT NULL,
	[auditCreatedDateTime] [datetime] NOT NULL,
	[auditCreatedBy] [varchar](50) NOT NULL,
	[auditModifiedDateTime] [datetime] NULL,
	[auditModifiedBy] [varchar](50) NULL,
 CONSTRAINT [PK_1440d0a09f3a270feeff706c01e] PRIMARY KEY CLUSTERED 
(
	[vendorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

select * from dbo.vendor;

SELECT * FROM "tempdb"."INFORMATION_SCHEMA"."TABLES" WHERE "TABLE_NAME" = 'typeorm_metadata' ;