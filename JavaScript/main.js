let header = document.querySelector("header");
let menuBar = document.querySelector(".menu-bar");
let links = document.querySelector(".links");

header.style.zIndex = "100000"
menuBar.onclick = function (){
    if (links.style.visibility === "hidden") {
        links.style.visibility = "visible";
        links.style.opacity = "1";
        links.style.transition = "opacity 0.3s ease";
        header.style.height = "400px";
        header.style.transition = "height 0.3s ease";
        links.style.top = "150px";   
    } else {
        links.style.opacity = "0";
        header.style.height = "160px";

        setTimeout(() => {
            links.style.visibility = "hidden";
        }, 300); 
    }
}

let scrollTop = document.querySelector(".scroll-top")

window.onscroll = function () {
    let secHeader = document.querySelector(".sec-head"); 
    if (window.scrollY >= 200) {
        secHeader.classList.add("fixed-header");
        links.style.top = "50px";
        scrollTop.style.display = "block"   
    } else {
        secHeader.classList.remove("fixed-header");
        links.style.top = "150px"; 
        scrollTop.style.display = "none"   
    }
    menuBar.onclick = function () {
        if (links.style.visibility === "hidden") {
            links.style.visibility = "visible";
            links.style.opacity = "1";
            links.style.transition = "opacity 0.3s ease";
            header.style.height = "400px";
            header.style.transition = "height 0.3s ease";
            links.style.top = "150px";   
        } else {
            links.style.opacity = "0";
            header.style.height = "160px";
    
            setTimeout(() => {
                links.style.visibility = "hidden";
            }, 300);
        }
    };
    
    if (window.scrollY >= stats.offsetTop - window.innerHeight + 200) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

// -------------------------------------
let getProBtn = document.querySelector(".but-get");
let getProWindow = document.querySelector(".get-pro");


getProBtn.onclick = function () {
    if (getProWindow.classList.contains("show")) {
        getProWindow.classList.remove("show");
        getProWindow.style.transition = "0.4s"
    } else {
        getProWindow.classList.add("show");
    }
};
// ------------------------------
let nums = document.querySelectorAll(".text .nums");
let stats = document.querySelector(".stats");
let started = false;

function startCount(el) {
    let goal = el.dataset.goal;
    let count = 0;
    let increment = Math.ceil(goal / 200); 

    let counter = setInterval(() => {
        count += increment; 
        el.textContent = count; 
        if (count >= goal) {
            el.textContent = goal;
            clearInterval(counter);
        }
    }, 1000 / goal);
}
// ---------------------------------------------------------- vid col
let onButton = document.getElementById("on-button");
let vidBox = document.querySelector(".vid-col");
let vidClose = document.querySelector(".close");

onButton.onclick = function () {
    vidBox.style.display = "block";
    // إلغاء التمرير
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

vidClose.onclick = function () {
    vidBox.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflow = "auto"; 
}

document.onkeyup = function(e) {
    if (e.key === "Escape") {
        vidBox.style.display = "none";
        document.body.style.overflow = "auto";
        document.body.style.overflowX = "hidden";
        document.documentElement.style.overflow = "auto"; 
    }
}
// ------------------------------------------------ landing slider + image slider
const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 130,
    autoplay: {
        delay: 3000,
        disableOnInteraction:true,
    },
    navigation: {
        nextEl: '.slide-right',
        prevEl: '.slide-left',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperGallery = new Swiper(".gallary-img", {
    effect: "slide",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    grabCursor: true, 
    slidesPerView: 5,  
    spaceBetween: 10, 
    breakpoints: {
        290:{
            slidesPerView: 2,  
            spaceBetween: 10,  
        },
        576: {
            slidesPerView: 2,   
            spaceBetween: 10, 
        },
        768: {
            slidesPerView: 3, 
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,  
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});
// -----------------------------------------
let selector = document.querySelector(".selector")
let selectorTwo = document.querySelector(".selector-two")
let spanCurrent = document.getElementById("current")
let spanCurrentTwo = document.getElementById("current-two")
let list = document.querySelector(".list")
let listTwo = document.querySelector(".list-two")
let lis = document.querySelectorAll(".list li")
let lisTwo = document.querySelectorAll(".list-two li")

lis.forEach((li) => {
    li.addEventListener("click", function () {
        // تحديث النص داخل spanCurrent بالنص الداخلي للعنصر li
        spanCurrent.textContent = li.textContent;
        // إغلاق القائمة بعد التحديد
        list.classList.remove("show-up");
        // إزالة الصنف "selected" من العناصر الأخرى
        lis.forEach((item) => item.classList.remove("selected"));
        // إضافة الصنف "selected" إلى العنصر الحالي
        li.classList.add("selected");
    });
});
// تحديث محتوى spanCurrent عند اختيار عنصر
lisTwo.forEach((li) => {
    li.addEventListener("click", function () {
        // تحديث النص داخل spanCurrent بالنص الداخلي للعنصر li
        spanCurrentTwo.textContent = li.textContent;
        // إغلاق القائمة بعد التحديد
        listTwo.classList.remove("show-up");
        // إزالة الصنف "selected" من العناصر الأخرى
        lisTwo.forEach((item) => item.classList.remove("selected"));
        // إضافة الصنف "selected" إلى العنصر الحالي
        li.classList.add("selected");
    });
});

document.addEventListener("click", function (e) {
    if (!selectorTwo.contains(e.target)) {
        listTwo.classList.remove("show-up");
    }
});

selector.onclick = function(){
    if(list.classList.contains("show-up")){
        list.classList.remove("show-up")
    }
    else{
        list.classList.add("show-up")
    }
}
selectorTwo.onclick = function(){
    if(listTwo.classList.contains("show-up")){
        listTwo.classList.remove("show-up")
    }
    else{
        listTwo.classList.add("show-up")
    }
}
