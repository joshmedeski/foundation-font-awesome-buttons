#!/usr/bin/env bash

ENV='';
if [ "${CIRCLECI}" == true ] ; then
    ENV+=" --env CIRCLECI"
fi
