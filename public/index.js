const rust = import('../pkg/index.js');

const canvas = document.getElementById('rust_canvas');
const gl = canvas.getContext('webgl', {antialias: true});

rust.then(r => {
    if (!gl) {
        alert("Failed to initialize WebGL");
        return;
    }

    gl.enable(gl.BLEND);//support semi-transparent objects
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS = 1000.0 / 30.0;
    let delta_time = -1;// ms
    function game_loop() {
        window.requestAnimationFrame(game_loop);
        const now = Date.now();
        if (now >= delta_time + FPS) {
            delta_time = now;

            //Rust render

            //Rust update

            //test
            r.say_hello_from_rust();
        }
    }

    //START
    game_loop();
})
.catch(console.error);