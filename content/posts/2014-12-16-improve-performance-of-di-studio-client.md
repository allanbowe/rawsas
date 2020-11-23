---
title: 'Improve performance of DI Studio client'
date: '2014-12-16 17:11:00'
path: '/improve-performance-of-di-studio-client/'
previewImg: ''
tags:
  - SQL
---

You can speed up the performance of your DI Studio client by increasing memory via the JavaArgs_1 variable in the distudio.ini file. &nbsp;A suggested approach is to increase from -Xmx512m to -Xmx1024m.<br /><br /><div style="clear: both; text-align: center;"><a href="../images/DI_MemSize.PNG" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="190" src="../images/DI_MemSize.PNG" width="320" /></a></div><div style="clear: both; text-align: center;"><br /></div><div style="clear: both; text-align: left;">This is further documented in usage note <a href="http://support.sas.com/kb/41/571.html">41571</a>. &nbsp;A similar update can be made to SMC (useful when importing / exporting large packages).</div><br />Note that the max memory that will go in JavaArgs is typcially 1536.
