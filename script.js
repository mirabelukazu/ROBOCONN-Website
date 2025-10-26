/*Schedule section tabs and tab contents*/
const scheduleTabs = document.querySelector(".schedule-tabs");
const scheduleTeamTabBtns = scheduleTabs.querySelectorAll(".tab-btn");
const scheduleTabContents = document.querySelectorAll(".schedule-tab-content");

var scheduleTabNav = function(scheduleTabClick){
    scheduleTabContents.forEach((scheduleTabContent) => {
        scheduleTabContent.style.display = "none";
        scheduleTabContent.classList.remove("active");   
    });

    scheduleTeamTabBtns.forEach((scheduleTeamTabBtn) => {
        scheduleTeamTabBtn.classList.remove("active");
    });

    scheduleTabContents[scheduleTabClick].style.display = "flex";

    setTimeout(() => {
        scheduleTabContents[scheduleTabClick].classList.add("active");
    }, 100);
    
    scheduleTeamTabBtns[scheduleTabClick].classList.add("active");
}

scheduleTeamTabBtns.forEach((scheduleTeamTabBtn, i) => {
    scheduleTeamTabBtn.addEventListener("click", () => {
        scheduleTabNav(i);
    });
});

/*Team modals, tabs and cards*/
//Filter team cards according to team tabs
document.addEventListener("DOMContentLoaded", () => {
    const teamTabs = document.querySelector(".team-tabs");
    const teamTabsBtns = teamTabs.querySelectorAll(".tab-btn");
    const cardwithModals = document.querySelectorAll(".team-container .card-with-modal");

    teamTabsBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardwithModals.forEach((cardwithModal) => {
                if(filter === "all" || cardwithModal.classList.contains(filter)){
                    cardwithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardwithModal.style.opacity = "1";
                        cardwithModal.style.transition = ".5s ease";
                    }, 1);
                }
                else{
                    cardwithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardwithModal.style.opacity = "0";
                        cardwithModal.style.transition = ".5s ease";
                    }, 1);
                }
            });
            //Add active class to the clicked tab btn
            teamTabsBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

//Open/Close Team modals
const teamCardsWithModals = document.querySelectorAll(".team-container .card-with-modal");

teamCardsWithModals.forEach((teamCardWithModal) => {
    const teamCard = teamCardWithModal.querySelector(".team-card");
    const teamBackdrop = teamCardWithModal.querySelector(".team-modal-backdrop");
    const teamModal = teamCardWithModal.querySelector(".team-modal");
    const modalCloseBtn = teamCardWithModal.querySelector(".modal-close-btn");

    teamCard.addEventListener("click", () => {
        teamBackdrop.style.display = "flex";

        setTimeout(() => {
            teamBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            teamModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => { 
        setTimeout(() => {
            teamBackdrop.style.display = "none";
        }, 500);

        setTimeout(() => {
            teamBackdrop.classList.remove("active");
            teamModal.classList.remove("active");
        }, 100);
    });
});
/*Apply Swiper */
var swiper = new Swiper(".robo-apply-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

/*Shrink the Height of the header on scroll*/
window.addEventListener("scroll", () => {
    const roboHeader = document.querySelector(".robo-header");

    roboHeader.classList.toggle("shrink", window.scrollY > 0);
});

/*Bottom Navigation Menu*/
//Each bottom navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const navMenuSections = document.querySelectorAll(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) => {
        let sectionHeight = navMenuSection.offsetHeight;
        let sectionTop = navMenuSection.offsetTop - 50;
        let id = navMenuSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        }else{
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    });
});

//Show bottom navigation menu 0n home (page load)
window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});

//Show/Hide bottom navigation menu on home (scroll)
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

    if(window.scrollY < 10){
        menuHideBtn.classList.remove("active");

        function scrollStopped(){
            bottomNav.classList.add("active");
        }
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }

    if(window.scrollY > 10){
        menuHideBtn.classList.add("active");

        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }
        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }
});

//Hide bottom navigation menu on click menu-hide-btn
menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

//Show bottom navigation menu on click menu-show-ntn
menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});


/*To-top-button with scroll indicator bar*/
window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector(".to-top-btn");

    toTopBtn.classList.toggle("active", window.scrollY > 0);

    //Scroll indicator bar
    const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");

    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height) * 100;

    scrollIndicatorBar.style.height = scrollValue + "%";
});

/*Customized cursor on mouse move*/
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
});

//Cursor effects on hover website elements
const cursorHoverlinks = document.querySelectorAll("body a, .theme-btn, robo-main-btn, .team-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .menu-show-btn, .menu-hide-btn");

cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseover", () => {
        cursorDot.classList.add("large");
        cursorCircle.style.display = "none";
    });
});

cursorHoverlinks.forEach((cursorHoverlink) => {
    cursorHoverlink.addEventListener("mouseout", () => {
        cursorDot.classList.remove("large");
        cursorCircle.style.display = "block";
    });
});

/*Website dark/light theme*/
//Change theme and save current theme n click the theme button
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    themeBtn.classList.toggle("active-sun-icon");
});
