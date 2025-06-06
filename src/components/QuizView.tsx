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
    
    return [...incorrectAnswers, correctAnswer].sort(() => 0.5 - Math.random());
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