import React, { useState, useEffect } from 'react';
import { loadState, saveState } from './utils/storage';
import { AppView, LearningCycleState, GeorgianWord, AnsweredWord } from './types/app';
import HomeView from './components/HomeView';
import LearnView from './components/LearnView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import { allWords } from './data/words';

const WORDS_PER_DAY = 10;

// Helper function to shuffle an array
function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function App() {
    const [currentView, setCurrentView] = useState<AppView>('home');
    const [learningCycleState, setLearningCycleState] = useState<LearningCycleState | null>(loadState() || null);
    const [wordsForCurrentDay, setWordsForCurrentDay] = useState<GeorgianWord[]>([]);
    const [lastQuizScore, setLastQuizScore] = useState({ score: 0, total: 0 });

    useEffect(() => {
        if (learningCycleState) {
            saveState(learningCycleState);
        }
    }, [learningCycleState]);

    useEffect(() => {
        if (learningCycleState) {
            setCurrentView('learn');
            const wordsToRepeat = learningCycleState.incorrectlyAnsweredLastQuiz;
            const numToRepeat = wordsToRepeat.length;
            const numNewWords = WORDS_PER_DAY - numToRepeat;

            const newWords = learningCycleState.availableNewWords.slice(0, numNewWords);

            const currentDayWords = [...wordsToRepeat, ...newWords];
            shuffleArray(currentDayWords);
            setWordsForCurrentDay(currentDayWords);
        } else {
            setCurrentView('home');
        }
    }, []);


    const startLearningCycle = () => {
        const shuffledWords = [...allWords];
        shuffleArray(shuffledWords);

        const newWords = shuffledWords.slice(0, WORDS_PER_DAY);
        const availableNewWords = shuffledWords.slice(WORDS_PER_DAY);

        const newState: LearningCycleState = {
            currentCycleDay: 1,
            wordsToLearnThisCycle: newWords,
            incorrectlyAnsweredLastQuiz: [],
            masteredWordsThisCycle: [],
            availableNewWords: availableNewWords,
        };
        setLearningCycleState(newState);
        setWordsForCurrentDay(newWords);
        setCurrentView('learn');
    };

    const processQuizResults = (answeredWords: AnsweredWord[]) => {
        if (!learningCycleState) return;

        let score = 0;
        const incorrectWords: GeorgianWord[] = [];
        const correctWords: GeorgianWord[] = [];

        answeredWords.forEach(aw => {
            if (aw.correct) {
                score++;
                correctWords.push(aw.word);
            } else {
                incorrectWords.push(aw.word);
            }
        });

        setLastQuizScore({ score, total: answeredWords.length });

        setLearningCycleState(prevState => {
            if (!prevState) return null;
            return {
                ...prevState,
                incorrectlyAnsweredLastQuiz: incorrectWords,
                masteredWordsThisCycle: [...new Set([...prevState.masteredWordsThisCycle, ...correctWords])]
            };
        });

        setCurrentView('results');
    };

    const advanceToNextDay = () => {
        if (!learningCycleState) return;

        const nextDay = learningCycleState.currentCycleDay + 1;

        if (nextDay > 7) {
            // End of cycle
            setCurrentView('results'); // Special view for end of cycle
            setLearningCycleState(prevState => prevState ? { ...prevState, currentCycleDay: nextDay } : null);
            return;
        }

        const wordsToRepeat = learningCycleState.incorrectlyAnsweredLastQuiz;
        const numToRepeat = wordsToRepeat.length;
        const numNewWords = WORDS_PER_DAY - numToRepeat;

        const newWords = learningCycleState.availableNewWords.slice(0, numNewWords);
        const remainingAvailableWords = learningCycleState.availableNewWords.slice(numNewWords);

        const nextDayWords = [...wordsToRepeat, ...newWords];
        shuffleArray(nextDayWords);

        setWordsForCurrentDay(nextDayWords);
        setLearningCycleState(prevState => {
            if (!prevState) return null;
            return {
                ...prevState,
                currentCycleDay: nextDay,
                wordsToLearnThisCycle: [...new Set([...prevState.wordsToLearnThisCycle, ...newWords])],
                availableNewWords: remainingAvailableWords,
                incorrectlyAnsweredLastQuiz: [], // Reset for the new day
            };
        });

        setCurrentView('learn');
    };

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col items-center">
      <div className="w-full max-w-md">
        {currentView === 'home' && <HomeView onNavigate={() => startLearningCycle()} />}
        
        {currentView === 'learn' && learningCycleState && (
            <LearnView words={wordsForCurrentDay} onNavigate={() => setCurrentView('quiz')} />
        )}

        {currentView === 'quiz' && learningCycleState && (
          <QuizView 
            words={wordsForCurrentDay}
            onQuizComplete={processQuizResults}
          />
        )}

        {currentView === 'results' && learningCycleState && learningCycleState.currentCycleDay <= 7 && (
          <ResultsView 
            score={lastQuizScore.score}
            total={lastQuizScore.total}
            onNextDay={advanceToNextDay}
          />
        )}

        {currentView === 'results' && learningCycleState && learningCycleState.currentCycleDay > 7 && (
             <ResultsView 
                score={lastQuizScore.score} 
                total={lastQuizScore.total} 
                onNextDay={startLearningCycle} 
            />
        )}
      </div>
    </div>
  );
}

export default App;