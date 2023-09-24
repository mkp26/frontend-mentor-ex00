let btn = document.querySelector('#btn')
let success = document.querySelector('#success')
let mail = document.querySelector('#mail')
let errmsg = document.querySelector('#error-label')
let dismissmsg = document.querySelector('#dismiss')

if(btn){
    btn.addEventListener('click', mailCheck) 
}
if(dismissmsg){
    dismissmsg.addEventListener('click', () => {
        window.location.reload()
    })
}

function mailCheck(e){
    e.preventDefault()
    let input = document.querySelector('#mail-input')
    let len = input.value.length
    let lastChar = input.value.charAt(len - 1)
    let page = document.querySelector('main')
    if (input.value.includes('@') && lastChar !== '@' && !input.value.includes(' ')){
        page.style.display = 'none'
        success.style.display = 'flex'
        mail.innerHTML = input.value
    }
    else {
        input.style.backgroundColor = '#ffe8e6'
        input.style.color = '#c67b76'
        input.style.border = '1px solid #c67b76'
        errmsg.style.display = 'inline'
    }
}