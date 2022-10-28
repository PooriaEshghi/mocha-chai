const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumber = require('../app').addNumber;

// const app = require('../app');

describe('App',function(){
    it('app should return Hello',function(){
        let result = sayHello()
        assert.equal(result,'Hello')
    });
    it('sayHello should return type string',function(){
        let result = sayHello();
        assert.typeOf(result, 'string')
    });
    it('addNumber should be above 5',function(){
        let result = addNumber(5,5);
        assert.isAbove(result,5)
    });
    it('addNumber should return type number',function(){
        let result = addNumber(5,5);
        assert.typeOf(result,'number');
    })
});
// // const sayHello = require('../app').sayHello;
// // const addNumber = require('../app').addNumber;

// const app = require('../app');

// // Result
// sayHelloResult = app.sayHello();
// addNumberResult = app.addNumber(5,5);

// describe('App',function(){
//     it('sayHello should return Hello',function(){
//         // let result = app.sayHello()
//         assert.equal(sayHelloResult,'Hello')
//     });
//     it('sayHello should return type string',function(){
//         // let result = app.sayHello();
//         assert.typeOf(sayHelloResult, 'string')
//     });
//     it('addNumber should be above 5',function(){
//         // let result = app.addNumber(5,5);
//         assert.isAbove(addNumberResult,5)
//     });
//     it('addNumber should return type number',function(){
//         let result = app.addNumber(5,5);
//         assert.typeOf(addNumberResult,'number');
//     })
// });
// const sayHello = require('../app').sayHello;
// const addNumber = require('../app').addNumber;

const app = require('../app');

// Result
sayHelloResult = app.sayHello();
addNumberResult = app.addNumber(5,5);

describe('App',function(){
    describe('sayHello()',function(){
        it('sayHello should return Hello',function(){
            // let result = app.sayHello()
            assert.equal(sayHelloResult,'Hello')
        });
        it('sayHello should return type string',function(){
            // let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string')
        });
    });
describe('addNumber()',function(){

    it('addNumber should be above 5',function(){
        // let result = app.addNumber(5,5);
        assert.isAbove(addNumberResult,5)
    });
    it('addNumber should return type number',function(){
        let result = app.addNumber(5,5);
        assert.typeOf(addNumberResult,'number');
    })
})
    
});



// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });