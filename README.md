### omni login flow
##### One positive and one negative case

##### Tests are written on playwright

#### How to launch?

##### 1. Clone "omni" repository
`git clone ...`
##### 2. Get to the "omni" folder and install playwright.
##### Following the installer prompt select JavaScript version, install browsers and at the last step DO NOT overwrite *playwright.config.js* 
`npm init playwright`
##### 3. Run the test without or with debug mode ( To see how it runs step by step )
`npx playwright test loginFlow`

`npx playwright test loginFlow --debug`
