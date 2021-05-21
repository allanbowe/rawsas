---
title: 'Launching SMC on Mac OS over SSH with X11'
date: '2017-09-24 16:02:00'
path: '/launching-smc-on-mac-os-over-ssh-with-x11/'
previewImg: '../images/frontmatter11.png'
tags:
  - SQL
  - X11
  - Mac
---

As an avid developer of SAS Stored Process Web Applications, the Macbook Pro is my development machine of choice.&nbsp; Since building a <a href="https://github.com/sasjs/core/blob/main/meta/mm_createstp.sas" target="_blank">macro to programmatically create STPs</a>, I've had few reasons to launch a VM to use client tools - but today I actually did need to use SAS Management Console (SMC).

Still - who says a client tool has to be run from a client?&nbsp; It's actually possible to launch SMC from your SAS Server, and here are the steps you need to make:

### 1 - Enable X11 forwarding

Open `/private/etc/ssh/ssh_config` and uncomment / change the following values:

```sh
   ForwardAgent no
   ForwardX11 no
```
to:
```sh
  ForwardAgent yes
  ForwardX11 yes
```
Next, open `/private/etc/ssh/sshd_config` and uncomment / change the following value from:
```sh
  X11Forwarding no
```
to:
```
  X11Forwarding yes
```
### 2 - Download Xquartz
This can be downloaded directly from <a href="https://www.xquartz.org/" target="_blank">here</a>, or via the following command in terminal:
```sh
brew cask install xquartz
```

### 3 - Launch Management Console
If it does not work immediately, try opening a new shell or performing a restart. The commands will be along the lines of:
```sh
ssh -Y youruser@yourserver.com
cd /pub/sas/SASManagementConsole/9.4
./sasmc_console
```
and - voila:

![](../images/Screen Shot 2017-09-24 at 16.51.13.png)

If building web applications with SAS is something you'd like to try, then check out [SASjs](https://sasjs.io).

Alternatively, if you're just the type of person who loves to learn about all things SAS, then come visit <a href="https://sasensei.com/">sasensei.com</a>!

Chat soon..

/Allan
