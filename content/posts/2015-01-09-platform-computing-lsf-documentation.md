---
title: 'Platform Computing - LSF documentation'
date: '2015-01-09 10:57:00'
path: '/platform-computing-lsf-documentation/'
previewImg: ''
tags:
  - SQL
---

In building a script to read in the LSF log files (lsb.events files), it was apparent that the file structure has changed across LSF versions. &nbsp;What is not so apparent is where the documentation resides.. &nbsp;So here's &nbsp;a quick ref guide.<br /><br />First though, you need to know your LSF version (different to the Process Manager version!). &nbsp;Simply open a shell / command prompt on the server machine and type "lsid". &nbsp;For Process Manager version, it would be "jid" (then log on).<br /><br />Once you have the LSF version (lsid), see below:<br />

<ul>
  <li>Online:</li>
  <ul>
    <li><a href="http://www.ccs.miami.edu/hpc/lsf/7.0.6/">Version 7</a> (<a href="http://www.ccs.miami.edu/hpc/lsf/7.0.6/schema/lsb_events.htm">here </a>for lsb.events)</li>
    <li><a href="http://www.slac.stanford.edu/comp/unix/package/lsf/LSF8.1_doc/8.0/">Version 8</a> (<a href="http://www.slac.stanford.edu/comp/unix/package/lsf/LSF8.1_doc/8.0/lsf_config_ref/index.htm?lsb.events.5.html?zoom_highlight=Event%2BTime~main">here </a>for lsb.events)</li>
    <li><a href="http://www.ccs.miami.edu/hpc/lsf/9.1.1/">Version 9</a>&nbsp;(<a href="http://www.ccs.miami.edu/hpc/lsf/9.1.1/lsf_config_ref/index.htm?lsb.events.5.html~main">here </a>for lsb.events)</li>
  </ul>
  <li>Local:</li>
  <ul>
    <li>&lt;LSF_INSTALL_DIR&gt;/&lt;LSF_VERSION&gt;/include/lsf</li>
  </ul>
  <li><a href="http://www.cs.huji.ac.il/labs/parallel/workload/l_lanl_o2k/lsf2swf.pl">Further info</a></li>
</ul>
<div>Remember to take a copy of the lsb.events file before reading, as the file will normally be locked.. &nbsp;(and the lsb.events.n file may be about to change)</div>
