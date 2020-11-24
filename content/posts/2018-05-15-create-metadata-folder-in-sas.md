---
title: 'Create a Metadata Folder in SAS -Programmatically'
date: '2018-05-15 15:00:13'
path: '/create-metadata-folder-in-sas/'
previewImg: ''
tags:
  - Movable Type
---

As a <a href="https://www.linkedin.com/pulse/5-tips-sas-app-developers-allan-bowe/">SAS Application Developer</a>, it's important for me to be able to build and deploy with the minimum of point and click intervention.  After previously automating the creation of a SAS <a href="https://github.com/sasjs/core/blob/main/meta/mm_createstp.sas">Stored Process</a>, the next step for me was to find a way to put it somewhere without manually creating a folder first.

Inspired by <a href="https://platformadmin.com/blogs/paul/2010/07/mkdirmd/">this post</a> from <a href="https://www.linkedin.com/in/paulhomes/">Paul Homes</a>, here is my result:

<a href="https://github.com/sasjs/core/blob/main/meta/mm_createfolder.sas">https://github.com/sasjs/core/blob/main/meta/mm_createfolder.sas</a>

This macro will work on versions of SAS from 9.2 onwards, and has the following features:
<ul>
 	<li>Will create all necessary parent folders (eg <code>/Shared Data/new1/new2/new3</code>)</li>
 	<li>Error checking at every step</li>
 	<li>Output dataset with uri of generated folder</li>
 	<li>Prevents new ROOT folders being created</li>
</ul>
The usage looks something like this:

<code>    %mm_createfolder(path=/Shared Data/new1/new2/new3)</code>

As with anything like this - the code is without warranty and you mustn't get narky if your system explodes.  You may raise <a href="https://github.com/sasjs/core/issues">issues on github</a> though, or let me know directly!