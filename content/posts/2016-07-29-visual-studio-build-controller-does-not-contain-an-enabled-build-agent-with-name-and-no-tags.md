---
title: 'Visual Studio Build Controller does not contain an enabled build agent with name * and no tags.'
date: '2016-07-29 10:35:00'
path: '/visual-studio-build-controller-does-not-contain-an-enabled-build-agent-with-name-and-no-tags/'
tags:
  - SQL
---

Currently working on putting our SAS deployment process into TFS and Release Management - part of which involves creating a 'build' in Visual Studio.<br /><br />The below caused a build failure, and didn't come up in google:<br /><blockquote><span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;"><br /></span><span style="font-family: &quot;courier new&quot; , &quot;courier&quot; , monospace;">Exception Message: The build controller Visual Studio Controller - internal-svr-name does not contain an enabled build agent with name \* and no tags. (type SoapException)SoapException Details: &lt;soap:Detail xmlns:soap="http://www.w3.org/2003/05/soap-envelope" /&gt;</span></blockquote><br />The fix was very straightforward (presuming you are using a Default Template). &nbsp;In Visual Studio, simply open your build definition, in the 'Process' section, under '5.Advanced' expand 'Agent Settings' and set your Tag comparison operator to 'MatchAtLeast' (instead of MatchExactly):<br /><br /><div style="clear: both; text-align: center;"><a href="../images/Capture_2.PNG" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="96" src="../images/Capture_3.PNG" width="640" /></a></div><br />
