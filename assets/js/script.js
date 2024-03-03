document.addEventListener("DOMContentLoaded", function () {
    var accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(function (item) {
        var header = item.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    let btnScroll = document.querySelector('.scrollToTop');
    btnScroll.addEventListener('click', function() {
        scrollToTop();
    });

    let contacts = document.querySelector(".contacts");
    let contactsInfo = document.querySelectorAll(".contact-info-wrapper > .text > img");
    contacts.addEventListener('click', function() {
        let popup = document.querySelector('.popup-wrapper');
        popup.style.display = "block";
    });

    for (let i = 0; i < contactsInfo.length; i++) {
        contactsInfo[i].addEventListener('click', function() {
            let popup = document.querySelector('.popup-wrapper');
            popup.style.display = "block";
        });
    }

    let fon = document.querySelector(".fon");
    fon.addEventListener('click', function() {
        let popup = document.querySelector('.popup-wrapper');
        popup.style.display = "none";
    });


    const scrollToTopBtn = document.querySelector('.scroller');
    window.addEventListener('scroll', function () {
        const isAtEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        scrollToTopBtn.style.display = isAtEnd ? 'block' : 'none';
    });


    let seconds = 0;
    let minutes = 0;
    const timerElement = document.querySelector('.timeForOnline');
    function updateTimer() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        timerElement.textContent = `На сайте ${minutes} м ${seconds} с`;
    }
    setInterval(updateTimer, 1000);

    const workInfoElements = document.querySelectorAll('.work-info');
    workInfoElements.forEach(function (workInfo) {
        workInfo.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });
    });

    let coordMouse = 0;
    let isScroll = false;
    let swiperSlide = document.querySelectorAll(".swiper-slide");
    let swiperWrapper = document.querySelector(".swiper-wrapper");

    swiperWrapper.addEventListener('mousedown', function(event) {
        event.preventDefault();
        coordMouse = event.clientX;
        isScroll = true;
    });

    document.addEventListener('mouseup', function() {
        isScroll = false;
    });

    swiperWrapper.addEventListener('mouseout', function() {
        // isScroll = false;
    });

    swiperWrapper.addEventListener('mousemove', function(event) {
        if (isScroll) {
            let marginLeft = swiperSlide[0].style.marginLeft || "0px";
            let marginLeftValue = parseInt(marginLeft.replace("px", ""), 10);
            let movement = coordMouse - event.clientX;
            let direction = movement > 0 ? -1 : 1;
            if (marginLeftValue + Math.abs(movement) * -direction * -0.03 < -0.1) {
            swiperSlide[0].style.marginLeft = marginLeftValue + Math.abs(movement) * -direction * -0.03 + "px";
            console.log(swiperSlide[0].style.marginLeft);
            }
        }
    });
});