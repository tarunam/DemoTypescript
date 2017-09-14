/**
 * Created by tdhir on 09-08-2017.
 */
import {homepage} from "../pages/home.page";
import {helperObject} from "../utils/helper";

describe('login to ACM', function () { //Suite in Jasmine
    var homePO : homepage = new homepage();
    var helper : helperObject = new helperObject();

    it('should login as acmAdmin and banner should be shown', function () { // Test in Jasmine
        helper.goToUrl("/") ; // Entering application url in browser
        homePO.login("acmAdmin","ptcACMAdmin");
        //Use either of it to resolve promises
        homePO.getBannerText().then(bannerText => expect(bannerText).toEqual("Academic Admin Portal"));
        expect<any>(homePO.getBannerText()).toEqual("Academic Admin Portal");
    });
});

