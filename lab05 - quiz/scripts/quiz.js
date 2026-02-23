console.log('questions', questions)
let current = 0; // Index of the current question

const scoreBoard = {
    correct: 0, // Number of questions answered correctly
    incorrect: 0, // Number of questions answered incorrectly
}

// ----------- DO NOT MODIFY ANYTHING ABOVE THIS LINE

// Use get a reference to the element that is the parent of all the <button> elements
// Example:
// const btnContainer = document...

// TODO
const btnContainer = answers; // this isn't typically advisable

// Show the first question and update all display text
showQuestion();
updateScoreDisplays();


// TODO
// We need an event handler (or "listener") for when the answer buttons are clicked.
// Rather than (a) making such a function for each button or (b) registering the same function 4 times (once for each button),
// Let's rely on event bubbling 🫧 (see 9.3.4) and instead register a single function on the parent of the buttons.
// When clicked, it should first determine which button was the target (if any!), and should then call the answer function with the appropriate choice.
// Example:
// btnContainer.addEventListener("click", function(ev) {
//  console.log('ev', ev)
//  console.log('ev.target', ev.target)
//  // get out of this if something other than a button was clicked
//  const answerClicked = ... // something that results in "A"
//     answer(answerClicked);
// });

btnContainer.addEventListener("click", function (ev) {
    console.log('ev', ev);
    console.log('ev.target', ev.target);
    // get out of this if something other than a button was clicked
    // console.log(ev.target.type)
    if (ev.target.tagName !== 'BUTTON') return;
    const clickedBtn = ev.target
    console.log(clickedBtn.tagName)

    // now I need to know which button was clicked...
    console.debug(clickedBtn.dataset.answerChoice);
    const whichBtn = clickedBtn.dataset.answerChoice;
    answer(whichBtn);
});

// TODO
// This function should change the question text and button texts based on the current question
// Each button's text should have the format "A: answer text", "B: answer text", etc.
function showQuestion() {
    // get a reference to the existing element in the page that is expected to contain question text
    const question = document.getElementById('question');
    
    // try to figure out which question is "current"
    const currentQuestion = questions[current];
    console.info('currentQuestion', currentQuestion);
    
    // get the text of the current question
    const currentQuestionText = currentQuestion.question;
    question.textContent = currentQuestionText;

    // TODO: now I need to set the answer choices 
    // get all the answer buttons
    const btns = document.querySelectorAll('#answers button');
    
    // loop over the answer buttons
    for (let btn of btns) {
        // get the text that should go in the button
        // from my earlier log, it looks like currentQuestion
        // has a responses property
        console.log('currentQuestion.responses', currentQuestion.responses);
        // which response do I need right now?
        // i need the one that matches the btn i'm trying to populate
        console.log('btn  identity', btn.dataset.answerChoice);
        btn.textContent = currentQuestion.responses[btn.dataset.answerChoice].text;
    }
}


// TODO
// The function should take in a string representing the selected choice ("A", "B", etc.)
// It should:
// 1. Check if the choice is correct and update the score accordingly
//    * Hint: Don't forget that you can access properties using square brackets: responses["A"]
//      (This lets you provide an expression to use as the "key," which could be a variable or literal)
// 2. Update the score display (by calling updateScoreDisplays())
// 3. Move to the next question (don't forget to show it!)
// 4. If there are no more questions, call endGame()
function answer(choice) {
    //  what is the correct choice for the current question?
    const currentQuestion = questions[current];
    let correctChoice = 'A';
    for (let choiceVal in currentQuestion.responses) {
        console.log('choiceVal', choiceVal)
        const isCorrect = currentQuestion.responses[choiceVal].correct;
        if (isCorrect) {
            correctChoice = choiceVal;
        }
    }

    // if choice is incorrect, exit
    if (choice !== correctChoice) return;

    // choice is correct for this question.

    // TODO (still)
    // 2. Update the score display (by calling updateScoreDisplays())
    // 3. Move to the next question (don't forget to show it!)
    // 4. If there are no more questions, call endGame()

}


// This function should change the text in the right/wrong displays based on the current counts
function updateScoreDisplays() {
    // TODO
    // Hint: Use .querySelector() -- returns the first match
    //       OR .getElementsByClassName() -- returns a collection of matches

}


// This function should hide the quiz, show the win message, and update the final score percentage
// (How to hide/show elements: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)
// percentify() is provided below in case you'd like to use it.
function endGame() {
    // TODO
    // Hint: Use .querySelector() -- there's a few ways you can update the text for percentage

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options
function percentify(fl) {
    return Number(fl).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 1 }); //use default locale
}