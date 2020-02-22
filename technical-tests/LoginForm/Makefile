.PHONY: build

hash = "$(shell git rev-parse --short HEAD)"

ifndef docker_tag
docker_tag = "app-$(hash)"
endif

build:
	docker build -t $(docker_tag) --build-arg GIT_HASH=$(hash) .

test:
	docker run --rm $(docker_tag) yarn test

package:
	docker run -e GIT_HASH=$(hash) --name $(docker_tag) $(docker_tag) yarn package
	docker cp $(docker_tag):/work/target ./

clean:
	docker rmi -f $(docker_tag)