export interface GeorgianWord {
  georgian: string;
  english: string;
  id: number;
  transcription?: string;
}

export const allWords: GeorgianWord[] = [
  // Basic greetings and phrases
  { id: 1, georgian: "გამარჯობა", english: "Hello", transcription: "gamarjoba" },
  { id: 2, georgian: "მადლობა", english: "Thank you", transcription: "madloba" },
  { id: 3, georgian: "კი", english: "Yes", transcription: "k'i" },
  { id: 4, georgian: "არა", english: "No", transcription: "ara" },
  { id: 5, georgian: "ბოდიში", english: "Sorry", transcription: "bodishi" },
  { id: 6, georgian: "ნახვამდის", english: "Goodbye", transcription: "nakhvamdis" },
  { id: 7, georgian: "მიყვარხარ", english: "I love you", transcription: "miqvarkhar" },
  { id: 8, georgian: "დილა მშვიდობისა", english: "Good morning", transcription: "dila mshvidobisa" },
  { id: 9, georgian: "საღამო მშვიდობისა", english: "Good evening", transcription: "saghamo mshvidobisa" },
  { id: 10, georgian: "ღამე მშვიდობისა", english: "Good night", transcription: "ghame mshvidobisa" },
  { id: 11, georgian: "როგორა ხარ", english: "How are you", transcription: "rogora khar" }, // Common expressions <mcreference link="https://www.omniglot.com/language/phrases/georgian.php" index="1">1</mcreference>
  { id: 12, georgian: "კარგად ვარ", english: "I am good", transcription: "k'argad var" },
  { id: 13, georgian: "გემრიელად მიირთვით", english: "Enjoy your meal", transcription: "gemrielad miirtvit" },
  { id: 14, georgian: "გაგიმარჯოთ", english: "Cheers", transcription: "gagimarjot" },
  { id: 15, georgian: "არ მესმის", english: "I don't understand", transcription: "ar mesmis" },
  
  // Numbers <mcreference link="https://en.wikipedia.org/wiki/Georgian_numerals" index="1">1</mcreference>
  { id: 11, georgian: "ერთი", english: "One", transcription: "erti" },
  { id: 12, georgian: "ორი", english: "Two", transcription: "ori" },
  { id: 13, georgian: "სამი", english: "Three", transcription: "sami" },
  { id: 14, georgian: "ოთხი", english: "Four", transcription: "otkhi" },
  { id: 15, georgian: "ხუთი", english: "Five", transcription: "khuti" },
  { id: 16, georgian: "ექვსი", english: "Six", transcription: "ekvsi" },
  { id: 17, georgian: "შვიდი", english: "Seven", transcription: "shvidi" },
  { id: 18, georgian: "რვა", english: "Eight", transcription: "rva" },
  { id: 19, georgian: "ცხრა", english: "Nine", transcription: "tskhra" },
  { id: 20, georgian: "ათი", english: "Ten", transcription: "ati" },

  // Common verbs
  { id: 21, georgian: "მოსვლა", english: "To come", transcription: "mosvla" },
  { id: 22, georgian: "წასვლა", english: "To go", transcription: "ts'asvla" },
  { id: 23, georgian: "ფიქრი", english: "To think", transcription: "pikri" },
  { id: 24, georgian: "დახმარება", english: "To help", transcription: "dakhmareba" },
  { id: 25, georgian: "სადილობა", english: "To eat lunch", transcription: "sadiloba" },
  { id: 26, georgian: "ვისვენებ", english: "I rest", transcription: "visveneb" }, // Verbs with conjugations <mcreference link="https://mylanguages.org/georgian_verbs.php" index="1">1</mcreference>
  { id: 27, georgian: "ვაკეთებ", english: "I do", transcription: "vak'eteb" },
  { id: 28, georgian: "ვშრომობ", english: "I work", transcription: "vshromob" },
  { id: 29, georgian: "ვესაუბრე", english: "I speak", transcription: "vesaubre" },
  { id: 30, georgian: "მივწერე", english: "I write", transcription: "mivts'ere" },
  
  // Food and drinks
  { id: 31, georgian: "წყალი", english: "Water", transcription: "ts'q'ali" },
  { id: 32, georgian: "პური", english: "Bread", transcription: "p'uri" },
  { id: 33, georgian: "რძე", english: "Milk", transcription: "rdze" },
  { id: 34, georgian: "ყავა", english: "Coffee", transcription: "q'ava" },
  { id: 35, georgian: "ჩაი", english: "Tea", transcription: "chai" },
  
  // Meals
  { id: 36, georgian: "სადილი", english: "Lunch", transcription: "sadili" },
  { id: 37, georgian: "საუზმე", english: "Breakfast", transcription: "sauzme" },
  { id: 38, georgian: "ვახშამი", english: "Dinner", transcription: "vakhshami" },
  
  // Adjectives
  { id: 39, georgian: "კარგი", english: "Good", transcription: "k'argi" },
  { id: 40, georgian: "ცხელი", english: "Hot", transcription: "tskheli" },
  { id: 41, georgian: "ცივი", english: "Cold", transcription: "tsivi" },
  { id: 42, georgian: "ტკბილი", english: "Sweet", transcription: "t'k'bili" },
  { id: 43, georgian: "მწარე", english: "Bitter", transcription: "mts'are" },
  { id: 44, georgian: "ლამაზი", english: "Beautiful", transcription: "lamazi" },
  { id: 45, georgian: "მწვანე", english: "Green", transcription: "mtsvane" },
  { id: 46, georgian: "წითელი", english: "Red", transcription: "ts'iteli" },
  
  // Places and things
  { id: 47, georgian: "სახლი", english: "Home", transcription: "sakhli" },
  { id: 48, georgian: "მთა", english: "Mountain", transcription: "mta" },
  { id: 49, georgian: "დღე", english: "Day", transcription: "dghe" },
  { id: 50, georgian: "მეტი", english: "More", transcription: "met'i" },
  
  // Animals
  { id: 51, georgian: "ცხენი", english: "Horse", transcription: "tskheni" },
  
  // Body parts
  { id: 52, georgian: "თმა", english: "Hair", transcription: "tma" },
  { id: 53, georgian: "ცხვირი", english: "Nose", transcription: "tskhviri" },
  
  // Abstract concepts
  { id: 54, georgian: "ომი", english: "War", transcription: "omi" },
  { id: 55, georgian: "მშვიდობა", english: "Peace", transcription: "mshvidoba" },

  // Family members
  { id: 56, georgian: "ოჯახი", english: "Family", transcription: "ojakhi" }, // Basic family terms <mcreference link="https://ling-app.com/ka/georgian-vocabulary-for-family/" index="1">1</mcreference>
  { id: 57, georgian: "დედა", english: "Mother", transcription: "deda" },
  { id: 58, georgian: "მამა", english: "Father", transcription: "mama" },
  { id: 59, georgian: "და", english: "Sister", transcription: "da" },
  { id: 60, georgian: "ძმა", english: "Brother", transcription: "dzma" },
  { id: 61, georgian: "ბებია", english: "Grandmother", transcription: "bebia" },
  { id: 62, georgian: "ბაბუა", english: "Grandfather", transcription: "babua" },
  { id: 63, georgian: "დეიდა", english: "Mother's sister", transcription: "deida" }, // Specific aunt terms <mcreference link="https://georgiasomethingyouknowwhatever.wordpress.com/2013/01/20/georgian-family-words/" index="2">2</mcreference>
  { id: 64, georgian: "მამიდა", english: "Father's sister", transcription: "mamida" },
  { id: 65, georgian: "ბიძა", english: "Uncle", transcription: "bidza" },

  // Professions <mcreference link="https://ling-app.com/ka/basic-georgian-words/" index="2">2</mcreference>
  { id: 66, georgian: "მასწავლებელი", english: "Teacher", transcription: "masts'avlebeli" },
  { id: 67, georgian: "ექიმი", english: "Doctor", transcription: "ekimi" },
  { id: 68, georgian: "ინჟინერი", english: "Engineer", transcription: "inzhineri" },
  { id: 69, georgian: "პოლიციელი", english: "Police officer", transcription: "p'olitsieli" },
  { id: 70, georgian: "მზარეული", english: "Cook", transcription: "mzareuli" },
  { id: 71, georgian: "ფერმერი", english: "Farmer", transcription: "permeri" },
  { id: 72, georgian: "ექთანი", english: "Nurse", transcription: "ektani" },
  { id: 73, georgian: "იურისტი", english: "Lawyer", transcription: "iuristi" },
  { id: 74, georgian: "მყიდველი", english: "Buyer", transcription: "mq'idveli" },
  { id: 75, georgian: "მუშა", english: "Worker", transcription: "musha" },

  // Directions and positions
  { id: 76, georgian: "წინ", english: "Front", transcription: "ts'in" },
  { id: 77, georgian: "უკან", english: "Back", transcription: "uk'an" },
  { id: 78, georgian: "მარცხნივ", english: "Left", transcription: "martskhniv" },
  { id: 79, georgian: "მარჯვნივ", english: "Right", transcription: "marjvniv" },
  { id: 80, georgian: "ზემოთ", english: "Up", transcription: "zemot" },
  { id: 81, georgian: "ქვემოთ", english: "Down", transcription: "kvemot" },
  { id: 82, georgian: "ჩრდილოეთი", english: "North", transcription: "chrdiloeti" },
  { id: 83, georgian: "სამხრეთი", english: "South", transcription: "samkhreti" },
  { id: 84, georgian: "აღმოსავლეთი", english: "East", transcription: "aghmosavleti" },
  { id: 85, georgian: "დასავლეთი", english: "West", transcription: "dasavleti" },

  // Weather <mcreference link="https://ling-app.com/ka/common-georgian-vocabulary/" index="1">1</mcreference>
  { id: 86, georgian: "ამინდი", english: "Weather", transcription: "amindi" },
  { id: 87, georgian: "მზიანი", english: "Sunny", transcription: "mziani" },
  { id: 88, georgian: "წვიმიანი", english: "Rainy", transcription: "ts'vimiani" },
  { id: 89, georgian: "ღრუბლიანი", english: "Cloudy", transcription: "ghrubliani" },
  { id: 90, georgian: "ქარიანი", english: "Windy", transcription: "kariani" },
  { id: 91, georgian: "ცა", english: "Sky", transcription: "tsa" },
  { id: 92, georgian: "წვიმა", english: "Rain", transcription: "ts'vima" },
  { id: 93, georgian: "ქარი", english: "Wind", transcription: "kari" },
  { id: 94, georgian: "ღრუბელი", english: "Cloud", transcription: "ghrubeli" },
  { id: 95, georgian: "ელვა", english: "Lightning", transcription: "elva" },

  // Colors
  { id: 96, georgian: "ფერი", english: "Color", transcription: "peri" },
  { id: 97, georgian: "თეთრი", english: "White", transcription: "tetri" },
  { id: 98, georgian: "შავი", english: "Black", transcription: "shavi" },
  { id: 99, georgian: "ლურჯი", english: "Blue", transcription: "lurji" },
  { id: 100, georgian: "ყვითელი", english: "Yellow", transcription: "q'viteli" },
  { id: 101, georgian: "იასამნისფერი", english: "Purple", transcription: "iasamnisperi" },
  { id: 102, georgian: "ნაცრისფერი", english: "Gray", transcription: "natsrisperi" },
  { id: 103, georgian: "ყავისფერი", english: "Brown", transcription: "q'avisperi" },
  { id: 104, georgian: "ვარდისფერი", english: "Pink", transcription: "vardisperi" },
  { id: 105, georgian: "ნარინჯისფერი", english: "Orange", transcription: "narinjisperi" },

  // Time and calendar
  { id: 106, georgian: "დრო", english: "Time", transcription: "dro" },
  { id: 107, georgian: "დილა", english: "Morning", transcription: "dila" },
  { id: 108, georgian: "შუადღე", english: "Noon", transcription: "shuadghe" },
  { id: 109, georgian: "საღამო", english: "Evening", transcription: "saghamo" },
  { id: 110, georgian: "ღამე", english: "Night", transcription: "ghame" },
  { id: 111, georgian: "კვირა", english: "Week", transcription: "k'vira" },
  { id: 112, georgian: "თვე", english: "Month", transcription: "tve" },
  { id: 113, georgian: "წელი", english: "Year", transcription: "ts'eli" },
  { id: 114, georgian: "დღეს", english: "Today", transcription: "dghes" },
  { id: 115, georgian: "ხვალ", english: "Tomorrow", transcription: "khval" },
  { id: 116, georgian: "გუშინ", english: "Yesterday", transcription: "gushin" },

  // Days of the week
  { id: 117, georgian: "ორშაბათი", english: "Monday", transcription: "orshabati" },
  { id: 118, georgian: "სამშაბათი", english: "Tuesday", transcription: "samshabati" },
  { id: 119, georgian: "ოთხშაბათი", english: "Wednesday", transcription: "otkhshabati" },
  { id: 120, georgian: "ხუთშაბათი", english: "Thursday", transcription: "khutshabati" },
  { id: 121, georgian: "პარასკევი", english: "Friday", transcription: "p'arask'evi" },
  { id: 122, georgian: "შაბათი", english: "Saturday", transcription: "shabati" },
  { id: 123, georgian: "კვირა", english: "Sunday", transcription: "k'vira" },

  // Transportation
  { id: 124, georgian: "მანქანა", english: "Car", transcription: "mankana" },
  { id: 125, georgian: "ავტობუსი", english: "Bus", transcription: "avt'obusi" },
  { id: 126, georgian: "მატარებელი", english: "Train", transcription: "mat'arebeli" },
  { id: 127, georgian: "თვითმფრინავი", english: "Airplane", transcription: "tvitmprinavi" },
  { id: 128, georgian: "ველოსიპედი", english: "Bicycle", transcription: "velosip'edi" },
  { id: 129, georgian: "ტაქსი", english: "Taxi", transcription: "taksi" },
  { id: 130, georgian: "გზა", english: "Road", transcription: "gza" },
  { id: 131, georgian: "ხიდი", english: "Bridge", transcription: "khidi" },
  { id: 132, georgian: "აეროპორტი", english: "Airport", transcription: "aerop'ort'i" },
  { id: 133, georgian: "სადგური", english: "Station", transcription: "sadguri" },

  // Clothing
  { id: 134, georgian: "ტანსაცმელი", english: "Clothing", transcription: "t'ansatsmeli" },
  { id: 135, georgian: "პერანგი", english: "Shirt", transcription: "p'erangi" },
  { id: 136, georgian: "შარვალი", english: "Pants", transcription: "sharvali" },
  { id: 137, georgian: "კაბა", english: "Dress", transcription: "k'aba" },
  { id: 138, georgian: "ფეხსაცმელი", english: "Shoes", transcription: "pekhsatsmeli" },
  { id: 139, georgian: "ქუდი", english: "Hat", transcription: "kudi" },
  { id: 140, georgian: "ქურთუკი", english: "Jacket", transcription: "kurtuki" },
  { id: 141, georgian: "წინდა", english: "Socks", transcription: "ts'inda" },
  { id: 142, georgian: "ხელთათმანი", english: "Gloves", transcription: "kheltatmani" },
  { id: 143, georgian: "ღვედი", english: "Belt", transcription: "ghvedi" },

  // School and education
  { id: 144, georgian: "სკოლა", english: "School", transcription: "sk'ola" },
  { id: 145, georgian: "უნივერსიტეტი", english: "University", transcription: "universit'et'i" },
  { id: 146, georgian: "წიგნი", english: "Book", transcription: "ts'igni" },
  { id: 147, georgian: "რვეული", english: "Notebook", transcription: "rveuli" },
  { id: 148, georgian: "კალამი", english: "Pen", transcription: "k'alami" },
  { id: 149, georgian: "ფანქარი", english: "Pencil", transcription: "pankari" },
  { id: 150, georgian: "მაგიდა", english: "Table", transcription: "magida" },
  { id: 151, georgian: "სკამი", english: "Chair", transcription: "sk'ami" },
  { id: 152, georgian: "დაფა", english: "Board", transcription: "dapa" },
  { id: 153, georgian: "გაკვეთილი", english: "Lesson", transcription: "gak'vetili" },

  // Technology
  { id: 154, georgian: "კომპიუტერი", english: "Computer", transcription: "k'omp'iut'eri" },
  { id: 155, georgian: "ტელეფონი", english: "Phone", transcription: "t'eleponi" },
  { id: 156, georgian: "ინტერნეტი", english: "Internet", transcription: "int'ernet'i" },
  { id: 157, georgian: "ტელევიზორი", english: "Television", transcription: "t'elevizori" },
  { id: 158, georgian: "რადიო", english: "Radio", transcription: "radio" },
  { id: 159, georgian: "კამერა", english: "Camera", transcription: "k'amera" },
  { id: 160, georgian: "მუსიკა", english: "Music", transcription: "musika" },
  { id: 161, georgian: "ფილმი", english: "Movie", transcription: "pilmi" },
  { id: 162, georgian: "ფოტო", english: "Photo", transcription: "pot'o" },
  { id: 163, georgian: "ვიდეო", english: "Video", transcription: "video" },

  // More common objects
  { id: 164, georgian: "ფული", english: "Money", transcription: "puli" },
  { id: 165, georgian: "ბანკი", english: "Bank", transcription: "bank'i" },
  { id: 166, georgian: "მაღაზია", english: "Store", transcription: "maghazia" },
  { id: 167, georgian: "ბაზარი", english: "Market", transcription: "bazari" },
  { id: 168, georgian: "საავადმყოფო", english: "Hospital", transcription: "saavadmq'opo" },
  { id: 169, georgian: "ეკლესია", english: "Church", transcription: "ek'lesia" },
  { id: 170, georgian: "პარკი", english: "Park", transcription: "p'ark'i" },
  { id: 171, georgian: "ბიბლიოთეკა", english: "Library", transcription: "bibliotek'a" },
  { id: 172, georgian: "მუზეუმი", english: "Museum", transcription: "muzeumi" },
  { id: 173, georgian: "თეატრი", english: "Theater", transcription: "teat'ri" },

  // More animals
  { id: 174, georgian: "ძაღლი", english: "Dog", transcription: "dzaghli" },
  { id: 175, georgian: "კატა", english: "Cat", transcription: "k'at'a" },
  { id: 176, georgian: "ფრინველი", english: "Bird", transcription: "prinveli" },
  { id: 177, georgian: "თევზი", english: "Fish", transcription: "tevzi" },
  { id: 178, georgian: "ძროხა", english: "Cow", transcription: "dzrokha" },
  { id: 179, georgian: "ღორი", english: "Pig", transcription: "ghori" },
  { id: 180, georgian: "ცხვარი", english: "Sheep", transcription: "tskhvari" },
  { id: 181, georgian: "ქათამი", english: "Chicken", transcription: "katami" },
  { id: 182, georgian: "მგელი", english: "Wolf", transcription: "mgeli" },
  { id: 183, georgian: "დათვი", english: "Bear", transcription: "datvi" },

  // More body parts
  { id: 184, georgian: "თავი", english: "Head", transcription: "tavi" },
  { id: 185, georgian: "თვალი", english: "Eye", transcription: "tvali" },
  { id: 186, georgian: "ყური", english: "Ear", transcription: "q'uri" },
  { id: 187, georgian: "პირი", english: "Mouth", transcription: "p'iri" },
  { id: 188, georgian: "კბილი", english: "Tooth", transcription: "k'bili" },
  { id: 189, georgian: "ხელი", english: "Hand", transcription: "kheli" },
  { id: 190, georgian: "ფეხი", english: "Foot", transcription: "pekhi" },
  { id: 191, georgian: "ზურგი", english: "Back", transcription: "zurgi" },
  { id: 192, georgian: "მუცელი", english: "Stomach", transcription: "mutseli" },
  { id: 193, georgian: "გული", english: "Heart", transcription: "guli" },

  // Final words to reach 200
  { id: 194, georgian: "ენა", english: "Language", transcription: "ena" },
  { id: 195, georgian: "სიტყვა", english: "Word", transcription: "sit'q'va" },
  { id: 196, georgian: "ხმა", english: "Voice", transcription: "khma" },
  { id: 197, georgian: "მუშაობა", english: "Work", transcription: "mushaoba" },
  { id: 198, georgian: "თამაში", english: "Game", transcription: "tamashi" },
  { id: 199, georgian: "სპორტი", english: "Sport", transcription: "sp'ort'i" },
  { id: 200, georgian: "ბედნიერება", english: "Happiness", transcription: "bedniereba" }
];

// Split allWords into daily sets of 10
export const dailyWords: GeorgianWord[][] = [];
const chunkSize = 10;
for (let i = 0; i < allWords.length; i += chunkSize) {
  dailyWords.push(allWords.slice(i, i + chunkSize));
}