export interface GeorgianWord {
  georgian: string;
  english: string;
  id: number;
}

export const weeklyWords: GeorgianWord[] = [
  { id: 1, georgian: "გამარჯობა", english: "Hello" },
  { id: 2, georgian: "მადლობა", english: "Thank you" },
  { id: 3, georgian: "კი", english: "Yes" },
  { id: 4, georgian: "არა", english: "No" },
  { id: 5, georgian: "ბოდიში", english: "Sorry" },
  { id: 6, georgian: "წყალი", english: "Water" },
  { id: 7, georgian: "პური", english: "Bread" },
  { id: 8, georgian: "კარგი", english: "Good" },
  { id: 9, georgian: "ნახვამდის", english: "Goodbye" },
  { id: 10, georgian: "მიყვარხარ", english: "I love you" },
  { id: 11, georgian: "დილა მშვიდობისა", english: "Good morning" },
  { id: 12, georgian: "საღამო მშვიდობისა", english: "Good evening" },
  { id: 13, georgian: "ღამე მშვიდობისა", english: "Good night" },
  { id: 14, georgian: "როგორ ხარ", english: "How are you" },
  { id: 15, georgian: "მეტი", english: "More" },
  { id: 16, georgian: "მოდის", english: "Coming" },
  { id: 17, georgian: "გადასვლა", english: "Going" },
  { id: 18, georgian: "დღეს", english: "today" },
  { id: 19, georgian: "ვფიქრობ", english: "Thinking" },
  { id: 20, georgian: "დახმარება", english: "Helping" } // Extracted from ling-app.com (დაეხმაროს was listed, using more common form)
];