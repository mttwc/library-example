# Libary-example

Example library to standardize exporting different module types, with a sample app demonstrating tree-shaking and dead code removal

## Build steps

1) Run `yarn` in both the root folder and /sample-app
2) `cd sample-app`
3) Use any of the following build commands to demonstrate tree-shaking and dead code removal with webpack and rollup
    - Webpack: `yarn run build`
    - Rollup: `yarn run build-rollup`

## TODOs

- Development mode for webpack build
- Production mode for rollup build
- Only have one `node_modules` folder, and only run `yarn` once to fetch dependencies

## Attributions

Build setup for different modules was heavily borrowed and adapted from [OfficeDev/office-ui-fabric-react](https://github.com/OfficeDev/office-ui-fabric-react)