var request = require('sync-request');
var data = [];

describe('los estudiantes login ', function () {

    it('should visit los estudiantes and failed at log in', function () {

        browser.url('http://localhost:3000/projects');

        LlamarJSON(10);

    });
});

function LlamarJSON(cantidad) {

    data = JSON.parse(request('GET', 'https://my.api.mockaroo.com/register.json?key=29f48d50').body.toString('utf-8'));

    while (cantidad >= 0) {

        browser.waitForVisible('.login-link-text', 20000);
        browser.element('.login-link-text').click();
        //browser.waitForVisible('.additional-link', 30000);
        //browser.element('.additional-link').click();

        browser.waitForVisible('.accounts-dialog', 30000);
        var cajaLogIn = browser.element('.accounts-dialog');

        var userInput = cajaLogIn.element('input[id="login-username-or-email"]');
        userInput.click();
        userInput.keys(data[cantidad - 1].username);

        /*var emailInput = cajaLogIn.element('input[id="login-email"]');
        emailInput.click();
        emailInput.keys('prueba8@prueba8.com');*/

        var passwordInput = cajaLogIn.element('input[id="login-password"]');
        passwordInput.click();
        passwordInput.keys(data[cantidad - 1].password);

        cajaLogIn.element('.login-button.login-button-form-submit').click()
        browser.pause(1000);
        browser.waitForVisible('.container', 20000);
        browser.waitForVisible('.login-link-text', 20000);
        browser.element('.login-link-text').click();
        browser.waitForVisible('div=Sign out', 20000);
        browser.element('div=Sign out').click();
        browser.waitForVisible('.login-link-text', 20000);
        cantidad = cantidad - 1;
        console.log("hola", cantidad)
    }
}