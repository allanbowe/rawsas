---
title: 'SAS Tip#2 - How to switch on Workspace Logging'
date: '2012-10-04 12:29:00'
path: '/sas-tip2-how-to-switch-on-workspace-logging/'
previewImg: ''
tags:
  - workspace logging
---

1. Navigate to : D:SASConfigLev1SASAppWorkspaceServer<br />2. Rename logconfig.xml to logconfig.xml.orig<br />3. Rename Logconfix.trace.xml to logconfig.xml<br />&nbsp;4. Restart the object spawner (see below) <br /><br /><div style="clear: both; text-align: center;"></div><div style="clear: both; text-align: center;"><a href="../images/ServerManager.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="398" src="http://1.bp.blogspot.com/-hc0FiUQaMQk/UI7MSlxJ7VI/AAAAAAAAASM/ABqohDJcmyw/s640/ServerManager.png" width="640" /></a></div><div style="clear: both; text-align: center;"><br /></div>To switch off workspace logging, simply reverse steps 2 &amp; 3! (Remember to restart the object spawner)
