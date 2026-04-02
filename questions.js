const QUESTIONS = [
  {
    "id": 1,
    "question": "Which country has the most time zones (including overseas territories)?",
    "options": ["Russia", "France", "USA", "China"],
    "answer": 1,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 2,
    "question": "What is the only country that borders both the Caspian Sea and the Persian Gulf?",
    "options": ["Iraq", "Saudi Arabia", "Iran", "Azerbaijan"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 3,
    "question": "The 'Spanish Steps' in Rome were funded by a diplomat from which country?",
    "options": ["Spain", "France", "Portugal", "Germany"],
    "answer": 1,
    "tags": ["History", "Hard"]
  },
  {
    "id": 4,
    "question": "Which US airport uses the IATA code 'ORD'?",
    "options": ["Orlando International", "Chicago O'Hare", "New Orleans", "Portland"],
    "answer": 1,
    "tags": ["Transit", "Medium"]
  },
  {
    "id": 5,
    "question": "In which country is the world's highest uninterrupted waterfall, Angel Falls, located?",
    "options": ["Brazil", "Venezuela", "Guyana", "Peru"],
    "answer": 1,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 6,
    "question": "Which city is situated on two continents?",
    "options": ["Istanbul", "Cairo", "Moscow", "Panama City"],
    "answer": 0,
    "tags": ["Geography"]
  },
  {
    "id": 7,
    "question": "What is the currency of Vietnam?",
    "options": ["Baht", "Ringgit", "Dong", "Riel"],
    "answer": 2,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 8,
    "question": "Which country is home to Timbuktu?",
    "options": ["Mali", "Morocco", "Chad", "Niger"],
    "answer": 0,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 9,
    "question": "Which of these islands is NOT part of Indonesia?",
    "options": ["Java", "Sumatra", "Borneo", "Tasmania"],
    "answer": 3,
    "tags": ["Geography"]
  },
  {
    "id": 10,
    "question": "What is the smallest country in the world by land area?",
    "options": ["Monaco", "Nauru", "Vatican City", "San Marino"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 11,
    "question": "Which South American country has Dutch as its official language?",
    "options": ["Suriname", "Guyana", "Brazil", "Bolivia"],
    "answer": 0,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 12,
    "question": "Where would you find the ancient city of Petra?",
    "options": ["Egypt", "Jordan", "Israel", "Turkey"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 13,
    "question": "Which European capital city is divided by the Danube River into 'Buda' and 'Pest'?",
    "options": ["Vienna", "Bucharest", "Budapest", "Belgrade"],
    "answer": 2,
    "tags": ["Cities"]
  },
  {
    "id": 14,
    "question": "What is the name of the strait that separates Asia and North America?",
    "options": ["Bering Strait", "Gibraltar Strait", "Strait of Hormuz", "Malacca Strait"],
    "answer": 0,
    "tags": ["Geography"]
  },
  {
    "id": 15,
    "question": "Which country owns the Galapagos Islands?",
    "options": ["Peru", "Colombia", "Ecuador", "Chile"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 16,
    "question": "Bhutan is famously known for measuring national success by what metric?",
    "options": ["GDP", "Gross National Happiness", "Carbon Footprint", "Literacy Rate"],
    "answer": 1,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 17,
    "question": "In which city can you visit the Hagia Sophia?",
    "options": ["Athens", "Istanbul", "Rome", "Jerusalem"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 18,
    "question": "Which African country was formerly known as Abyssinia?",
    "options": ["Ethiopia", "Liberia", "Nigeria", "Zimbabwe"],
    "answer": 0,
    "tags": ["History", "Hard"]
  },
  {
    "id": 19,
    "question": "What is the busiest train station in the world (by passenger count)?",
    "options": ["Grand Central (USA)", "Shinjuku (Japan)", "Gare du Nord (France)", "Howrah (India)"],
    "answer": 1,
    "tags": ["Transit", "Hard"]
  },
  {
    "id": 20,
    "question": "The Great Victoria Desert is located in which country?",
    "options": ["Canada", "USA", "Australia", "Namibia"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 21,
    "question": "Which country consumes the most coffee per capita?",
    "options": ["Italy", "USA", "Finland", "Brazil"],
    "answer": 2,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 22,
    "question": "What is the name of the sea bordered by Jordan, Israel, and Palestine?",
    "options": ["Red Sea", "Dead Sea", "Mediterranean Sea", "Black Sea"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 23,
    "question": "In which country can you find the Dolomites?",
    "options": ["France", "Switzerland", "Austria", "Italy"],
    "answer": 3,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 24,
    "question": "Which airline is the oldest operating airline in the world?",
    "options": ["Qantas", "KLM", "Avianca", "Delta"],
    "answer": 1,
    "tags": ["Transit", "Hard"]
  },
  {
    "id": 25,
    "question": "The island of Zanzibar is part of which country?",
    "options": ["Madagascar", "Mozambique", "Tanzania", "Kenya"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 26,
    "question": "Which country has the longest coastline in the world?",
    "options": ["Australia", "Russia", "Canada", "Indonesia"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 27,
    "question": "What is the largest landlocked country in the world?",
    "options": ["Kazakhstan", "Mongolia", "Bolivia", "Chad"],
    "answer": 0,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 28,
    "question": "Which city is known as the 'Eternal City'?",
    "options": ["Athens", "Rome", "Jerusalem", "Kyoto"],
    "answer": 1,
    "tags": ["Cities"]
  },
  {
    "id": 29,
    "question": "Mount Kilimanjaro is located in which country?",
    "options": ["Kenya", "Uganda", "Tanzania", "Rwanda"],
    "answer": 2,
    "tags": ["Nature"]
  },
  {
    "id": 30,
    "question": "Which country has a square flag?",
    "options": ["Nepal", "Switzerland", "Vatican City", "Belgium"],
    "answer": 1,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 31,
    "question": "Which US state has the most active volcanoes?",
    "options": ["Hawaii", "Alaska", "Washington", "California"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 32,
    "question": "What is the official language of Belize?",
    "options": ["Spanish", "English", "Portuguese", "French"],
    "answer": 1,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 33,
    "question": "Where is the 'Forbidden City' located?",
    "options": ["Beijing", "Shanghai", "Kyoto", "Bangkok"],
    "answer": 0,
    "tags": ["Landmarks"]
  },
  {
    "id": 34,
    "question": "Which country has the most lakes?",
    "options": ["Finland", "Canada", "USA", "Sweden"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 35,
    "question": "What is the largest island in the Mediterranean Sea?",
    "options": ["Sardinia", "Cyprus", "Sicily", "Crete"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 36,
    "question": "Which city has the nickname 'The Big Apple'?",
    "options": ["New York", "London", "Tokyo", "Los Angeles"],
    "answer": 0,
    "tags": ["Cities"]
  },
  {
    "id": 37,
    "question": "Which country is home to the Kangaroo Island?",
    "options": ["New Zealand", "Australia", "South Africa", "Indonesia"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 38,
    "question": "Which country uses the Shilling as currency?",
    "options": ["Kenya", "Nigeria", "Ghana", "South Africa"],
    "answer": 0,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 39,
    "question": "The ruin of Chichen Itza is located in which country?",
    "options": ["Guatemala", "Peru", "Mexico", "Honduras"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 40,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "options": ["China", "South Korea", "Japan", "Thailand"],
    "answer": 2,
    "tags": ["Culture"]
  },
  {
    "id": 41,
    "question": "What is the capital of Kazakhstan?",
    "options": ["Almaty", "Tashkent", "Astana", "Bishkek"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 42,
    "question": "Which country is the largest producer of olive oil?",
    "options": ["Italy", "Greece", "Spain", "Turkey"],
    "answer": 2,
    "tags": ["Food", "Hard"]
  },
  {
    "id": 43,
    "question": "The Matterhorn mountain is located on the border between Switzerland and which other country?",
    "options": ["France", "Italy", "Austria", "Germany"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 44,
    "question": "What is the name of the currency used in South Africa?",
    "options": ["Rand", "Pula", "Shilling", "Kwacha"],
    "answer": 0,
    "tags": ["Money", "Medium"]
  },
  {
    "id": 45,
    "question": "Which river flows through Baghdad?",
    "options": ["Nile", "Euphrates", "Tigris", "Jordan"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 46,
    "question": "What is the official language of Brazil?",
    "options": ["Spanish", "Portuguese", "French", "Italian"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 47,
    "question": "Which country has the most UNESCO World Heritage Sites?",
    "options": ["China", "Spain", "France", "Italy"],
    "answer": 3,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 48,
    "question": "The Danakil Depression, one of the hottest places on Earth, is located in which country?",
    "options": ["Ethiopia", "Somalia", "Eritrea", "Djibouti"],
    "answer": 0,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 49,
    "question": "Which US state is the only one to grow coffee commercially?",
    "options": ["Florida", "California", "Hawaii", "Texas"],
    "answer": 2,
    "tags": ["Agriculture", "Medium"]
  },
  {
    "id": 50,
    "question": "What is the national animal of Scotland?",
    "options": ["Lion", "Unicorn", "Stag", "Dragon"],
    "answer": 1,
    "tags": ["Culture", "Fun"]
  },
  {
    "id": 51,
    "question": "Which country has the world's largest population?",
    "options": ["China", "India", "USA", "Indonesia"],
    "answer": 1,
    "tags": ["Demographics", "Hard"]
  },
  {
    "id": 52,
    "question": "What is the name of the airport in Reykjavik, Iceland?",
    "options": ["Keflavik", "Gardermoen", "Arlanda", "Vantaa"],
    "answer": 0,
    "tags": ["Transit", "Hard"]
  },
  {
    "id": 53,
    "question": "Which country is famous for its 'Fairy Chimneys' rock formations?",
    "options": ["Turkey", "Jordan", "USA", "China"],
    "answer": 0,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 54,
    "question": "Which of these countries is NOT in the Eurozone (as of 2024)?",
    "options": ["Slovakia", "Finland", "Sweden", "Ireland"],
    "answer": 2,
    "tags": ["Politics", "Hard"]
  },
  {
    "id": 55,
    "question": "What is the deepest lake in the world?",
    "options": ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Tanganyika"],
    "answer": 2,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 56,
    "question": "Which city is known as the 'City of a Hundred Spires'?",
    "options": ["Prague", "Budapest", "Vienna", "Krakow"],
    "answer": 0,
    "tags": ["Cities", "Hard"]
  },
  {
    "id": 57,
    "question": "The 'Skeleton Coast' is located in which African country?",
    "options": ["South Africa", "Namibia", "Angola", "Mozambique"],
    "answer": 1,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 58,
    "question": "What is the only continent without an active volcano?",
    "options": ["Antarctica", "Australia", "Europe", "Africa"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 59,
    "question": "Which country is home to the ancient city of Baalbek?",
    "options": ["Syria", "Lebanon", "Jordan", "Iraq"],
    "answer": 1,
    "tags": ["History", "Hard"]
  },
  {
    "id": 60,
    "question": "What is the main ingredient in the Middle Eastern dish 'Hummus'?",
    "options": ["Lentils", "Chickpeas", "Fava Beans", "White Beans"],
    "answer": 1,
    "tags": ["Food"]
  },
  {
    "id": 61,
    "question": "Which country has the most islands?",
    "options": ["Philippines", "Indonesia", "Sweden", "Canada"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 62,
    "question": "What is the capital of New Zealand?",
    "options": ["Auckland", "Christchurch", "Wellington", "Queenstown"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 63,
    "question": "Which country is known as the 'Pearl of the Indian Ocean'?",
    "options": ["Maldives", "Sri Lanka", "Seychelles", "Mauritius"],
    "answer": 1,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 64,
    "question": "Where is the world's largest salt flat, Salar de Uyuni?",
    "options": ["Chile", "Argentina", "Bolivia", "Peru"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 65,
    "question": "Which country is the birthplace of the tango dance?",
    "options": ["Spain", "Argentina", "Brazil", "Cuba"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 66,
    "question": "What is the longest river in Europe?",
    "options": ["Danube", "Rhine", "Volga", "Thames"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 67,
    "question": "Which city hosts the annual Oktoberfest?",
    "options": ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    "answer": 2,
    "tags": ["Culture"]
  },
  {
    "id": 68,
    "question": "Which country is known for the 'Terracotta Army'?",
    "options": ["Japan", "Vietnam", "China", "Thailand"],
    "answer": 2,
    "tags": ["History"]
  },
  {
    "id": 69,
    "question": "What is the name of the luxury train that runs from Cape Town to Pretoria?",
    "options": ["The Blue Train", "The Ghan", "The Orient Express", "The Rocky Mountaineer"],
    "answer": 0,
    "tags": ["Transit", "Hard"]
  },
  {
    "id": 70,
    "question": "Which country has the most pyramids in the world?",
    "options": ["Egypt", "Sudan", "Mexico", "Peru"],
    "answer": 1,
    "tags": ["History", "Hard"]
  },
  {
    "id": 71,
    "question": "Which country is the world's largest exporter of Bananas?",
    "options": ["Ecuador", "India", "Brazil", "Philippines"],
    "answer": 0,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 72,
    "question": "In which city would you find the 'Spanish Steps'?",
    "options": ["Madrid", "Barcelona", "Rome", "Lisbon"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 73,
    "question": "Which Mediterranean island is famous for its prehistoric 'Nuraghe' stone structures?",
    "options": ["Sicily", "Sardinia", "Cyprus", "Malta"],
    "answer": 1,
    "tags": ["History", "Hard"]
  },
  {
    "id": 74,
    "question": "What is the capital city of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 75,
    "question": "Which country is the world's smallest republic?",
    "options": ["Vatican City", "Monaco", "Nauru", "San Marino"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 76,
    "question": "Which river flows under the Tower Bridge in London?",
    "options": ["Severn", "Thames", "Trent", "Tyne"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 77,
    "question": "In which country is the historical region of Transylvania located?",
    "options": ["Hungary", "Romania", "Bulgaria", "Serbia"],
    "answer": 1,
    "tags": ["History", "Medium"]
  },
  {
    "id": 78,
    "question": "What is the largest country in Africa by land area?",
    "options": ["Nigeria", "Egypt", "Algeria", "Sudan"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 79,
    "question": "Which Japanese city was the first to be hit by an atomic bomb?",
    "options": ["Nagasaki", "Tokyo", "Hiroshima", "Osaka"],
    "answer": 2,
    "tags": ["History"]
  },
  {
    "id": 80,
    "question": "Which country is known as the 'Land of a Thousand Hills'?",
    "options": ["Rwanda", "Switzerland", "Nepal", "Ethiopia"],
    "answer": 0,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 81,
    "question": "What is the official currency of Poland?",
    "options": ["Euro", "Kuna", "Zloty", "Koruna"],
    "answer": 2,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 82,
    "question": "The 'Golden Gate Bridge' is located in which US city?",
    "options": ["Los Angeles", "Seattle", "San Francisco", "San Diego"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 83,
    "question": "Which country is the world's largest producer of saffron?",
    "options": ["Spain", "India", "Iran", "Greece"],
    "answer": 2,
    "tags": ["Food", "Hard"]
  },
  {
    "id": 84,
    "question": "What is the capital of Iceland?",
    "options": ["Oslo", "Reykjavik", "Helsinki", "Copenhagen"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 85,
    "question": "In which country would you find the ancient ruins of Carthage?",
    "options": ["Egypt", "Tunisia", "Libya", "Morocco"],
    "answer": 1,
    "tags": ["History", "Hard"]
  },
  {
    "id": 86,
    "question": "Which sea separates Europe from Africa?",
    "options": ["Red Sea", "Caspian Sea", "Mediterranean Sea", "Black Sea"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 87,
    "question": "Which mountain range separates Europe and Asia?",
    "options": ["Alps", "Ural Mountains", "Pyrenees", "Carpathians"],
    "answer": 1,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 88,
    "question": "What is the largest city in Brazil?",
    "options": ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    "answer": 2,
    "tags": ["Cities", "Medium"]
  },
  {
    "id": 89,
    "question": "Which island nation is famous for its 'Lemurs'?",
    "options": ["Sri Lanka", "Madagascar", "Mauritius", "Fiji"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 90,
    "question": "What is the official language of the Maldives?",
    "options": ["Dhivehi", "Sinhala", "Tamil", "Hindi"],
    "answer": 0,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 91,
    "question": "Which country is the world's largest producer of cocoa?",
    "options": ["Ghana", "Ivory Coast", "Brazil", "Indonesia"],
    "answer": 1,
    "tags": ["Food", "Hard"]
  },
  {
    "id": 92,
    "question": "Which European country is divided into 'Cantons'?",
    "options": ["Belgium", "Switzerland", "Austria", "Luxembourg"],
    "answer": 1,
    "tags": ["Politics", "Medium"]
  },
  {
    "id": 93,
    "question": "In which city is the 'Blue Mosque' located?",
    "options": ["Cairo", "Casablanca", "Istanbul", "Dubai"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 94,
    "question": "What is the capital of Canada?",
    "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 95,
    "question": "Which US state was once an independent kingdom?",
    "options": ["Texas", "Hawaii", "Alaska", "California"],
    "answer": 1,
    "tags": ["History", "Medium"]
  },
  {
    "id": 96,
    "question": "What is the narrow body of water that separates England from France?",
    "options": ["The English Channel", "The North Sea", "The Irish Sea", "The Bay of Biscay"],
    "answer": 0,
    "tags": ["Geography"]
  },
  {
    "id": 97,
    "question": "Which country is home to the 'Atacama Desert'?",
    "options": ["Peru", "Bolivia", "Chile", "Argentina"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 98,
    "question": "What is the national flower of Japan?",
    "options": ["Lotus", "Cherry Blossom", "Rose", "Chrysanthemum"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 99,
    "question": "Which African country has the most official languages (11)?",
    "options": ["Nigeria", "South Africa", "Kenya", "Ethiopia"],
    "answer": 1,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 100,
    "question": "In which ocean are the Seychelles located?",
    "options": ["Atlantic", "Pacific", "Indian", "Arctic"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 101,
    "question": "Which city is known as 'The Pearl of the Adriatic'?",
    "options": ["Venice", "Split", "Dubrovnik", "Kotor"],
    "answer": 2,
    "tags": ["Cities", "Hard"]
  },
  {
    "id": 102,
    "question": "Which country was the first to give women the right to vote?",
    "options": ["USA", "Finland", "New Zealand", "Norway"],
    "answer": 2,
    "tags": ["History", "Hard"]
  },
  {
    "id": 103,
    "question": "What is the main language spoken in Quebec, Canada?",
    "options": ["English", "French", "Spanish", "German"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 104,
    "question": "The Great Barrier Reef is off the coast of which Australian state?",
    "options": ["New South Wales", "Victoria", "Queensland", "Western Australia"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 105,
    "question": "Which country is the world's leading producer of tea?",
    "options": ["India", "Kenya", "China", "Sri Lanka"],
    "answer": 2,
    "tags": ["Food", "Medium"]
  },
  {
    "id": 106,
    "question": "Which city is the administrative capital of South Africa?",
    "options": ["Cape Town", "Pretoria", "Bloemfontein", "Johannesburg"],
    "answer": 1,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 107,
    "question": "What is the capital of Morocco?",
    "options": ["Casablanca", "Marrakesh", "Rabat", "Fes"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 108,
    "question": "Which Scandinavian country is NOT part of the European Union?",
    "options": ["Sweden", "Denmark", "Norway", "Finland"],
    "answer": 2,
    "tags": ["Politics", "Medium"]
  },
  {
    "id": 109,
    "question": "In which country is the 'Leaning Tower of Pisa' located?",
    "options": ["France", "Spain", "Italy", "Greece"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 110,
    "question": "Which desert is the largest hot desert in the world?",
    "options": ["Gobi", "Sahara", "Kalahari", "Arabian"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 111,
    "question": "What is the currency of Switzerland?",
    "options": ["Euro", "Swiss Franc", "Krone", "Pound"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 112,
    "question": "Which country is known as the 'Land of the Thunder Dragon'?",
    "options": ["Nepal", "Bhutan", "Mongolia", "Tibet"],
    "answer": 1,
    "tags": ["Culture", "Hard"]
  },
  {
    "id": 113,
    "question": "What is the largest lake in Africa?",
    "options": ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 114,
    "question": "Which city is home to the 'Louvre' museum?",
    "options": ["London", "Paris", "Berlin", "Madrid"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 115,
    "question": "Which country is the smallest in South America by land area?",
    "options": ["Uruguay", "Guyana", "Suriname", "Ecuador"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 116,
    "question": "Which river is the longest in the world?",
    "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 117,
    "question": "What is the capital city of Portugal?",
    "options": ["Porto", "Lisbon", "Faro", "Coimbra"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 118,
    "question": "In which country would you find the 'Table Mountain'?",
    "options": ["Australia", "Canada", "South Africa", "New Zealand"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 119,
    "question": "Which city is the headquarters of the European Union?",
    "options": ["Paris", "Brussels", "Luxembourg", "Strasbourg"],
    "answer": 1,
    "tags": ["Politics", "Medium"]
  },
  {
    "id": 120,
    "question": "What is the only country in the world to have a non-rectangular flag?",
    "options": ["Switzerland", "Vatican City", "Nepal", "Belgium"],
    "answer": 2,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 121,
    "question": "Which country has the most volcanoes?",
    "options": ["Japan", "Indonesia", "USA", "Iceland"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 122,
    "question": "What is the capital of Thailand?",
    "options": ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 123,
    "question": "Which island is the largest in the world (excluding continents)?",
    "options": ["Australia", "Greenland", "New Guinea", "Borneo"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 124,
    "question": "Which country is known as the 'Emerald Isle'?",
    "options": ["Scotland", "Ireland", "Iceland", "New Zealand"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 125,
    "question": "In which country can you visit the ancient city of Pompeii?",
    "options": ["Greece", "Egypt", "Italy", "Turkey"],
    "answer": 2,
    "tags": ["History"]
  },
  {
    "id": 126,
    "question": "Which US state is the largest by land area?",
    "options": ["Texas", "California", "Alaska", "Montana"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 127,
    "question": "Which city is known as the 'City of Love'?",
    "options": ["Venice", "Paris", "Rome", "Prague"],
    "answer": 1,
    "tags": ["Cities"]
  },
  {
    "id": 128,
    "question": "What is the capital of the Philippines?",
    "options": ["Cebu", "Manila", "Davao", "Quezon City"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 129,
    "question": "Which country is the world's largest producer of diamonds?",
    "options": ["South Africa", "Botswana", "Russia", "Canada"],
    "answer": 2,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 130,
    "question": "In which ocean is the island of Bermuda located?",
    "options": ["Pacific", "Atlantic", "Indian", "Arctic"],
    "answer": 1,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 131,
    "question": "Which country is known for its 'Fiords'?",
    "options": ["Sweden", "Norway", "Finland", "Canada"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 132,
    "question": "What is the capital of Kenya?",
    "options": ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 133,
    "question": "Which city was formerly known as 'Saigon'?",
    "options": ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hue"],
    "answer": 1,
    "tags": ["History", "Medium"]
  },
  {
    "id": 134,
    "question": "What is the national dish of Spain?",
    "options": ["Tacos", "Paella", "Risotto", "Couscous"],
    "answer": 1,
    "tags": ["Food"]
  },
  {
    "id": 135,
    "question": "Which country has the highest average elevation?",
    "options": ["Nepal", "Switzerland", "Bhutan", "Bolivia"],
    "answer": 2,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 136,
    "question": "What is the capital of Peru?",
    "options": ["Cusco", "Lima", "Arequipa", "Iquitos"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 137,
    "question": "Which country is the home of the 'Everglades' national park?",
    "options": ["Brazil", "Australia", "USA", "Canada"],
    "answer": 2,
    "tags": ["Nature"]
  },
  {
    "id": 138,
    "question": "Which city is famous for its 'Canals' and 'Gondolas'?",
    "options": ["Amsterdam", "Bruges", "Venice", "Stockholm"],
    "answer": 2,
    "tags": ["Cities"]
  },
  {
    "id": 139,
    "question": "What is the official language of Egypt?",
    "options": ["Coptic", "Arabic", "Turkish", "French"],
    "answer": 1,
    "tags": ["Culture"]
  },
  {
    "id": 140,
    "question": "Which country is the world's largest producer of wine?",
    "options": ["France", "Spain", "Italy", "USA"],
    "answer": 2,
    "tags": ["Food", "Medium"]
  },
  {
    "id": 141,
    "question": "In which country would you find 'Christ the Redeemer' statue?",
    "options": ["Portugal", "Mexico", "Brazil", "Argentina"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 142,
    "question": "What is the capital of Sweden?",
    "options": ["Oslo", "Stockholm", "Copenhagen", "Helsinki"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 143,
    "question": "Which sea is the saltiest on Earth?",
    "options": ["Caspian Sea", "Red Sea", "Dead Sea", "Mediterranean Sea"],
    "answer": 2,
    "tags": ["Nature", "Medium"]
  },
  {
    "id": 144,
    "question": "What is the most spoken language in the world by native speakers?",
    "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    "answer": 2,
    "tags": ["Culture", "Medium"]
  },
  {
    "id": 145,
    "question": "Which country is known as the 'Land of the Maple Leaf'?",
    "options": ["Canada", "Vermont", "Japan", "Norway"],
    "answer": 0,
    "tags": ["Culture"]
  },
  {
    "id": 146,
    "question": "What is the capital of South Korea?",
    "options": ["Busan", "Incheon", "Seoul", "Daegu"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 147,
    "question": "Which mountain is the second highest in the world?",
    "options": ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 148,
    "question": "Which country is the most densely populated in the world?",
    "options": ["Singapore", "Monaco", "Malta", "Bahrain"],
    "answer": 1,
    "tags": ["Geography", "Hard"]
  },
  {
    "id": 149,
    "question": "What is the capital of Argentina?",
    "options": ["Rosario", "Cordoba", "Buenos Aires", "Mendoza"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 150,
    "question": "Which country is the largest in Central America?",
    "options": ["Guatemala", "Honduras", "Nicaragua", "Panama"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 151,
    "question": "Which city is known as the 'Windy City'?",
    "options": ["New York", "Chicago", "Boston", "Seattle"],
    "answer": 1,
    "tags": ["Cities"]
  },
  {
    "id": 152,
    "question": "What is the official currency of Mexico?",
    "options": ["Peso", "Real", "Sol", "Bolivar"],
    "answer": 0,
    "tags": ["Culture"]
  },
  {
    "id": 153,
    "question": "Which country is home to the 'Great Wall'?",
    "options": ["Japan", "China", "Mongolia", "Vietnam"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 154,
    "question": "What is the capital of Turkey?",
    "options": ["Istanbul", "Ankara", "Izmir", "Antalya"],
    "answer": 1,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 155,
    "question": "Which country is the world's largest producer of silver?",
    "options": ["Peru", "China", "Mexico", "Australia"],
    "answer": 2,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 156,
    "question": "In which country is the 'Taj Mahal' located?",
    "options": ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 157,
    "question": "What is the capital of Greece?",
    "options": ["Thessaloniki", "Athens", "Patras", "Heraklion"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 158,
    "question": "Which country is the birthplace of the 'Olympic Games'?",
    "options": ["Italy", "Greece", "France", "UK"],
    "answer": 1,
    "tags": ["History"]
  },
  {
    "id": 159,
    "question": "What is the largest island in the Caribbean?",
    "options": ["Jamaica", "Hispaniola", "Cuba", "Puerto Rico"],
    "answer": 2,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 160,
    "question": "Which city is the capital of the United Arab Emirates?",
    "options": ["Dubai", "Abu Dhabi", "Sharjah", "Doha"],
    "answer": 1,
    "tags": ["Geography", "Medium"]
  },
  {
    "id": 161,
    "question": "Which country is known as the 'Land of Fire and Ice'?",
    "options": ["Greenland", "Iceland", "Norway", "New Zealand"],
    "answer": 1,
    "tags": ["Nature"]
  },
  {
    "id": 162,
    "question": "What is the capital of Ireland?",
    "options": ["Belfast", "Cork", "Dublin", "Galway"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 163,
    "question": "Which country is the world's largest producer of copper?",
    "options": ["USA", "Chile", "China", "Peru"],
    "answer": 1,
    "tags": ["Nature", "Hard"]
  },
  {
    "id": 164,
    "question": "In which city is the 'Brandenburg Gate' located?",
    "options": ["Munich", "Berlin", "Frankfurt", "Hamburg"],
    "answer": 1,
    "tags": ["Landmarks"]
  },
  {
    "id": 165,
    "question": "What is the capital of Norway?",
    "options": ["Bergen", "Oslo", "Stavanger", "Trondheim"],
    "answer": 1,
    "tags": ["Geography"]
  },
  {
    "id": 166,
    "question": "Which country is the largest in the world by land area?",
    "options": ["Canada", "China", "USA", "Russia"],
    "answer": 3,
    "tags": ["Geography"]
  },
  {
    "id": 167,
    "question": "Which city is home to the 'Burj Khalifa', the world's tallest building?",
    "options": ["Riyadh", "Doha", "Dubai", "Abu Dhabi"],
    "answer": 2,
    "tags": ["Landmarks"]
  },
  {
    "id": 168,
    "question": "What is the name of the oldest continuously inhabited city in the world?",
    "options": ["Damascus", "Jericho", "Athens", "Rome"],
    "answer": 0,
    "tags": ["History", "Cities", "Travel"]
  },
  {
    "id": 169,
    "question": "Which island is known as the 'Island of the Gods'?",
    "options": ["Bali", "Tahiti", "Jeju", "Santorini"],
    "answer": 0,
    "tags": ["Culture", "Travel"]
  },
  {
    "id": 170,
    "question": "What is the only country in the world that is also a continent?",
    "options": ["Brazil", "Russia", "Australia", "India"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 171,
    "question": "What is the name of the famous red desert in Namibia?",
    "options": ["Sahara", "Kalahari", "Namib", "Atacama"],
    "answer": 2,
    "tags": ["Nature", "Travel"]
  },
  {
    "id": 172,
    "question": "Which country is home to the world's largest religious monument, Angkor Wat?",
    "options": ["Thailand", "Vietnam", "Cambodia", "Laos"],
    "answer": 2,
    "tags": ["Landmarks", "History"]
  },
  {
    "id": 173,
    "question": "What is the name of the strait that separates Australia and Tasmania?",
    "options": ["Bering Strait", "Bass Strait", "Cook Strait", "Torres Strait"],
    "answer": 1,
    "tags": ["Geography", "Transit"]
  },
  {
    "id": 174,
    "question": "Which European city is often called the 'Venice of the North'?",
    "options": ["London", "Amsterdam", "Berlin", "Copenhagen"],
    "answer": 1,
    "tags": ["Cities", "Travel"]
  },
  {
    "id": 175,
    "question": "What is the names of the four main islands of Japan?",
    "options": ["Honshu, Hokkaido, Kyushu, Shikoku", "Honshu, Okinawa, Kyushu, Shikoku", "Honshu, Hokkaido, Taiwan, Shikoku", "Hokkaido, Kyushu, Shikoku, Sakhalin"],
    "answer": 0,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 176,
    "question": "In which country would you find the ancient city of Machu Picchu?",
    "options": ["Chile", "Colombia", "Peru", "Ecuador"],
    "answer": 2,
    "tags": ["Landmarks", "History"]
  },
  {
    "id": 177,
    "question": "Which US state is known as the 'Grand Canyon State'?",
    "options": ["Nevada", "Utah", "Arizona", "New Mexico"],
    "answer": 2,
    "tags": ["Geography", "Travel"]
  },
  {
    "id": 178,
    "question": "Which country is the smallest in the world by population?",
    "options": ["Monaco", "Tuvalu", "Vatican City", "San Marino"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 179,
    "question": "What is the most populous city in Africa?",
    "options": ["Cairo", "Lagos", "Johannesburg", "Nairobi"],
    "answer": 1,
    "tags": ["Cities", "Fun Facts"]
  },
  {
    "id": 180,
    "question": "Which island is known for its unique giant stone statues called Moai?",
    "options": ["Tahiti", "Hawaii", "Easter Island", "Fiji"],
    "answer": 2,
    "tags": ["Landmarks", "Travel"]
  },
  {
    "id": 181,
    "question": "What is the longest river in Asia?",
    "options": ["Yellow River", "Mekong", "Yangtze", "Indus"],
    "answer": 2,
    "tags": ["Nature", "Geography"]
  },
  {
    "id": 182,
    "question": "In which city can you see the 'Little Mermaid' statue?",
    "options": ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    "answer": 2,
    "tags": ["Landmarks", "Culture"]
  },
  {
    "id": 183,
    "question": "What is the name of the desert that covers most of Northern Africa?",
    "options": ["Gobi", "Sahara", "Kalahari", "Mojave"],
    "answer": 1,
    "tags": ["Nature", "Geography"]
  },
  {
    "id": 184,
    "question": "Which country is both a major exporter of wool and home to more sheep than people?",
    "options": ["New Zealand", "Australia", "Argentina", "South Africa"],
    "answer": 0,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 185,
    "question": "What is the currency used in Thailand?",
    "options": ["Yuan", "Yen", "Baht", "Ringgit"],
    "answer": 2,
    "tags": ["Culture", "Travel"]
  },
  {
    "id": 186,
    "question": "In which city is the famous 'Prado Museum' located?",
    "options": ["Barcelona", "Madrid", "Seville", "Valencia"],
    "answer": 1,
    "tags": ["Culture", "Travel", "Cities"]
  },
  {
    "id": 187,
    "question": "What is the name of the main island of the Philippines where the capital Manila is located?",
    "options": ["Mindanao", "Visayas", "Luzon", "Palawan"],
    "answer": 2,
    "tags": ["Geography"]
  },
  {
    "id": 188,
    "question": "What is the name of the active volcano that erupted in 1980 in the US state of Washington?",
    "options": ["Mount Rainier", "Mount Hood", "Mount St. Helens", "Mount Baker"],
    "answer": 2,
    "tags": ["Nature", "Fun Facts"]
  },
  {
    "id": 189,
    "question": "Which country has the most population in Europe (excluding Russia)?",
    "options": ["France", "Germany", "United Kingdom", "Italy"],
    "answer": 1,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 190,
    "question": "In which city can you see the 'Empire State Building'?",
    "options": ["Los Angeles", "Chicago", "New York City", "San Francisco"],
    "answer": 2,
    "tags": ["Landmarks", "Cities", "Travel"]
  },
  {
    "id": 191,
    "question": "Which country is renowned for its 'Swiss Army Knives'?",
    "options": ["Sweden", "Switzerland", "Denmark", "Austria"],
    "answer": 1,
    "tags": ["Culture", "Fun Facts"]
  },
  {
    "id": 192,
    "question": "Which city is generally considered the southernmost city in the world?",
    "options": ["Punta Arenas", "Ushuaia", "Wellington", "Cape Town"],
    "answer": 1,
    "tags": ["Geography", "Travel", "Fun Facts"]
  },
  {
    "id": 193,
    "question": "What is the longest train journey in the world without changing trains?",
    "options": ["Trans-Mongolian Railway", "Trans-Siberian Railway", "Indian Pacific", "Ghan"],
    "answer": 1,
    "tags": ["Transit", "Travel", "Fun Facts"]
  },
  {
    "id": 194,
    "question": "Which country is situated uniquely on the Equator and the Prime Meridian?",
    "options": ["Kenya", "Ecuador", "None, it's in the ocean", "Ghana"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 195,
    "question": "What is the highest commercial airport in the world?",
    "options": ["El Alto International, Bolivia", "Daocheng Yading, China", "Lhasa Gonggar, China", "Cusco, Peru"],
    "answer": 1,
    "tags": ["Transit", "Geography"]
  },
  {
    "id": 196,
    "question": "Which airline is the largest in the world by the number of aircraft?",
    "options": ["Delta Air Lines", "American Airlines", "United Airlines", "Emirates"],
    "answer": 1,
    "tags": ["Transit", "Fun Facts"]
  },
  {
    "id": 197,
    "question": "What is the shortest commercial runway in the world?",
    "options": ["Saba (Juancho E. Yrausquin)", "St. Barthélemy (Gustaf III)", "Lukla (Tenzing-Hillary)", "Courchevel"],
    "answer": 0,
    "tags": ["Transit", "Fun Facts"]
  },
  {
    "id": 198,
    "question": "Which country has no public railway network?",
    "options": ["Iceland", "New Zealand", "Switzerland", "Monaco"],
    "answer": 0,
    "tags": ["Transit", "Geography"]
  },
  {
    "id": 199,
    "question": "What is the longest road tunnel in the world?",
    "options": ["Seikan Tunnel", "Channel Tunnel", "Laerdal Tunnel", "Zhongnanshan Tunnel"],
    "answer": 2,
    "tags": ["Transit", "Landmarks"]
  },
  {
    "id": 200,
    "question": "What is the world's most visited monument in Paris (excluding the Eiffel Tower)?",
    "options": ["Louvre Museum", "Notre-Dame Cathedral", "Palace of Versailles", "Arc de Triomphe"],
    "answer": 1,
    "tags": ["Travel", "Landmarks"]
  },
  {
    "id": 201,
    "question": "Which lake is often referred to as 'The Pearl of Siberia'?",
    "options": ["Lake Ladoga", "Lake Baikal", "Lake Onega", "Caspian Sea"],
    "answer": 1,
    "tags": ["Nature", "Geography"]
  },
  {
    "id": 202,
    "question": "Which country boasts the steepest street in the world?",
    "options": ["USA (San Francisco)", "New Zealand (Dunedin)", "Wales", "Brazil"],
    "answer": 1,
    "tags": ["Fun Facts", "Travel"]
  },
  {
    "id": 203,
    "question": "What is the maximum number of passport stamps you can fit on a single page of a standard US passport?",
    "options": ["2", "4", "6", "8"],
    "answer": 1,
    "tags": ["Travel", "Fun Facts"]
  },
  {
    "id": 204,
    "question": "What is the deepest metro station in the world?",
    "options": ["Arsenalna (Kyiv)", "Admirteyskaya (St. Petersburg)", "Washington Park (Portland)", "Hampstead (London)"],
    "answer": 0,
    "tags": ["Transit", "Landmarks"]
  },
  {
    "id": 205,
    "question": "Which country is the only one in the world without a single river?",
    "options": ["Bahrain", "Malta", "Saudi Arabia", "Kuwait"],
    "answer": 2,
    "tags": ["Nature", "Fun Facts"]
  },
  {
    "id": 206,
    "question": "In which city can you ride the longest cable car system in the world?",
    "options": ["La Paz (Bolivia)", "Medellín (Colombia)", "Grenoble (France)", "San Francisco (USA)"],
    "answer": 0,
    "tags": ["Transit", "Travel"]
  },
  {
    "id": 207,
    "question": "Which ocean is home to the area known as the 'Bermuda Triangle'?",
    "options": ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 208,
    "question": "Which European city boasts highest number of bridges in the world?",
    "options": ["Venice", "Amsterdam", "Hamburg", "St. Petersburg"],
    "answer": 2,
    "tags": ["Cities", "Travel"]
  },
  {
    "id": 209,
    "question": "What is the only independent country in the Americas that has no military?",
    "options": ["Panama", "Costa Rica", "Iceland", "Haiti"],
    "answer": 1,
    "tags": ["Culture", "Geography"]
  },
  {
    "id": 210,
    "question": "If you are traveling through the 'Chunnel', which two countries are you connecting?",
    "options": ["Denmark and Sweden", "Spain and Morocco", "UK and France", "Italy and Switzerland"],
    "answer": 2,
    "tags": ["Transit", "Geography"]
  },
  {
    "id": 211,
    "question": "Which city is home to the world's highest and longest glass bridge?",
    "options": ["Zhangjiajie, China", "Dubai, UAE", "Grand Canyon, USA", "Banff, Canada"],
    "answer": 0,
    "tags": ["Landmarks", "Travel"]
  },
  {
    "id": 212,
    "question": "What is the capital of the remote island nation of Tuvalu?",
    "options": ["Honiara", "Apia", "Funafuti", "Suva"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 213,
    "question": "Which landmark features the 'Whispering Gallery'?",
    "options": ["St Paul's Cathedral, London", "Taj Mahal, India", "Grand Central, NY", "Sydney Opera House"],
    "answer": 0,
    "tags": ["Landmarks", "Travel"]
  },
  {
    "id": 214,
    "question": "What is the name of the longest single highway in the world?",
    "options": ["Trans-Canada Highway", "Route 66", "Pan-American Highway", "Highway 1, Australia"],
    "answer": 2,
    "tags": ["Transit", "Geography"]
  },
  {
    "id": 215,
    "question": "Which country has a town named 'A'?",
    "options": ["Norway", "Iceland", "Sweden", "Denmark"],
    "answer": 0,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 216,
    "question": "Where is the largest underground city located?",
    "options": ["Derinkuyu, Turkey", "Montreal, Canada", "Beijing, China", "Helsinki, Finland"],
    "answer": 1,
    "tags": ["Cities", "Travel"]
  },
  {
    "id": 217,
    "question": "Which island is entirely covered by ice despite its contradictory name?",
    "options": ["Iceland", "Greenland", "Svalbard", "Baffin Island"],
    "answer": 1,
    "tags": ["Nature", "Fun Facts"]
  },
  {
    "id": 218,
    "question": "Which airport code belongs to Los Angeles International Airport?",
    "options": ["LGA", "LAX", "LHR", "LAS"],
    "answer": 1,
    "tags": ["Transit", "Travel"]
  },
  {
    "id": 219,
    "question": "How many stars are on the national flag of China?",
    "options": ["4", "5", "6", "1"],
    "answer": 1,
    "tags": ["Culture", "Fun Facts"]
  },
  {
    "id": 220,
    "question": "Which country features the 'Avenue of the Baobabs'?",
    "options": ["Madagascar", "South Africa", "Senegal", "Kenya"],
    "answer": 0,
    "tags": ["Nature", "Travel"]
  },
  {
    "id": 221,
    "question": "What is the deepest canyon in the United States?",
    "options": ["Grand Canyon", "Zion Canyon", "Hells Canyon", "Kings Canyon"],
    "answer": 2,
    "tags": ["Nature", "Fun Facts"]
  },
  {
    "id": 222,
    "question": "Which city operates the oldest subway system in the world?",
    "options": ["New York City", "Paris", "London", "Budapest"],
    "answer": 2,
    "tags": ["Transit", "History"]
  },
  {
    "id": 223,
    "question": "In which body of water can you find the Maldives?",
    "options": ["Pacific Ocean", "Indian Ocean", "Caribbean Sea", "Red Sea"],
    "answer": 1,
    "tags": ["Geography", "Travel"]
  },
  {
    "id": 224,
    "question": "What is the largest passenger airliner in the world?",
    "options": ["Boeing 747", "Airbus A380", "Boeing 777", "Airbus A350"],
    "answer": 1,
    "tags": ["Transit", "Fun Facts"]
  },
  {
    "id": 225,
    "question": "Which country is home to the ancient city of Troy?",
    "options": ["Greece", "Turkey", "Italy", "Egypt"],
    "answer": 1,
    "tags": ["History", "Travel"]
  },
  {
    "id": 226,
    "question": "Which European city is famous for its Thermal Baths?",
    "options": ["Budapest", "Vienna", "Prague", "Munich"],
    "answer": 0,
    "tags": ["Culture", "Travel"]
  },
  {
    "id": 227,
    "question": "What is the longest mountain range in the world?",
    "options": ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
    "answer": 2,
    "tags": ["Geography", "Nature"]
  },
  {
    "id": 228,
    "question": "Which country is the smallest member of the United Nations?",
    "options": ["Tuvalu", "Nauru", "Monaco", "San Marino"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 229,
    "question": "Which river flows through the Grand Canyon?",
    "options": ["Mississippi River", "Colorado River", "Snake River", "Rio Grande"],
    "answer": 1,
    "tags": ["Nature", "Geography"]
  },
  {
    "id": 230,
    "question": "What is the busiest cruise port in the world?",
    "options": ["Port of Miami", "Port Everglades", "Port of Barcelona", "Port of Nassau"],
    "answer": 0,
    "tags": ["Transit", "Travel"]
  },
  {
    "id": 231,
    "question": "What is the name of the famous rock formation in the Australian outback?",
    "options": ["Ayers Rock (Uluru)", "Twelve Apostles", "Wave Rock", "Pinnacles"],
    "answer": 0,
    "tags": ["Nature", "Landmarks"]
  },
  {
    "id": 232,
    "question": "Which country has the most borders?",
    "options": ["Russia", "China", "Brazil", "Both Russia and China"],
    "answer": 3,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 233,
    "question": "Where is the largest train station in the world by the number of platforms?",
    "options": ["Shinjuku Station, Tokyo", "Grand Central Terminal, NY", "Gare du Nord, Paris", "Howrah Junction, Kolkata"],
    "answer": 1,
    "tags": ["Transit", "Landmarks"]
  },
  {
    "id": 234,
    "question": "Which European country is entirely surrounded by Rome, Italy?",
    "options": ["San Marino", "Andorra", "Vatican City", "Liechtenstein"],
    "answer": 2,
    "tags": ["Geography", "Fun Facts"]
  },
  {
    "id": 235,
    "question": "What is the name of the longest railway bridge in the world?",
    "options": ["Danyang-Kunshan Grand Bridge", "Lake Pontchartrain Causeway", "Great Seto Bridge", "Jiaozhou Bay Bridge"],
    "answer": 0,
    "tags": ["Transit", "Landmarks"]
  },
  {
    "id": 236,
    "question": "Which city is known as the 'Gateway to the West'?",
    "options": ["San Francisco", "St. Louis", "Denver", "Kansas City"],
    "answer": 1,
    "tags": ["Cities", "History"]
  },
  {
    "id": 237,
    "question": "What is the official currency of Japan?",
    "options": ["Won", "Yuan", "Yen", "Ringgit"],
    "answer": 2,
    "tags": ["Culture", "Travel"]
  }
];