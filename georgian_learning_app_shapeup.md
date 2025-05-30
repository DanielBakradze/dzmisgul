# Georgian Learning App - Shape Up Documentation v.2.0

## 1. Problem Definition

It's challenging for individuals, especially those with busy schedules ("normies"), to find dedicated time to learn the Georgian language. We need a simple, accessible way to facilitate learning a few words regularly.

## 2. Appetite

**3 hours.** This is a strict timebox for the initial Minimum Viable Product (MVP).

## 3. Goal

Help users learn at least **10 new Georgian words per week** through a simple, interactive web application.

## 4. Core Solution (Breadboarding)

We will build a small, focused web application using React components and the shadcn/ui component library we've already set up. The application will guide the user through learning a set of words and then quizzing them using modern UI patterns.

**Component Flow:**

1.  **Home View:**
    *   Welcomes the user with a clean card-based layout.
    *   A primary button: "Learn Today's Words".
    *   Clicking this navigates to the "Learn Words" view.

2.  **Learn Words View:**
    *   Displays a list of 10 Georgian words alongside their English translations (this week's words) using Badge components.
    *   A button: "Start Quiz".
    *   Clicking this navigates to the "Quiz" view.

3.  **Quiz View:**
    *   Presents one Georgian word at a time from the list of 10 using Card components.
    *   Offers 3-4 multiple-choice English translations using Button components.
    *   User selects an answer.
    *   **Feedback:**
        *   **Correct Answer:** Displays success Alert component. Provides a button to proceed to the "Next Question".
        *   **Incorrect Answer:** Displays error Alert component with correct answer. Provides buttons for "Back to Learning" and "Next Question".
    *   Tracks the user's score using Progress component.
    *   After 10 questions, displays the final score.

4.  **Results View:**
    *   Displays the final score using Card and Badge components.
    *   A message: "Well done! Come back next week to learn more words."

## 5. Key Functionality (Step-by-Step for Implementation)

This plan uses React with TypeScript, Vite, and the shadcn/ui component library that's already set up.

### 5.1. Project Structure

The existing project structure is already set up with:
*   React + TypeScript + Vite
*   shadcn/ui components installed
*   Tailwind CSS configured
*   All necessary dependencies

### 5.2. Word Data (TypeScript)

Create a new file `src/data/words.ts` to define the Georgian words:

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

Use React's built-in `useState` to manage application state. Create types in `src/types/app.ts`:

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

Update `src/App.tsx` to handle different views:

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
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
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
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md">
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
            className="w-full"
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
    <Card>
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
              <span className="text-muted-foreground">{word.english}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            onClick={() => onNavigate('home')}
          >
            Back to Home
          </Button>
          <Button 
            onClick={() => onNavigate('quiz')}
            className="flex-1"
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
  
  // Generate multiple choice options
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
    <Card>
      <CardHeader>
        <CardTitle>Quiz Time!</CardTitle>
        <CardDescription>
          Question {quizState.currentQuestionIndex + 1} of {weeklyWords.length}
        </CardDescription>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Score */}
        <div className="text-center">
          <Badge variant="outline">
            Score: {quizState.score}/{weeklyWords.length}
          </Badge>
        </div>

        {/* Georgian Word */}
        <div className="text-center">
          <Badge className="text-2xl p-4" variant="secondary">
            {currentWord.georgian}
          </Badge>
        </div>

        {/* Answer Options */}
        {!quizState.showFeedback && (
          <div className="space-y-2">
            <p className="text-center text-muted-foreground">
              Select the English translation:
            </p>
            {options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        )}

        {/* Feedback */}
        {quizState.showFeedback && (
          <div className="space-y-4">
            {quizState.selectedAnswer === currentWord.english ? (
              <Alert>
                <AlertDescription>
                  🎉 Congratulations! That's correct!
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <AlertDescription>
                  Incorrect. The correct answer is: <strong>{currentWord.english}</strong>
                </AlertDescription>
              </Alert>
            )}

            <div className="flex gap-2">
              {quizState.selectedAnswer !== currentWord.english && (
                <Button 
                  variant="outline"
                  onClick={() => onNavigate('learn')}
                >
                  Back to Learning
                </Button>
              )}
              <Button 
                onClick={handleNext}
                className="flex-1"
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
    <div className="flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md">
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
          
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={() => onNavigate('learn')}
            >
              Review Words
            </Button>
            <Button 
              onClick={() => onNavigate('home')}
              className="flex-1"
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

To stay within the 3-hour appetite, the following are explicitly out of scope:

*   User accounts or login systems.
*   Persistent data storage (localStorage could be added later).
*   Dynamic loading of new word lists (words are hardcoded in `words.ts`).
*   Complex animations beyond basic Tailwind transitions.
*   Spaced repetition algorithms or adaptive learning.
*   Backend API integration.
*   Support for multiple languages in the UI.
*   Advanced error boundaries or comprehensive error handling.
*   Responsive mobile optimization beyond basic Tailwind classes.
*   Audio pronunciation features.

## 7. Deliverables

Within the 3-hour appetite, the junior developer should aim to produce:

1.  **Updated `src/App.tsx`**: Main component with view routing logic.
2.  **`src/data/words.ts`**: Georgian words data with TypeScript types.
3.  **`src/types/app.ts`**: TypeScript type definitions for the app.
4.  **`src/components/HomeView.tsx`**: Welcome screen component.
5.  **`src/components/LearnView.tsx`**: Word learning display component.
6.  **`src/components/QuizView.tsx`**: Interactive quiz component.
7.  **`src/components/ResultsView.tsx`**: Final score display component.

**Technical Foundation Already Complete:**
- ✅ React + TypeScript + Vite setup
- ✅ shadcn/ui component library installed and configured
- ✅ Tailwind CSS styling system
- ✅ Development environment ready

This plan leverages the modern component library foundation while maintaining the simple core learning loop of **learn → quiz → results**. The focus remains on delivering the MVP functionality within the 3-hour constraint, but with a more polished and maintainable codebase.