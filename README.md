# Ardigen GitHub Search - recruitment task

### Versions:
1. Node: 18.16.0
1. Yarn: 1.22.19
1. Vite: 4.3.9

### Production:
Ardigen GitHub Search live preview available [here](http://3.64.11.216/).\
Deployed on Amazon Web Services.

### Docker images used for production build and run:
1. [node:18.16.0-alpin](https://hub.docker.com/_/node)
1. [nginx:1.25.0-alpine](https://hub.docker.com/_/nginx)

### Local preview:
If you prefer run production version locally use *launch.sh* script:
```bash
curl -sSL https://raw.githubusercontent.com/NorbertBaran/ardigen-github-search/master/launch.sh | sudo sh
```
For above launch script linux distribution with apt package manager eg. Debian/Ubuntu required.

If you have docker and docker compose on your local machine you can just download this repository and use docker compose to launch local preview.

Local preview is hosted by localhost standard http port 80.
