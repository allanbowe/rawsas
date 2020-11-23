---
title: 'Importing flow: ERROR - An error occurred trying to connect the responsible parties for the imported objects.'
date: '2016-11-18 12:23:00'
path: '/importing-flow-error-an-error-occurred-trying-to-connect-the-responsible-parties-for-the-imported-objects-reason-cant-find-resource-for-bundle-java-util-propertyresourcebundle-key-responsiblep/'
previewImg: 'frontmatter17.png'
tags:
  - SQL
---

If you are getting the following message when importing a package containing a FLOW:

<div>
<blockquote style="line-height: normal; margin-bottom: 0cm; text-autospace: none;"><span style="font-size: 10pt;"><span style="font-family: 'courier new' , 'courier' , monospace;">ERROR - An error occurred trying to connect the responsible parties for the imported objects.  Reason: Can't find resource for bundle java.util.PropertyResourceBundle, key ResponsiblePartyHandler.InvalidSearchAttrib.txt</span></span></blockquote>
Then as per this <a href="http://support.sas.com/kb/48/429.html" target="_blank" rel="noopener">usage note</a>, and as I just verified locally, it is because the <b>Responsibilities </b>metadata is not imported.  So if you set your flow properties as follows:
<img class="size-medium wp-image-83 aligncenter" src="../images/Capture-300x31.png" alt="" width="300" height="31" />
<div style="clear: both; text-align: center;"></div>
You will see that after export / import the metadata is gone:
<img class="size-medium wp-image-84 aligncenter" src="../images/Capture2-300x39.png" alt="" width="300" height="39" />
<div style="clear: both; text-align: center;"></div>
The metadata therefore has to be manually added back following the import.  In our case, we never use this field, and the <span style="font-family: 'courier new' , 'courier' , monospace;">ERROR </span>has not caused any problems thus far (many '00s of flow deployments).  Still, if anyone has any tips for avoiding the <span style="font-family: 'courier new' , 'courier' , monospace;">ERROR </span>do please advise!</div>
