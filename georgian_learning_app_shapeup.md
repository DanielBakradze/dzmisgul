# Georgian Learning App - Mobile-First Shape Up Documentation v.2.1

## 1. Problem Definition

It's challenging for individuals, especially those with busy schedules ("normies"), to find dedicated time to learn the Georgian language. We need a simple, accessible **mobile web application** to facilitate learning a few words regularly, optimized for on-the-go usage.

## 2. Appetite

**3 hours.** This is a strict timebox for the initial Minimum Viable Product (MVP), designed exclusively for mobile screens.

## 3. Goal

Help users learn at least **10 new Georgian words per week** through a simple, interactive **mobile web application**.

## 4. Core Solution (Breadboarding for Mobile)

We will build a small, focused **mobile web application** using React components and the shadcn/ui component library. The application will guide the user through learning a set of words and then quizzing them, using UI patterns optimized for touch interaction and smaller viewports.

**Component Flow (Mobile Screen Optimized):**

1.  **Home View:**
    *   Welcomes the user with a clean, full-width card layout suitable for mobile screens.
    *   A prominent primary button: "Learn Today's Words".
    *   Tapping this navigates to the "Learn Words" view.

2.  **Learn Words View:**
    *   Displays a scrollable list of 10 Georgian words alongside their English translations using Badge components, designed for easy reading on mobile.
    *   A button: "Start Quiz", easily accessible at the bottom of the screen or as a floating action button if appropriate for mobile UX.
    *   Tapping this navigates to the "Quiz" view.

3.  **Quiz View:**
    *   Presents one Georgian word at a time using full-width Card components for clarity on mobile.
    *   Offers 3-4 multiple-choice English translations using full-width Button components for easy tapping.
    *   User selects an answer.
    *   **Feedback (Mobile Alerts):**
        *   **Correct Answer:** Displays a clear success Alert component. Provides a button to proceed to the "Next Question".
        *   **Incorrect Answer:** Displays an error Alert component with the correct answer. Provides buttons for "Back to Learning" and "Next Question".
    *   Tracks the user's score using a Progress component, clearly visible on the mobile screen.
    *   After 10 questions, displays the final score.

4.  **Results View:**
    *   Displays the final score using Card and Badge components, formatted for mobile readability.
    *   A message: "Well done! Come back next week to learn more words."

## 5. Key Functionality (Step-by-Step for Mobile Implementation)

This plan uses React with TypeScript, Vite, and the shadcn/ui component library, with a focus on a **mobile-only user interface**.

### 5.1. Project Structure

The existing project structure is already set up with:
*   React + TypeScript + Vite
*   shadcn/ui components installed
*   Tailwind CSS configured (to be used for mobile-specific styling)
*   All necessary dependencies

### 5.2. Word Data (TypeScript)

Create a new file `src/data/words.ts` to define the Georgian words (content remains the same):

```typescript
export interface GeorgianWord {
  georgian: string;
  english: string;
  id: number;
}

export const weeklyWords: GeorgianWord[] = [
  { id: 1, georgian: "გამარჯობა", english: "Hello" },
  { id: 2, georgian: "მადლობა", english: "Thank you" },
  { id: 3, georgian: "კი", english: "Yes" },
  { id: 4, georgian: "არა", english: "No" },
  { id: 5, georgian: "ბოდიში", english: "Sorry" },
  { id: 6, georgian: "წყალი", english: "Water" },
  { id: 7, georgian: "პური", english: "Bread" },
  { id: 8, georgian: "კარგი", english: "Good" },
  { id: 9, georgian: "ნახვამდის", english: "Goodbye" },
  { id: 10, georgian: "მიყვარხარ", english: "I love you" }
];
```

### 5.3. State Management

Use React's built-in `useState` to manage application state. Create types in `src/types/app.ts` (content remains the same):

```typescript
export type AppView = 'home' | 'learn' | 'quiz' | 'results';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  quizCompleted: boolean;
}
```

### 5.4. Main App Component Structure

Update `src/App.tsx` to handle different views, ensuring the layout is optimized for mobile screens:

```typescript
import React, { useState } from 'react';
import { AppView, QuizState } from './types/app';
import HomeView from './components/HomeView';
import LearnView from './components/LearnView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    showFeedback: false,
    quizCompleted: false
  });

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      {/* Ensure content is constrained for mobile, e.g., w-full max-w-sm or similar */}
      <div className="w-full max-w-md">
        {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
        {currentView === 'learn' && <LearnView onNavigate={setCurrentView} />}
        {currentView === 'quiz' && (
          <QuizView 
            quizState={quizState}
            setQuizState={setQuizState}
            onNavigate={setCurrentView}
          />
        )}
        {currentView === 'results' && (
          <ResultsView 
            score={quizState.score}
            total={10}
            onNavigate={setCurrentView}
          />
        )}
      </div>
    </div>
  );
}
```

### 5.5. HomeView Component (`src/components/HomeView.tsx`)

Optimized for a single-column mobile layout:

```typescript
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppView } from '../types/app';

interface HomeViewProps {
  onNavigate: (view: AppView) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]"> {/* Adjust height for mobile viewport */}
      <Card className="w-full"> {/* Full width for mobile */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Learn Georgian! 🇬🇪</CardTitle>
          <CardDescription>
            Master 10 new Georgian words this week
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => onNavigate('learn')}
            size="lg"
            className="w-full" /* Full width button for mobile */
          >
            Learn Today's Words
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

### 5.6. LearnView Component (`src/components/LearnView.tsx`)

Designed for a scrollable list on mobile:

```typescript
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { weeklyWords } from '../data/words';
import { AppView } from '../types/app';

interface LearnViewProps {
  onNavigate: (view: AppView) => void;
}

export default function LearnView({ onNavigate }: LearnViewProps) {
  return (
    <Card className="w-full"> {/* Full width for mobile */}
      <CardHeader>
        <CardTitle>Today's 10 Words</CardTitle>
        <CardDescription>
          Study these Georgian words before taking the quiz
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {weeklyWords.map((word) => (
            <div key={word.id} className="flex items-center justify-between p-3 border rounded">
              <Badge variant="secondary" className="text-lg font-medium">
                {word.georgian}
              </Badge>
              <span className="text-muted-foreground text-right">{word.english}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 pt-4"> {/* Stack buttons vertically on small screens */}
          <Button 
            variant="outline" 
            onClick={() => onNavigate('home')}
            className="w-full"
          >
            Back to Home
          </Button>
          <Button 
            onClick={() => onNavigate('quiz')}
            className="w-full"
          >
            Start Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 5.7. QuizView Component (`src/components/QuizView.tsx`)

Optimized for touch targets and mobile readability:

```typescript
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { weeklyWords } from '../data/words';
import { AppView, QuizState } from '../types/app';

interface QuizViewProps {
  quizState: QuizState;
  setQuizState: (state: QuizState) => void;
  onNavigate: (view: AppView) => void;
}

export default function QuizView({ quizState, setQuizState, onNavigate }: QuizViewProps) {
  const currentWord = weeklyWords[quizState.currentQuestionIndex];
  
  const generateOptions = () => {
    const correctAnswer = currentWord.english;
    const incorrectAnswers = weeklyWords
      .filter(word => word.english !== correctAnswer)
      .map(word => word.english)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    return [correctAnswer, ...incorrectAnswers].sort(() => 0.5 - Math.random());
  };

  const options = generateOptions();
  const progress = ((quizState.currentQuestionIndex + 1) / weeklyWords.length) * 100;

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === currentWord.english;
    
    setQuizState({
      ...quizState,
      selectedAnswer,
      showFeedback: true,
      score: isCorrect ? quizState.score + 1 : quizState.score
    });
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex === weeklyWords.length - 1) {
      onNavigate('results');
    } else {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        selectedAnswer: null,
        showFeedback: false
      });
    }
  };

  return (
    <Card className="w-full"> {/* Full width for mobile */}
      <CardHeader>
        <CardTitle>Quiz Time!</CardTitle>
        <CardDescription>
          Question {quizState.currentQuestionIndex + 1} of {weeklyWords.length}
        </CardDescription>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Badge variant="outline">
            Score: {quizState.score}/{weeklyWords.length}
          </Badge>
        </div>

        <div className="text-center">
          <Badge className="text-2xl p-4" variant="secondary">
            {currentWord.georgian}
          </Badge>
        </div>

        {!quizState.showFeedback && (
          <div className="space-y-2">
            <p className="text-center text-muted-foreground">
              Select the English translation:
            </p>
            {options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full h-12 text-base" /* Larger touch targets for mobile */
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )}

        {quizState.showFeedback && (
          <div className="space-y-4">
            {quizState.selectedAnswer === currentWord.english ? (
              <Alert>
                <AlertDescription className="text-center">
                  🎉 Congratulations! That's correct!
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertDescription className="text-center">
                  Incorrect. The correct answer is: <strong>{currentWord.english}</strong>
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-2"> {/* Stack buttons on small screens */}
              {quizState.selectedAnswer !== currentWord.english && (
                <Button 
                  variant="outline"
                  onClick={() => onNavigate('learn')}
                  className="w-full"
                >
                  Back to Learning
                </Button>
              )}
              <Button 
                onClick={handleNext}
                className="w-full"
              >
                {quizState.currentQuestionIndex === weeklyWords.length - 1 ? 'View Results' : 'Next Question'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
```

### 5.8. ResultsView Component (`src/components/ResultsView.tsx`)

Formatted for clear display on mobile:

```typescript
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AppView } from '../types/app';

interface ResultsViewProps {
  score: number;
  total: number;
  onNavigate: (view: AppView) => void;
}

export default function ResultsView({ score, total, onNavigate }: ResultsViewProps) {
  const percentage = Math.round((score / total) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return "Outstanding! 🏆";
    if (percentage >= 70) return "Well done! 👏";
    if (percentage >= 50) return "Good effort! 👍";
    return "Keep practicing! 💪";
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]"> {/* Adjust height */}
      <Card className="w-full"> {/* Full width for mobile */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <CardDescription>
            Here's how you performed
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <Badge className="text-3xl p-6" variant="secondary">
              {score}/{total}
            </Badge>
            <p className="text-xl text-muted-foreground">{percentage}%</p>
            <p className="text-lg">{getScoreMessage()}</p>
          </div>
          
          <p className="text-muted-foreground">
            Well done! Come back next week to learn more words.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2"> {/* Stack buttons on small screens */}
            <Button 
              variant="outline"
              onClick={() => onNavigate('learn')}
              className="w-full"
            >
              Review Words
            </Button>
            <Button 
              onClick={() => onNavigate('home')}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 6. No-Gos (Out of Scope for this 3-hour iteration)

To stay within the 3-hour appetite and maintain a **mobile-only focus**, the following are explicitly out of scope:

*   User accounts or login systems.
*   Persistent data storage (localStorage could be added later).
*   Dynamic loading of new word lists (words are hardcoded in `words.ts`).
*   Complex animations beyond basic Tailwind transitions suitable for mobile.
*   Spaced repetition algorithms or adaptive learning.
*   Backend API integration.
*   Support for multiple languages in the UI.
*   Advanced error boundaries or comprehensive error handling.
*   **Support for tablet or desktop screen resolutions.** The application is designed and optimized exclusively for mobile screens.
*   Audio pronunciation features.

## 7. Deliverables

Within the 3-hour appetite, the junior developer should aim to produce a **mobile-optimized web application** with:

1.  **Updated `src/App.tsx`**: Main component with view routing logic, styled for mobile.
2.  **`src/data/words.ts`**: Georgian words data with TypeScript types.
3.  **`src/types/app.ts`**: TypeScript type definitions for the app.
4.  **`src/components/HomeView.tsx`**: Welcome screen component, mobile-optimized.
5.  **`src/components/LearnView.tsx`**: Word learning display component, mobile-optimized.
6.  **`src/components/QuizView.tsx`**: Interactive quiz component, mobile-optimized.
7.  **`src/components/ResultsView.tsx`**: Final score display component, mobile-optimized.

**Technical Foundation Already Complete:**
- ✅ React + TypeScript + Vite setup
- ✅ shadcn/ui component library installed and configured
- ✅ Tailwind CSS styling system (to be used for mobile-specific styling)
- ✅ Development environment ready

This plan leverages the modern component library foundation while maintaining the simple core learning loop of **learn → quiz → results**, specifically tailored for an excellent **mobile user experience**. The focus remains on delivering the MVP functionality within the 3-hour constraint, with a polished and maintainable codebase for a mobile-only application.