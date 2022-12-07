tag=$1

yarn run cucumber -p $tag || yarn run postcucumber
