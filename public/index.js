const rust = import('../pkg/index.js');


rust.then(r => {
    r.say_hello_from_rust();
})
.catch(console.error);
