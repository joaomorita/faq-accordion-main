let btn = document.querySelectorAll('.plus-btn')
let minusBtn = document.querySelectorAll('.minus-btn')
let answer = document.querySelectorAll('.faq-answer')


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(e){
        btn[i].style.display = 'none'
        minusBtn[i].style.display = 'block'
        answer[i].style.display = 'block'

    })
}

for (let i = 0; i < minusBtn.length; i++){
    minusBtn[i].addEventListener('click', function(e){
        minusBtn[i].style.display = 'none'
        btn[i].style.display = 'block'
        answer[i].style.display = 'none'
    })
}





