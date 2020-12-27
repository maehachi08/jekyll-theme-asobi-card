#!/usr/bin/env bash

echo "INFO: start execution of asobi-card-setup.sh."
asobi_card_path=`bundle info --path asobi-card 2>/dev/null`
if [ $? -ne 0 ]; then
  echo "ERROR: Please installl asobi-card."
  echo 'gem "asobi-card", :git => "git@github.com:maehachi08/jekyll-theme-asobi-card.git"'
  exit 1
fi

targets=(
  _includes
  _layouts
  _plugins
  assets
  search.html
  search_data.json
)

for target in "${targets[@]}"; do
  echo "INFO: ${asobi_card_path}/${target} copy to current dir."
  cp -a "${asobi_card_path}/${target}" ./
done

echo "INFO: finished execution of asobi-card-setup.sh."
