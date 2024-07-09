window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var upperLineText = document.getElementById('upper-line-text');
    var nameContainer = document.getElementById('name-container').getElementsByTagName('span')[0];

    var scrollThreshold = 200;

    var upperLineTextTranslation = scrollPosition / 2;
    var nameContainerTranslation = -scrollPosition / 2;

    upperLineText.style.transform = 'translateX(' + upperLineTextTranslation + 'px)';
    nameContainer.style.transform = 'translateX(' + nameContainerTranslation + 'px)';

    if (scrollPosition > scrollThreshold) {
        upperLineText.classList.add('scroll-animation');
        nameContainer.classList.add('scroll-animation');
    } else {
        upperLineText.classList.remove('scroll-animation');
        nameContainer.classList.remove('scroll-animation');
    }
});


