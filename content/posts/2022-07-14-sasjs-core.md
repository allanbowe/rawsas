---
title: 'SASjs Core'
date: '2022-07-14 09:00:00'
path: '/sasjs-core/'
previewImg: '../images/core.png'
tags:
  - Macros
---

# SASjs Core - Macros for SAS Application Developers

How often have you needed a macro and thought "surely someone has done this before"?

There's no need to re-invent the wheel!  The SASjs Core library is a collection of 228 (and counting) fully documented macros, split between:

• BASE (macro functions & procedures)
• DDL (for table creation
• FCMP (functions)
• LUA (functions)
• META (macros for metadata)
• METAX (metadata macros with XCMD)
• SERVER (macros for SASjs Server)
• VIYA (macros for SPRE)
• XPLATFORM (for all flavours of SAS)

The relevant components can be added to your SASAUTOS as follows:

```sas
%let repoloc=/your/path/core;
options insert=(sasautos="&repoloc/base");
options insert=(sasautos="&repoloc/ddl");
options insert=(sasautos="&repoloc/fcmp");
options insert=(sasautos="&repoloc/lua");
options insert=(sasautos="&repoloc/meta");
options insert=(sasautos="&repoloc/metax");
options insert=(sasautos="&repoloc/server");
options insert=(sasautos="&repoloc/viya");
options insert=(sasautos="&repoloc/xplatform");
```

Alternatively, if you have internet access from SAS, you can quickly include the entire set in 2 lines of code:

```sas
filename mc url "https://bit.ly/sasjscore";
%inc mc;
```

If you're a JS developer you can also run the below to pull the macros into your repo and lock to a particular GIT version:

```bash
npm install @sasjs/core
```

More links:

* [Documentation](https://core.sasjs.io) (using [sasjs doc](https://cli.sasjs.io/doc/))
* [Tests](https://core.sasjs.io/dir_59425e443f801f1f2fd8bbe4959a3ccf.html) (using [sasjs test](https://cli.sasjs.io/test/))
* [Quality rules](https://github.com/sasjs/core/blob/main/.sasjslint) (using [sasjs lint](https://cli.sasjs.io/lint/))
* [Communities article](https://blogs.sas.com/content/sgf/2022/02/16/sas-open-source-treasures-from-around-the-world-sasjs/) on SASjs

We currently have [82 stars](https://github.com/sasjs/core#star-gazing), which puts us #10 in the top 10 of [SAS-tagged repos](https://github.com/sasjs/core). All macros are MIT open source, and free for commercial use.
