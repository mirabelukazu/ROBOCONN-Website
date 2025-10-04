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
    scheduleTabContents[scheduleTabClick].classList.add("active");
    scheduleTeamTabBtns[scheduleTabClick].classList.add("active");
}

scheduleTeamTabBtns.forEach((scheduleTeamTabBtn, i) => {
    scheduleTeamTabBtn.addEventListener("click", () => {
        scheduleTabNav(i);
    });
});
/*Team modals, tabs and cards*/
/*Shrink the Height of the header on scroll*/