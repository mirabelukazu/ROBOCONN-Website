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
/*Shrink the Height of the header on scroll*/