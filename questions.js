const QUESTIONS = [
  {
    "id": 1,
    "question": "Which country has the most time zones (including overseas territories)?",
    "options": [
      "Russia",
      "France",
      "USA",
      "China"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 2,
    "question": "What is the only country that borders both the Caspian Sea and the Persian Gulf?",
    "options": [
      "Iraq",
      "Saudi Arabia",
      "Iran",
      "Azerbaijan"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 3,
    "question": "The 'Spanish Steps' in Rome were funded by a diplomat from which country?",
    "options": [
      "Spain",
      "France",
      "Portugal",
      "Germany"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 4,
    "question": "Which US airport uses the IATA code 'ORD'?",
    "options": [
      "Orlando International",
      "Chicago O'Hare",
      "New Orleans",
      "Portland"
    ],
    "answer": 1,
    "tags": [
      "Transit",
      "Medium"
    ]
  },
  {
    "id": 5,
    "question": "In which country is the world's highest uninterrupted waterfall, Angel Falls, located?",
    "options": [
      "Brazil",
      "Venezuela",
      "Guyana",
      "Peru"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 6,
    "question": "Which city is situated on two continents?",
    "options": [
      "Istanbul",
      "Cairo",
      "Moscow",
      "Panama City"
    ],
    "answer": 0,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 7,
    "question": "What is the currency of Vietnam?",
    "options": [
      "Baht",
      "Ringgit",
      "Dong",
      "Riel"
    ],
    "answer": 2,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 8,
    "question": "Which country is home to Timbuktu?",
    "options": [
      "Mali",
      "Morocco",
      "Chad",
      "Niger"
    ],
    "answer": 0,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 9,
    "question": "Which of these islands is NOT part of Indonesia?",
    "options": [
      "Java",
      "Sumatra",
      "Borneo",
      "Tasmania"
    ],
    "answer": 3,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 10,
    "question": "What is the smallest country in the world by land area?",
    "options": [
      "Monaco",
      "Nauru",
      "Vatican City",
      "San Marino"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 11,
    "question": "Which South American country has Dutch as its official language?",
    "options": [
      "Suriname",
      "Guyana",
      "Brazil",
      "Bolivia"
    ],
    "answer": 0,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 12,
    "question": "Where would you find the ancient city of Petra?",
    "options": [
      "Egypt",
      "Jordan",
      "Israel",
      "Turkey"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 13,
    "question": "Which European capital city is divided by the Danube River into 'Buda' and 'Pest'?",
    "options": [
      "Vienna",
      "Bucharest",
      "Budapest",
      "Belgrade"
    ],
    "answer": 2,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 14,
    "question": "What is the name of the strait that separates Asia and North America?",
    "options": [
      "Bering Strait",
      "Gibraltar Strait",
      "Strait of Hormuz",
      "Malacca Strait"
    ],
    "answer": 0,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 15,
    "question": "Which country owns the Galapagos Islands?",
    "options": [
      "Peru",
      "Colombia",
      "Ecuador",
      "Chile"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 16,
    "question": "Bhutan is famously known for measuring national success by what metric?",
    "options": [
      "GDP",
      "Gross National Happiness",
      "Carbon Footprint",
      "Literacy Rate"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 17,
    "question": "In which city can you visit the Hagia Sophia?",
    "options": [
      "Athens",
      "Istanbul",
      "Rome",
      "Jerusalem"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 18,
    "question": "Which African country was formerly known as Abyssinia?",
    "options": [
      "Ethiopia",
      "Liberia",
      "Nigeria",
      "Zimbabwe"
    ],
    "answer": 0,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 19,
    "question": "What is the busiest train station in the world (by passenger count)?",
    "options": [
      "Grand Central (USA)",
      "Shinjuku (Japan)",
      "Gare du Nord (France)",
      "Howrah (India)"
    ],
    "answer": 1,
    "tags": [
      "Transit",
      "Hard"
    ]
  },
  {
    "id": 20,
    "question": "The Great Victoria Desert is located in which country?",
    "options": [
      "Canada",
      "USA",
      "Australia",
      "Namibia"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 21,
    "question": "Which country consumes the most coffee per capita?",
    "options": [
      "Italy",
      "USA",
      "Finland",
      "Brazil"
    ],
    "answer": 2,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 22,
    "question": "What is the name of the sea bordered by Jordan, Israel, and Palestine?",
    "options": [
      "Red Sea",
      "Dead Sea",
      "Mediterranean Sea",
      "Black Sea"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 23,
    "question": "In which country can you find the Dolomites?",
    "options": [
      "France",
      "Switzerland",
      "Austria",
      "Italy"
    ],
    "answer": 3,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 24,
    "question": "Which airline is the oldest operating airline in the world?",
    "options": [
      "Qantas",
      "KLM",
      "Avianca",
      "Delta"
    ],
    "answer": 1,
    "tags": [
      "Transit",
      "Hard"
    ]
  },
  {
    "id": 25,
    "question": "The island of Zanzibar is part of which country?",
    "options": [
      "Madagascar",
      "Mozambique",
      "Tanzania",
      "Kenya"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 26,
    "question": "Which country has the longest coastline in the world?",
    "options": [
      "Australia",
      "Russia",
      "Canada",
      "Indonesia"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 27,
    "question": "What is the largest landlocked country in the world?",
    "options": [
      "Kazakhstan",
      "Mongolia",
      "Bolivia",
      "Chad"
    ],
    "answer": 0,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 28,
    "question": "Which city is known as the 'Eternal City'?",
    "options": [
      "Athens",
      "Rome",
      "Jerusalem",
      "Kyoto"
    ],
    "answer": 1,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 29,
    "question": "Mount Kilimanjaro is located in which country?",
    "options": [
      "Kenya",
      "Uganda",
      "Tanzania",
      "Rwanda"
    ],
    "answer": 2,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 30,
    "question": "Which country has a square flag?",
    "options": [
      "Nepal",
      "Switzerland",
      "Vatican City",
      "Belgium"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 31,
    "question": "Which US state has the most active volcanoes?",
    "options": [
      "Hawaii",
      "Alaska",
      "Washington",
      "California"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 32,
    "question": "What is the official language of Belize?",
    "options": [
      "Spanish",
      "English",
      "Portuguese",
      "French"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 33,
    "question": "Where is the 'Forbidden City' located?",
    "options": [
      "Beijing",
      "Shanghai",
      "Kyoto",
      "Bangkok"
    ],
    "answer": 0,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 34,
    "question": "Which country has the most lakes?",
    "options": [
      "Finland",
      "Canada",
      "USA",
      "Sweden"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 35,
    "question": "What is the largest island in the Mediterranean Sea?",
    "options": [
      "Sardinia",
      "Cyprus",
      "Sicily",
      "Crete"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 36,
    "question": "Which city has the nickname 'The Big Apple'?",
    "options": [
      "New York",
      "London",
      "Tokyo",
      "Los Angeles"
    ],
    "answer": 0,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 37,
    "question": "Which country is home to the Kangaroo Island?",
    "options": [
      "New Zealand",
      "Australia",
      "South Africa",
      "Indonesia"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 38,
    "question": "Which country uses the Shilling as currency?",
    "options": [
      "Kenya",
      "Nigeria",
      "Ghana",
      "South Africa"
    ],
    "answer": 0,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 39,
    "question": "The ruin of Chichen Itza is located in which country?",
    "options": [
      "Guatemala",
      "Peru",
      "Mexico",
      "Honduras"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 40,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "options": [
      "China",
      "South Korea",
      "Japan",
      "Thailand"
    ],
    "answer": 2,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 41,
    "question": "What is the capital of Kazakhstan?",
    "options": [
      "Almaty",
      "Tashkent",
      "Astana",
      "Bishkek"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 42,
    "question": "Which country is the largest producer of olive oil?",
    "options": [
      "Italy",
      "Greece",
      "Spain",
      "Turkey"
    ],
    "answer": 2,
    "tags": [
      "Food",
      "Hard"
    ]
  },
  {
    "id": 43,
    "question": "In which country can you find the city of Timbuktu?",
    "options": [
      "Mali",
      "Niger",
      "Sudan",
      "Chad"
    ],
    "answer": 0,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 44,
    "question": "The Matterhorn mountain is located on the border between Switzerland and which other country?",
    "options": [
      "France",
      "Italy",
      "Austria",
      "Germany"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 45,
    "question": "What is the name of the currency used in South Africa?",
    "options": [
      "Rand",
      "Pula",
      "Shilling",
      "Kwacha"
    ],
    "answer": 0,
    "tags": [
      "Money",
      "Medium"
    ]
  },
  {
    "id": 46,
    "question": "Which river flows through Baghdad?",
    "options": [
      "Nile",
      "Euphrates",
      "Tigris",
      "Jordan"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 47,
    "question": "What is the official language of Brazil?",
    "options": [
      "Spanish",
      "Portuguese",
      "French",
      "Italian"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 48,
    "question": "Which country has the most UNESCO World Heritage Sites?",
    "options": [
      "China",
      "Spain",
      "France",
      "Italy"
    ],
    "answer": 3,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 49,
    "question": "The Danakil Depression, one of the hottest places on Earth, is located in which country?",
    "options": [
      "Ethiopia",
      "Somalia",
      "Eritrea",
      "Djibouti"
    ],
    "answer": 0,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 50,
    "question": "Which US state is the only one to grow coffee commercially?",
    "options": [
      "Florida",
      "California",
      "Hawaii",
      "Texas"
    ],
    "answer": 2,
    "tags": [
      "Agriculture",
      "Medium"
    ]
  },
  {
    "id": 51,
    "question": "What is the national animal of Scotland?",
    "options": [
      "Lion",
      "Unicorn",
      "Stag",
      "Dragon"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Fun"
    ]
  },
  {
    "id": 52,
    "question": "Which country has the world's largest population?",
    "options": [
      "China",
      "India",
      "USA",
      "Indonesia"
    ],
    "answer": 1,
    "tags": [
      "Demographics",
      "Hard"
    ]
  },
  {
    "id": 53,
    "question": "What is the name of the airport in Reykjavik, Iceland?",
    "options": [
      "Keflavik",
      "Gardermoen",
      "Arlanda",
      "Vantaa"
    ],
    "answer": 0,
    "tags": [
      "Transit",
      "Hard"
    ]
  },
  {
    "id": 54,
    "question": "Which country is famous for its 'Fairy Chimneys' rock formations?",
    "options": [
      "Turkey",
      "Jordan",
      "USA",
      "China"
    ],
    "answer": 0,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 55,
    "question": "Which of these countries is NOT in the Eurozone (as of 2024)?",
    "options": [
      "Slovakia",
      "Finland",
      "Sweden",
      "Ireland"
    ],
    "answer": 2,
    "tags": [
      "Politics",
      "Hard"
    ]
  },
  {
    "id": 56,
    "question": "What is the deepest lake in the world?",
    "options": [
      "Lake Superior",
      "Lake Victoria",
      "Lake Baikal",
      "Lake Tanganyika"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 57,
    "question": "Which city is known as the 'City of a Hundred Spires'?",
    "options": [
      "Prague",
      "Budapest",
      "Vienna",
      "Krakow"
    ],
    "answer": 0,
    "tags": [
      "Cities",
      "Hard"
    ]
  },
  {
    "id": 58,
    "question": "The 'Skeleton Coast' is located in which African country?",
    "options": [
      "South Africa",
      "Namibia",
      "Angola",
      "Mozambique"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 59,
    "question": "What is the only continent without an active volcano?",
    "options": [
      "Antarctica",
      "Australia",
      "Europe",
      "Africa"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 60,
    "question": "Which country is home to the ancient city of Baalbek?",
    "options": [
      "Syria",
      "Lebanon",
      "Jordan",
      "Iraq"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 61,
    "question": "What is the main ingredient in the Middle Eastern dish 'Hummus'?",
    "options": [
      "Lentils",
      "Chickpeas",
      "Fava Beans",
      "White Beans"
    ],
    "answer": 1,
    "tags": [
      "Food"
    ]
  },
  {
    "id": 62,
    "question": "Which country has the most islands?",
    "options": [
      "Philippines",
      "Indonesia",
      "Sweden",
      "Canada"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 63,
    "question": "What is the capital of New Zealand?",
    "options": [
      "Auckland",
      "Christchurch",
      "Wellington",
      "Queenstown"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 64,
    "question": "Which country is known as the 'Pearl of the Indian Ocean'?",
    "options": [
      "Maldives",
      "Sri Lanka",
      "Seychelles",
      "Mauritius"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 65,
    "question": "Where is the world's largest salt flat, Salar de Uyuni?",
    "options": [
      "Chile",
      "Argentina",
      "Bolivia",
      "Peru"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 66,
    "question": "Which country is the birthplace of the tango dance?",
    "options": [
      "Spain",
      "Argentina",
      "Brazil",
      "Cuba"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 67,
    "question": "What is the longest river in Europe?",
    "options": [
      "Danube",
      "Rhine",
      "Volga",
      "Thames"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 68,
    "question": "Which city hosts the annual Oktoberfest?",
    "options": [
      "Berlin",
      "Hamburg",
      "Munich",
      "Frankfurt"
    ],
    "answer": 2,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 69,
    "question": "Which country is known for the 'Terracotta Army'?",
    "options": [
      "Japan",
      "Vietnam",
      "China",
      "Thailand"
    ],
    "answer": 2,
    "tags": [
      "History"
    ]
  },
  {
    "id": 70,
    "question": "What is the name of the luxury train that runs from Cape Town to Pretoria?",
    "options": [
      "The Blue Train",
      "The Ghan",
      "The Orient Express",
      "The Rocky Mountaineer"
    ],
    "answer": 0,
    "tags": [
      "Transit",
      "Hard"
    ]
  },
  {
    "id": 71,
    "question": "Which country has the most pyramids in the world?",
    "options": [
      "Egypt",
      "Sudan",
      "Mexico",
      "Peru"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 72,
    "question": "What is the only city in the world located on two continents?",
    "options": [
      "Istanbul",
      "Suez",
      "Magnitogorsk",
      "Panama City"
    ],
    "answer": 0,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 73,
    "question": "Which country is the world's largest exporter of Casper the Friendly Ghost's favorite food: Bananas?",
    "options": [
      "Ecuador",
      "India",
      "Brazil",
      "Philippines"
    ],
    "answer": 0,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 74,
    "question": "In which city would you find the 'Spanish Steps'?",
    "options": [
      "Madrid",
      "Barcelona",
      "Rome",
      "Lisbon"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 75,
    "question": "Which Mediterranean island is famous for its prehistoric 'Nuraghe' stone structures?",
    "options": [
      "Sicily",
      "Sardinia",
      "Cyprus",
      "Malta"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 76,
    "question": "What is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 77,
    "question": "Which country is the world's smallest republic?",
    "options": [
      "Vatican City",
      "Monaco",
      "Nauru",
      "San Marino"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 78,
    "question": "Which river flows under the Tower Bridge in London?",
    "options": [
      "Severn",
      "Thames",
      "Trent",
      "Tyne"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 79,
    "question": "In which country is the historical region of Transylvania located?",
    "options": [
      "Hungary",
      "Romania",
      "Bulgaria",
      "Serbia"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Medium"
    ]
  },
  {
    "id": 80,
    "question": "What is the largest country in Africa by land area?",
    "options": [
      "Nigeria",
      "Egypt",
      "Algeria",
      "Sudan"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 81,
    "question": "Which Japanese city was the first to be hit by an atomic bomb?",
    "options": [
      "Nagasaki",
      "Tokyo",
      "Hiroshima",
      "Osaka"
    ],
    "answer": 2,
    "tags": [
      "History"
    ]
  },
  {
    "id": 82,
    "question": "Which country is known as the 'Land of a Thousand Hills'?",
    "options": [
      "Rwanda",
      "Switzerland",
      "Nepal",
      "Ethiopia"
    ],
    "answer": 0,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 83,
    "question": "What is the official currency of Poland?",
    "options": [
      "Euro",
      "Kuna",
      "Zloty",
      "Koruna"
    ],
    "answer": 2,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 84,
    "question": "The 'Golden Gate Bridge' is located in which US city?",
    "options": [
      "Los Angeles",
      "Seattle",
      "San Francisco",
      "San Diego"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 85,
    "question": "Which country is the world's largest producer of saffron?",
    "options": [
      "Spain",
      "India",
      "Iran",
      "Greece"
    ],
    "answer": 2,
    "tags": [
      "Food",
      "Hard"
    ]
  },
  {
    "id": 86,
    "question": "What is the capital of Iceland?",
    "options": [
      "Oslo",
      "Reykjavik",
      "Helsinki",
      "Copenhagen"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 87,
    "question": "In which country would you find the ancient ruins of Carthage?",
    "options": [
      "Egypt",
      "Tunisia",
      "Libya",
      "Morocco"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 88,
    "question": "Which sea separates Europe from Africa?",
    "options": [
      "Red Sea",
      "Caspian Sea",
      "Mediterranean Sea",
      "Black Sea"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 89,
    "question": "Which mountain range separates Europe and Asia?",
    "options": [
      "Alps",
      "Ural Mountains",
      "Pyrenees",
      "Carpathians"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 90,
    "question": "What is the largest city in Brazil?",
    "options": [
      "Rio de Janeiro",
      "Brasília",
      "São Paulo",
      "Salvador"
    ],
    "answer": 2,
    "tags": [
      "Cities",
      "Medium"
    ]
  },
  {
    "id": 91,
    "question": "Which island nation is famous for its 'Lemurs'?",
    "options": [
      "Sri Lanka",
      "Madagascar",
      "Mauritius",
      "Fiji"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 92,
    "question": "What is the official language of the Maldives?",
    "options": [
      "Dhivehi",
      "Sinhala",
      "Tamil",
      "Hindi"
    ],
    "answer": 0,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 93,
    "question": "Which country is the world's largest producer of cocoa?",
    "options": [
      "Ghana",
      "Ivory Coast",
      "Brazil",
      "Indonesia"
    ],
    "answer": 1,
    "tags": [
      "Food",
      "Hard"
    ]
  },
  {
    "id": 94,
    "question": "Which European country is divided into 'Cantons'?",
    "options": [
      "Belgium",
      "Switzerland",
      "Austria",
      "Luxembourg"
    ],
    "answer": 1,
    "tags": [
      "Politics",
      "Medium"
    ]
  },
  {
    "id": 95,
    "question": "In which city is the 'Blue Mosque' located?",
    "options": [
      "Cairo",
      "Casablanca",
      "Istanbul",
      "Dubai"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 96,
    "question": "What is the capital of Canada?",
    "options": [
      "Toronto",
      "Vancouver",
      "Ottawa",
      "Montreal"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 97,
    "question": "Which country has the most natural lakes in the world?",
    "options": [
      "USA",
      "Canada",
      "Russia",
      "Finland"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 98,
    "question": "Which US state was once an independent kingdom?",
    "options": [
      "Texas",
      "Hawaii",
      "Alaska",
      "California"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Medium"
    ]
  },
  {
    "id": 99,
    "question": "What is the narrow body of water that separates England from France?",
    "options": [
      "The English Channel",
      "The North Sea",
      "The Irish Sea",
      "The Bay of Biscay"
    ],
    "answer": 0,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 100,
    "question": "Which country is home to the 'Atacama Desert'?",
    "options": [
      "Peru",
      "Bolivia",
      "Chile",
      "Argentina"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 101,
    "question": "What is the national flower of Japan?",
    "options": [
      "Lotus",
      "Cherry Blossom",
      "Rose",
      "Chrysanthemum"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 102,
    "question": "Which African country has the most official languages (11)?",
    "options": [
      "Nigeria",
      "South Africa",
      "Kenya",
      "Ethiopia"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 103,
    "question": "In which ocean are the Seychelles located?",
    "options": [
      "Atlantic",
      "Pacific",
      "Indian",
      "Arctic"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 104,
    "question": "Which city is known as 'The Pearl of the Adriatic'?",
    "options": [
      "Venice",
      "Split",
      "Dubrovnik",
      "Kotor"
    ],
    "answer": 2,
    "tags": [
      "Cities",
      "Hard"
    ]
  },
  {
    "id": 105,
    "question": "Which country was the first to give women the right to vote?",
    "options": [
      "USA",
      "Finland",
      "New Zealand",
      "Norway"
    ],
    "answer": 2,
    "tags": [
      "History",
      "Hard"
    ]
  },
  {
    "id": 106,
    "question": "What is the main language spoken in Quebec, Canada?",
    "options": [
      "English",
      "French",
      "Spanish",
      "German"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 107,
    "question": "The Great Barrier Reef is off the coast of which Australian state?",
    "options": [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 108,
    "question": "Which country is the world's leading producer of tea?",
    "options": [
      "India",
      "Kenya",
      "China",
      "Sri Lanka"
    ],
    "answer": 2,
    "tags": [
      "Food",
      "Medium"
    ]
  },
  {
    "id": 109,
    "question": "Which city is the administrative capital of South Africa?",
    "options": [
      "Cape Town",
      "Pretoria",
      "Bloemfontein",
      "Johannesburg"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 110,
    "question": "What is the capital of Morocco?",
    "options": [
      "Casablanca",
      "Marrakesh",
      "Rabat",
      "Fes"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 111,
    "question": "Which Scandinavian country is NOT part of the European Union?",
    "options": [
      "Sweden",
      "Denmark",
      "Norway",
      "Finland"
    ],
    "answer": 2,
    "tags": [
      "Politics",
      "Medium"
    ]
  },
  {
    "id": 112,
    "question": "In which country is the 'Leaning Tower of Pisa' located?",
    "options": [
      "France",
      "Spain",
      "Italy",
      "Greece"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 113,
    "question": "Which desert is the largest hot desert in the world?",
    "options": [
      "Gobi",
      "Sahara",
      "Kalahari",
      "Arabian"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 114,
    "question": "What is the currency of Switzerland?",
    "options": [
      "Euro",
      "Swiss Franc",
      "Krone",
      "Pound"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 115,
    "question": "Which country is known as the 'Land of the Thunder Dragon'?",
    "options": [
      "Nepal",
      "Bhutan",
      "Mongolia",
      "Tibet"
    ],
    "answer": 1,
    "tags": [
      "Culture",
      "Hard"
    ]
  },
  {
    "id": 116,
    "question": "What is the largest lake in Africa?",
    "options": [
      "Lake Tanganyika",
      "Lake Malawi",
      "Lake Victoria",
      "Lake Chad"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 117,
    "question": "Which city is home to the 'Louvre' museum?",
    "options": [
      "London",
      "Paris",
      "Berlin",
      "Madrid"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 118,
    "question": "Which country is the smallest in South America by land area?",
    "options": [
      "Uruguay",
      "Guyana",
      "Suriname",
      "Ecuador"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 119,
    "question": "Which river is the longest in the world?",
    "options": [
      "Amazon",
      "Nile",
      "Yangtze",
      "Mississippi"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 120,
    "question": "What is the capital city of Portugal?",
    "options": [
      "Porto",
      "Lisbon",
      "Faro",
      "Coimbra"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 121,
    "question": "In which country would you find the 'Table Mountain'?",
    "options": [
      "Australia",
      "Canada",
      "South Africa",
      "New Zealand"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 122,
    "question": "Which city is the headquarters of the European Union?",
    "options": [
      "Paris",
      "Brussels",
      "Luxembourg",
      "Strasbourg"
    ],
    "answer": 1,
    "tags": [
      "Politics",
      "Medium"
    ]
  },
  {
    "id": 123,
    "question": "What is the only country in the world to have a non-rectangular flag?",
    "options": [
      "Switzerland",
      "Vatican City",
      "Nepal",
      "Belgium"
    ],
    "answer": 2,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 124,
    "question": "Which country has the most volcanoes?",
    "options": [
      "Japan",
      "Indonesia",
      "USA",
      "Iceland"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 125,
    "question": "What is the capital of Thailand?",
    "options": [
      "Phuket",
      "Chiang Mai",
      "Bangkok",
      "Pattaya"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 126,
    "question": "Which island is the largest in the world (excluding continents)?",
    "options": [
      "Australia",
      "Greenland",
      "New Guinea",
      "Borneo"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 127,
    "question": "Which country is known as the 'Emerald Isle'?",
    "options": [
      "Scotland",
      "Ireland",
      "Iceland",
      "New Zealand"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 128,
    "question": "In which country can you visit the ancient city of Pompeii?",
    "options": [
      "Greece",
      "Egypt",
      "Italy",
      "Turkey"
    ],
    "answer": 2,
    "tags": [
      "History"
    ]
  },
  {
    "id": 129,
    "question": "Which US state is the largest by land area?",
    "options": [
      "Texas",
      "California",
      "Alaska",
      "Montana"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 130,
    "question": "Which city is known as the 'City of Love'?",
    "options": [
      "Venice",
      "Paris",
      "Rome",
      "Prague"
    ],
    "answer": 1,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 131,
    "question": "What is the capital of the Philippines?",
    "options": [
      "Cebu",
      "Manila",
      "Davao",
      "Quezon City"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 132,
    "question": "Which country is the world's largest producer of diamonds?",
    "options": [
      "South Africa",
      "Botswana",
      "Russia",
      "Canada"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 133,
    "question": "In which ocean is the island of Bermuda located?",
    "options": [
      "Pacific",
      "Atlantic",
      "Indian",
      "Arctic"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 134,
    "question": "Which country is known for its 'Fiords'?",
    "options": [
      "Sweden",
      "Norway",
      "Finland",
      "Canada"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 135,
    "question": "What is the capital of Kenya?",
    "options": [
      "Mombasa",
      "Nairobi",
      "Kisumu",
      "Nakuru"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 136,
    "question": "Which city was formerly known as 'Saigon'?",
    "options": [
      "Hanoi",
      "Ho Chi Minh City",
      "Da Nang",
      "Hue"
    ],
    "answer": 1,
    "tags": [
      "History",
      "Medium"
    ]
  },
  {
    "id": 137,
    "question": "What is the national dish of Spain?",
    "options": [
      "Tacos",
      "Paella",
      "Risotto",
      "Couscous"
    ],
    "answer": 1,
    "tags": [
      "Food"
    ]
  },
  {
    "id": 138,
    "question": "Which country has the highest average elevation?",
    "options": [
      "Nepal",
      "Switzerland",
      "Bhutan",
      "Bolivia"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 139,
    "question": "What is the capital of Peru?",
    "options": [
      "Cusco",
      "Lima",
      "Arequipa",
      "Iquitos"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 140,
    "question": "Which country is the home of the 'Everglades' national park?",
    "options": [
      "Brazil",
      "Australia",
      "USA",
      "Canada"
    ],
    "answer": 2,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 141,
    "question": "Which city is famous for its 'Canals' and 'Gondolas'?",
    "options": [
      "Amsterdam",
      "Bruges",
      "Venice",
      "Stockholm"
    ],
    "answer": 2,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 142,
    "question": "What is the official language of Egypt?",
    "options": [
      "Coptic",
      "Arabic",
      "Turkish",
      "French"
    ],
    "answer": 1,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 143,
    "question": "Which country is the world's largest producer of wine?",
    "options": [
      "France",
      "Spain",
      "Italy",
      "USA"
    ],
    "answer": 2,
    "tags": [
      "Food",
      "Medium"
    ]
  },
  {
    "id": 144,
    "question": "In which country would you find 'Christ the Redeemer' statue?",
    "options": [
      "Portugal",
      "Mexico",
      "Brazil",
      "Argentina"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 145,
    "question": "What is the capital of Sweden?",
    "options": [
      "Oslo",
      "Stockholm",
      "Copenhagen",
      "Helsinki"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 146,
    "question": "Which sea is the saltiest on Earth?",
    "options": [
      "Caspian Sea",
      "Red Sea",
      "Dead Sea",
      "Mediterranean Sea"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Medium"
    ]
  },
  {
    "id": 147,
    "question": "What is the most spoken language in the world by native speakers?",
    "options": [
      "English",
      "Spanish",
      "Mandarin Chinese",
      "Hindi"
    ],
    "answer": 2,
    "tags": [
      "Culture",
      "Medium"
    ]
  },
  {
    "id": 148,
    "question": "Which country is known as the 'Land of the Maple Leaf'?",
    "options": [
      "Canada",
      "Vermont",
      "Japan",
      "Norway"
    ],
    "answer": 0,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 149,
    "question": "What is the capital of South Korea?",
    "options": [
      "Busan",
      "Incheon",
      "Seoul",
      "Daegu"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 150,
    "question": "Which mountain is the second highest in the world?",
    "options": [
      "Mount Everest",
      "K2",
      "Kangchenjunga",
      "Lhotse"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 151,
    "question": "Which country is the most densely populated in the world?",
    "options": [
      "Singapore",
      "Monaco",
      "Malta",
      "Bahrain"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Hard"
    ]
  },
  {
    "id": 152,
    "question": "What is the capital of Argentina?",
    "options": [
      "Rosario",
      "Cordoba",
      "Buenos Aires",
      "Mendoza"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 153,
    "question": "Which country is the largest in Central America?",
    "options": [
      "Guatemala",
      "Honduras",
      "Nicaragua",
      "Panama"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 154,
    "question": "Which city is known as the 'Windy City'?",
    "options": [
      "New York",
      "Chicago",
      "Boston",
      "Seattle"
    ],
    "answer": 1,
    "tags": [
      "Cities"
    ]
  },
  {
    "id": 155,
    "question": "What is the official currency of Mexico?",
    "options": [
      "Peso",
      "Real",
      "Sol",
      "Bolivar"
    ],
    "answer": 0,
    "tags": [
      "Culture"
    ]
  },
  {
    "id": 156,
    "question": "Which country is home to the 'Great Wall'?",
    "options": [
      "Japan",
      "China",
      "Mongolia",
      "Vietnam"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 157,
    "question": "What is the capital of Turkey?",
    "options": [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Antalya"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 158,
    "question": "Which country is the world's largest producer of silver?",
    "options": [
      "Peru",
      "China",
      "Mexico",
      "Australia"
    ],
    "answer": 2,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 159,
    "question": "In which country is the 'Taj Mahal' located?",
    "options": [
      "Pakistan",
      "India",
      "Bangladesh",
      "Sri Lanka"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 160,
    "question": "What is the capital of Greece?",
    "options": [
      "Thessaloniki",
      "Athens",
      "Patras",
      "Heraklion"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 161,
    "question": "Which country is the birthplace of the 'Olympic Games'?",
    "options": [
      "Italy",
      "Greece",
      "France",
      "UK"
    ],
    "answer": 1,
    "tags": [
      "History"
    ]
  },
  {
    "id": 162,
    "question": "What is the largest island in the Caribbean?",
    "options": [
      "Jamaica",
      "Hispaniola",
      "Cuba",
      "Puerto Rico"
    ],
    "answer": 2,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 163,
    "question": "Which city is the capital of the United Arab Emirates?",
    "options": [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Doha"
    ],
    "answer": 1,
    "tags": [
      "Geography",
      "Medium"
    ]
  },
  {
    "id": 164,
    "question": "Which country is known as the 'Land of Fire and Ice'?",
    "options": [
      "Greenland",
      "Iceland",
      "Norway",
      "New Zealand"
    ],
    "answer": 1,
    "tags": [
      "Nature"
    ]
  },
  {
    "id": 165,
    "question": "What is the capital of Ireland?",
    "options": [
      "Belfast",
      "Cork",
      "Dublin",
      "Galway"
    ],
    "answer": 2,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 166,
    "question": "Which country is the world's largest producer of copper?",
    "options": [
      "USA",
      "Chile",
      "China",
      "Peru"
    ],
    "answer": 1,
    "tags": [
      "Nature",
      "Hard"
    ]
  },
  {
    "id": 167,
    "question": "In which city is the 'Brandenburg Gate' located?",
    "options": [
      "Munich",
      "Berlin",
      "Frankfurt",
      "Hamburg"
    ],
    "answer": 1,
    "tags": [
      "Landmarks"
    ]
  },
  {
    "id": 168,
    "question": "What is the capital of Norway?",
    "options": [
      "Bergen",
      "Oslo",
      "Stavanger",
      "Trondheim"
    ],
    "answer": 1,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 169,
    "question": "Which country is the largest in the world by land area?",
    "options": [
      "Canada",
      "China",
      "USA",
      "Russia"
    ],
    "answer": 3,
    "tags": [
      "Geography"
    ]
  },
  {
    "id": 170,
    "question": "Which city is home to the 'Burj Khalifa', the world's tallest building?",
    "options": [
      "Riyadh",
      "Doha",
      "Dubai",
      "Abu Dhabi"
    ],
    "answer": 2,
    "tags": [
      "Landmarks"
    ]
  }
];