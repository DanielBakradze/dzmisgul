export interface GeorgianWord {
  georgian: string;
  english: string;
  id: number;
}

export const allWords: GeorgianWord[] = [
  // Basic greetings and phrases
  { id: 1, georgian: "გამარჯობა", english: "Hello" },
  { id: 2, georgian: "მადლობა", english: "Thank you" },
  { id: 3, georgian: "კი", english: "Yes" },
  { id: 4, georgian: "არა", english: "No" },
  { id: 5, georgian: "ბოდიში", english: "Sorry" },
  { id: 6, georgian: "ნახვამდის", english: "Goodbye" },
  { id: 7, georgian: "მიყვარხარ", english: "I love you" },
  { id: 8, georgian: "დილა მშვიდობისა", english: "Good morning" },
  { id: 9, georgian: "საღამო მშვიდობისა", english: "Good evening" },
  { id: 10, georgian: "ღამე მშვიდობისა", english: "Good night" },
  { id: 11, georgian: "როგორა ხარ", english: "How are you" }, // Common expressions <mcreference link="https://www.omniglot.com/language/phrases/georgian.php" index="1">1</mcreference>
  { id: 12, georgian: "კარგად ვარ", english: "I am good" },
  { id: 13, georgian: "გემრიელად მიირთვით", english: "Enjoy your meal" },
  { id: 14, georgian: "გაგიმარჯოთ", english: "Cheers" },
  { id: 15, georgian: "არ მესმის", english: "I don't understand" },
  
  // Numbers <mcreference link="https://en.wikipedia.org/wiki/Georgian_numerals" index="1">1</mcreference>
  { id: 11, georgian: "ერთი", english: "One" },
  { id: 12, georgian: "ორი", english: "Two" },
  { id: 13, georgian: "სამი", english: "Three" },
  { id: 14, georgian: "ოთხი", english: "Four" },
  { id: 15, georgian: "ხუთი", english: "Five" },
  { id: 16, georgian: "ექვსი", english: "Six" },
  { id: 17, georgian: "შვიდი", english: "Seven" },
  { id: 18, georgian: "რვა", english: "Eight" },
  { id: 19, georgian: "ცხრა", english: "Nine" },
  { id: 20, georgian: "ათი", english: "Ten" },

  // Common verbs
  { id: 21, georgian: "მოსვლა", english: "To come" },
  { id: 22, georgian: "წასვლა", english: "To go" },
  { id: 23, georgian: "ფიქრი", english: "To think" },
  { id: 24, georgian: "დახმარება", english: "To help" },
  { id: 25, georgian: "სადილობა", english: "To eat lunch" },
  { id: 26, georgian: "ვისვენებ", english: "I rest" }, // Verbs with conjugations <mcreference link="https://mylanguages.org/georgian_verbs.php" index="1">1</mcreference>
  { id: 27, georgian: "ვაკეთებ", english: "I do" },
  { id: 28, georgian: "ვშრომობ", english: "I work" },
  { id: 29, georgian: "ვესაუბრე", english: "I speak" },
  { id: 30, georgian: "მივწერე", english: "I write" },
  
  // Food and drinks
  { id: 31, georgian: "წყალი", english: "Water" },
  { id: 32, georgian: "პური", english: "Bread" },
  { id: 33, georgian: "რძე", english: "Milk" },
  { id: 34, georgian: "ყავა", english: "Coffee" },
  { id: 35, georgian: "ჩაი", english: "Tea" },
  
  // Meals
  { id: 36, georgian: "სადილი", english: "Lunch" },
  { id: 37, georgian: "საუზმე", english: "Breakfast" },
  { id: 38, georgian: "ვახშამი", english: "Dinner" },
  
  // Adjectives
  { id: 39, georgian: "კარგი", english: "Good" },
  { id: 40, georgian: "ცხელი", english: "Hot" },
  { id: 41, georgian: "ცივი", english: "Cold" },
  { id: 42, georgian: "ტკბილი", english: "Sweet" },
  { id: 43, georgian: "მწარე", english: "Bitter" },
  { id: 44, georgian: "ლამაზი", english: "Beautiful" },
  { id: 45, georgian: "მწვანე", english: "Green" },
  { id: 46, georgian: "წითელი", english: "Red" },
  
  // Places and things
  { id: 47, georgian: "სახლი", english: "Home" },
  { id: 48, georgian: "მთა", english: "Mountain" },
  { id: 49, georgian: "დღე", english: "Day" },
  { id: 50, georgian: "მეტი", english: "More" },
  
  // Animals
  { id: 51, georgian: "ცხენი", english: "Horse" },
  
  // Body parts
  { id: 52, georgian: "თმა", english: "Hair" },
  { id: 53, georgian: "ცხვირი", english: "Nose" },
  
  // Abstract concepts
  { id: 54, georgian: "ომი", english: "War" },
  { id: 55, georgian: "მშვიდობა", english: "Peace" },

  // Family members
  { id: 56, georgian: "ოჯახი", english: "Family" }, // Basic family terms <mcreference link="https://ling-app.com/ka/georgian-vocabulary-for-family/" index="1">1</mcreference>
  { id: 57, georgian: "დედა", english: "Mother" },
  { id: 58, georgian: "მამა", english: "Father" },
  { id: 59, georgian: "და", english: "Sister" },
  { id: 60, georgian: "ძმა", english: "Brother" },
  { id: 61, georgian: "ბებია", english: "Grandmother" },
  { id: 62, georgian: "ბაბუა", english: "Grandfather" },
  { id: 63, georgian: "დეიდა", english: "Mother's sister" }, // Specific aunt terms <mcreference link="https://georgiasomethingyouknowwhatever.wordpress.com/2013/01/20/georgian-family-words/" index="2">2</mcreference>
  { id: 64, georgian: "მამიდა", english: "Father's sister" },
  { id: 65, georgian: "ბიძა", english: "Uncle" }
];

// Split allWords into daily sets of 10
export const dailyWords: GeorgianWord[][] = [];
const chunkSize = 10;
for (let i = 0; i < allWords.length; i += chunkSize) {
  dailyWords.push(allWords.slice(i, i + chunkSize));
}