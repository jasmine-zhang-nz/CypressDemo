# CypressDemo
This is a short demo which includes some of the key features that I used in frontend testing

Feature 1: Use xpath in cypress
1. In the terminal, run npm install -D cypress-xpath
2. include this in the support/index.js 
`require('cypress-xpath')`

Feature 2: Use cypress.env.json to hide sensitive information
1. add a json file in your project called cypress.env.json
2. add the settings or configurations
3. Hide this one by adding this file in .gitignore
4. Put the same settings or configurations in cypress.json
5. The value in cypress.env.json will override whatever values you used in cypress.json

Feature 3: Use mocha awesome as the reporting tool
1. `npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator`
2. add the following code in cypress.json
`
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/results",
      "overwrite": false,
      "html": false,
      "json": true
    }
`
3. run the test and combine them with command `npx mochawesome-merge --reportDir cypress/results > mochawesome.json`
4. generate a combined html report with command `npx mochawesome-report-generator mochawesome.json`
5. please refer to Cypress official website https://docs.cypress.io/guides/tooling/reporters.html#Multiple-reporters-examples

Feature 4: Firewall settings
1. In your terminal, enter the following command 
Windows System:
Set HTTP_PROXY= value
Set NO_PROXY=localhost,value 1, value 2...
This firewall setting only works from version 3.4.1. The previous versions of cypress did not work for me when the organisation uses firewall
2. Make sure the host.txt has the right setup 
