const buttons = document.querySelectorAll('.button')
// console.log(button) so basically ye noddelist hh all use kiya hh to foreach laga skte hh
const bodyy = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){
            bodyy.style.backgroundColor = 'grey'
        }        if(e.target.id=='white'){
            bodyy.style.backgroundColor = 'pink'
        }        if(e.target.id=='blue'){
            bodyy.style.backgroundColor = 'blue'
        }        if(e.target.id=='yellow'){
            bodyy.style.backgroundColor = 'yellow'
        }
    })
})