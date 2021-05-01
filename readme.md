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
15. docker run -v ${pwd}:/app:ro -v /app/node_modules --env PORT=4000 -p 5000:4000 -d --name node-app node-app-image -> we can overwrite the default env variable
16. docker run -v ${pwd}:/app:ro -v /app/node_modules --env-file ./.env -p 5000:4000 -d --name node-app node-app-image -> load env variables from the file .env
17. docker volume rm <volume name> -> to remove volume
18. docker rm <container name> -fv -> it'll delete the volume associated with that container
19. docker volume prune -> to delete all volumes
20. docker-compose up -d -> to run docker-compose
21. docker-compose down -v -> to stop docker container and remove anonymous volume associated with that.
22. docker-compose up -d --build -> force to new build image
23. docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d -> to run docker container from dev environment
24. docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v -> to stop docker container from dev environment
25. docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build -> to build image and run docker container from prod environment
```
- Version: 1.0.0
- License: MIT