window.onscroll = function() {
    var rotateDegree = window.pageYOffset / 10; // Verlangsamt die Rotationsrate
    var images = document.getElementsByClassName('rotatingImage');
    for (var i = 0; i < images.length; i++) {
        images[i].style.transform = 'rotate(' + rotateDegree + 'deg)';
    }
};
