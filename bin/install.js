#! /usr/bin/env node
var shell = require("shelljs");
shell.exec("echo shell.exec works");
var envVar = process.env.OPENSHIFT_REPO_DIR;
shell.exec("echo OPENSHIFT_REPO_DIR  = " + envVar);
if (envVar != undefined) {
  shell.exec("HOME=$OPENSHIFT_REPO_DIR  bower install");
}else{
  shell.exec("bower install");
}