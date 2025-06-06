export type AppView = 'home' | 'learn' | 'quiz' | 'results';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: string | null;
  showFeedback: boolean;
  quizCompleted: boolean;
}