const cards = document.querySelectorAll('.card')
cards.forEach(el=>{
    el.addEventListener('click',()=>{
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        el.className += " active";
        if (el.id ==='month'){
            document.querySelector('.button-continue').setAttribute("href","https://apple.com/")
        }
        if (el.id ==='year'){
            document.querySelector('.button-continue').setAttribute("href","https://google.com/")
        }
    })
})
