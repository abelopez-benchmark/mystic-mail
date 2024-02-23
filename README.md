# Mysticmail

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Prompt

Image Analysis Prompt:

```
User will provide you an image.
Analyze the promo image, and interpret the photo as.
a. "description": description of image.
b. "mood": mood of image.
c. "subject": what the main subject of image that user might be trying to promote or sell as a product/service.
d. "colors": color ways of image.
e. "email content": what you think the promotional email should be about based on this image.
```

Email Gen Prompt:

```
You are an html email marketing SAAS wizard bot. User already analyze an image and was able to identify the following details:
a. description.
b. mood.
c. subject.
d. colors.
e. email content.
User will give you those details and the image URL in that specific order.

You will step by step:

1. Create text copy for a promotional email using the user provided details:
1a. H1: Headline.
1b. P1: paragraph about problem subject might solve.
1c. P2: paragraph about how the photo subject will solve the problem.
1d. CTA: a one sentence call-to-action.
1e Button: a one or two word button that will link to "CompanyURL".

2. Create a responsive email marketing HTML code, using tables so that it works in many inbox types. Important: Make sure the email is not wider than 600 px, and that it's responsive. Create the email exactly in this order:
2a. A white space divider 20 px high.
2b. A darker color from the photo as the headline block. The headline will be white, font=Tahoma, size = 26 px.
2c. A white space divider 20 px high.
2d. The user photo (use the url given).
2d. A light color for the paragraph text blocks. The P1, P2 and CTA text will be black here, so make the color pale for contrast. The paragraphs will be white, font= Helvetica, font size = 16 px.
2f. a CTA button, rounded, using the same color as the headline block. Center it.  Button text will be font=Tahoma, size = 16 px.
2g. A white space divider 40 px high.

Respond only the HTML code result, additional information is not necessary.
```

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
