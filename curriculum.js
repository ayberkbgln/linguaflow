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
      {type:"match",q:"Kelimeyi anlamıyla eşleştir",pairs:[["Apple","Elma"],["Book","Kitap"],["Cat","Kedi"],["Dog","Köpek"],["House","Ev"]]},
      {type:"quiz",items:[
        {q:"\"Good morning\" ne zaman kullanılır?",opts:["Gece yatarken","Sabah karşılaşınca","Öğleden sonra","Vedalaşırken"],correct:1},
        {q:"\"I have ___ apple.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:1,hint:"Sesli harfle başlayan kelimelerden önce 'an' kullanılır."},
        {q:"Hangisi doğrudur?",opts:["She is a cat.","It is a cat.","He is a cat.","They is a cat."],correct:1,hint:"Hayvanlar ve nesneler için 'it' kullanılır."},
        {q:"\"House\" ne demek?",opts:["Araba","Okul","Ev","İş"],correct:2}
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
        {q:"\"Thank you\" ne demek?",opts:["Özür dilerim","Lütfen","Teşekkür ederim","Merhaba"],correct:2},
        {q:"\"She is ___ teacher.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"Türkçede artikel yoktur ama İngilizcede 'a/an' önemlidir."},
        {q:"\"Red\" ne anlama gelir?",opts:["Yeşil","Mavi","Kırmızı","Sarı"],correct:2},
        {q:"\"Please\" hangi durumda kullanılır?",opts:["Özür dilerken","Rica ederken/Lütfen","Vedalaşırken","Kızgınken"],correct:1},
        {q:"Doğru cümle hangisidir?",opts:["I am drink water.","I drink water.","I water drink.","Drink I water."],correct:1,hint:"İngilizcede cümle sırası: Özne + Fiil + Nesne (SVO). Türkçedeki gibi fiil sonda olmaz."}
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
        {q:"\"Cat\" ve \"Cut\" arasındaki fark nedir?",opts:["Aynı anlama gelir","Farklı sesli harflerle farklı anlamlar","Biri fiil, biri isim değil","Hiçbir fark yok"],correct:1},
        {q:"Her İngilizce kelimede en az ne bulunur?",opts:["Bir sessiz harf","İki harf","Bir sesli harf","Üç harf"],correct:2},
        {q:"\"___ egg\" boşluğa ne gelir?",opts:["a","an","the","—"],correct:1,hint:"'Egg' sesli harfle başlar, bu yüzden 'an' kullanılır."},
        {q:"Hangisi doğru cümle sırasıdır?",opts:["Cat is the big.","The cat big is.","The cat is big.","Big is the cat."],correct:2,hint:"İngilizcede sıra: Özne + Fiil + Sıfat. Türkçedeki gibi 'Kedi büyük' değil."},
        {q:"\"Ice\" kelimesinde \"I\" nasıl okunur?",opts:["/i/ (kısa i)","/aɪ/ (ay)","/ɪ/ (ı)","Okunmaz"],correct:1}
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
        {q:"\"Excuse me\" ne zaman kullanılır?",opts:["Vedalaşırken","Dikkat çekmek için","Teşekkür ederken","Uyurken"],correct:1},
        {q:"Ayşe is my friend. '___ is very nice.' Boşluğa ne gelir?",opts:["He","It","She","They"],correct:2,hint:"Ayşe kadın ismidir. Türkçede 'o' denir ama İngilizcede kadın için 'she' kullanılır."}
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
        {q:"Ahmet is a doctor. '___ is very kind.' Boşluğa ne gelir?",opts:["She","It","They","He"],correct:3,hint:"Türkçede 'o' hem erkek hem kadın için kullanılır ama İngilizcede erkek = he, kadın = she."},
        {q:"\"They ___ students\" boşluğa ne gelir?",opts:["am","is","are","be"],correct:2},
        {q:"Hangisi doğrudur?",opts:["She is teacher.","She is a teacher.","She is the teacher.","She teacher is."],correct:1,hint:"İngilizcede mesleklerden önce 'a/an' article kullanılır."}
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
      {q:"\"What do you do?\" ne soruyor?",opts:["Ne yapıyorsun şu an?","Ne iş yapıyorsun?","Nereye gidiyorsun?","Ne istiyorsun?"],correct:1},
      {q:"Elif ne yapıyor?",opts:["Öğretmen","Doktor","İngilizce öğrenen bir öğrenci","Mühendis"],correct:2}
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
        {q:"\"I have ___ sister.\" Boşluğa ne gelir?",opts:["a","an","one","—"],correct:2,hint:"Sayı belirtirken 'one' kullanılır, 'a' genel article'dır."},
        {q:"\"Twelve\" kaç demek?",opts:["2","20","12","22"],correct:2},
        {q:"\"There are seven days ___ a week.\" Boşluğa ne gelir?",opts:["at","on","in","to"],correct:2,hint:"Türkçede 'haftada' derken ek kullanırız ama İngilizcede 'in' edatı gerekir."},
        {q:"\"Twenty\" kaç demek?",opts:["12","2","22","20"],correct:3},
        {q:"Hangisi doğrudur?",opts:["I have three book.","I have three books.","I have three a books.","Three books I have."],correct:1,hint:"Sayıdan sonra isim çoğul olur ve İngilizcede fiil sonda olmaz."}
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
        {q:"\"The sky is blue.\" Bu cümlede 'the' neden kullanıldı?",opts:["Çünkü bilinen/tek bir şeydir","Çünkü mavi","Gerek yok, 'a' da olur","Rastgele"],correct:0,hint:"'The' bilinen veya tek olan şeyler için kullanılır. Gökyüzü tektir."},
        {q:"\"Purple\" ne renk?",opts:["Pembe","Mor","Mavi","Turuncu"],correct:1},
        {q:"\"Kahverengi\" İngilizcede ne?",opts:["Black","Grey","Brown","Orange"],correct:2},
        {q:"\"I want ___ red apple.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"'Red' sessiz harfle başlar, bu yüzden 'a' kullanılır. 'An' değil!"},
        {q:"Hangisi doğru cümle sırasıdır?",opts:["Red is the car.","The car red is.","The car is red.","Is red the car."],correct:2,hint:"İngilizce sıra: Özne + Fiil + Sıfat."}
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
        {q:"\"tooth\" kelimesinin çoğulu nedir?",opts:["tooths","toothes","teeth","teeths"],correct:2},
        {q:"\"I see ___ children in the park.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:2,hint:"Bahsedilen çocuklar belirli ise 'the' kullanılır. Türkçede 'parkta çocukları görüyorum' derken bu ayrım yapılmaz."},
        {q:"Hangisi doğrudur?",opts:["There is three cats.","There are three cats.","Three cats there are.","Cats three are there."],correct:1,hint:"Çoğul isimlerle 'are' kullanılır ve İngilizcede cümle sırası farklıdır."}
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
        {q:"Mehmet wants coffee. '___ likes coffee.' Boşluğa ne gelir?",opts:["She","It","They","He"],correct:3,hint:"Mehmet erkek ismidir → 'He'. Türkçede 'o' denir ama İngilizcede cinsiyet ayrımı yapılır."},
        {q:"Hangisi doğru cümle sırasıdır?",opts:["I English speak.","Speak I English.","I speak English.","English I speak."],correct:2,hint:"Türkçede 'Ben İngilizce konuşurum' (SOV) ama İngilizcede 'I speak English' (SVO) — fiil ortada olur."}
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
        {q:"\"He go\" doğru mu?",opts:["Evet doğru","Hayır, 'He goes' olmalı","Hayır, 'He going' olmalı","Hayır, 'He gos' olmalı"],correct:1},
        {q:"Fatma ___ to school every day. Boşluğa ne gelir?",opts:["go","goes","going","gone"],correct:1,hint:"Fatma kadın ismidir → she goes. He/she/it ile fiile -s/-es eklenir."},
        {q:"\"I live ___ Istanbul.\" Boşluğa ne gelir?",opts:["at","on","in","to"],correct:2,hint:"Şehirlerle 'in' kullanılır. Türkçede 'İstanbul'da' derken ek kullanılır, İngilizcede edat gerekir."}
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
        {q:"Birinin mesleğini sormak için ne dersin?",opts:["Who do you do?","Where do you do?","What do you do?","When do you do?"],correct:2},
        {q:"Hangisi doğru soru sırasıdır?",opts:["You where live?","Where you live?","Where do you live?","Live where you do?"],correct:2,hint:"İngilizcede soru sırası: Soru kelimesi + do/does + özne + fiil. Türkçedeki sıra farklıdır."}
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
        {q:"\"Kız çocuk\" İngilizcede ne?",opts:["Son","Sister","Daughter","Wife"],correct:2},
        {q:"Ali's mother is a nurse. '___ works at a hospital.' Boşluğa ne gelir?",opts:["He","It","She","They"],correct:2,hint:"Ali'nin annesi kadındır → 'She'. Türkçede 'o' denir ama İngilizcede kadın = she, erkek = he."},
        {q:"\"My father is ___ engineer.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:1,hint:"'Engineer' sesli harfle başlar → 'an'. Mesleklerden önce article kullanılır."}
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
        {q:"\"Elif's book\" ne demek?",opts:["Elif kitap","Elif kitaba","Elif'in kitabı","Kitap Elif"],correct:2},
        {q:"Ahmet has a sister. '___ sister is tall.' Boşluğa ne gelir?",opts:["Her","His","Their","Our"],correct:1,hint:"Ahmet erkek → 'His'. Türkçede 'onun' hem erkek hem kadın için kullanılır ama İngilizcede erkek = his, kadın = her."},
        {q:"\"___ cat is on the table.\" (benim kedim)",opts:["I","Me","My","Mine"],correct:2,hint:"İyelik sıfatı 'my' isimden önce gelir."}
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
        {q:"\"I wake up ___ 7 AM.\" Boşluğa ne gelir?",opts:["in","on","at","to"],correct:2,hint:"Saat için 'at' kullanılır. Türkçede '7'de' derken ek kullanılır, İngilizcede edat gerekir."},
        {q:"\"Take a shower\" ne demek?",opts:["Duş almak","Yüzmek","Yıkamak","Temizlemek"],correct:0},
        {q:"\"Go to bed\" ne demek?",opts:["Yatağa gitmek","Uyumak","Kalkmak","Eve gitmek"],correct:0},
        {q:"Öğle yemeğini anlatmak için hangi ifade kullanılır?",opts:["Have breakfast","Have dinner","Have lunch","Have food"],correct:2},
        {q:"Hangisi doğrudur?",opts:["I to work go by bus.","I go to work by bus.","By bus I go to work.","Go I to work by bus."],correct:1,hint:"İngilizcede cümle sırası: Özne + Fiil + Yer + Araç. Türkçedeki sıra farklıdır."},
        {q:"\"She ___ breakfast ___ 8 o'clock.\" Boşluklara ne gelir?",opts:["have / in","has / at","have / at","has / on"],correct:1,hint:"She → has (3. tekil -s). Saat için 'at' kullanılır."}
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
      {q:"\"I usually go to the gym\" ne demek?",opts:["Spor salonuna gidiyorum","Genellikle spor salonuna giderim","Spor salonunu seviyorum","Spor salonuna gittim"],correct:1},
      {q:"B saat kaçta uyanıyor?",opts:["7:00","6:00","6:30","8:00"],correct:2},
      {q:"B işe nasıl gidiyor?",opts:["Yürüyerek","Arabayla","Otobüsle","Metroyla"],correct:2}
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
        {q:"\"I eat ___ egg for breakfast.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:1,hint:"'Egg' sesli harfle başlar → 'an'. Türkçede 'bir yumurta' derken ayrım yoktur."},
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
        {q:"\"Can I have ___ cup of tea?\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"'Cup' sessiz harfle başlar → 'a'. Sayılabilen şeylerden önce article kullanılır."},
        {q:"\"Juice\" ne demek?",opts:["Su","Çay","Meyve suyu","Süt"],correct:2},
        {q:"Hesabı istemek için ne dersin?",opts:["Money please","The bill, please","Pay now","How much all?"],correct:1},
        {q:"\"He drinks coffee ___ the morning.\" Boşluğa ne gelir?",opts:["at","on","in","to"],correct:2,hint:"Günün bölümleri için 'in' kullanılır: in the morning, in the afternoon, in the evening."}
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
        {q:"Hangisi sayılamayan (uncountable) bir isimdir?",opts:["Egg","Apple","Rice","Orange"],correct:2},
        {q:"Hangisi doğrudur?",opts:["I want bread.","I want a bread.","I want an bread.","I want the bread."],correct:0,hint:"'Bread' sayılamayan isimdir, önüne 'a/an' gelmez. Türkçede bu ayrım yoktur."}
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
        {q:"Bir şeyin pahalı olmadığını söylemek için hangi kelimeyi kullanırsın?",opts:["Expensive","Discount","Price","Cheap"],correct:3},
        {q:"\"I bought it ___ the shop ___ the corner.\" Boşluklara ne gelir?",opts:["at / in","in / at","at / on","from / on"],correct:2,hint:"Dükkan için 'at', köşe için 'on' kullanılır. Türkçede 'dükkanda', 'köşedeki' derken ek kullanılır."}
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
      {q:"\"I'll take it\" ne demek?",opts:["Geri vereceğim","Düşüneceğim","Alıyorum","Beğenmedim"],correct:2},
      {q:"Bugün ne kadar indirim var?",opts:["%10","%15","%20","%25"],correct:2},
      {q:"Müşteri nasıl ödeme yapmak istiyor?",opts:["Nakit","Kartla","Havaleyle","Çekle"],correct:1}
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
    },
    exercises:[{type:"quiz",items:[
      {q:"IELTS Reading testi toplamda kaç dakika sürer?",opts:["30 dakika","45 dakika","60 dakika","90 dakika"],correct:2},
      {q:"IELTS Reading'de kaç pasaj bulunur?",opts:["2","3","4","5"],correct:1},
      {q:"Toplam kaç soru cevaplanır?",opts:["20","30","40","50"],correct:2},
      {q:"En zor pasaj hangisidir?",opts:["Passage 1","Passage 2","Passage 3","Hepsi eşit"],correct:2},
      {q:"Cevabını bulamadığın soruda ne yapmalısın?",opts:["Boş bırak","Atla, sonra dön","Tahmin etme","Pasajı baştan oku"],correct:1},
      {q:"Yanlış cevap için puan kırılır mı?",opts:["Evet, -1 puan","Evet, -0.5 puan","Hayır, kırılmaz","Soru tipine göre değişir"],correct:2}
    ]}]
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
    },
    exercises:[{type:"quiz",items:[
      {q:"IELTS Writing testi toplamda kaç dakika sürer?",opts:["30 dakika","45 dakika","60 dakika","90 dakika"],correct:2},
      {q:"Task 1'de minimum kaç kelime yazılmalıdır?",opts:["100","150","200","250"],correct:1},
      {q:"Task 2'de minimum kaç kelime yazılmalıdır?",opts:["150","200","250","300"],correct:2},
      {q:"Hangi task toplam puanın daha büyük kısmını oluşturur?",opts:["Task 1","Task 2","Eşit ağırlıkta","Soru tipine göre değişir"],correct:1},
      {q:"Task 1'de ne yapılır?",opts:["Essay yazılır","Grafik/tablo açıklanır","Mektup yazılır","Özet çıkarılır"],correct:1},
      {q:"Yazarken hangisi yapılmamalıdır?",opts:["Bağlaç kullanmak","Paragraf yapmak","Informal dil kullanmak","Planlama yapmak"],correct:2}
    ]}]
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
    ],
    exercises:[{type:"quiz",items:[
      {q:"Opinion Essay'de kaç paragraf olmalıdır?",opts:["2","3","4","5"],correct:2},
      {q:"'Proponents' kelimesinin Türkçe karşılığı nedir?",opts:["Karşıtlar","Savunucular","Öğrenciler","Politikacılar"],correct:1},
      {q:"Giriş paragrafında ne yapılmalıdır?",opts:["Sadece konu tanıtılır","Konu tanıtılır ve görüş belirtilir","Örnek verilir","Sonuç yazılır"],correct:1},
      {q:"'Regardless of' ne demektir?",opts:["...yüzünden","...rağmen","...ne olursa olsun","...sayesinde"],correct:2},
      {q:"Son paragrafta ne yapılır?",opts:["Yeni fikir eklenir","Soru sorulur","Görüş farklı kelimelerle tekrarlanır","Karşı görüş verilir"],correct:2},
      {q:"'Tuition fees' ne demektir?",opts:["Yemek ücreti","Ulaşım ücreti","Öğrenim ücreti","Konaklama ücreti"],correct:2}
    ]}]
  }
}),

// ============ MODULE: IELTS LISTENING ============

// --- Unit: IELTS Listening Genel Bakış ---
"listening-overview-strategy-1": () => ({
  type:"strategy", title:"IELTS Listening — Format & Strateji", level:"B1", minutes:15, unitId:"listening-overview",
  data: {
    section:"listening",
    explanationTr:"IELTS Listening testi <strong>30 dakika</strong> sürer (+ 10 dakika cevapları aktarma süresi). <strong>4 bölüm (section)</strong> içerir ve toplamda <strong>40 soru</strong> cevaplanır.<br><br><strong>Section 1:</strong> İki kişi arasında günlük konuşma (ör: otel rezervasyonu).<br><strong>Section 2:</strong> Bir kişinin günlük bir konuda konuşması (ör: tur rehberi).<br><strong>Section 3:</strong> Akademik ortamda 2-4 kişi arasında tartışma (ör: ödev değerlendirmesi).<br><strong>Section 4:</strong> Akademik bir ders veya konferans (ör: bir profesörün sunumu).<br><br><strong>Her bölümü sadece BİR KEZ duyarsınız!</strong> Bu yüzden hazırlık çok önemlidir.",
    dosDonts:{
      dos:[
        "Kayıt başlamadan önce soruları mutlaka oku",
        "Anahtar kelimelerin altını çiz — ne tür bilgi arandığını belirle",
        "Sıradaki soruya hazır ol — cevaplar sırayla gelir",
        "Rakamları, tarihleri, isimleri özellikle dikkatli dinle",
        "Emin olmadığın soruyu tahmin et — yanlış cevap ceza almaz"
      ],
      donts:[
        "Bir soruyu kaçırdıysan takılma — sonraki soruya geç",
        "İlk duyduğun cevabı hemen yazma — tuzak olabilir (düzeltme gelebilir)",
        "Soruları okumadan dinlemeye başlama",
        "Cevap kağıdını boş bırakma — her zaman tahmin yap",
        "Büyük/küçük harf ve yazım kurallarını ihmal etme"
      ]
    },
    timingAdvice:"Section 1: ~5 dk | Section 2: ~5 dk | Section 3: ~5 dk | Section 4: ~5 dk | Transfer: 10 dk",
    bandTips:{
      "5.5":"40 sorudan 23-25 doğru yapman gerekiyor.",
      "6.0":"40 sorudan 26-29 doğru yapman gerekiyor.",
      "6.5":"40 sorudan 30-32 doğru yapman gerekiyor.",
      "7.0":"40 sorudan 33-35 doğru yapman gerekiyor.",
      "7.5":"40 sorudan 36-38 doğru yapman gerekiyor."
    },
    exercises:[{type:"quiz",items:[
      {q:"IELTS Listening testi kaç dakika sürer?",opts:["20 dakika","30 dakika","45 dakika","60 dakika"],correct:1},
      {q:"Listening testinde kaç bölüm (section) vardır?",opts:["2","3","4","5"],correct:2},
      {q:"Her bölümü kaç kez dinlersiniz?",opts:["1 kez","2 kez","3 kez","İstediğin kadar"],correct:0},
      {q:"Section 1'de ne tür bir kayıt duyarsınız?",opts:["Akademik ders","Günlük konuşma","Radyo haberi","Konferans"],correct:1},
      {q:"Cevap aktarma süresi kaç dakikadır?",opts:["5 dakika","10 dakika","15 dakika","Süre yok"],correct:1},
      {q:"Bir soruyu kaçırdığında ne yapmalısın?",opts:["Kaydı geri sar","Takıl ve bul","Sonraki soruya geç","Testi bırak"],correct:2}
    ]}]
  }
}),
"listening-overview-vocab-1": () => ({
  type:"vocabulary", title:"Listening Temel Terimleri", level:"B1", minutes:12, unitId:"listening-overview",
  data: {
    theme:"IELTS Listening Terimleri",
    words:[
      {e:"Multiple choice",t:"Çoktan seçmeli",p:"/ˈmʌltɪpl tʃɔɪs/",ex:"Answer the multiple choice questions.",ext:"Çoktan seçmeli soruları cevaplayın."},
      {e:"Gap-fill",t:"Boşluk doldurma",p:"/ɡæp fɪl/",ex:"Complete the gap-fill exercise.",ext:"Boşluk doldurma alıştırmasını tamamlayın."},
      {e:"Matching",t:"Eşleştirme",p:"/ˈmætʃɪŋ/",ex:"Match each speaker to the correct topic.",ext:"Her konuşmacıyı doğru konuyla eşleştirin."},
      {e:"Labelling",t:"Etiketleme",p:"/ˈleɪbəlɪŋ/",ex:"Label the map with the correct places.",ext:"Haritayı doğru yerlerle etiketleyin."},
      {e:"Distraction",t:"Dikkat dağıtıcı",p:"/dɪˈstrækʃən/",ex:"Be careful of distractions in the audio.",ext:"Ses kaydındaki dikkat dağıtıcılara dikkat edin."},
      {e:"Paraphrase",t:"Başka kelimelerle ifade etme",p:"/ˈpærəfreɪz/",ex:"The answer is often a paraphrase of what you hear.",ext:"Cevap genellikle duyduğunuzun başka kelimelerle ifadesidir."},
      {e:"Synonym",t:"Eşanlamlı",p:"/ˈsɪnənɪm/",ex:"Look for synonyms of the key words.",ext:"Anahtar kelimelerin eşanlamlılarını arayın."},
      {e:"Spelling",t:"Yazım/Heceleme",p:"/ˈspɛlɪŋ/",ex:"Check your spelling carefully.",ext:"Yazımınızı dikkatle kontrol edin."},
      {e:"Word limit",t:"Kelime sınırı",p:"/wɜːrd ˈlɪmɪt/",ex:"Write no more than two words.",ext:"İkiden fazla kelime yazmayın."},
      {e:"Prediction",t:"Tahmin",p:"/prɪˈdɪkʃən/",ex:"Use prediction before you listen.",ext:"Dinlemeden önce tahmin yapın."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Multiple choice","Çoktan seçmeli"],["Gap-fill","Boşluk doldurma"],["Synonym","Eşanlamlı"],["Spelling","Yazım"],["Prediction","Tahmin"]]},
      {type:"quiz",items:[
        {q:"IELTS Listening'de bir bölümü kaç kez duyarsınız?",opts:["1 kez","2 kez","3 kez","İstediğin kadar"],correct:0},
        {q:"'Word limit' ne demektir?",opts:["Kelime sayısı","Kelime sınırı","Kelime listesi","Kelime oyunu"],correct:1},
        {q:"Cevap genellikle sorudaki kelimelerin ne şekliyle gelir?",opts:["Aynı kelimelerle","Paraphrase ile","Türkçe çevirisiyle","Tersten"],correct:1},
        {q:"'Distraction' IELTS Listening'de ne anlama gelir?",opts:["Eğlence","Dikkat dağıtıcı/tuzak bilgi","Ek bilgi","Doğru cevap"],correct:1}
      ]}
    ]
  }
}),

// --- Unit: Section 1 & 2 — Günlük Durumlar ---
"section1-2-strategy-1": () => ({
  type:"strategy", title:"Section 1 & 2 — Dinleme Stratejileri", level:"B1", minutes:15, unitId:"section1-2",
  data: {
    topic:"Section 1 & 2 Stratejileri",
    explanationTr:"<strong>Section 1</strong> iki kişi arasındaki günlük bir konuşmadır. Genellikle form doldurma, rezervasyon yapma veya bilgi isteme şeklindedir. İsimler, tarihler, telefon numaraları ve adresler sıklıkla sorulur.<br><br><strong>Section 2</strong> tek bir kişinin bir konu hakkında bilgi vermesidir — örneğin bir tur rehberi, bir etkinlik tanıtımı veya bir kurum hakkında açıklama.<br><br><strong>Soru tipleri:</strong> Form/not tamamlama, çoktan seçmeli, eşleştirme, harita/plan etiketleme.",
    tips:[
      {title:"Soruları Önceden Oku",detail:"Kayıt başlamadan önce soruları hızlıca oku. Ne tür bilgi arandığını belirle: isim mi, sayı mı, tarih mi, yer mi?"},
      {title:"Kişisel Bilgileri Dinle",detail:"Section 1'de sıklıkla isim heceleme (spelling), telefon numarası, adres, tarih ve saat sorulur. Bu bilgileri doğru yazmak çok önemlidir."},
      {title:"Düzeltmelere Dikkat Et",detail:"Konuşmacılar sıklıkla bir bilgiyi söyleyip sonra düzeltir: 'Oh wait, actually it's on Thursday, not Wednesday.' İlk söylenen değil, düzeltilmiş bilgiyi yaz."},
      {title:"Kelime Sınırını Kontrol Et",detail:"'Write NO MORE THAN TWO WORDS' diyorsa üç kelime yazma. 'ONE WORD AND/OR A NUMBER' diyorsa buna uy."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Section 1'de en sık karşılaşılan soru tipi hangisidir?",opts:["Essay yazma","Form/not tamamlama","Özet çıkarma","Grafik analizi"],correct:1},
        {q:"Konuşmacı 'My name is Johnson — that's J-O-H-N-S-O-N' derse ne yaparsınız?",opts:["İlk duyduğunuzu yazarsınız","Hecelemeyi takip edersiniz","Tahmin edersiniz","Boş bırakırsınız"],correct:1},
        {q:"'Actually, make that Tuesday, not Monday' dediğinde hangi günü yazarsınız?",opts:["Monday","Tuesday","Her ikisini de","Hiçbirini"],correct:1},
        {q:"Section 2'de kaç konuşmacı vardır?",opts:["2 kişi","3 kişi","1 kişi","4 kişi"],correct:2}
      ]}
    ]
  }
}),
"section1-2-dialogue-1": () => ({
  type:"dialogue", title:"Section 1 Pratiği — Otel Rezervasyonu", level:"B1", minutes:15, unitId:"section1-2",
  data: {
    situation:"Bir kişi otel rezervasyonu yapmak için telefon ediyor. Bu tür konuşmalar Section 1'de sıkça karşımıza çıkar.",
    speakers:["Receptionist","Caller"],
    lines:[
      {s:0,en:"Good morning, Sunshine Hotel. How can I help you?",tr:"Günaydın, Sunshine Hotel. Size nasıl yardımcı olabilirim?"},
      {s:1,en:"Hello, I'd like to book a room for two nights, please.",tr:"Merhaba, iki gecelik bir oda ayırtmak istiyorum, lütfen."},
      {s:0,en:"Certainly. What dates are you looking at?",tr:"Tabii. Hangi tarihleri düşünüyorsunuz?"},
      {s:1,en:"From the 15th to the 17th of March.",tr:"15 Mart'tan 17 Mart'a kadar."},
      {s:0,en:"We have a single room for 85 pounds per night, or a double for 120.",tr:"Geceliği 85 sterline tek kişilik veya 120 sterline çift kişilik odamız var."},
      {s:1,en:"I'll take the double, please. Actually, wait — is breakfast included?",tr:"Çift kişiliği alayım lütfen. Aslında, bir dakika — kahvaltı dahil mi?"},
      {s:0,en:"Breakfast is included, yes. Can I take your name, please?",tr:"Kahvaltı dahildir, evet. Adınızı alabilir miyim lütfen?"},
      {s:1,en:"It's Sarah Mitchell. That's M-I-T-C-H-E-L-L.",tr:"Sarah Mitchell. M-I-T-C-H-E-L-L."},
      {s:0,en:"And a contact number?",tr:"Ve bir iletişim numarası?"},
      {s:1,en:"Sure, it's 07745 392 801.",tr:"Tabii, 07745 392 801."},
      {s:0,en:"Perfect. Your booking reference is HB-2247.",tr:"Mükemmel. Rezervasyon numaranız HB-2247."}
    ],
    keyPhrases:[
      {en:"I'd like to book a room",tr:"Bir oda ayırtmak istiyorum",note:"Kibar istek ifadesi — Section 1'de çok yaygın"},
      {en:"What dates are you looking at?",tr:"Hangi tarihleri düşünüyorsunuz?",note:"Tarih soran yaygın ifade"},
      {en:"Is breakfast included?",tr:"Kahvaltı dahil mi?",note:"Ek bilgi sormak için kullanılır"},
      {en:"Can I take your name?",tr:"Adınızı alabilir miyim?",note:"Kişisel bilgi isteme kalıbı"},
      {en:"Booking reference",tr:"Rezervasyon numarası",note:"Referans numaraları doğru yazmak önemli"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Sarah kaç gecelik oda ayırtıyor?",opts:["1 gece","2 gece","3 gece","4 gece"],correct:1},
        {q:"Çift kişilik oda geceliği kaç sterlin?",opts:["85","100","120","150"],correct:2},
        {q:"Soyadının doğru yazımı hangisidir?",opts:["MICHELL","MITCHEL","MITCHELL","MITCHLE"],correct:2},
        {q:"Rezervasyon numarası nedir?",opts:["HB-2274","HB-2247","HB-2472","HB-2742"],correct:1}
      ]}
    ]
  }
}),
"section1-2-vocab-1": () => ({
  type:"vocabulary", title:"Section 1 & 2 Temel Kelimeler", level:"B1", minutes:12, unitId:"section1-2",
  data: {
    theme:"Günlük Durumlar Kelime Bilgisi",
    words:[
      {e:"Accommodation",t:"Konaklama",p:"/əˌkɒməˈdeɪʃən/",ex:"We need to find accommodation for the trip.",ext:"Gezi için konaklama bulmamız gerekiyor."},
      {e:"Deposit",t:"Depozito/Kapora",p:"/dɪˈpɒzɪt/",ex:"You need to pay a deposit of 50 pounds.",ext:"50 sterlinlik bir depozito ödemeniz gerekiyor."},
      {e:"Registration",t:"Kayıt",p:"/ˌrɛdʒɪˈstreɪʃən/",ex:"Please complete the registration form.",ext:"Lütfen kayıt formunu doldurun."},
      {e:"Enrolment",t:"Kayıt yaptırma",p:"/ɪnˈroʊlmənt/",ex:"Enrolment starts on Monday.",ext:"Kayıt Pazartesi başlıyor."},
      {e:"Facilities",t:"Tesisler/Olanaklar",p:"/fəˈsɪlɪtiz/",ex:"The hotel has excellent facilities.",ext:"Otelin mükemmel tesisleri var."},
      {e:"Appointment",t:"Randevu",p:"/əˈpɔɪntmənt/",ex:"I have an appointment at 3 o'clock.",ext:"Saat 3'te randevum var."},
      {e:"Membership",t:"Üyelik",p:"/ˈmɛmbərʃɪp/",ex:"Annual membership costs 200 pounds.",ext:"Yıllık üyelik 200 sterline mal oluyor."},
      {e:"Insurance",t:"Sigorta",p:"/ɪnˈʃʊərəns/",ex:"Do you have travel insurance?",ext:"Seyahat sigortanız var mı?"},
      {e:"Refund",t:"İade/Geri ödeme",p:"/ˈriːfʌnd/",ex:"Can I get a refund?",ext:"İade alabilir miyim?"},
      {e:"Receipt",t:"Fiş/Makbuz",p:"/rɪˈsiːt/",ex:"Please keep your receipt.",ext:"Lütfen fişinizi saklayın."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Accommodation","Konaklama"],["Deposit","Depozito"],["Insurance","Sigorta"],["Refund","İade"],["Receipt","Fiş"]]},
      {type:"quiz",items:[
        {q:"'Facilities' ne demektir?",opts:["Kolaylıklar","Tesisler/Olanaklar","Fabrikalar","Faaliyetler"],correct:1},
        {q:"'Enrolment' hangi bağlamda kullanılır?",opts:["Yemek siparişi","Kursa kayıt","Seyahat planı","Doktor randevusu"],correct:1},
        {q:"'Can I get a refund?' ne anlama gelir?",opts:["İndirim alabilir miyim?","İade alabilir miyim?","Kredi kullanabilir miyim?","Ödeme yapabilir miyim?"],correct:1},
        {q:"Hangisi bir ödeme türüdür?",opts:["Receipt","Refund","Deposit","Registration"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Section 3 & 4 — Akademik ---
"section3-4-strategy-1": () => ({
  type:"strategy", title:"Section 3 & 4 — Akademik Dinleme Stratejileri", level:"B2", minutes:15, unitId:"section3-4",
  data: {
    topic:"Section 3 & 4 Stratejileri",
    explanationTr:"<strong>Section 3</strong> iki veya daha fazla kişi arasındaki akademik bir tartışmadır — genellikle öğrenciler veya bir öğrenci ile bir öğretim üyesi arasında. Konular: ödev değerlendirmesi, araştırma planlaması, ders seçimi.<br><br><strong>Section 4</strong> akademik bir monologdur — bir profesörün veya uzmanın bir konu hakkında ders/sunum vermesi. Kesintisiz olduğu için en zor bölümdür.<br><br><strong>Zorluklar:</strong><br>• Akademik kelimeler ve karmaşık cümle yapıları<br>• Birden fazla konuşmacının fikirlerini ayırt etme<br>• Uzun konuşmalarda odaklanmayı sürdürme<br>• Konuşmacıların fikirlerini değiştirmesi veya birbirini düzeltmesi",
    tips:[
      {title:"Konuşmacıları Ayırt Et",detail:"Section 3'te birden fazla kişi konuşur. Kim ne diyor dikkatli dinle. Sorular 'What does the woman suggest?' gibi spesifik konuşmacıyı sorar."},
      {title:"Fikir Değişikliklerini Takip Et",detail:"Akademik tartışmalarda konuşmacılar sık sık fikirlerini değiştirir: 'I initially thought X, but now I think Y.' Son fikir önemlidir."},
      {title:"Section 4'te Not Al",detail:"Section 4 sürekli akan bir konuşmadır. Soruları önceden okuyup anahtar kelimeleri belirle, sonra not alarak dinle."},
      {title:"Akademik Eşanlamlıları Öğren",detail:"Soru 'benefits' derse, konuşmacı 'advantages' veya 'positive aspects' diyebilir. Paraphrase'e alışık ol."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Section 3'te kimler konuşur?",opts:["İki arkadaş kafede","Akademik ortamda öğrenciler/öğretmenler","Bir radyo sunucusu","Bir doktor ve hasta"],correct:1},
        {q:"Section 4'ü en zor yapan özellik nedir?",opts:["Kısa olması","Kesintisiz monolog olması","Çok yavaş konuşulması","Müzik olması"],correct:1},
        {q:"Konuşmacı 'Initially I agreed, but having read more, I've changed my mind' derse ne anlarsınız?",opts:["İlk fikrinde sabit","Fikrini değiştirmiş","Emin değil","Konuyu bilmiyor"],correct:1},
        {q:"Soruda 'drawbacks' yazıyorsa, konuşmacı hangi kelimeyi kullanabilir?",opts:["Benefits","Solutions","Disadvantages","Methods"],correct:2}
      ]}
    ]
  }
}),
"section3-4-vocab-1": () => ({
  type:"vocabulary", title:"Akademik Dinleme Kelimeleri", level:"B2", minutes:12, unitId:"section3-4",
  data: {
    theme:"Akademik Tartışma Kelimeleri",
    words:[
      {e:"Research",t:"Araştırma",p:"/rɪˈsɜːrtʃ/",ex:"Our research shows interesting results.",ext:"Araştırmamız ilginç sonuçlar gösteriyor."},
      {e:"Hypothesis",t:"Hipotez",p:"/haɪˈpɒθəsɪs/",ex:"We need to test our hypothesis.",ext:"Hipotezimizi test etmemiz gerekiyor."},
      {e:"Methodology",t:"Yöntem/Metodoloji",p:"/ˌmɛθəˈdɒlədʒi/",ex:"The methodology was clearly explained.",ext:"Yöntem açıkça anlatıldı."},
      {e:"Findings",t:"Bulgular",p:"/ˈfaɪndɪŋz/",ex:"The findings were surprising.",ext:"Bulgular şaşırtıcıydı."},
      {e:"Drawback",t:"Dezavantaj/Sakınca",p:"/ˈdrɔːbæk/",ex:"One major drawback is the cost.",ext:"Önemli bir sakınca maliyettir."},
      {e:"Assessment",t:"Değerlendirme",p:"/əˈsɛsmənt/",ex:"The assessment is due next Friday.",ext:"Değerlendirme önümüzdeki Cuma teslim edilecek."},
      {e:"Tutorial",t:"Küçük grup dersi",p:"/tjuːˈtɔːriəl/",ex:"We have a tutorial at 2pm.",ext:"Saat 2'de küçük grup dersimiz var."},
      {e:"Deadline",t:"Son tarih/Teslim tarihi",p:"/ˈdɛdlaɪn/",ex:"The deadline has been extended.",ext:"Son tarih uzatıldı."},
      {e:"Literature review",t:"Literatür taraması",p:"/ˈlɪtrɪtʃər rɪˈvjuː/",ex:"Start with a literature review.",ext:"Literatür taramasıyla başlayın."},
      {e:"Criteria",t:"Kriterler/Ölçütler",p:"/kraɪˈtɪəriə/",ex:"What are the assessment criteria?",ext:"Değerlendirme kriterleri nelerdir?"}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Research","Araştırma"],["Hypothesis","Hipotez"],["Findings","Bulgular"],["Deadline","Son tarih"],["Criteria","Kriterler"]]},
      {type:"quiz",items:[
        {q:"'Methodology' ne demektir?",opts:["Konu","Yöntem","Sonuç","Problem"],correct:1},
        {q:"'Drawback' kelimesinin eşanlamlısı hangisidir?",opts:["Advantage","Benefit","Disadvantage","Feature"],correct:2},
        {q:"'Literature review' ne yapılır?",opts:["Roman okunur","Mevcut araştırmalar incelenir","Sınav yapılır","Sunum hazırlanır"],correct:1},
        {q:"'The deadline has been extended' ne anlama gelir?",opts:["Son tarih iptal edildi","Son tarih uzatıldı","Son tarih yaklaştı","Son tarih geçti"],correct:1}
      ]}
    ]
  }
}),
"section3-4-dialogue-1": () => ({
  type:"dialogue", title:"Section 3 Pratiği — Ödev Tartışması", level:"B2", minutes:15, unitId:"section3-4",
  data: {
    situation:"İki üniversite öğrencisi (Tom ve Lisa) bir araştırma ödevi hakkında tartışıyor. Bu tür akademik diyaloglar Section 3'te sıkça karşımıza çıkar.",
    speakers:["Tom","Lisa"],
    lines:[
      {s:0,en:"Have you decided on your research topic yet?",tr:"Araştırma konuna karar verdin mi?"},
      {s:1,en:"I was thinking about the effects of social media on education. What do you think?",tr:"Sosyal medyanın eğitim üzerindeki etkileri hakkında düşünüyordum. Ne dersin?"},
      {s:0,en:"That's quite broad. Maybe you should narrow it down a bit.",tr:"Bu oldukça geniş. Belki biraz daraltmalısın."},
      {s:1,en:"You're right. How about focusing on how students use social media for group projects?",tr:"Haklısın. Öğrencilerin grup ödevleri için sosyal medyayı nasıl kullandığına odaklanmaya ne dersin?"},
      {s:0,en:"That's much better. For the methodology, are you going to use surveys or interviews?",tr:"Bu çok daha iyi. Yöntem olarak anket mi yoksa mülakat mı kullanacaksın?"},
      {s:1,en:"I was initially going to do interviews, but actually surveys would give me more data.",tr:"Başlangıçta mülakat yapacaktım ama aslında anketler bana daha fazla veri sağlar."},
      {s:0,en:"That makes sense. When is the deadline for the literature review?",tr:"Mantıklı. Literatür taramasının teslim tarihi ne zaman?"},
      {s:1,en:"It's the 28th of November. But I haven't started reading the key articles yet.",tr:"28 Kasım. Ama henüz temel makaleleri okumaya başlamadım."},
      {s:0,en:"You should probably start soon. Dr. Wilson said the criteria include at least ten academic sources.",tr:"Muhtemelen yakında başlamalısın. Dr. Wilson kriterlerin en az on akademik kaynak içerdiğini söyledi."}
    ],
    keyPhrases:[
      {en:"I was thinking about...",tr:"... hakkında düşünüyordum",note:"Fikir önerme — Section 3'te çok yaygın"},
      {en:"Maybe you should narrow it down",tr:"Belki biraz daraltmalısın",note:"Öneri ifadesi"},
      {en:"I was initially going to... but actually...",tr:"Başlangıçta ... yapacaktım ama aslında ...",note:"Fikir değiştirme — IELTS'te çok önemli bir tuzak noktası"},
      {en:"That makes sense",tr:"Mantıklı",note:"Onay ifadesi"},
      {en:"The criteria include...",tr:"Kriterler ... içeriyor",note:"Akademik gereksinimler hakkında bilgi"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Lisa'nın son araştırma konusu nedir?",opts:["Sosyal medyanın genel etkileri","Öğrencilerin grup ödevlerinde sosyal medya kullanımı","Dr. Wilson'ın araştırması","Eğitim teknolojileri"],correct:1},
        {q:"Lisa yöntem olarak sonunda ne seçti?",opts:["Mülakat","Gözlem","Anket","Deney"],correct:2},
        {q:"Literatür taramasının teslim tarihi nedir?",opts:["28 Ekim","28 Kasım","18 Kasım","8 Kasım"],correct:1},
        {q:"Kriterler en az kaç akademik kaynak gerektiriyor?",opts:["5","8","10","15"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Not Tamamlama Stratejileri ---
"note-completion-strategy-1": () => ({
  type:"strategy", title:"Not Tamamlama — Teknikler", level:"B1", minutes:15, unitId:"note-completion",
  data: {
    topic:"Not Tamamlama Teknikleri",
    explanationTr:"Not tamamlama (note completion), IELTS Listening'de en yaygın soru tiplerinden biridir. Size bir form, tablo veya not verilir ve boşlukları dinleyerek doldurmanız istenir.<br><br><strong>Önemli kurallar:</strong><br>• Kelime sınırına mutlaka uy (ör: NO MORE THAN TWO WORDS AND/OR A NUMBER)<br>• Cevaplar her zaman ses kaydındaki sırayla gelir<br>• Gramer uyumuna dikkat et (article, plural, tense)<br>• Büyük harf ve yazım kurallarını kontrol et",
    tips:[
      {title:"Boşluğun Etrafını Oku",detail:"Boşluktan önceki ve sonraki kelimelere bak. Bu sana ne tür bir kelime gerektiğini söyler: isim mi, sıfat mı, fiil mi, sayı mı?"},
      {title:"Tahmin Yap",detail:"Dinlemeden önce her boşluk için ne tür bir cevap olabileceğini tahmin et. Örneğin: '_____ years old' → bir sayı gelecek."},
      {title:"Anahtar Kelimeleri İşaretle",detail:"Boşluğun yanındaki anahtar kelimeleri altını çiz. Konuşmacı bu kelimeleri veya eşanlamlılarını söylediğinde cevap yakındır."},
      {title:"Yazım ve Gramer Kontrolü",detail:"Cevabını yazdıktan sonra kontrol et: çoğul mu olmalı, büyük harfle mi başlamalı, doğru hecelenmiş mi?"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'Write NO MORE THAN TWO WORDS' kuralında kaç kelime yazabilirsiniz?",opts:["Sadece 1","1 veya 2","Sadece 2","3 veya daha az"],correct:1},
        {q:"Boşluktan önce 'a large ____' yazıyorsa, ne tür bir kelime gelecektir?",opts:["Fiil","Sıfat","İsim","Zarf"],correct:2},
        {q:"'Number of ______' ifadesinde boşluğa ne tür bir kelime gelir?",opts:["Tekil isim","Çoğul isim","Fiil","Sıfat"],correct:1},
        {q:"Konuşmacı 'The course starts on September — no, sorry, October the fifth' derse hangi ayı yazarsınız?",opts:["September","October","Her ikisini de","Hiçbirini"],correct:1}
      ]}
    ]
  }
}),
"note-completion-strategy-2": () => ({
  type:"strategy", title:"Form & Tablo Tamamlama Pratiği", level:"B1", minutes:15, unitId:"note-completion",
  data: {
    topic:"Form ve Tablo Tamamlama",
    explanationTr:"IELTS Listening'de form tamamlama genellikle Section 1'de, not/tablo tamamlama ise tüm bölümlerde karşınıza çıkabilir. İşte adım adım nasıl yaklaşacağınız:<br><br><strong>Adım 1:</strong> Kelime sınırını oku.<br><strong>Adım 2:</strong> Formun/tablonun başlıklarını oku — konu ne hakkında?<br><strong>Adım 3:</strong> Her boşluk için ne tür bilgi gerektiğini tahmin et.<br><strong>Adım 4:</strong> Anahtar kelimeleri altını çiz.<br><strong>Adım 5:</strong> Dinle ve doldur — düzeltmelere dikkat et.",
    tips:[
      {title:"İsim Yazımına Dikkat",detail:"Özel isimler (kişi adları, sokak adları, şehir adları) genellikle hecelenir. Her harfi dikkatli dinle ve yaz."},
      {title:"Sayı Formatına Dikkat",detail:"Telefon numaralarında 'double' (çift) ifadesine dikkat et: 'double five' = 55. Tarihler için '15th of March' = 15 March."},
      {title:"Doldurulmuş Kutuları Kullan",detail:"Formdaki dolu kutular sana ipucu verir. Örneğin bir kutuda 'Dr.' yazıyorsa, yanındaki boşluğa bir isim gelecektir."},
      {title:"Birden Fazla Boşluğu Takip Et",detail:"Bazen art arda birden fazla boşluk gelir. Birini kaçırırsan diğerine geç — geri dönüp tahmin edebilirsin."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Konuşmacı 'That's 07-double 4-9-3-1' derse numara nedir?",opts:["074931","0744931","074491","074931"],correct:1},
        {q:"Formda 'Address: 42 _____ Street' yazıyorsa, neyi dinlemelisiniz?",opts:["Bir sayı","Bir sokak adı","Bir şehir adı","Bir posta kodu"],correct:1},
        {q:"'Write ONE WORD ONLY' kuralında 'bus station' yazabilir misiniz?",opts:["Evet, bir kavram","Hayır, iki kelime","Kısaltarak evet","Sadece 'bus' yazılabilir"],correct:1},
        {q:"Formda zaten 'Name: Sarah' dolu ise, yanındaki boşluk muhtemelen ne olacak?",opts:["İsim tekrarı","Soyisim","Yaş","Telefon"],correct:1}
      ]}
    ]
  }
}),

// --- Unit: Dikkat Tuzakları & İpuçları ---
"listening-traps-strategy-1": () => ({
  type:"strategy", title:"IELTS Listening Tuzakları", level:"B2", minutes:15, unitId:"listening-traps",
  data: {
    topic:"Yaygın Listening Tuzakları",
    explanationTr:"IELTS Listening'de sınavı hazırlayanlar bilinçli olarak 'tuzaklar' (traps/distractors) koyar. Bu tuzakları tanımak puanınızı önemli ölçüde artırır.<br><br><strong>En yaygın tuzak türleri:</strong><br>1. <strong>Düzeltme tuzağı:</strong> Konuşmacı bir bilgiyi söyler, sonra düzeltir.<br>2. <strong>Eşanlamlı tuzağı:</strong> Soruda bir kelime, kayıtta eşanlamlısı kullanılır.<br>3. <strong>Olumsuzluk tuzağı:</strong> 'I don't think...', 'It's unlikely that...' gibi olumsuz yapılar.<br>4. <strong>Birden fazla seçenek tuzağı:</strong> Birkaç seçenek söylenir ama sadece biri doğrudur.<br>5. <strong>Genel vs. spesifik tuzak:</strong> Genel bir ifade ile spesifik bir detay karıştırılır.",
    tips:[
      {title:"Düzeltme Sinyallerini Tanı",detail:"'Actually', 'No wait', 'I mean', 'Sorry, I meant', 'Oh, I was wrong' gibi ifadelerden sonra gelen bilgi doğrudur, önceki değil."},
      {title:"Olumsuz Yapılara Dikkat",detail:"'She didn't enjoy the course' = hoşlanmadı. 'He's unlikely to attend' = muhtemelen katılmayacak. 'It's not as expensive as...' = o kadar pahalı değil. Olumsuzluklar anlamı tamamen değiştirir."},
      {title:"Tüm Seçenekleri Duyabilirsin",detail:"MCQ sorularında konuşmacı A, B ve C seçeneklerinin hepsinden bahsedebilir ama sadece biri doğru cevaptır. Hangisini onayladığını dinle."},
      {title:"Stres ve Tonlamaya Dikkat Et",detail:"Konuşmacının vurguladığı kelimeler genellikle önemli bilgi taşır. 'The MAIN reason was...' gibi vurgu kelimelerine dikkat et."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Konuşmacı: 'The meeting is on Wednesday... oh wait, they changed it to Thursday.' Cevap nedir?",opts:["Wednesday","Thursday","Her ikisi de","Belirtilmemiş"],correct:1},
        {q:"'She was NOT satisfied with the results' ne anlama gelir?",opts:["Sonuçlardan memnundu","Sonuçlardan memnun değildi","Sonuçları görmedi","Sonuçlar belirsizdi"],correct:1},
        {q:"Soruda 'advantages' yazıyor. Konuşmacı hangi kelimeyi kullanabilir?",opts:["Disadvantages","Problems","Benefits","Drawbacks"],correct:2},
        {q:"Konuşmacı: 'I thought it was good, but actually, looking back, it was the best presentation I've ever seen.' Doğru değerlendirme hangisi?",opts:["Good","Average","The best","Not good"],correct:2}
      ]}
    ]
  }
}),
"listening-traps-strategy-2": () => ({
  type:"strategy", title:"Paraphrase & Synonym Tanıma", level:"B2", minutes:15, unitId:"listening-traps",
  data: {
    topic:"Paraphrase ve Synonym Tanıma",
    explanationTr:"IELTS Listening'de sorulardaki kelimeler ile ses kaydındaki kelimeler genellikle <strong>aynı değildir</strong>. Sınav, sizin eşanlamlı (synonym) ve başka kelimelerle ifade etme (paraphrase) becerilerinizi test eder.<br><br><strong>Örnek:</strong><br>Soruda: 'What is the <em>cost</em> of the course?'<br>Kayıtta: 'The <em>fee</em> for the programme is 500 pounds.'<br><br>Hem 'cost = fee' hem de 'course = programme' paraphrase edilmiş.",
    tips:[
      {title:"Yaygın Eşanlamlı Çiftlerini Öğren",detail:"important = significant = crucial, increase = rise = grow, decrease = fall = decline, problem = issue = challenge, benefit = advantage = merit"},
      {title:"Yapısal Paraphrase'e Alış",detail:"'The museum was established in 1920' → Soruda: 'When was the museum founded?' ('established' = 'founded')"},
      {title:"Zıt Anlamlılarla Tuzak",detail:"Bazen olumsuz + zıt anlamlı kullanılır: 'It's not cheap' = 'It's expensive'. Bu yapıları tanımak önemli."},
      {title:"Sayı Paraphrase'i",detail:"'a quarter' = 25%, 'a decade' = 10 years, 'a dozen' = 12, 'twice' = two times, 'half' = 50%"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'The project was completed ahead of schedule' ne anlama gelir?",opts:["Proje gecikti","Proje zamanında bitti","Proje beklentiden erken bitti","Proje iptal edildi"],correct:2},
        {q:"Soruda 'inexpensive' yazıyor. Kayıtta hangi ifade eşanlamlıdır?",opts:["Very costly","Quite pricey","Reasonably priced","Extremely expensive"],correct:2},
        {q:"'A quarter of the participants' kaç yüzde demek?",opts:["10%","20%","25%","50%"],correct:2},
        {q:"'It's not uncommon' ne anlama gelir?",opts:["Çok nadir","Oldukça yaygın","Hiç görülmemiş","Kesinlikle yanlış"],correct:1},
        {q:"Soruda 'accommodation' var. Kayıtta ne duyabilirsiniz?",opts:["Food and drink","Place to stay","Course schedule","Transport links"],correct:1}
      ]}
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
    },
    exercises:[{type:"quiz",items:[
      {q:"IELTS Speaking testi kaç dakika sürer?",opts:["5-7 dk","11-14 dk","20-25 dk","30 dk"],correct:1},
      {q:"Speaking testi kaç bölümden oluşur?",opts:["2","3","4","5"],correct:1},
      {q:"Part 2'de kaç dakika hazırlık süresi verilir?",opts:["30 saniye","1 dakika","2 dakika","5 dakika"],correct:1},
      {q:"Değerlendirme kriterlerinden hangisi DEĞİLDİR?",opts:["Fluency (Akıcılık)","Pronunciation (Telaffuz)","Handwriting (El Yazısı)","Grammar (Dilbilgisi)"],correct:2},
      {q:"Soruyu anlamadığında ne yapmalısın?",opts:["Tahmin et","Türkçe sor","Tekrar sormasını iste","Sessiz kal"],correct:2},
      {q:"Part 3'teki sorular nasıldır?",opts:["Kişisel ve basit","Daha derin ve soyut","Yes/No soruları","Kelime soruları"],correct:1}
    ]}]
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
}),

// --- Unit: Part 2 — Cue Card & Uzun Konuşma ---
"part2-cuecard-strategy-1": () => ({
  type:"strategy", title:"Part 2 — Cue Card Stratejisi", level:"B1", minutes:15, unitId:"part2-cuecard",
  data: {
    topic:"Part 2 Cue Card Stratejisi",
    explanationTr:"IELTS Speaking Part 2'de size bir <strong>konu kartı (cue card)</strong> verilir. Kart üzerinde bir konu ve 3-4 alt soru bulunur. <strong>1 dakika hazırlık</strong> süreniz vardır — bu sürede not alabilirsiniz. Sonra <strong>1-2 dakika</strong> boyunca o konu hakkında konuşmanız gerekir.<br><br><strong>Cue Card Örneği:</strong><br>Describe a book you have recently read.<br>You should say:<br>• what the book was about<br>• when you read it<br>• why you chose to read it<br>• and explain how you felt about the book.<br><br><strong>1 dakikayı nasıl kullanmalı:</strong><br>Her alt soruya 2-3 anahtar kelime yaz. Tam cümle yazma — sadece hatırlatıcı notlar.",
    tips:[
      {title:"1 Dakikayı Verimli Kullan",detail:"Her alt soru için 2-3 anahtar kelime yaz. Örneğin: 'what → murder mystery, author: Agatha Christie'. Tam cümle yazmaya zaman harcama."},
      {title:"Hikaye Anlatma Yapısı Kullan",detail:"Başlangıç → Gelişme → Sonuç yapısını kullan. Kronolojik sırayla anlatmak en kolay yoldur."},
      {title:"2 Dakika Boyunca Konuş",detail:"Çok kısa konuşmak puan kaybettirir. Her alt soruya en az 3-4 cümle ayır. 'Let me tell you about...', 'What I particularly liked was...' gibi genişletme ifadeleri kullan."},
      {title:"Gerçek Olması Gerekmez",detail:"Cevabınızın %100 gerçek olması gerekmez. Önemli olan akıcı ve düzgün konuşmanızdır. Uygun bir hikaye uydurmak tamamen kabul edilebilir."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Part 2'de kaç dakika hazırlık süresi verilir?",opts:["30 saniye","1 dakika","2 dakika","3 dakika"],correct:1},
        {q:"Hazırlık süresinde ne yapmalısınız?",opts:["Tam cümleler yazmalı","Anahtar kelimeler not almalı","Sessizce düşünmeli","Cevabı ezberlemeli"],correct:1},
        {q:"Part 2'de kaç dakika konuşmanız gerekir?",opts:["30 saniye-1 dakika","1-2 dakika","3-4 dakika","5 dakika"],correct:1},
        {q:"Cevabınız tamamen gerçek olmak zorunda mı?",opts:["Evet, kesinlikle","Hayır, hikaye uydurabilirsiniz","Sadece Part 2'de evet","Examiner kontrol eder"],correct:1}
      ]}
    ]
  }
}),
"part2-cuecard-speaking-1": () => ({
  type:"speaking", title:"Part 2 — Cue Card Pratik: Bir Yer", level:"B1", minutes:15, unitId:"part2-cuecard",
  data: {
    topic:"Describe a Place You Have Visited",
    explanationTr:"Bu derste Part 2'de sık çıkan 'bir yer tarif et' konusunu çalışacağız. Cue card'daki alt soruları takip ederek organize bir cevap oluşturmayı öğreneceksiniz.",
    sampleQuestions:[
      "Describe a place you have visited that you found interesting. You should say: where it was, when you went there, what you did there, and explain why you found it interesting.",
      "Describe a city you would like to visit in the future. You should say: which city it is, how you know about it, what you would do there, and explain why you want to visit it.",
      "Describe a natural place (e.g. a park, mountain, beach) that you enjoy visiting. You should say: where it is, how often you go there, what you do there, and explain why you enjoy it."
    ],
    modelAnswers:[
      {q:"Describe a place you have visited that you found interesting.",answer:"I'd like to talk about Cappadocia, which is a historical region in central Turkey. I visited it last summer with my family, and it was truly an unforgettable experience. We spent three days there exploring the unique landscape, which is famous for its fairy chimneys — these are tall, cone-shaped rock formations that look absolutely stunning. During our visit, we took a hot air balloon ride at sunrise, which was the highlight of the trip. We also visited underground cities that were carved out of soft rock centuries ago, and I found that absolutely fascinating. What made the place so interesting to me was the combination of natural beauty and historical significance. I mean, people actually lived in those underground caves thousands of years ago, which is mind-blowing when you think about it. Overall, I'd say Cappadocia is one of the most unique places I've ever been to, and I would definitely recommend it to anyone.",answerTr:"Cappadocia hakkında konuşmak istiyorum, Türkiye'nin iç bölgesindeki tarihi bir bölge. Geçen yaz ailemle ziyaret ettim ve gerçekten unutulmaz bir deneyimdi. Üç gün boyunca eşsiz doğa yapılarını keşfettik — peri bacaları olarak bilinen koni şeklindeki kaya oluşumları inanılmaz güzel. Gün doğumunda sıcak hava balonuna bindik — bu gezinin en güzel anıydı. Ayrıca yüzyıllar önce yumuşak kayadan oyulmuş yeraltı şehirlerini ziyaret ettik. Mekanı ilginç kılan şey doğal güzellik ve tarihi önemin birleşimiydi.",tips:"Her alt soruya en az 2-3 cümle ayırın. Duygularınızı da ifade edin: 'unforgettable', 'fascinating', 'mind-blowing'. Kronolojik sıra kullanın."}
    ],
    usefulPhrases:[
      {en:"I'd like to talk about...",tr:"... hakkında konuşmak istiyorum.",usage:"Konuşmaya başlarken kullanın."},
      {en:"It was truly an unforgettable experience.",tr:"Gerçekten unutulmaz bir deneyimdi.",usage:"Güçlü bir izlenim ifade etmek için."},
      {en:"The highlight of the trip was...",tr:"Gezinin en güzel anı ... idi.",usage:"En önemli/güzel noktayı vurgulamak için."},
      {en:"What made it so interesting was...",tr:"Onu bu kadar ilginç kılan ...",usage:"Neden ilginç bulduğunuzu açıklarken."},
      {en:"I would definitely recommend it to anyone.",tr:"Kesinlikle herkese tavsiye ederim.",usage:"Konuşmayı güçlü bir şekilde bitirmek için."},
      {en:"When you think about it...",tr:"Düşününce ...",usage:"Derinlemesine yorum eklemek için."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Part 2'de konuşmaya en iyi nasıl başlanır?",opts:["Yes.","I'd like to talk about...","I don't know...","The answer is..."],correct:1},
        {q:"Hangisi bir 'yer tarif et' cue card'ında olmaz?",opts:["Where it was","When you went","What you did","How much it cost"],correct:3},
        {q:"Konuşmanızı güçlü bitirmek için hangi ifade uygundur?",opts:["That's all.","I don't have anything else to say.","Overall, I'd say it was one of the best experiences.","Finished."],correct:2},
        {q:"'The highlight of the trip' ne demektir?",opts:["Gezinin en kötü anı","Gezinin en pahalı kısmı","Gezinin en güzel/önemli anı","Gezinin sonu"],correct:2}
      ]}
    ]
  }
}),

// --- Unit: Part 3 — Derinlemesine Tartışma ---
"part3-discussion-strategy-1": () => ({
  type:"strategy", title:"Part 3 — Tartışma Stratejileri", level:"B2", minutes:15, unitId:"part3-discussion",
  data: {
    topic:"Part 3 Tartışma Teknikleri",
    explanationTr:"IELTS Speaking Part 3, Part 2'deki konuyla ilgili daha <strong>soyut ve analitik</strong> sorular içerir. Examiner sizden fikir belirtmenizi, karşılaştırma yapmanızı, gelecek hakkında tahmin yürütmenizi ve toplumsal konuları tartışmanızı ister.<br><br><strong>Part 2:</strong> 'Describe a place you visited.' (Kişisel)<br><strong>Part 3:</strong> 'Why do you think tourism is important for a country's economy?' (Genel/Soyut)<br><br><strong>Part 3'te beklenen beceriler:</strong><br>• Fikrinizi gerekçelendirme<br>• Avantaj ve dezavantajları tartışma<br>• Karşılaştırma yapma (geçmiş vs. şimdi, ülkeler arası)<br>• Sebep-sonuç ilişkisi kurma<br>• Gelecek hakkında tahmin yürütme",
    tips:[
      {title:"Fikrini + Gerekçeni Ver",detail:"Sadece 'Yes, I think so' demek yetersiz. 'I believe... because...' veya 'In my opinion... the main reason is...' yapısını kullan."},
      {title:"Örnekler Ver",detail:"Soyut fikirleri somutlaştır: 'For example, in Turkey...' veya 'To illustrate, many young people...' ile örnek ver."},
      {title:"Her İki Tarafı da Tartış",detail:"'On the one hand... on the other hand...' yapısını kullanarak dengeli bir görüş sun. Bu dil yetkinliğini gösterir."},
      {title:"Emin Olmadığında",detail:"Cevabı bilmiyorsan bile konuş: 'That's an interesting question. I haven't thought about it much, but I would say...' ile başla."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Part 3'teki sorular Part 2'ye göre nasıldır?",opts:["Daha kişisel","Daha kolay","Daha soyut ve analitik","Aynı zorlukta"],correct:2},
        {q:"Hangisi Part 3'te uygun bir cevap başlangıcıdır?",opts:["Yes.","I believe... because...","I don't know.","Maybe."],correct:1},
        {q:"Part 3'te examiner ne bekler?",opts:["Kısa yes/no cevaplar","Ezberlenmiş paragraflar","Gerekçeli fikirler ve örnekler","Sadece kişisel hikayeler"],correct:2},
        {q:"Emin olmadığınız bir soruda ne yapmalısınız?",opts:["Sessiz kalmalı","'I don't know' demeli","Düşüncenizi ifade etmeye çalışmalı","Konuyu değiştirmeli"],correct:2}
      ]}
    ]
  }
}),
"part3-discussion-speaking-1": () => ({
  type:"speaking", title:"Part 3 — Toplum & Teknoloji Tartışması", level:"B2", minutes:15, unitId:"part3-discussion",
  data: {
    topic:"Society & Technology Discussion",
    explanationTr:"Bu derste Part 3'te sık çıkan toplum ve teknoloji konularında tartışma pratiği yapacağız. Soyut sorulara gerekçeli, dengeli ve örnekli cevaplar vermeyi öğreneceksiniz.",
    sampleQuestions:[
      "Do you think technology has made people's lives better or worse?",
      "How has social media changed the way people communicate?",
      "What are the advantages and disadvantages of working from home?",
      "Do you think children should be allowed to use smartphones?"
    ],
    modelAnswers:[
      {q:"Do you think technology has made people's lives better or worse?",answer:"Well, that's a really thought-provoking question. I'd say that overall, technology has made our lives significantly better, but it has also brought some challenges. On the positive side, technology has revolutionised healthcare — diseases that were once fatal can now be treated effectively. Communication has also become incredibly easy; we can video call someone on the other side of the world in seconds. However, on the other hand, I think technology has made people more sedentary and sometimes more isolated. Many people spend hours scrolling through social media instead of having face-to-face interactions. So I think the key is finding a balance — using technology as a tool to improve our lives without becoming dependent on it.",answerTr:"Bu gerçekten düşündürücü bir soru. Genel olarak teknolojinin hayatımızı önemli ölçüde iyileştirdiğini söyleyebilirim, ama bazı zorlukları da beraberinde getirdi. Olumlu tarafta, teknoloji sağlık hizmetlerinde devrim yarattı. İletişim inanılmaz kolaylaştı. Öte yandan, insanları daha hareketsiz ve bazen daha yalnız hale getirdi. Anahtar, bir denge bulmaktır.",tips:"Dengeli cevap verin: olumlu + olumsuz. 'On the positive side... However, on the other hand...' yapısını kullanın. Somut örnekler verin."},
      {q:"Do you think children should be allowed to use smartphones?",answer:"That's a complex issue, and I think it depends on the age of the child and how the phone is used. For younger children, say under ten, I believe parents should limit screen time significantly because excessive phone use can affect their social skills and attention span. However, for teenagers, I think smartphones can be useful educational tools if used responsibly. For instance, there are many educational apps and online resources that can help with learning. The important thing, in my view, is that parents set clear boundaries and monitor their children's online activity. So rather than a complete ban, I'd advocate for responsible and supervised use.",answerTr:"Bu karmaşık bir konu ve çocuğun yaşına ve telefonun nasıl kullanıldığına bağlı. Küçük çocuklar için ekran süresini sınırlamak gerekir çünkü aşırı kullanım sosyal becerilerini etkileyebilir. Ancak gençler için akıllı telefonlar sorumlu kullanıldığında faydalı eğitim araçları olabilir. Önemli olan ebeveynlerin net sınırlar koyması. Tamamen yasaklamak yerine sorumlu ve denetimli kullanımı savunurum.",tips:"Karmaşık sorularda 'it depends on...' ile başlamak çok etkili. Farklı durumları ayırt edin (yaş grupları gibi). 'Rather than... I'd advocate for...' gibi sofistike yapılar kullanın."}
    ],
    usefulPhrases:[
      {en:"That's a thought-provoking question.",tr:"Bu düşündürücü bir soru.",usage:"Zaman kazanmak ve düşünceli görünmek için soru üzerine yorum yaparken."},
      {en:"I'd say that overall...",tr:"Genel olarak ... diyebilirim.",usage:"Genel bir değerlendirme yaparken."},
      {en:"On the positive side... However, on the other hand...",tr:"Olumlu tarafta ... Öte yandan ...",usage:"Dengeli bir cevap verirken."},
      {en:"It depends on...",tr:"... bağlıdır.",usage:"Karmaşık soruları farklı açılardan ele alırken."},
      {en:"For instance / For example",tr:"Örneğin",usage:"Soyut fikirleri somut örneklerle desteklerken."},
      {en:"Rather than... I'd advocate for...",tr:"... yerine ... savunurum.",usage:"Alternatif bir çözüm önerirken — sofistike bir yapı."},
      {en:"The key is finding a balance.",tr:"Anahtar bir denge bulmaktır.",usage:"Tartışmayı sonuçlandırırken."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Part 3'te 'Do you think...' sorusuna en iyi yanıt hangisidir?",opts:["Yes, I do.","I'd say that overall... because...","I'm not sure.","No comment."],correct:1},
        {q:"'That's a thought-provoking question' ne amaçla kullanılır?",opts:["Soruyu reddetmek","Zaman kazanmak ve düşünceli yaklaşmak","Konuyu değiştirmek","Examiner'ı övmek"],correct:1},
        {q:"Dengeli bir cevap için hangi yapı kullanılır?",opts:["Only... but also...","First... second... third...","On the one hand... on the other hand...","In addition... moreover..."],correct:2},
        {q:"'Rather than a complete ban, I'd advocate for responsible use' ne anlama gelir?",opts:["Tamamen yasaklamak istiyorum","Yasaklamak yerine sorumlu kullanımı savunuyorum","Kullanım serbest olmalı","Kararsızım"],correct:1}
      ]}
    ]
  }
}),

// --- Unit: Telaffuz & Vurgu ---
"pronunciation-strategy-1": () => ({
  type:"strategy", title:"Telaffuz — Türk Öğrencilerin Hataları", level:"B1", minutes:15, unitId:"pronunciation",
  data: {
    topic:"Türk Konuşmacılar İçin Telaffuz Rehberi",
    explanationTr:"IELTS Speaking'de telaffuz (pronunciation) dört değerlendirme kriterinden biridir ve toplam puanın %25'ini oluşturur. Mükemmel telaffuz gerekmez, ancak <strong>anlaşılır</strong> olmak çok önemlidir.<br><br><strong>Türk öğrencilerin en sık yaptığı telaffuz hataları:</strong><br><br>1. <strong>/θ/ ve /ð/ sesleri (th):</strong> Türkçede bu sesler yoktur. 'think' → /tɪŋk/ değil /θɪŋk/, 'this' → /dɪs/ değil /ðɪs/. Dilinizi üst dişlerinizin arasına hafifçe koyun.<br><br>2. <strong>/w/ ve /v/ karışıklığı:</strong> Türkçede /w/ sesi yoktur. 'water' → /vɔːtər/ değil /wɔːtər/, 'very' → /w/ ile değil /v/ ile. Dudaklarınızı yuvarlayarak /w/ sesi çıkarın.<br><br>3. <strong>Kısa ve uzun ünlüler:</strong> 'ship' /ɪ/ vs. 'sheep' /iː/, 'full' /ʊ/ vs. 'fool' /uː/. Uzunluk farkı anlam değiştirir!<br><br>4. <strong>Kelime vurgusu:</strong> İngilizce'de vurgu yanlış hecede olursa kelime anlaşılamaz: phoTOgraphy (fotoğrafçılık), PHOtograph (fotoğraf).",
    tips:[
      {title:"/θ/ (th) Pratiği",detail:"'Think, three, Thursday, through, thought' — Dil ucunuzu üst dişlerin arasına koyup üfleyin. Önce yavaş, sonra hızlanarak pratik yapın."},
      {title:"/w/ Pratiği",detail:"'Water, weather, would, want, world' — Dudaklarınızı 'u' der gibi yuvarlayıp açarak /w/ sesi çıkarın. /v/ ile karıştırmayın: 'west' ≠ 'vest'."},
      {title:"Kısa/Uzun Ünlü Pratik Çiftleri",detail:"ship/sheep, bit/beat, full/fool, pull/pool, cut/cart — Bu çiftleri yan yana söyleyerek farkı hissedin."},
      {title:"Kelime Vurgusu Kuralları",detail:"2 heceli isimlerde vurgu genelde 1. hecede: TAble, STUdent. 2 heceli fiillerde genelde 2. hecede: beLIEVE, deCIDE. -tion/-sion ile biten kelimelerde vurgu son önceki hecede: eduCAtion, commuNIcation."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'Think' kelimesinde /θ/ sesini doğru çıkarmak için ne yapmalısınız?",opts:["Dili damağa koyun","Dil ucunu dişlerin arasına koyup üfleyin","Dudakları yuvarlayın","Normal /t/ sesi çıkarın"],correct:1},
        {q:"'Water' ve 'very' arasındaki telaffuz farkı nedir?",opts:["İkisi de /v/ ile başlar","Water /w/, very /v/ ile başlar","İkisi de /w/ ile başlar","Fark yoktur"],correct:1},
        {q:"'Ship' ve 'sheep' arasındaki fark nedir?",opts:["Sessiz harfler","Ünlü uzunluğu: /ɪ/ vs /iː/","Vurgu farkı","Fark yoktur"],correct:1},
        {q:"'Photography' kelimesinde vurgu hangi hecededir?",opts:["PHO-to-gra-phy","pho-TO-gra-phy","pho-to-GRA-phy","pho-to-gra-PHY"],correct:1}
      ]}
    ]
  }
}),
"pronunciation-vocab-1": () => ({
  type:"vocabulary", title:"Telaffuz Pratik Kelimeleri", level:"B1", minutes:12, unitId:"pronunciation",
  data: {
    theme:"Zor Telaffuzlu Kelimeler",
    words:[
      {e:"Through",t:"Boyunca/İçinden",p:"/θruː/",ex:"We walked through the park.",ext:"Parkın içinden yürüdük. DİKKAT: /θ/ sesi — dil dişlerin arasında."},
      {e:"Thought",t:"Düşünce / Düşündü",p:"/θɔːt/",ex:"I thought about it carefully.",ext:"Dikkatli düşündüm. DİKKAT: 'ght' sessizdir, /t/ ile biter."},
      {e:"Weather",t:"Hava durumu",p:"/ˈwɛðər/",ex:"The weather is nice today.",ext:"Bugün hava güzel. DİKKAT: /w/ dudak yuvarlayarak, /ð/ dil dişler arasında."},
      {e:"World",t:"Dünya",p:"/wɜːrld/",ex:"English is spoken all over the world.",ext:"İngilizce tüm dünyada konuşulur. DİKKAT: /w/ ile başlar, /v/ değil."},
      {e:"Comfortable",t:"Rahat",p:"/ˈkʌmftəbl/",ex:"This chair is very comfortable.",ext:"Bu sandalye çok rahat. DİKKAT: 3 hece gibi söylenir: KUMF-tuh-bl, 4 değil."},
      {e:"Vegetable",t:"Sebze",p:"/ˈvɛdʒtəbl/",ex:"Eat more vegetables.",ext:"Daha fazla sebze ye. DİKKAT: 3 hece: VEJ-tuh-bl."},
      {e:"Determine",t:"Belirlemek",p:"/dɪˈtɜːrmɪn/",ex:"We need to determine the cause.",ext:"Sebebi belirlememiz gerekiyor. Vurgu 2. hecede: de-TER-mine."},
      {e:"Development",t:"Gelişme/Kalkınma",p:"/dɪˈvɛləpmənt/",ex:"Economic development is important.",ext:"Ekonomik kalkınma önemlidir. Vurgu 2. hecede: de-VEL-op-ment."},
      {e:"Environment",t:"Çevre",p:"/ɪnˈvaɪrənmənt/",ex:"We must protect the environment.",ext:"Çevreyi korumalıyız. Vurgu 2. hecede: en-VI-ron-ment."},
      {e:"Certificate",t:"Sertifika/Belge",p:"/sərˈtɪfɪkət/",ex:"She received a certificate.",ext:"Bir sertifika aldı. Vurgu 2. hecede: cer-TIF-i-cate."}
    ],
    exercises:[
      {type:"match",q:"Doğru telaffuz ile eşleştir",pairs:[["Through","/θruː/"],["Weather","/ˈwɛðər/"],["World","/wɜːrld/"],["Comfortable","/ˈkʌmftəbl/"],["Environment","/ɪnˈvaɪrənmənt/"]]},
      {type:"quiz",items:[
        {q:"'Thought' kelimesinde 'gh' nasıl telaffuz edilir?",opts:["Normal /g/ sesi","Normal /h/ sesi","Sessizdir — telaffuz edilmez","/f/ sesi"],correct:2},
        {q:"'Comfortable' kaç hece olarak söylenir?",opts:["2 hece","3 hece","4 hece","5 hece"],correct:1},
        {q:"'World' kelimesinin başındaki ses hangisidir?",opts:["/v/","/w/","/u/","/r/"],correct:1},
        {q:"'Development' kelimesinde vurgu nerededir?",opts:["1. hece: DE-","2. hece: -VEL-","3. hece: -op-","4. hece: -ment"],correct:1}
      ]}
    ]
  }
}),
"pronunciation-speaking-1": () => ({
  type:"speaking", title:"Telaffuz Pratik Cümleleri", level:"B1", minutes:15, unitId:"pronunciation",
  data: {
    topic:"Pronunciation Practice Sentences",
    explanationTr:"Bu derste Türk öğrencilerin zorlandığı sesleri içeren cümlelerle pratik yapacağız. Her cümleyi yavaşça, sonra doğal hızda söylemeye çalışın. Özellikle /θ/, /ð/, /w/ seslerine ve kelime vurgusuna odaklanın.",
    sampleQuestions:[
      "Can you say: 'I think the weather will be nice on Thursday'?",
      "Can you say: 'The world needs better environmental protection'?",
      "Can you say: 'I would like some water, please'?",
      "Can you say: 'Three thousand people thought it was worth the effort'?"
    ],
    modelAnswers:[
      {q:"Minimal pair pratiği: ship vs sheep",answer:"The ship is very large. (kısa /ɪ/ — dudaklar gevşek, kısa ses)\nThe sheep is in the field. (uzun /iː/ — dudaklar geniş, uzun ses)\n\nI live near the beach. (/iː/ — uzun)\nI'll sit on this seat. (/ɪ/ kısa, /iː/ uzun — aynı cümledeki fark)",answerTr:"'Ship' kısa /ɪ/ sesidir — hızlıca söylenir. 'Sheep' uzun /iː/ sesidir — dudakları yana çekerek uzun söylenir. Bu fark İngilizce'de anlam değiştirir: 'bit' (parça) vs 'beat' (yenmek).",tips:"/ɪ/ için ağzınızı biraz açın, kısa söyleyin. /iː/ için dudaklarınızı yana çekip uzun söyleyin."},
      {q:"'Th' sesi pratiği",answer:"I think we should go through the main entrance.\nThis is the third Thursday of the month.\nThey thought about it, then thanked their teacher.",answerTr:"Bu cümlelerde hem /θ/ (think, through, third, Thursday, thought, thanked) hem /ð/ (this, the, they, their) sesleri var. /θ/ sessiz (fısıldama gibi), /ð/ sesli (titreşimli).",tips:"/θ/ için dil ucunu üst dişlerin arasına koyup ses tellerinizi titretmeden üfleyin. /ð/ için aynı pozisyonda ama ses telleri titrer."}
    ],
    usefulPhrases:[
      {en:"Let me try that again.",tr:"Bir daha deneyeyim.",usage:"Telaffuzu düzeltmek istediğinizde — sınavda da kullanabilirsiniz."},
      {en:"How do you pronounce...?",tr:"... nasıl telaffuz edilir?",usage:"Doğru telaffuzu sormak için."},
      {en:"Is the stress on the first syllable?",tr:"Vurgu birinci hecede mi?",usage:"Kelime vurgusunu kontrol etmek için."},
      {en:"I find it difficult to pronounce...",tr:"... telaffuz etmeyi zor buluyorum.",usage:"Zorlandığınız sesleri ifade etmek için."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'Think' ve 'this' arasındaki /th/ farkı nedir?",opts:["Fark yoktur","Think sessiz /θ/, this sesli /ð/","Think sesli, this sessiz","İkisi de /t/ sesidir"],correct:1},
        {q:"'West' ve 'vest' arasındaki fark nedir?",opts:["Fark yoktur","West /w/ ile başlar, vest /v/ ile","İkisi de /v/ ile başlar","İkisi de /w/ ile başlar"],correct:1},
        {q:"'Bit' ve 'beat' arasındaki fark nedir?",opts:["Sessiz harfler","Bit kısa /ɪ/, beat uzun /iː/","Vurgu farkı","Fark yoktur"],correct:1},
        {q:"İngilizce'de kelime vurgusunu yanlış koymak ne olur?",opts:["Hiçbir şey olmaz","Kelime anlaşılamaz","Daha kibar olursun","Daha resmi olur"],correct:1}
      ]}
    ]
  }
}),

// ============ MODULE: DAILY-LIFE (devam) ============

// --- Unit: Ulaşım & Yön Tarifi ---
"transport-vocab-1": () => ({
  type:"vocabulary", title:"Ulaşım Araçları", level:"A1", minutes:10, unitId:"transport",
  data: {
    theme:"Ulaşım",
    words:[
      {e:"Bus",t:"Otobüs",p:"/bʌs/",ex:"I take the bus to work.",ext:"İşe otobüsle giderim."},
      {e:"Train",t:"Tren",p:"/treɪn/",ex:"The train is faster than the bus.",ext:"Tren otobüsten daha hızlıdır."},
      {e:"Taxi",t:"Taksi",p:"/ˈtæksi/",ex:"Let's take a taxi.",ext:"Taksi tutalım."},
      {e:"Subway",t:"Metro",p:"/ˈsʌbweɪ/",ex:"The subway is very crowded.",ext:"Metro çok kalabalık."},
      {e:"Tram",t:"Tramvay",p:"/træm/",ex:"The tram stops here.",ext:"Tramvay burada durur."},
      {e:"Ferry",t:"Vapur/Feribot",p:"/ˈfɛri/",ex:"We take the ferry to the island.",ext:"Adaya vapurla gideriz."},
      {e:"Bicycle",t:"Bisiklet",p:"/ˈbaɪsɪkl/",ex:"I ride my bicycle every day.",ext:"Her gün bisiklet sürerim."},
      {e:"Car",t:"Araba",p:"/kɑːr/",ex:"He drives a red car.",ext:"Kırmızı bir araba kullanır."},
      {e:"Station",t:"İstasyon/Durak",p:"/ˈsteɪʃən/",ex:"Where is the train station?",ext:"Tren istasyonu nerede?"},
      {e:"Stop",t:"Durak",p:"/stɒp/",ex:"The bus stop is over there.",ext:"Otobüs durağı şurada."},
      {e:"Ticket",t:"Bilet",p:"/ˈtɪkɪt/",ex:"I need a return ticket.",ext:"Gidiş-dönüş bilete ihtiyacım var."},
      {e:"Platform",t:"Peron",p:"/ˈplætfɔːrm/",ex:"The train leaves from platform 3.",ext:"Tren 3. perondan kalkıyor."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Bus","Otobüs"],["Train","Tren"],["Taxi","Taksi"],["Ferry","Vapur"],["Ticket","Bilet"]]},
      {type:"quiz",items:[
        {q:"\"I go to work ___ bus.\" Boşluğa ne gelir?",opts:["with","in","on","by"],correct:3,hint:"Ulaşım araçlarıyla 'by' kullanılır: by bus, by train, by car. Türkçede 'otobüsle' derken ek kullanılır."},
        {q:"\"Platform\" ne demek?",opts:["Durak","Bilet","Peron","İstasyon"],correct:2},
        {q:"\"I ride my bicycle\" ne demek?",opts:["Bisikletimi satarım","Bisiklet sürerim","Bisikletim var","Bisiklet isterim"],correct:1},
        {q:"Hangisi bir su taşıtıdır?",opts:["Tram","Bus","Ferry","Car"],correct:2},
        {q:"\"The train leaves ___ platform 3.\" Boşluğa ne gelir?",opts:["in","at","on","from"],correct:3,hint:"Platform'dan kalkmak için 'from' kullanılır."}
      ]}
    ]
  }
}),
"transport-vocab-2": () => ({
  type:"vocabulary", title:"Yön Tarifi Kelimeleri", level:"A2", minutes:10, unitId:"transport",
  data: {
    theme:"Yönler",
    words:[
      {e:"Left",t:"Sol",p:"/lɛft/",ex:"Turn left at the traffic lights.",ext:"Trafik ışıklarında sola dön."},
      {e:"Right",t:"Sağ",p:"/raɪt/",ex:"Turn right after the bridge.",ext:"Köprüden sonra sağa dön."},
      {e:"Straight",t:"Düz/Dosdoğru",p:"/streɪt/",ex:"Go straight for 200 metres.",ext:"200 metre düz git."},
      {e:"Corner",t:"Köşe",p:"/ˈkɔːrnər/",ex:"The shop is on the corner.",ext:"Dükkan köşede."},
      {e:"Opposite",t:"Karşısında",p:"/ˈɒpəzɪt/",ex:"The bank is opposite the park.",ext:"Banka parkın karşısında."},
      {e:"Next to",t:"Yanında",p:"/nɛkst tuː/",ex:"The pharmacy is next to the hospital.",ext:"Eczane hastanenin yanında."},
      {e:"Between",t:"Arasında",p:"/bɪˈtwiːn/",ex:"The café is between the bank and the school.",ext:"Kafe banka ile okulun arasında."},
      {e:"Crossroads",t:"Kavşak",p:"/ˈkrɒsroʊdz/",ex:"Turn right at the crossroads.",ext:"Kavşakta sağa dön."},
      {e:"Traffic lights",t:"Trafik ışıkları",p:"/ˈtræfɪk laɪts/",ex:"Stop at the traffic lights.",ext:"Trafik ışıklarında dur."},
      {e:"Roundabout",t:"Dönel kavşak",p:"/ˈraʊndəbaʊt/",ex:"Go around the roundabout.",ext:"Dönel kavşaktan dön."},
      {e:"Bridge",t:"Köprü",p:"/brɪdʒ/",ex:"Cross the bridge.",ext:"Köprüyü geç."},
      {e:"Map",t:"Harita",p:"/mæp/",ex:"Can you show me on the map?",ext:"Haritada gösterebilir misiniz?"}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Left","Sol"],["Right","Sağ"],["Corner","Köşe"],["Bridge","Köprü"],["Opposite","Karşısında"]]},
      {type:"quiz",items:[
        {q:"\"Go straight\" ne demek?",opts:["Sağa dön","Düz git","Sola dön","Dur"],correct:1},
        {q:"\"Next to\" ne demek?",opts:["Karşısında","Arasında","Yanında","Arkasında"],correct:2},
        {q:"\"The bank is ___ the park.\" (karşısında) Boşluğa ne gelir?",opts:["next to","between","opposite","behind"],correct:2,hint:"Yer edatları Türkçede ek ile, İngilizcede ayrı kelimelerle ifade edilir."},
        {q:"\"The café is ___ the bank and the school.\" Boşluğa ne gelir?",opts:["next to","opposite","between","in front of"],correct:2,hint:"İki şeyin arasında olmak için 'between' kullanılır."}
      ]}
    ]
  }
}),
"transport-grammar-1": () => ({
  type:"grammar", title:"Emir Cümleleri — Imperatives", level:"A2", minutes:12, unitId:"transport",
  data: {
    topic:"Imperatives (Emir Kipi)",
    explanationTr:"İngilizcede birine yön tarif ederken veya talimat verirken <strong>emir kipi (imperative)</strong> kullanılır. Emir cümlelerinde özne (you) söylenmez, fiil ile başlanır.<br><br><strong>Olumlu:</strong> Turn left. / Go straight.<br><strong>Olumsuz:</strong> Don't turn right. / Don't stop here.",
    rules:[
      {rule:"Olumlu emir: Fiil ile başla",examples:[{en:"<hl>Turn</hl> left at the corner.",tr:"Köşede sola dön."},{en:"<hl>Go</hl> straight for two blocks.",tr:"İki blok düz git."},{en:"<hl>Take</hl> the first right.",tr:"İlk sağdan dön."}]},
      {rule:"Olumsuz emir: Don't + fiil",examples:[{en:"<hl>Don't</hl> turn right here.",tr:"Burada sağa dönme."},{en:"<hl>Don't</hl> cross the road.",tr:"Yolun karşısına geçme."},{en:"<hl>Don't</hl> take the highway.",tr:"Otoyola girme."}]},
      {rule:"Kibar emir: Please ekle",examples:[{en:"<hl>Please</hl> turn left.",tr:"Lütfen sola dönün."},{en:"Could you <hl>please</hl> show me the way?",tr:"Lütfen bana yolu gösterir misiniz?"},{en:"<hl>Please</hl> stop here.",tr:"Lütfen burada durun."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"Düz git\" İngilizcede nasıl söylenir?",opts:["You go straight","Go straight","Going straight","Goes straight"],correct:1},
        {q:"\"Burada durma\" İngilizcede ne?",opts:["Not stop here","Don't stop here","No stop here","Stopping not here"],correct:1,hint:"İngilizcede olumsuz emir: Don't + fiil. Türkçedeki '-ma/-me' eki yerine 'Don't' kullanılır."},
        {q:"Hangisi bir emir cümlesidir?",opts:["He turns left","Turning left","Turn left","He is turning left"],correct:2},
        {q:"\"Take the second left\" ne demek?",opts:["İkinci soldan dön","İki kere sola dön","Solu al","Sol tarafı tut"],correct:0}
      ]}
    ]
  }
}),
"transport-dialogue-1": () => ({
  type:"dialogue", title:"Yol Sorma Diyaloğu", level:"A2", minutes:10, unitId:"transport",
  data: {
    context:"Bir turist sokakta birine yol soruyor.",
    lines:[
      {speaker:"A",text:"Excuse me, can you help me? I'm looking for the train station.",tr:"Affedersiniz, bana yardım edebilir misiniz? Tren istasyonunu arıyorum."},
      {speaker:"B",text:"Of course! Go straight along this road for about 200 metres.",tr:"Tabii ki! Bu yol boyunca yaklaşık 200 metre düz gidin."},
      {speaker:"A",text:"OK, and then?",tr:"Tamam, sonra?"},
      {speaker:"B",text:"Then turn left at the traffic lights. You'll see a big park on your right.",tr:"Sonra trafik ışıklarında sola dönün. Sağınızda büyük bir park göreceksiniz."},
      {speaker:"A",text:"Left at the traffic lights, park on the right. Got it.",tr:"Trafik ışıklarında sol, sağda park. Anladım."},
      {speaker:"B",text:"Yes. The station is just past the park, opposite the shopping centre.",tr:"Evet. İstasyon parkın hemen ilerisinde, alışveriş merkezinin karşısında."},
      {speaker:"A",text:"How long does it take on foot?",tr:"Yürüyerek ne kadar sürer?"},
      {speaker:"B",text:"About 10 minutes. You can't miss it!",tr:"Yaklaşık 10 dakika. Kaçırmazsınız!"}
    ],
    keyPhrases:[
      {en:"I'm looking for...",tr:"...arıyorum"},
      {en:"Go straight along this road",tr:"Bu yol boyunca düz gidin"},
      {en:"Turn left at the traffic lights",tr:"Trafik ışıklarında sola dönün"},
      {en:"How long does it take?",tr:"Ne kadar sürer?"},
      {en:"You can't miss it!",tr:"Kaçırmazsınız!"}
    ],
    quiz:[
      {q:"\"I'm looking for the station\" ne demek?",opts:["İstasyonu gördüm","İstasyonu arıyorum","İstasyona gittim","İstasyonu biliyorum"],correct:1},
      {q:"İstasyon neredeymiş?",opts:["Parkın içinde","Alışveriş merkezinde","Parkın ilerisinde, AVM karşısında","Trafik ışıklarında"],correct:2},
      {q:"\"How long does it take on foot?\" ne soruyor?",opts:["Ne kadar uzak?","Yürüyerek ne kadar sürer?","Otobüs var mı?","Saat kaçta?"],correct:1},
      {q:"Trafik ışıklarında hangi yöne dönmek gerekiyor?",opts:["Sağa","Sola","Düz devam","Geri dönüş"],correct:1}
    ]
  }
}),

// --- Unit: Ev & Eşyalar ---
"home-vocab-1": () => ({
  type:"vocabulary", title:"Odalar & Mobilyalar", level:"A1", minutes:10, unitId:"home",
  data: {
    theme:"Ev",
    words:[
      {e:"Kitchen",t:"Mutfak",p:"/ˈkɪtʃɪn/",ex:"I cook in the kitchen.",ext:"Mutfakta yemek pişiririm."},
      {e:"Living room",t:"Oturma odası",p:"/ˈlɪvɪŋ ruːm/",ex:"We watch TV in the living room.",ext:"Oturma odasında TV izleriz."},
      {e:"Bedroom",t:"Yatak odası",p:"/ˈbɛdruːm/",ex:"My bedroom is upstairs.",ext:"Yatak odam üst katta."},
      {e:"Bathroom",t:"Banyo",p:"/ˈbæθruːm/",ex:"The bathroom is next to the bedroom.",ext:"Banyo yatak odasının yanında."},
      {e:"Garden",t:"Bahçe",p:"/ˈɡɑːrdən/",ex:"We have a small garden.",ext:"Küçük bir bahçemiz var."},
      {e:"Sofa",t:"Kanepe",p:"/ˈsoʊfə/",ex:"Sit on the sofa.",ext:"Kanepeye otur."},
      {e:"Table",t:"Masa",p:"/ˈteɪbəl/",ex:"The food is on the table.",ext:"Yemek masanın üstünde."},
      {e:"Chair",t:"Sandalye",p:"/tʃɛr/",ex:"Please take a chair.",ext:"Lütfen bir sandalye alın."},
      {e:"Bed",t:"Yatak",p:"/bɛd/",ex:"I go to bed at 11 pm.",ext:"Gece 11'de yatarım."},
      {e:"Fridge",t:"Buzdolabı",p:"/frɪdʒ/",ex:"The milk is in the fridge.",ext:"Süt buzdolabında."},
      {e:"Wardrobe",t:"Dolap/Gardırop",p:"/ˈwɔːrdroʊb/",ex:"My clothes are in the wardrobe.",ext:"Kıyafetlerim dolaptadır."},
      {e:"Lamp",t:"Lamba",p:"/læmp/",ex:"Turn on the lamp, please.",ext:"Lambayı aç lütfen."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Kitchen","Mutfak"],["Bedroom","Yatak odası"],["Sofa","Kanepe"],["Fridge","Buzdolabı"],["Garden","Bahçe"]]},
      {type:"quiz",items:[
        {q:"\"Living room\" ne demek?",opts:["Yatak odası","Mutfak","Oturma odası","Banyo"],correct:2},
        {q:"\"The milk is ___ the fridge.\" Boşluğa ne gelir?",opts:["at","on","in","to"],correct:2,hint:"Kapalı alanların içi için 'in' kullanılır. Türkçede 'buzdolabında' derken ek kullanılır."},
        {q:"\"The book is ___ the table.\" Boşluğa ne gelir?",opts:["in","at","on","to"],correct:2,hint:"Yüzey üstünde olmak için 'on' kullanılır: on the table, on the wall."},
        {q:"\"There is ___ lamp next to the bed.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"İlk kez bahsedilen tekil nesneler için 'a/an' kullanılır. 'Lamp' sessiz harfle başlar → 'a'."}
      ]}
    ]
  }
}),
"home-grammar-1": () => ({
  type:"grammar", title:"There is / There are", level:"A1", minutes:12, unitId:"home",
  data: {
    topic:"There is / There are",
    explanationTr:"İngilizcede bir yerde bir şeyin var olduğunu söylemek için <strong>there is</strong> (tekil) ve <strong>there are</strong> (çoğul) kullanılır. Türkçede \"var\" ve \"yok\" ile karşılanır.<br><br><strong>There is</strong> → tekil veya sayılamayan isimler için<br><strong>There are</strong> → çoğul isimler için",
    rules:[
      {rule:"There is + tekil/sayılamayan",examples:[{en:"<hl>There is</hl> a table in the kitchen.",tr:"Mutfakta bir masa var."},{en:"<hl>There is</hl> some milk in the fridge.",tr:"Buzdolabında biraz süt var."},{en:"<hl>There is</hl> a lamp next to the bed.",tr:"Yatağın yanında bir lamba var."}]},
      {rule:"There are + çoğul",examples:[{en:"<hl>There are</hl> three bedrooms in the house.",tr:"Evde üç yatak odası var."},{en:"<hl>There are</hl> two chairs in the garden.",tr:"Bahçede iki sandalye var."},{en:"<hl>There are</hl> many books on the shelf.",tr:"Rafta çok kitap var."}]},
      {rule:"Olumsuz: There isn't / There aren't",examples:[{en:"<hl>There isn't</hl> a garden.",tr:"Bahçe yok."},{en:"<hl>There aren't</hl> any windows in this room.",tr:"Bu odada hiç pencere yok."},{en:"<hl>There isn't</hl> any hot water.",tr:"Sıcak su yok."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"___ a sofa in the living room.\" boşluğa ne gelir?",opts:["There are","There is","There have","There has"],correct:1},
        {q:"\"___ three cats in the garden.\" boşluğa ne gelir?",opts:["There is","There has","There are","There was"],correct:2},
        {q:"\"Bahçe yok\" İngilizcede ne?",opts:["There aren't a garden","There isn't a garden","There no garden","There don't garden"],correct:1},
        {q:"\"There aren't any chairs\" ne demek?",opts:["Sandalyeler var","Hiç sandalye yok","Sandalye kırık","Sandalye güzel"],correct:1},
        {q:"\"The picture is ___ the wall.\" Boşluğa ne gelir?",opts:["in","at","on","to"],correct:2,hint:"Duvar gibi yüzeyler için 'on' kullanılır. Türkçede 'duvarda' derken ek kullanılır."}
      ]}
    ]
  }
}),
"home-dialogue-1": () => ({
  type:"dialogue", title:"Evini Tarif Etme", level:"A2", minutes:10, unitId:"home",
  data: {
    context:"İki arkadaş birinin yeni evi hakkında konuşuyor.",
    lines:[
      {speaker:"A",text:"I heard you moved to a new apartment. What's it like?",tr:"Yeni bir daireye taşındığını duydum. Nasıl?"},
      {speaker:"B",text:"It's great! There are two bedrooms and a big living room.",tr:"Harika! İki yatak odası ve büyük bir oturma odası var."},
      {speaker:"A",text:"Is there a balcony?",tr:"Balkon var mı?"},
      {speaker:"B",text:"Yes, there is. It's quite big. I put some plants there.",tr:"Evet var. Oldukça büyük. Oraya biraz çiçek koydum."},
      {speaker:"A",text:"What about the kitchen? Is it modern?",tr:"Peki mutfak? Modern mi?"},
      {speaker:"B",text:"Yes, there is a new fridge and a dishwasher. The kitchen is my favourite room.",tr:"Evet, yeni bir buzdolabı ve bulaşık makinesi var. Mutfak en sevdiğim oda."},
      {speaker:"A",text:"Is there a garden?",tr:"Bahçe var mı?"},
      {speaker:"B",text:"No, there isn't. But there is a nice park next to the building.",tr:"Hayır yok. Ama binanın yanında güzel bir park var."}
    ],
    keyPhrases:[
      {en:"What's it like?",tr:"Nasıl? / Neye benziyor?"},
      {en:"Is there a...?",tr:"...var mı?"},
      {en:"There are two bedrooms",tr:"İki yatak odası var"},
      {en:"My favourite room",tr:"En sevdiğim oda"}
    ],
    quiz:[
      {q:"\"What's it like?\" ne soruyor?",opts:["Ne kadar?","Nasıl?","Nerede?","Ne zaman?"],correct:1},
      {q:"Evde bahçe var mı?",opts:["Evet, büyük bir bahçe var","Evet, küçük","Hayır yok","Bahçesi bilinmiyor"],correct:2},
      {q:"Mutfakta ne var?",opts:["Sadece masa","Buzdolabı ve bulaşık makinesi","Hiçbir şey","Sadece ocak"],correct:1},
      {q:"B'nin en sevdiği oda hangisi?",opts:["Yatak odası","Oturma odası","Mutfak","Balkon"],correct:2}
    ]
  }
}),

// ============ MODULE: SOCIAL ============

// --- Unit: Hobiler & Boş Zaman ---
"hobbies-vocab-1": () => ({
  type:"vocabulary", title:"Hobi & Aktivite Kelimeleri", level:"A2", minutes:10, unitId:"hobbies",
  data: {
    theme:"Hobiler",
    words:[
      {e:"Reading",t:"Okuma",p:"/ˈriːdɪŋ/",ex:"I enjoy reading novels.",ext:"Roman okumaktan hoşlanırım."},
      {e:"Swimming",t:"Yüzme",p:"/ˈswɪmɪŋ/",ex:"Swimming is good exercise.",ext:"Yüzme iyi bir egzersizdir."},
      {e:"Cooking",t:"Yemek yapma",p:"/ˈkʊkɪŋ/",ex:"Cooking is my hobby.",ext:"Yemek yapmak benim hobim."},
      {e:"Playing football",t:"Futbol oynama",p:"/ˈpleɪɪŋ ˈfʊtbɔːl/",ex:"I play football on Sundays.",ext:"Pazar günleri futbol oynarım."},
      {e:"Listening to music",t:"Müzik dinleme",p:"/ˈlɪsənɪŋ tuː ˈmjuːzɪk/",ex:"I like listening to music.",ext:"Müzik dinlemeyi severim."},
      {e:"Watching films",t:"Film izleme",p:"/ˈwɒtʃɪŋ fɪlmz/",ex:"We watch films at weekends.",ext:"Hafta sonları film izleriz."},
      {e:"Drawing",t:"Çizim/Resim yapma",p:"/ˈdrɔːɪŋ/",ex:"She is good at drawing.",ext:"O çizimde iyidir."},
      {e:"Photography",t:"Fotoğrafçılık",p:"/fəˈtɒɡrəfi/",ex:"Photography is an expensive hobby.",ext:"Fotoğrafçılık pahalı bir hobidir."},
      {e:"Gardening",t:"Bahçecilik",p:"/ˈɡɑːrdənɪŋ/",ex:"My mother loves gardening.",ext:"Annem bahçeciliği çok sever."},
      {e:"Dancing",t:"Dans etme",p:"/ˈdænsɪŋ/",ex:"Dancing makes me happy.",ext:"Dans etmek beni mutlu eder."},
      {e:"Playing chess",t:"Satranç oynama",p:"/ˈpleɪɪŋ tʃɛs/",ex:"I play chess with my father.",ext:"Babamla satranç oynarım."},
      {e:"Hiking",t:"Doğa yürüyüşü",p:"/ˈhaɪkɪŋ/",ex:"We go hiking in the mountains.",ext:"Dağlarda doğa yürüyüşü yaparız."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Swimming","Yüzme"],["Cooking","Yemek yapma"],["Drawing","Çizim yapma"],["Hiking","Doğa yürüyüşü"],["Dancing","Dans etme"]]},
      {type:"quiz",items:[
        {q:"\"Photography\" ne demek?",opts:["Fotoğraf çekme","Film izleme","Resim yapma","Müzik dinleme"],correct:0},
        {q:"\"Gardening\" ne demek?",opts:["Bahçecilik","Yürüyüş","Balıkçılık","Yüzme"],correct:0},
        {q:"\"I enjoy reading\" ne demek?",opts:["Okurum","Okumaktan hoşlanırım","Okumam gerekiyor","Okuyabilirim"],correct:1},
        {q:"Hangisi bir spor değildir?",opts:["Swimming","Football","Cooking","Hiking"],correct:2},
        {q:"Zeynep likes dancing. '___ dances every weekend.' Boşluğa ne gelir?",opts:["He","It","They","She"],correct:3,hint:"Zeynep kadın ismidir → 'She'. Türkçede 'o' denir ama İngilizcede kadın = she."}
      ]}
    ]
  }
}),
"hobbies-grammar-1": () => ({
  type:"grammar", title:"Like + Gerund / Infinitive", level:"A2", minutes:12, unitId:"hobbies",
  data: {
    topic:"Like / Enjoy / Love + -ing",
    explanationTr:"İngilizcede bir hobiden veya sevdiğimiz şeylerden bahsederken <strong>like, enjoy, love</strong> fiillerinden sonra <strong>-ing</strong> (gerund) veya <strong>to + fiil</strong> (infinitive) kullanılır.<br><br><strong>like + -ing:</strong> I like swimming.<br><strong>like + to + fiil:</strong> I like to swim.<br><br>Her ikisi de doğrudur, ancak <strong>enjoy</strong> ve <strong>don't mind</strong> sadece <strong>-ing</strong> ile kullanılır.",
    rules:[
      {rule:"Like / Love / Hate + -ing veya to + fiil",examples:[{en:"I <hl>like reading</hl> books.",tr:"Kitap okumayı severim."},{en:"She <hl>loves to cook</hl>.",tr:"Yemek yapmaya bayılır."},{en:"He <hl>hates waking</hl> up early.",tr:"Erken kalkmaktan nefret eder."}]},
      {rule:"Enjoy / Don't mind + sadece -ing",examples:[{en:"I <hl>enjoy swimming</hl>.",tr:"Yüzmekten hoşlanırım."},{en:"She <hl>doesn't mind cooking</hl>.",tr:"Yemek yapmaktan rahatsız olmaz."},{en:"We <hl>enjoy travelling</hl>.",tr:"Seyahat etmekten hoşlanırız."}]},
      {rule:"Soru: Do you like + -ing?",examples:[{en:"<hl>Do you like</hl> playing football?",tr:"Futbol oynamayı sever misin?"},{en:"<hl>Does she enjoy</hl> dancing?",tr:"Dans etmekten hoşlanır mı?"},{en:"<hl>What do you like</hl> doing in your free time?",tr:"Boş zamanında ne yapmayı seversin?"}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"I enjoy ___\" boşluğa ne gelir?",opts:["to swim","swim","swimming","swims"],correct:2},
        {q:"\"She likes ___ music.\" boşluğa ne gelir?",opts:["listen","listening to","to listening","listened"],correct:1},
        {q:"Hangisi YANLIŞTIR?",opts:["I like reading","I enjoy reading","I enjoy to read","I like to read"],correct:2},
        {q:"\"What do you like doing?\" ne soruyor?",opts:["Ne yapıyorsun?","Ne yapmayı seversin?","Ne yaptın?","Ne yapacaksın?"],correct:1},
        {q:"Hangisi doğru cümle sırasıdır?",opts:["I music listening enjoy.","Enjoy I listening music.","I enjoy listening to music.","Music I enjoy listening."],correct:2,hint:"İngilizce sıra: Özne + Fiil + Nesne. Türkçedeki 'Ben müzik dinlemeyi severim' sırasından farklıdır."}
      ]}
    ]
  }
}),
"hobbies-dialogue-1": () => ({
  type:"dialogue", title:"Boş Zaman Diyaloğu", level:"A2", minutes:10, unitId:"hobbies",
  data: {
    context:"İki arkadaş hafta sonu planlarını konuşuyor.",
    lines:[
      {speaker:"A",text:"What do you usually do at weekends?",tr:"Hafta sonları genellikle ne yaparsın?"},
      {speaker:"B",text:"I like playing football on Saturdays. What about you?",tr:"Cumartesi günleri futbol oynamayı severim. Ya sen?"},
      {speaker:"A",text:"I enjoy reading and watching films. I don't like sports much.",tr:"Okumaktan ve film izlemekten hoşlanırım. Sporu pek sevmem."},
      {speaker:"B",text:"Really? You should try hiking. It's not like a sport, it's relaxing.",tr:"Gerçekten mi? Doğa yürüyüşünü denemelisin. Spor gibi değil, rahatlatıcı."},
      {speaker:"A",text:"That sounds interesting. Do you enjoy cooking too?",tr:"Kulağa ilginç geliyor. Yemek yapmaktan da hoşlanır mısın?"},
      {speaker:"B",text:"I don't mind cooking, but I love eating out more!",tr:"Yemek yapmaktan rahatsız olmam ama dışarıda yemeyi daha çok seviyorum!"},
      {speaker:"A",text:"Me too! Let's go to that new restaurant tomorrow.",tr:"Ben de! Yarın şu yeni restorana gidelim."},
      {speaker:"B",text:"Great idea! I'd love to.",tr:"Harika fikir! Çok isterim."}
    ],
    keyPhrases:[
      {en:"What do you usually do at weekends?",tr:"Hafta sonları ne yaparsın?"},
      {en:"I like playing...",tr:"...oynamayı severim"},
      {en:"That sounds interesting.",tr:"Kulağa ilginç geliyor."},
      {en:"I don't mind...",tr:"...den rahatsız olmam"},
      {en:"I'd love to.",tr:"Çok isterim."}
    ],
    quiz:[
      {q:"A sporu sever mi?",opts:["Evet, çok sever","Hayır, pek sevmez","Bilinmiyor","Sadece futbolu sever"],correct:1},
      {q:"\"I don't mind cooking\" ne demek?",opts:["Yemek yapmayı sevmem","Yemek yapamam","Yemek yapmaktan rahatsız olmam","Yemek yapmayı unuturum"],correct:2},
      {q:"\"I'd love to\" ne demek?",opts:["Seviyorum","Çok isterim","Sevmezdim","Aşk istiyorum"],correct:1},
      {q:"B hafta sonları ne yapmayı seviyor?",opts:["Film izlemek","Yemek yapmak","Futbol oynamak","Kitap okumak"],correct:2}
    ]
  }
}),

// --- Unit: Seyahat & Tatil ---
"travel-vocab-1": () => ({
  type:"vocabulary", title:"Seyahat Kelimeleri", level:"A2", minutes:10, unitId:"travel",
  data: {
    theme:"Seyahat",
    words:[
      {e:"Airport",t:"Havalimanı",p:"/ˈɛrpɔːrt/",ex:"We arrived at the airport early.",ext:"Havalimanına erken vardık."},
      {e:"Passport",t:"Pasaport",p:"/ˈpæspɔːrt/",ex:"Don't forget your passport!",ext:"Pasaportunu unutma!"},
      {e:"Luggage",t:"Bagaj",p:"/ˈlʌɡɪdʒ/",ex:"My luggage is very heavy.",ext:"Bagajım çok ağır."},
      {e:"Hotel",t:"Otel",p:"/hoʊˈtɛl/",ex:"We booked a hotel near the beach.",ext:"Sahile yakın bir otel ayırttık."},
      {e:"Reservation",t:"Rezervasyon",p:"/ˌrɛzərˈveɪʃən/",ex:"I have a reservation for tonight.",ext:"Bu gece için rezervasyonum var."},
      {e:"Flight",t:"Uçuş",p:"/flaɪt/",ex:"The flight is delayed.",ext:"Uçuş gecikti."},
      {e:"Boarding pass",t:"Biniş kartı",p:"/ˈbɔːrdɪŋ pæs/",ex:"Show your boarding pass, please.",ext:"Biniş kartınızı gösterin lütfen."},
      {e:"Sightseeing",t:"Gezi/Tur",p:"/ˈsaɪtsiːɪŋ/",ex:"We went sightseeing in Rome.",ext:"Roma'da gezi yaptık."},
      {e:"Tourist",t:"Turist",p:"/ˈtʊrɪst/",ex:"The city is full of tourists.",ext:"Şehir turistlerle dolu."},
      {e:"Souvenir",t:"Hediyelik eşya",p:"/ˌsuːvəˈnɪr/",ex:"I bought some souvenirs.",ext:"Birkaç hediyelik eşya aldım."},
      {e:"Beach",t:"Plaj/Sahil",p:"/biːtʃ/",ex:"The beach is beautiful.",ext:"Plaj çok güzel."},
      {e:"Guide",t:"Rehber",p:"/ɡaɪd/",ex:"The tour guide speaks Turkish.",ext:"Tur rehberi Türkçe konuşuyor."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Airport","Havalimanı"],["Passport","Pasaport"],["Luggage","Bagaj"],["Beach","Plaj"],["Souvenir","Hediyelik eşya"]]},
      {type:"quiz",items:[
        {q:"\"Boarding pass\" ne demek?",opts:["Pasaport","Biniş kartı","Bilet","Vize"],correct:1},
        {q:"\"We arrived ___ the airport.\" Boşluğa ne gelir?",opts:["in","on","at","to"],correct:2,hint:"Belirli yerler (havalimanı, istasyon, okul) için 'at' kullanılır."},
        {q:"\"The flight is delayed\" ne demek?",opts:["Uçuş iptal","Uçuş erken","Uçuş gecikti","Uçuş tam zamanında"],correct:2},
        {q:"\"We are going ___ holiday ___ July.\" Boşluklara ne gelir?",opts:["to / at","on / in","in / on","at / in"],correct:1,hint:"'On holiday' ve aylarla 'in' kullanılır: in July, in March."}
      ]}
    ]
  }
}),
"travel-grammar-1": () => ({
  type:"grammar", title:"Gelecek Zaman — Will & Going to", level:"B1", minutes:15, unitId:"travel",
  data: {
    topic:"Future Tense: Will & Going to",
    explanationTr:"İngilizcede gelecekten bahsetmenin iki temel yolu vardır:<br><br><strong>Will:</strong> Anlık kararlar, tahminler ve vaatler için<br><strong>Going to:</strong> Önceden planlanmış niyetler ve kanıta dayalı tahminler için",
    rules:[
      {rule:"Will + fiil: anlık karar, vaat, tahmin",examples:[{en:"I <hl>will</hl> help you with your luggage.",tr:"Bagajınla sana yardım edeceğim."},{en:"I think it <hl>will</hl> rain tomorrow.",tr:"Yarın yağmur yağacağını düşünüyorum."},{en:"I <hl>'ll</hl> call you when I arrive.",tr:"Varınca seni arayacağım."}]},
      {rule:"Going to + fiil: plan, niyet",examples:[{en:"We <hl>are going to</hl> visit Paris next summer.",tr:"Gelecek yaz Paris'i ziyaret edeceğiz."},{en:"I <hl>'m going to</hl> book a hotel tonight.",tr:"Bu gece bir otel ayırtacağım."},{en:"They <hl>are going to</hl> fly to London.",tr:"Londra'ya uçacaklar."}]},
      {rule:"Olumsuz: won't / not going to",examples:[{en:"I <hl>won't</hl> forget my passport.",tr:"Pasaportumu unutmayacağım."},{en:"She <hl>isn't going to</hl> travel alone.",tr:"Tek başına seyahat etmeyecek."},{en:"We <hl>won't</hl> be late for the flight.",tr:"Uçuşa geç kalmayacağız."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Planlı bir tatil için hangisi doğru?",opts:["I will go to Antalya","I am going to go to Antalya","I go Antalya","I going Antalya"],correct:1},
        {q:"Anlık karar: \"Tamam, sana yardım ederim\" →",opts:["I'm going to help you","I help you","I'll help you","I helped you"],correct:2},
        {q:"\"She won't come\" ne demek?",opts:["O gelecek","O gelmeyecek","O geldi","O geliyor"],correct:1,hint:"Türkçede 'o gelmeyecek' derken cinsiyet belirtilmez ama İngilizcede 'she' kadın, 'he' erkek demektir."},
        {q:"\"We are going to visit ___ museum.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:2,hint:"Belirli/bilinen bir müzeden bahsedildiğinde 'the' kullanılır."}
      ]}
    ]
  }
}),
"travel-dialogue-1": () => ({
  type:"dialogue", title:"Otel Rezervasyonu Diyaloğu", level:"B1", minutes:10, unitId:"travel",
  data: {
    context:"Bir turist telefonda otel rezervasyonu yapıyor.",
    lines:[
      {speaker:"A",text:"Good morning, Grand Hotel. How can I help you?",tr:"Günaydın, Grand Otel. Size nasıl yardımcı olabilirim?"},
      {speaker:"B",text:"Hello, I'd like to book a room for three nights, please.",tr:"Merhaba, üç gecelik bir oda ayırtmak istiyorum lütfen."},
      {speaker:"A",text:"Certainly. When are you going to arrive?",tr:"Tabii. Ne zaman geleceksiniz?"},
      {speaker:"B",text:"We're going to arrive on July 15th.",tr:"15 Temmuz'da varacağız."},
      {speaker:"A",text:"Would you like a single or a double room?",tr:"Tek kişilik mi çift kişilik mi oda istersiniz?"},
      {speaker:"B",text:"A double room with a sea view, if possible.",tr:"Mümkünse deniz manzaralı çift kişilik oda."},
      {speaker:"A",text:"Of course. That will be 120 euros per night. Breakfast is included.",tr:"Tabii. Geceliği 120 euro. Kahvaltı dahil."},
      {speaker:"B",text:"That sounds perfect. I'll take it.",tr:"Kulağa harika geliyor. Alıyorum."}
    ],
    keyPhrases:[
      {en:"I'd like to book a room",tr:"Bir oda ayırtmak istiyorum"},
      {en:"When are you going to arrive?",tr:"Ne zaman varacaksınız?"},
      {en:"A double room with a sea view",tr:"Deniz manzaralı çift kişilik oda"},
      {en:"Breakfast is included",tr:"Kahvaltı dahil"},
      {en:"I'll take it",tr:"Alıyorum"}
    ],
    quiz:[
      {q:"\"I'd like to book a room\" ne demek?",opts:["Oda var mı?","Oda ayırtmak istiyorum","Oda güzel mi?","Odayı değiştirin"],correct:1},
      {q:"Kahvaltı fiyata dahil mi?",opts:["Hayır","Evet","Belirtilmemiş","Ekstra ücretli"],correct:1},
      {q:"\"Per night\" ne demek?",opts:["Her gece / gecelik","Toplam","Haftalık","Aylık"],correct:0},
      {q:"Misafir ne tür oda istiyor?",opts:["Tek kişilik","Deniz manzaralı çift kişilik","Bahçe manzaralı","Aile odası"],correct:1}
    ]
  }
}),

// --- Unit: Sağlık & Vücut ---
"health-vocab-1": () => ({
  type:"vocabulary", title:"Vücut Bölümleri & Hastalıklar", level:"A2", minutes:10, unitId:"health",
  data: {
    theme:"Sağlık",
    words:[
      {e:"Head",t:"Baş/Kafa",p:"/hɛd/",ex:"I have a headache.",ext:"Başım ağrıyor."},
      {e:"Stomach",t:"Mide/Karın",p:"/ˈstʌmək/",ex:"My stomach hurts.",ext:"Midem ağrıyor."},
      {e:"Throat",t:"Boğaz",p:"/θroʊt/",ex:"I have a sore throat.",ext:"Boğazım ağrıyor."},
      {e:"Back",t:"Sırt",p:"/bæk/",ex:"My back hurts.",ext:"Sırtım ağrıyor."},
      {e:"Fever",t:"Ateş",p:"/ˈfiːvər/",ex:"She has a high fever.",ext:"Yüksek ateşi var."},
      {e:"Cough",t:"Öksürük",p:"/kɒf/",ex:"I have a bad cough.",ext:"Kötü bir öksürüğüm var."},
      {e:"Cold",t:"Soğuk algınlığı",p:"/koʊld/",ex:"I've caught a cold.",ext:"Soğuk algınlığına yakalandım."},
      {e:"Flu",t:"Grip",p:"/fluː/",ex:"He has the flu.",ext:"Gribi var."},
      {e:"Pain",t:"Ağrı",p:"/peɪn/",ex:"I feel pain in my leg.",ext:"Bacağımda ağrı hissediyorum."},
      {e:"Medicine",t:"İlaç",p:"/ˈmɛdɪsɪn/",ex:"Take this medicine twice a day.",ext:"Bu ilacı günde iki kez al."},
      {e:"Appointment",t:"Randevu",p:"/əˈpɔɪntmənt/",ex:"I have a doctor's appointment.",ext:"Doktor randevum var."},
      {e:"Prescription",t:"Reçete",p:"/prɪˈskrɪpʃən/",ex:"You need a prescription for this medicine.",ext:"Bu ilaç için reçeteye ihtiyacınız var."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Head","Baş"],["Stomach","Mide"],["Fever","Ateş"],["Cough","Öksürük"],["Medicine","İlaç"]]},
      {type:"quiz",items:[
        {q:"\"I have a sore throat\" ne demek?",opts:["Başım ağrıyor","Boğazım ağrıyor","Midem ağrıyor","Sırtım ağrıyor"],correct:1},
        {q:"\"Prescription\" ne demek?",opts:["Randevu","İlaç","Reçete","Hastane"],correct:2},
        {q:"Elif has a headache. '___ should take some medicine.' Boşluğa ne gelir?",opts:["He","It","They","She"],correct:3,hint:"Elif kadın ismidir → 'She'. Türkçede 'o ilaç almalı' derken cinsiyet belirtilmez."},
        {q:"\"I need to see ___ doctor.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"Genel olarak bir doktordan bahsederken 'a' kullanılır."}
      ]}
    ]
  }
}),
"health-grammar-1": () => ({
  type:"grammar", title:"Should / Shouldn't — Tavsiye Verme", level:"B1", minutes:12, unitId:"health",
  data: {
    topic:"Should / Shouldn't for Advice",
    explanationTr:"İngilizcede tavsiye vermek için <strong>should</strong> (yapmalısın) ve <strong>shouldn't</strong> (yapmamalısın) kullanılır. Türkçede \"-meli/-malı\" ve \"-memeli/-mamalı\" eklerine karşılık gelir.",
    rules:[
      {rule:"Should + fiil: tavsiye/öneri",examples:[{en:"You <hl>should</hl> drink lots of water.",tr:"Bol su içmelisin."},{en:"You <hl>should</hl> see a doctor.",tr:"Doktora gitmelisin."},{en:"She <hl>should</hl> take some medicine.",tr:"Biraz ilaç almalı."}]},
      {rule:"Shouldn't + fiil: olumsuz tavsiye",examples:[{en:"You <hl>shouldn't</hl> go to work when you're sick.",tr:"Hastayken işe gitmemelisin."},{en:"He <hl>shouldn't</hl> eat too much sugar.",tr:"Çok fazla şeker yememeli."},{en:"You <hl>shouldn't</hl> stay up late.",tr:"Geç saatlere kadar oturmamalısın."}]},
      {rule:"Soru: Should I...?",examples:[{en:"<hl>Should I</hl> take this medicine?",tr:"Bu ilacı almalı mıyım?"},{en:"<hl>Should I</hl> go to the hospital?",tr:"Hastaneye gitmeli miyim?"},{en:"What <hl>should I</hl> do?",tr:"Ne yapmalıyım?"}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"You should rest\" ne demek?",opts:["Dinlenmelisin","Dinlenme","Dinlendin","Dinleniyorsun"],correct:0},
        {q:"\"He shouldn't smoke\" ne demek?",opts:["Sigara içebilir","Sigara içmemeli","Sigara içiyor","Sigara içti"],correct:1},
        {q:"Başı ağrıyan birine ne dersin?",opts:["You should run","You should take a painkiller","You shouldn't rest","You should eat more"],correct:1},
        {q:"\"Should I see a doctor?\" ne soruyor?",opts:["Doktor musunuz?","Doktora gitmeli miyim?","Doktoru gördünüz mü?","Doktor nerede?"],correct:1},
        {q:"\"You should stay ___ home and rest.\" Boşluğa ne gelir?",opts:["in","on","at","to"],correct:2,hint:"'At home' kalıp ifadedir. Türkçede 'evde' derken ek kullanılır, İngilizcede 'at' edatı gerekir."}
      ]}
    ]
  }
}),
"health-dialogue-1": () => ({
  type:"dialogue", title:"Doktorda Diyaloğu", level:"B1", minutes:10, unitId:"health",
  data: {
    context:"Bir hasta doktora gidiyor.",
    lines:[
      {speaker:"A",text:"Good morning. What seems to be the problem?",tr:"Günaydın. Sorun nedir?"},
      {speaker:"B",text:"I have a terrible headache and a sore throat.",tr:"Korkunç bir baş ağrım ve boğaz ağrım var."},
      {speaker:"A",text:"How long have you had these symptoms?",tr:"Bu belirtiler ne zamandır var?"},
      {speaker:"B",text:"For about three days. I also have a fever.",tr:"Yaklaşık üç gündür. Ayrıca ateşim var."},
      {speaker:"A",text:"I see. You should rest and drink plenty of fluids.",tr:"Anlıyorum. Dinlenmeli ve bol sıvı içmelisiniz."},
      {speaker:"B",text:"Should I take any medicine?",tr:"İlaç almalı mıyım?"},
      {speaker:"A",text:"Yes, I'll write you a prescription. Take these tablets twice a day.",tr:"Evet, reçete yazacağım. Bu tabletleri günde iki kez alın."},
      {speaker:"B",text:"Thank you, doctor. Should I come back if it doesn't get better?",tr:"Teşekkürler doktor. İyileşmezsem tekrar gelmeli miyim?"}
    ],
    keyPhrases:[
      {en:"What seems to be the problem?",tr:"Sorun nedir?"},
      {en:"How long have you had these symptoms?",tr:"Bu belirtiler ne zamandır var?"},
      {en:"You should rest and drink plenty of fluids",tr:"Dinlenmeli ve bol sıvı içmelisiniz"},
      {en:"I'll write you a prescription",tr:"Size reçete yazacağım"}
    ],
    quiz:[
      {q:"Hastanın şikayetleri neler?",opts:["Mide ağrısı","Baş ve boğaz ağrısı","Sırt ağrısı","Bacak ağrısı"],correct:1},
      {q:"Doktor ne tavsiye ediyor?",opts:["Spor yapmasını","Dinlenmesini ve sıvı içmesini","İşe gitmesini","Yemek yememesini"],correct:1},
      {q:"\"Twice a day\" ne demek?",opts:["Haftada iki kez","Günde iki kez","İki gün","Her iki saatte"],correct:1},
      {q:"Belirtiler ne zamandır devam ediyor?",opts:["Bir gündür","Bir haftadır","Yaklaşık üç gündür","Bir aydır"],correct:2}
    ]
  }
}),

// --- Unit: Fikir Belirtme ---
"opinions-vocab-1": () => ({
  type:"vocabulary", title:"Fikir Belirtme İfadeleri", level:"B1", minutes:10, unitId:"opinions",
  data: {
    theme:"Fikirler",
    words:[
      {e:"Agree",t:"Katılmak/Hemfikir olmak",p:"/əˈɡriː/",ex:"I agree with you.",ext:"Sana katılıyorum."},
      {e:"Disagree",t:"Katılmamak",p:"/ˌdɪsəˈɡriː/",ex:"I disagree with that idea.",ext:"O fikre katılmıyorum."},
      {e:"Believe",t:"İnanmak",p:"/bɪˈliːv/",ex:"I believe education is important.",ext:"Eğitimin önemli olduğuna inanıyorum."},
      {e:"Opinion",t:"Fikir/Görüş",p:"/əˈpɪnjən/",ex:"In my opinion, this is wrong.",ext:"Bence bu yanlış."},
      {e:"Point of view",t:"Bakış açısı",p:"/pɔɪnt əv vjuː/",ex:"I understand your point of view.",ext:"Bakış açınızı anlıyorum."},
      {e:"Advantage",t:"Avantaj/Fayda",p:"/ədˈvæntɪdʒ/",ex:"One advantage is the low cost.",ext:"Bir avantajı düşük maliyettir."},
      {e:"Disadvantage",t:"Dezavantaj",p:"/ˌdɪsədˈvæntɪdʒ/",ex:"The main disadvantage is the time.",ext:"Ana dezavantajı zamandır."},
      {e:"However",t:"Ancak/Bununla birlikte",p:"/haʊˈɛvər/",ex:"However, there are some problems.",ext:"Ancak bazı sorunlar var."},
      {e:"Furthermore",t:"Ayrıca/Dahası",p:"/ˈfɜːrðərmɔːr/",ex:"Furthermore, it saves money.",ext:"Ayrıca para tasarrufu sağlar."},
      {e:"Although",t:"Her ne kadar/Rağmen",p:"/ɔːlˈðoʊ/",ex:"Although it's expensive, it's worth it.",ext:"Pahalı olmasına rağmen buna değer."},
      {e:"On the other hand",t:"Öte yandan",p:"/ɒn ðə ˈʌðər hænd/",ex:"On the other hand, city life is exciting.",ext:"Öte yandan şehir hayatı heyecan verici."},
      {e:"As far as I'm concerned",t:"Bana kalırsa",p:"/əz fɑːr əz aɪm kənˈsɜːrnd/",ex:"As far as I'm concerned, it's a good idea.",ext:"Bana kalırsa iyi bir fikir."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Agree","Katılmak"],["Disagree","Katılmamak"],["However","Ancak"],["Furthermore","Ayrıca"],["Although","Rağmen"]]},
      {type:"quiz",items:[
        {q:"\"In my opinion\" ne demek?",opts:["Bence","Kesinlikle","Tabii ki","Aslında"],correct:0},
        {q:"\"Advantage\" ne demek?",opts:["Dezavantaj","Sorun","Avantaj","Fikir"],correct:2},
        {q:"\"On the other hand\" ne demek?",opts:["Bir yandan","Öte yandan","El ele","Başka bir el"],correct:1},
        {q:"\"I disagree\" ne demek?",opts:["Katılıyorum","Katılmıyorum","İnanıyorum","Bilmiyorum"],correct:1},
        {q:"Hangisi doğru cümle sırasıdır?",opts:["Important is education I think.","I think education is important.","Education important is I think.","Think I education important is."],correct:1,hint:"İngilizce sıra: 'I think' + Özne + Fiil + Sıfat. Türkçede fiil sondadır ama İngilizcede değil."}
      ]}
    ]
  }
}),
"opinions-grammar-1": () => ({
  type:"grammar", title:"I think that... / In my opinion", level:"B1", minutes:12, unitId:"opinions",
  data: {
    topic:"Expressing Opinions",
    explanationTr:"İngilizcede fikir belirtmek için çeşitli yapılar kullanılır. Bu yapılar fikirlerinizi daha akademik ve düzgün ifade etmenize yardımcı olur.<br><br>IELTS'te fikir belirtme yapılarını doğru kullanmak puanı artırır.",
    rules:[
      {rule:"I think (that)... / I believe (that)...",examples:[{en:"<hl>I think that</hl> technology is changing our lives.",tr:"Teknolojinin hayatımızı değiştirdiğini düşünüyorum."},{en:"<hl>I believe</hl> exercise is important for health.",tr:"Egzersizin sağlık için önemli olduğuna inanıyorum."},{en:"<hl>I don't think</hl> this is a good idea.",tr:"Bunun iyi bir fikir olduğunu düşünmüyorum."}]},
      {rule:"In my opinion / From my point of view",examples:[{en:"<hl>In my opinion</hl>, education should be free.",tr:"Bence eğitim ücretsiz olmalı."},{en:"<hl>From my point of view</hl>, the advantages outweigh the disadvantages.",tr:"Bakış açıma göre avantajlar dezavantajlardan ağır basıyor."},{en:"<hl>As far as I'm concerned</hl>, this is the best solution.",tr:"Bana kalırsa bu en iyi çözüm."}]},
      {rule:"Katılma ve karşı çıkma",examples:[{en:"<hl>I agree with</hl> this statement because...",tr:"Bu ifadeye katılıyorum çünkü..."},{en:"<hl>I partly agree</hl>, but I also think...",tr:"Kısmen katılıyorum ama aynı zamanda..."},{en:"<hl>I strongly disagree</hl> because...",tr:"Kesinlikle katılmıyorum çünkü..."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"I don't think this is right\" ne demek?",opts:["Bunun doğru olduğunu düşünmüyorum","Düşünmem lazım","Doğruyu düşünmem","Bu düşünce doğru değil"],correct:0},
        {q:"Hangisi fikir belirtme ifadesi DEĞİLDİR?",opts:["In my opinion","I believe that","I think","I go to"],correct:3},
        {q:"\"I partly agree\" ne demek?",opts:["Tamamen katılıyorum","Hiç katılmıyorum","Kısmen katılıyorum","Fikrim yok"],correct:2},
        {q:"IELTS'te fikir belirtirken hangisi daha formal?",opts:["I think","I reckon","In my opinion","I guess"],correct:2}
      ]}
    ]
  }
}),
"opinions-dialogue-1": () => ({
  type:"dialogue", title:"Tartışma Diyaloğu", level:"B1", minutes:10, unitId:"opinions",
  data: {
    context:"İki öğrenci teknoloji hakkında tartışıyor.",
    lines:[
      {speaker:"A",text:"I think social media is bad for young people. What do you think?",tr:"Sosyal medyanın gençler için kötü olduğunu düşünüyorum. Sen ne düşünüyorsun?"},
      {speaker:"B",text:"I partly agree. However, it also has some advantages.",tr:"Kısmen katılıyorum. Ancak bazı avantajları da var."},
      {speaker:"A",text:"Like what? In my opinion, it wastes too much time.",tr:"Mesela ne? Bence çok fazla zaman kaybettiriyor."},
      {speaker:"B",text:"That's true, but on the other hand, it helps people stay connected.",tr:"Doğru ama öte yandan insanların iletişimde kalmasına yardımcı oluyor."},
      {speaker:"A",text:"I see your point. But I believe face-to-face communication is better.",tr:"Bakış açını anlıyorum. Ama yüz yüze iletişimin daha iyi olduğuna inanıyorum."},
      {speaker:"B",text:"I agree with that. Furthermore, too much screen time is unhealthy.",tr:"Buna katılıyorum. Ayrıca çok fazla ekran süresi sağlıksız."},
      {speaker:"A",text:"So we both agree that balance is important.",tr:"Yani ikimiz de dengenin önemli olduğu konusunda hemfikiriz."},
      {speaker:"B",text:"Absolutely. As far as I'm concerned, moderation is the key.",tr:"Kesinlikle. Bana kalırsa ölçülü olmak anahtar."}
    ],
    keyPhrases:[
      {en:"I partly agree",tr:"Kısmen katılıyorum"},
      {en:"On the other hand",tr:"Öte yandan"},
      {en:"I see your point",tr:"Bakış açını anlıyorum"},
      {en:"As far as I'm concerned",tr:"Bana kalırsa"}
    ],
    quiz:[
      {q:"A'nın sosyal medya hakkındaki fikri ne?",opts:["Çok iyi","Gençler için kötü","Fikri yok","Herkese lazım"],correct:1},
      {q:"\"I see your point\" ne demek?",opts:["Seni görüyorum","Noktanı gördüm","Bakış açını anlıyorum","Haklısın"],correct:2},
      {q:"İkisi neyde hemfikir?",opts:["Sosyal medya kötü","Dengenin önemli olduğu","Ekran kullanmamak lazım","Yüz yüze konuşma kötü"],correct:1},
      {q:"\"I partly agree\" ne demek?",opts:["Tamamen katılıyorum","Hiç katılmıyorum","Kısmen katılıyorum","Emin değilim"],correct:2}
    ]
  }
}),

// --- Unit: Duygular & Kişilik ---
"feelings-vocab-1": () => ({
  type:"vocabulary", title:"Duygular & Kişilik Sıfatları", level:"A2", minutes:10, unitId:"feelings",
  data: {
    theme:"Duygular",
    words:[
      {e:"Happy",t:"Mutlu",p:"/ˈhæpi/",ex:"I feel happy today.",ext:"Bugün mutlu hissediyorum."},
      {e:"Sad",t:"Üzgün",p:"/sæd/",ex:"She looks sad.",ext:"Üzgün görünüyor."},
      {e:"Angry",t:"Kızgın",p:"/ˈæŋɡri/",ex:"He gets angry easily.",ext:"Kolay kızar."},
      {e:"Excited",t:"Heyecanlı",p:"/ɪkˈsaɪtɪd/",ex:"I'm excited about the trip.",ext:"Gezi için heyecanlıyım."},
      {e:"Nervous",t:"Gergin/Tedirgin",p:"/ˈnɜːrvəs/",ex:"I'm nervous about the exam.",ext:"Sınav için gerginim."},
      {e:"Bored",t:"Sıkılmış",p:"/bɔːrd/",ex:"I'm bored. Let's do something.",ext:"Sıkıldım. Bir şey yapalım."},
      {e:"Confident",t:"Özgüvenli",p:"/ˈkɒnfɪdənt/",ex:"She is a confident person.",ext:"Özgüvenli bir kişi."},
      {e:"Shy",t:"Utangaç",p:"/ʃaɪ/",ex:"He's too shy to speak in public.",ext:"Topluluk önünde konuşamayacak kadar utangaç."},
      {e:"Generous",t:"Cömert",p:"/ˈdʒɛnərəs/",ex:"My grandmother is very generous.",ext:"Büyükannem çok cömerttir."},
      {e:"Patient",t:"Sabırlı",p:"/ˈpeɪʃənt/",ex:"A good teacher is patient.",ext:"İyi bir öğretmen sabırlıdır."},
      {e:"Lazy",t:"Tembel",p:"/ˈleɪzi/",ex:"Don't be lazy!",ext:"Tembel olma!"},
      {e:"Ambitious",t:"Hırslı/Azimli",p:"/æmˈbɪʃəs/",ex:"She is ambitious and hardworking.",ext:"Hırslı ve çalışkan."}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Happy","Mutlu"],["Sad","Üzgün"],["Angry","Kızgın"],["Shy","Utangaç"],["Lazy","Tembel"]]},
      {type:"quiz",items:[
        {q:"\"Nervous\" ne demek?",opts:["Mutlu","Gergin","Kızgın","Cömert"],correct:1},
        {q:"\"Confident\" ne demek?",opts:["Utangaç","Sabırlı","Özgüvenli","Tembel"],correct:2},
        {q:"\"I'm bored\" ne demek?",opts:["Sıkıldım","Yoruldum","Kızdım","Heyecanlandım"],correct:0},
        {q:"Hangisi olumlu bir kişilik özelliğidir?",opts:["Lazy","Angry","Generous","Bored"],correct:2},
        {q:"Murat is excited about the trip. '___ is very happy.' Boşluğa ne gelir?",opts:["She","It","They","He"],correct:3,hint:"Murat erkek ismidir → 'He'. Türkçede 'o çok mutlu' derken cinsiyet belirtilmez."}
      ]}
    ]
  }
}),
"feelings-grammar-1": () => ({
  type:"grammar", title:"Karşılaştırma — Comparatives & Superlatives", level:"B1", minutes:15, unitId:"feelings",
  data: {
    topic:"Comparatives & Superlatives",
    explanationTr:"İngilizcede iki şeyi karşılaştırmak için <strong>comparative</strong> (-er / more), üç veya daha fazla şeyi karşılaştırmak için <strong>superlative</strong> (-est / most) kullanılır.",
    rules:[
      {rule:"Kısa sıfatlar: -er / -est",examples:[{en:"She is <hl>taller</hl> than me.",tr:"O benden daha uzun."},{en:"He is the <hl>tallest</hl> in the class.",tr:"Sınıftaki en uzun o."},{en:"Today is <hl>hotter</hl> than yesterday.",tr:"Bugün dünden daha sıcak."}]},
      {rule:"Uzun sıfatlar: more / most",examples:[{en:"She is <hl>more confident</hl> than her brother.",tr:"Ağabeyinden daha özgüvenli."},{en:"He is the <hl>most patient</hl> teacher I know.",tr:"Tanıdığım en sabırlı öğretmen."},{en:"This book is <hl>more interesting</hl> than that one.",tr:"Bu kitap şundan daha ilginç."}]},
      {rule:"Düzensiz: good-better-best, bad-worse-worst",examples:[{en:"My English is <hl>better</hl> than last year.",tr:"İngilizcem geçen yıldan daha iyi."},{en:"This is the <hl>worst</hl> movie I've ever seen.",tr:"Gördüğüm en kötü film."},{en:"She is the <hl>best</hl> student in the school.",tr:"Okuldaki en iyi öğrenci."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"She is ___ than her sister.\" (tall)",opts:["taller","more tall","tallest","most tall"],correct:0},
        {q:"\"He is the ___ person I know.\" (generous)",opts:["more generous","most generous","generouser","generousest"],correct:1},
        {q:"\"Good\" sıfatının comparative hali nedir?",opts:["Gooder","More good","Better","Best"],correct:2},
        {q:"\"Bad\" sıfatının superlative hali nedir?",opts:["Baddest","Most bad","Worse","Worst"],correct:3},
        {q:"Hangisi doğrudur?",opts:["Istanbul is the most big city.","Istanbul is the biggest city.","Istanbul is the bigger city.","Istanbul is most big city."],correct:1,hint:"Kısa sıfatlarda superlative: the + sıfat + -est. 'The' article her zaman kullanılır."}
      ]}
    ]
  }
}),
"feelings-dialogue-1": () => ({
  type:"dialogue", title:"Kişilik Tarif Etme Diyaloğu", level:"B1", minutes:10, unitId:"feelings",
  data: {
    context:"İki arkadaş ortak tanıdıkları hakkında konuşuyor.",
    lines:[
      {speaker:"A",text:"Have you met my new colleague, Selin?",tr:"Yeni iş arkadaşım Selin'le tanıştın mı?"},
      {speaker:"B",text:"Yes! She seems very friendly. She's more outgoing than I expected.",tr:"Evet! Çok canayakın görünüyor. Beklediğimden daha dışa dönük."},
      {speaker:"A",text:"She is! She's the most sociable person in our office.",tr:"Öyle! Ofisimizdeki en sosyal kişi."},
      {speaker:"B",text:"Is she hard-working too?",tr:"Çalışkan mı da?"},
      {speaker:"A",text:"Definitely. She's more ambitious than anyone I've worked with.",tr:"Kesinlikle. Birlikte çalıştığım herkesten daha hırslı."},
      {speaker:"B",text:"That's impressive. How does she compare to your old colleague?",tr:"Etkileyici. Eski iş arkadaşınla kıyasla nasıl?"},
      {speaker:"A",text:"Well, my old colleague was more patient, but Selin is better at solving problems.",tr:"Eski iş arkadaşım daha sabırlıydı ama Selin problem çözmede daha iyi."},
      {speaker:"B",text:"She sounds like the best colleague you could ask for!",tr:"İsteyebileceğin en iyi iş arkadaşı gibi görünüyor!"}
    ],
    keyPhrases:[
      {en:"She's more outgoing than...",tr:"...den daha dışa dönük"},
      {en:"The most sociable person",tr:"En sosyal kişi"},
      {en:"More ambitious than anyone",tr:"Herkesten daha hırslı"},
      {en:"Better at solving problems",tr:"Problem çözmede daha iyi"}
    ],
    quiz:[
      {q:"Selin nasıl biri?",opts:["Utangaç ve tembel","Canayakın ve hırslı","Sinirli ve sabırsız","Sıkılgan ve sessiz"],correct:1},
      {q:"\"More outgoing than I expected\" ne demek?",opts:["Beklediğimden daha içe dönük","Beklediğimden daha dışa dönük","Beklediğim kadar","Dışarı çıkmayı seviyor"],correct:1},
      {q:"Eski iş arkadaşının Selin'den daha iyi olduğu özellik ne?",opts:["Hırslılık","Sosyallik","Sabırlılık","Problem çözme"],correct:2},
      {q:"\"The most sociable person\" ne demek?",opts:["En utangaç kişi","En sosyal kişi","En çalışkan kişi","En sabırlı kişi"],correct:1}
    ]
  }
}),

// --- Unit: Teknoloji & İnternet ---
"technology-vocab-1": () => ({
  type:"vocabulary", title:"Teknoloji Kelimeleri", level:"B1", minutes:10, unitId:"technology",
  data: {
    theme:"Teknoloji",
    words:[
      {e:"Computer",t:"Bilgisayar",p:"/kəmˈpjuːtər/",ex:"I use a computer for work.",ext:"İş için bilgisayar kullanırım."},
      {e:"Laptop",t:"Dizüstü bilgisayar",p:"/ˈlæptɒp/",ex:"My laptop is very light.",ext:"Dizüstü bilgisayarım çok hafif."},
      {e:"Smartphone",t:"Akıllı telefon",p:"/ˈsmɑːrtfoʊn/",ex:"Almost everyone has a smartphone now.",ext:"Artık neredeyse herkesin akıllı telefonu var."},
      {e:"App / Application",t:"Uygulama",p:"/æp/",ex:"I downloaded a new language app.",ext:"Yeni bir dil uygulaması indirdim."},
      {e:"Website",t:"Web sitesi",p:"/ˈwɛbsaɪt/",ex:"This website has useful information.",ext:"Bu web sitesi faydalı bilgiler içeriyor."},
      {e:"Password",t:"Şifre",p:"/ˈpæswɜːrd/",ex:"Don't share your password.",ext:"Şifreni paylaşma."},
      {e:"Download",t:"İndirmek",p:"/ˌdaʊnˈloʊd/",ex:"You can download the file for free.",ext:"Dosyayı ücretsiz indirebilirsin."},
      {e:"Upload",t:"Yüklemek",p:"/ˌʌpˈloʊd/",ex:"I uploaded the photos to the cloud.",ext:"Fotoğrafları buluta yükledim."},
      {e:"Social media",t:"Sosyal medya",p:"/ˈsoʊʃəl ˈmiːdiə/",ex:"Social media is very popular.",ext:"Sosyal medya çok popüler."},
      {e:"Online",t:"Çevrimiçi",p:"/ˈɒnlaɪn/",ex:"You can shop online.",ext:"İnternetten alışveriş yapabilirsin."},
      {e:"Screen",t:"Ekran",p:"/skriːn/",ex:"Don't sit too close to the screen.",ext:"Ekrana çok yakın oturma."},
      {e:"Wi-Fi",t:"Kablosuz internet",p:"/ˈwaɪfaɪ/",ex:"Is there free Wi-Fi here?",ext:"Burada ücretsiz Wi-Fi var mı?"}
    ],
    exercises:[
      {type:"match",q:"Eşleştir",pairs:[["Download","İndirmek"],["Upload","Yüklemek"],["Password","Şifre"],["Screen","Ekran"],["App","Uygulama"]]},
      {type:"quiz",items:[
        {q:"\"Upload\" ne demek?",opts:["İndirmek","Yüklemek","Silmek","Açmak"],correct:1},
        {q:"\"Don't share your password\" ne demek?",opts:["Şifreni paylaşma","Şifreni değiştir","Şifreni hatırla","Şifreni yaz"],correct:0},
        {q:"\"I spend too much time ___ the internet.\" Boşluğa ne gelir?",opts:["in","at","on","to"],correct:2,hint:"İnternetle 'on' kullanılır: on the internet, on social media. Türkçede 'internette' eki kullanılır."},
        {q:"\"I downloaded ___ new app.\" Boşluğa ne gelir?",opts:["a","an","the","—"],correct:0,hint:"İlk kez bahsedilen tekil isimlerden önce 'a/an' kullanılır. 'New' sessiz harfle başlar → 'a'."}
      ]}
    ]
  }
}),
"technology-grammar-1": () => ({
  type:"grammar", title:"Edilgen Yapı Temelleri — Passive Voice", level:"B1", minutes:15, unitId:"technology",
  data: {
    topic:"Passive Voice Basics",
    explanationTr:"İngilizcede bir eylemi yapanı değil, eylemin sonucunu vurgulamak istediğimizde <strong>edilgen yapı (passive voice)</strong> kullanılır.<br><br><strong>Active:</strong> They make smartphones in China. (Akıllı telefonları Çin'de yaparlar.)<br><strong>Passive:</strong> Smartphones are made in China. (Akıllı telefonlar Çin'de yapılır.)<br><br>Yapısı: <strong>be + past participle (V3)</strong>",
    rules:[
      {rule:"Present Simple Passive: am/is/are + V3",examples:[{en:"Emails <hl>are sent</hl> every day.",tr:"E-postalar her gün gönderilir."},{en:"The website <hl>is updated</hl> weekly.",tr:"Web sitesi haftalık güncellenir."},{en:"Apps <hl>are downloaded</hl> millions of times.",tr:"Uygulamalar milyonlarca kez indirilir."}]},
      {rule:"Past Simple Passive: was/were + V3",examples:[{en:"The computer <hl>was invented</hl> in the 20th century.",tr:"Bilgisayar 20. yüzyılda icat edildi."},{en:"These photos <hl>were uploaded</hl> yesterday.",tr:"Bu fotoğraflar dün yüklendi."},{en:"The password <hl>was changed</hl> last week.",tr:"Şifre geçen hafta değiştirildi."}]},
      {rule:"by + yapan kişi (isteğe bağlı)",examples:[{en:"The iPhone was designed <hl>by</hl> Apple.",tr:"iPhone Apple tarafından tasarlandı."},{en:"The email was sent <hl>by</hl> the manager.",tr:"E-posta müdür tarafından gönderildi."},{en:"Wi-Fi is used <hl>by</hl> billions of people.",tr:"Wi-Fi milyarlarca kişi tarafından kullanılıyor."}]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"\"The website is updated weekly\" ne demek?",opts:["Web sitesini güncelliyorum","Web sitesi haftalık güncellenir","Web sitesi güncellenmedi","Web sitesini güncelle"],correct:1},
        {q:"\"Was invented\" ne demek?",opts:["İcat etti","İcat edildi","İcat edecek","İcat eder"],correct:1},
        {q:"Active → Passive: \"They sell phones online\" →",opts:["Phones are sold online","Phones sold online","Phones selling online","Phones sell online"],correct:0},
        {q:"\"by\" ne için kullanılır passive cümlede?",opts:["Zaman belirtmek","Yer belirtmek","Yapan kişiyi belirtmek","Nesneyi belirtmek"],correct:2},
        {q:"Hangisi doğru passive cümle sırasıdır?",opts:["Made in China are smartphones.","Smartphones in China are made.","Smartphones are made in China.","In China smartphones made are."],correct:2,hint:"Passive cümle sırası: Nesne (özne olarak) + be + V3 + yer bilgisi."}
      ]}
    ]
  }
}),
"technology-dialogue-1": () => ({
  type:"dialogue", title:"Teknoloji Konuşması", level:"B1", minutes:10, unitId:"technology",
  data: {
    context:"İki arkadaş yeni bir uygulama hakkında konuşuyor.",
    lines:[
      {speaker:"A",text:"Have you heard about the new language learning app?",tr:"Yeni dil öğrenme uygulamasını duydun mu?"},
      {speaker:"B",text:"No, what is it called?",tr:"Hayır, adı ne?"},
      {speaker:"A",text:"It's called LinguaFlow. It was designed for Turkish learners.",tr:"LinguaFlow. Türk öğrenciler için tasarlanmış."},
      {speaker:"B",text:"That sounds useful. Can it be downloaded for free?",tr:"Kulağa faydalı geliyor. Ücretsiz indirilebilir mi?"},
      {speaker:"A",text:"Yes! It's free and it can be used offline too.",tr:"Evet! Ücretsiz ve çevrimdışı da kullanılabilir."},
      {speaker:"B",text:"Great. I spend too much time on social media. I should use my phone for learning instead.",tr:"Harika. Sosyal medyada çok fazla zaman harcıyorum. Bunun yerine telefonumu öğrenme için kullanmalıyım."},
      {speaker:"A",text:"I agree. The app was recommended by my English teacher.",tr:"Katılıyorum. Uygulama İngilizce öğretmenim tarafından tavsiye edildi."},
      {speaker:"B",text:"I'll download it right now!",tr:"Hemen indireceğim!"}
    ],
    keyPhrases:[
      {en:"It was designed for...",tr:"...için tasarlanmış"},
      {en:"Can it be downloaded for free?",tr:"Ücretsiz indirilebilir mi?"},
      {en:"It can be used offline",tr:"Çevrimdışı kullanılabilir"},
      {en:"It was recommended by...",tr:"...tarafından tavsiye edildi"}
    ],
    quiz:[
      {q:"Uygulama kimin için tasarlanmış?",opts:["Amerikalı öğrenciler","Türk öğrenciler","İngiliz öğretmenler","Herkes"],correct:1},
      {q:"\"Can it be downloaded for free?\" hangi yapıda?",opts:["Active voice","Passive voice","Past tense","Future tense"],correct:1},
      {q:"\"I'll download it right now\" ne demek?",opts:["Daha sonra indireceğim","Hemen indireceğim","İndirdim","İndirmeyeceğim"],correct:1},
      {q:"Uygulama çevrimdışı kullanılabilir mi?",opts:["Hayır","Evet","Sadece Wi-Fi ile","Belirtilmemiş"],correct:1}
    ]
  }
}),

// ==================== FORMAL vs INFORMAL DİL ====================
"formal-lang-vocab-1": () => ({
  type:"vocabulary", title:"Formal & Informal Kelimeler", level:"B1", minutes:12, unitId:"formal-lang",
  data: {
    theme:"Formal vs Informal Dil — Akademik Yazıda Kullanılan İfadeler",
    words:[
      {e:"furthermore",t:"ayrıca, bunun yanı sıra",p:"/ˈfɜːðəmɔːr/",ex:"Furthermore, the results indicate a positive trend.",ext:"Akademik yazılarda ek bilgi verirken kullanılır"},
      {e:"however",t:"ancak, bununla birlikte",p:"/haʊˈevər/",ex:"However, there are some limitations to this approach.",ext:"Zıtlık bildiren resmi bağlaç"},
      {e:"obtain",t:"elde etmek",p:"/əbˈteɪn/",ex:"Participants were asked to obtain permission before the study.",ext:"'Get' kelimesinin akademik karşılığı"},
      {e:"sufficient",t:"yeterli",p:"/səˈfɪʃənt/",ex:"The evidence is sufficient to support the hypothesis.",ext:"'Enough' kelimesinin resmi hali"},
      {e:"demonstrate",t:"göstermek, kanıtlamak",p:"/ˈdemənstreɪt/",ex:"The data demonstrate a clear correlation.",ext:"'Show' kelimesinin akademik versiyonu"},
      {e:"consequently",t:"bu nedenle, sonuç olarak",p:"/ˈkɒnsɪkwəntli/",ex:"Consequently, the project was delayed.",ext:"Sebep-sonuç ilişkisi kurar"},
      {e:"investigate",t:"araştırmak, incelemek",p:"/ɪnˈvestɪɡeɪt/",ex:"The aim is to investigate the impact of climate change.",ext:"'Look into' ifadesinin akademik karşılığı"},
      {e:"significant",t:"önemli, anlamlı",p:"/sɪɡˈnɪfɪkənt/",ex:"There was a significant increase in sales.",ext:"'Big/important' yerine akademik yazıda tercih edilir"},
      {e:"approximately",t:"yaklaşık olarak",p:"/əˈprɒksɪmətli/",ex:"Approximately 70% of respondents agreed.",ext:"'About' kelimesinin resmi hali"},
      {e:"whereas",t:"oysa, ise",p:"/weərˈæz/",ex:"Men preferred option A, whereas women chose option B.",ext:"Karşılaştırma yaparken kullanılır"},
      {e:"indicate",t:"belirtmek, göstermek",p:"/ˈɪndɪkeɪt/",ex:"The findings indicate a need for further research.",ext:"'Show/point out' yerine akademik metinlerde kullanılır"},
      {e:"establish",t:"kurmak, belirlemek",p:"/ɪˈstæblɪʃ/",ex:"The study aims to establish a link between diet and health.",ext:"Bir ilişki veya gerçeği ortaya koymak anlamında"}
    ],
    exercises:[
      {type:"match",q:"Formal kelimeleri informal karşılıklarıyla eşleştirin",pairs:[["furthermore","also/and"],["obtain","get"],["sufficient","enough"],["demonstrate","show"],["approximately","about"],["investigate","look into"]]},
      {type:"quiz",items:[
        {q:"'Get' kelimesinin akademik karşılığı hangisidir?",opts:["obtain","get","take","bring"],correct:0},
        {q:"Hangi kelime 'about' anlamında resmi yazılarda kullanılır?",opts:["nearly","around","approximately","closely"],correct:2},
        {q:"'Show' kelimesinin akademik versiyonu hangisidir?",opts:["display","demonstrate","present","exhibit"],correct:1},
        {q:"Zıtlık bildiren resmi bağlaç hangisidir?",opts:["but","however","so","and"],correct:1}
      ]}
    ]
  }
}),

"formal-lang-grammar-1": () => ({
  type:"grammar", title:"Formal Dil Yapıları", level:"B2", minutes:15, unitId:"formal-lang",
  data: {
    topic:"Akademik Yazıda Formal Dil Yapıları",
    explanationTr:"Akademik yazılarda <strong>informal (günlük)</strong> dil yerine <strong>formal (resmi)</strong> dil kullanılması gerekir. Bu, kelime seçimi, cümle yapısı ve ton açısından önemli farklılıklar içerir. IELTS Writing bölümünde resmi dil kullanmak puanınızı olumlu etkiler. <strong>Kısaltmalar</strong> (don't, can't) yerine tam formlar (do not, cannot) tercih edilir. <strong>Phrasal verb</strong> yerine Latince kökenli tekil fiiller kullanılır.",
    rules:[
      {rule:"Kısaltma kullanmayın",examples:[
        {en:"The results <hl>do not</hl> support the theory. (NOT: don't)",tr:"Sonuçlar teoriyi desteklemiyor."},
        {en:"It <hl>cannot</hl> be denied that... (NOT: can't)",tr:"...inkâr edilemez."}
      ]},
      {rule:"Phrasal verb yerine tek kelimelik fiil kullanın",examples:[
        {en:"The government should <hl>eliminate</hl> poverty. (NOT: get rid of)",tr:"Hükümet yoksulluğu ortadan kaldırmalı."},
        {en:"Scientists need to <hl>investigate</hl> this further. (NOT: look into)",tr:"Bilim insanlarının bunu daha fazla araştırması gerekiyor."}
      ]},
      {rule:"Pasif yapı (Passive Voice) tercih edin",examples:[
        {en:"The experiment <hl>was conducted</hl> in 2023.",tr:"Deney 2023'te gerçekleştirildi."},
        {en:"The data <hl>were collected</hl> over a six-month period.",tr:"Veriler altı aylık bir süre boyunca toplandı."}
      ]},
      {rule:"Hedging (yumuşatma) ifadeleri kullanın",examples:[
        {en:"This <hl>may suggest</hl> a correlation.",tr:"Bu bir korelasyona işaret ediyor olabilir."},
        {en:"It <hl>appears that</hl> the trend is increasing.",tr:"Eğilimin artmakta olduğu görülmektedir."}
      ]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Akademik yazıda hangisi doğrudur?",opts:["don't","do not","dont","doesnt"],correct:1},
        {q:"'Look into' yerine akademik yazıda ne kullanılır?",opts:["check out","find out","investigate","search"],correct:2},
        {q:"Hedging ifadesi hangisidir?",opts:["It is certain that","It may suggest","It definitely shows","It always means"],correct:1},
        {q:"Hangisi akademik yazıda tercih edilir?",opts:["We did the experiment","The experiment was conducted","I made the test","They ran it"],correct:1}
      ]}
    ]
  }
}),

"formal-lang-strategy-1": () => ({
  type:"strategy", title:"Register Farkını Tanıma Stratejileri", level:"B1", minutes:12, unitId:"formal-lang",
  data: {
    topic:"Formal ve Informal Register Ayrımını Yapma",
    explanationTr:"IELTS sınavında <strong>doğru register</strong> kullanmak çok önemlidir. Writing Task 2'de ve Speaking Part 3'te resmi dil beklenir. Günlük konuşma dilinden akademik dile geçiş yapabilmek IELTS'te yüksek band almak için kritiktir. Bu derste, hangi durumlarda hangi register'ın kullanılacağını öğreneceksiniz.",
    tips:[
      {title:"Metin türüne göre register belirleyin",detail:"Essay, rapor ve akademik yazılarda formal dil; mektup (arkadaşa) ve günlük konuşmalarda informal dil kullanın. IELTS Writing Task 1 (General) informal olabilir ama Task 2 her zaman resmidir."},
      {title:"Kelime seviyesini yükseltin",detail:"Günlük kelimeleri akademik karşılıklarıyla değiştirin: 'big' → 'significant', 'get' → 'obtain', 'show' → 'demonstrate'. Bu basit değişiklik bile yazınızın tonunu ciddi şekilde iyileştirir."},
      {title:"Kişisel zamirlerden kaçının",detail:"Akademik yazıda 'I think' yerine 'It is believed that' veya 'It can be argued that' gibi kişisel olmayan yapılar kullanın. Bu, yazınıza objektiflik kazandırır."},
      {title:"Kısa formlardan kaçının",detail:"'Don't, won't, can't' gibi kısaltmalar informal yazıya aittir. Akademik metinlerde 'do not, will not, cannot' tam formlarını kullanın."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"IELTS Writing Task 2'de hangi register kullanılmalıdır?",opts:["Informal","Formal","Slang","Konuşma dili"],correct:1},
        {q:"'I think pollution is bad' cümlesinin formal versiyonu hangisidir?",opts:["Pollution is bad I think","I reckon pollution is bad","It can be argued that pollution is detrimental","Pollution is kinda bad"],correct:2},
        {q:"Hangisi informal bir ifadedir?",opts:["Furthermore","Moreover","Plus","In addition"],correct:2},
        {q:"Akademik yazıda 'a lot of' yerine ne kullanılır?",opts:["lots of","tons of","a considerable amount of","loads of"],correct:2}
      ]}
    ]
  }
}),

// ==================== AKADEMİK KELİMELER ====================
"academic-vocab-vocab-1": () => ({
  type:"vocabulary", title:"Akademik Kelime Listesi — Temel", level:"B1", minutes:12, unitId:"academic-vocab",
  data: {
    theme:"IELTS ve Akademik Yazıda Sık Kullanılan Kelimeler (AWL)",
    words:[
      {e:"analyse",t:"analiz etmek, çözümlemek",p:"/ˈænəlaɪz/",ex:"We need to analyse the data carefully.",ext:"Verileri veya durumları inceleme anlamında akademik yazının temel kelimesi"},
      {e:"approach",t:"yaklaşım, yaklaşmak",p:"/əˈprəʊtʃ/",ex:"A new approach to language learning was proposed.",ext:"Bir konuya bakış açısı veya yöntem anlamında"},
      {e:"concept",t:"kavram, konsept",p:"/ˈkɒnsept/",ex:"The concept of sustainability is widely discussed.",ext:"Soyut bir fikir veya düşünce"},
      {e:"factor",t:"etken, faktör",p:"/ˈfæktər/",ex:"Economic factors play an important role.",ext:"Bir sonucu etkileyen unsur"},
      {e:"method",t:"yöntem, metot",p:"/ˈmeθəd/",ex:"The research method was clearly described.",ext:"Bir işi yapma biçimi"},
      {e:"relevant",t:"ilgili, konuyla alakalı",p:"/ˈreləvənt/",ex:"Only relevant information should be included.",ext:"Konuyla doğrudan ilişkili olan"},
      {e:"source",t:"kaynak",p:"/sɔːrs/",ex:"All sources must be properly cited.",ext:"Bilginin geldiği yer, referans"},
      {e:"evidence",t:"kanıt, delil",p:"/ˈevɪdəns/",ex:"There is strong evidence to support this claim.",ext:"Bir iddiayı destekleyen bilgi veya veri"},
      {e:"impact",t:"etki",p:"/ˈɪmpækt/",ex:"Technology has a major impact on education.",ext:"Güçlü ve belirgin bir etki"},
      {e:"context",t:"bağlam",p:"/ˈkɒntekst/",ex:"The word changes meaning depending on context.",ext:"Bir olayın veya ifadenin çevresi, ortamı"},
      {e:"interpret",t:"yorumlamak",p:"/ɪnˈtɜːprɪt/",ex:"Students should learn to interpret graphs.",ext:"Anlam çıkarmak, değerlendirmek"},
      {e:"outcome",t:"sonuç, çıktı",p:"/ˈaʊtkʌm/",ex:"The outcome of the experiment was unexpected.",ext:"Bir sürecin veya eylemin sonucu"}
    ],
    exercises:[
      {type:"match",q:"Akademik kelimeleri Türkçe karşılıklarıyla eşleştirin",pairs:[["analyse","analiz etmek"],["approach","yaklaşım"],["evidence","kanıt"],["impact","etki"],["outcome","sonuç"],["relevant","ilgili"]]},
      {type:"quiz",items:[
        {q:"'Bir sonucu etkileyen unsur' anlamına gelen kelime hangisidir?",opts:["method","factor","source","concept"],correct:1},
        {q:"'All sources must be properly ___' cümlesinde boşluğa ne gelir?",opts:["cited","sited","sighted","sided"],correct:0},
        {q:"Bir konuya bakış açısı anlamına gelen kelime hangisidir?",opts:["outcome","context","approach","evidence"],correct:2},
        {q:"'Interpret' kelimesinin Türkçe karşılığı nedir?",opts:["Çevirmek","Yorumlamak","Anlatmak","Okumak"],correct:1}
      ]}
    ]
  }
}),

"academic-vocab-vocab-2": () => ({
  type:"vocabulary", title:"Akademik Kelime Listesi — İleri", level:"B2", minutes:12, unitId:"academic-vocab",
  data: {
    theme:"IELTS'te Üst Düzey Akademik Kelimeler",
    words:[
      {e:"hypothesis",t:"hipotez, varsayım",p:"/haɪˈpɒθəsɪs/",ex:"The hypothesis was tested through experiments.",ext:"Araştırmada test edilecek önerme"},
      {e:"phenomenon",t:"olgu, fenomen",p:"/fɪˈnɒmɪnən/",ex:"Climate change is a global phenomenon.",ext:"Gözlemlenebilen olay veya durum"},
      {e:"implement",t:"uygulamak, hayata geçirmek",p:"/ˈɪmplɪment/",ex:"The government plans to implement new policies.",ext:"Bir planı pratiğe dökmek"},
      {e:"perspective",t:"bakış açısı, perspektif",p:"/pəˈspektɪv/",ex:"We should consider different perspectives.",ext:"Bir konuya farklı açıdan bakış"},
      {e:"criteria",t:"kriterler, ölçütler",p:"/kraɪˈtɪəriə/",ex:"The selection criteria were very strict.",ext:"Değerlendirme için kullanılan standartlar (criterion'ın çoğulu)"},
      {e:"inevitable",t:"kaçınılmaz",p:"/ɪnˈevɪtəbl/",ex:"Change is inevitable in modern society.",ext:"Önlenemez, kesinlikle olacak"},
      {e:"predominantly",t:"ağırlıklı olarak, çoğunlukla",p:"/prɪˈdɒmɪnəntli/",ex:"The workforce is predominantly male.",ext:"Büyük çoğunlukla, baskın biçimde"},
      {e:"contradict",t:"çelişmek",p:"/ˌkɒntrəˈdɪkt/",ex:"The new findings contradict previous research.",ext:"Birbiriyle uyuşmamak, ters düşmek"},
      {e:"valid",t:"geçerli",p:"/ˈvælɪd/",ex:"Is this a valid argument?",ext:"Mantıksal olarak doğru ve kabul edilebilir"},
      {e:"constitute",t:"oluşturmak, teşkil etmek",p:"/ˈkɒnstɪtjuːt/",ex:"Women constitute 52% of the population.",ext:"Bir bütünün parçası olmak"},
      {e:"enhance",t:"geliştirmek, iyileştirmek",p:"/ɪnˈhɑːns/",ex:"Technology can enhance the learning experience.",ext:"Kaliteyi artırmak, daha iyi hale getirmek"}
    ],
    exercises:[
      {type:"match",q:"Üst düzey akademik kelimeleri eşleştirin",pairs:[["hypothesis","varsayım"],["phenomenon","olgu"],["implement","uygulamak"],["criteria","ölçütler"],["inevitable","kaçınılmaz"],["contradict","çelişmek"]]},
      {type:"quiz",items:[
        {q:"'Criterion' kelimesinin çoğul hali hangisidir?",opts:["criterions","criterias","criteria","criterium"],correct:2},
        {q:"'Bir planı hayata geçirmek' anlamına gelen kelime hangisidir?",opts:["imply","implement","impose","import"],correct:1},
        {q:"'Kaçınılmaz' anlamına gelen akademik kelime hangisidir?",opts:["unavoidable","inevitable","inescapable","Her ikisi de (a ve b)"],correct:1},
        {q:"'Enhance' kelimesinin anlamı nedir?",opts:["Azaltmak","Değiştirmek","Geliştirmek","Engellemek"],correct:2}
      ]}
    ]
  }
}),

// ==================== PARAGRAF YAPISI ====================
"paragraph-structure-grammar-1": () => ({
  type:"grammar", title:"Paragraf Yapısı Kuralları", level:"B1", minutes:15, unitId:"paragraph-structure",
  data: {
    topic:"Akademik Paragrafın Yapısı — Topic Sentence, Supporting Sentences, Concluding Sentence",
    explanationTr:"Akademik bir paragraf üç ana bölümden oluşur: <strong>Topic Sentence</strong> (ana fikir cümlesi), <strong>Supporting Sentences</strong> (destekleyici cümleler) ve <strong>Concluding Sentence</strong> (sonuç cümlesi). IELTS Writing'de her paragrafın açık bir ana fikri olmalı ve bu fikir desteklenmelidir. İyi yapılandırılmış paragraflar, <strong>Coherence & Cohesion</strong> puanınızı doğrudan etkiler.",
    rules:[
      {rule:"Topic Sentence — Paragrafın ilk cümlesi ana fikri verir",examples:[
        {en:"<hl>Technology has significantly changed the way people communicate.</hl>",tr:"Teknoloji, insanların iletişim kurma biçimini önemli ölçüde değiştirdi."},
        {en:"<hl>There are several advantages to studying abroad.</hl>",tr:"Yurt dışında eğitim almanın birçok avantajı vardır."}
      ]},
      {rule:"Supporting Sentences — Ana fikri örnekler ve açıklamalarla destekler",examples:[
        {en:"For instance, <hl>social media platforms allow instant communication</hl> across the globe.",tr:"Örneğin, sosyal medya platformları dünya genelinde anlık iletişim sağlar."},
        {en:"<hl>Research shows that</hl> students who study abroad develop stronger problem-solving skills.",tr:"Araştırmalar, yurt dışında okuyan öğrencilerin daha güçlü problem çözme becerileri geliştirdiğini göstermektedir."}
      ]},
      {rule:"Concluding Sentence — Paragrafı özetler veya sonraki paragrafa bağlar",examples:[
        {en:"<hl>Therefore, it is clear that</hl> technology plays a vital role in modern communication.",tr:"Bu nedenle, teknolojinin modern iletişimde hayati bir rol oynadığı açıktır."},
        {en:"<hl>In conclusion,</hl> studying abroad offers both personal and professional benefits.",tr:"Sonuç olarak, yurt dışında eğitim hem kişisel hem de profesyonel faydalar sunar."}
      ]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Paragrafın ana fikrini hangi cümle verir?",opts:["Concluding Sentence","Supporting Sentence","Topic Sentence","Transition Sentence"],correct:2},
        {q:"Supporting sentence'ın görevi nedir?",opts:["Yeni bir konu tanıtmak","Ana fikri örneklerle desteklemek","Paragrafı bitirmek","Başlık yazmak"],correct:1},
        {q:"IELTS'te iyi paragraf yapısı hangi kriteri etkiler?",opts:["Lexical Resource","Task Achievement","Coherence & Cohesion","Grammatical Range"],correct:2},
        {q:"Hangi ifade bir concluding sentence başlatabilir?",opts:["For example","However","In addition","Therefore, it is clear that"],correct:3}
      ]}
    ]
  }
}),

"paragraph-structure-writing-1": () => ({
  type:"writing", title:"Paragraf Yazma Pratiği", level:"B2", minutes:20, unitId:"paragraph-structure",
  data: {
    topic:"IELTS Tarzı Paragraf Oluşturma",
    explanationTr:"Bu derste IELTS Writing Task 2 için etkili paragraflar yazmayı pratik edeceğiz. Her paragrafın bir <strong>ana fikir cümlesi</strong>, en az iki <strong>destekleyici cümle</strong> ve bir <strong>sonuç cümlesi</strong> içermesi gerekir. Destekleyici cümlelerinizde somut örnekler, istatistikler veya açıklamalar kullanın.",
    samplePrompt:"Some people believe that university education should be free for all students. To what extent do you agree or disagree?",
    sampleAnswer:"University education should be accessible to all students regardless of their financial background. Firstly, free education promotes equal opportunities in society. For example, students from low-income families often cannot afford tuition fees, which limits their career prospects. Research conducted by the OECD indicates that countries with subsidised higher education have lower income inequality. Therefore, providing free university education is a crucial step towards creating a fairer society.",
    structure:["Topic Sentence: Ana fikrinizi açıkça belirtin","Supporting Sentence 1: İlk destekleyici noktayı sunun","Example/Evidence: Somut bir örnek veya kanıt verin","Supporting Sentence 2: İkinci destekleyici noktayı ekleyin","Concluding Sentence: Paragrafı özetleyin veya sonraki paragrafa geçiş yapın"],
    keyVocabulary:[
      {en:"Firstly / First of all",tr:"İlk olarak / Her şeyden önce"},
      {en:"For example / For instance",tr:"Örneğin"},
      {en:"Research indicates that",tr:"Araştırmalar ... olduğunu göstermektedir"},
      {en:"Therefore / Consequently",tr:"Bu nedenle / Sonuç olarak"},
      {en:"In conclusion / To sum up",tr:"Sonuç olarak / Özetlemek gerekirse"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Bir body paragrafında en az kaç destekleyici cümle olmalıdır?",opts:["1","2","4","5"],correct:1},
        {q:"Topic sentence paragrafın neresinde olmalıdır?",opts:["Ortasında","Sonunda","Başında","Herhangi bir yerde"],correct:2},
        {q:"Hangisi bir destekleyici cümlede kullanılan ifadedir?",opts:["In conclusion","To sum up","For example","Therefore"],correct:2},
        {q:"IELTS Task 2 body paragrafında ne beklenir?",opts:["Sadece kişisel görüş","Ana fikir + destek + örnek","Soru tekrarı","Sadece örnekler"],correct:1}
      ]}
    ]
  }
}),

// ==================== BAĞLAÇLAR & GEÇİŞ İFADELERİ ====================
"linking-words-vocab-1": () => ({
  type:"vocabulary", title:"Bağlaçlar ve Geçiş İfadeleri", level:"B1", minutes:12, unitId:"linking-words",
  data: {
    theme:"Akademik Yazıda Bağlaçlar (Linking Words & Connectors)",
    words:[
      {e:"moreover",t:"üstelik, dahası",p:"/mɔːrˈəʊvər/",ex:"Moreover, the study reveals a secondary benefit.",ext:"Ek bilgi verirken kullanılan resmi bağlaç"},
      {e:"nevertheless",t:"yine de, buna rağmen",p:"/ˌnevəðəˈles/",ex:"Nevertheless, the results were inconclusive.",ext:"Zıtlık bildiren güçlü bağlaç"},
      {e:"in contrast",t:"aksine, bunun tersine",p:"/ɪn ˈkɒntrɑːst/",ex:"In contrast, rural areas showed a decline.",ext:"İki zıt durumu karşılaştırırken kullanılır"},
      {e:"as a result",t:"sonuç olarak",p:"/æz ə rɪˈzʌlt/",ex:"As a result, many companies went bankrupt.",ext:"Sebep-sonuç ilişkisi kurar"},
      {e:"in addition",t:"buna ek olarak",p:"/ɪn əˈdɪʃən/",ex:"In addition, participants completed a survey.",ext:"Ek bilgi veya argüman eklemek için"},
      {e:"on the other hand",t:"öte yandan",p:"/ɒn ðə ˈʌðər hænd/",ex:"On the other hand, some experts disagree.",ext:"Karşıt görüşü sunarken kullanılır"},
      {e:"for instance",t:"örneğin",p:"/fɔːr ˈɪnstəns/",ex:"For instance, Finland has free university education.",ext:"Somut örnek verirken kullanılır"},
      {e:"to sum up",t:"özetlemek gerekirse",p:"/tuː sʌm ʌp/",ex:"To sum up, the evidence supports the theory.",ext:"Sonuç paragrafında özet yaparken"},
      {e:"due to",t:"nedeniyle, yüzünden",p:"/djuː tuː/",ex:"Due to the pandemic, schools were closed.",ext:"Neden bildiren resmi ifade"},
      {e:"despite",t:"...e rağmen",p:"/dɪˈspaɪt/",ex:"Despite the challenges, the project succeeded.",ext:"Zıtlık bildiren edat, ardından isim/gerund gelir"},
      {e:"whereas",t:"oysa, halbuki",p:"/weərˈæz/",ex:"Urban areas grew, whereas rural areas declined.",ext:"Karşılaştırma yaparken cümle bağlacı"},
      {e:"thus",t:"bu şekilde, dolayısıyla",p:"/ðʌs/",ex:"Thus, we can conclude that the method is effective.",ext:"Sonuç çıkarırken kullanılan resmi bağlaç"}
    ],
    exercises:[
      {type:"match",q:"Bağlaçları işlevlerine göre eşleştirin",pairs:[["moreover","ek bilgi"],["nevertheless","zıtlık"],["as a result","sebep-sonuç"],["for instance","örnek verme"],["to sum up","özetleme"],["due to","neden bildirme"]]},
      {type:"quiz",items:[
        {q:"Zıtlık bildirmek için hangi bağlaç kullanılır?",opts:["Moreover","Nevertheless","In addition","For instance"],correct:1},
        {q:"'Due to' ifadesinden sonra ne gelir?",opts:["Fiil","Cümle","İsim veya gerund","Sıfat"],correct:2},
        {q:"Sonuç paragrafında hangisi kullanılır?",opts:["For instance","In contrast","To sum up","Due to"],correct:2},
        {q:"'Moreover' kelimesinin işlevi nedir?",opts:["Zıtlık bildirmek","Ek bilgi vermek","Örnek vermek","Neden bildirmek"],correct:1}
      ]}
    ]
  }
}),

"linking-words-grammar-1": () => ({
  type:"grammar", title:"Bağlaç Kullanım Kuralları", level:"B2", minutes:15, unitId:"linking-words",
  data: {
    topic:"Bağlaçların Doğru Kullanımı ve Noktalama",
    explanationTr:"Bağlaçları doğru kullanmak IELTS'te <strong>Coherence & Cohesion</strong> puanınızı doğrudan etkiler. Ancak bağlaçları <strong>rastgele</strong> veya <strong>gereğinden fazla</strong> kullanmak puan kaybettirir. Her bağlacın kendine özgü <strong>dilbilgisi kuralları</strong> ve <strong>noktalama gereksinimleri</strong> vardır. Doğru kullanım, cümlelerinizin profesyonel ve akıcı olmasını sağlar.",
    rules:[
      {rule:"Bağlaçtan sonra virgül kullanın (cümle başında)",examples:[
        {en:"<hl>However,</hl> the results were not significant.",tr:"Ancak, sonuçlar anlamlı değildi."},
        {en:"<hl>Furthermore,</hl> the study was limited in scope.",tr:"Ayrıca, çalışma kapsam bakımından sınırlıydı."}
      ]},
      {rule:"'Despite' + isim/gerund; 'Although' + cümle",examples:[
        {en:"<hl>Despite the rain,</hl> the event continued.",tr:"Yağmura rağmen etkinlik devam etti."},
        {en:"<hl>Although it rained,</hl> the event continued.",tr:"Yağmur yağmasına rağmen etkinlik devam etti."}
      ]},
      {rule:"Aşırı bağlaç kullanımından kaçının",examples:[
        {en:"YANLIŞ: Moreover, furthermore, in addition, the data shows...",tr:"Birden fazla aynı işlevli bağlaç art arda kullanmayın."},
        {en:"DOĞRU: Moreover, the data <hl>clearly demonstrates</hl> a positive trend.",tr:"Bir bağlaç seçip cümlenizi güçlü bir şekilde kurun."}
      ]},
      {rule:"Sebep-sonuç bağlaçlarını doğru eşleştirin",examples:[
        {en:"<hl>Due to</hl> the increase in costs, prices rose. (isim takip eder)",tr:"Maliyetlerdeki artış nedeniyle fiyatlar yükseldi."},
        {en:"Costs increased. <hl>As a result,</hl> prices rose. (cümle takip eder)",tr:"Maliyetler arttı. Sonuç olarak fiyatlar yükseldi."}
      ]}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'Despite' kelimesinden sonra ne gelir?",opts:["Tam cümle","İsim veya gerund","Fiil","Bağlaç"],correct:1},
        {q:"Cümle başında 'However' kullandıktan sonra ne konur?",opts:["Noktalı virgül","Nokta","Virgül","İki nokta"],correct:2},
        {q:"Hangisi yanlış kullanımdır?",opts:["However, the data shows...","Despite the rain, we continued","Although, it rained we continued","As a result, prices rose"],correct:2},
        {q:"IELTS'te aşırı bağlaç kullanımı ne yapar?",opts:["Puan artırır","Puan düşürür","Etkisi olmaz","Sadece olumlu etki eder"],correct:1}
      ]}
    ]
  }
}),

"linking-words-strategy-1": () => ({
  type:"strategy", title:"IELTS'te Bağlaç Stratejileri", level:"B1", minutes:12, unitId:"linking-words",
  data: {
    topic:"IELTS Writing'de Etkili Bağlaç Kullanımı",
    explanationTr:"IELTS Writing'de bağlaçlar <strong>Band 7+</strong> almak için kritik öneme sahiptir. Ancak dikkatli kullanılmalıdır. Doğal ve uygun bağlaç kullanımı, yapay ve aşırı kullanımdan her zaman daha iyidir. Bu stratejiler, bağlaçları etkili biçimde kullanmanıza yardımcı olacaktır.",
    tips:[
      {title:"Her paragrafta farklı bağlaçlar kullanın",detail:"Aynı bağlacı tekrar tekrar kullanmak yerine çeşitlendirin. Örneğin, 'In addition' kullandıysanız bir sonraki paragrafta 'Furthermore' veya 'Moreover' deneyin."},
      {title:"İşleve göre bağlaç seçin",detail:"Ek bilgi: moreover, furthermore, in addition. Zıtlık: however, nevertheless, on the other hand. Sebep-sonuç: therefore, consequently, as a result. Örnek: for instance, for example, such as."},
      {title:"Bağlacı cümlenin farklı yerlerinde kullanın",detail:"Her zaman cümle başında bağlaç kullanmak monotonluk yaratır. 'The results, however, were inconclusive' gibi cümle ortasında da kullanabilirsiniz."},
      {title:"Doğal akışı koruyun",detail:"Bağlaç kullanmak zorunda değilsiniz her cümlenin başında. Bazen iki cümle arasındaki ilişki zaten bağlamsalca açıksa, bağlaç eklemek gereksizdir."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"IELTS'te bağlaç kullanımı hangi band seviyesi için kritiktir?",opts:["Band 5","Band 6","Band 7+","Band 4"],correct:2},
        {q:"Aynı bağlacı tekrar kullanmak yerine ne yapmalısınız?",opts:["Daha fazla bağlaç ekleyin","Farklı bağlaçlarla çeşitlendirin","Bağlaç kullanmayı bırakın","Sadece 'and' kullanın"],correct:1},
        {q:"'The results, however, were inconclusive' cümlesinde bağlaç nerededir?",opts:["Cümle başında","Cümle sonunda","Cümle ortasında","Kullanılmamış"],correct:2},
        {q:"Hangi durumda bağlaç kullanmak gereksizdir?",opts:["Her zaman gereklidir","İlişki bağlamdan zaten anlaşılıyorsa","Uzun cümlelerde","Kısa paragraflarda"],correct:1}
      ]}
    ]
  }
}),

// ==================== PARAPHRASING ====================
"paraphrasing-vocab-1": () => ({
  type:"vocabulary", title:"Paraphrasing Kelimeleri ve Eş Anlamlıları", level:"B1", minutes:12, unitId:"paraphrasing",
  data: {
    theme:"IELTS'te Paraphrasing İçin Eş Anlamlı Kelimeler",
    words:[
      {e:"increase → rise / grow / surge",t:"artmak → yükselmek / büyümek",p:"/ɪnˈkriːs/",ex:"Sales increased by 20%. = Sales rose by 20%.",ext:"Artış ifade eden farklı kelimeler, grafik sorularında çok kullanılır"},
      {e:"decrease → decline / drop / fall",t:"azalmak → düşmek / gerilemek",p:"/dɪˈkriːs/",ex:"Profits decreased sharply. = Profits dropped sharply.",ext:"Azalış ifade eden alternatif kelimeler"},
      {e:"important → significant / crucial / vital",t:"önemli → anlamlı / kritik / hayati",p:"/ɪmˈpɔːtənt/",ex:"Education is important. = Education is crucial.",ext:"Farklı bağlamlarda 'önemli' anlamı veren kelimeler"},
      {e:"cause → lead to / result in / give rise to",t:"neden olmak → yol açmak",p:"/kɔːz/",ex:"Pollution causes health problems. = Pollution leads to health problems.",ext:"Sebep-sonuç ifade eden alternatifler"},
      {e:"advantage → benefit / merit / strength",t:"avantaj → fayda / güçlü yön",p:"/ədˈvɑːntɪdʒ/",ex:"The advantage of remote work... = The benefit of remote work...",ext:"Olumlu yönleri ifade eden çeşitli kelimeler"},
      {e:"disadvantage → drawback / limitation / weakness",t:"dezavantaj → sakınca / sınırlılık",p:"/ˌdɪsədˈvɑːntɪdʒ/",ex:"A disadvantage is... = A drawback is...",ext:"Olumsuz yönleri ifade eden alternatifler"},
      {e:"many → numerous / a considerable number of",t:"birçok → çok sayıda",p:"/ˈmeni/",ex:"Many students... = Numerous students...",ext:"Çokluk ifade eden akademik alternatifler"},
      {e:"show → demonstrate / illustrate / reveal",t:"göstermek → kanıtlamak / ortaya koymak",p:"/ʃəʊ/",ex:"The graph shows... = The graph illustrates...",ext:"Veri veya sonuç gösterme ile ilgili fiiller"},
      {e:"think → believe / argue / contend",t:"düşünmek → inanmak / savunmak",p:"/θɪŋk/",ex:"Some people think... = Some people argue...",ext:"Görüş bildiren akademik fiiller"},
      {e:"problem → issue / challenge / concern",t:"sorun → mesele / zorluk / endişe",p:"/ˈprɒbləm/",ex:"The main problem is... = The main issue is...",ext:"Sorun ifade eden farklı kelimeler"},
      {e:"help → assist / facilitate / support",t:"yardım etmek → kolaylaştırmak / desteklemek",p:"/help/",ex:"Technology helps students. = Technology facilitates learning.",ext:"Yardım ve destek anlamı taşıyan akademik fiiller"}
    ],
    exercises:[
      {type:"match",q:"Kelimeleri eş anlamlılarıyla eşleştirin",pairs:[["increase","rise"],["decrease","decline"],["important","crucial"],["advantage","benefit"],["disadvantage","drawback"],["show","demonstrate"]]},
      {type:"quiz",items:[
        {q:"'Many students attend university' cümlesinin paraphrase'ı hangisidir?",opts:["A lot of students go to uni","Numerous students attend higher education","Many pupils go to school","Students like university a lot"],correct:1},
        {q:"'Cause' kelimesinin akademik eş anlamlısı hangisidir?",opts:["make","do","lead to","bring"],correct:2},
        {q:"'Problem' kelimesinin akademik alternatifi hangisidir?",opts:["trouble","issue","thing","stuff"],correct:1},
        {q:"'Help' fiilinin akademik karşılığı hangisidir?",opts:["aid","facilitate","Her ikisi de","Hiçbiri"],correct:2}
      ]}
    ]
  }
}),

"paraphrasing-strategy-1": () => ({
  type:"strategy", title:"Paraphrasing Teknikleri", level:"B2", minutes:15, unitId:"paraphrasing",
  data: {
    topic:"IELTS'te Etkili Paraphrasing Yapma Stratejileri",
    explanationTr:"<strong>Paraphrasing</strong>, bir cümleyi veya fikri kendi kelimelerinizle yeniden ifade etme becerisidir. IELTS'in her bölümünde kritik öneme sahiptir. Writing'de soruyu giriş paragrafında paraphrase etmeniz, Reading'de ise sorudaki ifadelerin metindeki paraphrase'larını bulmanız beklenir. İyi paraphrasing, <strong>kelime hazinesi</strong> ve <strong>dilbilgisi çeşitliliğinizi</strong> gösterir.",
    tips:[
      {title:"Eş anlamlı kelimeler kullanın (Synonym Substitution)",detail:"En temel paraphrasing tekniğidir. Anahtar kelimeleri eş anlamlılarıyla değiştirin: 'important' → 'significant', 'increase' → 'rise', 'children' → 'young people'. Ancak her kelimeyi değiştirmeye çalışmayın; teknik terimler ve özel isimler aynı kalabilir."},
      {title:"Cümle yapısını değiştirin (Structural Change)",detail:"Aktif cümleyi pasif yapın veya cümlenin öznesi ile nesnesini yer değiştirin: 'The government should invest in education' → 'Education should be invested in by the government.' Ayrıca cümle başlangıcını değiştirmek de etkili bir yöntemdir."},
      {title:"Kelime türünü değiştirin (Word Form Change)",detail:"Aynı kelimenin farklı formlarını kullanın: 'important' (sıfat) → 'importance' (isim), 'develop' (fiil) → 'development' (isim). Bu teknik hem paraphrasing yapar hem de dilbilgisi çeşitliliği gösterir."},
      {title:"Cümleyi bölün veya birleştirin",detail:"Uzun bir cümleyi iki kısa cümleye bölmek veya kısa cümleleri birleştirmek de paraphrasing sayılır. 'Although it rained, we went out' → 'It rained. However, we still went out.'"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"IELTS Writing'de soruyu nereden paraphrase etmeniz beklenir?",opts:["Sonuç paragrafında","Giriş paragrafında","Body paragrafında","Her yerde"],correct:1},
        {q:"'Children should learn a foreign language' cümlesinin paraphrase'ı hangisidir?",opts:["Kids must study another language","Young people should be taught an additional language","Children need to learn foreign","Students has to learn language"],correct:1},
        {q:"Kelime türünü değiştirme (word form change) örneği hangisidir?",opts:["important → significant","develop → development","big → large","fast → quick"],correct:1},
        {q:"Paraphrasing yaparken ne değiştirilMEZ?",opts:["Sıfatlar","Fiiller","Teknik terimler ve özel isimler","Zarflar"],correct:2}
      ]}
    ]
  }
}),

"paraphrasing-writing-1": () => ({
  type:"writing", title:"Paraphrasing Yazma Pratiği", level:"B2", minutes:20, unitId:"paraphrasing",
  data: {
    topic:"IELTS Giriş Paragrafında Paraphrasing",
    explanationTr:"IELTS Writing Task 2'de giriş paragrafınızda soru cümlesini <strong>kendi kelimelerinizle yeniden ifade etmeniz</strong> gerekir. Soruyu aynen kopyalamak puan kaybettirir. Bu derste soru cümlelerini etkili biçimde paraphrase etmeyi pratik edeceğiz.",
    samplePrompt:"Some people believe that technology has made our lives more complicated rather than easier. To what extent do you agree or disagree?",
    sampleAnswer:"It is often argued that technological advancements have increased the complexity of daily life instead of simplifying it. While modern innovations have undoubtedly brought about certain challenges, this essay contends that the overall impact of technology on people's lives has been predominantly positive.",
    structure:["Soru cümlesindeki anahtar kelimeleri belirleyin","Eş anlamlı kelimelerle değiştirin (technology → technological advancements)","Cümle yapısını değiştirin (aktif → pasif veya tersi)","Kendi tezinizi (thesis statement) ekleyin","Giriş paragrafını 2-3 cümleyle sınırlı tutun"],
    keyVocabulary:[
      {en:"It is often argued that",tr:"Sıklıkla ... savunulmaktadır"},
      {en:"This essay contends that",tr:"Bu makale ... savunmaktadır"},
      {en:"While it is true that",tr:"... doğru olsa da"},
      {en:"The notion that",tr:"... fikri / düşüncesi"},
      {en:"In recent years",tr:"Son yıllarda"}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"IELTS giriş paragrafında soruyu aynen kopyalamak ne yapar?",opts:["Puan artırır","Etkisi olmaz","Puan kaybettirir","Bonus puan verir"],correct:2},
        {q:"'Some people believe' ifadesinin paraphrase'ı hangisidir?",opts:["Some people believe","It is often argued","People belief","Some persons think so"],correct:1},
        {q:"Giriş paragrafı kaç cümle olmalıdır?",opts:["1","2-3","5-6","Sınırsız"],correct:1},
        {q:"Thesis statement nedir?",opts:["Soru cümlesi","Ana fikrinizi belirten cümle","Örnek cümlesi","Sonuç cümlesi"],correct:1}
      ]}
    ]
  }
}),

// ============ IELTS READING — Skimming & Scanning ============

"skimming-scanning-strategy-1": () => ({
  type:"strategy", title:"Skimming & Scanning Teknikleri", level:"B1", minutes:15, unitId:"skimming-scanning",
  data: {
    topic:"Skimming & Scanning Stratejileri",
    explanationTr:"IELTS Reading'de zaman çok kısıtlıdır — 60 dakikada 3 pasaj ve 40 soru cevaplamanız gerekir. Bu yüzden pasajı kelime kelime okumak yerine <strong>skimming</strong> ve <strong>scanning</strong> tekniklerini kullanmalısınız.<br><br><strong>Skimming (Göz Gezdirme):</strong> Pasajın genel konusunu ve ana fikrini anlamak için hızlıca göz gezdirmektir. Her paragrafın ilk ve son cümlesini okuyun. Başlık, alt başlık ve kalın yazılmış kelimelere bakın.<br><br><strong>Scanning (Tarama):</strong> Belirli bir bilgiyi bulmak için pasajı hızlıca taramaktır. Sorudaki anahtar kelimeyi belirleyin, sonra pasajda o kelimeyi veya eşanlamlısını arayın. Tarih, sayı, isim gibi belirgin bilgileri bulmak için idealdir.",
    tips:[
      {title:"Skimming nasıl yapılır?",detail:"Başlığı okuyun → Her paragrafın ilk cümlesini okuyun → Son paragrafın son cümlesini okuyun → 2-3 dakikada pasajın genel konusunu anlayın."},
      {title:"Scanning nasıl yapılır?",detail:"Sorudaki anahtar kelimeyi belirleyin → Pasajda o kelimeyi veya synonym'ini arayın → Bulduğunuz cümleyi dikkatlice okuyun → Cevabı çıkarın."},
      {title:"İkisi arasındaki fark",detail:"Skimming = genel anlam için hızlı okuma (what is the passage about?). Scanning = belirli bilgi için arama (where is the specific answer?)."},
      {title:"Zaman yönetimi ipucu",detail:"Her pasajda önce 2 dakika skimming yapın, sonra soruları okuyun, sonra scanning ile cevapları bulun. Bu strateji size her pasajda 3-5 dakika kazandırır."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Skimming'in amacı nedir?",opts:["Belirli bir kelimeyi bulmak","Pasajın genel konusunu anlamak","Her kelimeyi çevirmek","Soruları cevaplamak"],correct:1},
        {q:"Scanning yaparken ilk adım nedir?",opts:["Pasajı baştan sona okumak","Sorudaki anahtar kelimeyi belirlemek","Paragrafları saymak","Başlığı çevirmek"],correct:1},
        {q:"Skimming yaparken hangi bölümleri okumalısınız?",opts:["Her kelimenin sözlük anlamını","Sadece son paragrafı","Her paragrafın ilk ve son cümlesini","Sadece soruları"],correct:2},
        {q:"IELTS Reading'de neden skimming önemlidir?",opts:["Sınav daha kolay olur","Zaman tasarrufu sağlar","Soruları ezberlemenize yardımcı olur","Kelime bilginizi artırır"],correct:1}
      ]}
    ]
  }
}),
"skimming-scanning-reading-1": () => ({
  type:"reading", title:"Skimming & Scanning Pratiği: Renewable Energy", level:"B1", minutes:20, unitId:"skimming-scanning",
  data: {
    topic:"Skimming & Scanning Uygulaması",
    passage:"Renewable energy sources have become increasingly important in recent decades as concerns about climate change and fossil fuel depletion continue to grow. Solar power, wind energy, and hydroelectric power are among the most widely used alternatives to traditional fossil fuels.\n\nSolar energy is harnessed through photovoltaic panels that convert sunlight directly into electricity. The cost of solar panels has decreased by approximately 89 percent since 2010, making this technology accessible to a growing number of households and businesses worldwide. Countries like Germany, China, and Australia have invested heavily in solar infrastructure.\n\nWind energy is generated by large turbines, typically grouped in wind farms located in coastal areas or open plains where wind speeds are consistently high. Denmark currently produces over 40 percent of its electricity from wind power, the highest proportion in the world. However, wind energy faces criticism due to its visual impact on landscapes and potential harm to bird populations.\n\nHydroelectric power, generated by flowing water, remains the largest source of renewable energy globally. Major dams such as the Three Gorges Dam in China and the Itaipu Dam on the Brazil-Paraguay border produce enormous amounts of electricity. Despite its benefits, hydroelectric power can disrupt local ecosystems and displace communities living near dam construction sites.\n\nExperts predict that by 2050, renewable energy could supply up to 80 percent of the world's electricity needs, provided that governments continue to support research and investment in clean energy technologies.",
    passageTr:"Yenilenebilir enerji kaynakları, iklim değişikliği ve fosil yakıt tükenmesi endişeleri arttıkça son on yıllarda giderek daha önemli hale gelmiştir...",
    questions:[
      {q:"Pasajın ana konusu nedir? (Skimming ile bulun)",opts:["Fosil yakıtların tarihi","Yenilenebilir enerji kaynakları ve önemi","Çin'in enerji politikası","Kuş popülasyonları üzerindeki etkiler"],correct:1,explanation:"Skimming yaparak başlığa ve her paragrafın ilk cümlesine bakarsanız, pasajın yenilenebilir enerji kaynakları hakkında olduğunu anlarsınız."},
      {q:"Güneş panellerinin maliyeti 2010'dan beri yüzde kaç düştü? (Scanning ile bulun)",opts:["Yüzde 50","Yüzde 70","Yüzde 89","Yüzde 95"],correct:2,explanation:"Scanning ile '2010' veya 'percent' kelimelerini arayarak 'decreased by approximately 89 percent since 2010' cümlesini bulabilirsiniz."},
      {q:"Hangi ülke elektriğinin yüzde 40'ından fazlasını rüzgar enerjisinden üretmektedir? (Scanning ile bulun)",opts:["Almanya","Çin","Avustralya","Danimarka"],correct:3,explanation:"'40 percent' veya 'wind power' kelimelerini tarayarak Denmark'ın cevap olduğunu bulabilirsiniz."},
      {q:"Uzmanlar 2050 yılına kadar yenilenebilir enerjinin dünya elektriğinin yüzde kaçını karşılayabileceğini öngörüyor?",opts:["Yüzde 50","Yüzde 60","Yüzde 80","Yüzde 100"],correct:2,explanation:"Son paragrafta '2050' ve 'up to 80 percent' ifadelerini scanning ile bulabilirsiniz."}
    ],
    vocabulary:[{en:"renewable",tr:"yenilenebilir"},{en:"fossil fuel",tr:"fosil yakıt"},{en:"harnessed",tr:"kullanıma sunulmak"},{en:"photovoltaic",tr:"fotovoltaik"},{en:"turbines",tr:"türbinler"},{en:"hydroelectric",tr:"hidroelektrik"},{en:"disrupt",tr:"bozmak"},{en:"displace",tr:"yerinden etmek"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Harnessed' kelimesinin pasajdaki anlamı nedir?",opts:["Yok etmek","Kullanıma sunmak/elde etmek","Satmak","Depolamak"],correct:1},
        {q:"Rüzgar enerjisi hangi nedenle eleştirilmektedir?",opts:["Çok pahalı olması","Görsel etki ve kuşlara zarar vermesi","Gürültü kirliliği","Su kirliliği"],correct:1},
        {q:"Pasaja göre en büyük yenilenebilir enerji kaynağı hangisidir?",opts:["Güneş enerjisi","Rüzgar enerjisi","Hidroelektrik enerji","Nükleer enerji"],correct:2},
        {q:"Baraj yapımının olumsuz etkisi olarak ne belirtilmiştir?",opts:["Hava kirliliği","Yerel ekosistemleri bozması ve toplulukları yerinden etmesi","Maliyetin yüksek olması","Rüzgar hızının düşmesi"],correct:1}
      ]}
    ]
  }
}),
"skimming-scanning-vocab-1": () => ({
  type:"vocabulary", title:"Skimming & Scanning Anahtar Kelimeleri", level:"B1", minutes:12, unitId:"skimming-scanning",
  data: {
    theme:"IELTS Reading Temel Kelimeler",
    words:[
      {e:"skim",t:"göz gezdirmek",p:"/skɪm/",ex:"I skimmed the article to find the main idea.",ext:"Hızlıca genel anlam için okuma"},
      {e:"scan",t:"taramak",p:"/skæn/",ex:"She scanned the text for specific dates.",ext:"Belirli bilgi aramak için hızlı okuma"},
      {e:"main idea",t:"ana fikir",p:"/meɪn aɪˈdɪə/",ex:"The main idea is in the first paragraph.",ext:"Bir pasajın temel mesajı"},
      {e:"key word",t:"anahtar kelime",p:"/kiː wɜːd/",ex:"Identify the key words in the question.",ext:"Sorunun en önemli kelimeleri"},
      {e:"synonym",t:"eşanlamlı",p:"/ˈsɪnənɪm/",ex:"'Happy' is a synonym of 'glad'.",ext:"Aynı anlama gelen kelime — IELTS'te çok önemli"},
      {e:"paraphrase",t:"başka kelimelerle ifade etme",p:"/ˈpærəfreɪz/",ex:"The answer paraphrases the original text.",ext:"IELTS sorularında cevap genellikle paraphrase edilmiş olur"},
      {e:"heading",t:"başlık",p:"/ˈhɛdɪŋ/",ex:"Match the heading to the correct paragraph.",ext:"Paragrafın konusunu özetleyen kısa cümle"},
      {e:"passage",t:"pasaj/metin",p:"/ˈpæsɪdʒ/",ex:"Read the passage and answer the questions.",ext:"IELTS'te okunan uzun metin"}
    ],
    exercises:[
      {type:"match",q:"Eşleştirin",pairs:[["skim","göz gezdirmek"],["scan","taramak"],["synonym","eşanlamlı"],["heading","başlık"],["passage","pasaj"]]},
      {type:"quiz",items:[
        {q:"'Passage' ne demektir?",opts:["Soru","Cevap","Metin/Pasaj","Başlık"],correct:2},
        {q:"IELTS'te sorulardaki kelimeler genellikle pasajda nasıl bulunur?",opts:["Aynı kelime olarak","Paraphrase edilmiş olarak","Türkçe olarak","Rakam olarak"],correct:1},
        {q:"'Synonym' kelimesinin Türkçesi nedir?",opts:["Zıt anlamlı","Eşanlamlı","Benzer","Farklı"],correct:1},
        {q:"Skimming yaparken önce neye bakmalısınız?",opts:["Son paragrafa","Sorulara","Başlık ve ilk cümlelere","Kelime listesine"],correct:2}
      ]}
    ]
  }
}),

// ============ IELTS READING — True / False / Not Given ============

"true-false-ng-strategy-1": () => ({
  type:"strategy", title:"True / False / Not Given Stratejisi", level:"B1", minutes:15, unitId:"true-false-ng",
  data: {
    topic:"T/F/NG Soru Tipi Stratejileri",
    explanationTr:"True / False / Not Given (T/F/NG), IELTS Reading'in en zor soru tiplerinden biridir. <strong>Pasajdaki bilgiye göre</strong> cümlenin doğru, yanlış veya pasajda bahsedilmemiş olduğunu belirlemeniz gerekir.<br><br><strong>TRUE:</strong> Cümle pasajdaki bilgiyle uyuşuyor (aynı anlam, farklı kelimeler olabilir).<br><strong>FALSE:</strong> Cümle pasajdaki bilgiyle çelişiyor (zıt anlam).<br><strong>NOT GIVEN:</strong> Pasajda bu bilgi hiç yok — ne doğrulanabilir ne de yanlışlanabilir.<br><br><strong>En önemli kural:</strong> Kendi bilginize göre değil, sadece pasajdaki bilgiye göre cevap verin!",
    tips:[
      {title:"TRUE nasıl anlaşılır?",detail:"Pasajdaki bir cümle, sorudaki ifadeyle aynı anlamı taşıyorsa (genellikle synonym veya paraphrase ile) cevap TRUE'dur. Kelimeler farklı olabilir ama anlam aynı olmalıdır."},
      {title:"FALSE nasıl anlaşılır?",detail:"Pasajdaki bilgi sorudaki ifadeyle doğrudan çelişiyorsa cevap FALSE'dur. Örneğin soru 'always' diyorsa ve pasaj 'sometimes' diyorsa, bu bir çelişkidir."},
      {title:"NOT GIVEN nasıl anlaşılır?",detail:"Pasajda konu hakkında hiçbir bilgi yoksa cevap NOT GIVEN'dır. Dikkat: NOT GIVEN ile FALSE'u karıştırmayın! NOT GIVEN = bilgi yok, FALSE = bilgi var ama çelişiyor."},
      {title:"Sık yapılan hata",detail:"Kendi genel bilginize göre cevap vermeyin. Soru 'Dünya yuvarlaktır' dese bile, pasajda bu bilgi yoksa cevap NOT GIVEN'dır. Sadece pasajdaki bilgiyi kullanın."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Pasajda 'Coffee was first discovered in Ethiopia' yazıyorsa ve soru 'Coffee originated in Ethiopia' diyorsa, cevap nedir?",opts:["TRUE","FALSE","NOT GIVEN","Belirsiz"],correct:0},
        {q:"Pasajda 'Most students prefer online learning' yazıyorsa ve soru 'All students prefer online learning' diyorsa, cevap nedir?",opts:["TRUE","FALSE","NOT GIVEN","Belirsiz"],correct:1},
        {q:"Pasajda kahvenin fiyatı hakkında hiçbir bilgi yoksa ve soru 'Coffee is expensive in Ethiopia' diyorsa, cevap nedir?",opts:["TRUE","FALSE","NOT GIVEN","Belirsiz"],correct:2},
        {q:"T/F/NG sorularında en önemli kural nedir?",opts:["Hızlı cevap vermek","Sadece pasajdaki bilgiyi kullanmak","İlk hissinize güvenmek","Her zaman TRUE seçmek"],correct:1}
      ]}
    ]
  }
}),
"true-false-ng-reading-1": () => ({
  type:"reading", title:"T/F/NG Pratiği: The History of Coffee", level:"B1", minutes:20, unitId:"true-false-ng",
  data: {
    topic:"True / False / Not Given Uygulaması",
    passage:"Coffee is one of the most widely consumed beverages in the world, with over two billion cups drunk every day. The origins of coffee can be traced back to Ethiopia in the 9th century, where legend has it that a goat herder named Kaldi noticed his goats becoming unusually energetic after eating berries from a particular plant.\n\nFrom Ethiopia, coffee spread to the Arabian Peninsula, where it was first cultivated and traded in the 15th century. The city of Mocha in Yemen became a major centre for coffee trade. By the 17th century, coffee had reached Europe and quickly gained popularity. Coffee houses, known as 'penny universities' in England because a cup cost one penny and attracted intellectuals, became important social gathering places.\n\nToday, Brazil is the world's largest coffee producer, followed by Vietnam and Colombia. The global coffee industry employs approximately 125 million people worldwide and generates annual revenues exceeding 450 billion dollars. However, many coffee farmers in developing countries earn less than two dollars per day, leading to growing interest in fair trade certification.\n\nResearchers have found that moderate coffee consumption, typically three to four cups per day, may offer several health benefits, including reduced risk of certain diseases such as Parkinson's disease and type 2 diabetes. However, excessive consumption can lead to anxiety, insomnia, and increased heart rate.",
    passageTr:"Kahve, her gün iki milyardan fazla fincanla dünyanın en çok tüketilen içeceklerinden biridir. Kahvenin kökenleri 9. yüzyılda Etiyopya'ya dayanır...",
    questions:[
      {q:"Coffee was first discovered in the 9th century in Ethiopia. (TRUE / FALSE / NOT GIVEN)",opts:["TRUE","FALSE","NOT GIVEN"],correct:0,explanation:"Pasajda 'The origins of coffee can be traced back to Ethiopia in the 9th century' yazıyor — bu ifadeyle uyuşuyor, cevap TRUE."},
      {q:"Kaldi was a farmer who grew coffee plants. (TRUE / FALSE / NOT GIVEN)",opts:["TRUE","FALSE","NOT GIVEN"],correct:1,explanation:"Pasajda Kaldi bir 'goat herder' (keçi çobanı) olarak tanımlanıyor, 'farmer' değil — bu bir çelişki, cevap FALSE."},
      {q:"Coffee houses in England were expensive places to visit. (TRUE / FALSE / NOT GIVEN)",opts:["TRUE","FALSE","NOT GIVEN"],correct:1,explanation:"Pasajda bir fincan kahvenin 'one penny' (bir peni) olduğu belirtiliyor — 'expensive' ile çelişiyor, cevap FALSE."},
      {q:"Vietnam is the world's second-largest coffee producer. (TRUE / FALSE / NOT GIVEN)",opts:["TRUE","FALSE","NOT GIVEN"],correct:0,explanation:"Pasajda 'Brazil is the world's largest coffee producer, followed by Vietnam' yazıyor, cevap TRUE."},
      {q:"Fair trade coffee tastes better than regular coffee. (TRUE / FALSE / NOT GIVEN)",opts:["TRUE","FALSE","NOT GIVEN"],correct:2,explanation:"Pasajda fair trade kahvenin tadı hakkında hiçbir bilgi yok, sadece sertifikasyondan bahsediliyor — cevap NOT GIVEN."}
    ],
    vocabulary:[{en:"beverage",tr:"içecek"},{en:"origins",tr:"kökenler"},{en:"cultivated",tr:"yetiştirilmek"},{en:"intellectuals",tr:"entelektüeller"},{en:"revenues",tr:"gelirler"},{en:"fair trade",tr:"adil ticaret"},{en:"moderate",tr:"ılımlı/orta düzey"},{en:"excessive",tr:"aşırı"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Beverage' kelimesinin anlamı nedir?",opts:["Yiyecek","İçecek","Tarım","Ticaret"],correct:1},
        {q:"Pasaja göre kahve endüstrisi yaklaşık kaç kişiyi istihdam etmektedir?",opts:["25 milyon","75 milyon","125 milyon","200 milyon"],correct:2},
        {q:"Araştırmacılara göre günde kaç fincan kahve faydalı olabilir?",opts:["1-2 fincan","3-4 fincan","5-6 fincan","7-8 fincan"],correct:1},
        {q:"Aşırı kahve tüketiminin olumsuz etkisi olarak hangisi belirtilmemiştir?",opts:["Anksiyete","Uykusuzluk","Kalp atış hızında artış","Kilo alma"],correct:3}
      ]}
    ]
  }
}),

// ============ IELTS READING — Matching Headings ============

"matching-headings-strategy-1": () => ({
  type:"strategy", title:"Matching Headings Stratejisi", level:"B1", minutes:15, unitId:"matching-headings",
  data: {
    topic:"Paragraf Başlığı Eşleştirme Stratejileri",
    explanationTr:"Matching Headings soru tipinde, verilen başlıkları (headings) doğru paragraflara eşleştirmeniz istenir. Başlık listesi genellikle paragraf sayısından fazladır — yani bazı başlıklar kullanılmayacaktır.<br><br><strong>Bu soru tipinde önemli olan:</strong> Paragrafın <strong>ana fikrini</strong> (main idea) bulmaktır. Detaylara takılmayın, paragrafın genel olarak ne anlattığına odaklanın.<br><br><strong>Dikkat:</strong> Bir başlık bir paragraftaki bir detayla eşleşebilir ama bu yanlış cevap olabilir. Doğru başlık paragrafın <strong>tamamını</strong> özetleyen başlıktır.",
    tips:[
      {title:"Adım 1: Paragrafları skimming yapın",detail:"Her paragrafın ilk ve son cümlesini okuyun. Bu cümleler genellikle paragrafın ana fikrini verir. Ortadaki cümleler detay ve örnek içerir."},
      {title:"Adım 2: Kolay eşleşmelerden başlayın",detail:"Bazı paragrafların başlığı çok belirgindir. Önce bunları eşleştirin, sonra zor olanlara geçin. Bu strateji eleme yöntemiyle çalışmanızı sağlar."},
      {title:"Adım 3: Tuzaklara dikkat edin",detail:"Bir başlık paragraftaki bir kelimeyi içerebilir ama paragrafın ana fikrini yansıtmayabilir. Kelime eşleşmesine değil, anlam eşleşmesine bakın."},
      {title:"Adım 4: Eleme yöntemi kullanın",detail:"Emin olduğunuz eşleşmeleri işaretleyin ve o başlıkları listeden çıkarın. Bu, kalan seçenekleri daraltmanıza yardımcı olur."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Matching Headings'te paragrafın hangi kısmına odaklanmalısınız?",opts:["Ortadaki örneklere","İlk ve son cümleye","Rakamlara ve tarihlere","Uzun kelimelere"],correct:1},
        {q:"Neden başlık listesinde paragraf sayısından fazla başlık vardır?",opts:["Yanlışlıkla fazla yazılmıştır","Bazıları dikkat dağıtıcıdır (distractors)","Hepsi kullanılmalıdır","İkişer kez kullanılabilir"],correct:1},
        {q:"Bir başlık paragraftaki bir kelimeyi içeriyorsa ne yapmalısınız?",opts:["Hemen o başlığı seçmeli","Paragrafın ana fikriyle uyuşup uyuşmadığını kontrol etmeli","O başlığı eleyip geçmeli","İki başlığı birden seçmeli"],correct:1},
        {q:"Matching Headings'te en etkili strateji nedir?",opts:["Tüm pasajı detaylı okumak","Kolay eşleşmelerden başlayıp eleme yapmak","Rastgele seçmek","Sadece son paragrafı okumak"],correct:1}
      ]}
    ]
  }
}),
"matching-headings-reading-1": () => ({
  type:"reading", title:"Matching Headings Pratiği: Urbanization", level:"B2", minutes:20, unitId:"matching-headings",
  data: {
    topic:"Matching Headings Uygulaması",
    passage:"Paragraph A: Urbanization, the process of population shifting from rural to urban areas, is one of the most significant demographic trends of the 21st century. According to the United Nations, approximately 55 percent of the world's population currently lives in cities, and this figure is projected to reach 68 percent by 2050.\n\nParagraph B: The rapid growth of cities brings numerous economic benefits. Urban areas serve as centres of innovation, attracting talented workers and fostering entrepreneurship. Cities generate over 80 percent of global GDP, and workers in urban areas typically earn higher wages than their rural counterparts due to increased productivity and access to larger markets.\n\nParagraph C: However, unplanned urban growth can create significant challenges. Many rapidly growing cities in developing countries struggle with overcrowded housing, inadequate sanitation, and insufficient public transportation. Slums and informal settlements have expanded dramatically, with an estimated one billion people worldwide living in substandard conditions.\n\nParagraph D: Environmental concerns associated with urbanization are equally pressing. Cities consume over 75 percent of the world's energy and produce more than 70 percent of carbon dioxide emissions. Urban heat islands, where city temperatures are several degrees higher than surrounding rural areas, exacerbate the effects of climate change and increase energy consumption for cooling.\n\nParagraph E: To address these challenges, urban planners are increasingly turning to the concept of sustainable cities. These cities prioritize green spaces, efficient public transport, renewable energy sources, and mixed-use development. Cities such as Copenhagen, Singapore, and Curitiba have become models for sustainable urban planning.",
    passageTr:"Kentleşme, nüfusun kırsaldan kentsel alanlara kayma sürecidir ve 21. yüzyılın en önemli demografik trendlerinden biridir...",
    questions:[
      {q:"Paragraph A için en uygun başlık hangisidir?",opts:["Ekonomik avantajlar","Kentleşmenin tanımı ve küresel boyutu","Çevre sorunları","Sürdürülebilir şehirler"],correct:1,explanation:"Paragraf A kentleşmeyi tanımlıyor ve dünya nüfusunun ne kadarının şehirlerde yaşadığını veriyor — bu 'tanım ve küresel boyut' başlığına uyar."},
      {q:"Paragraph B için en uygun başlık hangisidir?",opts:["Kentleşmenin ekonomik faydaları","Plansız büyümenin sorunları","Çevresel etkiler","Nüfus artışı"],correct:0,explanation:"Paragraf B şehirlerin ekonomik faydalarından bahsediyor — inovasyon, yüksek maaşlar, GDP katkısı."},
      {q:"Paragraph C için en uygun başlık hangisidir?",opts:["Sürdürülebilir çözümler","Enerji tüketimi","Kontrolsüz şehir büyümesinin zorlukları","Kırsal yaşamın avantajları"],correct:2,explanation:"Paragraf C plansız kentleşmenin olumsuz sonuçlarını anlatıyor — kalabalık konut, yetersiz alt yapı, gecekondu mahalleler."},
      {q:"Paragraph D hangi konuyu ele alıyor?",opts:["Ekonomik büyüme","Kentleşmenin çevresel etkileri","Ulaşım sorunları","Nüfus istatistikleri"],correct:1,explanation:"Paragraf D enerji tüketimi, karbon emisyonları ve ısı adaları gibi çevresel konulara odaklanıyor."},
      {q:"Paragraph E'nin ana fikri nedir?",opts:["Kentleşmenin tarihi","Sorunların çözümü: sürdürülebilir şehirler","Gelişmekte olan ülkelerin sorunları","Ulaşım sistemleri"],correct:1,explanation:"Paragraf E sürdürülebilir şehir planlaması kavramını ve örnek şehirleri tanıtıyor."}
    ],
    vocabulary:[{en:"urbanization",tr:"kentleşme"},{en:"demographic",tr:"demografik"},{en:"entrepreneurship",tr:"girişimcilik"},{en:"sanitation",tr:"sağlık/hijyen altyapısı"},{en:"slums",tr:"gecekondu mahalleleri"},{en:"exacerbate",tr:"kötüleştirmek"},{en:"sustainable",tr:"sürdürülebilir"},{en:"prioritize",tr:"öncelik vermek"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Urbanization' kelimesinin Türkçe anlamı nedir?",opts:["Sanayileşme","Kentleşme","Küreselleşme","Modernleşme"],correct:1},
        {q:"Pasaja göre şehirler dünya enerji tüketiminin yüzde kaçını oluşturuyor?",opts:["Yüzde 50","Yüzde 65","Yüzde 75'ten fazla","Yüzde 90"],correct:2},
        {q:"'Exacerbate' kelimesinin anlamı nedir?",opts:["İyileştirmek","Kötüleştirmek","Değiştirmek","Durdurmak"],correct:1},
        {q:"Sürdürülebilir şehir planlaması örneği olarak hangi şehir verilmemiştir?",opts:["Kopenhag","Singapur","Londra","Kuritiba"],correct:2}
      ]}
    ]
  }
}),

// ============ IELTS READING — Summary & Note Completion ============

"fill-blanks-strategy-1": () => ({
  type:"strategy", title:"Summary & Note Completion Stratejisi", level:"B1", minutes:15, unitId:"fill-blanks",
  data: {
    topic:"Boşluk Doldurma Stratejileri",
    explanationTr:"Summary Completion ve Note Completion soru tiplerinde, bir özet veya not içindeki boşlukları pasajdan bulduğunuz bilgilerle doldurmanız istenir.<br><br><strong>İki format vardır:</strong><br>1. <strong>Kelime kutusu ile (word box):</strong> Verilen kelimelerden seçersiniz.<br>2. <strong>Pasajdan kelime seçerek:</strong> Doğru kelimeyi pasajda bulmanız gerekir. Kelime sayısı sınırlıdır (örn. 'NO MORE THAN TWO WORDS').<br><br><strong>Kelime sınırına dikkat:</strong> 'No more than two words' diyorsa üç kelime yazamazsınız — bu otomatik yanlış olur!",
    tips:[
      {title:"Kelime sınırını kontrol edin",detail:"Talimatı dikkatlice okuyun. 'No more than TWO words' diyorsa, en fazla iki kelime yazabilirsiniz. 'No more than THREE words AND/OR a number' diyorsa, üç kelime artı bir sayı yazabilirsiniz."},
      {title:"Gramer ipucu kullanın",detail:"Boşluktan önceki ve sonraki kelimelere bakın. Eğer boşluktan önce 'a' veya 'an' varsa, cevap tekil bir isim olmalıdır. Eğer boşluktan önce 'are' varsa, cevap çoğul bir isim veya sıfat olabilir."},
      {title:"Sırayı takip edin",detail:"Summary ve Note Completion soruları genellikle pasajla aynı sırayı takip eder. İlk boşluk pasajın başından, son boşluk pasajın sonundan gelir."},
      {title:"Paraphrase'e dikkat edin",detail:"Özetteki kelimeler pasajdaki kelimelerle birebir aynı olmayabilir. Synonym ve paraphrase arayın. Cevap ise genellikle pasajdaki kelimedir, özetin paraphrase ettiği kelimenin yanında bulunur."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"'No more than TWO words' diyorsa kaç kelime yazabilirsiniz?",opts:["Tam olarak iki kelime","En fazla iki kelime","En az iki kelime","İstediğiniz kadar"],correct:1},
        {q:"Boşluktan önce 'an' kelimesi varsa cevap ne olmalıdır?",opts:["Çoğul isim","Fiil","Sesli harfle başlayan tekil isim","Sıfat"],correct:2},
        {q:"Summary Completion soruları genellikle pasajla hangi ilişkidedir?",opts:["Ters sırada gelir","Aynı sırayı takip eder","Rastgele sırada gelir","Sadece son paragraftan gelir"],correct:1},
        {q:"Kelime kutusundan (word box) seçerken ne yapmalısınız?",opts:["İlk kelimeyi seçmeli","Gramer ve anlam uyumuna bakmalı","En uzun kelimeyi seçmeli","Rastgele seçmeli"],correct:1}
      ]}
    ]
  }
}),
"fill-blanks-reading-1": () => ({
  type:"reading", title:"Summary Completion Pratiği: Sleep Science", level:"B2", minutes:20, unitId:"fill-blanks",
  data: {
    topic:"Summary Completion Uygulaması",
    passage:"Sleep is a fundamental biological process that occupies roughly one-third of our lives. Despite its importance, scientists did not begin to understand the mechanisms of sleep until the mid-20th century, when the development of electroencephalography (EEG) allowed researchers to monitor brain activity during sleep.\n\nSleep consists of two main types: non-rapid eye movement (NREM) sleep and rapid eye movement (REM) sleep. NREM sleep is divided into three stages, progressing from light sleep to deep sleep. During deep NREM sleep, the body repairs tissues, strengthens the immune system, and consolidates memories. REM sleep, which accounts for approximately 25 percent of total sleep time in adults, is characterized by vivid dreaming and increased brain activity similar to wakefulness.\n\nSleep deprivation has been linked to a range of serious health consequences. Studies have shown that individuals who regularly sleep fewer than seven hours per night face increased risks of obesity, cardiovascular disease, and impaired cognitive function. Furthermore, chronic sleep deprivation can weaken the immune system, making individuals more susceptible to infections.\n\nThe circadian rhythm, often called the body's internal clock, regulates the sleep-wake cycle over a 24-hour period. This rhythm is primarily influenced by exposure to light. When light enters the eyes, it signals the brain to suppress the production of melatonin, a hormone that promotes sleepiness. As darkness falls, melatonin levels rise, preparing the body for sleep.",
    passageTr:"Uyku, hayatımızın yaklaşık üçte birini kaplayan temel bir biyolojik süreçtir. Önemine rağmen bilim insanları uykunun mekanizmalarını 20. yüzyılın ortalarına kadar anlamaya başlamamıştır...",
    questions:[
      {q:"Bilim insanları uyku mekanizmalarını anlamak için hangi teknolojiyi kullandı? (Pasajdan bulun)",opts:["MRI","CT scan","Electroencephalography (EEG)","X-ray"],correct:2,explanation:"Pasajda 'the development of electroencephalography (EEG) allowed researchers to monitor brain activity' yazıyor."},
      {q:"Derin NREM uykusu sırasında vücut ne yapar? (Boşluğu doldurun: The body repairs tissues, strengthens the immune system, and _____ memories.)",opts:["forgets","consolidates","creates","deletes"],correct:1,explanation:"Pasajda 'consolidates memories' ifadesi geçiyor — bellekleri pekiştirir."},
      {q:"REM uykusu yetişkinlerde toplam uyku süresinin yaklaşık yüzde kaçını oluşturur?",opts:["10 percent","15 percent","25 percent","50 percent"],correct:2,explanation:"Pasajda 'approximately 25 percent of total sleep time in adults' yazıyor."},
      {q:"Melatonin üretimini baskılayan faktör nedir?",opts:["Karanlık","Işığa maruz kalma","Egzersiz","Yemek yeme"],correct:1,explanation:"Pasajda 'light enters the eyes, it signals the brain to suppress the production of melatonin' yazıyor."}
    ],
    vocabulary:[{en:"fundamental",tr:"temel"},{en:"electroencephalography",tr:"elektroensefalografi"},{en:"consolidates",tr:"pekiştirir"},{en:"deprivation",tr:"yoksunluk"},{en:"cardiovascular",tr:"kardiyovasküler"},{en:"susceptible",tr:"duyarlı/hassas"},{en:"circadian rhythm",tr:"sirkadiyen ritim"},{en:"melatonin",tr:"melatonin"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Sleep deprivation' ne demektir?",opts:["Uyku kalitesi","Uyku yoksunluğu","Derin uyku","Uyku bozukluğu"],correct:1},
        {q:"Sirkadiyen ritim kaç saatlik bir döngüyü düzenler?",opts:["12 saat","18 saat","24 saat","48 saat"],correct:2},
        {q:"'Susceptible' kelimesinin anlamı nedir?",opts:["Güçlü","Bağışık","Hassas/duyarlı","Hızlı"],correct:2},
        {q:"Haftada 7 saatten az uyuyan bireylerin riski nedir?",opts:["Daha iyi hafıza","Obezite ve kalp hastalığı riski","Daha fazla enerji","Daha güçlü bağışıklık"],correct:1}
      ]}
    ]
  }
}),

// ============ IELTS READING — Multiple Choice Stratejileri ============

"multiple-choice-reading-strategy-1": () => ({
  type:"strategy", title:"Multiple Choice Stratejisi", level:"B1", minutes:15, unitId:"multiple-choice-reading",
  data: {
    topic:"Çoktan Seçmeli Soru Stratejileri",
    explanationTr:"Multiple Choice (çoktan seçmeli) soruları IELTS Reading'de sık karşılaşılan bir soru tipidir. Genellikle 4 seçenek (A, B, C, D) verilir ve bunlardan birini veya birkaçını seçmeniz istenir.<br><br><strong>İki türü vardır:</strong><br>1. <strong>Tek cevaplı:</strong> 'Choose the correct answer' — bir doğru cevap seçersiniz.<br>2. <strong>Çok cevaplı:</strong> 'Choose TWO/THREE correct answers' — birden fazla doğru cevap seçersiniz.<br><br><strong>Dikkat:</strong> Seçenekler genellikle pasajdaki bilgiyi paraphrase eder. Pasajdaki kelimeyle birebir aynı seçeneği değil, anlamca doğru olanı seçin.",
    tips:[
      {title:"Önce soruyu okuyun",detail:"Seçeneklere bakmadan önce sorunun ne sorduğunu anlayın. Soru ana fikri mi, bir detayı mı, yazarın amacını mı soruyor? Bu bilgi cevabı nerede arayacağınızı belirlemenize yardımcı olur."},
      {title:"Yanlış seçenekleri eleyin",detail:"Genellikle 4 seçenekten 2'si kolayca elenebilir. Kalan 2 seçenek arasında karar verirken pasaja dönüp ilgili bölümü tekrar okuyun."},
      {title:"Tuzak seçeneklere dikkat",detail:"Pasajda geçen bir kelimeyi içeren seçenek her zaman doğru değildir. Tuzak seçenekler pasajdaki kelimeleri kullanır ama anlamı değiştirir. Seçeneğin pasajdaki bilgiyle anlamca uyuşup uyuşmadığını kontrol edin."},
      {title:"'All of the above' ve 'None of the above'",detail:"Eğer bu seçenekler varsa, her birini ayrı ayrı kontrol edin. Sadece bir tanesi bile yanlışsa 'all of the above' seçeneği doğru olamaz."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Multiple Choice sorularında ilk ne yapmalısınız?",opts:["Seçeneklere bakmak","Sorunun ne sorduğunu anlamak","Pasajı baştan okumak","En uzun seçeneği seçmek"],correct:1},
        {q:"Bir seçenek pasajdaki bir kelimeyi içeriyorsa ne anlama gelir?",opts:["Kesinlikle doğru cevaptır","Tuzak olabilir, anlamı kontrol edin","Her zaman yanlıştır","İlk seçenek olarak seçilmeli"],correct:1},
        {q:"'Choose TWO correct answers' talimatında kaç cevap işaretlemelisiniz?",opts:["Bir","İki","Üç","İstediğiniz kadar"],correct:1},
        {q:"Yanlış seçenekleri elemek neden önemlidir?",opts:["Zaman kazandırır","Doğru cevaba ulaşma şansını artırır","Her ikisi de","Hiçbiri"],correct:2}
      ]}
    ]
  }
}),
"multiple-choice-reading-reading-1": () => ({
  type:"reading", title:"MCQ Pratiği: The Impact of Social Media", level:"B2", minutes:20, unitId:"multiple-choice-reading",
  data: {
    topic:"Multiple Choice Uygulaması",
    passage:"Social media has fundamentally transformed the way people communicate, consume information, and form opinions. Platforms such as Facebook, Twitter, and Instagram have connected billions of users worldwide, enabling instant communication across geographical boundaries. However, the rise of social media has also raised significant concerns about its impact on mental health, privacy, and the quality of public discourse.\n\nResearch conducted by the Royal Society for Public Health in the United Kingdom found that Instagram was rated as the most harmful social media platform for young people's mental health. The study revealed that frequent use of the platform was associated with increased levels of anxiety, depression, loneliness, and poor body image. Participants reported feeling pressured to present idealized versions of their lives, leading to constant social comparison.\n\nPrivacy is another major concern in the age of social media. Users often share personal information without fully understanding how it will be used. In 2018, the Cambridge Analytica scandal revealed that the personal data of millions of Facebook users had been harvested without consent and used for political advertising purposes. This incident prompted governments worldwide to implement stricter data protection regulations.\n\nDespite these challenges, social media also offers substantial benefits. It has democratized access to information, allowing individuals to stay informed about global events in real time. Social movements such as climate activism and human rights campaigns have gained momentum through viral social media posts. Furthermore, small businesses and entrepreneurs have found social media to be an invaluable marketing tool, reaching potential customers at minimal cost.",
    passageTr:"Sosyal medya, insanların iletişim kurma, bilgi tüketme ve fikir oluşturma biçimini temelden dönüştürmüştür...",
    questions:[
      {q:"According to the passage, what is the main concern about social media?",opts:["It is too expensive","Its impact on mental health, privacy, and public discourse","It is difficult to use","It only works in certain countries"],correct:1,explanation:"İlk paragrafta 'significant concerns about its impact on mental health, privacy, and the quality of public discourse' ifadesi geçiyor."},
      {q:"Which social media platform was rated as most harmful for young people's mental health?",opts:["Facebook","Twitter","Instagram","YouTube"],correct:2,explanation:"İkinci paragrafta 'Instagram was rated as the most harmful social media platform for young people's mental health' yazıyor."},
      {q:"What was the Cambridge Analytica scandal about?",opts:["Hacking government websites","Harvesting personal data without consent for political advertising","Selling fake products online","Spreading computer viruses"],correct:1,explanation:"Üçüncü paragrafta 'personal data of millions of Facebook users had been harvested without consent and used for political advertising' yazıyor."},
      {q:"According to the passage, which of the following is a benefit of social media?",opts:["It guarantees user privacy","It has made traditional media obsolete","It has democratized access to information","It has eliminated fake news"],correct:2,explanation:"Son paragrafta 'It has democratized access to information' ifadesi bir fayda olarak belirtiliyor."}
    ],
    vocabulary:[{en:"fundamentally",tr:"temelden"},{en:"discourse",tr:"söylem"},{en:"idealized",tr:"idealleştirilmiş"},{en:"harvested",tr:"toplandı/hasat edildi"},{en:"consent",tr:"onay/rıza"},{en:"democratized",tr:"demokratikleştirdi"},{en:"momentum",tr:"ivme"},{en:"invaluable",tr:"paha biçilmez"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Consent' kelimesinin Türkçe anlamı nedir?",opts:["Sonuç","Onay/Rıza","İçerik","Bağlam"],correct:1},
        {q:"Pasaja göre sosyal medyanın küçük işletmelere faydası nedir?",opts:["Ücretsiz ürün sağlar","Düşük maliyetle potansiyel müşterilere ulaştırır","Vergi muafiyeti sağlar","Otomatik satış yapar"],correct:1},
        {q:"'Invaluable' kelimesi ne anlama gelir?",opts:["Değersiz","Paha biçilmez","Pahalı","Ucuz"],correct:1},
        {q:"Cambridge Analytica skandalı hangi yılda ortaya çıktı?",opts:["2015","2016","2018","2020"],correct:2}
      ]}
    ]
  }
}),

// ============ IELTS WRITING — Task 1: Grafik & Tablo Analizi ============

"task1-graphs-strategy-1": () => ({
  type:"strategy", title:"Task 1 Grafik Analizi Stratejisi", level:"B2", minutes:15, unitId:"task1-graphs",
  data: {
    topic:"IELTS Task 1 Grafik Yazma Stratejisi",
    explanationTr:"IELTS Writing Task 1'de bir grafik, tablo, pasta grafik veya çubuk grafik verilir ve bunu <strong>en az 150 kelime</strong> ile açıklamanız istenir. <strong>20 dakikanız</strong> vardır.<br><br><strong>Yapı:</strong><br>1. <strong>Giriş (Introduction):</strong> Grafiğin ne gösterdiğini paraphrase edin — sorudaki cümleyi aynen kopyalamayın.<br>2. <strong>Genel bakış (Overview):</strong> En belirgin 2-3 trendi veya özelliği belirtin. Bu paragraf çok önemlidir!<br>3. <strong>Detaylar (Body 1 & 2):</strong> Rakamlarla desteklenmiş detaylı açıklamalar yapın.<br><br><strong>Kişisel fikir belirtmeyin!</strong> Task 1'de sadece verileri açıklarsınız.",
    tips:[
      {title:"Giriş paragrafını paraphrase edin",detail:"Sorudaki 'The graph shows...' cümlesini aynen kopyalamayın. 'The line chart illustrates...' veya 'The bar graph provides information about...' gibi farklı kelimelerle yazın."},
      {title:"Overview çok önemlidir",detail:"Genel bakış paragrafı olmadan Band 7+ alamazsınız. 'Overall, it is clear that...' ile başlayın ve 2-3 ana trendi belirtin. Rakam vermeyin — sadece genel eğilimleri anlatın."},
      {title:"Rakamları kullanın",detail:"Body paragraflarında mutlaka spesifik rakamlar kullanın: 'increased from 20% to 45%', 'approximately 3 million', 'roughly double'. Rakamsız yazı düşük puan alır."},
      {title:"Trend kelimelerini öğrenin",detail:"increase/rise/grow (artmak), decrease/fall/decline (azalmak), remain stable/steady (sabit kalmak), fluctuate (dalgalanmak), peak (zirveye ulaşmak), reach a low (en düşük noktaya ulaşmak)."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Task 1'de kaç kelime yazmanız gerekir?",opts:["En az 100","En az 150","En az 200","En az 250"],correct:1},
        {q:"Task 1'de kişisel fikir belirtmeli misiniz?",opts:["Evet, son paragrafta","Hayır, sadece verileri açıklamalısınız","Evet, her paragrafta","Sadece girişte"],correct:1},
        {q:"Overview paragrafı neden önemlidir?",opts:["Kelime sayısını artırır","Band 7+ almak için gereklidir","Soruyu tekrar yazar","Zaman kazandırır"],correct:1},
        {q:"Giriş paragrafında ne yapmalısınız?",opts:["Soruyu aynen kopyalamak","Soruyu paraphrase etmek","Kendi fikrinizi belirtmek","Rakamları listelemek"],correct:1}
      ]}
    ]
  }
}),
"task1-graphs-writing-1": () => ({
  type:"writing", title:"Task 1 Grafik Analizi Örneği", level:"B2", minutes:25, unitId:"task1-graphs",
  data: {
    topic:"Line Graph Analizi",
    explanationTr:"Çizgi grafiği (line graph), zaman içindeki değişimleri gösterir. Trendleri belirlemek ve karşılaştırma yapmak önemlidir. Artış, azalış, sabitlik ve dalgalanmaları tanımlamalısınız.",
    samplePrompt:"The line graph below shows the percentage of households with internet access in four countries (UK, Germany, Turkey, and Brazil) between 2005 and 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    sampleAnswer:"The line graph illustrates the proportion of households that had internet access in four countries over a fifteen-year period from 2005 to 2020.\n\nOverall, it is clear that internet access increased in all four countries during this period, with the UK and Germany consistently having higher rates than Turkey and Brazil. By 2020, all countries had achieved significantly higher levels of connectivity compared to 2005.\n\nIn 2005, the UK had the highest rate of household internet access at approximately 55 percent, followed closely by Germany at around 50 percent. Both countries experienced steady growth over the following years, reaching roughly 95 percent and 92 percent respectively by 2020.\n\nIn contrast, Turkey and Brazil started from much lower levels in 2005, at approximately 15 percent and 12 percent respectively. However, both nations showed rapid growth, particularly between 2010 and 2015. By 2020, Turkey had reached around 78 percent, while Brazil had climbed to approximately 72 percent, narrowing the gap with their European counterparts.",
    structure:["Introduction: Grafiği paraphrase edin","Overview: Ana trendleri belirtin","Body 1: Yüksek değerli ülkeleri açıklayın","Body 2: Düşük değerli ülkeleri karşılaştırın"],
    keyVocabulary:[{en:"illustrates",tr:"göstermektedir"},{en:"proportion",tr:"oran"},{en:"consistently",tr:"tutarlı bir şekilde"},{en:"steady growth",tr:"istikrarlı büyüme"},{en:"respectively",tr:"sırasıyla"},{en:"in contrast",tr:"aksine"},{en:"narrowing the gap",tr:"farkı daraltmak"},{en:"approximately",tr:"yaklaşık"}],
    exercises:[
      {type:"quiz",items:[
        {q:"Line graph'te trend anlatırken hangi kelime 'artış' anlamına gelir?",opts:["decline","fluctuate","increase","remain"],correct:2},
        {q:"Overview paragrafında ne yapmamalısınız?",opts:["Ana trendleri belirtmek","Spesifik rakamlar vermek","Genel bir karşılaştırma yapmak","'Overall' ile başlamak"],correct:1},
        {q:"'Respectively' ne demektir?",opts:["Saygılı bir şekilde","Sırasıyla","Yaklaşık olarak","Tutarlı bir şekilde"],correct:1},
        {q:"Task 1'de kaç dakika harcamalısınız?",opts:["10 dakika","20 dakika","30 dakika","40 dakika"],correct:1}
      ]}
    ]
  }
}),
"task1-graphs-vocab-1": () => ({
  type:"vocabulary", title:"Grafik & Trend Kelimeleri", level:"B2", minutes:12, unitId:"task1-graphs",
  data: {
    theme:"Task 1 Trend ve Karşılaştırma Kelimeleri",
    words:[
      {e:"increase / rise",t:"artmak / yükselmek",p:"/ɪnˈkriːs/",ex:"Sales increased by 20% last year.",ext:"Grafikte yukarı yönlü hareket"},
      {e:"decrease / decline",t:"azalmak / düşmek",p:"/dɪˈkriːs/",ex:"The population decreased significantly.",ext:"Grafikte aşağı yönlü hareket"},
      {e:"remain stable",t:"sabit kalmak",p:"/rɪˈmeɪn ˈsteɪbl/",ex:"Prices remained stable throughout the year.",ext:"Grafikte düz çizgi"},
      {e:"fluctuate",t:"dalgalanmak",p:"/ˈflʌktʃueɪt/",ex:"Temperatures fluctuated between 20 and 30 degrees.",ext:"Grafikte inişli çıkışlı hareket"},
      {e:"peak",t:"zirveye ulaşmak",p:"/piːk/",ex:"Unemployment peaked at 12% in 2010.",ext:"Grafikte en yüksek nokta"},
      {e:"gradually",t:"kademeli olarak",p:"/ˈɡrædʒuəli/",ex:"The number gradually increased over the decade.",ext:"Yavaş ve düzenli değişim"},
      {e:"sharply / dramatically",t:"keskin bir şekilde",p:"/ˈʃɑːpli/",ex:"Costs rose sharply in the second quarter.",ext:"Ani ve büyük değişim"},
      {e:"slightly",t:"hafifçe",p:"/ˈslaɪtli/",ex:"Revenue slightly declined in March.",ext:"Küçük bir değişim"}
    ],
    exercises:[
      {type:"match",q:"Eşleştirin",pairs:[["increase","artmak"],["decrease","azalmak"],["fluctuate","dalgalanmak"],["peak","zirveye ulaşmak"],["gradually","kademeli olarak"]]},
      {type:"quiz",items:[
        {q:"Grafikte ani bir düşüşü ifade etmek için hangi kelimeyi kullanırsınız?",opts:["gradually decreased","slightly declined","sharply dropped","remained stable"],correct:2},
        {q:"'Fluctuate' ne anlama gelir?",opts:["Sabit kalmak","Dalgalanmak","Artmak","Zirveye ulaşmak"],correct:1},
        {q:"Bir değerin en yüksek noktasına ulaşmasını hangi kelime ifade eder?",opts:["decline","fluctuate","peak","stabilize"],correct:2},
        {q:"'Slightly' kelimesi ne tür bir değişimi anlatır?",opts:["Çok büyük","Küçük/hafif","Orta düzey","Ani"],correct:1}
      ]}
    ]
  }
}),

// ============ IELTS WRITING — Task 1: Süreç & Harita ============

"task1-process-strategy-1": () => ({
  type:"strategy", title:"Task 1 Süreç & Harita Stratejisi", level:"B2", minutes:15, unitId:"task1-process",
  data: {
    topic:"Süreç Diyagramı ve Harita Yazma Stratejisi",
    explanationTr:"IELTS Task 1'de bazen bir <strong>süreç diyagramı</strong> (process diagram) veya <strong>harita</strong> (map) verilir. Bu soru tipi grafik sorularından farklıdır çünkü rakam yerine <strong>aşamaları</strong> veya <strong>değişimleri</strong> anlatmanız gerekir.<br><br><strong>Süreç diyagramları:</strong> Bir şeyin nasıl yapıldığını veya nasıl çalıştığını adım adım açıklarsınız. Passive voice (edilgen yapı) çok önemlidir!<br>Örnek: 'The beans are harvested' (Çekirdekler hasat edilir).<br><br><strong>Haritalar:</strong> İki farklı dönem arasındaki değişimleri karşılaştırırsınız. Yön ifadeleri kullanmalısınız (north, south, east, west).",
    tips:[
      {title:"Süreç: Passive voice kullanın",detail:"Süreç anlatırken edilgen yapı kullanın: 'Water is heated' (Su ısıtılır), 'The mixture is then poured into moulds' (Karışım daha sonra kalıplara dökülür). Active voice yerine passive tercih edin."},
      {title:"Süreç: Sıralama kelimeleri kullanın",detail:"Aşamaları bağlamak için: First/Firstly, Then, Next, After that, Subsequently, Following this, Finally. Bu kelimeler yazınıza akıcılık katar."},
      {title:"Harita: Değişim kelimelerini kullanın",detail:"was replaced by (yerine konuldu), was converted into (dönüştürüldü), was demolished (yıkıldı), was constructed/built (inşa edildi), was extended (genişletildi), remained unchanged (değişmeden kaldı)."},
      {title:"Harita: Konum belirtin",detail:"in the north/south/east/west (kuzeyde/güneyde), in the centre (merkezde), adjacent to (yanında), opposite (karşısında), to the left/right of (solunda/sağında)."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Süreç anlatırken hangi dilbilgisi yapısını kullanmalısınız?",opts:["Past tense","Future tense","Passive voice","Conditional"],correct:2},
        {q:"Harita sorularında hangi tür kelimeler önemlidir?",opts:["Rakamlar","Yön ve konum ifadeleri","Kişisel fikirler","Duygusal ifadeler"],correct:1},
        {q:"'Subsequently' kelimesinin anlamı nedir?",opts:["Öncelikle","Daha sonra/Ardından","Son olarak","Aynı anda"],correct:1},
        {q:"'The factory was demolished' ne demektir?",opts:["Fabrika inşa edildi","Fabrika genişletildi","Fabrika yıkıldı","Fabrika taşındı"],correct:2}
      ]}
    ]
  }
}),
"task1-process-writing-1": () => ({
  type:"writing", title:"Süreç Diyagramı Yazma Örneği", level:"B2", minutes:25, unitId:"task1-process",
  data: {
    topic:"Çikolata Üretim Süreci",
    explanationTr:"Süreç diyagramlarında aşamaları sırasıyla açıklamalısınız. Passive voice ve sıralama bağlaçlarını kullanmak çok önemlidir. Kendi fikrinizi veya değerlendirmenizi eklemeyin.",
    samplePrompt:"The diagram below shows the stages involved in the production of chocolate. Summarize the information by selecting and reporting the main features.",
    sampleAnswer:"The diagram illustrates the process by which chocolate is produced, from the initial harvesting of cacao beans to the final product.\n\nOverall, it is clear that the production of chocolate involves a series of both agricultural and industrial stages. The process begins on cacao farms and ends in factories where the finished product is packaged.\n\nIn the first stage, ripe cacao pods are harvested from cacao trees. The pods are then opened and the beans are extracted. Following this, the beans are spread out and left to ferment in the sun for several days, which develops their flavour. After fermentation, the beans are dried, packed into sacks, and transported to chocolate factories.\n\nAt the factory, the dried beans are first roasted at temperatures of approximately 250 degrees Celsius. They are then crushed into small pieces and the outer shells are removed. The inner nibs are ground into a thick paste known as cacao liquor. This liquor is subsequently mixed with sugar, milk, and other ingredients before being poured into moulds. Finally, the chocolate is cooled, wrapped, and distributed to retailers.",
    structure:["Introduction: Diyagramı paraphrase edin","Overview: Sürecin genel yapısını belirtin (kaç aşama, nereden nereye)","Body 1: İlk aşamaları açıklayın (tarım)","Body 2: Son aşamaları açıklayın (fabrika)"],
    keyVocabulary:[{en:"harvested",tr:"hasat edilmek"},{en:"extracted",tr:"çıkarılmak"},{en:"ferment",tr:"fermente olmak/mayalanmak"},{en:"roasted",tr:"kavrulmak"},{en:"crushed",tr:"ezilmek"},{en:"ground into",tr:"öğütülmek"},{en:"subsequently",tr:"ardından"},{en:"distributed",tr:"dağıtılmak"}],
    exercises:[
      {type:"quiz",items:[
        {q:"Süreç yazarken 'The beans are roasted' hangi yapıdadır?",opts:["Active voice","Passive voice","Conditional","Past perfect"],correct:1},
        {q:"Süreçte 'Following this' ne işe yarar?",opts:["Sonuç belirtir","Aşamalar arasında geçiş sağlar","Karşılaştırma yapar","Fikir belirtir"],correct:1},
        {q:"Overview paragrafında süreçle ilgili ne belirtmelisiniz?",opts:["Her aşamanın detayını","Sürecin genel yapısını ve aşama sayısını","Kendi deneyiminizi","Rakamları"],correct:1},
        {q:"'Distributed to retailers' ne demektir?",opts:["Fabrikalara gönderildi","Perakendecilere dağıtıldı","Çiftçilere verildi","Depolara konuldu"],correct:1}
      ]}
    ]
  }
}),

// ============ IELTS WRITING — Task 2: Discussion Essay ============

"task2-discuss-strategy-1": () => ({
  type:"strategy", title:"Discussion Essay Stratejisi", level:"B2", minutes:15, unitId:"task2-discuss",
  data: {
    topic:"Discussion Essay Yazma Stratejisi",
    explanationTr:"Discussion Essay'de iki farklı görüş verilir ve her ikisini de tartışmanız istenir. Genellikle 'Discuss both views and give your own opinion' şeklinde sorulur.<br><br><strong>Yapı (4 paragraf):</strong><br>1. <strong>Giriş:</strong> Konuyu tanıtın ve kendi görüşünüzü kısaca belirtin.<br>2. <strong>Body 1:</strong> Birinci görüşü tartışın — destekleyici nedenler ve örnekler verin.<br>3. <strong>Body 2:</strong> İkinci görüşü tartışın — destekleyici nedenler ve örnekler verin.<br>4. <strong>Sonuç:</strong> Kendi görüşünüzü tekrar belirtin (farklı kelimelerle).<br><br><strong>Önemli:</strong> Her iki görüşe de eşit ağırlık verin. Sadece bir tarafı savunmayın — ikisini de dengeli bir şekilde tartışın, sonra kendi fikrinizi söyleyin.",
    tips:[
      {title:"Giriş nasıl yazılır?",detail:"Konuyu bir cümleyle tanıtın, sonra iki görüşü özetleyin, son olarak kendi fikrinizi belirtin. Örnek: 'While some people believe that... others argue that... In my opinion, ...'"},
      {title:"Body paragrafları nasıl yazılır?",detail:"Her paragrafta: Topic sentence (ana cümle) → Explanation (açıklama) → Example (örnek). Bu yapıyı her body paragrafında kullanın. 'On the one hand... On the other hand...' bağlaçlarını kullanın."},
      {title:"Kendi fikrinizi nerede belirtin?",detail:"Girişte kısaca belirtin ('I believe that...'), sonuçta tekrar vurgulayın. Body paragraflarında tarafsız bir dil kullanın — her iki görüşü de adil bir şekilde sunun."},
      {title:"Bağlaçlar ve geçiş ifadeleri",detail:"Görüş 1 için: On the one hand, Some people argue that, It is often claimed that. Görüş 2 için: On the other hand, However, Conversely, In contrast. Sonuç için: In conclusion, To sum up, All things considered."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Discussion Essay'de kaç paragraf yazmalısınız?",opts:["2","3","4","5"],correct:2},
        {q:"Her iki görüşe ne kadar ağırlık vermelisiniz?",opts:["Sadece birini tartışmalı","Eşit ağırlık vermeli","İlk görüşe daha fazla","İkinci görüşe daha fazla"],correct:1},
        {q:"Kendi fikrinizi nerede belirtmelisiniz?",opts:["Sadece girişte","Sadece sonuçta","Giriş ve sonuçta","Body paragraflarında"],correct:2},
        {q:"'On the one hand... On the other hand...' ne için kullanılır?",opts:["Örnek vermek","İki farklı görüşü karşılaştırmak","Sonuç yazmak","Giriş yazmak"],correct:1}
      ]}
    ]
  }
}),
"task2-discuss-writing-1": () => ({
  type:"writing", title:"Discussion Essay Örnek Çalışma", level:"B2", minutes:25, unitId:"task2-discuss",
  data: {
    topic:"Uzaktan Çalışma vs Ofiste Çalışma",
    explanationTr:"Discussion Essay'de iki görüşü dengeli tartışmalı ve kendi fikrinizi belirtmelisiniz. Yapıyı net tutun: giriş, görüş 1, görüş 2, sonuç.",
    samplePrompt:"Some people think that working from home is more productive and beneficial for employees. Others believe that working in an office is essential for teamwork and career development. Discuss both views and give your own opinion.",
    sampleAnswer:"The debate over whether employees should work from home or in an office has intensified in recent years, particularly since the global pandemic. While both arrangements have their merits, I believe that a hybrid model combining the two approaches offers the greatest advantages.\n\nOn the one hand, supporters of remote work argue that it increases productivity and improves work-life balance. Without the daily commute, employees save valuable time and experience less stress. Furthermore, working from home allows individuals to create a comfortable environment tailored to their personal preferences, which can enhance concentration and efficiency. Studies have shown that remote workers often report higher job satisfaction and are less likely to take sick leave.\n\nOn the other hand, proponents of office-based work contend that physical presence is crucial for effective teamwork and professional growth. Spontaneous conversations and face-to-face interactions often lead to creative ideas and faster problem-solving. Additionally, younger employees may benefit from mentoring opportunities and learning from experienced colleagues, which is more difficult to replicate in a virtual setting. Companies also find it easier to maintain a strong organizational culture when employees work together in a shared space.\n\nIn conclusion, while both remote and office work have distinct advantages, I believe that a hybrid model, which allows employees to work from home part of the week while spending the remaining days in the office, provides the optimal balance between productivity and collaboration.",
    structure:["Introduction: Konuyu tanıtın + kendi fikrinizi belirtin","Body 1: Evden çalışmanın avantajlarını tartışın","Body 2: Ofiste çalışmanın avantajlarını tartışın","Conclusion: Kendi fikrinizi tekrar vurgulayın"],
    keyVocabulary:[{en:"intensified",tr:"yoğunlaştı"},{en:"hybrid model",tr:"hibrit model"},{en:"commute",tr:"işe gidiş-geliş"},{en:"tailored to",tr:"...e göre uyarlanmış"},{en:"proponents",tr:"savunucular"},{en:"contend",tr:"ileri sürmek"},{en:"spontaneous",tr:"kendiliğinden olan"},{en:"replicate",tr:"kopyalamak/tekrarlamak"}],
    exercises:[
      {type:"quiz",items:[
        {q:"Discussion Essay'de 'On the one hand' ne zaman kullanılır?",opts:["Sonuçta","Birinci görüşü sunarken","Örnek verirken","Giriş yazarken"],correct:1},
        {q:"'Commute' ne demektir?",opts:["İletişim kurmak","İşe gidiş-geliş","Taşınmak","Seyahat etmek"],correct:1},
        {q:"Model cevaptaki 'hybrid model' ne anlama gelir?",opts:["Tamamen evden çalışma","Tamamen ofisten çalışma","İkisinin karışımı","Yarı zamanlı çalışma"],correct:2},
        {q:"'Proponents' kelimesinin Türkçe karşılığı nedir?",opts:["Karşıtlar","Savunucular","Eleştirmenler","Çalışanlar"],correct:1}
      ]}
    ]
  }
}),

// ============ IELTS WRITING — Task 2: Problem-Solution Essay ============

"task2-problem-strategy-1": () => ({
  type:"strategy", title:"Problem-Solution Essay Stratejisi", level:"B2", minutes:15, unitId:"task2-problem",
  data: {
    topic:"Problem-Solution Essay Yazma Stratejisi",
    explanationTr:"Problem-Solution Essay'de bir sorun hakkında nedenlerini veya etkilerini tartışmanız ve çözüm önerileri sunmanız istenir. Genellikle 'What are the causes and what solutions can be suggested?' veya 'What problems does this cause and how can they be addressed?' şeklinde sorulur.<br><br><strong>Yapı (4 paragraf):</strong><br>1. <strong>Giriş:</strong> Sorunu tanıtın ve essay'in planını belirtin.<br>2. <strong>Body 1 (Sorunlar/Nedenler):</strong> 2-3 sorun veya neden açıklayın, örneklerle destekleyin.<br>3. <strong>Body 2 (Çözümler):</strong> Her soruna karşılık gelen 2-3 çözüm önerin.<br>4. <strong>Sonuç:</strong> Sorunları ve çözümleri özetleyin.<br><br><strong>İpucu:</strong> Sorunlar ve çözümler arasında mantıksal bağlantı olmalıdır. Her sorunun bir çözümü olmalı.",
    tips:[
      {title:"Sorun-çözüm dengesi kurun",detail:"Body 1'de anlattığınız her sorunun Body 2'de bir çözümü olmalıdır. Örneğin: Sorun = trafik sıkışıklığı, Çözüm = toplu taşıma yatırımı. Bu bağlantı essay'inize tutarlılık katar."},
      {title:"Spesifik örnekler verin",detail:"Genel ifadeler yerine spesifik örnekler kullanın. 'Traffic is bad' yerine 'In major cities such as Istanbul, commuters spend an average of two hours per day in traffic' gibi detaylı yazın."},
      {title:"Çözümleri gerçekçi yapın",detail:"Uygulanabilir çözümler önerin. 'All cars should be banned' gibi uç öneriler yerine 'Governments could invest in expanding public transport networks' gibi gerçekçi çözümler yazın."},
      {title:"Bağlaçları doğru kullanın",detail:"Sorunlar için: One significant problem is..., Another issue is..., Furthermore... Çözümler için: One possible solution would be to..., Another measure could be..., Additionally, governments could..."}
    ],
    exercises:[
      {type:"quiz",items:[
        {q:"Problem-Solution Essay'de Body 1'de ne yazılır?",opts:["Çözümler","Sorunlar veya nedenler","Kişisel deneyimler","Sonuç"],correct:1},
        {q:"Sorunlar ve çözümler arasında ne olmalıdır?",opts:["Çelişki","Mantıksal bağlantı","Karşılaştırma","Kişisel fikir"],correct:1},
        {q:"'One possible solution would be to...' hangi paragrafta kullanılır?",opts:["Girişte","Sorunlar paragrafında","Çözümler paragrafında","Sonuçta"],correct:2},
        {q:"Çözüm önerirken nelere dikkat etmelisiniz?",opts:["Uç ve radikal öneriler yapmak","Gerçekçi ve uygulanabilir öneriler sunmak","Sadece hükümetlere yönelik öneriler yapmak","Örneksiz kısa yazmak"],correct:1}
      ]}
    ]
  }
}),
"task2-problem-writing-1": () => ({
  type:"writing", title:"Problem-Solution Essay Örnek Çalışma", level:"B2", minutes:25, unitId:"task2-problem",
  data: {
    topic:"Çevre Kirliliği",
    explanationTr:"Problem-Solution Essay'de sorunları ve çözümleri dengeli bir şekilde ele almalısınız. Her soruna karşılık gelen bir çözüm olmalıdır.",
    samplePrompt:"In many countries, the amount of waste produced by households is increasing. What are the causes of this problem and what measures could be taken to reduce household waste?",
    sampleAnswer:"In recent decades, the volume of household waste has risen dramatically in many parts of the world, posing serious environmental challenges. This essay will examine the main causes of this problem and propose practical solutions to address it.\n\nThere are several reasons why household waste has increased significantly. Firstly, the widespread use of disposable products and excessive packaging has contributed enormously to waste generation. Many consumer goods are wrapped in multiple layers of plastic, much of which is discarded immediately after purchase. Secondly, the culture of consumerism encourages people to buy new products frequently rather than repairing existing ones. Electronic devices, clothing, and furniture are often replaced long before they are worn out. Finally, in many countries, there is a lack of awareness about recycling and waste reduction, meaning that materials which could be reused are simply thrown away.\n\nSeveral measures could be implemented to tackle this growing problem. One effective solution would be for governments to introduce stricter regulations on packaging, requiring manufacturers to use recyclable or biodegradable materials. Additionally, education campaigns could raise public awareness about the importance of reducing, reusing, and recycling household waste. Schools and community organisations could play a key role in promoting these habits. Furthermore, local authorities could improve recycling infrastructure by providing more convenient collection points and sorting facilities, making it easier for residents to participate in recycling programmes.\n\nIn conclusion, while the increase in household waste is driven by excessive packaging, consumerism, and limited awareness, it can be effectively addressed through government regulation, public education, and improved recycling infrastructure.",
    structure:["Introduction: Sorunu tanıtın + essay'in planını belirtin","Body 1: 2-3 sorun nedeni açıklayın","Body 2: 2-3 çözüm önerin","Conclusion: Özetleyin"],
    keyVocabulary:[{en:"disposable",tr:"tek kullanımlık"},{en:"discarded",tr:"atılmak"},{en:"consumerism",tr:"tüketim kültürü"},{en:"worn out",tr:"eskimiş/yıpranmış"},{en:"biodegradable",tr:"biyolojik olarak parçalanabilir"},{en:"infrastructure",tr:"altyapı"},{en:"tackle",tr:"ele almak/çözmek"},{en:"implement",tr:"uygulamak"}],
    exercises:[
      {type:"quiz",items:[
        {q:"'Disposable' ne demektir?",opts:["Dayanıklı","Tek kullanımlık","Geri dönüştürülebilir","Pahalı"],correct:1},
        {q:"Model cevaptaki ilk sorun nedeni nedir?",opts:["Geri dönüşüm eksikliği","Tek kullanımlık ürünler ve aşırı ambalaj","Tüketim kültürü","Hükümet politikaları"],correct:1},
        {q:"'Biodegradable' kelimesinin anlamı nedir?",opts:["Geri dönüştürülebilir","Biyolojik olarak parçalanabilir","Plastik","Doğal"],correct:1},
        {q:"Essay'de önerilen çözümlerden biri nedir?",opts:["Tüm fabrikaları kapatmak","Ambalaj düzenlemelerini sıkılaştırmak","İthalatı yasaklamak","Vergileri artırmak"],correct:1}
      ]}
    ]
  }
}),
"task2-problem-vocab-1": () => ({
  type:"vocabulary", title:"Problem-Solution Essay Kelimeleri", level:"B2", minutes:12, unitId:"task2-problem",
  data: {
    theme:"Problem-Solution Essay İçin Anahtar Kelimeler",
    words:[
      {e:"cause",t:"neden",p:"/kɔːz/",ex:"The main cause of pollution is industrial waste.",ext:"Bir sorunun arkasındaki sebep"},
      {e:"consequence",t:"sonuç",p:"/ˈkɒnsɪkwəns/",ex:"One consequence of deforestation is soil erosion.",ext:"Bir eylemin sonucu"},
      {e:"address (a problem)",t:"(sorunu) ele almak",p:"/əˈdres/",ex:"The government must address the housing crisis.",ext:"Bir sorunla ilgilenmek, çözmeye çalışmak"},
      {e:"implement",t:"uygulamak",p:"/ˈɪmplɪment/",ex:"New regulations were implemented last year.",ext:"Bir planı veya kuralı hayata geçirmek"},
      {e:"contribute to",t:"katkıda bulunmak",p:"/kənˈtrɪbjuːt/",ex:"Cars contribute to air pollution.",ext:"Bir sonuca sebep olmak veya katkı sağlamak"},
      {e:"alleviate",t:"hafifletmek",p:"/əˈliːvieɪt/",ex:"Better public transport can alleviate traffic congestion.",ext:"Bir sorunu tamamen çözmek yerine azaltmak"},
      {e:"exacerbate",t:"kötüleştirmek",p:"/ɪɡˈzæsəbeɪt/",ex:"Climate change exacerbates natural disasters.",ext:"Bir sorunu daha da kötü hale getirmek"},
      {e:"sustainable",t:"sürdürülebilir",p:"/səˈsteɪnəbl/",ex:"We need sustainable energy solutions.",ext:"Uzun vadede çevreye zarar vermeden devam ettirilebilen"}
    ],
    exercises:[
      {type:"match",q:"Eşleştirin",pairs:[["cause","neden"],["consequence","sonuç"],["implement","uygulamak"],["alleviate","hafifletmek"],["sustainable","sürdürülebilir"]]},
      {type:"quiz",items:[
        {q:"'Exacerbate' kelimesinin zıt anlamlısı hangisidir?",opts:["Alleviate","Implement","Contribute","Address"],correct:0},
        {q:"'Address a problem' ne demektir?",opts:["Sorunu görmezden gelmek","Sorunu ele almak","Sorunun adresini bulmak","Sorunu ertelemek"],correct:1},
        {q:"'Contribute to' hangi cümlede doğru kullanılmıştır?",opts:["I contribute to school every day.","Fast food contributes to obesity.","She contributes to happy.","They contribute to run."],correct:1},
        {q:"Sürdürülebilir enerji kaynaklarına örnek hangisidir?",opts:["Kömür","Petrol","Güneş enerjisi","Doğalgaz"],correct:2}
      ]}
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
  "transport": ["transport-vocab-1","transport-vocab-2","transport-grammar-1","transport-dialogue-1"],
  "home": ["home-vocab-1","home-grammar-1","home-dialogue-1"],
  "hobbies": ["hobbies-vocab-1","hobbies-grammar-1","hobbies-dialogue-1"],
  "travel": ["travel-vocab-1","travel-grammar-1","travel-dialogue-1"],
  "health": ["health-vocab-1","health-grammar-1","health-dialogue-1"],
  "opinions": ["opinions-vocab-1","opinions-grammar-1","opinions-dialogue-1"],
  "feelings": ["feelings-vocab-1","feelings-grammar-1","feelings-dialogue-1"],
  "technology": ["technology-vocab-1","technology-grammar-1","technology-dialogue-1"],
  "formal-lang": ["formal-lang-vocab-1","formal-lang-grammar-1","formal-lang-strategy-1"],
  "academic-vocab": ["academic-vocab-vocab-1","academic-vocab-vocab-2"],
  "paragraph-structure": ["paragraph-structure-grammar-1","paragraph-structure-writing-1"],
  "linking-words": ["linking-words-vocab-1","linking-words-grammar-1","linking-words-strategy-1"],
  "paraphrasing": ["paraphrasing-vocab-1","paraphrasing-strategy-1","paraphrasing-writing-1"],
  "reading-overview": ["reading-overview-strategy-1","reading-overview-reading-1"],
  "skimming-scanning": ["skimming-scanning-strategy-1","skimming-scanning-reading-1","skimming-scanning-vocab-1"],
  "true-false-ng": ["true-false-ng-strategy-1","true-false-ng-reading-1"],
  "matching-headings": ["matching-headings-strategy-1","matching-headings-reading-1"],
  "fill-blanks": ["fill-blanks-strategy-1","fill-blanks-reading-1"],
  "multiple-choice-reading": ["multiple-choice-reading-strategy-1","multiple-choice-reading-reading-1"],
  "writing-overview": ["writing-overview-strategy-1"],
  "task1-graphs": ["task1-graphs-strategy-1","task1-graphs-writing-1","task1-graphs-vocab-1"],
  "task1-process": ["task1-process-strategy-1","task1-process-writing-1"],
  "task2-opinion": ["task2-opinion-writing-1"],
  "task2-discuss": ["task2-discuss-strategy-1","task2-discuss-writing-1"],
  "task2-problem": ["task2-problem-strategy-1","task2-problem-writing-1","task2-problem-vocab-1"],
  "listening-overview": ["listening-overview-strategy-1","listening-overview-vocab-1"],
  "section1-2": ["section1-2-strategy-1","section1-2-dialogue-1","section1-2-vocab-1"],
  "section3-4": ["section3-4-strategy-1","section3-4-vocab-1","section3-4-dialogue-1"],
  "note-completion": ["note-completion-strategy-1","note-completion-strategy-2"],
  "listening-traps": ["listening-traps-strategy-1","listening-traps-strategy-2"],
  "speaking-overview": ["speaking-overview-strategy-1"],
  "part1-intro": ["part1-intro-speaking-1"],
  "part2-cuecard": ["part2-cuecard-strategy-1","part2-cuecard-speaking-1"],
  "part3-discussion": ["part3-discussion-strategy-1","part3-discussion-speaking-1"],
  "pronunciation": ["pronunciation-strategy-1","pronunciation-vocab-1","pronunciation-speaking-1"]
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
  const targetBand = parseFloat(onboarding.targetBand) || 6.0;
  const examDate = onboarding.examDate || "nodate";

  // Map weak areas to module IDs for prioritization
  const weakToModules = {
    listening: ["ielts-listening"],
    reading: ["ielts-reading"],
    writing: ["ielts-writing", "academic"],
    speaking: ["ielts-speaking"],
    vocabulary: ["foundations", "daily-life", "social"],
    grammar: ["foundations", "daily-life"]
  };
  const priorityModules = new Set();
  weakAreas.forEach(wa => (weakToModules[wa] || []).forEach(m => priorityModules.add(m)));

  // Determine minimum lesson level based on user level
  const levelOrder = ["A0", "A1", "A2", "B1", "B2", "C1"];
  const userLevelMap = { zero: "A0", beginner: "A1", elementary: "A2", intermediate: "B1", upper: "B2" };
  const userLevel = userLevelMap[onboarding.level] || "A1";
  const userLevelIdx = levelOrder.indexOf(userLevel);

  // Build module order: prioritize weak-area modules, then others
  let moduleOrder = [];
  // First: modules from start index onward
  let availableModules = MODULES.slice(startIdx);
  // Separate priority and non-priority modules
  let priorityMods = availableModules.filter(m => priorityModules.has(m.id));
  let normalMods = availableModules.filter(m => !priorityModules.has(m.id));

  // For high band targets (7.0+), put IELTS strategy modules earlier
  if (targetBand >= 7.0) {
    const ieltsModIds = ["ielts-reading", "ielts-writing", "ielts-listening", "ielts-speaking"];
    const ieltsMods = normalMods.filter(m => ieltsModIds.includes(m.id));
    normalMods = normalMods.filter(m => !ieltsModIds.includes(m.id));
    priorityMods = [...priorityMods, ...ieltsMods.filter(m => !priorityModules.has(m.id))];
  }

  // Interleave: priority modules first, then normal
  moduleOrder = [...priorityMods, ...normalMods];
  // Remove duplicates while preserving order
  const seen = new Set();
  moduleOrder = moduleOrder.filter(m => { if (seen.has(m.id)) return false; seen.add(m.id); return true; });

  // Collect lessons with smart filtering
  let path = [];
  for (const mod of moduleOrder) {
    const units = UNITS[mod.id] || [];
    for (const unit of units) {
      const lessonIds = UNIT_LESSONS[unit.id] || [];
      for (const lid of lessonIds) {
        const factory = LESSON_DATA[lid];
        if (!factory) continue;
        const lesson = factory();
        const lessonLevelIdx = levelOrder.indexOf(lesson.level);

        // Skip lessons too easy for advanced users (more than 2 levels below)
        if (userLevelIdx >= 3 && lessonLevelIdx < userLevelIdx - 2) continue;

        // Calculate priority score (higher = more important)
        let priority = 5;

        // Boost weak area lessons significantly
        if (weakAreas.includes("vocabulary") && lesson.type === "vocabulary") priority += 4;
        if (weakAreas.includes("grammar") && lesson.type === "grammar") priority += 4;
        if (weakAreas.includes("reading") && (lesson.type === "reading" || lesson.type === "strategy")) priority += 3;
        if (weakAreas.includes("writing") && (lesson.type === "writing" || lesson.type === "strategy")) priority += 3;
        if (weakAreas.includes("speaking") && (lesson.type === "speaking" || lesson.type === "dialogue")) priority += 3;
        if (weakAreas.includes("listening") && (lesson.type === "dialogue" || lesson.type === "strategy")) priority += 3;

        // Boost lessons at user's level
        if (lessonLevelIdx === userLevelIdx) priority += 2;
        if (lessonLevelIdx === userLevelIdx + 1) priority += 1;

        // For high band targets, boost strategy and academic content
        if (targetBand >= 7.0 && lesson.type === "strategy") priority += 2;
        if (targetBand >= 7.0 && mod.id === "academic") priority += 2;

        // For lower band targets, boost foundations
        if (targetBand <= 5.5 && (mod.id === "foundations" || mod.id === "daily-life")) priority += 2;

        // Priority module boost
        if (priorityModules.has(mod.id)) priority += 3;

        path.push({ id: lid, moduleId: mod.id, unitId: unit.id, type: lesson.type, level: lesson.level, priority, title: lesson.title });
      }
    }
  }

  // Sort: within each module group, higher priority first
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

  // Daily allocation based on time AND exam urgency
  const dailyMap = { "15min": 1, "30min": 2, "1hour": 3, "2hours": 5 };
  let daily = dailyMap[onboarding.dailyTime] || 2;

  // Increase intensity for urgent exam dates
  if (examDate === "3months") daily = Math.max(daily, 3);

  // Estimate study plan duration
  const totalDays = Math.ceil(sorted.length / daily);

  return {
    lessons: sorted.map(s => s.id),
    currentIndex: 0,
    dailyAllocation: daily,
    totalEstimatedDays: totalDays,
    targetBand: targetBand,
    examUrgency: examDate
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

// ==================== QUIZ BANK ====================
// Ayrı quiz havuzu — derslerdeki sorulardan farklı, çeşitli sorular
// Her soru: { q, opts, correct, level, module, tag? }
const QUIZ_BANK = [
  // ===== FOUNDATIONS (A1) =====
  { q:"'I ___ a student.' cümlesinde boşluğa ne gelir?", opts:["am","is","are","be"], correct:0, level:"A1", module:"foundations" },
  { q:"'She ___ from Turkey.' cümlesini tamamlayın.", opts:["are","is","am","be"], correct:1, level:"A1", module:"foundations" },
  { q:"'We ___ happy.' cümlesinde doğru fiil hangisi?", opts:["is","am","are","be"], correct:2, level:"A1", module:"foundations" },
  { q:"'There ___ two cats on the table.' boşluğa ne gelir?", opts:["is","are","has","have"], correct:1, level:"A1", module:"foundations" },
  { q:"Hangi cümle doğrudur?", opts:["He don't like coffee.","He doesn't likes coffee.","He doesn't like coffee.","He not like coffee."], correct:2, level:"A1", module:"foundations" },
  { q:"'beautiful' kelimesinin Türkçe karşılığı nedir?", opts:["çirkin","güzel","büyük","küçük"], correct:1, level:"A1", module:"foundations" },
  { q:"'How ___ are you?' — Yaşını sormak için hangi kelime kullanılır?", opts:["much","many","old","long"], correct:2, level:"A1", module:"foundations" },
  { q:"'My brother ___ tall.' cümlesinde boşluğa ne gelir?", opts:["are","am","is","be"], correct:2, level:"A1", module:"foundations" },
  { q:"Haftanın günlerinden hangisi İngilizce'de doğru yazılmıştır?", opts:["Wensday","Wendsday","Wednesday","Wednseday"], correct:2, level:"A1", module:"foundations" },
  { q:"'I have two ___.' — İki çocuk için doğru olan nedir?", opts:["childs","childrens","child","children"], correct:3, level:"A1", module:"foundations" },
  { q:"'Can I have ___ water, please?' boşluğa ne gelir?", opts:["a","an","some","many"], correct:2, level:"A1", module:"foundations" },
  { q:"'What time ___ it?' sorusunu tamamlayın.", opts:["are","is","do","does"], correct:1, level:"A1", module:"foundations" },
  { q:"'kitchen' ne demektir?", opts:["yatak odası","banyo","mutfak","salon"], correct:2, level:"A1", module:"foundations" },
  { q:"'I ___ breakfast at 8 o'clock.' cümlesinde doğru fiil?", opts:["has","have","having","haves"], correct:1, level:"A1", module:"foundations" },
  { q:"'This is ___ umbrella.' boşluğa ne gelir?", opts:["a","an","the","—"], correct:1, level:"A1", module:"foundations" },

  // ===== DAILY LIFE (A2) =====
  { q:"'I usually ___ to work by bus.' cümlesini tamamlayın.", opts:["going","goes","go","gone"], correct:2, level:"A2", module:"daily-life" },
  { q:"'She ___ cooking right now.' — Şu anda yapıyor, hangi form?", opts:["is","are","am","does"], correct:0, level:"A2", module:"daily-life" },
  { q:"'How much ___ these shoes?' boşluğa ne gelir?", opts:["is","are","does","do"], correct:1, level:"A2", module:"daily-life" },
  { q:"'I went to the supermarket ___ buy some milk.' boşluğa ne gelir?", opts:["for","to","at","in"], correct:1, level:"A2", module:"daily-life" },
  { q:"'Could you ___ me the way to the station?' boşluğa ne gelir?", opts:["say","talk","tell","speak"], correct:2, level:"A2", module:"daily-life" },
  { q:"'I ___ my homework yesterday.' — Geçmiş zaman formu?", opts:["do","did","done","does"], correct:1, level:"A2", module:"daily-life" },
  { q:"'Turn left ___ the traffic lights.' boşluğa ne gelir?", opts:["in","on","at","to"], correct:2, level:"A2", module:"daily-life" },
  { q:"'receipt' kelimesinin anlamı nedir?", opts:["tarif","fiş/makbuz","resepsiyon","reçete"], correct:1, level:"A2", module:"daily-life" },
  { q:"'I ___ TV when the phone rang.' hangi zaman kullanılır?", opts:["watch","watched","was watching","am watching"], correct:2, level:"A2", module:"daily-life" },
  { q:"'Would you like ___ cup of tea?' boşluğa ne gelir?", opts:["a","an","the","some"], correct:0, level:"A2", module:"daily-life" },
  { q:"'She has ___ been to London.' — Hiç gitmedi anlamında?", opts:["ever","never","already","yet"], correct:1, level:"A2", module:"daily-life" },
  { q:"'I'm looking ___ my keys. Have you seen them?' boşluğa?", opts:["at","after","for","up"], correct:2, level:"A2", module:"daily-life" },
  { q:"'He arrived ___ Monday morning.' boşluğa ne gelir?", opts:["in","at","on","to"], correct:2, level:"A2", module:"daily-life" },
  { q:"'convenient' kelimesinin anlamı nedir?", opts:["geleneksel","uygun/elverişli","ikna edici","güvenilir"], correct:1, level:"A2", module:"daily-life" },
  { q:"'I ___ to the gym three times a week.' doğru fiil?", opts:["goes","going","go","am go"], correct:2, level:"A2", module:"daily-life" },

  // ===== SOCIAL (B1) =====
  { q:"'If I ___ rich, I would travel the world.' boşluğa ne gelir?", opts:["am","was","were","will be"], correct:2, level:"B1", module:"social" },
  { q:"'She suggested ___ a movie.' boşluğa ne gelir?", opts:["watch","watching","to watch","watched"], correct:1, level:"B1", module:"social" },
  { q:"'I wish I ___ speak French fluently.' boşluğa ne gelir?", opts:["can","could","would","should"], correct:1, level:"B1", module:"social" },
  { q:"'despite' kelimesinin anlamı nedir?", opts:["...den dolayı","...e rağmen","...e göre","bundan başka"], correct:1, level:"B1", module:"social" },
  { q:"'The movie was ___ boring that I fell asleep.' boşluğa?", opts:["too","so","such","very"], correct:1, level:"B1", module:"social" },
  { q:"'He's been working here ___ 2015.' boşluğa ne gelir?", opts:["for","since","from","during"], correct:1, level:"B1", module:"social" },
  { q:"'I'm used to ___ early.' boşluğa ne gelir?", opts:["wake","waking","woke","waken"], correct:1, level:"B1", module:"social" },
  { q:"'reluctant' kelimesinin anlamı nedir?", opts:["isteksiz","ilgili","güvenilir","sabırsız"], correct:0, level:"B1", module:"social" },
  { q:"'He ___ have left already. His car isn't here.' boşluğa?", opts:["can","should","must","would"], correct:2, level:"B1", module:"social" },
  { q:"'I'd rather ___ at home tonight.' boşluğa ne gelir?", opts:["staying","to stay","stay","stayed"], correct:2, level:"B1", module:"social" },
  { q:"'Run into' deyiminin anlamı nedir?", opts:["koşarak girmek","tesadüfen karşılaşmak","kaçmak","takip etmek"], correct:1, level:"B1", module:"social" },
  { q:"'The exam was much harder ___ I expected.' boşluğa?", opts:["that","than","then","as"], correct:1, level:"B1", module:"social" },
  { q:"'I haven't seen her ___ last Monday.' boşluğa?", opts:["for","from","since","during"], correct:2, level:"B1", module:"social" },
  { q:"'break the ice' deyiminin anlamı nedir?", opts:["buzları kırmak (fiziksel)","ortamı yumuşatmak","soğuk davranmak","zor duruma düşmek"], correct:1, level:"B1", module:"social" },
  { q:"'You ___ told me earlier!' (keşke söyleseydin) boşluğa?", opts:["must have","could have","should have","would have"], correct:2, level:"B1", module:"social" },

  // ===== ACADEMIC (B2) =====
  { q:"'Furthermore' kelimesinin akademik metinde işlevi nedir?", opts:["Zıtlık belirtir","Ek bilgi ekler","Sonuç belirtir","Örnek verir"], correct:1, level:"B2", module:"academic" },
  { q:"'The results ___ that the hypothesis was correct.' boşluğa?", opts:["indicated","indicating","indicate to","indicates at"], correct:0, level:"B2", module:"academic" },
  { q:"'phenomenon' kelimesinin çoğul hali nedir?", opts:["phenomenons","phenomenas","phenomena","phenomenies"], correct:2, level:"B2", module:"academic" },
  { q:"Akademik yazıda hangi ifade tercih edilir?", opts:["I think this is wrong.","This appears to be inaccurate.","This is totally wrong.","Everyone knows this is wrong."], correct:1, level:"B2", module:"academic" },
  { q:"'criterion' kelimesinin çoğul hali nedir?", opts:["criterions","criterias","criteria","criteriums"], correct:2, level:"B2", module:"academic" },
  { q:"'Nevertheless' ne anlama gelir?", opts:["Bunun yanında","Buna rağmen/yine de","Sonuç olarak","Örneğin"], correct:1, level:"B2", module:"academic" },
  { q:"'The data ___ collected over a period of six months.' boşluğa?", opts:["was","were","is","has"], correct:1, level:"B2", module:"academic" },
  { q:"Paragraf başında 'On the other hand' kullanıldığında ne yapılır?", opts:["Özet verilir","Zıt görüş sunulur","Örnek verilir","Sonuç çıkarılır"], correct:1, level:"B2", module:"academic" },
  { q:"'analyse' kelimesinin isim hali nedir?", opts:["analysion","analysment","analysis","analyser"], correct:2, level:"B2", module:"academic" },
  { q:"Akademik yazıda 'In conclusion' ne zaman kullanılır?", opts:["Giriş paragrafında","Gelişme paragrafında","Sonuç paragrafında","Her yerde"], correct:2, level:"B2", module:"academic" },

  // ===== IELTS READING (B1-B2) =====
  { q:"[IELTS Reading] 'Skimming' tekniği ne için kullanılır?", opts:["Detaylı bilgi bulmak","Genel fikir edinmek","Belirli kelime aramak","Yazarın tonunu anlamak"], correct:1, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] 'Scanning' tekniği ne için kullanılır?", opts:["Genel anlam çıkarmak","Spesifik bilgi/kelime bulmak","Paragraf özetlemek","Yazar fikrini anlamak"], correct:1, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] True/False/Not Given sorularında 'Not Given' ne demektir?", opts:["Bilgi yanlış","Bilgi doğru ama eksik","Metinde bu bilgi hiç yok","Bilgi belirsiz"], correct:2, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] Matching headings sorusunda ilk ne yapmalısınız?", opts:["Tüm metni okumak","Her paragrafın ilk ve son cümlesini okumak","Heading listesini ezberlemek","Rastgele eşleştirmek"], correct:1, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] 'Paraphrase' ne demektir?", opts:["Kelimesi kelimesine çeviri","Aynı anlamı farklı kelimelerle ifade etme","Metni kısaltma","Yeni bilgi ekleme"], correct:1, level:"B2", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] Bir paragrafta 'topic sentence' genelde nerededir?", opts:["Ortada","Sonda","Başta","Değişir, kuralı yok"], correct:2, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] 'However' gördüğünüzde ne beklemelisiniz?", opts:["Ek bilgi","Zıt/karşıt bir fikir","Bir örnek","Bir sonuç"], correct:1, level:"B1", module:"ielts-reading", tag:"IELTS" },
  { q:"[IELTS Reading] Summary completion sorusunda kelime sınırına dikkat etmezseniz ne olur?", opts:["Yarım puan alırsınız","Puan kazanamazsınız","Sınav iptal olur","Fark etmez"], correct:1, level:"B1", module:"ielts-reading", tag:"IELTS" },

  // ===== IELTS WRITING (B1-B2) =====
  { q:"[IELTS Writing] Task 1'de grafik tanımlarken hangi zaman kullanılır?", opts:["Present continuous","Present simple veya past simple","Future tense","Present perfect"], correct:1, level:"B1", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] Task 2'de kaç kelime yazmalısınız?", opts:["En az 150","En az 200","En az 250","En az 300"], correct:2, level:"B1", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] 'Firstly, Secondly, Finally' ne tür bağlaçlardır?", opts:["Zıtlık bağlaçları","Sıralama bağlaçları","Neden-sonuç bağlaçları","Karşılaştırma bağlaçları"], correct:1, level:"B1", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] Task 2'de 'discuss both views' sorusunda ne yapmalısınız?", opts:["Sadece kendi görüşünüzü yazın","Her iki tarafı da tartışıp kendi görüşünüzü belirtin","Sadece bir tarafı savunun","Tarafsız kalın"], correct:1, level:"B2", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] Hangi ifade akademik yazıda uygun DEĞİLDİR?", opts:["It is widely believed that...","Research suggests that...","I reckon that...","Evidence indicates that..."], correct:2, level:"B2", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] 'whereas' ne tür bir bağlaçtır?", opts:["Ekleme","Karşılaştırma/zıtlık","Neden","Sonuç"], correct:1, level:"B1", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] Task 1'de kendi fikrinizi belirtmeli misiniz?", opts:["Evet, mutlaka","Hayır, sadece verileri raporlayın","Bazen","Sonuç paragrafında"], correct:1, level:"B1", module:"ielts-writing", tag:"IELTS" },
  { q:"[IELTS Writing] 'a significant increase' ne demektir?", opts:["Küçük bir düşüş","Önemli bir artış","Sabit kalma","Dalgalanma"], correct:1, level:"B1", module:"ielts-writing", tag:"IELTS" },

  // ===== IELTS LISTENING (B1-B2) =====
  { q:"[IELTS Listening] Section 1 genelde ne hakkındadır?", opts:["Akademik ders","Günlük diyalog (rezervasyon, kayıt vb.)","Grup tartışması","Monolog"], correct:1, level:"B1", module:"ielts-listening", tag:"IELTS" },
  { q:"[IELTS Listening] Cevabınızda spelling hatası yaparsanız ne olur?", opts:["Yarım puan","Sıfır puan","Kabul edilir","Sınava bağlı"], correct:1, level:"B1", module:"ielts-listening", tag:"IELTS" },
  { q:"[IELTS Listening] 'Distractor' nedir?", opts:["Doğru cevap","Yanlış yönlendiren bilgi","Soru tekrarı","Ek bilgi"], correct:1, level:"B1", module:"ielts-listening", tag:"IELTS" },
  { q:"[IELTS Listening] Section 4 genelde ne hakkındadır?", opts:["Telefon görüşmesi","İki kişi arası diyalog","Akademik monolog/ders","Grup çalışması"], correct:2, level:"B2", module:"ielts-listening", tag:"IELTS" },
  { q:"[IELTS Listening] Form completion sorusunda büyük/küçük harf önemli mi?", opts:["Evet, çok önemli","Hayır, önemli değil","Sadece isimler için","Sadece ülkeler için"], correct:1, level:"B1", module:"ielts-listening", tag:"IELTS" },
  { q:"[IELTS Listening] 'signpost words' (yön gösteren kelimeler) ne işe yarar?", opts:["Konunun değiştiğini gösterir","Soru numarasını belirtir","Doğru cevabı verir","Zaman kazandırır"], correct:0, level:"B1", module:"ielts-listening", tag:"IELTS" },

  // ===== IELTS SPEAKING (B1-C1) =====
  { q:"[IELTS Speaking] Part 2'de ne kadar konuşmalısınız?", opts:["30 saniye","1 dakika","1-2 dakika","3-4 dakika"], correct:2, level:"B1", module:"ielts-speaking", tag:"IELTS" },
  { q:"[IELTS Speaking] Part 2'de size ne verilir?", opts:["Bir soru listesi","Bir konu kartı (cue card)","Bir metin","Bir resim"], correct:1, level:"B1", module:"ielts-speaking", tag:"IELTS" },
  { q:"[IELTS Speaking] Fluency (akıcılık) puanını ne düşürür?", opts:["Uzun cevaplar","Doğal duraklamalar","Uzun ve sık 'umm/ahh' kullanımı","Bağlaç kullanmak"], correct:2, level:"B1", module:"ielts-speaking", tag:"IELTS" },
  { q:"[IELTS Speaking] 'I'd say that...' ne tür bir ifadedir?", opts:["Kesin yargı","Yumuşatılmış fikir ifadesi","Soru sorma","Özür dileme"], correct:1, level:"B1", module:"ielts-speaking", tag:"IELTS" },
  { q:"[IELTS Speaking] Part 3'te ne tür sorular gelir?", opts:["Kişisel sorular","Soyut/tartışma soruları","Günlük rutinler","Aile hakkında"], correct:1, level:"B2", module:"ielts-speaking", tag:"IELTS" },
  { q:"[IELTS Speaking] Bilmediğiniz bir kelimeyi hatırlayamadığınızda ne yapmalısınız?", opts:["Sessiz kalın","Türkçe söyleyin","Farklı kelimelerle açıklayın (paraphrase)","Soruyu geçin"], correct:2, level:"B1", module:"ielts-speaking", tag:"IELTS" },

  // ===== TURKISH-SPECIFIC ERRORS (all levels) =====
  { q:"Türkçe'de cinsiyet farkı yoktur. Doğru olan hangisi?", opts:["He is a doctor. (kadın için)","She is a doctor. (kadın için)","It is a doctor. (kadın için)","They is a doctor. (kadın için)"], correct:1, level:"A1", module:"foundations", tag:"TR" },
  { q:"Türkler sık karıştırır: 'I am agree with you.' Doğrusu?", opts:["I am agree with you.","I agree with you.","I do agree to you.","I am agreeing you."], correct:1, level:"A2", module:"foundations", tag:"TR" },
  { q:"Türkçe'de article yoktur. Doğru olan hangisi?", opts:["I want to be engineer.","I want to be a engineer.","I want to be an engineer.","I want to be the engineer."], correct:2, level:"A1", module:"foundations", tag:"TR" },
  { q:"'He/She' yerine Türkler genelde ne yapar?", opts:["Doğru kullanır","Her zaman 'he' der","Her zaman 'it' der","Karıştırır, çünkü Türkçe'de 'o' hem erkek hem kadın"], correct:3, level:"A1", module:"foundations", tag:"TR" },
  { q:"'I am living in Istanbul since 2010.' Doğrusu?", opts:["I am living in Istanbul since 2010.","I live in Istanbul since 2010.","I have been living in Istanbul since 2010.","I was living in Istanbul since 2010."], correct:2, level:"B1", module:"social", tag:"TR" },
  { q:"'He said me that...' Doğru olan hangisi?", opts:["He said me that...","He told to me that...","He told me that...","He said to me to that..."], correct:2, level:"A2", module:"daily-life", tag:"TR" },
  { q:"Türkçe söz dizimi SOV'dir. İngilizce'de doğru sıra?", opts:["I the book read.","I read the book.","The book I read.","Read I the book."], correct:1, level:"A1", module:"foundations", tag:"TR" },
  { q:"'information' kelimesi sayılabilir mi?", opts:["Evet: informations","Hayır: information (sayılamaz)","İkisi de olur","Sadece çoğulda"], correct:1, level:"A2", module:"foundations", tag:"TR" },
  { q:"'I didn't went there.' Doğrusu?", opts:["I didn't went there.","I didn't go there.","I don't went there.","I not go there."], correct:1, level:"A1", module:"foundations", tag:"TR" },
  { q:"'make' ve 'do' farkı: 'Hata yapmak' nasıl denir?", opts:["do a mistake","make a mistake","have a mistake","take a mistake"], correct:1, level:"A2", module:"daily-life", tag:"TR" },
  { q:"'I'm afraid ___ spiders.' boşluğa ne gelir?", opts:["from","of","about","with"], correct:1, level:"A2", module:"social", tag:"TR" },
  { q:"Türkçe'de 'var/yok' yapısı İngilizce'de nasıl karşılanır?", opts:["It has a book on the table.","There is a book on the table.","A book has on the table.","On the table has a book."], correct:1, level:"A1", module:"foundations", tag:"TR" },
];

// Get quiz bank questions filtered by user level and completed modules
function getQuizBankQuestions(userLevel, completedLessonIds, weakAreas) {
  const levelMap = {1:'A1',2:'A2',3:'B1',4:'B2',5:'C1'};
  const targetLevel = levelMap[userLevel] || 'A2';
  const levelOrder = ['A0','A1','A2','B1','B2','C1'];
  const targetIdx = levelOrder.indexOf(targetLevel);

  // Determine which modules user has seen
  const seenModules = new Set();
  (completedLessonIds || []).forEach(lid => {
    const l = LESSON_DATA[lid] ? LESSON_DATA[lid]() : null;
    if (l && l.unitId) {
      for (const modId in UNITS) {
        if ((UNITS[modId] || []).some(u => u.id === l.unitId)) {
          seenModules.add(modId);
          break;
        }
      }
    }
  });

  // Weak area module mapping
  const weakModules = new Set();
  const wMap = {listening:['ielts-listening'],reading:['ielts-reading'],writing:['ielts-writing','academic'],speaking:['ielts-speaking'],vocabulary:['foundations','daily-life','social'],grammar:['foundations','daily-life']};
  (weakAreas || []).forEach(wa => (wMap[wa]||[]).forEach(m => weakModules.add(m)));

  // Filter and score questions
  return QUIZ_BANK
    .filter(q => {
      const qIdx = levelOrder.indexOf(q.level);
      return qIdx <= targetIdx + 1; // Allow one level above target
    })
    .map(q => {
      let priority = levelOrder.indexOf(q.level) + 1;
      if (weakModules.has(q.module)) priority += 3;
      if (seenModules.has(q.module)) priority += 1;
      if (q.tag === 'TR') priority += 2; // Turkish-specific errors are always high priority
      return { ...q, priority };
    });
}
