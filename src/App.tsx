import { useState } from 'react';
import { AppView, QuizState, LearningCycleState, CycleWord } from './types/app';
import HomeView from './components/HomeView';
import LearnView from './components/LearnView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import { allWords } from './data/words';

const WORDS_PER_DAY = 10;

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    showFeedback: false,
    quizCompleted: false,
  });

  const [learningCycleState, setLearningCycleState] = useState<LearningCycleState | null>(null);

  const startLearningCycle = () => {
    const shuffledWords = shuffleArray(allWords);
    const newWords = shuffledWords.slice(0, WORDS_PER_DAY);
    const cycleWords: CycleWord[] = newWords.map(word => ({
      ...word,
      mastery: { standard: false, textField: false, reversed: false },
    }));

    setLearningCycleState({
      currentCycleDay: 1,
      wordsForCurrentDay: cycleWords,
      wordsToLearnThisCycle: cycleWords,
      incorrectlyAnsweredLastQuiz: [],
      wordsToRepeatNextDay: [],
      masteredWordsThisCycle: [],
      availableNewWords: shuffledWords.slice(WORDS_PER_DAY),
    });

    setCurrentView('learn');
  };

  const processQuizResults = (answeredWords: Array<{ word: CycleWord, correct: boolean }>) => {
    if (!learningCycleState) return;

    const incorrectWords = answeredWords.filter(w => !w.correct).map(w => w.word);
    const correctWords = answeredWords.filter(w => w.correct).map(w => w.word);

    setLearningCycleState(prevState => {
      if (!prevState) return null;
      return {
        ...prevState,
        incorrectlyAnsweredLastQuiz: incorrectWords,
        masteredWordsThisCycle: [...new Set([...prevState.masteredWordsThisCycle, ...correctWords])],
      };
    });

    advanceToNextDay();
  };

  const advanceToNextDay = () => {
    setLearningCycleState(prevState => {
      if (!prevState) return null;

      const nextDay = prevState.currentCycleDay + 1;

      if (nextDay > 7) { // Cycle ends after day 7 quiz
        setCurrentView('results'); // Show final stats
        return { ...prevState, currentCycleDay: nextDay };
      }

      const wordsToRepeat = prevState.incorrectlyAnsweredLastQuiz;
      const numNewWords = Math.max(0, WORDS_PER_DAY - wordsToRepeat.length);
      const newWords = prevState.availableNewWords.slice(0, numNewWords);
      const newCycleWords: CycleWord[] = newWords.map(word => ({ ...word, mastery: { standard: false, textField: false, reversed: false } }));

      const nextDayWords = [...wordsToRepeat, ...newCycleWords];
      
      // Shuffle to mix repeated and new words
      const wordsForCurrentDay = shuffleArray(nextDayWords);

      setCurrentView('learn');

      return {
        ...prevState,
        currentCycleDay: nextDay,
        wordsForCurrentDay,
        wordsToLearnThisCycle: [...new Set([...prevState.wordsToLearnThisCycle, ...newCycleWords])],
        availableNewWords: prevState.availableNewWords.slice(numNewWords),
        incorrectlyAnsweredLastQuiz: [], // Reset for the new day's quiz
      };
    });
  };



  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      <div className="w-full max-w-md">
        {currentView === 'home' && <HomeView onStartCycle={startLearningCycle} />}

        {currentView === 'learn' && learningCycleState && (
          <LearnView
            wordsForCurrentDay={learningCycleState.wordsForCurrentDay}
            onNavigate={setCurrentView}
            currentDay={learningCycleState.currentCycleDay}
          />
        )}

        {currentView === 'quiz' && learningCycleState && (
          <QuizView
            quizState={quizState}
            setQuizState={setQuizState}
            onNavigate={setCurrentView}
            wordsForCurrentDay={learningCycleState.wordsForCurrentDay}
            onQuizComplete={processQuizResults}
          />
        )}

        {currentView === 'results' && learningCycleState && learningCycleState.currentCycleDay <= 7 && (
          <ResultsView
            score={quizState.score}
            total={learningCycleState.wordsForCurrentDay.length}
            onNavigate={setCurrentView}
          />
        )}

        {currentView === 'results' && learningCycleState && learningCycleState.currentCycleDay > 7 && (
          <ResultsView
            score={learningCycleState.masteredWordsThisCycle.length}
            total={learningCycleState.wordsToLearnThisCycle.length}
            onNavigate={() => {
              setCurrentView('home');
              setLearningCycleState(null);
            }}
            isCycleEnd={true}
          />
        )}
      </div>
    </div>
  );
}

export default App;