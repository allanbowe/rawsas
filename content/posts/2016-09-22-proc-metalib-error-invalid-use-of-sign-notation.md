---
title: 'proc metalib - ERROR: Invalid use of sign notation'
date: '2016-09-22 09:10:00'
path: '/proc-metalib-error-invalid-use-of-sign-notation/'
tags:
  - 'ERROR: Invalid use of sign notation.'
---

So today I dropped a column in a SQL Server table (using SSMS) and duly checked out the SAS metadata in DI Studio in order to 'Update Metadata'.

It failed with a strange message:

<div><span style="background: white; color: red; font-family: 'courier new';">ERROR: Invalid use of sign notation.</span></div>
Curious, I extracted the code and ran it in Enterprise Guide (the repository ID would ensure it ran against my checkout).  Same result, so following the advice in<a href="http://support.sas.com/kb/40/429.html" target="_blank" rel="noopener"> usage note 40429</a> I ran with maximum logging (for 9.3) as follows:
<div><span style="background: white; color: blue; font-family: 'courier new';">options</span><span style="background: white; font-family: 'courier new';"> sastrace=</span><span style="background: white; color: purple; font-family: 'courier new';">',,,d'</span><span style="background: white; font-family: 'courier new';">sastraceloc=saslog nostsuffix;</span></div>
<div><b><span style="background: white; color: navy; font-family: 'courier new';">proc</span></b> <b><span style="background: white; color: navy; font-family: 'courier new';">metalib</span></b><span style="background: white; font-family: 'courier new';"> tl=</span><b><span style="background: white; color: teal; font-family: 'courier new';">4095</span></b><span style="background: white; font-family: 'courier new';">; </span><span style="background: white; color: green; font-family: 'courier new';">/* max is 4094 for 9.2 */</span></div>
<div><span style="background: white; font-family: 'courier new';">  omr (libid=</span><span style="background: white; color: purple; font-family: 'courier new';">"B900004R"</span><span style="background: white; font-family: 'courier new';"> repid=</span><span style="background: white; color: purple; font-family: 'courier new';">"A5HOSDWY"</span><span style="background: white; font-family: 'courier new';">);</span></div>
<div><span style="background: white; font-family: 'courier new';">  report(type = summary);</span></div>
<div><span style="background: white; font-family: 'courier new';">  update_rule = (noadd);</span></div>
<div><span style="background: white; font-family: 'courier new';">  select (A5GF9HGW.AD00016K);</span></div>
<div></div>
<div><b><span style="background: white; color: navy; font-family: 'courier new';">run</span></b><span style="background: white; font-family: 'courier new';">;</span></div>
The last operation before my SAS error was:

<span style="font-family: 'courier new' , 'courier' , monospace;">(MSCMLB) getREPindices: Enter</span>
<span style="font-family: 'courier new' , 'courier' , monospace;">(MSCMLB) getREPindices: Index object name is pk_rm_objects</span>
<span style="font-family: 'courier new' , 'courier' , monospace;">(MSCMLB) getREPindices: Index metaid is A5GF9HGW.AI00015K</span>
<span style="font-family: 'courier new' , 'courier' , monospace;">(MSCMLB) getREPindices: IndexName is pk_rm_objects</span>
<span style="font-family: 'courier new' , 'courier' , monospace;">(MSCMLB) getREPindices: Exit;  Return Code is -2147475442</span>

This indicated an issue with the index.  I tried various ways of redefining the index in SQL Server (from clustered to non-clustered, uppercase name to lowercase etc) to no avail.  In the end, the solution was simply to right click the metadata item in DI Studio, Properties, selecting the Index tab.  At this point I got a popup (similar to below) which mentioned the index needing to be marked as unique, and also about re-ordering columns.  I clicked yes, and - voila - I was then able to update the metadata!

<img class="size-medium wp-image-100 aligncenter" src="../images/Capture-300x123.png" alt="" width="300" height="123" />
<div style="clear: both; text-align: center;"></div>
&nbsp;
