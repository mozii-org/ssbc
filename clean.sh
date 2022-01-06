#! /usr/local/bin/bash
echo ""
echo ""

echo "       ** Start clean mac DS_Store files!**        "

echo ""
echo ""

echo "***************************************************"

echo ""
echo ""

find . -name '.DS_Store' -type f -print -exec rm -rf {} \;

find . -name '._.DS_Store' -type f -print -exec rm -rf {} \;

find . -name '._*' -type f -print -exec rm -rf {} \;

echo ""
echo ""

echo "***************************************************"

echo ""
echo ""

echo "                   *** Done!! ***                  "

echo ""
echo ""
