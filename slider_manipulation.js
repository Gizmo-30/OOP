class SliderMn {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider),
            this.track = this.slider.querySelector(obj.track),
            this.items = [...this.slider.querySelectorAll(obj.items)],
            this.btnPrev = document.querySelector(obj.btnPrev),
            this.btnNext = document.querySelector(obj.btnNext);


        if (window.innerWidth <= obj.media_1) {
            this.track.setAttribute('data-slidesToShow', obj.data_1)
        } if (window.innerWidth <= obj.media_2) {
            this.track.setAttribute('data-slidesToShow', obj.data_2)
        } if (window.innerWidth <= obj.media_3) {
            this.track.setAttribute('data-slidesToShow', obj.data_3)
        }
        this.position = 0
        this.slidesToShow = window.innerWidth >= obj.media_1 ? obj.slidesToShow : this.track.getAttribute('data-slidesToShow')
        this.slidesToScroll = this.slidesToShow
        this.itemsCount = this.items.length
        this.gap = obj.gap

        this.itemWidth = Math.ceil((this.slider.clientWidth - this.gap * (this.slidesToShow - 1)) / this.slidesToShow);
        console.log(this.itemWidth);
        this.movePosition = (this.slidesToScroll * this.itemWidth) + (this.slidesToScroll * this.gap);

        this.items.forEach(element => {
            element.style = `min-width: ${this.itemWidth}px;`
        });

        this.checkBtn()

        this.btnPrev.addEventListener('click', () => {
            this.itemsLeft = Math.floor(Math.abs(this.position) / this.itemWidth)
            this.position += this.itemsLeft >= this.slidesToScroll ? this.movePosition : this.itemsLeft * this.itemWidth + this.itemsLeft * this.gap
            this.setPosition()
        })

        this.btnNext.addEventListener('click', () => {
            this.itemsLeft = this.itemsCount - Math.floor((Math.abs(this.position) + this.slidesToShow * this.itemWidth - this.slidesToShow * this.gap) / this.itemWidth);
            this.position -= this.itemsLeft >= this.slidesToScroll ? this.movePosition : this.itemsLeft * this.itemWidth + this.itemsLeft * this.gap
            this.setPosition()
        })
    }

    setPosition() {
        this.track.style = `transform: translateX(${this.position}px)`
        this.checkBtn()
    }

    checkBtn() {
        this.btnPrev.disabled = this.position === 0
        this.btnNext.disabled = this.position <= - (this.itemsCount - this.slidesToShow) * this.itemWidth

        if (this.position === 0) {
            this.btnPrev.classList.remove('active')
        } else {
            this.btnPrev.classList.add('active')
        }

        if (this.position <= - (this.itemsCount - this.slidesToShow) * this.itemWidth) {
            this.btnNext.classList.remove('active')
        } else {
            this.btnNext.classList.add('active')
        }
    }
}

const section_4Slide = new SliderMn({
    slider: '.section-4__slider',
    track: '.section-4__sliderTrack',
    items: '.slider-4__item',
    btnPrev: '.section-4__btn-prev',
    btnNext: '.section-4__btn-next',
    slidesToShow: 4,
    media_1: 1100,
    data_1: 3,
    media_2: 800,
    data_2: 2,
    media_3: 550,
    data_3: 1,
    gap: 32,
})



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const slider = document.querySelector('.popularItem__slider'),
    track = document.querySelector('.slider__line'),
    item = slider.querySelectorAll('.slider__item'),
    btnPrev = document.querySelector('.slider__button-prev'),
    btnNext = document.querySelector('.slider__button-next');
    


let position = 0;
// const slidesToShow = window.innerWidth <= 1024 ? 1 : 4;
const slidesToShow = 1;
const slidesToScroll = 1;
const itemsCount = item.length;
const gap = 32
const itemWidth = Math.ceil((slider.clientWidth - gap * (slidesToShow - 1)) / slidesToShow);
// const itemWidth = slider.clientWidth / slidesToShow;
// const movePosition = slidesToScroll * itemWidth;
const movePosition = (slidesToScroll * itemWidth) + (slidesToScroll * gap);
// const movePosition = slidesToScroll * itemWidth;
// console.log(movePosition);

item.forEach(element => {
    element.style = `min-width: ${itemWidth}px;`
});

btnPrev.addEventListener('click', () => {  
    const itemsLeft = Math.floor((Math.abs(position) / itemWidth))
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth + itemsLeft * gap
    setPosition()
})

btnNext.addEventListener('click', () => {
    // const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth + (slidesToShow * gap)) / itemWidth;
    // const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth + slidesToShow * gap) / itemWidth;
    const itemsLeft = itemsCount - Math.floor((Math.abs(position) + slidesToShow * itemWidth - slidesToShow * gap) / itemWidth);

    // console.log(Math.abs(itemsCount));
    // console.log(Math.abs(position));
    // console.log(Math.abs(slidesToShow));
    // console.log(Math.abs(itemWidth));
    // console.log(Math.abs((slidesToShow * gap)));
    // console.log(Math.abs((slidesToShow * itemWidth)));
    // console.log(itemsCount - (Math.abs(position) + slidesToShow * itemWidth + (slidesToShow * gap)));
    // console.log(itemsLeft);

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth + itemsLeft * gap
    // position -= movePosition 
    setPosition()
})

function setPosition() {
    track.style = `transform: translateX(${position}px)`
    checkBtn()
}

function checkBtn() {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth
    
    if (position === 0) {
        btnPrev.classList.remove('active') 
    } else {
        btnPrev.classList.add('active')
    }
    
    if (position <= - (itemsCount - slidesToShow) * itemWidth) {
        btnNext.classList.remove('active') 
    } else {
        btnNext.classList.add('active') 
    }
}

checkBtn()
