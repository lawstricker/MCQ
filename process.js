var questions = [
    {   'question': 'Which of the following words best describes the way Lilly feels about living in her new town?',
        'options': ['A. Skeptical, meaning questioning or showing doubt', 'B. Apprehensive, meaning anxious or worried', 'C. Overjoyed, meaning extremely happy', 'D. Content, meaning satisfied with what one is or has'],
        'answer': '2'
    },
    {
        'question': 'This passage is mainly about',
        'options': ['A. Network Lilly’s favorite season', 'B. Lilly and the four seasons', 'C. Lilly’s favorite activities during winter', 'D. Lillys favorite Halloween costumes'],
        'answer': '1'
    },
    {
        'question': 'What is Lilly’s favorite thing about her new town',
        'options': ['A. Her school', 'B. Going to the pool', 'C. The food', 'D. The seasons'],
        'answer': '3'
    },
    {
        'question': 'In paragraph 2 the author writes, "She also wears a scarf around her neck.” What is the best way to rewrite this sentence while keeping its original meaning?',
        'options': ['A. In addition, she wears a scarf around her neck.', 'B. However, she wears a scarf around her neck.', 'C. Nevertheless, she wears a scarf around her neck.', 'D. As a result, she wears a scarf around her neck.'],
        'answer': '0'
    },

    {
        'question': 'Which of the following best describes the structure of this passage?',
        'options': ['A. The author talks about Lilys new town, and then talks about how the seasons are changing.', 'B. The author introduces Lilly, and then describes her in relation to the four seasons.', 'C. The author introduces Lilly, and then explains why autumn is her favorite season.', 'D. The author discusses the four seasons, and then describes which one Lilly likes best.'],
        'answer': '1'
    },
    
    {
        'question': 'How is Lilly’s new town different from her old town? ',
        'options': ['A. I only', 'B. I and II only', 'C. II and III only', 'D. I, II, and III'],
        'answer': '0'
    },

    {
        'question': 'Based on information in paragraph 5, which of the following costumes is Lilly most likely to wear next year? ',
        'options': ['A. A princess costume', 'B. A fairy costume', 'C. A ghost costume', 'D. A bird costume'],
        'answer': '3'
    },

    {
        'question': 'Based on information in the passage, we can understand that, which season has two names?',
        'options': ['A. Spring', 'B. Summer', 'C. Fall', 'D. Winter'],
        'answer': '2'
    },

    {
        'question': 'Lilliys favourite season is ......................................................',
        'options': ['A. Spring', 'B. Summer', 'C. Autumn', 'D. Autumn'],
        'answer': '2'
    },

    {
        'question': 'In order to keep herself warm Lily had to put on ........................',
        'options': ['A. Scarf', 'B. Glove', 'C. Jacket', 'D. Scarf and glove'],
        'answer': '3'
    }

    
];


var contentQuest = document.getElementById('content-quest')

let counter = 1
questions.forEach((question, i) => {
    let div = document.createElement('div');
    let ul = document.createElement('ul')
    div.innerHTML = `<h3>${counter}. ${question.question}</h3>`

    question.options.forEach((option, j) => {
        let li = document.createElement('li')
        li.innerHTML = `<input type="radio" class="answers" name="ques${i}" value="${j}"> ${option}`
        ul.append(li)
    })
    

    contentQuest.append(div)
    div.append(ul)

    counter++
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(timerInterval)
            alert('Time Elapsed! Your result has been generated!')
            compute()
        }
    }, 1000);
}


const totalQuestions = questions.length
const maxScore = questions.length * 5

function compute() {
    let selected = []
    let answers = document.getElementsByClassName('answers')
    for (let i = 0; i < answers.length; i++) {
        const element = answers[i];
        if (element.checked) {
            let selOpt = {
                name: element.name,
                value: element.value
            }
            selected.push(selOpt)
        }
    }

    let checkList = []
    questions.forEach((question, i) => {
        let opt = {
            name: `ques${i}`,
            answer: question.answer
        }
        checkList.push(opt)
    })


    let score = 0
    let correct = 0
    checkList.forEach(chk => {
        selected.forEach(sel => {
            if (chk.name == sel.name && chk.answer == sel.value) {
                correct++
                score += 5
            }
        })
    })

    let percentScored = (correct / totalQuestions) * 100
    let remark = ''
    if (percentScored < 50) {
        remark = `<h1>You scored: ${percentScored}% Failed</h1>`
    } else if (percentScored >= 50) {
        remark = `<h1>You scored: ${percentScored}% Passed</h1>`
    }

    let answerHolder = document.getElementById('answer-holder')
    answerHolder.innerHTML = remark
    answerHolder.style.display = 'block'
}

var fiveMinutes = 60 * 20
var display = document.querySelector('#time');
startTimer(fiveMinutes, display);

