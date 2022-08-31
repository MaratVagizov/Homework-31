
let big_img_1 = document.querySelector('.big-img-1')
let big_img_2 = document.querySelector('.big-img-2')
let big_img_3 = document.querySelector('.big-img-3')
let big_img_4 = document.querySelector('.big-img-4')
let big_img_5 = document.querySelector('.big-img-5')

let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')

btn1.onclick = () => {
        big_img_1.classList.add('big-img-1')
        big_img_1.classList.remove('big-img-2')
        big_img_1.classList.remove('big-img-3')
        big_img_1.classList.remove('big-img-4')
        big_img_1.classList.remove('big-img-5')
}

btn2.onclick = () => {
        big_img_1.classList.add('big-img-2')
        big_img_1.classList.remove('big-img-1')
        big_img_1.classList.remove('big-img-3')
        big_img_1.classList.remove('big-img-4')
        big_img_1.classList.remove('big-img-5')
}

btn3.onclick = () => {
    big_img_1.classList.add('big-img-3')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-4')
    big_img_1.classList.remove('big-img-5')
}

btn4.onclick = () => {
    big_img_1.classList.add('big-img-4')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-3')
    big_img_1.classList.remove('big-img-5')
}

btn5.onclick = () => {
    big_img_1.classList.add('big-img-5')
    big_img_1.classList.remove('big-img-1')
    big_img_1.classList.remove('big-img-2')
    big_img_1.classList.remove('big-img-3')
    big_img_1.classList.remove('big-img-4')
}


let btn = document.querySelector('.header-bot-link')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let btn_close = document.querySelector('.img-close')

function openModal() {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(() => {
        modal.style.opacity = '1'
        modal_bg.style.opacity = '1'
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100)


}

btn.onclick = () => {
    openModal()
}

btn_close.onclick = () => {
    modal.style.display = 'none'
    modal_bg.style.display = 'none'
}

let open = document.querySelector('.openblock-1-txt')
let block = document.querySelector('.modal-openblock')

open.onclick = () => {
    // block.classList.remove('modal-openblock-1')

    if(block.classList.contains('modal-openblock-1')) {
        modal.style.height = '1000px'
        setTimeout(() => {
            block.classList.remove('modal-openblock-1')
        }, 650)
        // block.classList.remove('modal-openblock-1')
    }
    else {
        block.classList.add('modal-openblock-1')
        modal.style.height = '600px'
    }
}
