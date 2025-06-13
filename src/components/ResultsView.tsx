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
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]"> {/* Adjust height */}
      <Card className="w-full"> {/* Full width for mobile */}
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
          
          <div className="flex flex-col sm:flex-row gap-2"> {/* Stack buttons on small screens */}
            <Button 
              variant="outline"
              onClick={() => onNavigate('learn')}
              className="w-full"
            >
              Review Words
            </Button>
            <Button 
              onClick={() => onNavigate('home')}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}