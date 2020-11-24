---
title: 'Stripping Non-ASCII Characters within Macro'
date: '2016-09-08 17:50:00'
path: '/stripping-non-ascii-characters-within-macro/'
previewImg: ''
tags:
  - ascii
  - byte
  - compress
  - en dash
  - macro
  - non-ascii
  - rank
  - sas
  - utf-8
---

Hit
<a href="/reading-utf-8-in-filename-pipe" target="_blank">once more</a>
with a pesky en-dash issue (likely related to the transcoding between SAS &amp; SQL Server) I discovered today there was no 'in-built' way to remove non-ascii (or extended-ascii) characters within SAS.<br />
<br />
There is a great SUGI paper about this topic (<a href="https://www.lexjansen.com/pharmasug/2010/CC/CC13.pdf" target="_blank">here</a>) but the approach required the use of a data step. &nbsp;Let me save you some fiddling around if you need
this as a macro capability, with the extract below.<br />
<br />

<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <b><span style="background: white; color: navy; font-family: 'Courier New';">&nbsp; %macro</span></b><span style="background: white; font-family: 'Courier New';"> ascii();</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">%local</span>
  <span style="background: white; font-family: 'Courier New';"> i asciichars;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: green; font-family: 'Courier New';">/_ adjust here to include any additional chars _/</span>
  <span style="background: white; font-family: 'Courier New';"></span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">%do</span>
  <span style="background: white; font-family: 'Courier New';"> i=</span><b><span style="background: white; color: teal; font-family: 'Courier New';">32</span></b><span style="background: white; font-family: 'Courier New';"> </span>
  <span style="background: white; color: blue; font-family: 'Courier New';">%to</span><span style="background: white; font-family: 'Courier New';"> </span>
  <b><span style="background: white; color: teal; font-family: 'Courier New';">126</span></b><span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">%let</span>
  <span style="background: white; font-family: 'Courier New';">asciichars=&amp;asciichars</span><span style="background: white; color: blue; font-family: 'Courier New';">%qsysfunc</span>
  <span style="background: white; font-family: 'Courier New';">(byte(&amp;i));</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">%end</span>
  <span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">%str</span>
  <span style="background: white; font-family: 'Courier New';">(&amp;asciichars)</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <b><span style="background: white; color: navy; font-family: 'Courier New';">&nbsp; %mend</span></b><span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';"><br /></span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: green; font-family: 'Courier New';">&nbsp; /_ store in macvar for efficiency _/</span><span style="background: white; font-family: 'Courier New';"></span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><span style="background: white; color: blue; font-family: 'Courier New';">&nbsp; %let</span><span style="background: white; font-family: 'Courier New';"> ascii*chars=%ascii();</span></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><span style="background: white; color: blue; font-family: 'Courier New';">&nbsp; %put</span><span style="background: white; font-family: 'Courier New';"> &amp;=ascii_chars;</span></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><br /></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: green; font-family: 'Courier New';">&nbsp; /**</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: green; font-family: 'Courier New';">&nbsp; &nbsp;* Example usage within macro language</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><span style="background: white; color: green; font-family: 'Courier New';">&nbsp; &nbsp;*/</span><span style="background: white; font-family: 'Courier New';"></span></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: blue; font-family: 'Courier New';">&nbsp; %put</span><span style="background: white; font-family: 'Courier New';"> </span>
  <span style="background: white; color: blue; font-family: 'Courier New';">%sysfunc</span><span style="background: white; font-family: 'Courier New';">(compress(my – endash,&amp;ascii_chars,k ));</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><br /></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: green; font-family: 'Courier New';">&nbsp; /**</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; color: green; font-family: 'Courier New';">&nbsp; &nbsp;* Example usage within data step</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;"><span style="background: white; color: green; font-family: 'Courier New';">&nbsp; &nbsp;*/</span><span style="background: white; font-family: 'Courier New';"></span></div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <b><span style="background: white; color: navy; font-family: 'Courier New';">&nbsp; data</span></b><span style="background: white; font-family: 'Courier New';"> </span>
  <span style="background: white; color: blue; font-family: 'Courier New';">\_null*</span><span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;str=</span><span style="background: white; color: purple; font-family: 'Courier New';">"goodbye •–—˜™š›œžŸ&nbsp;¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶· nasties"</span>
  <span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;asciichars=symget(</span><span style="background: white; color: purple; font-family: 'Courier New';">'ascii_chars'</span>
  <span style="background: white; font-family: 'Courier New';">);</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp; out=compress(str,asciichars,</span><span style="background: white; color: purple; font-family: 'Courier New';">'k'</span>
  <span style="background: white; font-family: 'Courier New';">);</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <span style="background: white; font-family: 'Courier New';">&nbsp; &nbsp;&nbsp;</span><span style="background: white; color: blue; font-family: 'Courier New';">put</span>
  <span style="background: white; font-family: 'Courier New';"> out=;</span>
</div>
<div style="margin: 0cm 0cm 0.0001pt 5.65pt;">
  <b><span style="background: white; color: navy; font-family: 'Courier New';">&nbsp; run</span></b><span style="background: white; font-family: 'Courier New';">;</span>
</div>
<div style="margin-left: 5.65pt;"></div>
<br />
The main gotchas were as follows:<br />
<br />
<ul>
  <li>
    The characters in byte(3,4,5,12,13) do funny things in macro (open code recursion etc)
  </li>
  <li>
    It is not advisable to reference rank() above 127 as this extended set
    <a href="https://support.sas.com/documentation/cdl/en/hostwin/67962/HTML/default/viewer.htm#n1s18z766s30ddn1taghd7crnhsc.htm" target="_blank">can vary</a>
    country to country (the byte # may not be the same as the rank #)
  </li>
  <li>
    The 32-126 range includes apostrophe and single quote, and thus they need to be handled appropriately!
  </li>
</ul>
<br />
