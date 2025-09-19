### Installation

1. Install the dependencies:

```bash
npm install
```

2. [Install Prettier VSCode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Development

Start the development server with HMR:

```bash
npm run dev
```

local site will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
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
