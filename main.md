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
suite('GET /hello?name=[name] => "hello [name]"', function(){
    test('?name=John', function(done){
      chai.request(server) //test request to the 'server'
          .keepOpen() //It is to allowed chai-http start and stop our server automatically, but in this case we need to keep open the server to pass the test in FCC
          .get('/hello?name=John')
          .end(function(err,res){
            assert.equal(res.status,200,"Response status should be 200")
            assert.equal(res.text, 'hello John', 'Response should be "Hello John"')
            done(); //which is the middleware that handles the response is like a rounte handler itself, we are not using an argument because in this case it is designed to be like that
            })
        })
    })
```


