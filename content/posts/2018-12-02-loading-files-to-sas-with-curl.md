---
title: 'Loading files to SAS with CURL'
date: '2018-12-02 16:26:51'
path: '/loading-files-to-sas-with-curl/'
previewImg: '../images/frontmatter3.png'
tags:
  - sas
  - SAS Stored Process Web Application
  - sas web app
  - SAS Web Applications
  - SAS Web Apps
  - Stored Process Web Applications
  - Stored Processes
  - Web Applications
---

A useful feature of SAS Stored Processes is the ability to load multiple files in a single request. This could be a bunch of CSVs for processing, or even a `.sas` program that you want to `%include` along with some associated data (deliberate SAS injection). This is particularly useful when you are running a build process, eg for a web application, and you need to send across some SAS programs that should be compiled into Stored Processes and re-downloaded as a distributable SPK. If you send your executable .sas program as the first file, to a 'master' STP that has just one line of code (`%inc &amp;_webin_fileref1/source2;`), then this becomes the only entry point you need when running from a non-SAS environment!

Anyway, here is the sample code:

<pre>curl -v -L -b cookiefile -c cookiefile \
    -H "Content-Type: multipart/form-data" \
    -F "myprogram=@./runme.sas" \
    -F "somefile1=@./processme.csv" \
    -F "somefile2=@./processmeaswell.csv" \
    "$SERVER?_program=$STP&amp;_username=$USER&amp;_password=$PASS"
    --output "/tmp/out.txt"</pre>

Things to note:

<h3>curl options</h3>
<ul>
 	<li>-v = verbose</li>
 	<li>-L = follow the redirects</li>
 	<li>-b / -c = cookie in / out</li>
 	<li>-H = http header</li>
 	<li>-F = Files for upload</li>
 	<li>--output = output filename</li>
</ul>
<h3>Substitutions</h3>
<ul>
 	<li>$SERVER = your SAS server, eg: https://yourserver.com/SASStoredProcess/do</li>
 	<li>$STP = full metadata path to STP, eg:  /my/meta/path/to/my/service</li>
 	<li>$USER = sas username, including @saspw suffix if an internal account</li>
 	<li>$PASS = sas password</li>
</ul>
<strong>SAS Considerations</strong>

The following automatically assigned macro variables will be helpful when accessing the files you have uploaded:

<ul>
 	<li>_WEBIN_FILE_COUNT - contains a count of the number of files that were uploaded</li>
 	<li>_WEBIN_FILEREF - a unique fileref that can be used to access the file</li>
 	<li>_WEBIN_FILENAME - the location in which the file is saved in SAS (eg in WORK)</li>
 	<li>_WEBIN_NAME - the name given for the file on upload (eg somefile1 / somefile2 in the example)</li>
</ul>
The above variables are actually macro variable arrays - so _WEBIN_FILENAME1 will be the first,  _WEBIN_FILENAME2 will be the second, and so on.
<h3>Further resources</h3>
If you want more background on building web applications with SAS, check out the following resources!
<ul>
 	<li><a href="https://github.com/macropeople/macrocore">MacroCore</a> - library for SAS Application Development</li>
 	<li><a href="https://github.com/macropeople/sasjs">SASjs</a> - Adapter for SAS-JS communication</li>
 	<li><a href="https://github.com/macropeople/sasjs-cli">sasjs-cli</a> - utility for building SAS Apps</li>
 	<li>https://sasjs.io - guide to building web apps on SAS</li>
</ul>
<a href="https://datacontroller.io">Data Controller</a> is also a super useful tool for SAS data capture and <a href="https://www.linkedin.com/pulse/zen-art-data-quality-allan-bowe/">data quality</a>, as well as <a href="https://datacontroller.io/euc-management-system/">EUC</a> / Power BI integration and is available as a free 30 day demo version.

Happy coding!
