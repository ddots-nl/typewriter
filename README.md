## Typewriter
A simple yet powerful native javascript plugin for a cool typewriter effect.

## Features
- Loop through different texts in the typewriter effect
- Use Mendix variables in texts from within the page's context
- Render as HTML text, paragraph or header
- Enable/disable loop
- Define type speed in microseconds
- Define delete speed in microseconds
- Define character for cursor

## Usage
- Include the widget into your Mendix project
- Add the widget to any page using the toolbox in Mendix Studio Pro
- Set at least one text in the widget properties

## Demo project
https://typewriter-sandbox.mxapps.io/

## Issues, suggestions and feature requests
https://github.com/ddots-nl/typewriter

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
