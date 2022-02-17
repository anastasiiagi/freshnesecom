let tabsContent = document.querySelectorAll('.tab__content');
let tabsControl = document.querySelectorAll('.tab__item');

tabsControl.forEach(elem => {
    elem.addEventListener('click', function() {
        showTabContent(elem.dataset.tabnumber);

        tabsControl.forEach(elem => {
            elem.classList.remove('tab__item-active')
        });

        this.classList.add('tab__item-active')
    });
});

function hideTabContent() {
    for (let i = 1; i < tabsContent.length; i++) {
        tabsContent[i].classList.add('tab-hidden');
    }
};

hideTabContent();

function showTabContent(tabnumber) {
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.add('tab-hidden');
    }
    tabsContent[tabnumber - 1].classList.remove("tab-hidden");

};


const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    slidesPerGroup: 1,
    spaceBetween: 32,
    slidesPerView: 2.8,
    centeredSlides: true, 
    freeMode: true,
    breakpoints: {
        800: {
            slidesPerGroup: 1,
            spaceBetween: 32,
            slidesPerView: 3,
            centeredSlides: true,
            freeMode: true,
        },
        600: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            centeredSlides: true,
            freeMode: true,
        },
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        }
    }
    // slidesPerView: 2.8,
    // slidesPerGroup: 1,
});

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 100,
    from = 0,
    to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  backgroundcolor: 'green',
    min: min,
    max: max,
    from: 20,
    to: 70,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
  from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});


