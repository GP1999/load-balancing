# load-balancing
This repo contains example for load balancing using Nginx 

Go to server Folder and run 

>>docker build -t server .
>>docker run -p 3003:3003 -d -e PORT=3003 server
>>docker run -p 3001:3001 -d -e PORT=3001 server

Now we have two server running in docker .Get the IP Address to configure that IP in upstream configuration in nginx.config file.
use below command to get IP address. It will give IP and container name 
>>docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}} %tab% {{.Name}}' $(docker ps -aq) | sed 's#%tab%#\t#g' | sed 's#/##g' | sort -t . -k 1,1n -k 2,2n -k 3,3n -k 4,4n

Go to nginx Folder and 
Run Docker command to build and run Nginx
>> docker build -t load-balancer .
>> docker run -p 3000:80 load-balancer

Now hit http://locahost:3000/test?req-no=1 .You will see request being  routed to one of the server🤟
