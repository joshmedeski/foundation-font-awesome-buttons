#!/usr/bin/env bash

RM='';
if [ "${CIRCLECI}" != true ] ; then
  RM=--rm;
fi
