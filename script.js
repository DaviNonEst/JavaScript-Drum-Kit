window.addEventListener('keydown', (event) => {
    const key = document.querySelector(`.key[data-key="${event.code}"]`) //Seleciona a .key que possui o atributo data-key igual ao event.code, que é a tecla clicada 
    const audio = document.querySelector(`.key[data-key="${event.code}"] audio`)

    if (!audio) return //Se não conseguir achar o audio, return

    key.classList.add('keydown')
    audio.currentTime = 0
    audio.play()
})

window.addEventListener('keyup', (event) => {
    const key = document.querySelector(`.key[data-key="${event.code}"]`)
    key.classList.remove('keydown')
})