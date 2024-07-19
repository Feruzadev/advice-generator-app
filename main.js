const sectionTitleAdvice = document.querySelector('.section-title__advice');
const sectionText = document.querySelector('.section-text');
const newAdviceButton = document.querySelector('#new-advice-button');

const url = "https://api.adviceslip.com/advice";

async function fetchAdviceData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderAdvice(data);
    } catch (error) {
        console.error("Xatolik", error);
    }
}

function renderAdvice(data) {
    if (data && data.slip) {
        const advice = data.slip;
        sectionTitleAdvice.textContent = `ADVICE #${advice.id}`;
        sectionText.textContent = advice.advice;
    } else {
        console.error("Xatolik", data);
    }
}

newAdviceButton.addEventListener('click', fetchAdviceData);


fetchAdviceData();



