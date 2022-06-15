function solve() {
    let correctAnswers = 0;
    let answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let questions = document.getElementsByTagName('section');

    for (let i = 0; i < 3; i ++) {
       let buttons = Array.from(questions[i].getElementsByClassName('answer-wrap'));
       buttons.forEach(b => b.addEventListener('click', giveAnswer));

       function giveAnswer(ev) {
           if (answers.includes(ev.target.firstChild.textContent)) {
               correctAnswers ++;
           }

           questions[i].classList.add('hidden');
           if (i + 1 < 3) {
               questions[i + 1].classList.remove('hidden');
           } else {
               document.getElementById('results').style.display = "block";
           }

           let res = document.getElementsByTagName('ul')[3].firstElementChild.firstElementChild;
           if (correctAnswers === 3) {
               res.textContent = "You are recognized as top JavaScript fan!";
           } else {
               res.textContent = `You have ${correctAnswers} right answers`;
           }
       }
    }
}
