document.querySelector("#tab1-tab").addEventListener("click", function () {
    document.querySelector(".banner-area").style.background = "linear-gradient(90deg, #d4c7b4 37%, #200703 25%)";
    document.querySelector("#myTabs .active img").style.borderColor = "#200703";
});

document.querySelector("#tab2-tab").addEventListener("click", function () {
    document.querySelector(".banner-area").style.background = "linear-gradient(90deg, #d4c7b4 37%, #a55420 25%)";
    document.querySelector("#myTabs .active img").style.borderColor = "#a55420";
});

document.querySelector("#tab3-tab").addEventListener("click", function () {
    document.querySelector(".banner-area").style.background = "linear-gradient(90deg, #d4c7b4 37%, #274829 25%)";
    document.querySelector("#myTabs .active img").style.borderColor = "#274829";

});



(function ($) {
    "use strict";
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            mobile: true,
            live: true,
        });
        wow.init();
    }
})(jQuery);