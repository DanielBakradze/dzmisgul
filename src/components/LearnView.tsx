import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { weeklyWords } from '../data/words';
import { AppView } from '../types/app';

interface LearnViewProps {
  onNavigate: (view: AppView) => void;
}

export default function LearnView({ onNavigate }: LearnViewProps) {
  return (
    <Card className="w-full"> {/* Full width for mobile */}
      <CardHeader>
        <CardTitle>Today's 10 Words</CardTitle>
        <CardDescription>
          Study these Georgian words before taking the quiz
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {weeklyWords.map((word) => (
            <div key={word.id} className="flex items-center justify-between p-3 border rounded">
              <Badge variant="secondary" className="text-lg font-medium">
                {word.georgian}
              </Badge>
              <span className="text-muted-foreground text-right">{word.english}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 pt-4"> {/* Stack buttons vertically on small screens */}
          <Button 
            variant="outline" 
            onClick={() => onNavigate('home')}
            className="w-full"
          >
            Back to Home
          </Button>
          <Button 
            onClick={() => onNavigate('quiz')}
            className="w-full"
          >
            Start Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}