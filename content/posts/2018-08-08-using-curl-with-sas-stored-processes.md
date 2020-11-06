---
title: 'Using CURL with SAS Stored Processes'
date: '2018-08-08 13:02:47'
path: '/using-curl-with-sas-stored-processes/'
tags:
  - Movable Type
---

I've <a href="https://www.linkedin.com/pulse/5-tips-sas-app-developers-allan-bowe/">said it before</a> and I'll say it again - SAS is an unparalleled platform for <a href="http://support.sas.com/resources/papers/proceedings17/1091-2017.pdf">lightning fast</a> development of enterprise-grade, business focused web applications.  Not least because it comes pre-installed with a Web Server and an incredibly powerful Application Server for building the backend services - known as Stored Processes.

In order to build robust, scalable Stored Process Web Applications it's imperative to be able to test these services in an automated fashion - eg from your test server or local machine, using a test framework like jenkins or directly with shell scripts.  If you have IWA / SSO configured in SAS then this is straightforward - simply call the URL.  However if you are connecting to a machine outside your intranet, or if passwords are required for some other reason, then the following code snippet will be helpful.
<pre>curl -v -L -c cookiefile -b cookiefile \ 
    -d "_program=$STP&amp;_username=$USERNAME&amp;_password=$PASSWORD" \
    https://yourdomain.com/SASStoredProcess/do</pre>
Things to note:
<ol>
 	<li>A cookiefile is used so that the session token can be written (<code>-c</code>) and subsequently read (<code>-b</code>) by the SASLogon redirect.</li>
 	<li>The <code>_username</code> and <code>_password</code> parameters are used to authenticate (see <a href="http://support.sas.com/documentation/cdl/en/stpug/61271/HTML/default/viewer.htm#a003259930.htm">docs</a>)</li>
 	<li><code>-v</code> for verbose logging, <code>-L</code> to tell curl to follow the redirect (SASLogon) location</li>
</ol>
You can of course redirect the output to a file, by appending <code>&gt; filename.ext</code> or using the <code>--output</code> option.

If you'd like more info on building web applications on SAS, check out these <a href="https://www.linkedin.com/pulse/5-tips-sas-app-developers-allan-bowe/">5 tips</a> and this <a href="https://www.rawsas.com/2015/12/building-web-apps-with-sas/">quick start guide</a>, or the SPWA tag on<a href="https://sasensei.com"> https://sasensei.com</a>.   If you'd just like to experience the ease with which web apps can be deployed into a SAS environment, then check out the open source <a href="https://github.com/Boemska/user-navigator">Boemska User Navigator</a>!