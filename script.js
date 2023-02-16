function toggleMode(){
    const div = document.documentElement
    div.classList.toggle('spinning')

    var img = document.querySelector("#spin img")

    if(div.classList.contains('spinning')) {
        img.setAttribute('src', './assets/360.svg')
    } else {
        img.setAttribute('src', './assets/x.svg')
    }

    var img = document.querySelector("#sofa")

    if(div.classList.contains('spinning')) {
        img.setAttribute('src', './assets/sofa.png')
    } else {
        img.setAttribute('src', './assets/sofa.gif')
    }
}