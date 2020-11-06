---
title: 'Login failed due to an error with the security certificate'
date: '2020-08-25 22:44:36'
path: '/login-failed-due-to-an-error-with-the-security-certificate/'
tags:
  - Movable Type
---

<!-- wp:paragraph -->
<p>When running the sas-admin CLI tool against a Viya server on https you may get the following response:</p>
<!-- /wp:paragraph -->

<!-- wp:quote -->
<blockquote class="wp-block-quote"><p>Password&gt; Login failed due to an error with the security certificate. The certificate is signed by an unknown authority. Run with the '--verbose' global option to see additional details.</p></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>There is a quick workaround to this, and it can be found when running <code>./sas-admin help</code>:</p>
<!-- /wp:paragraph -->

<!-- wp:quote {"className":"code"} -->
<blockquote class="wp-block-quote code"><p>GLOBAL OPTIONS:<br>    --colors-enabled        Enables or disables ANSI colored output. [$SAS_CLI_COLOR]<br>    --help, -h            Shows help.<br>    --insecure, -k        Allows connections to TLS sites without validating the server certificates.<br>    --locale "en"        Specifies a locale to use. [$LC_ALL, $LANG]<br>    --log-file             Specifies the file to write log events to. [$SAS_LOG_FILE]<br>    --output             Specifies output format - text, json, fulljson. [$SAS_OUTPUT]<br>    --profile, -p "Default"    Specifies a named profile to use. [$SAS_CLI_PROFILE]<br>    --quiet, -q            Quiets spurious output, data only.<br>    --sas-endpoint         Sets the URL to the SAS services. [$SAS_SERVICES_ENDPOINT]<br>    --verbose            Shows detailed processing information and output.<br>    --version, -v        Prints the version.</p></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>That's right, you can use the -k option to connect, eg as follows:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><code>./sas-admin -k auth login</code></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Happy sassing!</p>
<!-- /wp:paragraph -->
