#!/bin/bash

new=".sql"

for x in $(find -name '*.csv');
do
    input=$(echo "$x" | cut -c 3-);
    #echo $input;
    y=${x%????};
    y=$(echo "$y" | cut -c 3-);
    output="$y$new"
    #echo $output;

    csvsql --dialect mysql --snifflimit 10000 $input > $output;
done
