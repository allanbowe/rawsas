---
title: 'Building SAS Apps Locally'
date: '2016-10-21 08:19:00'
path: '/building-sas-apps-locally/'
tags:
  - Movable Type
---

I've recently been using Visual Studio to build my SAS Web Apps, which is great as the <a href="https://en.wikipedia.org/wiki/Intelligent_code_completion" target="_blank">intellisense </a>will even scan css files to help with code completion. &nbsp;Perhaps the best feature though is the ability to right click and immediately 'view in browser' - which spins up a local web server and avoids the need to constantly modify files on the main dev SAS web server.<br /><br />However - there are a few things to remember when using this feature to actually connect to SAS.<br /><br /><h3>Same Origin Policy</h3>In simple terms, this is a browser security feature that prevents javascript from connecting to a different server than that from which the page was served. &nbsp;You'll know you're affected if you see something like this in the console:<br /><br /><blockquote><span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace; font-size: x-small;">XMLHttpRequest cannot load http://SASMIDTIER:8080/SASStoredProcess/do. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:54048' is therefore not allowed access.</span></blockquote>To avoid this (using chrome) simply launch from the command line with that feature disabled - as follows:<br /><blockquote><span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace; font-size: x-small;">"C:Program Files (x86)GoogleChromeApplicationchrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security</span></blockquote><h3>hostUrl</h3>Now that we are launching from a local host, the <a href="http://boemskats.com/" target="_blank">Boemska </a>SAS adapter is unable to automatically determine the mid-tier location. &nbsp;This info needs to be provided, but not hard coded as we still need the code to work in different environments when it gets promoted. &nbsp;The following javascript code serves:<br /><br /><div style="line-height: normal; margin-bottom: .0001pt; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">&nbsp;&nbsp;</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt;">if</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">(location.hostname === </span><span style="color: #a31515; font-family: &quot;consolas&quot;; font-size: 9.5pt;">'localhost'&nbsp;</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">||&nbsp;</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">location.hostname ===&nbsp;</span><span style="color: #a31515; font-family: &quot;consolas&quot;; font-size: 9.5pt;">'127.0.0.1'</span><span style="font-family: consolas; font-size: 9.5pt;">) {</span></div><div style="line-height: normal; margin-bottom: .0001pt; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">&nbsp;&nbsp;&nbsp; </span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt;">var</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;"> strHostURL = </span><span style="color: #a31515; font-family: &quot;consolas&quot;; font-size: 9.5pt;">'http://SASMIDTIER:8080/'</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">;<o:p></o:p></span></div><div style="line-height: normal; margin-bottom: .0001pt; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">&nbsp; } </span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt;">else</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;"> {<o:p></o:p></span></div><div style="line-height: normal; margin-bottom: .0001pt; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">&nbsp;&nbsp;&nbsp; strHostURL = </span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt;">null</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">;<o:p></o:p></span></div><div style="line-height: normal; margin-bottom: .0001pt; margin-bottom: 0cm; mso-layout-grid-align: none; text-autospace: none;"><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt;">&nbsp; }<o:p></o:p></span></div><br /><div><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">&nbsp; </span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">var</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">adapter = </span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">new</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;"> h54s({ hostUrl: strHostURL });</span><o:p></o:p></div><br /><h3>HTML file location</h3><div>This may not be an issue with your web server / configuration, but something to remember. &nbsp;I normally keep my my web files organised as follows:</div><div><ul><li><span style="font-family: inherit;">ROOT.war</span></li><ul><li><span style="font-family: inherit;">JS</span></li><li><span style="font-family: inherit;">CSS</span></li><li><span style="font-family: inherit;">HTML</span></li><li><span style="font-family: inherit;">Images</span></li></ul></ul><div>In order to reference scripts / css / images from my html files, I normally use the ".." syntax to tell the browser to look 'up and then down' a directory, eg as follows:</div></div><div><br /></div><div><div><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">&nbsp;&nbsp;</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">&lt;</span><span style="color: maroon; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">script</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;"> </span><span style="color: red; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">src</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">=../js/h54s.js&gt;&lt;/</span><span style="color: maroon; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">script</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 115%;">&gt;</span><o:p></o:p></div><span style="white-space: pre-wrap;"></span></div><div><br /></div><div>Unfortunately that approach doesn't work in the web server spun up by VS2015, so I have to temporarily move my html file up into the parent folder and permanently change my references to read as follows:</div><div><br /></div><div><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">&nbsp;&nbsp;</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">&lt;</span><span style="color: maroon; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">script</span><span style="font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">&nbsp;</span><span style="color: red; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">src</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">=/js/h54s.js&gt;&lt;/</span><span style="color: maroon; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">script</span><span style="color: blue; font-family: &quot;consolas&quot;; font-size: 9.5pt; line-height: 14.5667px;">&gt;</span></div><div><br /></div><div>For more information on building Web Apps with SAS you can also check out this <a href="http://rawsas.blogspot.co.uk/2015/12/building-web-apps-with-sas.html" target="_blank">guide</a>. &nbsp;Enjoy!</div>