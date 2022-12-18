---
sidebar_position: 2
id: getting-started
---

# Getting Started

To install dependencies you will need the latest version of [Node](https://nodejs.org/en/). The project is configured
to use `yarn` version >=2.0.0.

`yarn` can be downloaded through `npm` after downloading node.
```shell
npm install -g yarn
```

## Local Development

Clone the [repo](https://github.com/Hack-PSU/admin-web-app) into your current directory:
```shell
git clone git@github.com:Hack-PSU/admin-web-app.git \
cd admin-web-app
```

Install dependencies:
```shell
yarn
```

To start a local development server:
```shell
yarn dev
```

### Code Style

To maintain code style and consistency in a larger project like this, configure your editor to use the eslint 
and prettier configurations found in the repo. `husky` is also configured in this project, which will enforce the 
eslint and prettier configurations on `git commit`.

### Environment Variables

There are a number of set environment variables for each development environment. To be able to load them into the 
development server create a local `.env.local` file, which is not included in git.

For a dev environment, copy all the variables from `.env.development` to the `.env.local` file and prefix all the 
variables with `NEXT_PUBLIC_`:
```
NEXT_PUBLIC_<variable name>=<variable value>
```

For a prod environment, copy all the variables from `.env.production` to the `.env.local`, overriding any existing 
duplicate variables and repeat the step above.
