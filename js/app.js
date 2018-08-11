(function(launchpad){
    var colors = ['off', 'red', 'green', 'orange'];

    launchpad.connect({name: 'Launchpad Mini MIDI 1'})
        .then(function(pad){
            var color = 'red';
            initialize(pad, color);
            pad.on('press', function(button){
                if (button.isControl()){
                    color = colors[button.id] || colors[0];
                }
                if (button.isControl() && button.id === 7) {
                    color = 'red';
                    initialize(pad, color);
                }
                pad.controlButton(7).turn(color);
            });
            pad.on('press', function(button){
                if (!button.isControl()){
                    button.turn(color);
                }
            });
            pad.on('press', function(button){
                console.log('%s, %s', button.channel, button.note);
            });
            window.pad = pad;
        }).catch(function(error){
            console.log(error);
        });

    function initialize(pad, color) {
        pad.clear();
        colors.forEach(function(color, index){
            pad.controlButton(index).turn(color);
        });
        pad.controlButton(7).turn(color);
    }
})(launchpad);
