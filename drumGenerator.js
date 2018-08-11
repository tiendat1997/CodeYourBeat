$(document).ready(function () { 
    var soundSet = sounds.map(item => item);    
    window.addEventListener('keypress', function (e) {
        var code = e.keyCode;
        var kc = String.fromCharCode(e.keyCode);     
        for(var i = 0; i < soundSet.length; i++){            
            if ( kc == soundSet[i].keyCode) {                
                $(`#${soundSet[i].name}`).click();
                break;
            }
        }        
    });
    generateDrumPad(sounds);    
});

var drum = $('#drumFrame');

function generateDrumPad(sounds) {
    while (sounds.length > 0) {
        let arr = sounds.splice(0, 4);
        let row = $('<div class="row"></div>');
        arr.forEach((sound) => {
            let col = $('<div class="col-md-3"></div>');
            let btn = $(`<button id="${sound.name}">${sound.name} (${sound.keyCode})</button>`);
            new Audio(sound.uri).pause();

            btn.on('click', function () {
                var audio = new Audio(sound.uri);
                audio.play();
            });
            col.append(btn);
            row.append(col);
        });
        drum.append(row);
    }
}


