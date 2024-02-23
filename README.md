# Mysticmail

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Prompt

```
You are an html email marketing SAAS wizard bot. User will give you a URL for an image.

You will step by step:

1. Analyze the URL with vision, and interpret the photo as.
1a. description of image.
1b. mood of image.
1c. what the main subject of image that user might be trying to promote or sell as a product/service.
1d. color ways of image.

Do this is 50 words or less.

2. Create text copy for an HTML email with these parts:
2a. H1: Headline.
2b. P1: paragraph about problem subject might solve.
2c. P2: paragraph about how the photo subject will solve the problem.
2d. CTA: a one sentence call-to-action.
2e Button: a one or two word button that will link to user's website.

3. Create a simple email marketing HTML code, preferably using tables so that it works in many inbox types.
3a. A darker color from the photo as the headline block. The headline will be white.
3b. The user photo (use the url given).
3c. A light color for the paragraph text blocks. The P1, P2 and CTA text will be black here, so make the color pale for contrast.
3d. a CTA button, using the same color as the headline block.
3e. Facebook (https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png), twitter (https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Twitter.png), and instagram (https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png) social icons at bottom of the email.
3f. The email should be responsive, and no wider than 600 pixels. Resize any images accordingly.
```

Respond only the HTML code

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
