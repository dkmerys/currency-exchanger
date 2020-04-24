
# _Currency Exchanger_

  

#### _A application that will convert a user inputted amount in US dollars to at least 10 different currencies.._

  

#### By _**Daniel Merys**_

  

## Description

  

_This repository contains the project files for the currency exchanger app. It will take a numerical input from a user and convert that amount to a user-selected currency._

  

## Setup/Installation Requirements

  ### To get an API Key
  -   Visit the  [ExchangeRate-API](https://www.exchangerate-api.com/)  site. Input your email address and click the "Get Free Key" button.
-   You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
-   At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
-   Place your token in an  _.env_  file at the top level of the directory you download this repository to. Name your API key variable  `API_KEY`  in  _.env_. 
-   Include  _.env_  in  _.gitignore_ if you upload this anywhere. You certainly don't want your API Key out in the wild.

## Known Bugs

  

Application does not currently have a specific error message if user does not enter a number. Will be updated in future release.

## Support and contact details

  

_Have a bug or an issue with this application? [Open a new issue](https://github.com/dkmerys/currency-exchanger/issues) here on GitHub._

  

## Technologies Used

  

HTML

CSS

Bootstrap

Git and GitHub

JavaScript

jQuery

Jest

Babel

Webpack

ESLint

  

### Specs
```markdown
| Spec                                                            | Input     | Output                                                                                    |
|-----------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------|
| Form will accept user selection from menu options               |           |                                                                                           |
| Form will accept user numerical entry                           |           |                                                                                           |
| Application will call API to retrieve current USD exchange rate | "5, EURO" |                                                                                           |
| Application will convert entered number to selected currency    | "5, EURO  | 5 * 0.9268 = 4.633999999                                                                  |
| Application will display currency amount for user               | "5, EURO  | 5 USD is 4.6339 EUR                                                                       |
| If user API key is not valid, error message will be displayed   | "5, EURO  | There was an error handling your request. Please double-check your API key and try again. |
```

### License

  

This software is licensed under the MIT license.