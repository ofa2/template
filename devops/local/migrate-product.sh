source ~/.bashrc
nvm use v8.11.1
echo node version is:
node -v

echo npm version is:
npm -v

echo pm2 version is:
pm2 --version


if [ "$project" == "" ]; then
  echo "Please enter project to run command for: "
  read project
fi
if [ "$target" == "" ]; then
  echo "Please enter target to build: "
  read -s target
fi

if [ "$env" == "" ]; then
  echo "Please enter env to run command in: "
  read env
fi

if [ "$host" == "" ]; then
  echo "Please enter host to connect to: "
  read host
fi

if [ "$user" == "" ]; then
  echo "Please enter user to connect to $host: "
  read user
fi

if [ "$root" == "" ]; then
  echo "please specify project root by root=<project root>"
  exit 1
fi

if [ "$remoteRoot" == "" ]; then
  echo "please specify project root by remoteRoot=<remote root>"
  exit 1
fi


if [ "$sshport" == "" ]; then
  sshport=22
fi

if [ "$npm" == "" ]; then
  npm=cnpm
fi

export roomRoot=$remoteRoot/migration-room

# if [ "$password" == "" ]; then
#   echo "Please enter password to connect to $host: "
#   read -s password
# fi


if [ "$nobuild" != "true" ]; then
  currentDir=$(pwd)
  cd ../../server
  pwd
  echo NODE_ENV=$env gulp build:dist
  NODE_ENV=$env gulp build:dist
  rm -rf ../dist
  mkdir ../dist
  mv dist/ ../dist/server/
  cd ${currentDir}
fi

ssh -p $sshport $user@$host "mkdir $remoteRoot & mkdir $roomRoot & mkdir $roomRoot/${env}-${project}"

echo rsync -azvF -e "ssh -p $sshport" $root/dist/ $user@$host:$roomRoot/${env}-${project}-stage
rsync -azvF -e "ssh -p $sshport" $root/dist/ $user@$host:$roomRoot/${env}-${project}-stage

if [ "$noclean" != "true" ]; then
  rm -rf dist
fi

command=migrate-product options="renpm=$renpm npm=$npm" bash ./remote-call.sh
