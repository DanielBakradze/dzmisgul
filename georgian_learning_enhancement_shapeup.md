# Georgian Learning App - Enhanced Learning Cycle v1.0

## 1. Problem Definition

The current MVP of the Georgian Learning App presents a fixed set of 10 words per session. To improve learning effectiveness and engagement, we need to implement a more dynamic, multi-day learning cycle. This cycle will introduce new words, repeat words the user struggled with, and provide weekly statistics, as per the provided learning flowchart. This enhancement aims to create a more robust spaced repetition and review system within a single user session.

## 2. Appetite

**Medium (Estimated 6-8 hours for a junior developer).** This is an enhancement to the existing MVP. The focus is on implementing the core logic for the new learning cycle within a single session (no browser persistence initially).

## 3. Goal

Implement a multi-day learning cycle that:
*   Presents 10 random words on Day 1 of a new cycle.
*   On subsequent days, mixes new words with words the user answered incorrectly.
*   Follows a specific 8-day cycle structure for word presentation and review.
*   Provides statistics at the end of an 8-day cycle.
*   All state management will be in-memory for the duration of a single user session.

## 4. Learning Flow and Memory Scheme (Based on Figma Design)

This section outlines the visual and logical flow of a single learning session, which forms the basis for the user's memory retention strategy.

1.  **Cycle Initiation:**
    *   The user starts a new learning session ("Beginning of the cycle").
    *   The application selects 10 new, unlearned words from the total word pool.

2.  **Learning Phase:**
    *   The user is presented with these 10 words, including their transcriptions and translations, allowing for initial memorization.
    *   *(Future Scope)*: The application saves this set of 10 words to the device's local storage to ensure session persistence.

3.  **Quiz Phase Initiation:**
    *   The user presses a "Start" button to begin the interactive quiz.

4.  **Interactive Quiz Loop (for each of the 10 words):**
    *   The application randomly selects one word from the current 10-word set.
    *   It then randomly chooses one of three quiz formats:
        *   **Standard Quiz:** Georgian word shown, user selects from multiple English options.
        *   **Text-Field Quiz:** Georgian word shown, user types the English translation.
        *   **Reversed Quiz:** English word shown, user selects from multiple Georgian options.
    *   The user submits their answer.

5.  **Feedback and Progression:**
    *   **Correct Answer:** The user receives positive feedback ("Correct, you can get the next one.") and moves to the next word.
    *   **Incorrect Answer:** The user receives corrective feedback ("Not correct, lets see get the word now.") and is shown the correct answer before proceeding.
    *   The application internally marks the word as "learned" for that session and notes the quiz type that led to the correct answer. This data is crucial for tracking which learning methods are most effective for the user.

6.  **Cycle Completion:**
    *   After quizzing all 10 words, the user is presented with a summary. The logic for what happens next (e.g., advancing to a new day with repeated words) is detailed in the milestones below.

---

## 5. Core Solution (Breadboarding for Enhanced Cycle)

We will modify the existing React component structure and state management (`App.tsx`, `src/types/app.ts`) to accommodate the new learning cycle.

**Key State Variables (to be added/modified in `src/types/app.ts` and managed in `App.tsx`):**

*   `currentCycleDay`: number (1-8, tracks the current day in the 8-day cycle).
*   `wordsForCurrentDay`: `GeorgianWord[]` (the 10 words to be learned/quizzed for the active day).
*   `wordsToLearnThisCycle`: `GeorgianWord[]` (all unique words introduced so far in the current cycle).
*   `incorrectlyAnsweredThisCycle`: `GeorgianWord[]` (words answered incorrectly during the current cycle, to be repeated).
*   `masteredThisCycle`: `GeorgianWord[]` (words answered correctly and considered "learned" within this cycle, for stats).
*   `availableNewWords`: `GeorgianWord[]` (a pool of words from `allWords` that haven't been introduced in the current cycle yet).

**Key Functions (to be implemented in `App.tsx`):**

*   `startNewLearningCycle()`:
    *   Resets `currentCycleDay` to 1.
    *   Clears `wordsToLearnThisCycle`, `incorrectlyAnsweredThisCycle`, `masteredThisCycle`.
    *   Initializes `availableNewWords` (e.g., by shuffling `allWords` from `src/data/words.ts`).
    *   Calls `prepareWordsForDay(1)`.
*   `prepareWordsForDay(dayNumber)`:
    *   **Day 1:**
        *   Selects 10 random words from `availableNewWords`.
        *   Sets these as `wordsForCurrentDay`.
        *   Adds them to `wordsToLearnThisCycle`.
        *   Removes them from `availableNewWords`.
    *   **Day 2 (Example: if 7 correct, 3 wrong from Day 1):**
        *   Take the 3 `incorrectlyAnsweredThisCycle` words from Day 1.
        *   Select 7 new random words from `availableNewWords`.
        *   Combine these (3 repeated + 7 new) to form `wordsForCurrentDay`.
        *   Add the 7 new words to `wordsToLearnThisCycle`.
        *   Remove new words from `availableNewWords`.
    *   **Day 3-7:**
        *   The words from the previous day (`wordsForCurrentDay`) are re-used for learning/quizzing.
    *   **Day 8 (Statistics):**
        *   No new words. The app should navigate to a statistics view.
*   `processQuizResults(answeredWords: Array<{word: GeorgianWord, correct: boolean}>)`:
    *   Updates `incorrectlyAnsweredThisCycle`: adds words answered incorrectly, ensuring no duplicates.
    *   Updates `masteredThisCycle`: adds words answered correctly, ensuring no duplicates.
    *   Potentially removes words from `incorrectlyAnsweredThisCycle` if they are now answered correctly.
*   `advanceToNextDay()`:
    *   Increments `currentCycleDay`.
    *   If `currentCycleDay` > 8, it could either loop back to `startNewLearningCycle()` or wait for user action.
    *   Calls `prepareWordsForDay(currentCycleDay)`.
    *   Navigates to the 'learn' view (or 'results' view if Day 8).

**Component Flow Modifications:**

*   **Home View:** Button to "Start Learning Cycle" (calls `startNewLearningCycle` and navigates to 'learn').
*   **Learn View:** Displays words from `wordsForCurrentDay`. Button "Start Quiz" navigates to 'quiz'.
*   **Quiz View:** Uses `wordsForCurrentDay`. After quiz, calls `processQuizResults` and then `advanceToNextDay`. If `currentCycleDay` becomes 8 (after advancing), navigate to 'results'. Otherwise, navigate to 'learn' for the next day's words.
*   **Results View:** Displays the score for the most recently completed quiz.
*   **Cycle Stats View (End of Cycle - Day 8):** Displays statistics: `wordsToLearnThisCycle` (all words encountered) and `incorrectlyAnsweredThisCycle` (words the user ultimately struggled with in the cycle). Button to "Start New Cycle".

## 6. Key Functionality (Step-by-Step Implementation)

This plan assumes modifications to the existing React + TypeScript + Vite + shadcn/ui project.

### Milestone 0: UI/UX Prototyping (Learning Space Design)

1.  **Objective:** Translate the abstract flow from the "Learning Flow and Memory Scheme" into concrete UI components and views.
2.  **Tasks:**
    *   Design a clear, intuitive layout for the "Learn View" where users see the 10 words before the quiz.
    *   Create mockups for the three different quiz types (Standard, Text-Field, Reversed) to ensure a consistent user experience.
    *   Design the feedback modals/views for both correct and incorrect answers.
    *   Wireframe the navigation flow between the Learn View, the different Quiz Views, and the end-of-cycle summary.
3.  **Deliverable:** A set of simple wireframes or a clickable prototype (using a tool like Figma or just component placeholders in the code) that validates the user journey for a single 10-word cycle. This milestone ensures the technical implementation has a clear visual guide.

### Milestone 1: Foundational State and Day 1 Logic

1.  **Update `src/types/app.ts`:**
    *   Update the core data structures to track mastery for different quiz types.
        ```typescript
        export interface GeorgianWord {
          id: number;
          georgian: string;
          english: string;
          transcription?: string;
        }

        export type AppView = 'home' | 'learn' | 'quiz' | 'results' | 'cycle_stats';

        // Defines the mastery status of a word across different quiz types.
        export interface WordMastery {
          standard: boolean; // Corresponds to standard multiple-choice quiz
          textField: boolean; // Corresponds to text input quiz
          reversed: boolean; // Corresponds to reversed (English-to-Georgian) quiz
        }

        // Represents a word within the context of a learning cycle, including its mastery status.
        export interface CycleWord extends GeorgianWord {
          mastery: WordMastery;
        }

        export interface LearningCycleState {
          currentCycleDay: number;
          wordsForCurrentDay: CycleWord[];
          wordsToLearnThisCycle: CycleWord[];
          incorrectlyAnsweredLastQuiz: CycleWord[];
          wordsToRepeatNextDay: CycleWord[];
          masteredWordsThisCycle: CycleWord[]; // Words answered correctly at least once in the cycle
          availableNewWords: GeorgianWord[]; // Words not yet introduced in the cycle
        }
        ```
    *   **Note on Quiz Types:** While the data structure supports three quiz types, Milestone 1 will focus on implementing only the **standard quiz**. The functionality to select and process different quiz types will be addressed in a subsequent milestone.

2.  **Update `src/data/words.ts`:**
    *   Ensure `allWords` is comprehensive. The existing `dailyWords` export might become obsolete or repurposed. For now, we'll primarily use `allWords`.

3.  **Update `src/App.tsx` - State Initialization and Core Logic (Part 1):**
    *   Import necessary types and `allWords`.
    *   Initialize the new `learningCycleState` using `useState`.
    *   Implement `shuffleArray` utility function (e.g., Fisher-Yates).
    *   Implement `startNewLearningCycle()`:
        *   Sets `currentCycleDay` to 1.
        *   Resets `wordsToLearnThisCycle`, `incorrectlyAnsweredLastQuiz`, `wordsToRepeatNextDay`, `masteredWordsThisCycle`.
        *   Shuffles a copy of `allWords` and sets it to `availableNewWords`.
        *   Calls `prepareWordsForDay(1)`.
        *   Sets `currentView` to 'learn'.
    *   Implement `prepareWordsForDay(day)`:
        *   **Initial Day 1 logic:**
            *   Take 10 words from the start of `availableNewWords`.
            *   Set them to `learningCycleState.wordsForCurrentDay`.
            *   Add them to `learningCycleState.wordsToLearnThisCycle`.
            *   Update `learningCycleState.availableNewWords` by removing the selected 10.
    *   Pass `learningCycleState` and relevant functions down to child components.

4.  **Modify `src/components/HomeView.tsx`:**
    *   Change button text to "Start Learning Cycle".
    *   `onClick` should call the new `startNewLearningCycle` function passed from `App.tsx` (which will also handle navigation).

5.  **Modify `src/components/LearnView.tsx`:**
    *   Receive `wordsForCurrentDay` from `App.tsx`.
    *   Display these words.
    *   The "Start Quiz" button should navigate to the 'quiz' view. (Quiz processing will advance the day later).

6.  **Modify `src/components/QuizView.tsx`:**
    *   Receive `wordsForCurrentDay` for the quiz.
    *   After the quiz, it will call a function to process results. For this milestone, it can simply navigate back to the home screen.

7.  **Testing Milestone 1:**
    *   Clicking "Start Learning Cycle" on Home screen should:
        *   Transition to Learn View.
        *   Learn View should display 10 random words from `allWords`.
        *   Each time a new cycle is started, a *different* set of 10 random words should appear.
    *   Quiz View should load with these 10 words.

### Milestone 2: Quiz Results Processing & Incorrect Word Tracking

1.  **Update `src/App.tsx` - Quiz Processing Logic:**
    *   Implement `processQuizResults(answeredWords: Array<{word: GeorgianWord, correct: boolean}>)`:
        *   Iterate through `answeredWords`.
        *   If a word is incorrect, add it to `learningCycleState.incorrectlyAnsweredLastQuiz` (ensure no duplicates within this list for the current quiz).
        *   If a word is correct, add it to `learningCycleState.masteredWordsThisCycle` (ensure no duplicates).
        *   (Consider: If a word was previously in `wordsToRepeatNextDay` but is now answered correctly, should it be removed from `wordsToRepeatNextDay`? For now, let's keep `wordsToRepeatNextDay` populated strictly by the *last quiz's* incorrect answers that need to be part of the *next day's* set).
    *   Modify `advanceToNextDay()`:
        *   This function will now be called *after* `processQuizResults`.
        *   It should set `learningCycleState.wordsToRepeatNextDay` based on the content of `learningCycleState.incorrectlyAnsweredLastQuiz` from the quiz just completed.
        *   Clear `learningCycleState.incorrectlyAnsweredLastQuiz` to prepare for the next quiz.
        *   Increment `learningCycleState.currentCycleDay`.
        *   If `currentCycleDay` > 8 (for now, let's say > 2 for testing this milestone), navigate to a temporary "End of Test Cycle" message or back to 'home'. Otherwise, call `prepareWordsForDay(learningCycleState.currentCycleDay)` and navigate to 'learn'.

2.  **Update `src/components/QuizView.tsx`:**
    *   After the quiz is completed (all 10 words are answered):
        *   Collect the results: an array of objects like `{word: GeorgianWord, correct: boolean}`.
        *   Call `processQuizResults` (passed from `App.tsx`) with these results.
        *   Call `advanceToNextDay` (passed from `App.tsx`). This function will handle navigation.

3.  **Testing Milestone 2:**
    *   Complete a Day 1 quiz. Intentionally get some words wrong.
    *   Verify that `App.tsx`'s state for `incorrectlyAnsweredLastQuiz` (and subsequently `wordsToRepeatNextDay`) correctly reflects the words answered incorrectly.
    *   Verify `masteredWordsThisCycle` is updated.
    *   Verify the app transitions correctly (e.g., to Learn View for Day 2, or a placeholder if Day 2 logic isn't built yet).

### Milestone 3: Day 2 Logic (New + Repeated Words)

1.  **Update `src/App.tsx` - `prepareWordsForDay` for Day 2:**
    *   Modify `prepareWordsForDay(day)`:
        *   **Add Day 2 logic (and similar for Day 3-7 if they follow the "X new + Y repeat" pattern):**
            *   Get words from `learningCycleState.wordsToRepeatNextDay` (these are the ones marked from the previous day's quiz).
            *   Let `numToRepeat = wordsToRepeatNextDay.length`.
            *   Let `numNewWords = 10 - numToRepeat`.
            *   Select `numNewWords` from `learningCycleState.availableNewWords`.
            *   Combine `wordsToRepeatNextDay` and these new words. Shuffle them to mix. This is the new `wordsForCurrentDay`.
            *   Add the new words to `wordsToLearnThisCycle`.
            *   Update `availableNewWords`.
            *   Clear `wordsToRepeatNextDay` as they've now been scheduled.

2.  **Testing Milestone 3:**
    *   Start a new cycle (Day 1). Get (e.g.) 3 words wrong in the quiz.
    *   The app should advance to Day 2 Learn View.
    *   The Learn View for Day 2 should display 10 words: the 3 words you got wrong on Day 1, plus 7 new random words. The order should be mixed.
    *   `wordsToLearnThisCycle` should now contain the initial 10 from Day 1 plus the 7 new ones from Day 2.

### Milestone 4: Day 3-7 Logic (Repeat Previous Day's Set)

1.  **Update `src/App.tsx` - `prepareWordsForDay` for Day 3-7:**
    *   Modify `prepareWordsForDay(day)`:
        *   Add logic for `currentCycleDay` 3 through 7:
            *   The `wordsForCurrentDay` should be *the same set of 10 words that were presented on the immediately preceding day*.
            *   This means after a Day 2 quiz, `processQuizResults` will still identify incorrect words and set them in `wordsToRepeatNextDay`.
            *   However, for preparing Day 3's words, `prepareWordsForDay` will *not* fetch new words. It will simply reuse Day 2's `wordsForCurrentDay`.
            *   The flowchart states "Same logic as before" for Day 3-7. This implies the *quiz and feedback mechanism* is the same, but the set of words being practiced is fixed from Day 2's set (which included new + repeats) for this period.
            *   *Clarification based on flowchart visual:* The flowchart shows "Second day: 7 new words, Repeat the wrong 3" and then "3-7 day: Same logic as before". This implies the words chosen on Day 2 become the set for Day 3-7. Any words gotten wrong on Day 2, 3, 4, 5, 6 are still tracked in `incorrectlyAnsweredLastQuiz` and potentially `masteredWordsThisCycle` for end-of-cycle stats, but they don't change the 10 words being *presented* for Day 3-7.

2.  **Testing Milestone 4:**
    *   Complete Day 1 (10 new), get some wrong.
    *   Complete Day 2 (new + repeats from Day 1), get some wrong/right.
    *   Verify that Day 3 Learn View shows the exact same 10 words as Day 2.
    *   Verify this continues for Day 4 through Day 7.
    *   Throughout Days 2-7, `incorrectlyAnsweredLastQuiz` should still update after each quiz.

### Milestone 5: Day 8 Statistics & Cycle Reset

1.  **Create `src/components/CycleStatsView.tsx`:**
    *   This new component is dedicated to displaying end-of-cycle statistics.
    *   **Props:**
        *   `wordsLearnedInCycle: GeorgianWord[]`: All unique words presented during the cycle.
        *   `wordsStruggledWithInCycle: GeorgianWord[]`: Words the user answered incorrectly in the final (Day 7) quiz.
        *   `onStartNewCycle: () => void`: A function to be called by the "Start New Cycle" button.
    *   **Layout:**
        *   A clear title, e.g., "Cycle Complete!".
        *   A section listing all words encountered during the cycle (`wordsLearnedInCycle`).
        *   A section highlighting the words the user struggled with most recently (`wordsStruggledWithInCycle`).
        *   A prominent "Start New Cycle" button.

2.  **Update `src/App.tsx` for Day 8 and View Rendering:**
    *   **Modify `advanceToNextDay()`:**
        *   When `currentCycleDay` is incremented to 8, the function should set `currentView` to `'cycle_stats'` instead of calling `prepareWordsForDay(8)`.
    *   **Update View Rendering Logic:**
        *   In the main render function of `App.tsx`, add a condition to render the new `CycleStatsView` component when `currentView === 'cycle_stats'`.
        *   Pass the required props to `CycleStatsView`: `learningCycleState.wordsToLearnThisCycle` (as `wordsLearnedInCycle`), the final `learningCycleState.incorrectlyAnsweredLastQuiz` (as `wordsStruggledWithInCycle`), and the `startNewLearningCycle` function (`onStartNewCycle`).

4.  **Testing Milestone 5:**
    *   Complete a full 7-day cycle.
    *   After the Day 7 quiz, verify the app navigates to `CycleStatsView`.
    *   Verify the statistics displayed are accurate (all words encountered, and words incorrect on the Day 7 quiz).
    *   Clicking "Start New Cycle" should reset the state and take the user to Day 1 Learn View with 10 new random words.

### (Future Enhancement) Milestone 6: LocalStorage Persistence

*   Identify key state variables from `learningCycleState` (e.g., `currentCycleDay`, `wordsForCurrentDay`, `wordsToLearnThisCycle`, `incorrectlyAnsweredLastQuiz`, `wordsToRepeatNextDay`, `masteredWordsThisCycle`, `availableNewWords`) that need to be persisted.
*   Use `useEffect` in `App.tsx` to save these to `localStorage` whenever they change.
*   On initial app load, attempt to load this state from `localStorage` and rehydrate `learningCycleState`. If no saved state, start a fresh cycle.
*   This would allow users to close the browser and resume their learning cycle.

## 7. No-Gos (For This Enhancement Iteration v1.0)

*   **Full "not first week" logic from the flowchart:** The part about "or, if it's not first week, the combination of wrong + new words" for Day 1 is deferred. This version will always start Day 1 of a new cycle with 10 purely random new words.
*   **Backend data storage and user accounts.**
*   **Complex UI changes beyond what's necessary for the new flow and `CycleStatsView`.**
*   Detailed tracking of *how many times* a word was wrong/right.
*   `localStorage` persistence (deferred to a potential Milestone 6).

## 8. Deliverables (For Enhanced Learning Cycle v1.0)

1.  **Updated `src/App.tsx`**: Main component with new state management for the learning cycle, new logic functions (`startNewLearningCycle`, `prepareWordsForDay`, `processQuizResults`, `advanceToNextDay`).
2.  **Updated `src/types/app.ts`**: New/modified TypeScript type definitions for the learning cycle state.
3.  **Modifications to `src/components/HomeView.tsx`, `src/components/LearnView.tsx`, `src/components/QuizView.tsx`** to integrate with the new state and logic.
4.  **New `src/components/CycleStatsView.tsx`** component.
5.  All functionality described in Milestones 1-5, working within a single browser session.

This detailed plan should provide a clear roadmap for a junior developer to implement the enhanced learning cycle. Each milestone is designed to be a testable increment.