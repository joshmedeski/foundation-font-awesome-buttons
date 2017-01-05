#!/usr/bin/env bash

# Wrap all arguments with whitespace in double quotes so they are passed to the container correctly
ARGS=''
WHITESPACE="[[:space:]]"
for i in "$@"
do
    if [[ $i =~ $WHITESPACE ]]
    then
        # arg has whitespace. Wrap it in double quotes, and escape all double quotes in the arg
        ARGS="$ARGS \"${i//\"/\\\"}\""
    else
        # arg has no whitespace. Add it as-is
        ARGS="$ARGS $i"
    fi
done

