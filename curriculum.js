// ==================== LINGUAFLOW CURRICULUM ====================
// 8 modül, ~200 ders — Türk öğrenciler için IELTS hazırlık müfredatı

const MODULES = [
  { id:"foundations", title:"Temel İngilizce", icon:"🌱", cefr:["A0","A1"], desc:"Alfabe, selamlaşma, sayılar, temel fiiller ve cümleler" },
  { id:"daily-life", title:"Günlük Hayat", icon:"🏠", cefr:["A1","A2"], desc:"Rutinler, yemek, alışveriş, ulaşım, aile" },
  { id:"social", title:"Sosyal İngilizce", icon:"💬", cefr:["A2","B1"], desc:"Fikirler, duygular, seyahat, tanımlamalar" },
  { id:"academic", title:"Akademik İngilizce", icon:"🎓", cefr:["B1","B2"], desc:"Formal dil, paragraf yapısı, akademik kelimeler" },
  { id:"ielts-reading", title:"IELTS Reading", icon:"📖", cefr:["B1","B2"], desc:"Passage türleri, skimming, scanning stratejileri" },
  { id:"ielts-writing", title:"IELTS Writing", icon:"✍️", cefr:["B1","B2"], desc:"Task 1 & 2, essay yapısı, bağlaçlar" },
  { id:"ielts-listening", title:"IELTS Listening", icon:"👂", cefr:["B1","B2"], desc:"Bölüm stratejileri, not tamamlama, MCQ" },
  { id:"ielts-speaking", title:"IELTS Speaking", icon:"🗣️", cefr:["B1","C1"], desc:"Part 1-3, akıcılık, telaffuz, fikirlerini ifade etme" }
];

const UNITS = {
  "foundations": [
    { id:"alphabet-basics", title:"Alfabe & Sesler", order:1 },
    { id:"greetings", title:"Selamlaşma & Tanışma", order:2 },
    { id:"numbers-colors", title:"Sayılar & Renkler", order:3 },
    { id:"basic-verbs", title:"Temel Fiiller", order:4 },
    { id:"questions", title:"Soru Sorma", order:5 }
  ],
  "daily-life": [
    { id:"family", title:"Aile & İnsanlar", order:1 },
    { id:"routines", title:"Günlük Rutinler", order:2 },
    { id:"food-drink", title:"Yiyecek & İçecekler", order:3 },
    { id:"shopping", title:"Alışveriş", order:4 },
    { id:"transport", title:"Ulaşım & Yön Tarifi", order:5 },
    { id:"home", title:"Ev & Eşyalar", order:6 }
  ],
  "social": [
    { id:"hobbies", title:"Hobiler & Boş Zaman", order:1 },
    { id:"travel", title:"Seyahat & Tatil", order:2 },
    { id:"health", title:"Sağlık & Vücut", order:3 },
    { id:"opinions", title:"Fikir Belirtme", order:4 },
    { id:"feelings", title:"Duygular & Kişilik", order:5 },
    { id:"technology", title:"Teknoloji & İnternet", order:6 }
  ],
  "academic": [
    { id:"formal-lang", title:"Formal vs Informal Dil", order:1 },
    { id:"academic-vocab", title:"Akademik Kelimeler", order:2 },
    { id:"paragraph-structure", title:"Paragraf Yapısı", order:3 },
    { id:"linking-words", title:"Bağlaçlar & Geçiş İfadeleri", order:4 },
    { id:"paraphrasing", title:"Paraphrasing — Başka Kelimelerle Anlatma", order:5 }
  ],
  "ielts-reading": [
    { id:"reading-overview", title:"IELTS Reading Genel Bakış", order:1 },
    { id:"skimming-scanning", title:"Skimming & Scanning", order:2 },
    { id:"true-false-ng", title:"True / False / Not Given", order:3 },
    { id:"matching-headings", title:"Matching Headings", order:4 },
    { id:"fill-blanks", title:"Summary & Note Completion", order:5 },
    { id:"multiple-choice-reading", title:"Multiple Choice Stratejileri", order:6 }
  ],
  "ielts-writing": [
    { id:"writing-overview", title:"IELTS Writing Genel Bakış", order:1 },
    { id:"task1-graphs", title:"Task 1 — Grafik & Tablo Analizi", order:2 },
    { id:"task1-process", title:"Task 1 — Süreç & Harita", order:3 },
    { id:"task2-opinion", title:"Task 2 — Opinion Essay", order:4 },
    { id:"task2-discuss", title:"Task 2 — Discussion Essay", order:5 },
    { id:"task2-problem", title:"Task 2 — Problem-Solution Essay", order:6 }
  ],
  "ielts-listening": [
    { id:"listening-overview", title:"IELTS Listening Genel Bakış", order:1 },
    { id:"section1-2", title:"Section 1 & 2 — Günlük Durumlar", order:2 },
    { id:"section3-4", title:"Section 3 & 4 — Akademik", order:3 },
    { id:"note-completion", title:"Not Tamamlama Stratejileri", order:4 },
    { id:"listening-traps", title:"Dikkat Tuzakları & İpuçları", order:5 }
  ],
  "ielts-speaking": [
    { id:"speaking-overview", title:"IELTS Speaking Genel Bakış", order:1 },
    { id:"part1-intro", title:"Part 1 — Tanışma & Genel Sorular", order:2 },
    { id:"part2-cuecard", title:"Part 2 — Cue Card & Uzun Konuşma", order:3 },
    { id:"part3-discussion", title:"Part 3 — Derinlemesine Tartışma", order:4 },
    { id:"pronunciation", title:"Telaffuz & Vurgu", order:5 }
  ]
};

// ==================== DERS İÇERİKLERİ ====================
const LESSON_DATA = {

// ============ MODULE: FOUNDATIONS ============

// --- Unit: Alfabe & Sesler ---
"alphabet-basics-vocab-1": () => ({
  type:"vocabulary", title:"İngiliz Alfabesi", level:"A0", minutes:10, unitId:"alphabet-basics",
  data: {
    theme:"Alfabe",
    words:[
      {e:"A",t:"Ey",p:"/eɪ/",ex:"A is for Apple",ext:"A Apple (Elma) içindir"},
      {e:"B",t:"Bi",p:"/biː/",ex:"B is for Book",ext:"B Book (Kitap) içindir"},
      {e:"C",t:"Si",p:"/siː/",ex:"C is for Cat",ext:"C Cat (Kedi) içindir"},
      {e:"D",t:"Di",p:"/diː/",ex:"D is for Dog",ext:"D Dog (Köpek) içindir"},
      {e:"E",t:"İ",p:"/iː/",ex:"E is for Egg",ext:"E Egg (Yumurta) içindir"},
      {e:"F",t:"Ef",p:"/ɛf/",ex:"F is for Fish",ext:"F Fish (Balık) içindir"},
      {e:"G",t:"Ci",p:"/dʒiː/",ex:"G is for Green",ext:"G Green (Yeşil) içindir"},
      {e:"H",t:"Eyç",p:"/eɪtʃ/",ex:"H is for House",ext:"H House (Ev) içindir"},
      {e:"I",t:"Ay",p:"/aɪ/",ex:"I is for Ice",ext:"I Ice (Buz) içindir"},
      {e:"J",t:"Cey",p:"/dʒeɪ/",ex:"J is for Job",ext:"J Job (İş) içindir"},
      {e:"K",t:"Key",p:"/keɪ/",ex:"K is for Key",ext:"K Key (Anahtar) içindir"},
      {e:"L",t:"El",p:"/ɛl/",ex:"L is for Love",ext:"L Love (Aşk) içindir"},
      {e:"M",t:"Em",p:"/ɛm/",ex:"M is for Mother",ext:"M Mother (Anne) içindir"}
    ],
    exercises:[
      {type:"match",q:"Harfi sesle eşleştir",pairs:[["A","Ey"],["B","Bi"],["C","Si"],["F","Ef"],["H","Eyç"]]},
      {type:"quiz",items:[
        {q:"\"Apple\" hangi harfle başlar?",opts:["E","A","I","O"],correct:1},
        {q:"\"Book\" hangi harfle başlar?",opts:["D","P","B","G"],correct:2},
        {q:"H harfinin okunuşu nedir?",opts:["Ha","Eyç","He","Aş"],correct:1}
      ]}
    ]
  }
}),
"alphabet-basics-vocab-2": () => ({
  type:"vocabulary", title:"Alfabe (N-Z) & Temel Sesler", level:"A0", minutes:10, unitId:"alphabet-basics",
  data: {
    theme:"Alfabe devam",
    words:[
      {e:"N",t:"En",p:"/ɛn/",ex:"N is for Name",ext:"N Name (İsim) içindir"},
      {e:"O",t:"Ou",p:"/oʊ/",ex:"O is for Open",ext:"O Open (Açık) içindir"},
      {e:"P",t:"Pi",p:"/piː/",ex:"P is for Phone",ext:"P Phone (Telefon) içindir"},
      {e:"Q",t:"Kyu",p:"/kjuː/",ex:"Q is for Queen",ext:"Q Queen (Kraliçe) içindir"},
      {e:"R",t:"Ar",p:"/ɑːr/",ex:"R is for Red",ext:"R Red (Kırmızı) içindir"},
      {e:"S",t:"Es",p:"/ɛs/",ex:"S is for Sun",ext:"S Sun (Güneş) içindir"},
      {e:"T",t:"Ti",p:"/tiː/",ex:"T is for Time",ext:"T Time (Zaman) içindir"},
      {e:"U",t:"Yu",p:"/juː/",ex:"U is for Under",ext:"U Under (Altında) içindir"},
      {e:"V",t:"Vi",p:"/viː/",ex:"V is for Very",ext:"V Very (Çok) içindir"},
      {e:"W",t:"Dablyu",p:"/ˈdʌbəljuː/",ex:"W is for Water",ext:"W Water (Su) içindir"},
      {e:"X",t:"Eks",p:"/ɛks/",ex:"X is for Box",ext:"X Box (Kutu) içindir"},
      {e:"Y",t:"Vay",p:"/waɪ/",ex:"Y is for Yes",ext:"Y Yes (Evet) içindir"},
      {e:"Z",t:"Zi/Zed",p:"/ziː/",ex:"Z is for Zero",ext:"Z Zero (Sıfır) içindir"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"Phone\" hangi harfle başlar?",opts:["F","B","P","T"],correct:2},
        {q:"W harfinin okunuşu nedir?",opts:["Ve","Dablyu","Vu","Vi"],correct:1},
        {q:"\"Zero\" hangi harfle başlar?",opts:["S","X","C","Z"],correct:3},
        {q:"Kaç harf var İngiliz alfabesinde?",opts:["24","26","28","29"],correct:1}
      ]}
    ]
  }
}),
"alphabet-basics-grammar-1": () => ({
  type:"grammar", title:"Sesli & Sessiz Harfler", level:"A0", minutes:12, unitId:"alphabet-basics",
  data: {
    topic:"Vowels & Consonants",
    explanationTr:"İngiliz alfabesinde 5 sesli harf (vowel) vardır: <strong>A, E, I, O, U</strong>. Geri kalan 21 harf sessiz harftir (consonant). Sesli harfler çok önemlidir çünkü her İngilizce kelimede en az bir sesli harf bulunur. Türkçedeki ünlü harflerden farklı olarak, İngilizce sesli harflerin birden fazla okunuşu vardır.",
    rules:[
      {rule:"5 Sesli Harf: A, E, I, O, U", examples:[{en:"<hl>A</hl>pple, C<hl>a</hl>t",tr:"Elma, Kedi"},{en:"<hl>E</hl>gg, R<hl>e</hl>d",tr:"Yumurta, Kırmızı"},{en:"<hl>I</hl>ce, F<hl>i</hl>sh",tr:"Buz, Balık"}]},
      {rule:"Sesli harfler kelimenin okunuşunu değiştirir",examples:[{en:"C<hl>a</hl>t ≠ C<hl>u</hl>t ≠ C<hl>o</hl>t",tr:"Kedi ≠ Kesmek ≠ Beşik"},{en:"B<hl>i</hl>t ≠ B<hl>ea</hl>t ≠ B<hl>oo</hl>t",tr:"Parça ≠ Dövmek ≠ Çizme"}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Hangisi sesli harftir (vowel)?",opts:["B","D","E","G"],correct:2},
        {q:"İngiliz alfabesinde kaç sesli harf var?",opts:["3","5","7","8"],correct:1},
        {q:"Hangisi sesli harf DEĞİLDİR?",opts:["A","O","T","U"],correct:2},
        {q:"\"Apple\" kelimesindeki sesli harf hangisi?",opts:["P","L","A","E — ikisi de"],correct:3}
      ]}
    ]
  }
}),

// --- Unit: Selamlaşma & Tanışma ---
"greetings-vocab-1": () => ({
  type:"vocabulary", title:"Temel Selamlaşma Kelimeleri", level:"A1", minutes:10, unitId:"greetings",
  data: {
    theme:"Selamlaşma",
    words:[
      {e:"Hello",t:"Merhaba",p:"/həˈloʊ/",ex:"Hello, how are you?",ext:"Merhaba, nasılsın?"},
      {e:"Hi",t:"Selam",p:"/haɪ/",ex:"Hi there!",ext:"Selam!"},
      {e:"Goodbye",t:"Hoşça kal",p:"/ɡʊdˈbaɪ/",ex:"Goodbye, see you later!",ext:"Hoşça kal, sonra görüşürüz!"},
      {e:"Good morning",t:"Günaydın",p:"/ɡʊd ˈmɔːrnɪŋ/",ex:"Good morning, teacher!",ext:"Günaydın öğretmenim!"},
      {e:"Good afternoon",t:"İyi günler (öğleden sonra)",p:"/ɡʊd ˌæftərˈnuːn/",ex:"Good afternoon, sir.",ext:"İyi günler efendim."},
      {e:"Good evening",t:"İyi akşamlar",p:"/ɡʊd ˈiːvnɪŋ/",ex:"Good evening, everyone.",ext:"İyi akşamlar herkese."},
      {e:"Good night",t:"İyi geceler",p:"/ɡʊd naɪt/",ex:"Good night, sleep well!",ext:"İyi geceler, iyi uykular!"},
      {e:"Please",t:"Lütfen",p:"/pliːz/",ex:"Please sit down.",ext:"Lütfen oturun."},
      {e:"Thank you",t:"Teşekkür ederim",p:"/θæŋk juː/",ex:"Thank you very much!",ext:"Çok teşekkür ederim!"},
      {e:"You're welcome",t:"Rica ederim",p:"/jʊər ˈwɛlkəm/",ex:"You're welcome!",ext:"Rica ederim!"},
      {e:"Sorry",t:"Özür dilerim",p:"/ˈsɒri/",ex:"Sorry, I'm late.",ext:"Özür dilerim, geç kaldım."},
      {e:"Excuse me",t:"Affedersiniz",p:"/ɪkˈskjuːz miː/",ex:"Excuse me, where is the station?",ext:"Affedersiniz, istasyon nerede?"}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Hello","Merhaba"],["Goodbye","Hoşça kal"],["Please","Lütfen"],["Sorry","Özür dilerim"],["Thank you","Teşekkür ederim"]]},
      {type:"quiz",items:[
        {q:"Akşam vakti biriyle karşılaştığında ne dersin?",opts:["Good morning","Good night","Good evening","Goodbye"],correct:2},
        {q:"\"Rica ederim\" İngilizcede ne?",opts:["Thank you","Sorry","You're welcome","Please"],correct:2},
        {q:"Birinden bir şey rica ederken hangi kelimeyi kullanırsın?",opts:["Sorry","Please","Hello","Goodbye"],correct:1},
        {q:"\"Excuse me\" ne zaman kullanılır?",opts:["Vedalaşırken","Dikkat çekmek için","Teşekkür ederken","Uyurken"],correct:1}
      ]}
    ]
  }
}),
"greetings-grammar-1": () => ({
  type:"grammar", title:"\"To be\" Fiili — am / is / are", level:"A1", minutes:15, unitId:"greetings",
  data: {
    topic:"To be (am/is/are)",
    explanationTr:"İngilizcede kendimizi tanıtırken ve bir şeyin ne olduğunu söylerken <strong>\"to be\"</strong> fiilini kullanırız. Türkçede bu genellikle \"-ım, -sin, -dır\" ekleriyle karşılanır.<br><br><strong>I am</strong> (Ben ...ım) → Kısaltma: I'm<br><strong>You are</strong> (Sen ...sın) → Kısaltma: You're<br><strong>He/She/It is</strong> (O ...dır) → Kısaltma: He's/She's/It's<br><strong>We are</strong> (Biz ...ız) → Kısaltma: We're<br><strong>They are</strong> (Onlar ...dırlar) → Kısaltma: They're",
    rules:[
      {rule:"I → am",examples:[{en:"I <hl>am</hl> a student.",tr:"Ben bir öğrenciyim."},{en:"I<hl>'m</hl> from Turkey.",tr:"Ben Türkiye'denim."},{en:"I <hl>am</hl> 25 years old.",tr:"Ben 25 yaşındayım."}]},
      {rule:"He/She/It → is",examples:[{en:"She <hl>is</hl> a teacher.",tr:"O bir öğretmen."},{en:"He<hl>'s</hl> tall.",tr:"O uzun boylu."},{en:"It <hl>is</hl> cold today.",tr:"Bugün hava soğuk."}]},
      {rule:"You/We/They → are",examples:[{en:"You <hl>are</hl> my friend.",tr:"Sen benim arkadaşımsın."},{en:"We<hl>'re</hl> happy.",tr:"Biz mutluyuz."},{en:"They <hl>are</hl> at home.",tr:"Onlar evdeler."}]},
      {rule:"Olumsuz: am not / is not (isn't) / are not (aren't)",examples:[{en:"I am <hl>not</hl> tired.",tr:"Yorgun değilim."},{en:"She <hl>isn't</hl> here.",tr:"O burada değil."},{en:"They <hl>aren't</hl> ready.",tr:"Onlar hazır değil."}]},
      {rule:"Soru: Am I? / Is he? / Are you?",examples:[{en:"<hl>Are</hl> you a student?",tr:"Sen bir öğrenci misin?"},{en:"<hl>Is</hl> she Turkish?",tr:"O Türk mü?"},{en:"<hl>Am</hl> I late?",tr:"Geç mi kaldım?"}]}
    ],
    exercises:[
      {type:"fillBlank",items:[
        {sentence:"I ___ from Istanbul.",answer:"am",opts:["am","is","are"]},
        {sentence:"She ___ a doctor.",answer:"is",opts:["am","is","are"]},
        {sentence:"We ___ friends.",answer:"are",opts:["am","is","are"]},
        {sentence:"They ___ not here.",answer:"are",opts:["am","is","are"]},
        {sentence:"___ you ready?",answer:"Are",opts:["Am","Is","Are"]}
      ]},
      {type:"quiz",items:[
        {q:"\"I ___ from Turkey\" boşluğa ne gelir?",opts:["is","are","am","be"],correct:2},
        {q:"\"She ___ my friend\" boşluğa ne gelir?",opts:["am","are","is","be"],correct:2},
        {q:"\"They ___ students\" boşluğa ne gelir?",opts:["am","is","are","be"],correct:2},
        {q:"\"He isn't\" ne demek?",opts:["O değil","O var","O evet","O burada"],correct:0}
      ]}
    ]
  }
}),
"greetings-dialogue-1": () => ({
  type:"dialogue", title:"Tanışma Diyaloğu", level:"A1", minutes:10, unitId:"greetings",
  data: {
    context:"İki kişi ilk kez tanışıyor — bir kafede.",
    lines:[
      {speaker:"A",text:"Hello! My name is John. What is your name?",tr:"Merhaba! Benim adım John. Senin adın ne?"},
      {speaker:"B",text:"Hi John! I'm Elif. Nice to meet you!",tr:"Selam John! Ben Elif. Tanıştığımıza memnun oldum!"},
      {speaker:"A",text:"Nice to meet you too! Where are you from?",tr:"Ben de memnun oldum! Nerelisin?"},
      {speaker:"B",text:"I'm from Turkey, from Istanbul. And you?",tr:"Türkiye'den, İstanbul'dan. Ya sen?"},
      {speaker:"A",text:"I'm from England. I'm a teacher. What do you do?",tr:"Ben İngiltere'den. Öğretmenim. Sen ne iş yapıyorsun?"},
      {speaker:"B",text:"I'm a student. I'm studying English.",tr:"Ben öğrenciyim. İngilizce öğreniyorum."},
      {speaker:"A",text:"That's great! Your English is good!",tr:"Harika! İngilizce'n iyi!"},
      {speaker:"B",text:"Thank you! See you later!",tr:"Teşekkür ederim! Sonra görüşürüz!"}
    ],
    keyPhrases:[
      {en:"Nice to meet you!",tr:"Tanıştığımıza memnun oldum!"},
      {en:"Where are you from?",tr:"Nerelisin?"},
      {en:"What do you do?",tr:"Ne iş yapıyorsun?"},
      {en:"See you later!",tr:"Sonra görüşürüz!"}
    ],
    quiz:[
      {q:"\"Nice to meet you\" ne demek?",opts:["Hoşça kal","Tanıştığıma memnun oldum","Nasılsın","Günaydın"],correct:1},
      {q:"\"Where are you from?\" ne soruyor?",opts:["Ne iş yapıyorsun?","Kaç yaşındasın?","Nerelisin?","Nasılsın?"],correct:2},
      {q:"\"What do you do?\" ne soruyor?",opts:["Ne yapıyorsun şu an?","Ne iş yapıyorsun?","Nereye gidiyorsun?","Ne istiyorsun?"],correct:1}
    ]
  }
}),
"greetings-speaking-1": () => ({
  type:"speaking", title:"Kendini Tanıt", level:"A1", minutes:10, unitId:"greetings",
  data: {
    topic:"Kendini tanıtma — Self Introduction",
    questions:[
      "What is your name?",
      "Where are you from?",
      "How old are you?",
      "What do you do? (Job/Student)",
      "What are your hobbies?"
    ],
    modelAnswers:[
      {text:"My name is Ayberk. I'm from Turkey, from Istanbul. I'm 25 years old. I'm a software developer. In my free time, I like reading books and playing football.",band:"5.5-6.0"},
      {text:"Hello, my name is Ayberk Bağlan. I come from Istanbul, which is the largest city in Turkey. I'm 25 years old and I work as a software developer. When I'm not working, I enjoy reading novels and playing football with my friends at weekends.",band:"6.5-7.0"}
    ],
    usefulPhrases:[
      {en:"My name is...",tr:"Benim adım..."},
      {en:"I'm from...",tr:"Ben ...denim/danım"},
      {en:"I'm ... years old.",tr:"Ben ... yaşındayım."},
      {en:"I work as a...",tr:"... olarak çalışıyorum."},
      {en:"In my free time, I like...",tr:"Boş zamanlarımda ... seviyorum."},
      {en:"I enjoy ...-ing",tr:"...'den hoşlanıyorum"}
    ]
  }
}),

// --- Unit: Sayılar & Renkler ---
"numbers-colors-vocab-1": () => ({
  type:"vocabulary", title:"Sayılar 1-20", level:"A1", minutes:10, unitId:"numbers-colors",
  data: {
    theme:"Sayılar",
    words:[
      {e:"One",t:"Bir",p:"/wʌn/",ex:"I have one sister.",ext:"Bir kız kardeşim var."},
      {e:"Two",t:"İki",p:"/tuː/",ex:"Two cups of tea, please.",ext:"İki fincan çay lütfen."},
      {e:"Three",t:"Üç",p:"/θriː/",ex:"There are three cats.",ext:"Üç kedi var."},
      {e:"Four",t:"Dört",p:"/fɔːr/",ex:"I have four books.",ext:"Dört kitabım var."},
      {e:"Five",t:"Beş",p:"/faɪv/",ex:"Five fingers on one hand.",ext:"Bir elde beş parmak."},
      {e:"Six",t:"Altı",p:"/sɪks/",ex:"Six eggs, please.",ext:"Altı yumurta lütfen."},
      {e:"Seven",t:"Yedi",p:"/ˈsɛvən/",ex:"Seven days in a week.",ext:"Bir haftada yedi gün."},
      {e:"Eight",t:"Sekiz",p:"/eɪt/",ex:"I wake up at eight.",ext:"Sekizde uyanırım."},
      {e:"Nine",t:"Dokuz",p:"/naɪn/",ex:"Nine players on the team.",ext:"Takımda dokuz oyuncu."},
      {e:"Ten",t:"On",p:"/tɛn/",ex:"Ten minutes left.",ext:"On dakika kaldı."},
      {e:"Eleven",t:"On bir",p:"/ɪˈlɛvən/",ex:"Eleven students in class.",ext:"Sınıfta on bir öğrenci."},
      {e:"Twelve",t:"On iki",p:"/twɛlv/",ex:"Twelve months in a year.",ext:"Bir yılda on iki ay."},
      {e:"Twenty",t:"Yirmi",p:"/ˈtwɛnti/",ex:"I'm twenty years old.",ext:"Yirmi yaşındayım."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"Seven\" kaç demek?",opts:["6","7","8","9"],correct:1},
        {q:"\"Twelve\" kaç demek?",opts:["2","20","12","22"],correct:2},
        {q:"Bir haftada kaç gün vardır?",opts:["Five","Six","Seven","Eight"],correct:2},
        {q:"\"Twenty\" kaç demek?",opts:["12","2","22","20"],correct:3}
      ]}
    ]
  }
}),
"numbers-colors-vocab-2": () => ({
  type:"vocabulary", title:"Renkler", level:"A1", minutes:10, unitId:"numbers-colors",
  data: {
    theme:"Renkler",
    words:[
      {e:"Red",t:"Kırmızı",p:"/rɛd/",ex:"The apple is red.",ext:"Elma kırmızıdır."},
      {e:"Blue",t:"Mavi",p:"/bluː/",ex:"The sky is blue.",ext:"Gökyüzü mavidir."},
      {e:"Green",t:"Yeşil",p:"/ɡriːn/",ex:"The grass is green.",ext:"Çimen yeşildir."},
      {e:"Yellow",t:"Sarı",p:"/ˈjɛloʊ/",ex:"The sun is yellow.",ext:"Güneş sarıdır."},
      {e:"Orange",t:"Turuncu",p:"/ˈɒrɪndʒ/",ex:"I like orange juice.",ext:"Portakal suyunu severim."},
      {e:"Purple",t:"Mor",p:"/ˈpɜːrpəl/",ex:"She has a purple dress.",ext:"Mor bir elbisesi var."},
      {e:"Black",t:"Siyah",p:"/blæk/",ex:"My phone is black.",ext:"Telefonum siyah."},
      {e:"White",t:"Beyaz",p:"/waɪt/",ex:"Snow is white.",ext:"Kar beyazdır."},
      {e:"Brown",t:"Kahverengi",p:"/braʊn/",ex:"The dog is brown.",ext:"Köpek kahverengidir."},
      {e:"Pink",t:"Pembe",p:"/pɪŋk/",ex:"Pink flowers are beautiful.",ext:"Pembe çiçekler güzeldir."},
      {e:"Grey/Gray",t:"Gri",p:"/ɡreɪ/",ex:"The cat is grey.",ext:"Kedi gridir."}
    ],
    exercises:[
      {type:"match",q:"Renkleri eşleştir",pairs:[["Red","Kırmızı"],["Blue","Mavi"],["Green","Yeşil"],["Yellow","Sarı"],["Black","Siyah"]]},
      {type:"quiz",items:[
        {q:"Gökyüzünün rengi İngilizcede ne?",opts:["Green","Red","Blue","Yellow"],correct:2},
        {q:"\"Purple\" ne renk?",opts:["Pembe","Mor","Mavi","Turuncu"],correct:1},
        {q:"\"Kahverengi\" İngilizcede ne?",opts:["Black","Grey","Brown","Orange"],correct:2},
        {q:"Hangisi bir renk DEĞİLDİR?",opts:["Pink","Ten","White","Grey"],correct:1}
      ]}
    ]
  }
}),
"numbers-colors-grammar-1": () => ({
  type:"grammar", title:"Çoğul Yapı — Plural Nouns", level:"A1", minutes:12, unitId:"numbers-colors",
  data: {
    topic:"Plural Nouns (-s / -es)",
    explanationTr:"İngilizcede bir ismin birden fazlasını ifade etmek için genellikle sonuna <strong>-s</strong> eklenir. Bu Türkçedeki <strong>-ler / -lar</strong> ekine benzer.<br><br>Ancak bazı özel kurallar vardır!",
    rules:[
      {rule:"Genel kural: -s ekle",examples:[{en:"cat → <hl>cats</hl>",tr:"kedi → kediler"},{en:"book → <hl>books</hl>",tr:"kitap → kitaplar"},{en:"car → <hl>cars</hl>",tr:"araba → arabalar"}]},
      {rule:"s, sh, ch, x, z ile bitenler: -es ekle",examples:[{en:"bus → <hl>buses</hl>",tr:"otobüs → otobüsler"},{en:"box → <hl>boxes</hl>",tr:"kutu → kutular"},{en:"watch → <hl>watches</hl>",tr:"saat → saatler"}]},
      {rule:"Sessiz harf + y ile bitenler: y → ies",examples:[{en:"baby → <hl>babies</hl>",tr:"bebek → bebekler"},{en:"city → <hl>cities</hl>",tr:"şehir → şehirler"},{en:"country → <hl>countries</hl>",tr:"ülke → ülkeler"}]},
      {rule:"Düzensiz çoğullar",examples:[{en:"man → <hl>men</hl>",tr:"adam → adamlar"},{en:"woman → <hl>women</hl>",tr:"kadın → kadınlar"},{en:"child → <hl>children</hl>",tr:"çocuk → çocuklar"},{en:"foot → <hl>feet</hl>",tr:"ayak → ayaklar"},{en:"tooth → <hl>teeth</hl>",tr:"diş → dişler"}]}
    ],
    exercises:[
      {type:"fillBlank",items:[
        {sentence:"One cat, two ___.",answer:"cats",opts:["cats","cates","caties"]},
        {sentence:"One box, three ___.",answer:"boxes",opts:["boxs","boxes","boxies"]},
        {sentence:"One baby, five ___.",answer:"babies",opts:["babys","babyes","babies"]},
        {sentence:"One child, many ___.",answer:"children",opts:["childs","childrens","children"]},
        {sentence:"One man, two ___.",answer:"men",opts:["mans","mens","men"]}
      ]},
      {type:"quiz",items:[
        {q:"\"bus\" kelimesinin çoğulu nedir?",opts:["buss","buse","buses","bus"],correct:2},
        {q:"\"city\" kelimesinin çoğulu nedir?",opts:["citys","cities","cityes","city"],correct:1},
        {q:"\"tooth\" kelimesinin çoğulu nedir?",opts:["tooths","toothes","teeth","teeths"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Temel Fiiller ---
"basic-verbs-vocab-1": () => ({
  type:"vocabulary", title:"En Çok Kullanılan 20 Fiil", level:"A1", minutes:12, unitId:"basic-verbs",
  data: {
    theme:"Temel Fiiller",
    words:[
      {e:"Be",t:"Olmak",p:"/biː/",ex:"I want to be happy.",ext:"Mutlu olmak istiyorum."},
      {e:"Have",t:"Sahip olmak",p:"/hæv/",ex:"I have a car.",ext:"Bir arabam var."},
      {e:"Do",t:"Yapmak",p:"/duː/",ex:"What do you do?",ext:"Ne iş yaparsın?"},
      {e:"Say",t:"Söylemek",p:"/seɪ/",ex:"What did you say?",ext:"Ne dedin?"},
      {e:"Go",t:"Gitmek",p:"/ɡoʊ/",ex:"Let's go home.",ext:"Eve gidelim."},
      {e:"Come",t:"Gelmek",p:"/kʌm/",ex:"Come here, please.",ext:"Buraya gel lütfen."},
      {e:"Make",t:"Yapmak/Üretmek",p:"/meɪk/",ex:"I make coffee every morning.",ext:"Her sabah kahve yaparım."},
      {e:"Know",t:"Bilmek",p:"/noʊ/",ex:"I know the answer.",ext:"Cevabı biliyorum."},
      {e:"Think",t:"Düşünmek",p:"/θɪŋk/",ex:"I think you're right.",ext:"Bence haklısın."},
      {e:"Take",t:"Almak",p:"/teɪk/",ex:"Take a seat.",ext:"Oturun."},
      {e:"See",t:"Görmek",p:"/siː/",ex:"I can see the mountain.",ext:"Dağı görebiliyorum."},
      {e:"Want",t:"İstemek",p:"/wɒnt/",ex:"I want water.",ext:"Su istiyorum."},
      {e:"Give",t:"Vermek",p:"/ɡɪv/",ex:"Give me the book.",ext:"Bana kitabı ver."},
      {e:"Use",t:"Kullanmak",p:"/juːz/",ex:"Can I use your phone?",ext:"Telefonunu kullanabilir miyim?"},
      {e:"Find",t:"Bulmak",p:"/faɪnd/",ex:"I can't find my keys.",ext:"Anahtarlarımı bulamıyorum."},
      {e:"Tell",t:"Anlatmak/Söylemek",p:"/tɛl/",ex:"Tell me a story.",ext:"Bana bir hikaye anlat."},
      {e:"Ask",t:"Sormak",p:"/æsk/",ex:"Can I ask a question?",ext:"Bir soru sorabilir miyim?"},
      {e:"Work",t:"Çalışmak",p:"/wɜːrk/",ex:"I work in an office.",ext:"Bir ofiste çalışırım."},
      {e:"Like",t:"Sevmek/Beğenmek",p:"/laɪk/",ex:"I like pizza.",ext:"Pizza severim."},
      {e:"Need",t:"İhtiyaç duymak",p:"/niːd/",ex:"I need help.",ext:"Yardıma ihtiyacım var."}
    ],
    exercises:[
      {type:"match",q:"Fiilleri eşleştir",pairs:[["Go","Gitmek"],["Come","Gelmek"],["Know","Bilmek"],["Want","İstemek"],["Give","Vermek"]]},
      {type:"quiz",items:[
        {q:"\"Düşünmek\" İngilizcede ne?",opts:["Think","Thank","Thing","Thick"],correct:0},
        {q:"\"I ___ help\" (Yardıma ihtiyacım var)",opts:["want","need","like","have"],correct:1},
        {q:"\"Find\" ne demek?",opts:["Bulmak","Kaybetmek","Aramak","Vermek"],correct:0},
        {q:"\"Tell me\" ne demek?",opts:["Bana sor","Bana anlat","Bana ver","Bana göster"],correct:1}
      ]}
    ]
  }
}),
"basic-verbs-grammar-1": () => ({
  type:"grammar", title:"Simple Present Tense — Geniş Zaman", level:"A1", minutes:15, unitId:"basic-verbs",
  data: {
    topic:"Simple Present Tense",
    explanationTr:"<strong>Simple Present Tense (Geniş Zaman)</strong>, her gün, her zaman veya düzenli olarak yaptığımız şeyleri anlatmak için kullanılır.<br><br>Türkçedeki <strong>\"-ır/-ir/-ur/-ür\"</strong> eklerine karşılık gelir.<br><br>Örnek: \"Ben her gün kahve <strong>içerim</strong>\" → \"I <strong>drink</strong> coffee every day.\"",
    rules:[
      {rule:"I / You / We / They → fiil olduğu gibi kalır",examples:[{en:"I <hl>drink</hl> coffee.",tr:"Kahve içerim."},{en:"You <hl>speak</hl> English.",tr:"İngilizce konuşursun."},{en:"They <hl>live</hl> in Istanbul.",tr:"İstanbul'da yaşarlar."}]},
      {rule:"He / She / It → fiile -s eklenir",examples:[{en:"He <hl>drinks</hl> tea.",tr:"O çay içer."},{en:"She <hl>works</hl> at a hospital.",tr:"O bir hastanede çalışır."},{en:"It <hl>rains</hl> a lot in London.",tr:"Londra'da çok yağmur yağar."}]},
      {rule:"-s /-es / -ies kuralları",examples:[{en:"go → <hl>goes</hl>, do → <hl>does</hl>",tr:"-o ile bitenler → -es"},{en:"watch → <hl>watches</hl>, wash → <hl>washes</hl>",tr:"-ch, -sh ile bitenler → -es"},{en:"study → <hl>studies</hl>, try → <hl>tries</hl>",tr:"sessiz harf + y → -ies"}]},
      {rule:"Olumsuz: do not (don't) / does not (doesn't)",examples:[{en:"I <hl>don't</hl> like fish.",tr:"Balık sevmem."},{en:"She <hl>doesn't</hl> eat meat.",tr:"O et yemez."},{en:"They <hl>don't</hl> work on Sundays.",tr:"Pazar günleri çalışmazlar."}]},
      {rule:"Soru: Do/Does + özne + fiil?",examples:[{en:"<hl>Do</hl> you speak English?",tr:"İngilizce konuşur musun?"},{en:"<hl>Does</hl> she like coffee?",tr:"O kahve sever mi?"},{en:"<hl>Do</hl> they live here?",tr:"Burada mı yaşarlar?"}]}
    ],
    exercises:[
      {type:"fillBlank",items:[
        {sentence:"She ___ to school every day. (go)",answer:"goes",opts:["go","goes","gos"]},
        {sentence:"I ___ like spicy food. (not)",answer:"don't",opts:["don't","doesn't","not"]},
        {sentence:"___ he play football?",answer:"Does",opts:["Do","Does","Is"]},
        {sentence:"They ___ English very well. (speak)",answer:"speak",opts:["speaks","speak","speaking"]},
        {sentence:"He ___ TV every evening. (watch)",answer:"watches",opts:["watchs","watches","watch"]}
      ]},
      {type:"quiz",items:[
        {q:"\"She ___ coffee every morning\" doğru olan hangisi?",opts:["drink","drinks","drinking","drinkes"],correct:1},
        {q:"\"They ___ here\" olumsuz hali nedir?",opts:["doesn't live","don't live","not live","isn't live"],correct:1},
        {q:"\"He go\" doğru mu?",opts:["Evet doğru","Hayır, 'He goes' olmalı","Hayır, 'He going' olmalı","Hayır, 'He gos' olmalı"],correct:1}
      ]}
    ]
  }
}),

// --- Unit: Soru Sorma ---
"questions-grammar-1": () => ({
  type:"grammar", title:"Soru Kelimeleri — WH Questions", level:"A1", minutes:15, unitId:"questions",
  data: {
    topic:"WH Question Words",
    explanationTr:"İngilizcede soru sormak için özel soru kelimeleri kullanılır. Bunlara <strong>WH Questions</strong> denir çünkü çoğu 'W' veya 'H' ile başlar.",
    rules:[
      {rule:"What — Ne?",examples:[{en:"<hl>What</hl> is your name?",tr:"Adın ne?"},{en:"<hl>What</hl> do you do?",tr:"Ne iş yaparsın?"},{en:"<hl>What</hl> time is it?",tr:"Saat kaç?"}]},
      {rule:"Where — Nerede? Nereye?",examples:[{en:"<hl>Where</hl> are you from?",tr:"Nerelisin?"},{en:"<hl>Where</hl> do you live?",tr:"Nerede yaşıyorsun?"},{en:"<hl>Where</hl> is the station?",tr:"İstasyon nerede?"}]},
      {rule:"When — Ne zaman?",examples:[{en:"<hl>When</hl> is your birthday?",tr:"Doğum günün ne zaman?"},{en:"<hl>When</hl> does the class start?",tr:"Ders ne zaman başlıyor?"},{en:"<hl>When</hl> do you wake up?",tr:"Ne zaman uyanırsın?"}]},
      {rule:"Who — Kim?",examples:[{en:"<hl>Who</hl> is your teacher?",tr:"Öğretmenin kim?"},{en:"<hl>Who</hl> are you?",tr:"Sen kimsin?"},{en:"<hl>Who</hl> made this?",tr:"Bunu kim yaptı?"}]},
      {rule:"Why — Neden?",examples:[{en:"<hl>Why</hl> are you sad?",tr:"Neden üzgünsün?"},{en:"<hl>Why</hl> do you study English?",tr:"Neden İngilizce öğreniyorsun?"},{en:"<hl>Why not</hl>?",tr:"Neden olmasın?"}]},
      {rule:"How — Nasıl?",examples:[{en:"<hl>How</hl> are you?",tr:"Nasılsın?"},{en:"<hl>How</hl> do you go to work?",tr:"İşe nasıl gidiyorsun?"},{en:"<hl>How much</hl> is this?",tr:"Bu ne kadar?"}]}
    ],
    exercises:[
      {type:"fillBlank",items:[
        {sentence:"___ is your name?",answer:"What",opts:["What","Where","Who"]},
        {sentence:"___ do you live?",answer:"Where",opts:["What","Where","When"]},
        {sentence:"___ is your birthday?",answer:"When",opts:["When","What","How"]},
        {sentence:"___ are you sad?",answer:"Why",opts:["How","Who","Why"]},
        {sentence:"___ is your teacher?",answer:"Who",opts:["Who","What","Why"]}
      ]},
      {type:"quiz",items:[
        {q:"\"Nerelisin?\" İngilizcede nasıl sorulur?",opts:["What are you from?","Where are you from?","Who are you from?","When are you from?"],correct:1},
        {q:"\"How much\" ne soruyor?",opts:["Nasıl","Ne kadar","Kaç tane","Neden"],correct:1},
        {q:"Birinin mesleğini sormak için ne dersin?",opts:["Who do you do?","Where do you do?","What do you do?","When do you do?"],correct:2}
      ]}
    ]
  }
}),

// ============ MODULE: DAILY LIFE ============

// --- Unit: Aile & İnsanlar ---
"family-vocab-1": () => ({
  type:"vocabulary", title:"Aile Üyeleri", level:"A1", minutes:10, unitId:"family",
  data: {
    theme:"Aile",
    words:[
      {e:"Mother / Mom",t:"Anne",p:"/ˈmʌðər/",ex:"My mother is a teacher.",ext:"Annem öğretmendir."},
      {e:"Father / Dad",t:"Baba",p:"/ˈfɑːðər/",ex:"My father works in a bank.",ext:"Babam bankada çalışır."},
      {e:"Sister",t:"Kız kardeş",p:"/ˈsɪstər/",ex:"I have two sisters.",ext:"İki kız kardeşim var."},
      {e:"Brother",t:"Erkek kardeş",p:"/ˈbrʌðər/",ex:"My brother is older than me.",ext:"Erkek kardeşim benden büyük."},
      {e:"Grandmother",t:"Büyükanne/Babaanne",p:"/ˈɡrænˌmʌðər/",ex:"My grandmother makes great food.",ext:"Büyükannem harika yemek yapar."},
      {e:"Grandfather",t:"Büyükbaba/Dede",p:"/ˈɡrænˌfɑːðər/",ex:"My grandfather is 80 years old.",ext:"Dedem 80 yaşında."},
      {e:"Husband",t:"Koca/Eş (erkek)",p:"/ˈhʌzbənd/",ex:"Her husband is a doctor.",ext:"Kocası doktordur."},
      {e:"Wife",t:"Karı/Eş (kadın)",p:"/waɪf/",ex:"His wife is from Germany.",ext:"Eşi Almanya'dan."},
      {e:"Son",t:"Oğul",p:"/sʌn/",ex:"They have one son.",ext:"Bir oğulları var."},
      {e:"Daughter",t:"Kız (çocuk)",p:"/ˈdɔːtər/",ex:"Their daughter is 5.",ext:"Kızları 5 yaşında."},
      {e:"Uncle",t:"Amca/Dayı",p:"/ˈʌŋkəl/",ex:"My uncle lives in Ankara.",ext:"Amcam Ankara'da yaşar."},
      {e:"Aunt",t:"Hala/Teyze",p:"/ænt/",ex:"My aunt has three children.",ext:"Teyzem'in üç çocuğu var."},
      {e:"Cousin",t:"Kuzen",p:"/ˈkʌzən/",ex:"My cousin is my best friend.",ext:"Kuzenim en iyi arkadaşım."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Mother","Anne"],["Father","Baba"],["Sister","Kız kardeş"],["Husband","Koca"],["Daughter","Kız çocuk"]]},
      {type:"quiz",items:[
        {q:"Babanın annesine İngilizcede ne denir?",opts:["Mother","Aunt","Grandmother","Sister"],correct:2},
        {q:"\"Cousin\" ne demek?",opts:["Kardeş","Kuzen","Amca","Yeğen"],correct:1},
        {q:"\"Kız çocuk\" İngilizcede ne?",opts:["Son","Sister","Daughter","Wife"],correct:2}
      ]}
    ]
  }
}),
"family-grammar-1": () => ({
  type:"grammar", title:"İyelik Zamirleri — Possessives", level:"A1", minutes:12, unitId:"family",
  data: {
    topic:"Possessive Adjectives & Pronouns",
    explanationTr:"Sahiplik bildirmek için iyelik sıfatları (possessive adjectives) kullanılır. Bunlar isimlerden önce gelir.",
    rules:[
      {rule:"İyelik Sıfatları (Possessive Adjectives)",examples:[{en:"<hl>My</hl> name is Ayberk.",tr:"Benim adım Ayberk."},{en:"<hl>Your</hl> house is beautiful.",tr:"Senin evin güzel."},{en:"<hl>His</hl> car is red.",tr:"Onun (erkek) arabası kırmızı."},{en:"<hl>Her</hl> mother is a doctor.",tr:"Onun (kadın) annesi doktor."},{en:"<hl>Our</hl> school is big.",tr:"Bizim okulumuz büyük."},{en:"<hl>Their</hl> children are smart.",tr:"Onların çocukları zeki."}]},
      {rule:"'s ile sahiplik (Possessive 's)",examples:[{en:"<hl>Elif's</hl> book",tr:"Elif'in kitabı"},{en:"<hl>My father's</hl> car",tr:"Babamın arabası"},{en:"<hl>The teacher's</hl> desk",tr:"Öğretmenin masası"}]},
      {rule:"Çoğul isimlerde ' (apostrof) kullanımı",examples:[{en:"The <hl>students'</hl> books",tr:"Öğrencilerin kitapları"},{en:"My <hl>parents'</hl> house",tr:"Ebeveynlerimin evi"}]}
    ],
    exercises:[
      {type:"fillBlank",items:[
        {sentence:"___ name is Elif. (O kız)",answer:"Her",opts:["His","Her","Their"]},
        {sentence:"This is ___ book. (benim)",answer:"my",opts:["my","me","I"]},
        {sentence:"___ house is very big. (bizim)",answer:"Our",opts:["We","Us","Our"]},
        {sentence:"Is this ___ pen? (senin)",answer:"your",opts:["you","your","yours"]}
      ]},
      {type:"quiz",items:[
        {q:"\"Onun (erkek) arabası\" İngilizcede ne?",opts:["Her car","His car","Their car","Our car"],correct:1},
        {q:"\"Elif's book\" ne demek?",opts:["Elif kitap","Elif kitaba","Elif'in kitabı","Kitap Elif"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Günlük Rutinler ---
"routines-vocab-1": () => ({
  type:"vocabulary", title:"Günlük Aktiviteler", level:"A1", minutes:10, unitId:"routines",
  data: {
    theme:"Günlük Rutinler",
    words:[
      {e:"Wake up",t:"Uyanmak",p:"/weɪk ʌp/",ex:"I wake up at 7 AM.",ext:"Sabah 7'de uyanırım."},
      {e:"Get up",t:"Kalkmak",p:"/ɡɛt ʌp/",ex:"I get up immediately.",ext:"Hemen kalkarım."},
      {e:"Take a shower",t:"Duş almak",p:"/teɪk ə ˈʃaʊər/",ex:"I take a shower every morning.",ext:"Her sabah duş alırım."},
      {e:"Get dressed",t:"Giyinmek",p:"/ɡɛt drɛst/",ex:"I get dressed for work.",ext:"İş için giyinirim."},
      {e:"Have breakfast",t:"Kahvaltı yapmak",p:"/hæv ˈbrɛkfəst/",ex:"I have breakfast at 8.",ext:"8'de kahvaltı yaparım."},
      {e:"Go to work",t:"İşe gitmek",p:"/ɡoʊ tə wɜːrk/",ex:"I go to work by bus.",ext:"İşe otobüsle giderim."},
      {e:"Have lunch",t:"Öğle yemeği yemek",p:"/hæv lʌntʃ/",ex:"I have lunch at noon.",ext:"Öğlen yemek yerim."},
      {e:"Come home",t:"Eve gelmek",p:"/kʌm hoʊm/",ex:"I come home at 6 PM.",ext:"Akşam 6'da eve gelirim."},
      {e:"Cook dinner",t:"Akşam yemeği pişirmek",p:"/kʊk ˈdɪnər/",ex:"I cook dinner for my family.",ext:"Ailem için akşam yemeği pişiririm."},
      {e:"Watch TV",t:"TV izlemek",p:"/wɒtʃ tiːˈviː/",ex:"I watch TV after dinner.",ext:"Yemekten sonra TV izlerim."},
      {e:"Go to bed",t:"Yatağa gitmek",p:"/ɡoʊ tə bɛd/",ex:"I go to bed at 11 PM.",ext:"Gece 11'de yatarım."},
      {e:"Sleep",t:"Uyumak",p:"/sliːp/",ex:"I sleep 8 hours.",ext:"8 saat uyurum."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Sabah ilk ne yaparsın?",opts:["Go to work","Wake up","Have lunch","Cook dinner"],correct:1},
        {q:"\"Take a shower\" ne demek?",opts:["Duş almak","Yüzmek","Yıkamak","Temizlemek"],correct:0},
        {q:"\"Go to bed\" ne demek?",opts:["Yatağa gitmek","Uyumak","Kalkmak","Eve gitmek"],correct:0},
        {q:"Öğle yemeğini anlatmak için hangi ifade kullanılır?",opts:["Have breakfast","Have dinner","Have lunch","Have food"],correct:2}
      ]}
    ]
  }
}),
"routines-dialogue-1": () => ({
  type:"dialogue", title:"Günlük Rutin Hakkında Konuşma", level:"A1", minutes:10, unitId:"routines",
  data: {
    context:"İki arkadaş günlük rutinleri hakkında konuşuyor.",
    lines:[
      {speaker:"A",text:"What time do you usually wake up?",tr:"Genellikle saat kaçta uyanırsın?"},
      {speaker:"B",text:"I wake up at 6:30. What about you?",tr:"6:30'da uyanırım. Ya sen?"},
      {speaker:"A",text:"I wake up at 7. Do you have breakfast every day?",tr:"Ben 7'de uyanırım. Her gün kahvaltı yapar mısın?"},
      {speaker:"B",text:"Yes, I always have breakfast. I eat eggs and bread.",tr:"Evet, her zaman kahvaltı yaparım. Yumurta ve ekmek yerim."},
      {speaker:"A",text:"How do you go to work?",tr:"İşe nasıl gidersin?"},
      {speaker:"B",text:"I take the bus. It takes about 30 minutes.",tr:"Otobüse binerim. Yaklaşık 30 dakika sürer."},
      {speaker:"A",text:"What do you do after work?",tr:"İşten sonra ne yaparsın?"},
      {speaker:"B",text:"I usually go to the gym. Then I cook dinner and watch TV.",tr:"Genellikle spor salonuna giderim. Sonra yemek pişirir ve TV izlerim."},
      {speaker:"A",text:"What time do you go to bed?",tr:"Saat kaçta yatarsın?"},
      {speaker:"B",text:"I go to bed around 11. I need 7 hours of sleep!",tr:"11 civarı yatarım. 7 saat uyumam lazım!"}
    ],
    keyPhrases:[
      {en:"What time do you...?",tr:"Saat kaçta...?"},
      {en:"What about you?",tr:"Ya sen?"},
      {en:"I usually...",tr:"Genellikle..."},
      {en:"It takes about...",tr:"Yaklaşık ... sürer."},
      {en:"After work",tr:"İşten sonra"}
    ],
    quiz:[
      {q:"\"What about you?\" ne demek?",opts:["Seninle ne?","Ya sen?","Sen nasılsın?","Ne yaparsın?"],correct:1},
      {q:"\"I usually go to the gym\" ne demek?",opts:["Spor salonuna gidiyorum","Genellikle spor salonuna giderim","Spor salonunu seviyorum","Spor salonuna gittim"],correct:1}
    ]
  }
}),

// --- Unit: Yiyecek & İçecekler ---
"food-drink-vocab-1": () => ({
  type:"vocabulary", title:"Temel Yiyecekler", level:"A1", minutes:10, unitId:"food-drink",
  data: {
    theme:"Yiyecekler",
    words:[
      {e:"Bread",t:"Ekmek",p:"/brɛd/",ex:"I eat bread every day.",ext:"Her gün ekmek yerim."},
      {e:"Rice",t:"Pirinç/Pilav",p:"/raɪs/",ex:"We have rice with chicken.",ext:"Tavukla pilav yeriz."},
      {e:"Chicken",t:"Tavuk",p:"/ˈtʃɪkɪn/",ex:"Grilled chicken is delicious.",ext:"Izgara tavuk lezzetlidir."},
      {e:"Meat",t:"Et",p:"/miːt/",ex:"I don't eat red meat.",ext:"Kırmızı et yemem."},
      {e:"Fish",t:"Balık",p:"/fɪʃ/",ex:"Fish is good for health.",ext:"Balık sağlık için iyidir."},
      {e:"Egg",t:"Yumurta",p:"/ɛɡ/",ex:"I have two eggs for breakfast.",ext:"Kahvaltıda iki yumurta yerim."},
      {e:"Cheese",t:"Peynir",p:"/tʃiːz/",ex:"Turkish cheese is famous.",ext:"Türk peyniri ünlüdür."},
      {e:"Fruit",t:"Meyve",p:"/fruːt/",ex:"Eat more fruit!",ext:"Daha çok meyve ye!"},
      {e:"Vegetable",t:"Sebze",p:"/ˈvɛdʒtəbl/",ex:"I like vegetables.",ext:"Sebzeleri severim."},
      {e:"Salad",t:"Salata",p:"/ˈsæləd/",ex:"A fresh salad, please.",ext:"Taze bir salata lütfen."},
      {e:"Soup",t:"Çorba",p:"/suːp/",ex:"Lentil soup is my favorite.",ext:"Mercimek çorbası favorimdir."},
      {e:"Pasta",t:"Makarna",p:"/ˈpæstə/",ex:"I cook pasta on Fridays.",ext:"Cuma günleri makarna pişiririm."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Bread","Ekmek"],["Chicken","Tavuk"],["Cheese","Peynir"],["Soup","Çorba"],["Egg","Yumurta"]]},
      {type:"quiz",items:[
        {q:"\"Sebze\" İngilizcede ne?",opts:["Fruit","Vegetable","Salad","Rice"],correct:1},
        {q:"\"Fish\" ne demek?",opts:["Tavuk","Et","Balık","Yumurta"],correct:2},
        {q:"\"Mercimek çorbası\" için hangi kelime gerekir?",opts:["Salad","Pasta","Soup","Rice"],correct:2}
      ]}
    ]
  }
}),
"food-drink-vocab-2": () => ({
  type:"vocabulary", title:"İçecekler & Sipariş Verme", level:"A1", minutes:10, unitId:"food-drink",
  data: {
    theme:"İçecekler",
    words:[
      {e:"Water",t:"Su",p:"/ˈwɔːtər/",ex:"Can I have some water?",ext:"Su alabilir miyim?"},
      {e:"Tea",t:"Çay",p:"/tiː/",ex:"Turkish tea is very strong.",ext:"Türk çayı çok sert."},
      {e:"Coffee",t:"Kahve",p:"/ˈkɒfi/",ex:"I drink coffee every morning.",ext:"Her sabah kahve içerim."},
      {e:"Milk",t:"Süt",p:"/mɪlk/",ex:"Children drink milk.",ext:"Çocuklar süt içer."},
      {e:"Juice",t:"Meyve suyu",p:"/dʒuːs/",ex:"Orange juice, please.",ext:"Portakal suyu lütfen."},
      {e:"I would like...",t:"...istiyorum (kibar)",p:"/aɪ wʊd laɪk/",ex:"I would like a coffee.",ext:"Bir kahve istiyorum."},
      {e:"Can I have...?",t:"...alabilir miyim?",p:"/kæn aɪ hæv/",ex:"Can I have the menu?",ext:"Menüyü alabilir miyim?"},
      {e:"The bill, please",t:"Hesap lütfen",p:"/ðə bɪl pliːz/",ex:"The bill, please.",ext:"Hesap lütfen."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Restoranda kibar bir şekilde su istemek için ne dersin?",opts:["Give me water!","Water now!","I would like some water, please.","Water!"],correct:2},
        {q:"\"Can I have the menu?\" ne demek?",opts:["Menüyü verir misiniz?","Menü nerede?","Menüyü alabilir miyim?","Bu menü mü?"],correct:2},
        {q:"\"Juice\" ne demek?",opts:["Su","Çay","Meyve suyu","Süt"],correct:2},
        {q:"Hesabı istemek için ne dersin?",opts:["Money please","The bill, please","Pay now","How much all?"],correct:1}
      ]}
    ]
  }
}),
"food-drink-grammar-1": () => ({
  type:"grammar", title:"Countable & Uncountable — Sayılabilen & Sayılamayan", level:"A2", minutes:15, unitId:"food-drink",
  data: {
    topic:"Countable & Uncountable Nouns",
    explanationTr:"İngilizcede isimler ikiye ayrılır:<br><br><strong>Countable (Sayılabilen):</strong> Önüne sayı koyabilirsin → one apple, two eggs, three books<br><strong>Uncountable (Sayılamayan):</strong> Önüne sayı koyamazsın → water, rice, milk, bread<br><br>Bu ayrım <strong>some, any, much, many</strong> gibi kelimelerin kullanımını etkiler.",
    rules:[
      {rule:"Sayılabilen (Countable) → a/an, sayı, many, few",examples:[{en:"<hl>An</hl> apple, <hl>two</hl> apples",tr:"Bir elma, iki elma"},{en:"How <hl>many</hl> eggs do you want?",tr:"Kaç yumurta istiyorsun?"},{en:"There are <hl>a few</hl> oranges left.",tr:"Birkaç portakal kaldı."}]},
      {rule:"Sayılamayan (Uncountable) → some, much, a little",examples:[{en:"<hl>Some</hl> water, please.",tr:"Biraz su lütfen."},{en:"How <hl>much</hl> milk do you need?",tr:"Ne kadar süt lazım?"},{en:"There is <hl>a little</hl> rice left.",tr:"Biraz pirinç kaldı."}]},
      {rule:"Some → olumlu cümlelerde, Any → olumsuz ve soru cümlelerinde",examples:[{en:"I have <hl>some</hl> bread.",tr:"Biraz ekmeğim var."},{en:"Do you have <hl>any</hl> milk?",tr:"Hiç sütün var mı?"},{en:"I don't have <hl>any</hl> sugar.",tr:"Hiç şekerim yok."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"Water\" sayılabilen mi sayılamayan mı?",opts:["Sayılabilen (Countable)","Sayılamayan (Uncountable)"],correct:1},
        {q:"\"How ___ apples do you want?\" boşluğa ne gelir?",opts:["much","many","some","any"],correct:1},
        {q:"\"I don't have ___ milk\" boşluğa ne gelir?",opts:["some","many","any","a"],correct:2},
        {q:"Hangisi sayılamayan (uncountable) bir isimdir?",opts:["Egg","Apple","Rice","Orange"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Alışveriş ---
"shopping-vocab-1": () => ({
  type:"vocabulary", title:"Alışveriş Kelimeleri", level:"A2", minutes:10, unitId:"shopping",
  data: {
    theme:"Alışveriş",
    words:[
      {e:"Shop / Store",t:"Dükkân / Mağaza",p:"/ʃɒp/",ex:"There's a shop on the corner.",ext:"Köşede bir dükkân var."},
      {e:"Buy",t:"Satın almak",p:"/baɪ/",ex:"I want to buy a new phone.",ext:"Yeni bir telefon almak istiyorum."},
      {e:"Sell",t:"Satmak",p:"/sɛl/",ex:"They sell fresh vegetables.",ext:"Taze sebze satarlar."},
      {e:"Price",t:"Fiyat",p:"/praɪs/",ex:"What is the price?",ext:"Fiyatı ne?"},
      {e:"Cheap",t:"Ucuz",p:"/tʃiːp/",ex:"This is very cheap.",ext:"Bu çok ucuz."},
      {e:"Expensive",t:"Pahalı",p:"/ɪkˈspɛnsɪv/",ex:"That bag is expensive.",ext:"O çanta pahalı."},
      {e:"Size",t:"Beden/Boyut",p:"/saɪz/",ex:"What size do you need?",ext:"Hangi bedeni istiyorsunuz?"},
      {e:"Cash",t:"Nakit",p:"/kæʃ/",ex:"I'll pay cash.",ext:"Nakit ödeyeceğim."},
      {e:"Card",t:"Kart",p:"/kɑːrd/",ex:"Can I pay by card?",ext:"Kartla ödeyebilir miyim?"},
      {e:"Receipt",t:"Fiş/Makbuz",p:"/rɪˈsiːt/",ex:"Can I have the receipt?",ext:"Fişi alabilir miyim?"},
      {e:"Try on",t:"Denemek (giysi)",p:"/traɪ ɒn/",ex:"Can I try this on?",ext:"Bunu deneyebilir miyim?"},
      {e:"Discount",t:"İndirim",p:"/ˈdɪskaʊnt/",ex:"Is there a discount?",ext:"İndirim var mı?"}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Buy","Satın almak"],["Sell","Satmak"],["Cheap","Ucuz"],["Expensive","Pahalı"],["Discount","İndirim"]]},
      {type:"quiz",items:[
        {q:"\"Can I try this on?\" ne demek?",opts:["Bunu alabilir miyim?","Bunu deneyebilir miyim?","Bu kaç para?","Bunu iade edebilir miyim?"],correct:1},
        {q:"\"Receipt\" ne demek?",opts:["Fiyat","İndirim","Fiş","Kart"],correct:2},
        {q:"Bir şeyin pahalı olmadığını söylemek için hangi kelimeyi kullanırsın?",opts:["Expensive","Discount","Price","Cheap"],correct:3}
      ]}
    ]
  }
}),
"shopping-dialogue-1": () => ({
  type:"dialogue", title:"Mağazada Alışveriş", level:"A2", minutes:10, unitId:"shopping",
  data: {
    context:"Bir giyim mağazasında alışveriş yapılıyor.",
    lines:[
      {speaker:"A",text:"Hello, can I help you?",tr:"Merhaba, yardımcı olabilir miyim?"},
      {speaker:"B",text:"Yes, I'm looking for a jacket.",tr:"Evet, bir ceket arıyorum."},
      {speaker:"A",text:"What size are you?",tr:"Bedeniniz ne?"},
      {speaker:"B",text:"I'm medium. Do you have this in blue?",tr:"Medium. Bunun mavisi var mı?"},
      {speaker:"A",text:"Yes, here you are. Would you like to try it on?",tr:"Evet, buyurun. Denemek ister misiniz?"},
      {speaker:"B",text:"Yes, please. Where is the fitting room?",tr:"Evet lütfen. Kabinler nerede?"},
      {speaker:"A",text:"It's over there, on the right.",tr:"Şurada, sağ tarafta."},
      {speaker:"B",text:"I like it! How much is it?",tr:"Beğendim! Ne kadar?"},
      {speaker:"A",text:"It's 150 lira. We have a 20% discount today.",tr:"150 lira. Bugün %20 indirim var."},
      {speaker:"B",text:"Great! I'll take it. Can I pay by card?",tr:"Harika! Alıyorum. Kartla ödeyebilir miyim?"},
      {speaker:"A",text:"Of course. Here's your receipt.",tr:"Tabii ki. İşte fişiniz."},
      {speaker:"B",text:"Thank you. Goodbye!",tr:"Teşekkürler. Hoşça kalın!"}
    ],
    keyPhrases:[
      {en:"I'm looking for...",tr:"... arıyorum."},
      {en:"Do you have this in...?",tr:"Bunun ...'si var mı?"},
      {en:"How much is it?",tr:"Ne kadar?"},
      {en:"I'll take it.",tr:"Alıyorum."},
      {en:"Can I pay by card?",tr:"Kartla ödeyebilir miyim?"}
    ],
    quiz:[
      {q:"\"I'm looking for a jacket\" ne demek?",opts:["Ceketi beğendim","Ceket arıyorum","Ceketi denedim","Ceketi aldım"],correct:1},
      {q:"\"I'll take it\" ne demek?",opts:["Geri vereceğim","Düşüneceğim","Alıyorum","Beğenmedim"],correct:2}
    ]
  }
}),

// ============ MODULE: IELTS READING ============

// --- Unit: Reading Genel Bakış ---
"reading-overview-strategy-1": () => ({
  type:"strategy", title:"IELTS Reading — Format & Strateji", level:"B1", minutes:15, unitId:"reading-overview",
  data: {
    section:"reading",
    explanationTr:"IELTS Academic Reading testi <strong>60 dakika</strong> sürer ve <strong>3 pasaj</strong> içerir. Toplamda <strong>40 soru</strong> cevaplanır.<br><br><strong>Pasajlar giderek zorlaşır:</strong><br>• Passage 1: En kolay (genel konu)<br>• Passage 2: Orta zorluk<br>• Passage 3: En zor (akademik/soyut konu)<br><br>Her pasajda yaklaşık 13-14 soru bulunur.",
    dosDonts:{
      dos:[
        "Önce soruları oku, sonra pasajı tara",
        "Zaman yönetimi: her pasaja max 20 dakika",
        "Bilmediğin kelimeleri bağlamdan anlamaya çalış",
        "Cevabını bulamadığın soruyu atla, sonra dön",
        "Sorudaki anahtar kelimelerin eşanlamlılarını (synonym) ara"
      ],
      donts:[
        "Her kelimeyi anlamaya çalışma — zaman kaybı",
        "Bir soruda 3 dakikadan fazla takılma",
        "Kendi bilgine göre cevap verme — pasajdaki bilgiyi kullan",
        "Boş bırakma — yanlış cevap için puan kırılmaz",
        "Pasajı baştan sona okuma — tarama (scanning) yap"
      ]
    },
    timingAdvice:"Passage 1: 17 dk | Passage 2: 20 dk | Passage 3: 23 dk",
    bandTips:{
      "5.5":"40 sorudan 23-26 doğru yapman gerekiyor.",
      "6.0":"40 sorudan 27-29 doğru yapman gerekiyor.",
      "6.5":"40 sorudan 30-32 doğru yapman gerekiyor.",
      "7.0":"40 sorudan 33-35 doğru yapman gerekiyor.",
      "7.5":"40 sorudan 36-38 doğru yapman gerekiyor."
    }
  }
}),
"reading-overview-reading-1": () => ({
  type:"reading", title:"Pratik Pasaj: City Life vs Country Life", level:"B1", minutes:20, unitId:"reading-overview",
  data: {
    passage:"Many people around the world face the decision of whether to live in a city or in the countryside. Both options have clear advantages and disadvantages.\n\nCity life offers many benefits. There are more job opportunities, better public transport, and a wide range of entertainment options such as cinemas, restaurants, and shopping centres. Cities also tend to have better healthcare facilities and educational institutions. However, city life can be stressful. The cost of living is usually higher, there is more pollution, and people often feel isolated despite being surrounded by millions.\n\nOn the other hand, country life provides a quieter and more relaxed environment. The air is cleaner, there is more open space, and communities tend to be closer. Many people enjoy growing their own food and being closer to nature. However, rural areas often lack public transport, and residents may need to travel long distances for work or shopping. There are also fewer entertainment options and sometimes limited internet access.\n\nUltimately, the choice depends on individual preferences and priorities. Some people thrive in the fast-paced urban environment, while others prefer the peace and simplicity of rural living.",
    passageTr:"Dünyadaki birçok insan şehirde mi yoksa kırsalda mı yaşayacağına karar vermek zorunda kalır...",
    wordGlossary:[
      {en:"advantages",tr:"avantajlar"},
      {en:"disadvantages",tr:"dezavantajlar"},
      {en:"public transport",tr:"toplu taşıma"},
      {en:"entertainment",tr:"eğlence"},
      {en:"healthcare facilities",tr:"sağlık tesisleri"},
      {en:"isolated",tr:"yalnız/izole"},
      {en:"rural areas",tr:"kırsal alanlar"},
      {en:"ultimately",tr:"sonuçta"},
      {en:"thrive",tr:"gelişmek/başarılı olmak"},
      {en:"fast-paced",tr:"hızlı tempolu"}
    ],
    questions:[
      {type:"multiple_choice",q:"What is one advantage of city life mentioned in the passage?",opts:["Cleaner air","More job opportunities","Quieter environment","Closer communities"],correct:1,explanationTr:"Pasajda 'more job opportunities' (daha fazla iş fırsatı) şehir hayatının avantajı olarak belirtilmiş."},
      {type:"true_false",q:"According to the passage, city life is always better than country life.",answer:false,explanationTr:"Pasaj her iki yaşam tarzının da avantaj ve dezavantajları olduğunu söylüyor. 'Always better' demiyor."},
      {type:"multiple_choice",q:"What problem do rural areas often face?",opts:["Too much pollution","Lack of public transport","High cost of living","Too many people"],correct:1,explanationTr:"Pasajda 'rural areas often lack public transport' (kırsal alanlarda genellikle toplu taşıma eksik) denilmiş."},
      {type:"true_false",q:"People in cities sometimes feel lonely.",answer:true,explanationTr:"Pasajda 'people often feel isolated despite being surrounded by millions' (milyonlarca insanla çevrili olmalarına rağmen yalnız hissediyorlar) denilmiş."},
      {type:"multiple_choice",q:"The word 'thrive' in the last paragraph is closest in meaning to:",opts:["Suffer","Succeed","Survive","Struggle"],correct:1,explanationTr:"'Thrive' başarılı olmak, gelişmek demektir. 'Succeed' (başarılı olmak) en yakın anlamıdır."}
    ]
  }
}),

// ============ MODULE: IELTS WRITING ============

"writing-overview-strategy-1": () => ({
  type:"strategy", title:"IELTS Writing — Format & Strateji", level:"B1", minutes:15, unitId:"writing-overview",
  data: {
    section:"writing",
    explanationTr:"IELTS Academic Writing testi <strong>60 dakika</strong> sürer ve <strong>2 görev (task)</strong> içerir.<br><br><strong>Task 1 (20 dakika):</strong> Bir grafik, tablo, diyagram veya haritayı açıkla. En az 150 kelime.<br><strong>Task 2 (40 dakika):</strong> Bir konuda essay yaz. En az 250 kelime.<br><br><strong>Task 2, Task 1'den daha önemlidir</strong> — toplam puanın 2/3'ünü oluşturur.",
    dosDonts:{
      dos:[
        "Task 2'ye daha fazla zaman ayır (40 dk)",
        "Planlama yap — yazmaya başlamadan önce 3-5 dk düşün",
        "Paragraf yapısını koru: giriş, gelişme, sonuç",
        "Bağlaçlar kullan: However, Moreover, In addition, Furthermore",
        "Kelime tekrarından kaçın — synonym (eşanlamlı) kullan"
      ],
      donts:[
        "Ezberlenmiş kalıpları olduğu gibi yapıştırma",
        "Task 1'de kişisel fikir belirtme — sadece verileri açıkla",
        "Kelime sayısının altında kalma (150/250)",
        "Informal dil kullanma (don't → do not, wanna → want to)",
        "Sonuç paragrafı yazmayı unutma"
      ]
    },
    timingAdvice:"Task 1: 20 dk (5 dk plan + 15 dk yaz) | Task 2: 40 dk (5 dk plan + 30 dk yaz + 5 dk kontrol)",
    bandTips:{
      "5.5":"Temel paragraf yapısını kur, basit bağlaçlar kullan.",
      "6.0":"Net bir yapı oluştur, çeşitli bağlaçlar kullan, daha az hata yap.",
      "6.5":"Fikirlerini detaylı açıkla, karmaşık cümle yapıları kullan.",
      "7.0":"Sofistike kelime seçimleri, tutarlı argüman, minimal hata.",
      "7.5":"Akademik üslup, gelişmiş gramer yapıları, etkileyici kelime dağarcığı."
    }
  }
}),
"task2-opinion-writing-1": () => ({
  type:"writing", title:"Opinion Essay — Örnek Çalışma", level:"B1", minutes:25, unitId:"task2-opinion",
  data: {
    taskType:"task2",
    prompt:"Some people believe that university education should be free for everyone. Others think that students should pay for their own education. Discuss both views and give your opinion.",
    promptTr:"Bazı insanlar üniversite eğitiminin herkes için ücretsiz olması gerektiğine inanır. Diğerleri öğrencilerin kendi eğitimlerinin bedelini ödemesi gerektiğini düşünür. Her iki görüşü tartışın ve kendi fikrinizi verin.",
    tips:[
      "4 paragraflı bir yapı kullan: Giriş → Görüş 1 → Görüş 2 → Sonuç",
      "Giriş paragrafında konuyu tanıt ve kendi görüşünü belirt",
      "Her paragrafta bir ana fikir + destekleyici örnek olsun",
      "Son paragrafta görüşünü tekrarla ama farklı kelimelerle"
    ],
    modelAnswer:"Education is a fundamental right, and the question of whether university education should be free has been widely debated. In my opinion, while free education has clear benefits, a balanced approach would be more practical.\n\nOn the one hand, proponents of free university education argue that it promotes equality. Students from low-income families often cannot afford tuition fees, which means they miss out on higher education opportunities. Making education free would ensure that everyone has an equal chance to succeed, regardless of their financial background.\n\nOn the other hand, critics argue that free education places a heavy burden on taxpayers. Governments would need to allocate enormous budgets to fund universities, which could lead to cuts in other essential services such as healthcare. Additionally, when education is free, some students may not value it as much and may drop out more easily.\n\nIn conclusion, I believe that a middle-ground solution, such as providing scholarships for talented students from disadvantaged backgrounds while maintaining reasonable fees for others, would be the most effective approach. This would ensure both accessibility and quality in higher education.",
    vocabulary:[
      {en:"fundamental right",tr:"temel hak"},
      {en:"proponents",tr:"savunucular"},
      {en:"low-income",tr:"düşük gelirli"},
      {en:"tuition fees",tr:"öğrenim ücreti"},
      {en:"regardless of",tr:"... ne olursa olsun"},
      {en:"burden on taxpayers",tr:"vergi mükelleflerine yük"},
      {en:"allocate budgets",tr:"bütçe ayırmak"},
      {en:"middle-ground solution",tr:"orta yol çözüm"},
      {en:"disadvantaged backgrounds",tr:"dezavantajlı geçmiş"},
      {en:"accessibility",tr:"erişilebilirlik"}
    ],
    structures:[
      "In my opinion, ...",
      "On the one hand, ... On the other hand, ...",
      "Proponents of ... argue that ...",
      "Critics argue that ...",
      "In conclusion, I believe that ...",
      "This would ensure both ... and ..."
    ]
  }
}),

// ============ MODULE: IELTS SPEAKING ============

"speaking-overview-strategy-1": () => ({
  type:"strategy", title:"IELTS Speaking — Format & Strateji", level:"B1", minutes:15, unitId:"speaking-overview",
  data: {
    section:"speaking",
    explanationTr:"IELTS Speaking testi <strong>11-14 dakika</strong> sürer ve <strong>3 bölümden</strong> oluşur. Yüz yüze bir mülakatçı (examiner) ile yapılır.<br><br><strong>Part 1 (4-5 dk):</strong> Kendiniz hakkında genel sorular — iş, ev, hobiler vs.<br><strong>Part 2 (3-4 dk):</strong> Bir konu kartı (cue card) verilir. 1 dakika hazırlık, 2 dakika konuşma.<br><strong>Part 3 (4-5 dk):</strong> Part 2 ile ilgili daha derin, soyut sorular.<br><br><strong>Değerlendirme kriterleri:</strong> Fluency (akıcılık), Lexical Resource (kelime), Grammar, Pronunciation (telaffuz).",
    dosDonts:{
      dos:[
        "Doğal ve rahat konuş — ezberlenmiş cevap verme",
        "Cevaplarını genişlet — sadece 'yes/no' deme, neden/nasıl açıkla",
        "Fillers kullan: Well, Actually, I mean, To be honest",
        "Part 2'de 1 dakikalık hazırlık süresini iyi kullan — not al",
        "Hata yaparsan düzelt ve devam et — panik yapma"
      ],
      donts:[
        "Çok kısa cevaplar verme (1-2 kelime)",
        "Ezberlenmiş cevapları aynen tekrarlama",
        "Anlamadığın soruyu tahmin etmeye çalışma — tekrar sor",
        "Çok hızlı veya çok yavaş konuşma",
        "Türkçe kelime karıştırma"
      ]
    },
    timingAdvice:"Part 1: 4-5 dk | Part 2: 1 dk hazırlık + 2 dk konuşma | Part 3: 4-5 dk",
    bandTips:{
      "5.5":"Basit cümlelerle fikrini ifade et, bazı hatalar olabilir.",
      "6.0":"Fikirlerini genişlet, bağlaçlar kullan, az tekrar yap.",
      "6.5":"Çeşitli kelime ve gramer yapıları kullan, düzgün telaffuz.",
      "7.0":"Doğal akıcılık, idiomatic ifadeler, minimal hata.",
      "7.5":"Sofistike dil kullanımı, tartışmayı derinleştir, mükemmel telaffuz."
    }
  }
}),
"part1-intro-speaking-1": () => ({
  type:"speaking", title:"Part 1 — Ev & Yaşadığın Yer", level:"B1", minutes:15, unitId:"part1-intro",
  data: {
    topic:"Home & Where You Live",
    questions:[
      "Where do you live?",
      "Do you live in a house or an apartment?",
      "What do you like about your home?",
      "How long have you lived there?",
      "Would you like to move to a different place?"
    ],
    modelAnswers:[
      {text:"I live in Istanbul, which is the largest city in Turkey. I live in an apartment in the Kadıköy district. I really like my neighborhood because it's very lively and there are lots of cafes and restaurants nearby. I've been living there for about three years now. Honestly, I'm quite happy where I am, but maybe in the future I'd like to move to a quieter area.",band:"6.0-6.5"},
      {text:"Well, I'm currently based in Istanbul, on the Asian side of the city, in a district called Kadıköy. I live in a modern apartment on the fifth floor, which has a lovely view of the sea. What I particularly enjoy about my home is the location — it's incredibly convenient because everything I need is within walking distance. I've been living there for roughly three years, and to be honest, I've grown quite attached to the neighborhood. That said, I sometimes consider relocating to a less hectic area where I could have a garden.",band:"7.0-7.5"}
    ],
    usefulPhrases:[
      {en:"I'm currently based in...",tr:"Şu anda ... yaşıyorum."},
      {en:"What I particularly enjoy is...",tr:"Özellikle hoşuma giden..."},
      {en:"I've been living there for...",tr:"Orada ... zamandır yaşıyorum."},
      {en:"To be honest...",tr:"Açıkçası..."},
      {en:"I sometimes consider...",tr:"Bazen ... düşünüyorum."},
      {en:"within walking distance",tr:"yürüme mesafesinde"},
      {en:"I've grown quite attached to...",tr:"...'ya oldukça bağlandım."},
      {en:"That said, ...",tr:"Öte yandan, ..."}
    ]
  }
})

};

// ==================== DERS İNDEKSİ ====================
// Her unit'in ders listesini id olarak tutar
const UNIT_LESSONS = {
  "alphabet-basics": ["alphabet-basics-vocab-1","alphabet-basics-vocab-2","alphabet-basics-grammar-1"],
  "greetings": ["greetings-vocab-1","greetings-grammar-1","greetings-dialogue-1","greetings-speaking-1"],
  "numbers-colors": ["numbers-colors-vocab-1","numbers-colors-vocab-2","numbers-colors-grammar-1"],
  "basic-verbs": ["basic-verbs-vocab-1","basic-verbs-grammar-1"],
  "questions": ["questions-grammar-1"],
  "family": ["family-vocab-1","family-grammar-1"],
  "routines": ["routines-vocab-1","routines-dialogue-1"],
  "food-drink": ["food-drink-vocab-1","food-drink-vocab-2","food-drink-grammar-1"],
  "shopping": ["shopping-vocab-1","shopping-dialogue-1"],
  "transport": [],
  "home": [],
  "hobbies": [],
  "travel": [],
  "health": [],
  "opinions": [],
  "feelings": [],
  "technology": [],
  "formal-lang": [],
  "academic-vocab": [],
  "paragraph-structure": [],
  "linking-words": [],
  "paraphrasing": [],
  "reading-overview": ["reading-overview-strategy-1","reading-overview-reading-1"],
  "skimming-scanning": [],
  "true-false-ng": [],
  "matching-headings": [],
  "fill-blanks": [],
  "multiple-choice-reading": [],
  "writing-overview": ["writing-overview-strategy-1"],
  "task1-graphs": [],
  "task1-process": [],
  "task2-opinion": ["task2-opinion-writing-1"],
  "task2-discuss": [],
  "task2-problem": [],
  "listening-overview": [],
  "section1-2": [],
  "section3-4": [],
  "note-completion": [],
  "listening-traps": [],
  "speaking-overview": ["speaking-overview-strategy-1"],
  "part1-intro": ["part1-intro-speaking-1"],
  "part2-cuecard": [],
  "part3-discussion": [],
  "pronunciation": []
};

// ==================== KİŞİSELLEŞTİRİLMİŞ ÖĞRENME YOLU ====================
const LEVEL_START = {
  "zero": "foundations",
  "beginner": "foundations",
  "elementary": "daily-life",
  "intermediate": "academic",
  "upper": "ielts-reading"
};

function generateLearningPath(onboarding) {
  const startModuleId = LEVEL_START[onboarding.level] || "foundations";
  const startIdx = MODULES.findIndex(m => m.id === startModuleId);
  const weakAreas = onboarding.weakAreas || [];

  // Collect all lessons from start module onward
  let path = [];
  for (let i = startIdx; i < MODULES.length; i++) {
    const mod = MODULES[i];
    const units = UNITS[mod.id] || [];
    for (const unit of units) {
      const lessonIds = UNIT_LESSONS[unit.id] || [];
      for (const lid of lessonIds) {
        const factory = LESSON_DATA[lid];
        if (!factory) continue;
        const lesson = factory();
        let priority = 1;

        // Boost priority for weak areas
        if (weakAreas.includes("vocabulary") && lesson.type === "vocabulary") priority += 2;
        if (weakAreas.includes("grammar") && lesson.type === "grammar") priority += 2;
        if (weakAreas.includes("reading") && lesson.type === "reading") priority += 2;
        if (weakAreas.includes("writing") && lesson.type === "writing") priority += 2;
        if (weakAreas.includes("speaking") && lesson.type === "speaking") priority += 2;
        if (weakAreas.includes("listening") && lesson.type === "listening") priority += 2;

        path.push({ id: lid, moduleId: mod.id, unitId: unit.id, type: lesson.type, priority, title: lesson.title });
      }
    }
  }

  // Sort within each module: higher priority first, but keep module order
  // This ensures weak-area lessons come earlier within each module
  let sorted = [];
  let currentModule = null;
  let moduleBuffer = [];
  for (const item of path) {
    if (item.moduleId !== currentModule) {
      if (moduleBuffer.length > 0) {
        moduleBuffer.sort((a, b) => b.priority - a.priority);
        sorted.push(...moduleBuffer);
      }
      moduleBuffer = [item];
      currentModule = item.moduleId;
    } else {
      moduleBuffer.push(item);
    }
  }
  if (moduleBuffer.length > 0) {
    moduleBuffer.sort((a, b) => b.priority - a.priority);
    sorted.push(...moduleBuffer);
  }

  // Daily allocation
  const dailyMap = { "15min": 1, "30min": 2, "1hour": 3, "2hours": 5 };
  const daily = dailyMap[onboarding.dailyTime] || 2;

  return {
    lessons: sorted.map(s => s.id),
    currentIndex: 0,
    dailyAllocation: daily,
    totalEstimatedDays: Math.ceil(sorted.length / daily)
  };
}

// Helper: get lesson data by id
function getLesson(id) {
  const factory = LESSON_DATA[id];
  if (!factory) return null;
  const lesson = factory();
  lesson.id = id;
  return lesson;
}

// Get all lessons for a unit
function getUnitLessons(unitId) {
  return (UNIT_LESSONS[unitId] || []).map(id => getLesson(id)).filter(Boolean);
}

// Count total available lessons
function countTotalLessons() {
  let count = 0;
  for (const key in UNIT_LESSONS) {
    count += UNIT_LESSONS[key].length;
  }
  return count;
}
