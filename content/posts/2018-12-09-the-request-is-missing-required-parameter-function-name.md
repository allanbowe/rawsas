---
title: 'ERROR: The request ? is missing required parameter Function Name.'
date: '2018-12-09 14:20:05'
path: '/the-request-is-missing-required-parameter-function-name/'
previewImg: '../images/frontmatter1.png'
tags:
  - SQL
---

I had this head scratcher today, when submitting some XML to SAS via <code>proc metadata</code>:

<pre>ERROR: The request ? is missing required parameter Function Name.</pre>

Turns out this was a simple fix - the input fileref simply wasn't large enough.  It needed the <code>lrecl</code> option (note, this can be larger than 32,767):

<pre>filename in '/tmp/meta.txt' lrecl=1000000 ;
proc metadata in=in out=outmeta verbose;run;</pre>

Tip - whatever you do, don't try adding the <code>recfm=n</code> option!!  This will send your proc metadata into an infinite loop.  Killing your session from SAS Studio (or Enterprise Guide) may not prevent the session from remaining on the remote SAS application server and maxing out CPU indefinitely.

Safe coding!  If you are working a lot with metadata management, you may want to check out the macros in the <a href="https://github.com/macropeople/macrocore">macrocore</a> library.
