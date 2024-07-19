const sectionTitleAdvice = document.querySelector('.section-title__advice')
const sectionText = document.querySelector('.section-text')
const herfIamge = document.querySelector('herf-iamge')

const url = "https://api.adviceslip.com/advice"

async function fetchAdviceData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)

        AdviceData = data
        renderAdvice(AdviceData)

    } catch (error) {
        console.log("Xatolik", error)
    }

}

function renderAdvice(data) {
    console.log(data)

  

}

fetchAdviceData() 



