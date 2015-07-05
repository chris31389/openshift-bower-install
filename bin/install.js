#! /usr/bin/env node
var shell = require("shelljs");
shell.exec("echo shell.exec works");
var envVar = process.env.OPENSHIFT_ENV_VAR;
shell.exec("echo OPENSHIFT_ENV_VAR = " + envVar);
if (envVar != undefined) {
  shell.exec("HOME=" + envVar);
  shell.exec("echo HOME=" + envVar);
}
shell.exec("bower install");