let questions=[
    {
        question:" Q1.Which language is used for web dev?",
        options:["Python","Java","C++","Javascript"],
        answer:"Javascript"
    },
        {
        question:"Q2.What does HTML stand for?",
        options:["Hyper Text Markup Language","High Tech Modern Language","Home Tool Markup Language","Hyperlink Text Language"],
        answer:"Hyper Text Markup Language"
    },
        {
        question:"Q3.Which symbol is used for comments in JS?",
        options:["#","//","!--","**"],
        answer:"//"
    }

];
let currentIndex= 0;
let score = 0;

function loadQuestion(){
    let current= questions[currentIndex];
    document.getElementById('questionText').textContent=current.question;

    let container=document.getElementById('optionContainer');
    container.innerHTML="";

    for(let i=0; i<current.options.length;i++){
        let radio=document.createElement('input');
        radio.type='radio';
        radio.name='quiz';
        radio.value= current.options[i];

        let label=document.createElement('label');
        label.textContent=current .options[i];

        container.appendChild(radio);
         container.appendChild(label);
        container.appendChild(document.createElement('br'));
    }

}
loadQuestion();
function nextQuestion(){
    let selected=document.querySelector('input[name="quiz"]:checked');
    if(selected==null){
        alert("Please select an option!");
        return;
    }
    let current=questions[currentIndex];
    if(selected.value==current.answer){
        score =score + 1;
        document.getElementById('score').textContent=score;
    }

    currentIndex=currentIndex + 1;
    if(currentIndex<questions.length){
        loadQuestion();
    }
    else{
        document.getElementById('questionText').textContent="Quiz Over!"
               document.getElementById('optionContainer') .innerHTML="";
               document.querySelector('.btn').style.display="none";
    }
}


