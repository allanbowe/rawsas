---
title: 'Running EG or other client tools as SASSRV'
date: '2015-12-18 17:33:00'
path: '/running-eg-or-other-client-tools-as-sassrv/'
tags:
  - Movable Type
---

Occasionally when debugging it can be useful to run as a system account for checking permissions etc.<br /><br />A useful utility for this (in windows) is the "runas" command. &nbsp;For instance (from the command window):<br /><br /><span style="font-family: Courier New, Courier, monospace;">runas /user:"YourDomainsassrv" "C:Program FilesSASEnterpriseGuide4.3SEGuide.exe"</span><br /><br />or<br /><span style="font-family: Courier New, Courier, monospace;"><br /></span><span style="font-family: Courier New, Courier, monospace;">runas /user:"</span><span style="font-family: 'Courier New', Courier, monospace;">YourDomain</span><span style="font-family: Courier New, Courier, monospace;">sassrv" "C:Program Files (x86)Microsoft SQL Server120ToolsBinnManagementStudioSsms.exe"</span><br /><br />You will be prompted for the password before the client tool opens on your machine.<br /><br /><i>This post was inspired by the fact that one should not log into the application server as sassrv, to avoid conflicting / hung sessions in the STP server, but I can't find the SAS note to back this up! &nbsp;However those hung sessions were confirmed real.. </i>&nbsp;<b>Don't log into sasapp as sassrv.</b>