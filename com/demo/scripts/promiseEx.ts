
it('testing of promise', () =>
{
    return new Promise((resolve, reject) => {
        //resolve(123);
        reject("I am in error condition");
    }).then((res) => {
        console.log('I get called:', res === 123); // I get called: true
    }).catch((err) => {
        // This is never called
        console.log('I get called:', err); // I get called: true
    })
});