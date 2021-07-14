const animationBtn = document.querySelector('.button');
const svgContainer = document.getElementById('svg');
const confettiAnimation = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
});

animationBtn.addEventListener('click', () => {
    confettiAnimation.goToAndPlay(0,true);
})

  