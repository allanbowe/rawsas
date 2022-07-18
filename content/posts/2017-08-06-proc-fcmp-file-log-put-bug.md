---
title: 'proc fcmp - file log put % bug'
date: '2017-08-06 13:47:00'
path: '/proc-fcmp-file-log-put-bug/'
previewImg: ''
tags:
  - proc-fcmp
---

Having worked a lot with `proc fcmp` lately, I think it's fair to say that the procedure should be 'handled with care'.

Here's an example of one of these weird / wonderful bugs (LIN X64,&nbsp;9.04.01M3P062415):

```sas
proc fcmp outlib=work.funcs.pkg;
  function test(cval $);
    file log; put cval=;
    put 'also.. you can % see % this';
    return;
  endsub;
quit;
options cmplib=work.funcs;
data null;
  x="example %";
  rc=test(x);
run;
```


When you look at the log, the percent symbols are missing:

```
cval=example
also.. you can see this
```

So this is strange, but it gets stranger. &nbsp;If you don't have a clean session, you will also see parts of previous messages in the log. &nbsp;For instance, if you now run the exact same above code again, you get:

```
cval=example % see % this
also.. you can see this
```

So the % symbols return, in a different place! &nbsp; Now, whilst this is a strange bug, it only seems to affect messages sent to the log. &nbsp;So not an issue right?

Wrong.. &nbsp;It seems that this can cause a fatal error:<br /><br /><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> ERROR: An exception has been encountered.</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> Please contact technical support and provide them with the following traceback information:</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> </div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> The SAS task name is [TKSRV ]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> Segmentation Violation</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> </div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> Traceback of the Exception:</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> </div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/sas(+0x15aa8e) [0x7f7163e73a8e]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/sas(+0x4cb0b) [0x7f7163d65b0b]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/tkmk.so(bkt_signal_handler+0x144) [0x7f71626873c4]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /lib64/libpthread.so.0(+0xf370) [0x7f71638ea370]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/dbcs/sasexe/sasxkern(+0x7462e) [0x7f7151f4f62e]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/dbcs/sasexe/sasxkern(ypslf+0xa2b) [0x7f7151f4eabb]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/dbcs/sasexe/sasxkern(ypsllog+0x13c) [0x7f7151f51b9c]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/sastksrv(adjustline+0x59e) [0x7f714a60c1ce]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/sastksrv(sastksrv+0xec1) [0x7f714a60b531]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /pub/sas/SASFoundation/9.4/sasexe/sas(vvtentr+0x13d) [0x7f7163d656ad]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /lib64/libpthread.so.0(+0x7dc5) [0x7f71638e2dc5]</div><div style="background-color: white; color: red; font-family: Consolas, Courier, &quot;Courier New&quot;; font-size: 16px; white-space: pre;"> /lib64/libc.so.6(clone+0x6d) [0x7f7162ed476d]</div><br /><br />

Conclusion? &nbsp;Don't send code to production that has `proc fcmp` writing character values to the log that may contain a % symbol!
