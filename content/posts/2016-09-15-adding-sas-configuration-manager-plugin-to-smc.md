---
title: 'Adding SAS Configuration Manager plugin to SMC'
date: '2016-09-15 18:14:00'
path: '/adding-sas-configuration-manager-plugin-to-smc/'
previewImg: '../images/frontmatter22.png'
tags:
  - Administration
  - Configuration Manager
  - Management Console
  - missing
  - plugin
  - sas
  - SMC
---

The SAS Configuration Manager plug-in is great for tweaking settings of the SAS Web Applications without poking around in xml and config files.  However, you may find it missing from the usual place under the Application Management folder in SAS Management Console.

If this is the case, first of all check that you are in the administrators group with an unrestricted user (or otherwise have the correct role / capability to view the plugin).

<img class="size-medium wp-image-104 aligncenter" src="../images/Capture-2-300x249.png" alt="" width="300" height="249" />

If it is not there, the chances are that it is not installed.  To install it, you need access to the SAS Software Depot - simply run the Deployment Wizard, selecting either:

<ul>
 	<li>SAS Web Infrastructure Client (9.2)</li>
 	<li>SAS Configuration Manager (9.3)</li>
</ul>
<div style="clear: both; text-align: center;"><img class="alignnone size-medium wp-image-105" src="../images/Capture-3-300x202.png" alt="" width="300" height="202" /></div>
<div>And then..   ka pow!</div>
<div style="clear: both; text-align: center;"><img class="alignnone size-medium wp-image-106" src="../images/Capture-4-300x206.png" alt="" width="300" height="206" /></div>
<div></div>
<div>Useful resources (9.2):</div>
<div> - SAS <a href="https://support.sas.com/kb/41/009.html" target="_blank" rel="noopener">Usage Note</a> 41009</div>
<div> - Angela Hall <a href="https://blogs.sas.com/content/bi/2009/10/08/configuration-manager-plugin-for-sas-management-console-9-2/" target="_blank" rel="noopener">blog</a></div>
<div></div>
<div>Useful resources (9.3)</div>
<div> - SAS <a href="https://support.sas.com/documentation/cdl/en/bimtag/65708/HTML/default/viewer.htm#n12pww56tafsy6n1tfggdgxjy1jl.htm" target="_blank" rel="noopener">documentation</a></div>
<div> - Paul Homes <a href="https://platformadmin.com/blogs/paul/2011/09/sas-management-console-93-configuration-manager/" target="_blank" rel="noopener">blog</a></div>
<div></div>
