'use strict';

window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // tabs
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // timer

    let deadline = '2019-12-30',
        id = 'timer';

    function getTimeRemaining(endtime) {
        let delta = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((delta / 1000) % 60),
            minutes = Math.floor((delta / 1000 / 60) % 60),
            hours = Math.floor(delta / (1000 * 60 * 60));
        return {
            'total': delta,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTime(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateTime, 1000);

        function checkTwoDigits(value) {
            return (value < 10) ? ('0' + value) : value;
        }

        function updateTime() {
            let currentTime = getTimeRemaining(endtime);
            hours.textContent = currentTime.hours;
            minutes.textContent = checkTwoDigits(currentTime.minutes);
            seconds.textContent = checkTwoDigits(currentTime.seconds);

            if (currentTime.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }
    }

    setTime(id, deadline);
});


