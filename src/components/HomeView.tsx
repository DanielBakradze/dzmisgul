import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppView } from '../types/app';

interface HomeViewProps {
  onNavigate: (view: AppView) => void;
  onStartCycle: () => void;
}

export default function HomeView({ onNavigate, onStartCycle }: HomeViewProps) {
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
            onClick={onStartCycle}
            size="lg"
            className="w-full" /* Full width button for mobile */
          >
            Start Learning Cycle
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}