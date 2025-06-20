import { useState } from 'react';
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
            total={10} /* Assuming 10 words as per weeklyWords */
            onNavigate={setCurrentView}
          />
        )}
      </div>
    </div>
  );
}

export default App;