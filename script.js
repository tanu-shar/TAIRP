$(document).ready(function() {
    const slider = $(".slider");
    const prevBtn = $("#prevBtn");
    const nextBtn = $("#nextBtn");
    const imageWidth = $(".slider img").width();

    let currentIndex = 0;

    prevBtn.click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            slider.css("transform", `translateX(-${currentIndex * imageWidth}px)`);
        }
    });

    nextBtn.click(function() {
        if (currentIndex < $(".slider img").length - 1) {
            currentIndex++;
            slider.css("transform", `translateX(-${currentIndex * imageWidth}px)`);
        }
    });
});

