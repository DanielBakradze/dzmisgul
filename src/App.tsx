import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import type { CheckedState } from '@radix-ui/react-checkbox'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [isChecked, setIsChecked] = useState<CheckedState>(false)
  const [isToggled, setIsToggled] = useState(false)
  const [progress, setProgress] = useState(75)

  const handleCheckboxChange = (checked: CheckedState) => {
    setIsChecked(checked)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">shadcn/ui Components Showcase</h1>
          <p className="text-lg text-muted-foreground">
            Complete collection of installed components - Georgian Learning App
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge>All Components</Badge>
            <Badge variant="secondary">Ready to Use</Badge>
            <Badge variant="outline">Latest Version</Badge>
            <Badge className="bg-green-600 hover:bg-green-700">✓ Working</Badge>
          </div>
        </div>

        {/* Success Alert */}
        <Alert>
          <AlertDescription>
            🎉 Perfect! All shadcn/ui components are now properly styled and ready for development.
          </AlertDescription>
        </Alert>

        {/* Main Content Tabs */}
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="georgian">Georgian App</TabsTrigger>
          </TabsList>

          {/* Basics Tab */}
          <TabsContent value="basics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Various button styles and interactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Sizes</h4>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">🔥</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Variants</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Custom Styles</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600 hover:bg-blue-700">✓ Verified</Badge>
                      <Badge className="bg-slate-800 text-white">8</Badge>
                      <Badge className="bg-red-500 text-white">99</Badge>
                      <Badge className="bg-green-600 text-white">New</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Avatars */}
              <Card>
                <CardHeader>
                  <CardTitle>Avatars</CardTitle>
                  <CardDescription>User profile pictures and fallbacks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Sizes</h4>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">SM</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>LG</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">With Content</h4>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>🇬🇪</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">AB</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Input Components */}
              <Card>
                <CardHeader>
                  <CardTitle>Input Components</CardTitle>
                  <CardDescription>Text inputs and form controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="input-demo">Input Field</Label>
                    <Input 
                      id="input-demo"
                      placeholder="Type something..." 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="textarea-demo">Textarea</Label>
                    <Textarea 
                      id="textarea-demo"
                      placeholder="Enter multiple lines..."
                      value={textareaValue}
                      onChange={(e) => setTextareaValue(e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="select-demo">Select Dropdown</Label>
                    <Select value={selectValue} onValueChange={setSelectValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Toggle Components */}
              <Card>
                <CardHeader>
                  <CardTitle>Toggle Components</CardTitle>
                  <CardDescription>Checkboxes, switches and interactive controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="checkbox-demo" 
                        checked={isChecked}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="checkbox-demo">
                        Enable notifications {isChecked === true ? '✓' : isChecked === false ? '✗' : '⊟'}
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="switch-demo"
                        checked={isToggled}
                        onCheckedChange={setIsToggled}
                      />
                      <Label htmlFor="switch-demo">
                        Dark mode {isToggled ? 'ON' : 'OFF'}
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Current Values</Label>
                    <div className="text-sm text-muted-foreground bg-muted p-3 rounded space-y-1">
                      <p><strong>Input:</strong> {inputValue || '(empty)'}</p>
                      <p><strong>Textarea:</strong> {textareaValue || '(empty)'}</p>
                      <p><strong>Select:</strong> {selectValue || '(none)'}</p>
                      <p><strong>Checkbox:</strong> {String(isChecked)}</p>
                      <p><strong>Switch:</strong> {isToggled.toString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle>Accordion</CardTitle>
                  <CardDescription>Collapsible content sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Getting Started with Georgian</AccordionTrigger>
                      <AccordionContent>
                        Learn the basics of Georgian alphabet (მხედრული) and pronunciation. 
                        Georgian has 33 letters and is written from left to right.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Basic Vocabulary</AccordionTrigger>
                      <AccordionContent>
                        Start with common greetings: გამარჯობა (hello), მადლობა (thank you), 
                        ნახვამდის (goodbye), and კარგი (good/well).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Grammar Fundamentals</AccordionTrigger>
                      <AccordionContent>
                        Georgian is an agglutinative language with complex verb conjugations 
                        and a unique case system with 7 grammatical cases.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Dialog and Dropdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Components</CardTitle>
                  <CardDescription>Dialogs, dropdowns and overlays</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Dialog Modal</Label>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Georgian Learning Progress</DialogTitle>
                          <DialogDescription>
                            View your learning statistics and achievements in Georgian language study.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p>This is a modal dialog showcasing your learning progress!</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-2">
                    <Label>Dropdown Menu</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Learning Options</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>📚 Study Vocabulary</DropdownMenuItem>
                        <DropdownMenuItem>✏️ Practice Writing</DropdownMenuItem>
                        <DropdownMenuItem>🎧 Listening Exercises</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>⚙️ Settings</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Progress Indicators</CardTitle>
                  <CardDescription>Progress bars and completion tracking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Vocabulary (კრების გამეორება)</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="w-full" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Grammar (გრამატიკა)</span>
                        <span>62%</span>
                      </div>
                      <Progress value={62} className="w-full" />
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Speaking (ლაპარაკი)</span>
                        <span>40%</span>
                      </div>
                      <Progress value={40} className="w-full" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      +10%
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      -10%
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Loading States */}
              <Card>
                <CardHeader>
                  <CardTitle>Loading States</CardTitle>
                  <CardDescription>Skeleton loaders and loading indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Text Loading</h4>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                      <Skeleton className="h-4 w-3/5" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Card Loading</h4>
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Button States</h4>
                    <div className="flex gap-2">
                      <Button disabled>
                        Loading...
                      </Button>
                      <Button variant="outline" disabled>
                        Disabled
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Georgian App Tab */}
          <TabsContent value="georgian" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Georgian Learning App Showcase</CardTitle>
                <CardDescription>
                  Real-world example of how these components work together in your Georgian language learning application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Learning Interface */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Vocabulary Practice</h3>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-blue-600 hover:bg-blue-700">გამარჯობა (Hello)</Badge>
                          <Badge variant="secondary">მადლობა (Thank you)</Badge>
                          <Badge variant="outline">კარგი (Good)</Badge>
                          <Badge className="bg-green-600 hover:bg-green-700">ნახვამდის (Goodbye)</Badge>
                          <Badge className="bg-purple-600 hover:bg-purple-700">სახლი (Home)</Badge>
                          <Badge className="bg-orange-600 hover:bg-orange-700">წიგნი (Book)</Badge>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Practice Translation</Label>
                          <Input placeholder="Type Georgian word here... (ქართული სიტყვა)" />
                        </div>
                        
                        <div className="flex gap-2 flex-wrap">
                          <Button>Check Answer</Button>
                          <Button variant="secondary">Skip</Button>
                          <Button variant="outline">Hint</Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Learning Tools</h3>
                      <div className="flex items-center space-x-2 mb-4">
                        <Switch id="pronunciation" />
                        <Label htmlFor="pronunciation">Enable pronunciation guide</Label>
                      </div>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            Learning Mode ⚙️
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          <DropdownMenuLabel>Select Learning Mode</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>🎯 Focused Practice</DropdownMenuItem>
                          <DropdownMenuItem>🎲 Random Review</DropdownMenuItem>
                          <DropdownMenuItem>📈 Difficulty Progression</DropdownMenuItem>
                          <DropdownMenuItem>🎮 Game Mode</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Progress Dashboard */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Daily Goal</span>
                            <span>12/15 words</span>
                          </div>
                          <Progress value={80} className="w-full" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Weekly Streak</span>
                            <span>5 days</span>
                          </div>
                          <Progress value={71} className="w-full" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
                      <div className="space-y-3">
                        <Alert>
                          <AlertDescription>
                            🏆 Congratulations! You've learned 50 new Georgian words this week!
                          </AlertDescription>
                        </Alert>
                        
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-blue-600 text-white">🇬🇪</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Georgian Language Learner</p>
                            <p className="text-xs text-muted-foreground">Intermediate Level</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">View Detailed Statistics</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Learning Statistics</DialogTitle>
                          <DialogDescription>
                            Your Georgian language learning progress over time
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="space-y-1">
                              <p className="text-2xl font-bold">247</p>
                              <p className="text-sm text-muted-foreground">Words Learned</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-2xl font-bold">15</p>
                              <p className="text-sm text-muted-foreground">Day Streak</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>მადლობა (Thank you)</span>
                              <Badge variant="secondary">Mastered</Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>გამარჯობა (Hello)</span>
                              <Badge variant="secondary">Mastered</Badge>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>სახლი (Home)</span>
                              <Badge variant="outline">Learning</Badge>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-muted-foreground">
                  🇬🇪 Ready to build your complete Georgian learning interface with these components!
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Component Summary */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 Available Components Summary</CardTitle>
            <CardDescription>All 17 shadcn/ui components ready for your Georgian Learning App</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
              <Badge variant="outline">✅ Button</Badge>
              <Badge variant="outline">✅ Card</Badge>
              <Badge variant="outline">✅ Badge</Badge>
              <Badge variant="outline">✅ Alert</Badge>
              <Badge variant="outline">✅ Input</Badge>
              <Badge variant="outline">✅ Textarea</Badge>
              <Badge variant="outline">✅ Select</Badge>
              <Badge variant="outline">✅ Checkbox</Badge>
              <Badge variant="outline">✅ Switch</Badge>
              <Badge variant="outline">✅ Label</Badge>
              <Badge variant="outline">✅ Tabs</Badge>
              <Badge variant="outline">✅ Accordion</Badge>
              <Badge variant="outline">✅ Progress</Badge>
              <Badge variant="outline">✅ Avatar</Badge>
              <Badge variant="outline">✅ Skeleton</Badge>
              <Badge variant="outline">✅ Dropdown Menu</Badge>
              <Badge variant="outline">✅ Dialog</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center pt-8 border-t">
          <p className="text-muted-foreground">
            🎉 All shadcn/ui components are working perfectly with proper styling! 
            <br />
            Your Georgian Learning App development environment is ready. 🇬🇪
          </p>
        </div>
      </div>
    </div>
  )
}

export default App 