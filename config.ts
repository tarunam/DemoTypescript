import {protractor, browser, Config} from 'protractor';

export let config: Config = {
    directConnect: true,
    baseUrl: "https://acm2-development.herokuapp.com/",
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',
    specs: ['com/demo/scripts/*.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    getPageTimeout: 90000,
    allScriptsTimeout: 90000,
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
    }
};