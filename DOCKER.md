# Build docker container
./buildDocker.sh

# Remove container
docker container ls -a | grep steria
docker rm [ID]

# Enter container shell
docker exec -ti [ID] sh