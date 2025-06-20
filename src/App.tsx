import { useState } from 'react';
import { AppView, QuizState, LearningCycleState } from './types/app';
import { allWords } from './data/words';
import HomeView from './components/HomeView';
import LearnView from './components/LearnView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';

// Utility function to shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    showFeedback: false,
    quizCompleted: false
  });

  const [learningCycleState, setLearningCycleState] = useState<LearningCycleState>({
    currentCycleDay: 1,
    wordsForCurrentDay: [],
    wordsToLearnThisCycle: [],
    incorrectlyAnsweredLastQuiz: [],
    wordsToRepeatNextDay: [],
    masteredWordsThisCycle: [],
    availableNewWords: []
  });

  const startNewLearningCycle = () => {
    // Shuffle a copy of allWords and set it to availableNewWords
    const shuffledWords = shuffleArray(allWords);
    
    // Day 1 logic: Take 10 words from shuffled words
    const wordsToUse = shuffledWords.slice(0, 10);
    
    setLearningCycleState({
      currentCycleDay: 1,
      wordsForCurrentDay: wordsToUse,
      wordsToLearnThisCycle: wordsToUse,
      incorrectlyAnsweredLastQuiz: [],
      wordsToRepeatNextDay: [],
      masteredWordsThisCycle: [],
      availableNewWords: shuffledWords.slice(10)
    });

    setCurrentView('learn');
  };

  // This function will be expanded in future milestones
  // Currently unused but will be needed for Milestone 2+
  // const prepareWordsForDay = (day: number) => {
  //   if (day === 1) {
  //     // Day 1 logic is handled in startNewLearningCycle for now
  //     return;
  //   }
  //   // Additional day logic will be implemented in future milestones
  // };

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      {/* Ensure content is constrained for mobile, e.g., w-full max-w-sm or similar */}
      <div className="w-full max-w-md">
        {currentView === 'home' && (
          <HomeView onNavigate={setCurrentView} onStartCycle={startNewLearningCycle} />
        )}
        {currentView === 'learn' && (
          <LearnView 
            wordsForCurrentDay={learningCycleState.wordsForCurrentDay}
            currentDay={learningCycleState.currentCycleDay}
            onNavigate={setCurrentView} 
          />
        )}
        {currentView === 'quiz' && (
          <QuizView 
            wordsForCurrentDay={learningCycleState.wordsForCurrentDay}
            quizState={quizState}
            setQuizState={setQuizState}
            onNavigate={setCurrentView}
          />
        )}
        {currentView === 'results' && (
          <ResultsView 
            score={quizState.score}
            total={learningCycleState.wordsForCurrentDay.length}
            onNavigate={setCurrentView}
          />
        )}
      </div>
    </div>
  );
}

export default App;