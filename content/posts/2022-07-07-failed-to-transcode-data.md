---
title: 'Failed to Transcode Data'
date: '2022-07-07 09:00:00'
path: '/failed-to-transcode-data/'
tags:
  - EG
  - encoding
---

# Failed to transcode data from U_UTF8_CE to U_LATIN9_CE

During a recent [Data Controller](https://datacontroller.io) deployment for a Swedish customer we faced the error code below when deploying the backend SAS services to metadata.

<pre>
Error: Integration Technologies kunde inte sända koden.
[Error] Failed to transcode data from U_UTF8_CE to U_LATIN9_CE encoding because it contained characters which are not supported by your SAS session encoding.
Please review your encoding= and locale= SAS system options to ensure that they can accommodate the data that you want to process.
A portion of the source string, in hex representation is:
[None] 7fa29d53f1d4: 3b 2a 27 3b 2a 22 3b 2a 2f 3b 71 75 69 74 3b 72 |;*';*";*/;quit;r|
[None]
</pre>

We were puzzled that the code "contained characters which are not supported by your SAS session encoding" as all the troublesome files had been base64 encoded, and the issue had not appeared for other, similar customers.

It was then the realisation came - the file had a BOM marker, and presumably because of this, when we opened Enterprise Guide _with that file_ the EG session was UTF-8.

We closed EG, then opened it directly, **then** opened the deployment program, and it ran fine - which meant that the code had now been opened as WLATIN9 and correspondingly (successfully) deployed to metadata as WLATIN9.

Lesson learned - when opening Enterprise Guide directly against an external file, your encoding may be inherited from the file, rather than with system defaults!
