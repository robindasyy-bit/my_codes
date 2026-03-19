const accountId = 12345
/* const cann't be change */

let accountEmail = "hello@google.com"
/* we only use let when declair any variable that can be change*/

var accountPassword = "12312"
/* we not use var coz of issue in block scope*/

accountCity = "jaipur"
/* casual but not preffer */

let accountState;


accountPassword = "141421"
console.log(accountPassword);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);