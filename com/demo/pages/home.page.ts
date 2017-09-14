import { ElementFinder, browser, by, element} from 'protractor';
import {helperObject} from "../utils/helper";
let locRepo = require('../resources/locatorRepo.json');

export class homepage extends helperObject{
    public login(username,pwd){
          element(this.getLocator(locRepo.homepage.txtUserName)).sendKeys(username);
          element(this.getLocator(locRepo.homepage.txtPassword)).sendKeys(pwd);
          element(this.getLocator(locRepo.homepage.btnSignIn)).click();
          browser.waitForAngular();
    }
    public getBannerText() {
        return element(this.getLocator(locRepo.homepage.ttlBanner)).getText();
    }
}
