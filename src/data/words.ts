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
  { id: 65, georgian: "ბიძა", english: "Uncle" },

  // Professions <mcreference link="https://ling-app.com/ka/basic-georgian-words/" index="2">2</mcreference>
  { id: 66, georgian: "მასწავლებელი", english: "Teacher" },
  { id: 67, georgian: "ექიმი", english: "Doctor" },
  { id: 68, georgian: "ინჟინერი", english: "Engineer" },
  { id: 69, georgian: "პოლიციელი", english: "Police officer" },
  { id: 70, georgian: "მზარეული", english: "Cook" },
  { id: 71, georgian: "ფერმერი", english: "Farmer" },
  { id: 72, georgian: "ექთანი", english: "Nurse" },
  { id: 73, georgian: "იურისტი", english: "Lawyer" },
  { id: 74, georgian: "მყიდველი", english: "Seller" },
  { id: 75, georgian: "მუშა", english: "Worker" },

  // Directions and positions
  { id: 76, georgian: "წინ", english: "Front" },
  { id: 77, georgian: "უკან", english: "Back" },
  { id: 78, georgian: "მარცხნივ", english: "Left" },
  { id: 79, georgian: "მარჯვნივ", english: "Right" },
  { id: 80, georgian: "ზემოთ", english: "Up" },
  { id: 81, georgian: "ქვემოთ", english: "Down" },
  { id: 82, georgian: "ჩრდილოეთი", english: "North" },
  { id: 83, georgian: "სამხრეთი", english: "South" },
  { id: 84, georgian: "აღმოსავლეთი", english: "East" },
  { id: 85, georgian: "დასავლეთი", english: "West" },

  // Weather <mcreference link="https://ling-app.com/ka/common-georgian-vocabulary/" index="1">1</mcreference>
  { id: 86, georgian: "ამინდი", english: "Weather" },
  { id: 87, georgian: "მზიანი", english: "Sunny" },
  { id: 88, georgian: "წვიმიანი", english: "Rainy" },
  { id: 89, georgian: "ღრუბლიანი", english: "Cloudy" },
  { id: 90, georgian: "ქარიანი", english: "Windy" },
  { id: 91, georgian: "ცა", english: "Sky" },
  { id: 92, georgian: "წვიმა", english: "Rain" },
  { id: 93, georgian: "ქარი", english: "Wind" },
  { id: 94, georgian: "ღრუბელი", english: "Cloud" },
  { id: 95, georgian: "ელვა", english: "Lightning" },

  // Colors
  { id: 96, georgian: "ფერი", english: "Color" },
  { id: 97, georgian: "თეთრი", english: "White" },
  { id: 98, georgian: "შავი", english: "Black" },
  { id: 99, georgian: "ლურჯი", english: "Blue" },
  { id: 100, georgian: "ყვითელი", english: "Yellow" },
  { id: 101, georgian: "იასამნისფერი", english: "Purple" },
  { id: 102, georgian: "ნაცრისფერი", english: "Gray" },
  { id: 103, georgian: "ყავისფერი", english: "Brown" },
  { id: 104, georgian: "ვარდისფერი", english: "Pink" },
  { id: 105, georgian: "ნარინჯისფერი", english: "Orange" },

  // Time and calendar
  { id: 106, georgian: "დრო", english: "Time" },
  { id: 107, georgian: "დილა", english: "Morning" },
  { id: 108, georgian: "შუადღე", english: "Noon" },
  { id: 109, georgian: "საღამო", english: "Evening" },
  { id: 110, georgian: "ღამე", english: "Night" },
  { id: 111, georgian: "კვირა", english: "Week" },
  { id: 112, georgian: "თვე", english: "Month" },
  { id: 113, georgian: "წელი", english: "Year" },
  { id: 114, georgian: "დღეს", english: "Today" },
  { id: 115, georgian: "ხვალ", english: "Tomorrow" },
  { id: 116, georgian: "გუშინ", english: "Yesterday" },

  // Days of the week
  { id: 117, georgian: "ორშაბათი", english: "Monday" },
  { id: 118, georgian: "სამშაბათი", english: "Tuesday" },
  { id: 119, georgian: "ოთხშაბათი", english: "Wednesday" },
  { id: 120, georgian: "ხუთშაბათი", english: "Thursday" },
  { id: 121, georgian: "პარასკევი", english: "Friday" },
  { id: 122, georgian: "შაბათი", english: "Saturday" },
  { id: 123, georgian: "კვირა", english: "Sunday" },

  // Transportation
  { id: 124, georgian: "მანქანა", english: "Car" },
  { id: 125, georgian: "ავტობუსი", english: "Bus" },
  { id: 126, georgian: "მატარებელი", english: "Train" },
  { id: 127, georgian: "თვითმფრინავი", english: "Airplane" },
  { id: 128, georgian: "ველოსიპედი", english: "Bicycle" },
  { id: 129, georgian: "ტაქსი", english: "Taxi" },
  { id: 130, georgian: "გზა", english: "Road" },
  { id: 131, georgian: "ხიდი", english: "Bridge" },
  { id: 132, georgian: "აეროპორტი", english: "Airport" },
  { id: 133, georgian: "სადგური", english: "Station" },

  // Clothing
  { id: 134, georgian: "ტანსაცმელი", english: "Clothing" },
  { id: 135, georgian: "პერანგი", english: "Shirt" },
  { id: 136, georgian: "შარვალი", english: "Pants" },
  { id: 137, georgian: "კაბა", english: "Dress" },
  { id: 138, georgian: "ფეხსაცმელი", english: "Shoes" },
  { id: 139, georgian: "ქუდი", english: "Hat" },
  { id: 140, georgian: "ქურთუკი", english: "Jacket" },
  { id: 141, georgian: "წინდა", english: "Socks" },
  { id: 142, georgian: "ხელთათმანი", english: "Gloves" },
  { id: 143, georgian: "ღვედი", english: "Belt" },

  // School and education
  { id: 144, georgian: "სკოლა", english: "School" },
  { id: 145, georgian: "უნივერსიტეტი", english: "University" },
  { id: 146, georgian: "წიგნი", english: "Book" },
  { id: 147, georgian: "რვეული", english: "Notebook" },
  { id: 148, georgian: "კალამი", english: "Pen" },
  { id: 149, georgian: "ფანქარი", english: "Pencil" },
  { id: 150, georgian: "მაგიდა", english: "Table" },
  { id: 151, georgian: "სკამი", english: "Chair" },
  { id: 152, georgian: "დაფა", english: "Board" },
  { id: 153, georgian: "გაკვეთილი", english: "Lesson" },

  // Technology
  { id: 154, georgian: "კომპიუტერი", english: "Computer" },
  { id: 155, georgian: "ტელეფონი", english: "Phone" },
  { id: 156, georgian: "ინტერნეტი", english: "Internet" },
  { id: 157, georgian: "ტელევიზორი", english: "Television" },
  { id: 158, georgian: "რადიო", english: "Radio" },
  { id: 159, georgian: "კამერა", english: "Camera" },
  { id: 160, georgian: "მუსიკა", english: "Music" },
  { id: 161, georgian: "ფილმი", english: "Movie" },
  { id: 162, georgian: "ფოტო", english: "Photo" },
  { id: 163, georgian: "ვიდეო", english: "Video" },

  // More common objects
  { id: 164, georgian: "ფული", english: "Money" },
  { id: 165, georgian: "ბანკი", english: "Bank" },
  { id: 166, georgian: "მაღაზია", english: "Store" },
  { id: 167, georgian: "ბაზარი", english: "Market" },
  { id: 168, georgian: "საავადმყოფო", english: "Hospital" },
  { id: 169, georgian: "ეკლესია", english: "Church" },
  { id: 170, georgian: "პარკი", english: "Park" },
  { id: 171, georgian: "ბიბლიოთეკა", english: "Library" },
  { id: 172, georgian: "მუზეუმი", english: "Museum" },
  { id: 173, georgian: "თეატრი", english: "Theater" },

  // More animals
  { id: 174, georgian: "ძაღლი", english: "Dog" },
  { id: 175, georgian: "კატა", english: "Cat" },
  { id: 176, georgian: "ფუტკარი", english: "Bird" },
  { id: 177, georgian: "თევზი", english: "Fish" },
  { id: 178, georgian: "ძროხა", english: "Cow" },
  { id: 179, georgian: "ღორი", english: "Pig" },
  { id: 180, georgian: "ცხვარი", english: "Sheep" },
  { id: 181, georgian: "კატა", english: "Chicken" },
  { id: 182, georgian: "მგელი", english: "Wolf" },
  { id: 183, georgian: "დათვი", english: "Bear" },

  // More body parts
  { id: 184, georgian: "თავი", english: "Head" },
  { id: 185, georgian: "თვალი", english: "Eye" },
  { id: 186, georgian: "ყური", english: "Ear" },
  { id: 187, georgian: "პირი", english: "Mouth" },
  { id: 188, georgian: "კბილი", english: "Tooth" },
  { id: 189, georgian: "ხელი", english: "Hand" },
  { id: 190, georgian: "ფეხი", english: "Foot" },
  { id: 191, georgian: "ზურგი", english: "Back" },
  { id: 192, georgian: "მუცელი", english: "Stomach" },
  { id: 193, georgian: "გული", english: "Heart" },

  // Final words to reach 200
  { id: 194, georgian: "ენა", english: "Language" },
  { id: 195, georgian: "სიტყვა", english: "Word" },
  { id: 196, georgian: "ხმა", english: "Voice" },
  { id: 197, georgian: "მუშაობა", english: "Work" },
  { id: 198, georgian: "თამაში", english: "Game" },
  { id: 199, georgian: "სპორტი", english: "Sport" },
  { id: 200, georgian: "ბედნიერება", english: "Happiness" }
];

// Split allWords into daily sets of 10
export const dailyWords: GeorgianWord[][] = [];
const chunkSize = 10;
for (let i = 0; i < allWords.length; i += chunkSize) {
  dailyWords.push(allWords.slice(i, i + chunkSize));
}