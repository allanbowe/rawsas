---
title: 'Generate Resolved SAS code'
date: '2012-11-15 20:54:00'
path: '/generate-resolved-sas-code/'
tags:
  - Movable Type
---

Got a complex macro? &nbsp;Don't have time to work out what it is actually doing? &nbsp;Its much easier to work with resolved code! &nbsp;The macro below will help - just stick it at the start of your code, and write the resolved code somewhere else (which can then be 'stepped through' to understand whats going on).<br /><br /><br /><br /><div style="margin-bottom: 0.0001pt;"><b><span style="background: white; color: navy; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%macro</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;"><b><i>x</i></b>;&nbsp; </span><span style="background: white; color: green; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">/* mfile will only work if its inside a macro! */</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%let</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">loc=c:tempMyResolvedCode.txt; <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%let</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">rc = </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%sysfunc</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">(filename(fref,&amp;loc)); <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%let</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">rc = </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">%sysfunc</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">(fdelete(&amp;fref));&nbsp; <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; filename mprint </span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">"&amp;loc"</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">lrecl=</span><b><span style="background: white; color: teal; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">2048</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">;<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; options mfile mprint ;<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; data _null_;<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if _n_=</span><b><span style="background: white; color: teal; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">1</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">then call execute(</span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">"Data _null_;"</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">);<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; set sashelp.vlibnam(where=(substr(libname,</span><b><span style="background: white; color: teal; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">1</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">,</span><b><span style="background: white; color: teal; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">3</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">) ne </span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">'SAS'</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">));<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if cats(libname,path) ne unique then <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;call execute(</span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">'comment Find&amp;ReplaceMe libname '</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">||libname||</span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">' "'</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">||trim(path)||</span><span style="background: white; color: purple; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">'";'</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">); <o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; retain unique;&nbsp; unique=cats(libname,path);<o:p></o:p></span></div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run;run;&nbsp;</span><span style="background: white; color: green; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">/* this bit retrieves the relevant libraries, without executing anything.. */</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt;"><o:p></o:p></span></div><div><b><span style="background: white; color: navy; font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 115%;">%mend</span></b><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt; line-height: 115%;">;&nbsp; %<b><i>x</i></b></span><o:p></o:p></div><br /><br />Points to note:<br /><br /><ul><li>If your macro is data driven, the code above may change depending on the data!</li><li>The delete function does not &nbsp;always work (eg if your SAS session still has the file open)</li><li>The comment feature is very old! &nbsp;Credit to James Taylor for knowing about this.</li><li>You may find for practical use, all you really need is this:</li></ul><div><div style="margin-bottom: 0.0001pt;"><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; color: blue; font-family: 'Courier New'; font-size: 10pt;">filename</span><span style="background-color: white; font-family: 'Courier New'; font-size: 10pt;">mprint </span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; color: purple; font-family: 'Courier New'; font-size: 10pt;">"c:tempMyResolvedCode.txt"</span><span style="background-color: white; font-family: 'Courier New'; font-size: 10pt;"></span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; color: blue; font-family: 'Courier New'; font-size: 10pt;">lrecl</span><span style="background-color: white; font-family: 'Courier New'; font-size: 10pt;">=</span><b><span style="background: white; color: teal; font-family: &quot;Courier New&quot;; font-size: 10.0pt;">2048</span></b><span style="background-color: white; font-family: 'Courier New'; font-size: 10pt;">;</span></div><div><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 115%;">options</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt; line-height: 115%;"> </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 115%;">mfile</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt; line-height: 115%;"> </span><span style="background: white; color: blue; font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 115%;">mprint</span><span style="background-color: white; background-position: initial initial; background-repeat: initial initial; font-family: 'Courier New'; font-size: 10pt; line-height: 115%;"> ;</span><o:p></o:p></div></div><div><br /></div><br />