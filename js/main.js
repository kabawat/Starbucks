let main = document.querySelector(".main");
let btn = document.querySelector(".btn");
let navbar = document.querySelector(".navbar");
let star = document.querySelector(".star");
let count = 1;
thum01.addEventListener("click", function() {
    count = 1;
    changeImg(count);
});
thum02.addEventListener("click", function() {
    count = 2;
    changeImg(count);
});
thum03.addEventListener("click", function() {
    count = 3;
    changeImg(count);
});

function changeImg(count) {
    main.classList = `main main_bg_0${count}`;
    btn.classList = `btn btn${count}`;
    navbar.classList = `navbar navbar${count}`;
    star.classList = `star star${count}`;
    intro_logo.src = `image/img${count}.png`;
}