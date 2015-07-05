#! /usr/bin/env node
var shell = require("shelljs");
shell.exec("echo shell.exec works");
var envVar = process.env.OPENSHIFT_DATA_DIR;
shell.exec("echo OPENSHIFT_DATA_DIR = " + envVar);
if (envVar != undefined) {
  shell.exec("HOME=$OPENSHIFT_DATA_DIR bower install");
}else{
  shell.exec("bower install");
}