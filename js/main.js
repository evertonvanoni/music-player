const musics = [
    [
        title = '7 Years LoFi',
        artist = 'Lofi Fruits',
        song = 'audios/7years.mp3',
        img = 'images/7years.jpeg',
        duration = [
            minutos = 1,
            segundos = 38,
        ],
    ],
    [
        title = 'Steven Universe LoFi',
        artist = 'Lofi Fruits',
        song = 'audios/stevenuniverse.mp3',
        img = 'images/steven.jpg',
        duration = [
            minutos = 1,
            segundos = 38,
        ],
    ],
    [
        title = 'Cloud Shapes ',
        artist = 'Leavy',
        song = 'audios/cloud-shapes.mp3',
        img = 'images/cloudshapes.jpg',
        duration = [
            minutos = 1,
            segundos = 38,
        ],
    ],
    [
        title = 'Howling Silence',
        artist = 'Lofi Fruits',
        song = 'audios/howling-silence.mp3',
        img = 'images/howlingsilence.jpeg',
        duration = [
            minutos = 1,
            segundos = 38,
        ],
    ],
]
const audio = document.querySelector('.controls audio')
const infoh1 = document.querySelector('.infos h1')
const infoh2 = document.querySelector('.infos h2')
const image = document.querySelector('.image')
let c = 0;
Next()
function Next(){
    if (musics.length > c){ 
        c++
        infoh1.innerHTML = musics[c-1][0]
        infoh2.innerHTML = musics[c-1][1]
        audio.setAttribute('src', musics[c-1][2])
        image.innerHTML = `<img src="${musics[c-1][3]}" alt="${musics[c-1][0]}">`
    }
    else{
        if (c == musics.length){
          c = 0;
          Next()
        }
        else{
            alert('[ERROR]')
        }
    }
}
function Previous(){
    if (c > 1){ 
        c--
        infoh1.innerHTML = musics[c-1][0]
        infoh2.innerHTML = musics[c-1][1]
        audio.setAttribute('src', musics[c-1][2])
        image.innerHTML = `<img src="${musics[c-1][3]}" alt="${musics[c-1][0]}">`
    }
    else{
        if(c == 1){
            c = musics.length+1
            Previous()
          }
          else{
              alert('[ERROR]')
        }
    }
}