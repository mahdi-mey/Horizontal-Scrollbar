const progressBar = document.querySelector('.page-progress')

window.addEventListener('scroll' , () => {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop
    
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    let scrolled = (scroll / height) * 100
    progressBar.style.width = `${scrolled}%`
})
