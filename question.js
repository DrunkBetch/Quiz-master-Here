const body = document.querySelector("body");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const questionsConatiner = document.querySelector(".questions");
const questiontTrack = document.querySelector(".questions_track");
const markingSchemeQuestionMark = document.querySelector(".question_mark");
const markingSchemeBox = document.querySelector(".box_marking_scheme");
let score = 0;
let totalQuestionsClicked = 0;
// Options Hovering
function optionHover(bgColor) {
  return function (e) {
    e.target.closest(".option").style.backgroundColor = `${bgColor}`;
  };
}

// Adding Questions to HTML
const questionsArray = [
  {
    questionText: "What is HTML?",
    options: [
      "Hyper Text Markup Language",
      "HyperText Machine Language",
      "HyperText Marking Language",
      "HighText Marking Language",
    ],
    correct: "a",
  },

  {
    questionText: "JavaScript is a",
    options: [
      "Markup Language",
      "Programming Language",
      "Logic programming language",
      "None",
    ],
    correct: "b",
  },
  {
    questionText:
      "Which function is used to print something to the console in JavaScript",
    options: ["console.print()", "log()", "print()", "write()"],
    correct: "a",
  },
  {
    questionText:
      "Which loop is used for iterating over the properties of an object",
    options: ["for loop", "while loop", "do-while loop", "for...in loop"],
    correct: "d",
  },
  {
    questionText:
      "Which method is used to add a new element to the end of an array in JavaScript",
    options: ["push()", "pop()", "append()", "add to end()"],
    correct: "a",
  },
  {
    questionText: "What is an IIFE in JavaScript",
    options: [
      "Immediate Invocation Function Expression",
      "Inline If-Else",
      "Internal Iteration for Function Execution",
      " Integrated Input Function Execution",
    ],
    correct: "a",
  },

  {
    questionText:
      "Which of the following is not a valid data type in JavaScript?",
    options: ["Number", "String", "Boolean", "Objects"],
    correct: "d",
  },

  {
    questionText:
      "What is the correct syntax for declaring a variable in JavaScript?",
    options: ["var varName = value", "String", "Boolean", "Objects"],
    correct: "a",
  },

  {
    questionText: "What is the purpose of the alert() function in JavaScript?",
    options: [
      " To display a message to the user",
      "To read data from the user",
      "To perform calculations",
      "To control the flow of a program",
    ],
    correct: "a",
  },

  {
    questionText: "Which keyword is used to create a function in JavaScript?",
    options: ["var", "let", "const", "function"],
    correct: "d",
  },

  {
    questionText:
      "Which attribute is used to specify the semantic meaning of an HTML element?",
    options: ["id", "class", "role", "arial-label"],
    correct: "c",
  },

  {
    questionText:
      "Which property is used to specify the positioning of an element?",
    options: ["position", "top", "right", "left"],
    correct: "a",
  },

  {
    questionText:
      "Which method is used to add an event listener to an element?",
    options: [
      "addEventListener()",
      "attach event()",
      "addevent()",
      "createevent()",
    ],
    correct: "a",
  },

  {
    questionText: "Which method is used to get the current URL of the webpage?",
    options: [
      "location.href",
      "window.location.href",
      "document.location.href",
      "pageURL()",
    ],
    correct: "b",
  },

  {
    questionText: "What is the purpose of a CSS preprocessor?",
    options: [
      "To make CSS code more readable and maintainable.",
      "To add features to CSS that are not natively supported by the browser.",
      "To compile CSS code into a smaller and more optimized format.",
      "ALL OF ABOVE",
    ],
    correct: "d",
  },

  {
    questionText:
      "Which property is used to specify the border around an element?",
    options: ["margin", "padding.", "Border.", "Outline"],
    correct: "d",
  },

  {
    questionText: "Which method is used to stop the propagation of an event?",
    options: [
      "preventDefault()",
      "stopPropagation()",
      "CancelEvent()",
      "BlockEvent()",
    ],
    correct: "b",
  },

  {
    questionText:
      "Which property is used to create a border around an element?",
    options: ["border", "border-width", "border-color", "style"],
    correct: "a",
  },

  {
    questionText:
      "Which property is used to create a transition between different states of an element?",
    options: ["animation", "transition", "transformation", "None"],
    correct: "b",
  },

  {
    questionText:
      "Which property is used to create a cross-browser flexbox layout?",
    options: ["display: flex", "flex-direction", "flex-wrap", "flex-grow"],
    correct: "a",
  },
  {
    questionText: "What is the purpose of the @keyframes rule in CSS?",
    options: [
      " To define the animation properties for an elemen",
      " To create a responsive layout",
      " To specify the styles for different screen sizes",
      "To add a cross-browser flexbox layout",
    ],
    correct: "a",
  },
  {
    questionText: "Which property is used to create a responsive layout?",
    options: ["@media", "@import", "@keyframes", "@font-faces"],
    correct: "a",
  },

  {
    questionText:
      "Which property is used to specify the background color of an element?",
    options: [
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
    ],
    correct: "a",
  },
];
function randomQuestionsArray(allQuestions) {
  const arrQuestions = [];

  for (let i = 0; i < 10; i++) {
    const randomNum = Math.trunc(Math.random() * questionsArray.length);
    arrQuestions.push(allQuestions[randomNum]);
  }
  return arrQuestions;
}
randomQuestionsArray(questionsArray);
function generateQuestionMarkup(questions) {
  return questions.map((question, i) => {
    const questionMarkup = `
<figure class="question" data-clicked="false" data-correct="${
      question.correct
    }" data-no="${i + 1}">
  <h3 class="question_text">Q${i + 1}.${question.questionText}</h3>
  <ul class="options_list">
    <li class="option" data-option="a">${question.options[0]}</li>
    <li class="option" data-option="b">${question.options[1]}</li>
    <li class="option" data-option="c">${question.options[2]}</li>
    <li class="option" data-option="d">${question.options[3]}</li>
  </ul>
</figure>`;
    return questionMarkup;
  });
}
function renderQuestions(markup) {
  questionsConatiner.insertAdjacentHTML("afterend", markup);
}

const markup = generateQuestionMarkup(randomQuestionsArray(questionsArray));
renderQuestions(markup);
const options = document.querySelectorAll(".option");
const firstQuestion = document.querySelector(".question");
//Adding Event Listener
const mousenterEvent = optionHover.call(0, "var(--backgroundColor)");
options.forEach((op) => op.addEventListener("mouseover", mousenterEvent));
const mouseleaveEvent = optionHover.call(0, "#fff");
options.forEach((op) => op.addEventListener("mouseleave", mouseleaveEvent));

markingSchemeQuestionMark.addEventListener("mouseover", function () {
  markingSchemeBox.style.opacity = 1;
});

markingSchemeQuestionMark.addEventListener("mouseleave", function () {
  markingSchemeBox.style.opacity = 0;
});
const clickEventCallBack = function (op) {
  const fn = function (e) {
    const target = e.target.closest(".option");
    const targetQuestion = target.closest(".question");
    // console.log(targetQuestion.dataset.clicked);
    if (
      target.dataset.option === targetQuestion.dataset.correct &&
      targetQuestion.dataset.clicked === "false"
    ) {
      target.style.backgroundColor = "#03c03c";
      target.style.color = "#fff";
      targetQuestion.dataset.clicked = "true";
      // Question Panel
      const questionNo = targetQuestion.dataset.no;
      const questionTrackNumber = questiontTrack.querySelector(
        `[data-no="${questionNo}"]`
      );
      questionTrackNumber.style.backgroundColor = "#03c03c";
      questionTrackNumber.style.color = "#fff";
      score++;
      totalQuestionsClicked++;
    } else if (
      target.dataset.option !== targetQuestion.dataset.correct &&
      targetQuestion.dataset.clicked === "false"
    ) {
      target.style.backgroundColor = "#ff0800";
      target.style.color = "#fff";
      targetQuestion.dataset.clicked = "true";
      //Question Panel
      const questionNo = targetQuestion.dataset.no;

      const questionTrackNumber = questiontTrack.querySelector(
        `[data-no="${questionNo}"]`
      );
      questionTrackNumber.style.backgroundColor = "#ff0800";
      questionTrackNumber.style.color = "#fff";
      totalQuestionsClicked++;
    }
    if (totalQuestionsClicked === 10) {
      container.innerHTML = "";
      container.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="score">
        <p class="score-text">
          <span class="correct-score">${score}</span><span class="total-score">/10</span>
        </p>
      </div>`
      );
    }

    op.removeEventListener("mouseover", mousenterEvent);
    op.removeEventListener("mouseleave", mouseleaveEvent);
  };
  return fn;
};
options.forEach((op) => op.addEventListener("click", clickEventCallBack(op)));
