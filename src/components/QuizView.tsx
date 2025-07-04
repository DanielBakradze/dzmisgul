import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GeorgianWord, AnsweredWord } from '../types/app';
import { useState, useMemo } from 'react';

interface QuizViewProps {
  words: GeorgianWord[];
  onQuizComplete: (answeredWords: AnsweredWord[]) => void;
}

export default function QuizView({ words, onQuizComplete }: QuizViewProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [answeredWords, setAnsweredWords] = useState<AnsweredWord[]>([]);

  const currentWord = words[currentQuestionIndex];
  
  const options = useMemo(() => {
    if (!currentWord) return [];
    const correctAnswer = currentWord.english;
    const incorrectAnswers = words
      .filter(word => word.id !== currentWord.id)
      .map(word => word.english);
    
    shuffleArray(incorrectAnswers);
    
    const finalOptions = incorrectAnswers.slice(0, 3);
    finalOptions.push(correctAnswer);
    
    shuffleArray(finalOptions);
    return finalOptions;
  }, [currentQuestionIndex, words]);

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const progress = ((currentQuestionIndex + 1) / words.length) * 100;

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentWord.english;
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredWords([...answeredWords, { word: currentWord, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (currentQuestionIndex === words.length - 1) {
      onQuizComplete(answeredWords);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  if (!currentWord) {
    return (
      <Card className="w-full">
        <CardContent className="text-center p-6">
          <p>No words available for quiz.</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Start Over
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full"> {/* Full width for mobile */}
      <CardHeader>
        <CardTitle>Quiz Time!</CardTitle>
        <CardDescription>
          Question {currentQuestionIndex + 1} of {words.length}
        </CardDescription>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Badge variant="outline">
            Score: {score}/{words.length}
          </Badge>
        </div>

        <div className="text-center">
          <Badge className="text-2xl p-4" variant="secondary">
            {currentWord.georgian}
          </Badge>
          <p className="text-sm text-muted-foreground">{currentWord.transcription}</p>
        </div>

        {!showFeedback && (
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

        {showFeedback && (
          <div className="space-y-4">
            {selectedAnswer === currentWord.english ? (
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
              <Button 
                onClick={handleNext}
                className="w-full"
              >
                {currentQuestionIndex === words.length - 1 ? 'View Results' : 'Next Question'}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}