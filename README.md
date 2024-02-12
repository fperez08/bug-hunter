# bug-hunter

## Table of Contents

- [bug-hunter](#bug-hunter)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Configurations](#configurations)
    - [Hosts](#hosts)
    - [Pages](#pages)
    - [Mappings](#mappings)
    - [Example](#example)
      - [hosts.json](#hostsjson)
      - [common.env](#commonenv)
      - [pages.json](#pagesjson)
      - [mappings/login.json](#mappingsloginjson)
      - [login.feature](#loginfeature)

---

## Description

**bug-hunter** is an automation framework designed for testing and quality assurance purposes.

## Installation

To install the necessary dependencies, run the following command:

  ```bash
    npm install
  ```

## Usage

After installation, you can use the framework to automate tests by executing the provided scripts.

## Scripts

The following npm scripts are available for use:

- **precucumber**: Prepare the environment for running Cucumber tests.
- **cucumber**: Run Cucumber tests.
- **cucumber:dev**: Run Cucumber tests in development environment.
- **cucumber:smoke**: Run Cucumber tests for smoke testing.
- **cucumber:regression**: Run Cucumber tests for regression testing.
- **postcucumber**: Generate reports after running Cucumber tests.
- **transpile**: Transpile TypeScript source files to JavaScript.
- **cucumber:dry**: Perform a dry run of Cucumber tests.

## Configurations

### Hosts

The hosts.json file contains the list of the different endpoints where the app is running, the framework pick the appropriate endpoint base on the value of the environment variable UI_AUTOMATION_HOST.

### Pages

The pages.json file contains the list of the different web pages of the application, the route is the the relative path to the page and the regex is utilized by the framework to determine the actual page and pick the appropriate selectors to perform the test.

### Mappings

Inside the folder mappings you should add the page object models of each web page in json format, the key is a string with the name of the web element and the value is the selector to find de web element in the page.

### Example

To click a button of the login page in qa environment you should have the following configuration:

#### hosts.json

  ```text
      {
        "qa":"www.example.qa.com"
      }
  ```

#### common.env

  ```text
    UI_AUTOMATION_HOST=qa
  ```

#### pages.json

  ```text
      
      {
        "login": {
          "route": "/login",
          "regex": "^/login"
        } 
      }

  ```

#### mappings/login.json

  ```text
      
      {
        "sign in":"#login"
      }

  ```

#### login.feature

  ```Cucumber
      
      When I click the "sign in" button

  ```

---

**Author**: Francisco Perez
