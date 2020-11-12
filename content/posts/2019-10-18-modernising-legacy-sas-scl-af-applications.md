---
title: 'Modernising Legacy SAS SCL / AF Applications'
date: '2019-10-18 13:08:07'
path: '/modernising-legacy-sas-scl-af-applications/'
tags:
  - SQL
---

<!-- wp:paragraph -->
<p>Before SAS Studio, and even EG (but after display manager), there was a desktop application used exclusively for accessing SAS.  It was known as Base SAS, and within it there was an application development facility known as SAS/AF.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This enabled point and click development of user interfaces, in a similar way to User Forms in VBA Excel.  The application logic was driven by an object-orientated language known as SCL.  SCL code was compiled, stored in catalogs, and the resulting application was often stored on a network drive and launched by end users.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>It's fair to say these applications were a massive success, as many of them are still alive today - surviving decades of technological evolution!  Still, as organisations have matured, the following challenges transpired:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><strong>Security</strong>.  Especially of source files, and password management.</li><li><strong>Scalability</strong>.  Deploying SCL apps to each client machine is non-trivial.</li><li><strong>Support</strong>.  The original developers are usually long gone, and SCL resources are few and far between.</li><li><strong>User Experience</strong>.  This was an 80s product and..  it shows.</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>So, what to do about it?  These applications are often complex, business critical, and heavily embedded in the SAS infrastructure.  Well, as it happens, there is a tidy solution, quick to implement, and keeps everything within SAS.  So what is it?</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>HTML5 SAS Web Apps</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Web apps are a natural migration for legacy AF.  Secured by your existing enterprise authorisation mechanism (SASLogon), they are highly scalable, easy to support, quick to build, and very user friendly.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When building web apps on SAS, it's super important to separate the frontend logic (the domain of a web developer) from the backend (idempotent, stateless SAS programs).  A typical modernisation project will begin by creating UX diagrams, wireframes, and screenshots to mockup the visuals and diagramming the application logic. This means that the gory details of the AF part, ie all the <code>call display()</code> and <code>call next()</code> routines (and associated catalog entries) are effectively disregarded, and completely rebuilt using modern design methods and javascript frameworks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>But what about the data logic?  All the SLISTS, SCL programs, subroutines and methods?  The good news is that <strong>much of this can be re-used</strong>.  The fact is that SCL is based on, and works very similarly to, good old base SAS.  This led to the development of the SCL Transcoding Kit, a framework / approach that lets you migrate SCL entries directly over to SAS (eg to run in a Stored Process or Job Execution Service), without the need for an AF License.</p>
<!-- /wp:paragraph -->

`vimeo: https://vimeo.com/367240430`

<!-- wp:paragraph -->
<p>The full list of supported functions includes:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li><code>clearlist()</code>&nbsp;&nbsp;Empty&nbsp;a&nbsp;list&nbsp;</li><li><code>copylist()</code>&nbsp;Copy&nbsp;a&nbsp;list&nbsp;</li><li><code>delitem()</code>&nbsp;&nbsp;Deletes&nbsp;an&nbsp;item&nbsp;from&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>dellist()</code>&nbsp;&nbsp;Deletes&nbsp;a&nbsp;list&nbsp;</li><li><code>delnitem()</code>&nbsp;Deletes&nbsp;a&nbsp;named&nbsp;item&nbsp;from&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>format()</code>&nbsp;Verifies&nbsp;that&nbsp;the&nbsp;specified&nbsp;format&nbsp;is&nbsp;valid&nbsp;</li><li><code>getitemc()</code>&nbsp;Returns&nbsp;a&nbsp;value&nbsp;identified&nbsp;by&nbsp;its&nbsp;position&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>getiteml()</code>&nbsp;Returns&nbsp;a&nbsp;value&nbsp;identified&nbsp;by&nbsp;its&nbsp;position&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>getitemn()</code>&nbsp;Returns&nbsp;a&nbsp;value identified&nbsp;by&nbsp;its&nbsp;position&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>getnitemc()</code>&nbsp;Return&nbsp;a&nbsp;value&nbsp;identified&nbsp;by&nbsp;name&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>getniteml()</code>&nbsp;&nbsp;Return&nbsp;a&nbsp;value&nbsp;identified&nbsp;by name&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>getnitemn()</code>&nbsp;&nbsp;Return&nbsp;a&nbsp;value&nbsp;identified&nbsp;by&nbsp;name&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>insertc()</code>&nbsp;&nbsp;Insert&nbsp;a&nbsp;value&nbsp;into&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>insertl()</code>&nbsp;&nbsp;Insert&nbsp;a&nbsp;value&nbsp;into&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>insertn()</code>&nbsp;&nbsp;Insert&nbsp;a&nbsp;value&nbsp;into&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>itemtype()</code>&nbsp;Returns&nbsp;the&nbsp;type&nbsp;of&nbsp;an&nbsp;item&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>listlen()</code>&nbsp;&nbsp;Returns&nbsp;the&nbsp;length&nbsp;of&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>lvarlevel()</code>&nbsp;&nbsp;Fills&nbsp;a&nbsp;list&nbsp;with&nbsp;unique&nbsp;values&nbsp;from&nbsp;a table&nbsp;column</li><li><code>makelist()</code>&nbsp;Creates&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>nameditem()</code>&nbsp;&nbsp;Returns&nbsp;the&nbsp;index&nbsp;of&nbsp;a&nbsp;named&nbsp;item&nbsp;in&nbsp;a&nbsp;list&nbsp;</li><li><code>nameitem()</code>&nbsp;Returns&nbsp;the&nbsp;name&nbsp;of&nbsp;an&nbsp;item&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>putlist()</code>&nbsp;&nbsp;Displays&nbsp;the&nbsp;contents&nbsp;of&nbsp;an&nbsp;SCL&nbsp;list&nbsp;in&nbsp;the&nbsp;LOG&nbsp;window&nbsp;</li><li><code>savelist()</code>&nbsp;Stores&nbsp;SCL&nbsp;list&nbsp;items&nbsp;in&nbsp;a dataset&nbsp;</li><li><code>searchc()</code>&nbsp;Search&nbsp;for&nbsp;a&nbsp;value&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;and&nbsp;return&nbsp;its position&nbsp;</li><li><code>searchn()</code>&nbsp;Search&nbsp;for&nbsp;a&nbsp;value&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;and&nbsp;return&nbsp;its&nbsp;position</li><li><code>setitemc()</code>&nbsp;Store&nbsp;a&nbsp;value&nbsp;at&nbsp;an&nbsp;indexed&nbsp;position&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>setitemn()</code>&nbsp;Store&nbsp;a&nbsp;value&nbsp;at&nbsp;an&nbsp;indexed&nbsp;position&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>setnitemc()</code>&nbsp;&nbsp;Assign&nbsp;a&nbsp;value&nbsp;to&nbsp;a&nbsp;named&nbsp;item&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>setniteml()</code>&nbsp;&nbsp;Assign&nbsp;a&nbsp;value&nbsp;to&nbsp;a&nbsp;named&nbsp;item&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>setnitemn()</code>&nbsp;&nbsp;Assign&nbsp;a&nbsp;value&nbsp;to&nbsp;a&nbsp;named&nbsp;item&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;</li><li><code>sortlist()</code>&nbsp;Sorts&nbsp;the&nbsp;items&nbsp;in&nbsp;an&nbsp;SCL&nbsp;list&nbsp;by&nbsp;value&nbsp;or&nbsp;by&nbsp;name</li></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p>Other than the <code>fcmp</code> library (referenced in the video above), this kit also lays out the process for exporting all the lists into a database, handling methods (with overloadable signatures), and migrating SCL entries into SAS code (hence, eradicating the use of catalogs).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Do you have legacy AF / SCL you'd like modernised?  I'd love to help.  You can contact me here: <a href="https://www.linkedin.com/in/allanbowe/">https://www.linkedin.com/in/allanbowe/</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Additional resources:</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul><li>Linkedin Article: <a href="https://www.linkedin.com/pulse/easy-af-scl-modernisation-html5-sas-allan-bowe/">https://www.linkedin.com/pulse/easy-af-scl-modernisation-html5-sas-allan-bowe/</a></li><li>Slides: <a href="https://slides.com/allanbowe/sasaf">https://slides.com/allanbowe/sasaf</a></li><li>SAS UK Forum <a href="https://drive.google.com/file/d/1RMLxFccaXYh35IGnbcFjISFmZUIdetUO/view">presentation</a></li><li>Info on SLISTS:  <a href="/slists-scl-lists-an-overview">slists scl lists an overview</a> </li></ul>
<!-- /wp:list -->
