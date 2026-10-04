# Beer Catalog Frontend

A frontend-only catalog of beers built with React, TypeScript and Vite. It was developed as a university project and is intended to be deployed to the internet using AWS.

The repository includes a `Dockerfile`, a `docker-compose.yml` and a `.dockerignore`, so several people can work on the project without installing Node.js or the React toolchain locally. It also serves as a personal reference for setting up a Dockerized development environment.

## Project Structure

```text
public/
    icon.jpg
src/
    assets/          # Images used by the components
    components/      # One component per beer
    pages/
        Beer.tsx
    App.tsx
    main.tsx
.dockerignore
docker-compose.yml
Dockerfile
index.html
```

## Application Overview

**Components** (`src/components/`): each component describes one type of beer and follows the same structure:

- Name
- Origin
- Time
- Creator
- Features
- Fun fact

**Beer page** (`src/pages/Beer.tsx`): contains an introduction and a list of buttons that open the information of each beer, in order.

## Running the Project

### Prerequisites

- [Git](https://git-scm.com/)
- Docker with the Compose plugin
  - Windows / macOS: Docker Desktop
  - Linux: Docker Engine + Compose plugin

Node.js is **not** required.

### First run

```bash
git clone <repository-url>
cd <repository-folder>
sudo docker compose up --build
```

On Windows and macOS, run the same commands without `sudo`.

Then open <http://localhost:5173/>.

### Daily use

| Task                         | Command                          |
| ---------------------------- | -------------------------------- |
| Start                        | `docker compose up`              |
| Start in the background      | `docker compose up -d`           |
| Follow the logs              | `docker compose logs -f`         |
| Stop and remove containers   | `docker compose down`            |
| Rebuild the image            | `docker compose up --build`      |

Rebuild whenever the `Dockerfile` or `package.json` changes (for example, after adding a dependency).

### Live editing

Changes made in `src/`, `public/` and `index.html` are reflected in the browser without rebuilding. Vite reloads the page automatically.

## How the Project Was Created

```bash
mkdir project
cd project
npm create vite@latest beer_frotend -- --template react-ts
```

The Vite wizard asks a few questions:

- Linter: **ESLint** (instead of Oxlint)
- Install with npm and start now: **Yes**

## Docker Setup

### Dockerfile

```dockerfile
FROM node:22-alpine
WORKDIR /beer
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

| Instruction | Purpose |
| --- | --- |
| `FROM node:22-alpine` | Base image with Node.js preinstalled, so it is not needed on the host machine. |
| `WORKDIR /beer` | Working directory inside the container (created if it does not exist). |
| `COPY package.json package-lock.json ./` | Copies only the dependency files first, so Docker can cache the install step. |
| `RUN npm install` | Installs the dependencies at build time; they are stored in the image. |
| `COPY . .` | Copies the rest of the project into the image. |
| `EXPOSE 5173` | Documents the port used by Vite (informational only). |
| `CMD [...]` | Starts the dev server when the container runs. `--host` makes Vite listen on all interfaces; without it the server is unreachable from outside the container. |

### docker-compose.yml

```yaml
services:
  beer-frontend:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - ./src:/beer/src
      - ./public:/beer/public
      - ./index.html:/beer/index.html
```

- `build: .` builds the image from the `Dockerfile` in the current directory.
- `ports` maps `host:container`, so the app is available at `localhost:5173`.
- `volumes` are bind mounts (`host path : container path`). They share the listed files with the container so edits are visible immediately.
- `node_modules` is intentionally **not** mounted, so the dependencies installed in the image are not overwritten by the host folder.
- Any other file that needs live editing (for example `vite.config.ts`) requires its own volume line, or a rebuild.

### .dockerignore

```text
.git
node_modules
```

These entries keep the Git history and the host's `node_modules` out of the image, so `COPY . .` does not overwrite the dependencies installed by `npm install`.

## Troubleshooting

- **`permission denied ... docker.sock` (Linux):** run Docker with `sudo`, or add your user to the `docker` group (`sudo usermod -aG docker $USER`) and log in again.
- **`port is already allocated`:** another container is using port 5173. Find it with `docker ps` and stop it with `docker stop <name-or-id>`.
- **Changes are not reflected live (Windows):** this happens when the project lives on the Windows filesystem. Either keep the repository inside WSL, or enable polling in `vite.config.ts`:

  ```ts
  export default defineConfig({
    plugins: [react()],
    server: { watch: { usePolling: true } },
  });
  ```