import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AppView } from '../types/app';

interface ResultsViewProps {
  score: number;
  total: number;
  onNextDay: () => void;
}

export default function ResultsView({ score, total, onNextDay }: ResultsViewProps) {
  const percentage = total > 0 ? (score / total) * 100 : 0;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
        <CardDescription>
          Here is a summary of your performance.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="text-4xl font-bold">
          {score} / {total}
        </div>
        <p className="text-lg text-muted-foreground">({percentage.toFixed(0)}%)</p>
        <Button onClick={onNextDay} className="w-full">
          Continue to Next Day
        </Button>
      </CardContent>
    </Card>
  );
}