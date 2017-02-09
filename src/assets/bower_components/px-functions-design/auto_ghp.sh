#!/bin/bash
while getopts ":u:p:" opt; do
  case "$opt" in
  	#find username
	u)
		user="$OPTARG"
	;;
	#find password
	p)
		password="$OPTARG"
	;;
	# ? means invalid flag was passed.
	\?)
    	echo "Invalid option: ${bold}-$OPTARG${normal}" >&2
    	exit 1
    ;;
    :)
		echo "the -$OPTARG option requires an argument."
		exit 1
	;;
  esac
done

function get_user_pass () {
	if [[ -z $user ]]
		then
		echo "${bold}to skip this step next time, enter the username using the -u flag${normal}"
		read -p "Please enter the github ${bold}user:${normal} " user
	fi

	if [[ -z $password ]]
		then
		echo "${bold}to skip this step next time, enter the password using the -p flag${normal}"
		echo "Please enter the github ${bold}password:${normal} "
		read -s password
	fi
}

#check we have username and pass to submit.
get_user_pass

#create temp dir
mkdir -p ~/ghpTemp

#generate the ssh key silently into ~/ghpTemp/id_rsa
ssh-keygen -N '' -f ~/ghpTemp/id_rsa -t rsa -q

read -n1 -r -p "Please copy the ghp.sh script from px-guide into your ~/ directory before proceeding, and hit any key when you're ready." key
read -n1 -r -p "Please copy the before_install from px-guide into your ~/ directory before proceeding, and hit any key when you're ready." key
#create a scripts dir and copy the script into it.
#please note that in order for this to work, you MUST copy the ghp.sh script into your root.


cp ~/ghpTemp/id_rsa id_rsa
cp ~/ghpTemp/id_rsa.pub id_rsa.pub

#create a random password
PASSWORD=$(openssl rand -base64 24)
echo
#encrypt passa and add it to travis.yml
travis encrypt password=$PASSWORD --add
#encrypt private ssh key with above password.
openssl aes-256-cbc -k "$PASSWORD" -in id_rsa -out id_rsa.enc

#find the repo name
REPO_NAME=$(grep "name" bower.json | sed 's/"name": "//' | sed 's/",//')
echo ${REPO_NAME}
echo

#set your URL
url="https://${user}:${password}@api.github.com/repos/PredixDev/${REPO_NAME}/keys"
echo "url = ${url//[[:space:]]/}"
echo

#import the public key
public_key=$(<id_rsa.pub)

#and hit github
status=($(curl -H "Content-Type: application/json" -X POST -d "{\"title\": \"travis CI\", \"key\": \"${public_key}\" }"  ${url//[[:space:]]/}))

#clean up
rm id_rsa
rm id_rsa.pub
rm -rf ~/ghpTemp
