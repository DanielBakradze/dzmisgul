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

## 4. Core Solution (Breadboarding for Enhanced Cycle)

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
*   **Results View (End of Cycle - Day 8):** Displays statistics: `wordsToLearnThisCycle` (all words encountered) and `incorrectlyAnsweredThisCycle` (words the user ultimately struggled with in the cycle). Button to "Start New Cycle".

## 5. Key Functionality (Step-by-Step Implementation)

This plan assumes modifications to the existing React + TypeScript + Vite + shadcn/ui project.

### Milestone 1: Foundational State and Day 1 Logic ✅ COMPLETED

1.  **Update `src/types/app.ts`:**
    *   Add the new state interfaces/types:
        ```typescript
        export interface GeorgianWord {
          id: number;
          georgian: string;
          english: string;
        }

        export type AppView = 'home' | 'learn' | 'quiz' | 'results' | 'cycle_stats'; // Add 'cycle_stats'

        export interface QuizState { // Existing, may need minor review later
          currentQuestionIndex: number;
          score: number;
          selectedAnswer: string | null;
          showFeedback: boolean;
          quizCompleted: boolean;
        }

        export interface LearningCycleState {
          currentCycleDay: number;
          wordsForCurrentDay: GeorgianWord[];
          wordsToLearnThisCycle: GeorgianWord[]; // All unique words shown in this cycle
          incorrectlyAnsweredLastQuiz: GeorgianWord[]; // Words answered incorrectly in the *most recent* quiz
          wordsToRepeatNextDay: GeorgianWord[]; // Specifically, words from incorrectlyAnsweredLastQuiz to carry over
          masteredWordsThisCycle: GeorgianWord[]; // Words answered correctly at some point in the cycle
          availableNewWords: GeorgianWord[]; // Pool of words not yet seen in this cycle
        }
        ```

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
    *   Temporarily, after the quiz, navigate back to 'home' or a placeholder. Full quiz processing and day advancement will be in Milestone 2.

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

### Milestone 5: Day 8 Statistics, Cycle Reset, and New View

1.  **Create `src/components/CycleStatsView.tsx`:**
    *   A new component to display end-of-cycle statistics.
    *   Props: `wordsLearnedInCycle: GeorgianWord[]`, `wordsStruggledWithInCycle: GeorgianWord[]`, `onStartNewCycle: () => void`.
    *   Layout:
        *   Title: "Cycle Complete!"
        *   Section: "Words Encountered This Cycle" (lists `wordsLearnedInCycle`).
        *   Section: "Words You Struggled With" (lists `wordsStruggledWithInCycle` - these would be words that were still in `incorrectlyAnsweredLastQuiz` after the Day 7 quiz, or a cumulative list of all words ever marked incorrect in the cycle). *Decision: Let's define "Struggled With" as words that were marked incorrect in the Day 7 quiz, reflecting the final state of practice on that set.*
        *   Button: "Start New Cycle" (calls `onStartNewCycle`).

2.  **Update `src/App.tsx` - Day 8 Logic and Stats:**
    *   Modify `advanceToNextDay()`:
        *   If `currentCycleDay` increments to 8:
            *   Do not call `prepareWordsForDay(8)`.
            *   Navigate to the new 'cycle_stats' view.
    *   The `startNewLearningCycle` function will already handle resetting for a new cycle.
    *   Pass `learningCycleState.wordsToLearnThisCycle` (as `wordsLearnedInCycle`) and the final `learningCycleState.incorrectlyAnsweredLastQuiz` (from Day 7's quiz, as `wordsStruggledWithInCycle`) to `CycleStatsView`.
    *   Pass `startNewLearningCycle` as `onStartNewCycle` to `CycleStatsView`.

3.  **Update `src/App.tsx` - View Rendering:**
    *   Add a case for `currentView === 'cycle_stats'` to render `CycleStatsView`.

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

## 6. No-Gos (For This Enhancement Iteration v1.0)

*   **Full "not first week" logic from the flowchart:** The part about "or, if it's not first week, the combination of wrong + new words" for Day 1 is deferred. This version will always start Day 1 of a new cycle with 10 purely random new words.
*   **Backend data storage and user accounts.**
*   **Complex UI changes beyond what's necessary for the new flow and `CycleStatsView`.**
*   Detailed tracking of *how many times* a word was wrong/right.
*   `localStorage` persistence (deferred to a potential Milestone 6).

## 7. Deliverables (For Enhanced Learning Cycle v1.0)

1.  **Updated `src/App.tsx`**: Main component with new state management for the learning cycle, new logic functions (`startNewLearningCycle`, `prepareWordsForDay`, `processQuizResults`, `advanceToNextDay`).
2.  **Updated `src/types/app.ts`**: New/modified TypeScript type definitions for the learning cycle state.
3.  **Modifications to `src/components/HomeView.tsx`, `src/components/LearnView.tsx`, `src/components/QuizView.tsx`** to integrate with the new state and logic.
4.  **New `src/components/CycleStatsView.tsx`** component.
5.  All functionality described in Milestones 1-5, working within a single browser session.

This detailed plan should provide a clear roadmap for a junior developer to implement the enhanced learning cycle. Each milestone is designed to be a testable increment. 