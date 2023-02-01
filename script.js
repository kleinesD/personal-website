$(document).ready(function () {
    /* WELCOME PAGE */
    /* Animation titles */
    $('.animated-title').each(function () {
        let elArr = $(this).find('span');
        for (let i = 0; i < elArr.length; i++) {
            setTimeout(() => { $(elArr[i]).addClass('animate__animated').addClass('animate__slideInDown').css('opacity', '1') }, i * 50);
        }
    });

    /* Typing welcome text */
    new TypeIt('#welcome-info-text-1', {
        speed: 35,
        startDelay: 0
    })
    .type('&lt; <span>location</span> &gt; Los Angeles, Ca', { delay: 0 })
    .delete(15)
    .pause(100)
    .type('Krasnodar, Russia &lt; /<span>location</span> &gt;', { delay: 0 })
    .break()
    .type('&lt; <span>email</span> &gt; dennykleines@gmail.com &lt; /<span>email</span> &gt;', { delay: 0 })
    .break()
    .type('&lt; <span>phone</span> &gt; +7 918 325 9991 &lt; /<span>phone</span> &gt;', { delay: 0 })
    .break()
    .type('&lt; <span>skype</span> &gt; _kleinesd &lt; /<span>skype</span> &gt;', { delay: 0 })
    .break()
    .type('/* JOB GETS DONE HERE */', { delay: 0 })
    .go()
});