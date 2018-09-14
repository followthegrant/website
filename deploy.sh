#/bin/bash
#upload files
aws s3 cp ./dist s3://www.followthegrant.org --recursive --acl public-read
