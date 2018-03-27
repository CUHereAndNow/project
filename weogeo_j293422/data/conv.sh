#!/bin/bash

new=".csv"

for x in $(find -name '*.json');
do
    input=$(echo "$x" | cut -c 3-);
    y=${x%?????};
    y=$(echo "$y" | cut -c 3-);
    output="$y$new"

    ogr2ogr -f "CSV" -lco GEOMETRY=AS_XY $output $input
done
