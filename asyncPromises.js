async function fivePromise() {
    return 5;
}

console.log(fivePromise()); //Prints Promise { 5 }



fivePromise()
    .then(resolvedValue => {
        console.log(resolvedValue);
    }) //Prints 5



function withConstructor(num) {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve('zero');
        } else {
            resolve('not zero');
        }
    });
}

//console.log(isZero(6)); //Prints Promise { 'not zero' }

withConstructor(1)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
}); //Prints console statement

