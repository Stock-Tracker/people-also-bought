# People Also Bought
> Service People Also Bought for this particular stock

## Related Projects
  ###### Reverse Proxy that interacts with the other microservices
  - https://github.com/Dr-Wing/chart-proxy

  ###### Microservices
  - https://github.com/Dr-Wing/about-microservice

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
- No .env file is required. The client side code gets the service URL from the browser it's running on.

- From your LOCAL computer:
```sh
bash ec2-move-files.sh EC2_INSTANCE_URL
```

- ssh into the ec2 instance like so:
```sh
ssh -i ~/aws/Administrator-key-pair-useast1.pem ec2-user@EC2_INSTANCE_URL
```

- change directory to `pab`
```sh
cd pab
```

- From the ec2 instance (If this file has not already been run on this instance)
```sh
bash ec2-install.sh
```

- If ec2-install.sh was run, logout of the ec2 instance with `exit` and log back in using the command above

- Again from the ec2 instance, `pab` directory
```sh
docker-compose up
```

> The app is now running in a container at port 4550. The mongo database is available at port 1100. To stop the app (and clean up after yourself!), run this command from the `pab` directory of the ec2 instance:
```sh
docker-compose down -v --rmi all
```

### If Needed
- To connect to the mongo db running in the mongo container (ie, check if there is data there, etc ...), from the ec2 instance, run
```sh
docker exec -i ec2-user_mongo_1 mongo "mongodb://localhost"
```

## Requirements
- Requires the chart service to be up and running on the same ec2 instance

### With Docker
- docker
- docker-compose
### Without Docker
- node, npm, and mongo

## Development

### Build
- creates a webpack bundle, build a docker image, and pushes it to dockerhub
```sh
npm run build
```

### Without Docker
- From within the root directory:
```sh
npm install
  ```

  ```sh
npm run dev
  ```

  ```sh
npm run start-dev
  ```