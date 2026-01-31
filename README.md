### Installation

1. Install the dependencies:

```bash
npm install
```

2. [Install Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Development

Build and start the server:
**NOTE:** you will currently have to restart the server to see changes (no reload as of yet)

```bash
cd server
npm run dev
```

Start the client in dev mode: This wil proxy all api calls to the running server and host everything else through vite's dev server so we can get HMR
**NOTE:** HMR is currently broken so you have to restart to see each change smh...this should get fixed and it might be my laptop specifically

```bash
cd client
npm run dev
```

local site will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
# TODO: make this one command...docker?
cd server
npm run build

cd ../client
npm run build
```

## Deployment

push or merge to `main` on github and it will auto deploy to github actions

# navigation musings

Home: '/'
Course: '/course/${courseId}'
Module

/ => Home
/course/${courseId} => Course
    /module/${moduleId} => Module within the context of a Course
/resource/${resourceId} => module within the context of a module in a course
    /resource/${resourceId} => (inline) Resource within the context of a Course
/module/${moduleId} => Module details
/resource/${resourceId} => Resource details
/explorer => search/explore courses, modules, and resources by tags etc
