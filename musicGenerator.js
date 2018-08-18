$(document).ready(function () {

    var soundSet = musicKit.map(item => item);
    window.addEventListener('keypress', function (e) {
        var code = e.charCode;
        var kc = String.fromCharCode(e.keyCode);
        for (var i = 0; i < soundSet.length; i++) {
            if (code == soundSet[i].keyCode) {
                let audio = document.getElementById(`${soundSet[i].name}`);
                audio.currentTime = 0;
                audio.play();

                // if (audio.duration > 0 && !audio.paused) {
                //     audio.pause();
                //     audio.currentTime = 0;                                        
                //     //Its playing...do your job

                // } else {                
                //     //Not playing...maybe paused, stopped or never played.                    

                //     audio.play();
                // }                              
                break;
            }
        }
    });
    generateMusicPad(musicKit);
});

var musicFrame = $('#musicFrame');

function generateMusicPad(music) {
    while (music.length > 0) {
        let arr = music.splice(0, 4);
        let row = $('<div class="row"></div>');
        arr.forEach((sound) => {
            let col = $('<div class="col-md-3"></div>');
            let btn = $(`
            <button class="music-item" id="music-${sound.name}">${sound.name} (${String.fromCharCode(sound.keyCode)})
                <div class="progress"></div>
            </button>
            `);
            let audioEle = $(`<audio id="${sound.name}" src="${sound.uri}"></audio>`);
            btn.on('click', function () {
                let audio = document.getElementById(`${sound.name}`);
                audio.duration = 0;
                audio.play();
            });

            audioEle.on('timeupdate', function (e) {
                $(`#music-${sound.name} .progress`).css('width', (this.currentTime / this.duration)*100 + '%');                

            });
            col.append(audioEle);
            col.append(btn);
            row.append(col);
        });
        musicFrame.append(row);
    }
}


