if [ "$rmnpm" == "true" ]; then
  rm -rf node_modules;
fi

if [ "$rmbower" == "true" ]; then
  rm -rf client/bower_components
fi

if [ "$verbose" == "true" ]; then
  cd server;
  cnpm install --verbose;
  cd ..;
else
  cd server;
  cnpm install;
  cd ..;
fi

# TODO: add client build


