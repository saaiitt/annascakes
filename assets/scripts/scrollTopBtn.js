const scrollTopBtn = document.querySelector('#btn-scroll');

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}

function scrollTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}