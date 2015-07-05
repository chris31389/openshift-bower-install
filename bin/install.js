#! /usr/bin/env node

var shell = require("shelljs");
shell.exec("HOME=$OPENSHIFT_REPO_DIR bower install");