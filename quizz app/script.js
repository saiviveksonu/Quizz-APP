const quizdb = [{
    question: "Q1:What is the full form of html?",
    a: "hello to my world",
    b: "hey text markup launguage",
    c: "hypertext makeup launguage ",
    d: "hypertext markup launguage ",
    ans: "ans4"
}, {
    question: "Q2:What is the full form of css?",
    a: "cascading style sheets",
    b: "cascading style sheep",
    c: "cartton style sheets",
    d: "cascading super sheets",
    ans: "ans1"
},
{
    question: "Q3:What is the full form of http?",
    a: "hypertext transfer product",
    b: "hypertext test protocal",
    c: "hey tranfer protocal",
    d: "hypertext transfer protocal",
    ans: "ans4"
}, {
    question: "Q1:What is the full form of js?",
    a: "javascript",
    b: "javasuper",
    c: "justscript",
    d: "jordenshoes",
    ans: "ans1"
}];

const question = document.querySelector(".question");
const option1 = document.querySelector("#optiona1");
const option2 = document.querySelector("#optiona2");
const option3 = document.querySelector("#optiona3");
const option4 = document.querySelector("#optiona4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
 const showscore=document.querySelector('#showscore');
let currentquestion = 0;
let score=0;
const loadtext = () => {

    question.textContent = quizdb[currentquestion].question;
    // console.log(question);
    option1.textContent = quizdb[currentquestion].a;
    option2.textContent = quizdb[currentquestion].b;
    option3.textContent = quizdb[currentquestion].c;
    option4.textContent = quizdb[currentquestion].d;
}
loadtext();
const getcheckanswer = () => {
    let answer;
    answers.forEach((curranswer) => {
        if (curranswer.checked) {
            answer = curranswer.id;
            // console.log(answer);
        }
        
    })
    return answer;
}
const deselectall=()=>{
    answers.forEach((curranswer)=>{
curranswer.checked=false;
    })
}
submit.addEventListener('click', () => {
   const check= getcheckanswer();
   console.log(check);
   const def=quizdb[currentquestion].ans;
   if(check===def){
       score++;
       console.log(score);
   }
   
   currentquestion++;
   deselectall();
    if(currentquestion<quizdb.length){
    loadtext();
   }
   else{
      showscore.innerHTML=`<h3>you scored ${score}/${quizdb.length}</h3>
      <button class='btn' onclick='location.reload()'>play again</button>` ;
      showscore.classList.remove('scorearea');
   }
});
