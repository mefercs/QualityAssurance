# assert

```js
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
assert.equal()
assert.notEqual()

```
