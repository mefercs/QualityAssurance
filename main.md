Mocha allows us to test asynchronous operations like calls to API endpoints using a plugin called `chai-http` 
- chai is an assertion library
- headless browser (zombieJS) allow us to simulate human interaction with a page
  - They are browsers whithout a GUI
# assert - chai

if the assert is not true the 'text' is showed as an error an the compiler stops

```js
// Here is how we import chai, which is the library to test and create assertions
const chai = require('chai')
const assert = chai.assert; 

// null | not null 
// Null means an empty value or a blank value,
//intentional absence of the value
assert.isNull(null, "text")
assert.isNotNull(1, "text")

// variable of function defined
// undefined means the varaible has been declared but its values has not been asigned
// the value does not exist in the compiler
assert.isDefined(null, "text")
assert.isUndefined(undefinde, "text")

//Falsy and truthy value
assert.isOk( 1, "text" )
assert.isNotOk( 0, "text" )

//Test for truthiness
// We just accept boolean values
assert.isTrue(true,"text") 
assert.isNotTrue(1,"text") 
assert.isFalse(true,"text") 
assert.isNotFalse(1,"text") 

//Double equals
// === is like the normal == in c++ so so
assert.equal( a, b, "text")
assert.notEqual(a,b, "text")

// strict equals
assert.strictEqual(a,b, 'text')
assert.notStrictEqual(a,b, 'text')

// deepEqual 
//Does not test whether the operands are the same objects, but rather that they're EQUIVALENT
assert.deepEqual( actual, expected, 'text' )
assert.notDeepEqual( actual, expected, 'text' )

// Comparisons
//It follows as you think the logic works
assert.isAbove(actual,expected, 'text')
assert.isAtMost(actual,expected,'text')

//Test if a value falls into an specified range
assert.approximately(actual, expected, delta, 'text')

//Test if is an Array
assert.isArray()
assert.isNotArray()

//Test if an array contains an item IT WORKS WITH A STRING TOO
assert.include( list, item, 'text' )
assert.notInclude( list, item, 'text' )

// Test if string
assert.isString( a, 'text' )
assert.isNotString(a, 'text')

// Match for Regex
assert.match( string, regex, 'text')
assert.notMaatch( string, regex, 'text')

// Property 
//Assert if the actual objects has a given property
assert.property( Object, propertyString, 'text' )
assert.notProperty( Object, propertyString, 'text' )

// typeOf
assert.typeOf( object, 'objectType', 'text' )
assert.notTypeof( object, 'objectType', 'text' )

//instanceOf
assert.instanceOf( instance , object, 'text' )
assert.notInstanceOf( instance , object, 'text' )
```
# assert - chai-http 

This is a plugin

```js
suite('GET /hello?name=[name] => "hello [name]"', function(){ //The first argument is the name of the test or title
    test('?name=John', function(done){ //done function as the parameter
      chai.request(server) //test request to the 'server'
          .keepOpen() //It is to allowed chai-http start and stop our server automatically, but in this case we need to keep open the server to pass the test in FCC
          .get('/hello?name=John') //but we can use put and send methods for the PUT HTTP method
          .end(function(err,res){
            assert.equal(res.status,200,"Response status should be 200") //response is OK
            assert.equal(res.text, 'hello John', 'Response should be "Hello John"') // then checks if the answer is correct
            done(); //which is the middleware that handles the response is like a rounte handler itself, we are not using an argument because in this case it is designed to be like that
            })
        })
    })
```

we need to use the next imports
```js
const chai = require('chai');
const assert = chai.assert;

const server = require('../server'); //this is the directory where our project is running

const chaiHttp = require('chai-http');
chai.use(chaiHttp);
```

### Using put and send methods

It is like executing a POST request, remember that it can act like get, but it is more focused to an user interface

```js
chai.resquest(server)
    .keepOpen()
    .put('/travellers') //route in which we are executing our http method
    .send({"name":"mefercs"})
    .end( function(err,res){ // remember we are using a middleware here, so we need to use the err, res, in this case is not the req,res
       assert.equal( res.status, 200, "Something went wrong with the server" ) 
       assert.equal( res.type, 'application/json', "The type should be application/json" )
       assert.equal( res.body.name, 'something', 'The name should be something' )
       assert.equal( res.body.surname, "something", "The surname should be something")
    } );
done(); //Always finish with done() function to handle the answer response
```

- headless browser are web browsers without a GUI 
```js
//Using zombie js
const Browser = require('zombie')
Browser.site = "url"

//somewhere in the code before any test
const browser = new Browser()
browser.visit('/', done )


test('Submit the surname "Polo" in the HTML form', function (done) {
  browser.fill('surname', 'Polo').then(() => {
    browser.pressButton('submit', () => {
      browser.assert.success();
      browser.assert.text('span#name', 'Marco');
      browser.assert.text('span#surname', 'Polo');
      browser.assert.elements('span#dates', 1);
    });
  });

  done(); 
});
```

- Moch allows us to run some code before anything.
