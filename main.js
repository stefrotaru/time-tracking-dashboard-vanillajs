// Buttons
const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");
// Dynamic Content
const workHrs = document.getElementById("workHrs");
const workPrevHrs = document.getElementById("workPrevHrs");
const playHrs = document.getElementById("playHrs");
const playPrevHrs = document.getElementById("playPrevHrs");
const studyHrs = document.getElementById("studyHrs");
const studyPrevHrs = document.getElementById("studyPrevHrs");
const exerciseHrs = document.getElementById("exerciseHrs");
const exercisePrevHrs = document.getElementById("exercisePrevHrs");
const socialHrs = document.getElementById("socialHrs");
const socialPrevHrs = document.getElementById("socialPrevHrs");
const selfcareHrs = document.getElementById("selfcareHrs");
const selfcarePrevHrs = document.getElementById("selfcarePrevHrs");
// Json data
let jsonData = {};
fetch('./data.json').then(response => {
    return response.json();
}).then(data => {
    jsonData = data;
}).catch(err => {
    console.log(err)
});

// event listeners
dailyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // adds "on" class on current button
    dailyBtn.classList.add('on');
    // removes "on" class from other buttons
    weeklyBtn.classList.remove('on');
    monthlyBtn.classList.remove('on');

    workHrs.textContent = jsonData[0].timeframes.daily.current + 'hrs';
    workPrevHrs.textContent = jsonData[0].timeframes.daily.previous + 'hrs';

    playHrs.textContent = jsonData[1].timeframes.daily.current + 'hrs';
    playPrevHrs.textContent = jsonData[1].timeframes.daily.previous + 'hrs';
    
    studyHrs.textContent = jsonData[2].timeframes.daily.current + 'hrs';
    studyPrevHrs.textContent = jsonData[2].timeframes.daily.previous + 'hrs';

    exerciseHrs.textContent = jsonData[3].timeframes.daily.current + 'hrs';
    exercisePrevHrs.textContent = jsonData[3].timeframes.daily.previous + 'hrs';

    socialHrs.textContent = jsonData[4].timeframes.daily.current + 'hrs';
    socialPrevHrs.textContent = jsonData[4].timeframes.daily.previous + 'hrs';

    selfcareHrs.textContent = jsonData[5].timeframes.daily.current + 'hrs';
    selfcarePrevHrs.textContent = jsonData[5].timeframes.daily.previous + 'hrs';
});

weeklyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // adds "on" class on current button
    weeklyBtn.classList.add('on');
    // removes "on" class from other buttons
    dailyBtn.classList.remove('on');
    monthlyBtn.classList.remove('on');

    workHrs.textContent = jsonData[0].timeframes.weekly.current + 'hrs';
    workPrevHrs.textContent = jsonData[0].timeframes.weekly.previous + 'hrs';

    playHrs.textContent = jsonData[1].timeframes.weekly.current + 'hrs';
    playPrevHrs.textContent = jsonData[1].timeframes.weekly.previous + 'hrs';
    
    studyHrs.textContent = jsonData[2].timeframes.weekly.current + 'hrs';
    studyPrevHrs.textContent = jsonData[2].timeframes.weekly.previous + 'hrs';

    exerciseHrs.textContent = jsonData[3].timeframes.weekly.current + 'hrs';
    exercisePrevHrs.textContent = jsonData[3].timeframes.weekly.previous + 'hrs';

    socialHrs.textContent = jsonData[4].timeframes.weekly.current + 'hrs';
    socialPrevHrs.textContent = jsonData[4].timeframes.weekly.previous + 'hrs';

    selfcareHrs.textContent = jsonData[5].timeframes.weekly.current + 'hrs';
    selfcarePrevHrs.textContent = jsonData[5].timeframes.weekly.previous + 'hrs';
});

monthlyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // adds "on" class on current button
    monthlyBtn.classList.add('on');
    // removes "on" class from other buttons
    dailyBtn.classList.remove('on');
    weeklyBtn.classList.remove('on');

    workHrs.textContent = jsonData[0].timeframes.monthly.current + 'hrs';
    workPrevHrs.textContent = jsonData[0].timeframes.monthly.previous + 'hrs';

    playHrs.textContent = jsonData[1].timeframes.monthly.current + 'hrs';
    playPrevHrs.textContent = jsonData[1].timeframes.monthly.previous + 'hrs';
    
    studyHrs.textContent = jsonData[2].timeframes.monthly.current + 'hrs';
    studyPrevHrs.textContent = jsonData[2].timeframes.monthly.previous + 'hrs';

    exerciseHrs.textContent = jsonData[3].timeframes.monthly.current + 'hrs';
    exercisePrevHrs.textContent = jsonData[3].timeframes.monthly.previous + 'hrs';

    socialHrs.textContent = jsonData[4].timeframes.monthly.current + 'hrs';
    socialPrevHrs.textContent = jsonData[4].timeframes.monthly.previous + 'hrs';

    selfcareHrs.textContent = jsonData[5].timeframes.monthly.current + 'hrs';
    selfcarePrevHrs.textContent = jsonData[5].timeframes.monthly.previous + 'hrs';
})

