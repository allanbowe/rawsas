---
title: 'SASjs Artefacts'
date: '2022-07-26 09:00:00'
path: '/sasjs-artefacts/'
previewImg: '../images/artefacts.jpeg'
tags:
  - sasjs-cli
  - sas-admin
  - sas-developer
  - sasjs
  - devops
---

# SASjs Artefacts

What is a SAS program?

In SAS Solution Development, a file with a ".sas" extension can be many different things. A macro, a program, a piece of DDL, a datalines file, an autoexec, an FCMP function.  Often this plurality of purpose comes without documentation, nor even an indication in the program header.

In SASjs, this is not the case.  All ".sas" files are categorised firstly into Primary and Secondary Artefacts.

Primary Artefacts are the items which get deployed to your SAS server, eg:

* Jobs - typically running in batch with defined data inputs / outputs
* Services - http requests making use of WEBOUT
* Tests - to cover Jobs, Macros and Services

Primary artefacts contain numerous Secondary Artefacts, ie:

* SAS Macros - one macro per file, lower case, macro name matches file name
* SAS Includes - freeform SAS code
* Binary Files - eg zip, excel, PNG
* macroVars - Macro Variables
* initProgram - inserted before each Job / Service / Test
* termProgram - inserted after each Job / Service / Test

Everything in SASjs is configured in a single file (`sasjs/sasjsconfig.json`) so that you can arrange your artefacts within and across your GIT repositories however you wish.

SASjs brings clarity to SAS Solution Development and ignites velocity in SAS project delivery.

Documentation is available [here](https://cli.sasjs.io/artefacts/).


