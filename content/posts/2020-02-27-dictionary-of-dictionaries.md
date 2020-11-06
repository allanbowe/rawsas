---
title: 'Dictionary of Dictionaries'
date: '2020-02-27 11:18:29'
path: '/dictionary-of-dictionaries/'
tags:
  - Movable Type
---

<!-- wp:paragraph -->
<p>The SQL procedure contains a lot of metadata information in the special DICTIONARY libref, and I often find myself needing to call <code>select * from dictionary.dictionaries</code> in order to query it.  So to save time I've reproduced the table below, as a quick reference guide!</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>List of Tables</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->
<table class="wp-block-table is-style-stripes"><tbody><tr><td>
<strong>memname</strong>
</td><td>
<strong>memlabel</strong>
</td></tr><tr><td>
CATALOGS
</td><td>
Catalogs and catalog-specific information
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
Check constraints
</td></tr><tr><td>
COLUMNS
</td><td>
Columns from every table
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
Constraint column usage
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
Constraint table usage
</td></tr><tr><td>
DATAITEMS
</td><td>
Information Map Data Items
</td></tr><tr><td>
DESTINATIONS
</td><td>
Open ODS Destinations
</td></tr><tr><td>
DICTIONARIES
</td><td>
DICTIONARY tables and their columns
</td></tr><tr><td>
ENGINES
</td><td>
Available engines
</td></tr><tr><td>
EXTFILES
</td><td>
Files defined in FILENAME statements, or implicitly
</td></tr><tr><td>
FILTERS
</td><td>
Information Map Filters
</td></tr><tr><td>
FORMATS
</td><td>
Available formats
</td></tr><tr><td>
FUNCTIONS
</td><td>
Available functions
</td></tr><tr><td>
GOPTIONS
</td><td>
SAS/GRAPH options
</td></tr><tr><td>
INDEXES
</td><td>
Indexes
</td></tr><tr><td>
INFOMAPS
</td><td>
Information Maps
</td></tr><tr><td>
LIBNAMES
</td><td>
LIBNAME information
</td></tr><tr><td>
LOCALES
</td><td>
Available Locales
</td></tr><tr><td>
MACROS
</td><td>
Defined macros
</td></tr><tr><td>
MEMBERS
</td><td>
Tables, catalogs, and views
</td></tr><tr><td>
OPTIONS
</td><td>
SAS options
</td></tr><tr><td>
PROMPTS
</td><td>
Information Map Prompts
</td></tr><tr><td>
PROMPTSXML
</td><td>
Information Map Prompts XML
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
Referential constraints
</td></tr><tr><td>
REMEMBER
</td><td>
Remembered information?
</td></tr><tr><td>
STYLES
</td><td>
Styles?
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
Table constraints
</td></tr><tr><td>
TABLES
</td><td>
Tables and table-specific information
</td></tr><tr><td>
TITLES
</td><td>
TITLE statements
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
Sources Referenced by View
</td></tr><tr><td>
VIEWS
</td><td>
Views and view-specific information
</td></tr><tr><td>
XATTRS
</td><td>
Extended Attributes
</td></tr></tbody></table>
<!-- /wp:table -->

<!-- wp:paragraph -->
<p><strong>List of Attributes</strong></p>
<!-- /wp:paragraph -->

<!-- wp:table -->
<table class="wp-block-table"><tbody><tr><td>
<strong>memname</strong>
</td><td>
<strong>name</strong>
</td><td> <strong>fmt</strong> </td><td>
<strong>label</strong>
</td></tr><tr><td>
MEMBERS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
MEMBERS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
MEMBERS
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
MEMBERS
</td><td>
DBMS_MEMTYPE
</td><td>
$32
</td><td>
DBMS Member Type
</td></tr><tr><td>
MEMBERS
</td><td>
ENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
MEMBERS
</td><td>
INDEX
</td><td>
$3
</td><td>
Indexes
</td></tr><tr><td>
MEMBERS
</td><td>
PATH
</td><td>
$1024
</td><td>
Pathname
</td></tr><tr><td>
TABLES
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
TABLES
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
TABLES
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
TABLES
</td><td>
DBMS_MEMTYPE
</td><td>
$32
</td><td>
DBMS Member Type
</td></tr><tr><td>
TABLES
</td><td>
MEMLABEL
</td><td>
$256
</td><td>
Data Set Label
</td></tr><tr><td>
TABLES
</td><td>
TYPEMEM
</td><td>
$8
</td><td>
Data Set Type
</td></tr><tr><td>
TABLES
</td><td>
CRDATE
</td><td>
8
</td><td>
Date Created
</td></tr><tr><td>
TABLES
</td><td>
MODATE
</td><td>
8
</td><td>
Date Modified
</td></tr><tr><td>
TABLES
</td><td>
NOBS
</td><td>
8
</td><td>
Number of Physical Observations
</td></tr><tr><td>
TABLES
</td><td>
OBSLEN
</td><td>
8
</td><td>
Observation Length
</td></tr><tr><td>
TABLES
</td><td>
NVAR
</td><td>
8
</td><td>
Number of Variables
</td></tr><tr><td>
TABLES
</td><td>
PROTECT
</td><td>
$3
</td><td>
Type of Password Protection
</td></tr><tr><td>
TABLES
</td><td>
COMPRESS
</td><td>
$8
</td><td>
Compression Routine
</td></tr><tr><td>
TABLES
</td><td>
ENCRYPT
</td><td>
$8
</td><td>
Encryption
</td></tr><tr><td>
TABLES
</td><td>
NPAGE
</td><td>
8
</td><td>
Number of Pages
</td></tr><tr><td>
TABLES
</td><td>
FILESIZE
</td><td>
8
</td><td>
Size of File
</td></tr><tr><td>
TABLES
</td><td>
PCOMPRESS
</td><td>
8
</td><td>
Percent Compression
</td></tr><tr><td>
TABLES
</td><td>
REUSE
</td><td>
$3
</td><td>
Reuse Space
</td></tr><tr><td>
TABLES
</td><td>
BUFSIZE
</td><td>
8
</td><td>
Bufsize
</td></tr><tr><td>
TABLES
</td><td>
DELOBS
</td><td>
8
</td><td>
Number of Deleted Observations
</td></tr><tr><td>
TABLES
</td><td>
NLOBS
</td><td>
8
</td><td>
Number of Logical Observations
</td></tr><tr><td>
TABLES
</td><td>
MAXVAR
</td><td>
8
</td><td>
Longest variable name
</td></tr><tr><td>
TABLES
</td><td>
MAXLABEL
</td><td>
8
</td><td>
Longest label
</td></tr><tr><td>
TABLES
</td><td>
MAXGEN
</td><td>
8
</td><td>
Maximum number of generations
</td></tr><tr><td>
TABLES
</td><td>
GEN
</td><td>
8
</td><td>
Generation number
</td></tr><tr><td>
TABLES
</td><td>
ATTR
</td><td>
$3
</td><td>
Data Set Attributes
</td></tr><tr><td>
TABLES
</td><td>
INDXTYPE
</td><td>
$9
</td><td>
Type of Indexes
</td></tr><tr><td>
TABLES
</td><td>
DATAREP
</td><td>
$32
</td><td>
Data Representation
</td></tr><tr><td>
TABLES
</td><td>
SORTNAME
</td><td>
$8
</td><td>
Name of Collating Sequence
</td></tr><tr><td>
TABLES
</td><td>
SORTTYPE
</td><td>
$4
</td><td>
Sorting Type
</td></tr><tr><td>
TABLES
</td><td>
SORTCHAR
</td><td>
$8
</td><td>
Charset Sorted By
</td></tr><tr><td>
TABLES
</td><td>
REQVECTOR
</td><td>
$24
</td><td>
Requirements Vector
</td></tr><tr><td>
TABLES
</td><td>
DATAREPNAME
</td><td>
$170
</td><td>
Data Representation Name
</td></tr><tr><td>
TABLES
</td><td>
ENCODING
</td><td>
$256
</td><td>
Data Encoding
</td></tr><tr><td>
TABLES
</td><td>
AUDIT
</td><td>
$3
</td><td>
Audit Trail Active?
</td></tr><tr><td>
TABLES
</td><td>
AUDIT_BEFORE
</td><td>
$3
</td><td>
Audit Before Image?
</td></tr><tr><td>
TABLES
</td><td>
AUDIT_ADMIN
</td><td>
$3
</td><td>
Audit Admin Image?
</td></tr><tr><td>
TABLES
</td><td>
AUDIT_ERROR
</td><td>
$3
</td><td>
Audit Error Image?
</td></tr><tr><td>
TABLES
</td><td>
AUDIT_DATA
</td><td>
$3
</td><td>
Audit Data Image?
</td></tr><tr><td>
TABLES
</td><td>
NUM_CHARACTER
</td><td>
8
</td><td>
Number of Character Variables
</td></tr><tr><td>
TABLES
</td><td>
NUM_NUMERIC
</td><td>
8
</td><td>
Number of Numeric Variables
</td></tr><tr><td>
TABLES
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
VIEWS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
VIEWS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
VIEWS
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
VIEWS
</td><td>
ENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
CATALOGS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
CATALOGS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
CATALOGS
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
CATALOGS
</td><td>
OBJNAME
</td><td>
$32
</td><td>
Object Name
</td></tr><tr><td>
CATALOGS
</td><td>
OBJTYPE
</td><td>
$8
</td><td>
Object Type
</td></tr><tr><td>
CATALOGS
</td><td>
OBJDESC
</td><td>
$256
</td><td>
Object Description
</td></tr><tr><td>
CATALOGS
</td><td>
CREATED
</td><td>
8
</td><td>
Date Created
</td></tr><tr><td>
CATALOGS
</td><td>
MODIFIED
</td><td>
8
</td><td>
Date Modified
</td></tr><tr><td>
CATALOGS
</td><td>
ALIAS
</td><td>
$32
</td><td>
Object Alias
</td></tr><tr><td>
CATALOGS
</td><td>
LEVEL
</td><td>
8
</td><td>
Library Concatenation Level
</td></tr><tr><td>
REMEMBER
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
REMEMBER
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
REMEMBER
</td><td>
OFFSET
</td><td>
8
</td><td>
Offset into Text Remembered
</td></tr><tr><td>
REMEMBER
</td><td>
RTEXT
</td><td>
$200
</td><td>
Text Remembered
</td></tr><tr><td>
REMEMBER
</td><td>
PW
</td><td>
$8
</td><td>
Password
</td></tr><tr><td>
COLUMNS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
COLUMNS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
COLUMNS
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
COLUMNS
</td><td>
NAME
</td><td>
$32
</td><td>
Column Name
</td></tr><tr><td>
COLUMNS
</td><td>
TYPE
</td><td>
$4
</td><td>
Column Type
</td></tr><tr><td>
COLUMNS
</td><td>
LENGTH
</td><td>
8
</td><td>
Column Length
</td></tr><tr><td>
COLUMNS
</td><td>
NPOS
</td><td>
8
</td><td>
Column Position
</td></tr><tr><td>
COLUMNS
</td><td>
VARNUM
</td><td>
8
</td><td>
Column Number in Table
</td></tr><tr><td>
COLUMNS
</td><td>
LABEL
</td><td>
$256
</td><td>
Column Label
</td></tr><tr><td>
COLUMNS
</td><td>
FORMAT
</td><td>
$49
</td><td>
Column Format
</td></tr><tr><td>
COLUMNS
</td><td>
INFORMAT
</td><td>
$49
</td><td>
Column Informat
</td></tr><tr><td>
COLUMNS
</td><td>
IDXUSAGE
</td><td>
$9
</td><td>
Column Index Type
</td></tr><tr><td>
COLUMNS
</td><td>
SORTEDBY
</td><td>
8
</td><td>
Order in Key Sequence
</td></tr><tr><td>
COLUMNS
</td><td>
XTYPE
</td><td>
$12
</td><td>
Extended Type
</td></tr><tr><td>
COLUMNS
</td><td>
NOTNULL
</td><td>
$3
</td><td>
Not NULL?
</td></tr><tr><td>
COLUMNS
</td><td>
PRECISION
</td><td>
8
</td><td>
Precision
</td></tr><tr><td>
COLUMNS
</td><td>
SCALE
</td><td>
8
</td><td>
Scale
</td></tr><tr><td>
COLUMNS
</td><td>
TRANSCODE
</td><td>
$3
</td><td>
Transcoded?
</td></tr><tr><td>
COLUMNS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
EXTFILES
</td><td>
FILEREF
</td><td>
$8
</td><td>
Fileref
</td></tr><tr><td>
EXTFILES
</td><td>
XPATH
</td><td>
$1024
</td><td>
Pathname
</td></tr><tr><td>
EXTFILES
</td><td>
XENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
EXTFILES
</td><td>
MODATE
</td><td>
8
</td><td>
Date Modified
</td></tr><tr><td>
EXTFILES
</td><td>
FILESIZE
</td><td>
8
</td><td>
Size of File
</td></tr><tr><td>
EXTFILES
</td><td>
LEVEL
</td><td>
8
</td><td>
File Concatenation Level
</td></tr><tr><td>
EXTFILES
</td><td>
DIRECTORY
</td><td>
$3
</td><td>
Directory?
</td></tr><tr><td>
EXTFILES
</td><td>
EXISTS
</td><td>
$3
</td><td>
Exists?
</td></tr><tr><td>
EXTFILES
</td><td>
TEMPORARY
</td><td>
$3
</td><td>
Temporary?
</td></tr><tr><td>
INDEXES
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
INDEXES
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
INDEXES
</td><td>
MEMTYPE
</td><td>
$8
</td><td>
Member Type
</td></tr><tr><td>
INDEXES
</td><td>
NAME
</td><td>
$32
</td><td>
Column Name
</td></tr><tr><td>
INDEXES
</td><td>
IDXUSAGE
</td><td>
$9
</td><td>
Column Index Type
</td></tr><tr><td>
INDEXES
</td><td>
INDXNAME
</td><td>
$32
</td><td>
Index Name
</td></tr><tr><td>
INDEXES
</td><td>
INDXPOS
</td><td>
8
</td><td>
Position of Column in Concatenated Key
</td></tr><tr><td>
INDEXES
</td><td>
NOMISS
</td><td>
$3
</td><td>
Nomiss Option
</td></tr><tr><td>
INDEXES
</td><td>
UNIQUE
</td><td>
$3
</td><td>
Unique Option
</td></tr><tr><td>
INDEXES
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
OPTIONS
</td><td>
OPTNAME
</td><td>
$32
</td><td>
Option Name
</td></tr><tr><td>
OPTIONS
</td><td>
OPTTYPE
</td><td>
$8
</td><td>
Option type
</td></tr><tr><td>
OPTIONS
</td><td>
OFFSET
</td><td>
8
</td><td>
Offset into option value
</td></tr><tr><td>
OPTIONS
</td><td>
SETTING
</td><td>
$1024
</td><td>
Option Setting
</td></tr><tr><td>
OPTIONS
</td><td>
OPTDESC
</td><td>
$160
</td><td>
Option Description
</td></tr><tr><td>
OPTIONS
</td><td>
LEVEL
</td><td>
$8
</td><td>
Option Location
</td></tr><tr><td>
OPTIONS
</td><td>
OPTSTART
</td><td>
$8
</td><td>
Option Set
</td></tr><tr><td>
OPTIONS
</td><td>
GROUP
</td><td>
$32
</td><td>
Option Group
</td></tr><tr><td>
TITLES
</td><td>
TYPE
</td><td>
$1
</td><td>
Title Location
</td></tr><tr><td>
TITLES
</td><td>
NUMBER
</td><td>
8
</td><td>
Title Number
</td></tr><tr><td>
TITLES
</td><td>
TEXT
</td><td>
$256
</td><td>
Title Text
</td></tr><tr><td>
MACROS
</td><td>
SCOPE
</td><td>
$32
</td><td>
Macro Scope
</td></tr><tr><td>
MACROS
</td><td>
NAME
</td><td>
$32
</td><td>
Macro Variable Name
</td></tr><tr><td>
MACROS
</td><td>
OFFSET
</td><td>
8
</td><td>
Offset into Macro Variable
</td></tr><tr><td>
MACROS
</td><td>
VALUE
</td><td>
$200
</td><td>
Macro Variable Value
</td></tr><tr><td>
STYLES
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
STYLES
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
STYLES
</td><td>
STYLE
</td><td>
$32
</td><td>
Style Name
</td></tr><tr><td>
STYLES
</td><td>
CRDATE
</td><td>
8
</td><td>
Date Created
</td></tr><tr><td>
FORMATS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
FORMATS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
FORMATS
</td><td>
PATH
</td><td>
$1024
</td><td>
Pathname
</td></tr><tr><td>
FORMATS
</td><td>
OBJNAME
</td><td>
$32
</td><td>
Object Name
</td></tr><tr><td>
FORMATS
</td><td>
FMTNAME
</td><td>
$32
</td><td>
Format Name
</td></tr><tr><td>
FORMATS
</td><td>
FMTTYPE
</td><td>
$1
</td><td>
Format Type
</td></tr><tr><td>
FORMATS
</td><td>
SOURCE
</td><td>
$1
</td><td>
Format Source
</td></tr><tr><td>
FORMATS
</td><td>
MINW
</td><td>
8
</td><td>
Minimum Width
</td></tr><tr><td>
FORMATS
</td><td>
MIND
</td><td>
8
</td><td>
Minimum Decimal Width
</td></tr><tr><td>
FORMATS
</td><td>
MAXW
</td><td>
8
</td><td>
Maximum Width
</td></tr><tr><td>
FORMATS
</td><td>
MAXD
</td><td>
8
</td><td>
Maximum Decimal Width
</td></tr><tr><td>
FORMATS
</td><td>
DEFW
</td><td>
8
</td><td>
Default Width
</td></tr><tr><td>
FORMATS
</td><td>
DEFD
</td><td>
8
</td><td>
Default Decimal Width
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
TABLE_CATALOG
</td><td>
$8
</td><td>
Libname
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
TABLE_SCHEMA
</td><td>
$8
</td><td>
Table Schema
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
TABLE_NAME
</td><td>
$32
</td><td>
Table
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Constraint Catalog
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Constraint Schema
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
CONSTRAINT_NAME
</td><td>
$32
</td><td>
Constraint Name
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
CONSTRAINT_TYPE
</td><td>
$8
</td><td>
Constraint Type
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
IS_DEFERRABLE
</td><td>
$1
</td><td>
Is Deferred?
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
INITIALLY_DEFERRED
</td><td>
$1
</td><td>
Initially Deferred?
</td></tr><tr><td>
TABLE_CONSTRAINTS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Constraint Catalog
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Constraint Schema
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
CONSTRAINT_NAME
</td><td>
$32
</td><td>
Constraint Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UNIQUE_CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Unique Constraint Catalog
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UNIQUE_CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Unique Constraint Schema
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UNIQUE_LIBNAME
</td><td>
$8
</td><td>
Unique Library Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UNIQUE_MEMNAME
</td><td>
$32
</td><td>
Unique Member Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UNIQUE_CONSTRAINT_NAME
</td><td>
$32
</td><td>
Unique Constraint Name
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
MATCH_OPTION
</td><td>
$8
</td><td>
Match Option
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
UPDATE_RULE
</td><td>
$12
</td><td>
Update Rule
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
DELETE_RULE
</td><td>
$12
</td><td>
Delete Rule
</td></tr><tr><td>
REFERENTIAL_CONSTRAINTS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Constraint Catalog
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Constraint Schema
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
CONSTRAINT_NAME
</td><td>
$32
</td><td>
Constraint Name
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
CHECK_CLAUSE
</td><td>
$256
</td><td>
Check Clause
</td></tr><tr><td>
CHECK_CONSTRAINTS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
TABLE_CATALOG
</td><td>
$8
</td><td>
Libname
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
TABLE_SCHEMA
</td><td>
$8
</td><td>
Table Schema
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
TABLE_NAME
</td><td>
$32
</td><td>
Table
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Constraint Catalog
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Constraint Schema
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
CONSTRAINT_NAME
</td><td>
$32
</td><td>
Constraint Name
</td></tr><tr><td>
CONSTRAINT_TABLE_USAGE
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
TABLE_CATALOG
</td><td>
$8
</td><td>
Libname
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
TABLE_SCHEMA
</td><td>
$8
</td><td>
Table Schema
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
TABLE_NAME
</td><td>
$32
</td><td>
Table
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
COLUMN_NAME
</td><td>
$32
</td><td>
Column
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
CONSTRAINT_CATALOG
</td><td>
$32
</td><td>
Constraint Catalog
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
CONSTRAINT_SCHEMA
</td><td>
$8
</td><td>
Constraint Schema
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
CONSTRAINT_NAME
</td><td>
$32
</td><td>
Constraint Name
</td></tr><tr><td>
CONSTRAINT_COLUMN_USAGE
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
DICTIONARIES
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
DICTIONARIES
</td><td>
MEMLABEL
</td><td>
$256
</td><td>
Data Set Label
</td></tr><tr><td>
DICTIONARIES
</td><td>
NAME
</td><td>
$32
</td><td>
Column Name
</td></tr><tr><td>
DICTIONARIES
</td><td>
TYPE
</td><td>
$4
</td><td>
Column Type
</td></tr><tr><td>
DICTIONARIES
</td><td>
LENGTH
</td><td>
8
</td><td>
Column Length
</td></tr><tr><td>
DICTIONARIES
</td><td>
NPOS
</td><td>
8
</td><td>
Column Position
</td></tr><tr><td>
DICTIONARIES
</td><td>
VARNUM
</td><td>
8
</td><td>
Column Number in Table
</td></tr><tr><td>
DICTIONARIES
</td><td>
LABEL
</td><td>
$256
</td><td>
Column Label
</td></tr><tr><td>
DICTIONARIES
</td><td>
FORMAT
</td><td>
$49
</td><td>
Column Format
</td></tr><tr><td>
DICTIONARIES
</td><td>
INFORMAT
</td><td>
$49
</td><td>
Column Informat
</td></tr><tr><td>
GOPTIONS
</td><td>
OPTNAME
</td><td>
$32
</td><td>
Option Name
</td></tr><tr><td>
GOPTIONS
</td><td>
OPTTYPE
</td><td>
$8
</td><td>
Option type
</td></tr><tr><td>
GOPTIONS
</td><td>
OFFSET
</td><td>
8
</td><td>
Offset into option value
</td></tr><tr><td>
GOPTIONS
</td><td>
SETTING
</td><td>
$1024
</td><td>
Option Setting
</td></tr><tr><td>
GOPTIONS
</td><td>
OPTDESC
</td><td>
$160
</td><td>
Option Description
</td></tr><tr><td>
GOPTIONS
</td><td>
LEVEL
</td><td>
$8
</td><td>
Option Location
</td></tr><tr><td>
GOPTIONS
</td><td>
OPTSTART
</td><td>
$8
</td><td>
Option Set
</td></tr><tr><td>
GOPTIONS
</td><td>
GROUP
</td><td>
$32
</td><td>
Option Group
</td></tr><tr><td>
ENGINES
</td><td>
ENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
ENGINES
</td><td>
ALIAS
</td><td>
$8
</td><td>
Alias
</td></tr><tr><td>
ENGINES
</td><td>
DESCRIPTION
</td><td>
$40
</td><td>
Description
</td></tr><tr><td>
ENGINES
</td><td>
PREFERRED
</td><td>
$3
</td><td>
Preferred?
</td></tr><tr><td>
ENGINES
</td><td>
PROPERTIES
</td><td>
$1024
</td><td>
Engine Dialog Properties
</td></tr><tr><td>
LIBNAMES
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
LIBNAMES
</td><td>
ENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
LIBNAMES
</td><td>
PATH
</td><td>
$1024
</td><td>
Pathname
</td></tr><tr><td>
LIBNAMES
</td><td>
LEVEL
</td><td>
8
</td><td>
Library Concatenation Level
</td></tr><tr><td>
LIBNAMES
</td><td>
FILEFORMAT
</td><td>
$8
</td><td>
Default File Format
</td></tr><tr><td>
LIBNAMES
</td><td>
READONLY
</td><td>
$3
</td><td>
Read-only?
</td></tr><tr><td>
LIBNAMES
</td><td>
SEQUENTIAL
</td><td>
$3
</td><td>
Sequential?
</td></tr><tr><td>
LIBNAMES
</td><td>
SYSDESC
</td><td>
$1024
</td><td>
System Information Description
</td></tr><tr><td>
LIBNAMES
</td><td>
SYSNAME
</td><td>
$1024
</td><td>
System Information Name
</td></tr><tr><td>
LIBNAMES
</td><td>
SYSVALUE
</td><td>
$1024
</td><td>
System Information Value
</td></tr><tr><td>
LIBNAMES
</td><td>
TEMP
</td><td>
$3
</td><td>
Temp Access?
</td></tr><tr><td>
DESTINATIONS
</td><td>
DESTINATION
</td><td>
$100
</td><td>
Destination
</td></tr><tr><td>
DESTINATIONS
</td><td>
STYLE
</td><td>
$32
</td><td>
Style
</td></tr><tr><td>
FUNCTIONS
</td><td>
SOURCE
</td><td>
$1
</td><td>
Format Source
</td></tr><tr><td>
FUNCTIONS
</td><td>
FNCNAME
</td><td>
$32
</td><td>
Function name
</td></tr><tr><td>
FUNCTIONS
</td><td>
MINARG
</td><td>
8
</td><td>
Minimum args to function
</td></tr><tr><td>
FUNCTIONS
</td><td>
MAXARG
</td><td>
8
</td><td>
Maximum args to function
</td></tr><tr><td>
FUNCTIONS
</td><td>
FNCTYPE
</td><td>
$1
</td><td>
Function type
</td></tr><tr><td>
FUNCTIONS
</td><td>
FNCARGS
</td><td>
8
</td><td>
Argument attributes
</td></tr><tr><td>
FUNCTIONS
</td><td>
FNCPROD
</td><td>
$1
</td><td>
Function implementation type
</td></tr><tr><td>
INFOMAPS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
INFOMAPS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
INFOMAPS
</td><td>
MAPNAME
</td><td>
$60
</td><td>
Information Map Name
</td></tr><tr><td>
INFOMAPS
</td><td>
REPOSITORY
</td><td>
$128
</td><td>
Information Map Repository
</td></tr><tr><td>
INFOMAPS
</td><td>
PATH
</td><td>
$1024
</td><td>
Information Map Path
</td></tr><tr><td>
INFOMAPS
</td><td>
PROMPTID
</td><td>
$1024
</td><td>
Information Map Prompt ID
</td></tr><tr><td>
INFOMAPS
</td><td>
DESCRIPTION
</td><td>
$1024
</td><td>
Information Map Description
</td></tr><tr><td>
INFOMAPS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
DATAITEMS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
DATAITEMS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
DATAITEMS
</td><td>
NAME
</td><td>
$32
</td><td>
Column Name
</td></tr><tr><td>
DATAITEMS
</td><td>
DATAITEMNAME
</td><td>
$1024
</td><td>
Data Item Name
</td></tr><tr><td>
DATAITEMS
</td><td>
ID
</td><td>
$1024
</td><td>
Data Item ID
</td></tr><tr><td>
DATAITEMS
</td><td>
PATH
</td><td>
$1024
</td><td>
Data Item Path
</td></tr><tr><td>
DATAITEMS
</td><td>
CLASS
</td><td>
$8
</td><td>
Data Item Classification
</td></tr><tr><td>
DATAITEMS
</td><td>
AGGREGATION
</td><td>
$64
</td><td>
Data Item Default Aggregation
</td></tr><tr><td>
DATAITEMS
</td><td>
ISCALC
</td><td>
$3
</td><td>
Data Item is Calculated?
</td></tr><tr><td>
DATAITEMS
</td><td>
ISUSABLE
</td><td>
$3
</td><td>
Data Item is Usable?
</td></tr><tr><td>
DATAITEMS
</td><td>
PROMPTID
</td><td>
$1024
</td><td>
Data Item Prompt ID
</td></tr><tr><td>
DATAITEMS
</td><td>
DESCRIPTION
</td><td>
$1024
</td><td>
Data Item Description
</td></tr><tr><td>
DATAITEMS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
FILTERS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
FILTERS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
FILTERS
</td><td>
NAME
</td><td>
$32
</td><td>
SAS Name for Filter
</td></tr><tr><td>
FILTERS
</td><td>
FILTERNAME
</td><td>
$1024
</td><td>
Filter Name
</td></tr><tr><td>
FILTERS
</td><td>
ID
</td><td>
$1024
</td><td>
Filter ID
</td></tr><tr><td>
FILTERS
</td><td>
PATH
</td><td>
$1024
</td><td>
Filter Path
</td></tr><tr><td>
FILTERS
</td><td>
PROMPTUSAGE
</td><td>
$6
</td><td>
Filter Prompt Usage
</td></tr><tr><td>
FILTERS
</td><td>
USAGEPROMPTID
</td><td>
$1024
</td><td>
Prompt ID Usage with Filter
</td></tr><tr><td>
FILTERS
</td><td>
DESCRIPTION
</td><td>
$1024
</td><td>
Filter Description
</td></tr><tr><td>
FILTERS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
PROMPTS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
PROMPTS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
PROMPTS
</td><td>
NAME
</td><td>
$32
</td><td>
SAS Name for Prompt
</td></tr><tr><td>
PROMPTS
</td><td>
PROMPTNAME
</td><td>
$1024
</td><td>
Prompt Name
</td></tr><tr><td>
PROMPTS
</td><td>
ID
</td><td>
$1024
</td><td>
Prompt ID
</td></tr><tr><td>
PROMPTS
</td><td>
TEXT
</td><td>
$1024
</td><td>
Prompting Text
</td></tr><tr><td>
PROMPTS
</td><td>
TYPE
</td><td>
$4
</td><td>
Prompt Value Type
</td></tr><tr><td>
PROMPTS
</td><td>
LENGTH
</td><td>
8
</td><td>
Prompt Value Length
</td></tr><tr><td>
PROMPTS
</td><td>
PROMPTTYPE
</td><td>
$64
</td><td>
Prompt Value SQL Type
</td></tr><tr><td>
PROMPTS
</td><td>
DEPENDENTPID
</td><td>
$1024
</td><td>
Dependent Prompt ID
</td></tr><tr><td>
PROMPTS
</td><td>
DESCRIPTION
</td><td>
$1024
</td><td>
Prompt Description
</td></tr><tr><td>
PROMPTS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
PROMPTSXML
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
PROMPTSXML
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
PROMPTSXML
</td><td>
ID
</td><td>
$1024
</td><td>
Prompt ID
</td></tr><tr><td>
PROMPTSXML
</td><td>
ORDER
</td><td>
8
</td><td>
Order Number of XML String
</td></tr><tr><td>
PROMPTSXML
</td><td>
LENGTH
</td><td>
8
</td><td>
XML String Length
</td></tr><tr><td>
PROMPTSXML
</td><td>
XML
</td><td>
$32767
</td><td>
Prompt XML String
</td></tr><tr><td>
PROMPTSXML
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
ENGINE
</td><td>
$8
</td><td>
Engine Name
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
SRC_LIBNAME
</td><td>
$8
</td><td>
Source Library Name
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
SRC_MEMNAME
</td><td>
$32
</td><td>
Source Member Name
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
SRC_COUNT
</td><td>
8
</td><td>
Number of References to Source
</td></tr><tr><td>
VIEW_SOURCES
</td><td>
SRC_OUTPUT
</td><td>
$3
</td><td>
Source written to?
</td></tr><tr><td>
XATTRS
</td><td>
LIBNAME
</td><td>
$8
</td><td>
Library Name
</td></tr><tr><td>
XATTRS
</td><td>
MEMNAME
</td><td>
$32
</td><td>
Member Name
</td></tr><tr><td>
XATTRS
</td><td>
NAME
</td><td>
$32
</td><td>
Column Name
</td></tr><tr><td>
XATTRS
</td><td>
XATTR
</td><td>
$32
</td><td>
Extended Attribute Name
</td></tr><tr><td>
XATTRS
</td><td>
XTYPE
</td><td>
$4
</td><td>
Extended Attribute Type
</td></tr><tr><td>
XATTRS
</td><td>
XOFFSET
</td><td>
8
</td><td>
Offset Into Extended Attribute Value
</td></tr><tr><td>
XATTRS
</td><td>
XVALUE
</td><td>
$200
</td><td>
Extended Attribute Value
</td></tr><tr><td>
XATTRS
</td><td>
DIAGNOSTIC
</td><td>
$256
</td><td>
Diagnostic Message from File Open Attempt
</td></tr><tr><td>
LOCALES
</td><td>
LOCALE
</td><td>
$5
</td><td>
Locale name
</td></tr><tr><td>
LOCALES
</td><td>
LANGUAGE
</td><td>
$60
</td><td>
Language
</td></tr><tr><td>
LOCALES
</td><td>
REGION
</td><td>
$60
</td><td>
Region
</td></tr><tr><td>
LOCALES
</td><td>
CURRSYM
</td><td>
$360
</td><td>
Currency Symbol
</td></tr><tr><td>
LOCALES
</td><td>
ICURRSYM
</td><td>
$3
</td><td>
International Currency Symbol
</td></tr><tr><td>
LOCALES
</td><td>
CURRRAD
</td><td>
$6
</td><td>
Currency Radix
</td></tr><tr><td>
LOCALES
</td><td>
CURRSEP
</td><td>
$6
</td><td>
Currency Separator
</td></tr><tr><td>
LOCALES
</td><td>
CURRFRAC
</td><td>
8
</td><td>
Number of Digits for Fraction
</td></tr><tr><td>
LOCALES
</td><td>
CURRIFRAC
</td><td>
8
</td><td>
Number of Digits for International Fraction
</td></tr></tbody></table>
<!-- /wp:table -->