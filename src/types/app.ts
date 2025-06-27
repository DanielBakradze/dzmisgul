export interface GeorgianWord {
  id: number;
  georgian: string;
  english: string;
  transcription?: string;
}

export type AppView = 'home' | 'learn' | 'quiz' | 'results' | 'cycle_stats';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  quizCompleted: boolean;
}

export interface LearningCycleState {
  currentCycleDay: number;
  wordsForCurrentDay: GeorgianWord[];
  wordsToLearnThisCycle: GeorgianWord[];
  incorrectlyAnsweredLastQuiz: GeorgianWord[];
  wordsToRepeatNextDay: GeorgianWord[];
  masteredWordsThisCycle: GeorgianWord[];
  availableNewWords: GeorgianWord[];
}