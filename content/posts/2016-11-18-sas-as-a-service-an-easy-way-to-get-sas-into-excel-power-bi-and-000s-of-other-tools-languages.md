---
title: 'SAS As A Service - an easy way to get SAS into Excel, Power BI '
date: '2016-11-18 09:30:00'
path: '/sas-as-a-service-an-easy-way-to-get-sas-into-excel-power-bi-and-000s-of-other-tools-languages/'
tags:
  - SQL
---

When we think about using SAS with Excel, one begins to groan at the myriad of options - DDE, SAS Addin, various Excel-ish library engines, IOM in VBA, etc etc etc.

What if there were a simple technique, quick to set up, and easy to adjust?

A technique that works on ANY version of Excel, requires no install, works cross platform and encompasses full metadata security (at point of connection)?

A technique that has been available to us for at least 15 years¹?

For those of us who work with <a href="https://rawsas.blogspot.co.uk/2015/12/building-web-apps-with-sas.html" target="_blank" rel="noopener">SAS Web Applications</a>, the idea of streaming data via a URL is not unusual.  It's a great approach as it ensures we can get the latest version of data, using the latest version of the code, with the permission set granted to that user at that point in time.

Extending this concept to Excel is as easy as 1,2,3:

<h3>1 - Set up the Stored Process</h3>
The code below should be registered as a stored process using SAS Management Console with STREAMing output:
<blockquote style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="background: white; color: green; font-family: 'courier new';">/* STP URL Parameters */</span>
<span style="background: white; color: blue; font-family: 'courier new';">%global</span><span style="background: white; font-family: 'courier new';"> type libds;
</span><span style="background: white; color: green; font-family: 'courier new';">/**</span>
<span style="background: white; color: green; font-family: 'courier new';"> * assign metadata library from libref
</span><span style="background: white; color: green; font-family: 'courier new';"> */</span>
<span style="background: white; color: blue; font-family: 'courier new';">%let</span><span style="background: white; font-family: 'courier new';"> libref=</span><span style="background: white; color: blue; font-family: 'courier new';">%scan</span><span style="background: white; font-family: 'courier new';">(&amp;libds,1,.);
</span><b><span style="background: white; color: navy; font-family: 'courier new';">data</span></b> <span style="background: white; color: blue; font-family: 'courier new';">_null_</span><span style="background: white; font-family: 'courier new';">;
</span><span style="background: white; font-family: 'courier new';">  </span><span style="background: white; color: blue; font-family: 'courier new';">length</span><span style="background: white; font-family: 'courier new';"> lib_uri LibName $</span><b><span style="background: white; color: teal; font-family: 'courier new';">200</span></b><span style="background: white; font-family: 'courier new';">;
</span><span style="background: white; font-family: 'courier new';">  </span><span style="background: white; color: blue; font-family: 'courier new';">if</span><span style="background: white; font-family: 'courier new';"> metadata_getnobj(</span><span style="background: white; color: purple; font-family: 'courier new';">"omsobj:SASLibrary?@Libref='&amp;libref'"</span><span style="background: white; font-family: 'courier new';">,</span><b><span style="background: white; color: teal; font-family: 'courier new';">1</span></b><span style="background: white; font-family: 'courier new';">,lib_uri) </span><span style="background: white; color: blue; font-family: 'courier new';">then</span> <span style="background: white; color: blue; font-family: 'courier new';">do</span><span style="background: white; font-family: 'courier new';">;
</span><span style="background: white; font-family: 'courier new';">    rc=metadata_getattr(lib_uri,</span><span style="background: white; color: purple; font-family: 'courier new';">"Name"</span><span style="background: white; font-family: 'courier new';">,LibName);
</span><span style="background: white; font-family: 'courier new';">    </span><span style="background: white; color: blue; font-family: 'courier new';">call</span><span style="background: white; font-family: 'courier new';"> symputx(</span><span style="background: white; color: purple; font-family: 'courier new';">'libname'</span><span style="background: white; font-family: 'courier new';">,libname);
</span><span style="background: white; font-family: 'courier new';">  </span><span style="background: white; color: blue; font-family: 'courier new';">end</span><span style="background: white; font-family: 'courier new';">;
</span><b><span style="background: white; color: navy; font-family: 'courier new';">run</span></b><span style="background: white; font-family: 'courier new';">;
</span><span style="background: white; color: blue; font-family: 'courier new';">libname</span><span style="background: white; font-family: 'courier new';"> &amp;libref </span><span style="background: white; color: blue; font-family: 'courier new';">meta</span> <span style="background: white; color: blue; font-family: 'courier new';">library</span><span style="background: white; font-family: 'courier new';">=</span><span style="background: white; color: purple; font-family: 'courier new';">"&amp;libname"</span><span style="background: white; font-family: 'courier new';">;
</span><span style="background: white; font-family: 'courier new';"> </span><span style="background: white; color: green; font-family: 'courier new';">/* set content type if CSV */</span>
<div style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><b><span style="background: white; color: navy; font-family: 'courier new';">data</span></b> <span style="background: white; color: blue; font-family: 'courier new';">_null_</span><span style="background: white; font-family: 'courier new';">;</span></div>
<div style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="background: white; font-family: 'courier new';">  </span><span style="background: white; color: blue; font-family: 'courier new';">if</span> <span style="background: white; color: purple; font-family: 'courier new';">"%upcase(&amp;type)"</span><span style="background: white; font-family: 'courier new';">=</span><span style="background: white; color: purple; font-family: 'courier new';">"CSV"</span> <span style="background: white; color: blue; font-family: 'courier new';">then</span></div>
<div style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="background: white; font-family: 'courier new';">    rc=stpsrv_header(</span><span style="background: white; color: purple; font-family: 'courier new';">"Content-type"</span></div>
<div style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="background: white; font-family: 'courier new';">      ,</span><span style="background: white; color: purple; font-family: 'courier new';">"Content-Type: text/csv; encoding=utf-8"</span></div>
<div style="line-height: normal; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="background: white; color: purple; font-family: 'courier new';">    </span><span style="background: white; font-family: 'courier new';">);</span></div>
<div><b><span style="background: white; color: navy; font-family: 'courier new';">run</span></b><span style="background: white; font-family: 'courier new';">;</span></div>
<span style="background: white; font-family: 'courier new';"> </span><span style="background: white; color: green; font-family: 'courier new';">/* send data */</span>
<b><span style="background: white; color: navy; font-family: 'courier new';">PROC</span></b> <b><span style="background: white; color: navy; font-family: 'courier new';">EXPORT</span></b> <span style="background: white; color: blue; font-family: 'courier new';">DATA</span><span style="background: white; font-family: 'courier new';">=&amp;libds </span><span style="background: white; color: blue; font-family: 'courier new';">OUTFILE</span><span style="background: white; font-family: 'courier new';">=_webout </span><span style="background: white; color: blue; font-family: 'courier new';">DBMS</span><span style="background: white; font-family: 'courier new';">=&amp;type </span><span style="background: white; color: blue; font-family: 'courier new';">REPLACE</span><span style="background: white; font-family: 'courier new';">;
</span><b><span style="background: white; color: navy; font-family: 'courier new';">run</span></b><span style="background: white; font-family: 'courier new';">;</span></blockquote>
&nbsp;
<h3>2 - Set up the Workbook</h3>
The 'trick' here is simply to set up a web query to call the STP above.  The options vary as per the version of Excel, here is the path for Excel 2010:
<div style="clear: both; text-align: center;"><img class="alignnone size-medium wp-image-86" src="../images/Capture-1-300x174.png" alt="" width="300" height="174" /></div>
<div style="clear: both; text-align: center;"></div>
Next step is to add the (appropriately formatted) URL, eg below.  Note that I called my STP "SAAS" and placed it in a metadata root folder called Web.
<blockquote><span style="font-family: 'courier new' , 'courier' , monospace;">http://YOURSASMID:8080/SASStoredProcess/do?_PROGRAM=/Web/SAAS&amp;libds=sashelp.class&amp;type=tab</span></blockquote>
We are asking for the sashelp.class dataset, and for it to be TAB delimited.  This gets pasted into the web query box, and gives results as follows:

<img class="size-full wp-image-87 aligncenter" src="../images/Capture-2.png" alt="" width="244" height="209" />
<div style="clear: both; text-align: center;"></div>
We now have our data in excel, but for those who wish to avoid the need to 'right click / refresh' we should:
<h3>3 - Automate</h3>
The beauty of this approach is that it is so easy to automate in VBA!
<div style="clear: both; text-align: center;"> <img class="alignnone size-medium wp-image-88" src="../images/Capture-3-300x141.png" alt="" width="300" height="141" /></div>
<h3>By the Power of Greyskull</h3>
Now that our STP is configured, it is gobsmackingly straightforward to get the power of SAS into Power BI.  Again, simply select Get Data and Web:
<div style="clear: both; text-align: center;"></div>
<div><img class="size-medium wp-image-89 aligncenter" src="../images/Capture-4-269x300.png" alt="" width="269" height="300" /></div>
Enter an appropriately formatted URL, using type=CSV in the parameters:
<blockquote><span style="font-family: 'courier new' , 'courier' , monospace;">http://YOURSASMID:8080/SASStoredProcess/do?_PROGRAM=/Web/SAAS&amp;libds=sashelp.class&amp;type=CSV</span></blockquote>
You may then need to select the appropriate credentials with which to connect (eg windows authentication for IWA, or use Basic if you normally enter passwords for SAS).

In the final screen simply mark the type of your input:

<img class="size-medium wp-image-90 aligncenter" src="../images/Capture-5-300x198.png" alt="" width="300" height="198" />
<div style="clear: both; text-align: center;"></div>
and - voila!

<img class="size-medium wp-image-91 aligncenter" src="../images/Capture-6-300x104.png" alt="" width="300" height="104" />
<div style="clear: both; text-align: center;"></div>
&nbsp;
<div style="clear: both; text-align: center;"></div>
Of course this is a very simple example, but using the above template you can start to add more parameters on the SAS side - enabling where clauses, drop statements, business logic etc.

The same approach can be used to get data into Powershell, Python, R, uncountable client applications, and of course - javascript (see <a href="http://rawsas.blogspot.co.uk/2015/12/building-web-apps-with-sas.html" target="_blank" rel="noopener">building web apps with SAS</a>).

Got any other tips?  Please share in the comments below..

<b>References:</b>
<span style="font-size: x-small;">¹ Vincent DelGobbo discusses web queries with SAS/IntrNet in this SUGI27 (2002) <a href="http://www2.sas.com/proceedings/sugi27/p174-27.pdf" target="_blank" rel="noopener">paper</a> </span>
<span style="font-size: xx-small;">2</span><span style="font-size: x-small;"> Stig Eide also discusses this approach in this <a href="http://bi-notes.com/2013/02/sas-stored-processes-querying-a-stored-process-from-excel-without-the-add-in/" target="_blank" rel="noopener">blog post </a>from 2013</span>
