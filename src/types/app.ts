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