import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppView } from '../types/app';

interface HomeViewProps {
  onNavigate: (view: AppView) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]"> {/* Adjust height for mobile viewport */}
      <Card className="w-full"> {/* Full width for mobile */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Learn Georgian! 🇬🇪</CardTitle>
          <CardDescription>
            Master 10 new Georgian words this week
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => onNavigate('learn')}
            size="lg"
            className="w-full" /* Full width button for mobile */
          >
            Learn Today's Words
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}