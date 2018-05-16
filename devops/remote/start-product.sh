if [ "$kill_timeout" == "" ]; then
  kill_timeout=600000
fi

pm2 start ${env}-${project} --kill-timeout ${kill_timeout}