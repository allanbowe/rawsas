---
title: 'Quick code for getting macro names from windows library'
date: '2012-11-08 20:04:00'
path: '/quick-code-for-getting-macro-names-from-windows-library/'
previewImg: ''
tags:
  - SQL
---

<br /><span style="color: blue; font-family: &quot;Courier New&quot;;">filename</span><span style="font-family: 'Courier New';"> loop</span> <span style="color: blue; font-family: &quot;Courier New&quot;;">pipe</span> <span style="color: purple; font-family: &quot;Courier New&quot;;">"ls SASEnvironment/SASCode/Jobs/RMFI/\*.sas"</span><span style="font-family: 'Courier New';">; </span><br /><b><span style="color: navy; font-family: &quot;Courier New&quot;;">data</span></b><span style="font-family: 'Courier New';"> loop; </span><br /><span style="color: blue; font-family: &quot;Courier New&quot;;">infile</span><span style="font-family: 'Courier New';"> loop</span> <span style="color: blue; font-family: &quot;Courier New&quot;;">pad</span> <span style="color: blue; font-family: &quot;Courier New&quot;;">missover</span><span style="font-family: 'Courier New';">; </span><br /><span style="color: blue; font-family: &quot;Courier New&quot;;">input</span><span style="font-family: 'Courier New';"> buffer :</span><span style="color: teal; font-family: &quot;Courier New&quot;;">\$150.</span><span style="font-family: 'Courier New';">; </span><br /><span style="font-family: 'Courier New';">macroname=scan(buffer,-</span><b><span style="color: teal; font-family: &quot;Courier New&quot;;">2</span></b><span style="font-family: 'Courier New';">); </span><br /><b><span style="color: navy; font-family: &quot;Courier New&quot;;">run</span></b><span style="font-family: 'Courier New';">;</span> <br />
