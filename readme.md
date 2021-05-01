# DevOps with NodeJS

> Playing with docker on nodejs and express based project to get familiar with concepts

## Docker Commands
```
1.  docker build . -> this will build the docker image based on the instructions that you have specified in the Dockerfile
2.  docker build -t node-app-image . -> specifying the name for the docker image
3.  docker image ls -> this will show all the available docker images
4.  docker image rm <image id> -> this will remove the docker image from docker repo
5.  docker run -d --name node-app node-app-image -> we are specifying name for the container "node-app" and running it in detached mode -d.
6.  docker ps -> it'll show container is running
7.  docker rm <container name> -f -> to remove the running container
8.  docker run -p 5000:5000 -d --name node-app node-app-image --> running the container, but this time we are specifying the port number
9.  docker exec -it node-app bash -> we can interact with file system of the container
10. docker run -v ${pwd}:/app -p 5000:5000 -d --name node-app node-app-image -> sync up current folder with container
Note: %cd% for cmd
      ${pwd} for powershell
11. docker ps -a -> all docker containers
12. docker logs <container name>
13. docker run -v ${pwd}:/app -v /app/node_modules -p 5000:5000 -d --name node-app node-app-image -> (bind mount + anonymous volume)-> extra -v to specify dont touch the node_modules so volume sync won't overwrite the node_modules
14. docker run -v ${pwd}:/app:ro -v /app/node_modules -p 5000:5000 -d --name node-app node-app-image -> make it read only

```
- Version: 1.0.0
- License: MIT