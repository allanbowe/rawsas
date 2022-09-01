---
title: 'SAS 9.4 on CENTOS - ERROR:  BRIDGE FAILURE - ERROR LOADING IMAGE'
date: '2017-05-16 09:07:00'
path: '/sas-9-4-on-centos-error-bridge-failure-error-loading-image/'
previewImg: '../images/frontmatter13.png'
tags:
  - sas-admin
  - centos
---

The following came up when trying to launch sas on a recent Centos 7.3 install:
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">
</span><span style="font-family: Courier New, Courier, monospace; font-size: x-small;">ERROR:  BRIDGE FAILURE - ERROR LOADING IMAGE</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">        MODULE: sasmotifsasvsub h.</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">                                   SUBSYSTEM: 8 SLOT: 11</span>

<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">Traceback:  </span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sas(+0x703ea) [0x7fb406fc43ea]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sas(+0x70595) [0x7fb406fc4595]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sasxfs(yustrt+0x265) [0x7fb3ea18c535]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sasxfs(yuinit+0x1cb) [0x7fb3ea187a9b]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sasxfs(yuropen+0x5ea) [0x7fb3ea18cfda]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/dbcs/sasexe/saszu(xexprst+0x324) [0x7fb3e9756ea4]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/sas94/SASFoundation/9.4/sasexe/sas(vvtentr+0x13d) [0x7fb406fa06ad]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/lib64/libpthread.so.0(+0x7dc5) [0x7fb406b1ddc5]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">/lib64/libc.so.6(clone+0x6d) [0x7fb40610f73d]</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">
</span><span style="font-family: Courier New, Courier, monospace; font-size: x-small;">ERROR: Could not load /sas94/SASFoundation/9.4/dbcs/sasexe/sasmotif (38 images loaded)</span>
<span style="font-family: Courier New, Courier, monospace; font-size: x-small;">ERROR: libpng12.so.0: cannot open shared object file: No such file or directory</span>

<div></div>
<div>The clue was in the log, and the following command fixed it:</div>
<div></div>
<div>
<div><span style="font-family: Courier New, Courier, monospace; font-size: x-small;">sudo yum install libpng12</span></div>
</div>
<div></div>
<div> <img class="size-medium wp-image-74 aligncenter" src="../images/Screen-2BShot-2B2017-05-16-2Bat-2B09.58.06-297x300.png" alt="" width="297" height="300" /></div>
<div style="clear: both; text-align: center;"></div>
<div></div>
