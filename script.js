class SliderMn {
    constructor(obj) {
        slider = document.querySelector(obj.slider),
        track = slider.querySelector(obj.track),
        items = [...slider.querySelectorAll(obj.items)],
        btnPrev = document.querySelector(obj.btnPrev),
        btnNext = document.querySelector(obj.btnNext);

        if (window.innerWidth <= obj.media_1) {
            track.setAttribute('data-slidesToShow',obj.data_1)
        } if (window.innerWidth <= obj.media_2) {
            track.setAttribute('data-slidesToShow',obj.data_2)
        } if (window.innerWidth <= obj.media_3) {
            track.setAttribute('data-slidesToShow',obj.data_3)
        }
        position = 0
        slidesToShow = window.innerWidth >= media1 ? obj.slidesToShow : track.getAttribute('data-slidesToShow')
        slidesToScroll = obj.slidesToScroll 
        itemsCount = items.length
        gap = obj.gap

        itemWidth = Math.ceil((slider.clientWidth - gap * (slidesToShow - 1)) / slidesToShow);
        movePosition = (slidesToScroll * itemWidth) + (slidesToScroll * gap);

        items.forEach(element => {
            element.style = `min-width: ${itemWidth}px;`
        });

        checkBtn()

        btnPrev.addEventListener('click', () => {
            itemsLeft = Math.floor(Math.abs(position) / itemWidth)
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth + itemsLeft * gap
            setPosition()
        })

        btnNext.addEventListener('click', () => {
            itemsLeft = itemsCount - Math.floor((Math.abs(position) + slidesToShow * itemWidth - slidesToShow * gap) / itemWidth);
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth + itemsLeft * gap
            setPosition()
        })
    }

    setPosition() {
        track.style = `transform: translateX(${position}px)`
        checkBtn()
    }

    checkBtn() {
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
}

const section_3Slide = new SliderMn({
    slider: '.popularItem__slider',
    track: '.popularItem__line',
    items: '.slider__item',
    btnPrev: '.popularItem__button-prev',
    btnNext: '.popularItem__button-next',
    slidesToScroll: 1,
    slidesToShow: 4,
    media_1: 850,
    data_1: 3,
    media_2: 600,
    data_2: 2,
    media_3: 450,
    data_3: 1,
    gap: 32,
})
