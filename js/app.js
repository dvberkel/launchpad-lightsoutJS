(function(launchpad){
    launchpad.connect({name: 'Launchpad Mini MIDI 1'}).then(function(pad){
        pad.clear();
        pad.on('press', function(button){
            button.turn('red');
        });
    }).catch(function(error){
        console.log(error);
    });
})(launchpad);
