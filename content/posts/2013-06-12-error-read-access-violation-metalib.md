---
title: 'ERROR:  Read Access Violation METALIB'
date: '2013-06-12 12:54:00'
path: '/error-read-access-violation-metalib/'
tags:
  - SQL
---

If you are getting the following error (SAS 9.3) when using proc metalib:<br /><br />ERROR: &nbsp;An exception has been encountered.<br />Please contact technical support and provide them with the following traceback information:<br /><br />The SAS task name is [METALIB]<br />ERROR: &nbsp;Read Access Violation METALIB<br />Exception occurred at (0C05EB17)<br />Task Traceback<br />Address &nbsp; Frame &nbsp; &nbsp; (DBGHELP API Version 4.0 rev 5)<br />000000000C05EB17 &nbsp;000000000D25F3C0 &nbsp;sasmetas:tkvercn1+0xDAD7<br />000000000C0530E9 &nbsp;000000000D25FCB0 &nbsp;sasmetas:tkvercn1+0x20A9<br />00000000034D8FD7 &nbsp;000000000D25FCB8 &nbsp;sashost:Main+0xF917<br />00000000034DD5FD &nbsp;000000000D25FF50 &nbsp;sashost:Main+0x13F3D<br />0000000077AC652D &nbsp;000000000D25FF58 &nbsp;kernel32:BaseThreadInitThunk+0xD<br />0000000077BFC521 &nbsp;000000000D25FF88 &nbsp;ntdll:RtlUserThreadStart+0x21<br /><div><br /></div><div><br /></div><div>Try removing the 'library is pre-assigned' property.<br /><br />For further help with debugging, use the transaction logging option:<br /><br />proc metalib<span style="background-color: yellow;"> tl=16383</span>; /_ 4095 in earlier versions of SAS _/<br />&nbsp;omr (library="My meta lib" metarepository=Foundation);<br />&nbsp;update_rule=(delete);<br />&nbsp;report(TYPE=DETAIL);<br />run;<br /><br />Removing quotes from the metarepository might also help.<br />Finally, try setting the metadata library to the same name as the (8 character) SAS library. &nbsp;This is another known cause of occasional issues.</div>
