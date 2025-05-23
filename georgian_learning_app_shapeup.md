# Georgian Learning App - Shape Up Documentation v.1.0

## 1. Problem Definition

It's challenging for individuals, especially those with busy schedules ("normies"), to find dedicated time to learn the Georgian language. We need a simple, accessible way to facilitate learning a few words regularly.

## 2. Appetite

**3 hours.** This is a strict timebox for the initial Minimum Viable Product (MVP).

## 3. Goal

Help users learn at least **10 new Georgian words per week** through a simple, interactive web application.

## 4. Core Solution (Breadboarding)

We will build a small, focused web application consisting of a few static HTML pages, styled with basic CSS, and interactive elements powered by vanilla JavaScript. The application will guide the user through learning a set of words and then quizzing them.

**Page Flow:**

1.  **Home Page (`index.html`):**
    *   Welcomes the user.
    *   A single clickable box/button: "Learn Today's Words".
    *   Clicking this navigates to the "Learn Words" page.

2.  **Learn Words Page (`learn.html`):**
    *   Displays a list of 10 Georgian words alongside their English translations (this week's words).
    *   A button: "Start Quiz".
    *   Clicking this navigates to the "Quiz" page.

3.  **Quiz Page (`quiz.html`):**
    *   Presents one Georgian word at a time from the list of 10.
    *   Offers 3-4 multiple-choice English translations for the displayed Georgian word.
    *   User selects an answer.
    *   **Feedback:**
        *   **Correct Answer:** Displays "Congratulations!" or similar. Provides an option/button to proceed to the "Next Question".
        *   **Incorrect Answer:** Displays "Incorrect. The correct answer is [correct_translation]". Provides an option/button to go "Back to Learning" (`learn.html`) and an option/button for "Next Question".
    *   Tracks the user's score.
    *   After 10 questions, it displays the final score.

4.  **Results (Integrated into `quiz.html` after the 10th question):**
    *   Displays the final score (e.g., "You scored 7/10!").
    *   A message: "Well done! Come back next week to learn more words."

## 5. Key Functionality (Step-by-Step for Implementation)

This plan assumes all HTML, CSS, and JavaScript will be vanilla (no frameworks or libraries beyond what the browser provides).

### 5.1. Project Setup

*   Create a project folder (e.g., `georgian_learner`).
*   Inside, create:
    *   `index.html` (Home Page)
    *   `learn.html` (Learn Words Page)
    *   `quiz.html` (Quiz Page)
    *   `style.css` (For all styling)
    *   `script.js` (For all JavaScript logic, or embed JS in HTML files initially)

### 5.2. Word Data (JavaScript)

In your `script.js` (or within `<script>` tags in `learn.html` and `quiz.html`), define the list of 10 words for the week. This can be an array of objects:

```javascript
const weeklyWords = [
    { georgian: "გამარჯობა", english: "Hello" },
    { georgian: "მადლობა", english: "Thank you" },
    { georgian: "კი", english: "Yes" },
    { georgian: "არა", english: "No" },
    { georgian: "ბოდიში", english: "Sorry" },
    { georgian: "წყალი", english: "Water" },
    { georgian: "პური", english: "Bread" },
    { georgian: "კარგი", english: "Good" },
    { georgian: "ნახვამდის", english: "Goodbye" },
    { georgian: "მიყვარხარ", english: "I love you" } // Example word
];
```

### 5.3. Home Page (`index.html`)

*   **HTML Structure:**
    *   Basic HTML boilerplate.
    *   Link to `style.css`.
    *   A `<h1>` for the title (e.g., "Learn Georgian!").
    *   A `<div>` or `<button>` with an ID (e.g., `id="learnButton"`) and text "Learn Today's Words".
*   **JavaScript (in `script.js` or `<script>` tag):**
    *   Add an event listener to `learnButton`.
    *   On click, navigate to `learn.html` using `window.location.href = 'learn.html';`.

### 5.4. Learn Words Page (`learn.html`)

*   **HTML Structure:**
    *   Basic HTML boilerplate.
    *   Link to `style.css`.
    *   A `<h1>` for the title (e.g., "Today's 10 Words").
    *   A `<div>` (e.g., `id="wordListContainer"`) where words will be displayed.
    *   A `<button>` (e.g., `id="startQuizButton"`) with text "Start Quiz".
*   **JavaScript (in `script.js` or `<script>` tag):**
    *   Function to display words:
        *   Get `wordListContainer`.
        *   Loop through `weeklyWords`.
        *   For each word object, create HTML elements (e.g., `<p>Georgian: [word.georgian] - English: [word.english]</p>`) and append them to `wordListContainer`.
    *   Call this function when the page loads.
    *   Add an event listener to `startQuizButton`.
    *   On click, navigate to `quiz.html` (`window.location.href = 'quiz.html';`).

### 5.5. Quiz Page (`quiz.html`)

This is the most complex part.

*   **HTML Structure:**
    *   Basic HTML boilerplate.
    *   Link to `style.css`.
    *   A `<h1>` for the title (e.g., "Quiz Time!").
    *   A `<div>` (e.g., `id="georgianWordDisplay"`) to show the current Georgian word.
    *   A `<div>` (e.g., `id="optionsContainer"`) to hold the multiple-choice answer buttons.
    *   A `<div>` (e.g., `id="feedbackDisplay"`) to show if the answer was correct/incorrect.
    *   A `<div>` (e.g., `id="scoreDisplay"`) to show the current score (e.g., "Score: 0/10").
    *   A `<button>` (e.g., `id="nextQuestionButton"`) initially hidden or disabled, text "Next Question".
    *   A `<button>` (e.g., `id="backToLearnButton"`) initially hidden, text "Back to Learning".
    *   A `<div>` (e.g., `id="finalResultDisplay"`) initially hidden, for the final score and message.
*   **JavaScript (in `script.js` or `<script>` tag):**
    *   **State Variables:**
        *   `currentQuestionIndex = 0`
        *   `score = 0`
        *   `quizWords = [...weeklyWords]` (Consider shuffling `quizWords` for variety if time permits: `quizWords.sort(() => 0.5 - Math.random());`)
    *   **DOM Element References:** Get all the necessary divs and buttons from HTML.
    *   **`displayQuestion()` Function:**
        *   If `currentQuestionIndex >= quizWords.length`, call `showFinalResults()` and return.
        *   Get the current word: `const currentWord = quizWords[currentQuestionIndex];`
        *   Display `currentWord.georgian` in `georgianWordDisplay`.
        *   Clear `optionsContainer` and `feedbackDisplay`.
        *   **Generate Options:**
            *   Create an array `options = [currentWord.english]`.
            *   Select 2-3 other *incorrect* English words from `weeklyWords` (ensure they are not the `currentWord.english`). Add them to `options`.
            *   Shuffle the `options` array.
            *   For each option in the shuffled array, create a `<button>`, set its text, add an event listener to it for `handleAnswer()`, and append it to `optionsContainer`.
        *   Update `scoreDisplay`: `Score: ${score}/${quizWords.length}`.
        *   Hide `nextQuestionButton` and `backToLearnButton`.
    *   **`handleAnswer(selectedEnglishWord)` Function (called by option button clicks):**
        *   Disable all option buttons to prevent multiple clicks.
        *   `const correctAnswer = quizWords[currentQuestionIndex].english;`
        *   If `selectedEnglishWord === correctAnswer`:
            *   `score++`
            *   `feedbackDisplay.textContent = "Congratulations! Correct!";`
        *   Else:
            *   `feedbackDisplay.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;`
            *   Show `backToLearnButton` (`backToLearnButton.onclick = () => window.location.href = 'learn.html';`).
        *   Show `nextQuestionButton`.
        *   Update `scoreDisplay`.
    *   **`nextQuestionButton` Event Listener:**
        *   `currentQuestionIndex++`
        *   Call `displayQuestion()`.
    *   **`showFinalResults()` Function:**
        *   Hide `georgianWordDisplay`, `optionsContainer`, `feedbackDisplay`, `nextQuestionButton`, `backToLearnButton`.
        *   `finalResultDisplay.innerHTML = `<h2>Your Final Score: ${score}/${quizWords.length}</h2><p>Well done! Come back next week to learn more words.</p>`;`
        *   Show `finalResultDisplay`.
    *   **Initial Call:** Call `displayQuestion()` when the page loads.

### 5.6. Styling (`style.css`)

*   Apply basic, clean styling to make the application usable and readable.
*   Center content, style buttons, ensure good contrast.
*   Example selectors:
    *   `body { font-family: sans-serif; margin: 20px; background-color: #f0f0f0; }`
    *   `.container { max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; }`
    *   `button { padding: 10px 15px; margin: 5px; cursor: pointer; }`
    *   `#optionsContainer button { display: block; width: 100%; margin-bottom: 10px; }`

## 6. No-Gos (Out of Scope for this 3-hour iteration)

To stay within the 3-hour appetite, the following are explicitly out of scope:

*   User accounts or login.
*   Saving progress across sessions or devices.
*   Dynamic loading of new word lists (words are hardcoded for this iteration).
*   Complex animations or sophisticated UI design.
*   Spaced repetition algorithms or adaptive learning.
*   Backend database or API integration.
*   Support for multiple languages (UI is English, learning Georgian).
*   Error handling beyond basic UI feedback.

## 7. Deliverables

Within the 3-hour appetite, the junior developer should aim to produce:

1.  `index.html`: The home page.
2.  `learn.html`: The page for learning words.
3.  `quiz.html`: The page for the quiz.
4.  `style.css`: A single CSS file for basic styling of all pages.
5.  JavaScript code (either embedded in HTML files or in a single `script.js` linked by all HTML files) to implement the described functionality.

This plan provides a clear path to a functional MVP. The focus is on simplicity and achieving the core loop of learn -> quiz -> results.