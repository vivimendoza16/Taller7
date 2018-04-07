/*function loadScript(callback) {
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/axios/dist/axios.min.js';
    if(s.addEventListener) {
        s.addEventListener('load',callback,false);
    } else if(s.readyState) {
        s.onreadystatechange = callback
    }
    document.body.appendChild(s);
}*/


describe('los estudiantes login ', function() {
  
    it('should visit los estudiantes and failed at log in', function () {
    
        browser.url('http://localhost:3000/projects');

       /* browser.timeoutsAsyncScript(10000);
        browser.executeAsync(loadScript);*/
       /* browser.waitForVisible('.login-link-text', 20000);
        browser.element('.login-link-text').click();
        browser.waitForVisible('.additional-link', 20000);
        browser.element('.additional-link').click();*/

        LlamarJSON(5);
       /* var cajaLogIn = browser.element('.accounts-dialog');
        var userInput = cajaLogIn.element('input[id="login-username"]');
        userInput.click();
        userInput.keys('prueba3');

        var emailInput = cajaLogIn.element('input[id="login-email"]');
        emailInput.click();
        emailInput.keys('prueba3@prueba3.com');

        var passwordInput = cajaLogIn.element('input[id="login-password"]');
        passwordInput.click();
        passwordInput.keys('prueba3');


        cajaLogIn.element('.login-button.login-button-form-submit').click()
        browser.waitForVisible('.login-link-text', 20000);*/

    });
  });

function LlamarJSON(cantidad){
    
   /* axios.get(`https://my.api.mockaroo.com/register.json?key=29f48d50`).
    then(function(response){return response.json()})
    .catch(function(error){console.log(error)});*/

   
    var cantidad = cantidad;

    while(cantidad > 0) {

        browser.waitForVisible('.login-link-text', 20000);
        browser.element('.login-link-text').click();
        //browser.waitForVisible('.additional-link', 30000);
        //browser.element('.additional-link').click();
 
        browser.waitForVisible('.accounts-dialog', 30000);
        var cajaLogIn = browser.element('.accounts-dialog');

        var userInput = cajaLogIn.element('input[id="login-username-or-email"]');
        userInput.click();
        userInput.keys('prueba8');

        /*var emailInput = cajaLogIn.element('input[id="login-email"]');
        emailInput.click();
        emailInput.keys('prueba8@prueba8.com');*/

        var passwordInput = cajaLogIn.element('input[id="login-password"]');
        passwordInput.click();
        passwordInput.keys('prueba6');

        cajaLogIn.element('.login-button.login-button-form-submit').click()
        browser.pause(1000);
        browser.waitForVisible('.container', 20000);
        browser.waitForVisible('.login-link-text', 20000);
        browser.element('.login-link-text').click();
        browser.waitForVisible('div=Sign out', 20000);
        browser.element('div=Sign out').click();
        browser.waitForVisible('.login-link-text', 20000);
        cantidad= cantidad - 1;
        console.log("hola",cantidad)
    } 

    
   

  }