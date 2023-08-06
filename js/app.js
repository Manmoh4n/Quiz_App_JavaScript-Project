const questions = [
    {
    'que':'Which of the following is markup langauge',
    'a':'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'a'
},

{
    'que':'Which of the following is used for styling',
    'a':'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'b'
},

{
    'que':'Which of the following is used in backend',
    'a':'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'d'
},
{
    'que':'Which of the following is used for both backend and frontend',
    'a':'HTML',
    'b':'CSS',
    'c':'JS',
    'd':'PHP',
    'correct':'c'
},
]

let index=0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = ()=>{
    if(index===total ){
        return endQuiz()

    }
    reset();
    const data = questions[index]
    quesBox.innerHTML = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    
    optionInputs[1].nextElementSibling.innerText = data.b;
    
    optionInputs[2].nextElementSibling.innerText = data.c;
    
    optionInputs[3].nextElementSibling.innerText = data.d ;
}

const submitQuiz = () =>{

    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++;

    }else{
        wrong++;

    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )

}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
        <h3>Your Score is  </h3><br/>
        <h2> ${right} / ${total} are correct </h2>
    `
}

loadQuestion();
