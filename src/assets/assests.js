export const profiles = [
  { name: "SEO", aptiLevel: "Basic" },
  { name: "Frontend Developer", aptiLevel: "Intermediate" },
  { name: "Backend Developer", aptiLevel: "Advanced" },
  { name: "WordPress Developer", aptiLevel: "Basic" },
  { name: "CRM", aptiLevel: "Intermediate" },
  { name: "QA", aptiLevel: "Intermediate" },
  { name: "UI/UX", aptiLevel: "Basic" },
  { name: "App Script", aptiLevel: "Intermediate" },
];

export const languages = [
  {
    name: "JavaScript",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "WordPress Developer",
      "App Script",
    ],
  },
  {
    name: "HTML",
    roles: ["Frontend Developer", "WordPress Developer", "SEO"],
  },
  {
    name: "CSS",
    roles: ["Frontend Developer", "WordPress Developer", "UI/UX"],
  },
  {
    name: "React",
    roles: ["Frontend Developer", "UI/UX"],
  },
  {
    name: "Node.js",
    roles: ["Backend Developer"],
  },
  {
    name: "PHP",
    roles: ["Backend Developer", "WordPress Developer", "CRM"],
  },
  {
    name: "SQL",
    roles: ["Backend Developer", "CRM", "QA"],
  },
  {
    name: "Python",
    roles: ["Backend Developer", "QA"],
  },
  {
    name: "Figma",
    roles: ["UI/UX"],
  },
  {
    name: "Google App Script",
    roles: ["App Script", "CRM"],
  },
];

// =================== BASIC QUESTIONS (20) ===================
export const basicQuestions = [
  {
    id: 1,
    question:
      "If 5 pencils and 3 pens cost $21 and a pencil costs $2, find the cost of a pen.",
    options: ["$3", "$4", "$5", "$6"],
    correctAnswer: "$5",
  },
  {
    id: 2,
    question: "The sum of three consecutive numbers is 72. Find the numbers.",
    options: ["23,24,25", "24,25,26", "22,23,24", "25,26,27"],
    correctAnswer: "23,24,25",
  },
  {
    id: 3,
    question: "If 12% of a number is 36, find the number.",
    options: ["200", "250", "300", "350"],
    correctAnswer: "300",
  },
  {
    id: 4,
    question:
      "A train travels 60 km in 1 hour and 30 minutes. Find its speed in km/h.",
    options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
    correctAnswer: "40 km/h",
  },
  {
    id: 5,
    question: "Find the missing number: 3, 6, 11, 18, ?",
    options: ["25", "26", "27", "28"],
    correctAnswer: "27",
  },
  {
    id: 6,
    question:
      "A shopkeeper sells an item for $150 at 20% profit. Find the cost price.",
    options: ["$120", "$125", "$130", "$135"],
    correctAnswer: "$125",
  },
  {
    id: 7,
    question:
      "The average of 5 numbers is 20. If one number is 30, find the average of the remaining four.",
    options: ["17.5", "18", "18.5", "19"],
    correctAnswer: "17.5",
  },
  {
    id: 8,
    question: "If x + 3 = 10, find the value of 2x + 5.",
    options: ["15", "17", "19", "20"],
    correctAnswer: "19",
  },
  {
    id: 9,
    question:
      "A box contains 6 red, 4 blue, and 5 green balls. Probability of picking a red ball?",
    options: ["6/15", "6/14", "6/10", "1/3"],
    correctAnswer: "6/15",
  },
  {
    id: 10,
    question:
      "If a number is increased by 20%, it becomes 72. Find the number.",
    options: ["55", "60", "65", "70"],
    correctAnswer: "60",
  },
  {
    id: 11,
    question:
      "A sum of money doubles itself in 5 years at simple interest. Find the rate of interest.",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: "20%",
  },
  {
    id: 12,
    question: "Find the odd one: 16, 23, 31, 40, 50",
    options: ["16", "23", "31", "40"],
    correctAnswer: "40",
  },
  {
    id: 13,
    question:
      "The ratio of two numbers is 4:5. If their sum is 36, find the numbers.",
    options: ["16 & 20", "18 & 18", "14 & 22", "15 & 21"],
    correctAnswer: "16 & 20",
  },
  {
    id: 14,
    question:
      "If 7 workers can finish a job in 12 days, how many days will 4 workers take?",
    options: ["18", "20", "21", "22"],
    correctAnswer: "21",
  },
  {
    id: 15,
    question:
      "A person spends 2/5 of his salary and saves $600. Find his salary.",
    options: ["$1000", "$1200", "$1500", "$2000"],
    correctAnswer: "$1500",
  },
  {
    id: 16,
    question: "Find the next number: 2, 5, 10, 17, ?",
    options: ["24", "26", "30", "32"],
    correctAnswer: "26",
  },
  {
    id: 17,
    question: "If 5x - 2 = 3x + 8, find x.",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    id: 18,
    question:
      "A car travels 180 km in 3 hours. If speed is increased by 20 km/h, how much time will it take?",
    options: ["2.5 h", "2.75 h", "3 h", "3.5 h"],
    correctAnswer: "2.5 h",
  },
  {
    id: 19,
    question: "The perimeter of a square is 48 cm. Find its area.",
    options: ["144 cm²", "156 cm²", "160 cm²", "196 cm²"],
    correctAnswer: "144 cm²",
  },
  {
    id: 20,
    question: "If 40% of a number is 48, find 25% of the number.",
    options: ["20", "25", "30", "35"],
    correctAnswer: "30",
  },
];

// =================== INTERMEDIATE QUESTIONS (20) ===================
export const intermediateQuestions = [
  {
    id: 1,
    question: "If 3x + 5 = 20, find x.",
    options: ["3", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    id: 2,
    question:
      "A train travels 120 km in 2 hours and returns in 3 hours. Find average speed.",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    correctAnswer: "54.55 km/h",
  },
  {
    id: 3,
    question: "Find the missing number: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    correctAnswer: "30",
  },
  {
    id: 4,
    question:
      "The average of 5 numbers is 15. If one number is 20, find average of remaining four.",
    options: ["13", "14", "15", "16"],
    correctAnswer: "14",
  },
  {
    id: 5,
    question:
      "A bag contains 4 red, 5 blue, and 6 green balls. Probability of picking a green ball?",
    options: ["6/15", "5/15", "4/15", "1/3"],
    correctAnswer: "6/15",
  },
  {
    id: 6,
    question: "Find x if 2x + 3y = 12 and x - y = 2, y= ?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "2",
  },
  {
    id: 7,
    question:
      "The sum of squares of 3 consecutive numbers is 365. Find the numbers.",
    options: ["11,12,13", "12,13,14", "10,11,12", "13,14,15"],
    correctAnswer: "11,12,13",
  },
  {
    id: 8,
    question:
      "A sum of $1000 is invested at 5% simple interest per year. Find interest for 3 years.",
    options: ["$150", "$140", "$160", "$170"],
    correctAnswer: "$150",
  },
  {
    id: 9,
    question: "Find the next number: 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "49", "64"],
    correctAnswer: "36",
  },
  {
    id: 10,
    question:
      "A train 200 m long crosses a pole in 20 seconds. Find its speed.",
    options: ["30 km/h", "36 km/h", "40 km/h", "42 km/h"],
    correctAnswer: "36 km/h",
  },
  {
    id: 11,
    question: "If 60% of a number is 48, find 75% of the number.",
    options: ["60", "54", "66", "72"],
    correctAnswer: "60",
  },
  {
    id: 12,
    question: "The ratio of two numbers is 5:6. If sum is 66, find numbers.",
    options: ["30 & 36", "25 & 41", "28 & 38", "35 & 31"],
    correctAnswer: "30 & 36",
  },
  {
    id: 13,
    question: "If a+b=12 and ab=20, find a² + b².",
    options: ["64", "44", "56", "60"],
    correctAnswer: "64",
  },
  {
    id: 14,
    question:
      "A person buys an article for $200 and sells for $250. Find profit percentage.",
    options: ["20%", "25%", "22%", "30%"],
    correctAnswer: "25%",
  },
  {
    id: 15,
    question:
      "A tank is filled in 6 hours. If two taps are opened, one fills in 8h and another in 12h, find time to fill tank together.",
    options: ["4h", "5h", "6h", "7h"],
    correctAnswer: "4h",
  },
  {
    id: 16,
    question: "Find the odd one: 21, 33, 45, 58, 63",
    options: ["21", "33", "45", "58"],
    correctAnswer: "58",
  },
  {
    id: 17,
    question: "If 5x - 2y = 20 and x + y = 10, find x and y.",
    options: ["x=6, y=4", "x=5, y=5", "x=4, y=6", "x=7, y=3"],
    correctAnswer: "x=6, y=4",
  },
  {
    id: 18,
    question:
      "A sum of money triples itself in 10 years at simple interest. Find rate of interest.",
    options: ["15%", "20%", "25%", "30%"],
    correctAnswer: "20%",
  },
  {
    id: 19,
    question: "Find the missing number: 5, 12, 24, 41, ?",
    options: ["60", "62", "65", "70"],
    correctAnswer: "62",
  },
  {
    id: 20,
    question:
      "A person walks 5 km north, 3 km east, and 2 km south. Find distance from starting point.",
    options: ["4 km", "5 km", "6 km", "7 km"],
    correctAnswer: "4 km",
  },
];

// =================== ADVANCED QUESTIONS (10) ===================
export const advancedQuestions = [
  {
    id: 1,
    question: "If 2x + 3y = 12 and x + y = 5, find x and y.",
    options: ["x=3, y=2", "x=2, y=3", "x=1, y=4", "x=4, y=1"],
    correctAnswer: "x=3, y=2",
  },
  {
    id: 2,
    question: "The sum of first 20 natural numbers is?",
    options: ["200", "210", "220", "230"],
    correctAnswer: "210",
  },
  {
    id: 3,
    question: "Solve: 3x² - 12x + 9 = 0",
    options: ["x=1 or 3", "x=3 or 1", "x=1 or -3", "x= -1 or 3"],
    correctAnswer: "x=1 or 3",
  },
  {
    id: 4,
    question: "If a+b+c=12 and a²+b²+c²=50, find ab+bc+ca",
    options: ["44", "46", "48", "50"],
    correctAnswer: "44",
  },
  {
    id: 5,
    question:
      "A boat goes 20 km downstream in 2 hours and returns in 4 hours. Find speed in still water.",
    options: ["5 km/h", "6 km/h", "7 km/h", "8 km/h"],
    correctAnswer: "6 km/h",
  },
  {
    id: 6,
    question: "If x² - 5x + 6 = 0, find x.",
    options: ["2 or 3", "1 or 6", "3 or 2", "2 or -3"],
    correctAnswer: "2 or 3",
  },
  {
    id: 7,
    question:
      "The sum of squares of 3 consecutive numbers is 365. Find the numbers.",
    options: ["10,11,12", "11,12,13", "12,13,14", "13,14,15"],
    correctAnswer: "11,12,13",
  },
  {
    id: 8,
    question:
      "A train running at 60 km/h crosses a pole in 9 seconds. Find its length.",
    options: ["150 m", "160 m", "180 m", "200 m"],
    correctAnswer: "150 m",
  },
  {
    id: 9,
    question: "If probability of an event is 1/4, find odds in favor.",
    options: ["1:3", "3:1", "1:4", "4:1"],
    correctAnswer: "1:3",
  },
  {
    id: 10,
    question:
      "A sum of money doubles itself in 5 years at simple interest. Find rate of interest.",
    options: ["15%", "18%", "20%", "25%"],
    correctAnswer: "20%",
  },
];
//SEO questions
export const SEOQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What does SEO stand for?",
    options: [
      "Search Engine Optimization",
      "Social Engagement Optimization",
      "Search Experience Order",
      "Systematic Engine Operation",
    ],
    correctAnswer: "Search Engine Optimization",
  },
  {
    id: 2,
    question: "Which tag is used for the title of a webpage?",
    options: ["<title>", "<head>", "<meta>", "<h1>"],
    correctAnswer: "<title>",
  },
  {
    id: 3,
    question: "Which of the following is a ranking factor for Google?",
    options: [
      "Keyword stuffing",
      "Page speed",
      "Hidden text",
      "Duplicate content",
    ],
    correctAnswer: "Page speed",
  },
  {
    id: 4,
    question: "What is a backlink?",
    options: [
      "A link from your page to another",
      "A link from another page to yours",
      "A broken link",
      "A social media link",
    ],
    correctAnswer: "A link from another page to yours",
  },
  {
    id: 5,
    question: "Which is the most important meta tag for SEO?",
    options: ["Meta keywords", "Meta description", "Meta robots", "Meta title"],
    correctAnswer: "Meta description",
  },
  {
    id: 6,
    question: "Which search engine dominates global search market?",
    options: ["Bing", "Yahoo", "Google", "DuckDuckGo"],
    correctAnswer: "Google",
  },

  // Medium (15)
  {
    id: 7,
    question: "What is the purpose of robots.txt file?",
    options: [
      "To block search engines from indexing pages",
      "To improve page speed",
      "To increase backlinks",
      "To manage keywords",
    ],
    correctAnswer: "To block search engines from indexing pages",
  },
  {
    id: 8,
    question: "Which SEO technique is considered black-hat?",
    options: [
      "Quality content creation",
      "Keyword stuffing",
      "Guest posting",
      "Improving page speed",
    ],
    correctAnswer: "Keyword stuffing",
  },
  {
    id: 9,
    question: "What is canonicalization in SEO?",
    options: [
      "Redirecting old URLs to new ones",
      "Choosing the preferred URL among duplicates",
      "Adding meta descriptions",
      "Optimizing images",
    ],
    correctAnswer: "Choosing the preferred URL among duplicates",
  },
  {
    id: 10,
    question: "Which metric indicates user engagement on a website?",
    options: ["Bounce rate", "Page rank", "Meta description", "Backlink count"],
    correctAnswer: "Bounce rate",
  },
  {
    id: 11,
    question: "What is a long-tail keyword?",
    options: [
      "A keyword with one word",
      "A keyword with more than one word",
      "A meta keyword",
      "A hidden keyword",
    ],
    correctAnswer: "A keyword with more than one word",
  },
  {
    id: 12,
    question: "What is the importance of alt text in images?",
    options: [
      "Improves SEO",
      "Decorative purpose",
      "Adds keyword stuffing",
      "Slows down page",
    ],
    correctAnswer: "Improves SEO",
  },
  {
    id: 13,
    question: "Which tool can help analyze website traffic?",
    options: ["Google Analytics", "Photoshop", "Canva", "Figma"],
    correctAnswer: "Google Analytics",
  },
  {
    id: 14,
    question: "What is link juice?",
    options: [
      "The value passed from one page to another via backlinks",
      "A type of CSS property",
      "An algorithm for ranking images",
      "A broken link report",
    ],
    correctAnswer: "The value passed from one page to another via backlinks",
  },
  {
    id: 15,
    question: "Which is better for SEO: HTTP or HTTPS?",
    options: ["HTTP", "HTTPS", "Both same", "Depends on website size"],
    correctAnswer: "HTTPS",
  },
  {
    id: 16,
    question: "Which of these affects mobile SEO?",
    options: [
      "Responsive design",
      "Desktop-only design",
      "Flash content",
      "Hidden links",
    ],
    correctAnswer: "Responsive design",
  },
  {
    id: 17,
    question: "What is anchor text?",
    options: [
      "The clickable text of a hyperlink",
      "The meta title",
      "The alt text",
      "Page URL",
    ],
    correctAnswer: "The clickable text of a hyperlink",
  },
  {
    id: 18,
    question: "What is a 301 redirect?",
    options: [
      "Temporary redirect",
      "Permanent redirect",
      "Broken link",
      "Page title tag",
    ],
    correctAnswer: "Permanent redirect",
  },
  {
    id: 19,
    question: "Which factor does NOT affect SEO directly?",
    options: [
      "Content quality",
      "Backlinks",
      "Page load speed",
      "Browser color scheme",
    ],
    correctAnswer: "Browser color scheme",
  },
  {
    id: 20,
    question: "What is sitemap.xml used for?",
    options: [
      "Helps search engines crawl site",
      "Stores images",
      "Manages CSS files",
      "Shows social media links",
    ],
    correctAnswer: "Helps search engines crawl site",
  },
  {
    id: 21,
    question: "Which is better for SEO: long content or short content?",
    options: [
      "Long content",
      "Short content",
      "Both equal",
      "Depends on images",
    ],
    correctAnswer: "Long content",
  },
  {
    id: 22,
    question: "What is the ideal keyword density?",
    options: ["1-2%", "50%", "20%", "10%"],
    correctAnswer: "1-2%",
  },
  {
    id: 23,
    question: "Which metric indicates the quality of backlinks?",
    options: ["Domain Authority", "Keyword density", "Meta tags", "Alt text"],
    correctAnswer: "Domain Authority",
  },

  // Hard (9)
  {
    id: 24,
    question: "What is the difference between noindex andnofollow?",
    options: [
      "Noindex blocks indexing, nofollow blocks link juice",
      "Noindex and nofollow are same",
      "Noindex blocks CSS, nofollow blocks JS",
      "Noindex blocks images, nofollow blocks videos",
    ],
    correctAnswer: "Noindex blocks indexing, nofollow blocks link juice",
  },
  {
    id: 25,
    question: "Which algorithm update is focused on link quality?",
    options: ["Panda", "Penguin", "Hummingbird", "Fred"],
    correctAnswer: "Penguin",
  },
  {
    id: 26,
    question: "What is structured data in SEO?",
    options: [
      "Code added to help search engines understand content",
      "A type of backlink",
      "CSS styling",
      "JavaScript library",
    ],
    correctAnswer: "Code added to help search engines understand content",
  },
  {
    id: 27,
    question: "What is canonical tag used for?",
    options: [
      "Prevent duplicate content issues",
      "Improve page speed",
      "Manage meta description",
      "Optimize images",
    ],
    correctAnswer: "Prevent duplicate content issues",
  },
  {
    id: 28,
    question:
      "Which metric measures click-through rate in Google Search Console?",
    options: ["CTR", "CPC", "DA", "Bounce Rate"],
    correctAnswer: "CTR",
  },
  {
    id: 29,
    question: "What is the primary purpose of schema markup?",
    options: [
      "Enhance rich snippets in SERP",
      "Improve backlinks",
      "Increase page load speed",
      "Hide keywords",
    ],
    correctAnswer: "Enhance rich snippets in SERP",
  },
  {
    id: 30,
    question: "Which Google update focuses on mobile-first indexing?",
    options: ["Mobilegeddon", "Penguin", "Panda", "Fred"],
    correctAnswer: "Mobilegeddon",
  },
];
// =================== Frontend Developer ===================
export const FrontendQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which tag is used for a paragraph in HTML?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    correctAnswer: "<p>",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    id: 4,
    question: "Which property changes text color in CSS?",
    options: ["color", "font-color", "text-color", "foreground-color"],
    correctAnswer: "color",
  },
  {
    id: 5,
    question: "Which HTML tag is used for images?",
    options: ["<img>", "<image>", "<src>", "<picture>"],
    correctAnswer: "<img>",
  },
  {
    id: 6,
    question: "Which symbol is used for IDs in CSS?",
    options: ["#", ".", "*", "@"],
    correctAnswer: "#",
  },

  // Medium (15)
  {
    id: 7,
    question: "Which CSS property controls the element's width?",
    options: ["width", "height", "size", "length"],
    correctAnswer: "width",
  },
  {
    id: 8,
    question: "What is the default display of a <div> element?",
    options: ["block", "inline", "inline-block", "flex"],
    correctAnswer: "block",
  },
  {
    id: 9,
    question: "Which attribute is used to link an external CSS file?",
    options: ["href", "src", "rel", "type"],
    correctAnswer: "rel",
  },
  {
    id: 10,
    question: "Which property is used for rounded corners in CSS?",
    options: ["border-radius", "border-style", "corner", "radius"],
    correctAnswer: "border-radius",
  },
  {
    id: 11,
    question: "What does 'em' unit mean in CSS?",
    options: [
      "Relative to font-size",
      "Absolute size in pixels",
      "Relative to viewport",
      "None",
    ],
    correctAnswer: "Relative to font-size",
  },
  {
    id: 12,
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<h6>", "<h3>", "<title>"],
    correctAnswer: "<h1>",
  },
  {
    id: 13,
    question: "Which pseudo-class represents the hover state?",
    options: [":hover", ":active", ":focus", ":visited"],
    correctAnswer: ":hover",
  },
  {
    id: 14,
    question: "Which property sets the spacing between lines of text?",
    options: ["line-height", "letter-spacing", "text-spacing", "word-spacing"],
    correctAnswer: "line-height",
  },
  {
    id: 15,
    question: "Which attribute specifies inline styles?",
    options: ["style", "class", "id", "src"],
    correctAnswer: "style",
  },
  {
    id: 16,
    question: "What is the purpose of the <link> tag?",
    options: [
      "To link external resources",
      "To create hyperlinks",
      "To style images",
      "To define scripts",
    ],
    correctAnswer: "To link external resources",
  },
  {
    id: 17,
    question: "Which unit is relative to the viewport width?",
    options: ["vw", "vh", "px", "em"],
    correctAnswer: "vw",
  },
  {
    id: 18,
    question: "Which property controls the stacking order of elements?",
    options: ["z-index", "stack", "order", "layer"],
    correctAnswer: "z-index",
  },
  {
    id: 19,
    question: "What does 'flex-direction: row' do?",
    options: [
      "Aligns items horizontally",
      "Aligns items vertically",
      "Aligns items in reverse",
      "No effect",
    ],
    correctAnswer: "Aligns items horizontally",
  },
  {
    id: 20,
    question: "Which property is used for spacing inside an element?",
    options: ["padding", "margin", "border", "gap"],
    correctAnswer: "padding",
  },
  {
    id: 21,
    question: "Which method is used to select elements by class in JavaScript?",
    options: [
      "getElementsByClassName",
      "getElementById",
      "querySelectorAll",
      "getElementsByTagName",
    ],
    correctAnswer: "getElementsByClassName",
  },
  {
    id: 22,
    question: "Which method is used to attach an event listener in JavaScript?",
    options: ["addEventListener", "attachEvent", "onEvent", "bindEvent"],
    correctAnswer: "addEventListener",
  },
  {
    id: 23,
    question: "What is the default position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    correctAnswer: "static",
  },

  // Hard (9)
  {
    id: 24,
    question: "Which CSS property allows elements to overlap?",
    options: ["position", "display", "overflow", "z-index"],
    correctAnswer: "z-index",
  },
  {
    id: 25,
    question: "Which method prevents the default behavior of an event?",
    options: ["preventDefault", "stopPropagation", "returnFalse", "halt"],
    correctAnswer: "preventDefault",
  },
  {
    id: 26,
    question: "Which CSS property creates a flex container?",
    options: ["display:flex", "position:flex", "flex-direction", "float"],
    correctAnswer: "display:flex",
  },
  {
    id: 27,
    question: "What is event delegation in JavaScript?",
    options: [
      "Attaching a single event listener to a parent element to handle child events",
      "Attaching multiple listeners to child elements",
      "Preventing default event behavior",
      "A type of CSS animation",
    ],
    correctAnswer:
      "Attaching a single event listener to a parent element to handle child events",
  },
  {
    id: 28,
    question: "Which property allows text to wrap within a container?",
    options: ["word-wrap", "white-space", "text-overflow", "overflow"],
    correctAnswer: "word-wrap",
  },
  {
    id: 29,
    question: "Which CSS function calculates relative units?",
    options: ["calc()", "var()", "round()", "min()"],
    correctAnswer: "calc()",
  },
  {
    id: 30,
    question:
      "Which layout method aligns items both horizontally and vertically?",
    options: ["Flexbox", "Grid", "Block", "Inline"],
    correctAnswer: "Flexbox",
  },
];
// =================== Backend Developer ===================
export const BackendQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "Which language is primarily used for backend development?",
    options: ["Python", "HTML", "CSS", "JavaScript"],
    correctAnswer: "Python",
  },
  {
    id: 2,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interaction",
      "Application Process Integration",
      "Automatic Program Invocation",
    ],
    correctAnswer: "Application Programming Interface",
  },
  {
    id: 3,
    question: "Which database is relational?",
    options: ["MySQL", "MongoDB", "Cassandra", "Redis"],
    correctAnswer: "MySQL",
  },
  {
    id: 4,
    question: "Which of these is a backend framework?",
    options: ["Django", "React", "Vue", "Angular"],
    correctAnswer: "Django",
  },
  {
    id: 5,
    question: "Which HTTP method is used to retrieve data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
  },
  {
    id: 6,
    question: "What does CRUD stand for?",
    options: [
      "Create, Read, Update, Delete",
      "Create, Run, Update, Delete",
      "Check, Read, Update, Delete",
      "Control, Read, Update, Deploy",
    ],
    correctAnswer: "Create, Read, Update, Delete",
  },

  // Medium (15)
  {
    id: 7,
    question: "Which HTTP status code represents 'Not Found'?",
    options: ["404", "200", "500", "301"],
    correctAnswer: "404",
  },
  {
    id: 8,
    question: "Which database is NoSQL?",
    options: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    id: 9,
    question: "What is the purpose of middleware?",
    options: [
      "Handle requests/responses in between server and client",
      "Store database queries",
      "Handle front-end rendering",
      "Optimize CSS",
    ],
    correctAnswer: "Handle requests/responses in between server and client",
  },
  {
    id: 10,
    question: "Which of these is used for authentication?",
    options: ["JWT", "HTML", "CSS", "JSON"],
    correctAnswer: "JWT",
  },
  {
    id: 11,
    question: "Which SQL command is used to remove data?",
    options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
    correctAnswer: "DELETE",
  },
  {
    id: 12,
    question: "Which protocol is commonly used for secure communication?",
    options: ["HTTPS", "HTTP", "FTP", "SMTP"],
    correctAnswer: "HTTPS",
  },
  {
    id: 13,
    question: "Which is a type of join in SQL?",
    options: ["INNER JOIN", "SIDE JOIN", "TOP JOIN", "MIDDLE JOIN"],
    correctAnswer: "INNER JOIN",
  },
  {
    id: 14,
    question: "Which language is used for server-side scripting in Node.js?",
    options: ["JavaScript", "Python", "PHP", "Ruby"],
    correctAnswer: "JavaScript",
  },
  {
    id: 15,
    question: "Which command is used to create a new database in MySQL?",
    options: [
      "CREATE DATABASE",
      "NEW DATABASE",
      "ADD DATABASE",
      "INIT DATABASE",
    ],
    correctAnswer: "CREATE DATABASE",
  },
  {
    id: 16,
    question: "Which type of index improves query performance?",
    options: ["B-Tree", "Hash", "Array", "Stack"],
    correctAnswer: "B-Tree",
  },
  {
    id: 17,
    question: "Which is used to manage database transactions?",
    options: ["COMMIT/ROLLBACK", "SAVE/RESTORE", "INSERT/UPDATE", "GET/POST"],
    correctAnswer: "COMMIT/ROLLBACK",
  },
  {
    id: 18,
    question: "Which server-side architecture is widely used?",
    options: ["MVC", "DOM", "Flexbox", "Responsive"],
    correctAnswer: "MVC",
  },
  {
    id: 19,
    question: "What does ORM stand for?",
    options: [
      "Object Relational Mapping",
      "Online Resource Management",
      "Operational Read Management",
      "Object Read Method",
    ],
    correctAnswer: "Object Relational Mapping",
  },
  {
    id: 20,
    question: "Which command is used to update existing data in SQL?",
    options: ["UPDATE", "MODIFY", "SET", "CHANGE"],
    correctAnswer: "UPDATE",
  },
  {
    id: 21,
    question: "Which database supports JSON documents?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    id: 22,
    question: "What is a stored procedure?",
    options: [
      "Predefined SQL code stored in DB",
      "A type of backend server",
      "Front-end component",
      "A CSS class",
    ],
    correctAnswer: "Predefined SQL code stored in DB",
  },

  // Hard (9)
  {
    id: 23,
    question: "What is ACID in databases?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Accuracy, Consistency, Index, Data",
      "Atomic, Computed, Indexed, Durable",
      "Authentication, Control, Integrity, Database",
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability",
  },
  {
    id: 24,
    question: "Which is an advantage of indexing?",
    options: [
      "Faster query retrieval",
      "Slower updates",
      "Consumes no memory",
      "Reduces security",
    ],
    correctAnswer: "Faster query retrieval",
  },
  {
    id: 25,
    question: "Which SQL clause is used to filter records?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    correctAnswer: "WHERE",
  },
  {
    id: 26,
    question: "What is the difference between SQL and NoSQL?",
    options: [
      "SQL is relational, NoSQL is non-relational",
      "SQL is non-relational, NoSQL is relational",
      "Both are same",
      "NoSQL is faster but SQL is insecure",
    ],
    correctAnswer: "SQL is relational, NoSQL is non-relational",
  },
  {
    id: 27,
    question: "Which command removes a table completely?",
    options: ["DROP TABLE", "DELETE TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
    correctAnswer: "DROP TABLE",
  },
  {
    id: 28,
    question: "Which Node.js module is used to create a server?",
    options: ["http", "fs", "url", "path"],
    correctAnswer: "http",
  },
  {
    id: 29,
    question: "Which is a non-blocking I/O operation in Node.js?",
    options: ["Asynchronous", "Synchronous", "Sequential", "Parallel"],
    correctAnswer: "Asynchronous",
  },
  {
    id: 30,
    question: "Which design pattern separates data, business logic, and UI?",
    options: ["MVC", "MVVM", "MVP", "Singleton"],
    correctAnswer: "MVC",
  },
];
// =================== WordPress Developer ===================
export const WordPressQuestions = [
  {
    id: 1,
    question: "What is WordPress?",
    options: ["CMS", "Programming Language", "Database", "Server"],
    correctAnswer: "CMS",
  },
  {
    id: 2,
    question: "Which language is WordPress written in?",
    options: ["PHP", "Python", "JavaScript", "Ruby"],
    correctAnswer: "PHP",
  },
  {
    id: 3,
    question: "What is a WordPress theme?",
    options: ["Predefined design and layout", "Plugin", "Database", "Server"],
    correctAnswer: "Predefined design and layout",
  },
  {
    id: 4,
    question: "Which file is the main template in WordPress?",
    options: ["index.php", "home.php", "style.css", "functions.php"],
    correctAnswer: "index.php",
  },
  {
    id: 5,
    question: "What is a WordPress plugin?",
    options: [
      "Adds functionality",
      "Changes theme",
      "Manages database",
      "Controls server",
    ],
    correctAnswer: "Adds functionality",
  },
  {
    id: 6,
    question: "Which editor is default in WordPress?",
    options: ["Gutenberg", "Classic Editor", "Elementor", "Beaver Builder"],
    correctAnswer: "Gutenberg",
  },

  {
    id: 7,
    question: "Which file contains theme functions?",
    options: ["functions.php", "style.css", "index.php", "header.php"],
    correctAnswer: "functions.php",
  },
  {
    id: 8,
    question: "Which hook runs before any template is loaded?",
    options: ["init", "wp_head", "wp_footer", "template_redirect"],
    correctAnswer: "init",
  },
  {
    id: 9,
    question: "Which WordPress function retrieves posts?",
    options: [
      "get_posts()",
      "fetch_posts()",
      "retrieve_posts()",
      "query_posts()",
    ],
    correctAnswer: "get_posts()",
  },
  {
    id: 10,
    question: "Which database does WordPress use?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correctAnswer: "MySQL",
  },
  {
    id: 11,
    question: "Which function is used to enqueue scripts?",
    options: [
      "wp_enqueue_script",
      "enqueue_script",
      "add_script",
      "load_script",
    ],
    correctAnswer: "wp_enqueue_script",
  },
  {
    id: 12,
    question: "Which template file is used for single posts?",
    options: ["single.php", "page.php", "index.php", "archive.php"],
    correctAnswer: "single.php",
  },
  {
    id: 13,
    question: "Which user role can install plugins?",
    options: ["Administrator", "Editor", "Author", "Subscriber"],
    correctAnswer: "Administrator",
  },
  {
    id: 14,
    question: "Which plugin helps in SEO optimization?",
    options: ["Yoast SEO", "WooCommerce", "Contact Form 7", "Jetpack"],
    correctAnswer: "Yoast SEO",
  },
  {
    id: 15,
    question: "Which function adds custom menus?",
    options: ["register_nav_menus", "add_menu", "create_menu", "menu_register"],
    correctAnswer: "register_nav_menus",
  },
  {
    id: 16,
    question: "Which template shows archive pages?",
    options: ["archive.php", "single.php", "index.php", "page.php"],
    correctAnswer: "archive.php",
  },
  {
    id: 17,
    question: "Which function loads theme styles?",
    options: ["wp_enqueue_style", "enqueue_style", "add_style", "load_style"],
    correctAnswer: "wp_enqueue_style",
  },
  {
    id: 18,
    question: "Which function displays header content?",
    options: [
      "get_header()",
      "show_header()",
      "header_content()",
      "load_header()",
    ],
    correctAnswer: "get_header()",
  },
  {
    id: 19,
    question: "Which function displays footer content?",
    options: [
      "get_footer()",
      "show_footer()",
      "footer_content()",
      "load_footer()",
    ],
    correctAnswer: "get_footer()",
  },
  {
    id: 20,
    question: "Which function retrieves site URL?",
    options: ["get_site_url()", "site_url()", "get_home_url()", "home_url()"],
    correctAnswer: "get_site_url()",
  },
  {
    id: 21,
    question: "Which plugin helps to create forms?",
    options: ["Contact Form 7", "Yoast SEO", "WooCommerce", "Jetpack"],
    correctAnswer: "Contact Form 7",
  },
  {
    id: 22,
    question: "Which template file is used for pages?",
    options: ["page.php", "single.php", "index.php", "archive.php"],
    correctAnswer: "page.php",
  },
  {
    id: 23,
    question: "Which function retrieves custom field values?",
    options: ["get_post_meta()", "get_field()", "get_meta()", "get_custom()"],
    correctAnswer: "get_post_meta()",
  },

  {
    id: 24,
    question: "What is the difference between hook and filter?",
    options: [
      "Hook executes code, filter modifies data",
      "Both same",
      "Filter executes code, hook modifies data",
      "None",
    ],
    correctAnswer: "Hook executes code, filter modifies data",
  },
  {
    id: 25,
    question: "Which function is used to add theme support?",
    options: [
      "add_theme_support()",
      "theme_support()",
      "support_theme()",
      "enable_theme()",
    ],
    correctAnswer: "add_theme_support()",
  },
  {
    id: 26,
    question: "Which function registers sidebars?",
    options: [
      "register_sidebar()",
      "add_sidebar()",
      "create_sidebar()",
      "sidebar_register()",
    ],
    correctAnswer: "register_sidebar()",
  },
  {
    id: 27,
    question: "Which function retrieves categories?",
    options: [
      "get_categories()",
      "fetch_categories()",
      "retrieve_categories()",
      "query_categories()",
    ],
    correctAnswer: "get_categories()",
  },
  {
    id: 28,
    question: "Which function includes template part?",
    options: [
      "get_template_part()",
      "include_template()",
      "load_template()",
      "template_part()",
    ],
    correctAnswer: "get_template_part()",
  },
  {
    id: 29,
    question: "Which file handles WordPress database connection?",
    options: ["wp-config.php", "functions.php", "index.php", "db.php"],
    correctAnswer: "wp-config.php",
  },
  {
    id: 30,
    question: "Which function retrieves WordPress options?",
    options: [
      "get_option()",
      "fetch_option()",
      "retrieve_option()",
      "wp_option()",
    ],
    correctAnswer: "get_option()",
  },
];
// =================== CRM ===================
export const CRMQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What does CRM stand for?",
    options: [
      "Customer Relationship Management",
      "Customer Resource Management",
      "Client Record Management",
      "Company Relationship Management",
    ],
    correctAnswer: "Customer Relationship Management",
  },
  {
    id: 2,
    question: "Which is a popular CRM software?",
    options: ["Salesforce", "WordPress", "Photoshop", "Excel"],
    correctAnswer: "Salesforce",
  },
  {
    id: 3,
    question: "CRM helps to manage?",
    options: [
      "Customer interactions",
      "Server logs",
      "Web hosting",
      "Graphic design",
    ],
    correctAnswer: "Customer interactions",
  },
  {
    id: 4,
    question: "Which CRM module handles leads?",
    options: [
      "Sales module",
      "Marketing module",
      "Support module",
      "Finance module",
    ],
    correctAnswer: "Sales module",
  },
  {
    id: 5,
    question: "CRM can help increase?",
    options: ["Sales", "CSS skills", "Server uptime", "Graphic design"],
    correctAnswer: "Sales",
  },
  {
    id: 6,
    question: "Which data is stored in CRM?",
    options: ["Customer info", "Server data", "Images", "CSS files"],
    correctAnswer: "Customer info",
  },

  // Medium (15)
  {
    id: 7,
    question: "Which CRM feature tracks customer interactions?",
    options: [
      "Activity Tracking",
      "Template Design",
      "Server Management",
      "Workflow Automation",
    ],
    correctAnswer: "Activity Tracking",
  },
  {
    id: 8,
    question: "Which type of CRM focuses on customer support?",
    options: [
      "Operational CRM",
      "Analytical CRM",
      "Collaborative CRM",
      "Strategic CRM",
    ],
    correctAnswer: "Operational CRM",
  },
  {
    id: 9,
    question: "Which CRM helps analyze sales data?",
    options: [
      "Analytical CRM",
      "Operational CRM",
      "Collaborative CRM",
      "Functional CRM",
    ],
    correctAnswer: "Analytical CRM",
  },
  {
    id: 10,
    question: "CRM workflow automation improves?",
    options: ["Efficiency", "Design", "SEO", "Networking"],
    correctAnswer: "Efficiency",
  },
  {
    id: 11,
    question: "Which CRM reports show sales trends?",
    options: [
      "Sales Reports",
      "Support Tickets",
      "Marketing Templates",
      "Server Logs",
    ],
    correctAnswer: "Sales Reports",
  },
  {
    id: 12,
    question: "CRM dashboards provide?",
    options: [
      "Visual data overview",
      "Text editor",
      "Server configurations",
      "Database tables",
    ],
    correctAnswer: "Visual data overview",
  },
  {
    id: 13,
    question: "Which module handles marketing campaigns?",
    options: [
      "Marketing Module",
      "Support Module",
      "Finance Module",
      "Design Module",
    ],
    correctAnswer: "Marketing Module",
  },
  {
    id: 14,
    question: "Which CRM concept improves customer retention?",
    options: [
      "Customer Lifecycle",
      "Server Maintenance",
      "Graphic Templates",
      "CSS Design",
    ],
    correctAnswer: "Customer Lifecycle",
  },
  {
    id: 15,
    question: "Which feature tracks emails and calls?",
    options: [
      "Communication Log",
      "Template Manager",
      "Workflow Engine",
      "Database Connector",
    ],
    correctAnswer: "Communication Log",
  },
  {
    id: 16,
    question: "CRM analytics helps in?",
    options: [
      "Forecasting sales",
      "Designing images",
      "Coding front-end",
      "Optimizing CSS",
    ],
    correctAnswer: "Forecasting sales",
  },
  {
    id: 17,
    question: "Which is used to segment customers?",
    options: [
      "Customer Segmentation",
      "Server Segmentation",
      "Graphic Segmentation",
      "File Segmentation",
    ],
    correctAnswer: "Customer Segmentation",
  },
  {
    id: 18,
    question: "CRM can be integrated with?",
    options: [
      "Email, Chat, ERP",
      "Photoshop, Illustrator",
      "HTML, CSS",
      "Servers, Networks",
    ],
    correctAnswer: "Email, Chat, ERP",
  },
  {
    id: 19,
    question: "CRM leads can be assigned to?",
    options: ["Salesperson", "Designer", "Developer", "Server Admin"],
    correctAnswer: "Salesperson",
  },
  {
    id: 20,
    question: "Which feature helps track customer satisfaction?",
    options: [
      "Surveys",
      "Workflow Automation",
      "Email Templates",
      "CSS Styling",
    ],
    correctAnswer: "Surveys",
  },
  {
    id: 21,
    question: "CRM notifications alert about?",
    options: [
      "Tasks or activities",
      "CSS errors",
      "Server logs",
      "Database indexes",
    ],
    correctAnswer: "Tasks or activities",
  },

  // Hard (9)
  {
    id: 22,
    question: "Which CRM metric measures customer loyalty?",
    options: [
      "Net Promoter Score (NPS)",
      "Customer Lifetime Value",
      "Server uptime",
      "CSS compliance",
    ],
    correctAnswer: "Net Promoter Score (NPS)",
  },
  {
    id: 23,
    question: "Which CRM integration is used for marketing automation?",
    options: ["HubSpot", "VS Code", "Photoshop", "Slack"],
    correctAnswer: "HubSpot",
  },
  {
    id: 24,
    question: "Which CRM strategy focuses on 360-degree customer view?",
    options: [
      "Customer-Centric Strategy",
      "Server Strategy",
      "Design Strategy",
      "Database Strategy",
    ],
    correctAnswer: "Customer-Centric Strategy",
  },
  {
    id: 25,
    question: "Which feature automates repetitive tasks?",
    options: [
      "Workflow Automation",
      "Manual Logging",
      "CSS Automation",
      "Image Compression",
    ],
    correctAnswer: "Workflow Automation",
  },
  {
    id: 26,
    question: "Which metric calculates total revenue per customer?",
    options: [
      "Customer Lifetime Value",
      "NPS",
      "Bounce Rate",
      "Click-Through Rate",
    ],
    correctAnswer: "Customer Lifetime Value",
  },
  {
    id: 27,
    question: "Which CRM tool tracks customer interactions across channels?",
    options: [
      "Omnichannel CRM",
      "Frontend CRM",
      "WordPress CRM",
      "Backend CRM",
    ],
    correctAnswer: "Omnichannel CRM",
  },
  {
    id: 28,
    question: "Which report predicts future sales?",
    options: [
      "Forecasting Report",
      "Activity Report",
      "Marketing Report",
      "Support Report",
    ],
    correctAnswer: "Forecasting Report",
  },
  {
    id: 29,
    question: "CRM helps in compliance with which regulation?",
    options: ["GDPR", "HTML", "CSS", "SEO"],
    correctAnswer: "GDPR",
  },
  {
    id: 30,
    question: "Which analytics help in customer segmentation?",
    options: [
      "Behavioral Analytics",
      "Frontend Analytics",
      "Server Analytics",
      "Design Analytics",
    ],
    correctAnswer: "Behavioral Analytics",
  },
];
// =================== QA ===================
export const QAQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What does QA stand for?",
    options: [
      "Quality Assurance",
      "Quick Analysis",
      "Query Automation",
      "Quality Audit",
    ],
    correctAnswer: "Quality Assurance",
  },
  {
    id: 2,
    question: "Which is a type of testing?",
    options: [
      "Manual Testing",
      "Frontend Testing",
      "Server Testing",
      "CSS Testing",
    ],
    correctAnswer: "Manual Testing",
  },
  {
    id: 3,
    question: "Which document describes test scenarios?",
    options: ["Test Plan", "HTML File", "CSS File", "API Doc"],
    correctAnswer: "Test Plan",
  },
  {
    id: 4,
    question: "What is a bug?",
    options: [
      "An error in software",
      "A feature",
      "A server log",
      "A CSS issue",
    ],
    correctAnswer: "An error in software",
  },
  {
    id: 5,
    question: "Which environment is used to test software?",
    options: [
      "Test Environment",
      "Production",
      "HTML Sandbox",
      "Design Studio",
    ],
    correctAnswer: "Test Environment",
  },
  {
    id: 6,
    question: "Which is used for automated testing?",
    options: ["Selenium", "Photoshop", "WordPress", "Excel"],
    correctAnswer: "Selenium",
  },

  // Medium (15)
  {
    id: 7,
    question: "Which testing checks individual components?",
    options: [
      "Unit Testing",
      "System Testing",
      "Integration Testing",
      "Acceptance Testing",
    ],
    correctAnswer: "Unit Testing",
  },
  {
    id: 8,
    question: "Which testing checks end-to-end functionality?",
    options: [
      "System Testing",
      "Unit Testing",
      "Integration Testing",
      "Smoke Testing",
    ],
    correctAnswer: "System Testing",
  },
  {
    id: 9,
    question: "What is regression testing?",
    options: [
      "Testing existing functionality after changes",
      "Testing new functionality",
      "Testing UI only",
      "Testing server only",
    ],
    correctAnswer: "Testing existing functionality after changes",
  },
  {
    id: 10,
    question: "Which testing ensures software meets requirements?",
    options: [
      "Acceptance Testing",
      "Unit Testing",
      "Load Testing",
      "Integration Testing",
    ],
    correctAnswer: "Acceptance Testing",
  },
  {
    id: 11,
    question: "Which is a non-functional testing?",
    options: [
      "Performance Testing",
      "Unit Testing",
      "Integration Testing",
      "Functional Testing",
    ],
    correctAnswer: "Performance Testing",
  },
  {
    id: 12,
    question: "Which tool is used for bug tracking?",
    options: ["JIRA", "Photoshop", "WordPress", "Excel"],
    correctAnswer: "JIRA",
  },
  {
    id: 13,
    question: "What is a test case?",
    options: [
      "Set of steps to verify functionality",
      "CSS file",
      "HTML file",
      "Database script",
    ],
    correctAnswer: "Set of steps to verify functionality",
  },
  {
    id: 14,
    question: "Which testing is performed without execution?",
    options: [
      "Static Testing",
      "Dynamic Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Static Testing",
  },
  {
    id: 15,
    question: "Which testing is done by end users?",
    options: [
      "User Acceptance Testing",
      "Unit Testing",
      "System Testing",
      "Integration Testing",
    ],
    correctAnswer: "User Acceptance Testing",
  },
  {
    id: 16,
    question: "What is exploratory testing?",
    options: [
      "Simultaneous learning, test design and execution",
      "Writing only test cases",
      "Designing UI",
      "Coding APIs",
    ],
    correctAnswer: "Simultaneous learning, test design and execution",
  },
  {
    id: 17,
    question: "Which testing focuses on speed?",
    options: [
      "Performance Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Performance Testing",
  },
  {
    id: 18,
    question: "Which testing validates input fields?",
    options: [
      "Validation Testing",
      "Unit Testing",
      "Load Testing",
      "Smoke Testing",
    ],
    correctAnswer: "Validation Testing",
  },
  {
    id: 19,
    question: "Which testing is automated and repeated frequently?",
    options: [
      "Regression Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Regression Testing",
  },
  {
    id: 20,
    question: "Which testing checks interfaces between modules?",
    options: [
      "Integration Testing",
      "Unit Testing",
      "System Testing",
      "Acceptance Testing",
    ],
    correctAnswer: "Integration Testing",
  },
  {
    id: 21,
    question: "Which document records defects?",
    options: ["Defect Log", "Test Plan", "Design Doc", "Server Log"],
    correctAnswer: "Defect Log",
  },

  // Hard (9)
  {
    id: 22,
    question: "What is boundary value analysis?",
    options: [
      "Testing edge values of inputs",
      "Testing middle values",
      "Testing database",
      "Testing UI",
    ],
    correctAnswer: "Testing edge values of inputs",
  },
  {
    id: 23,
    question: "What is equivalence partitioning?",
    options: [
      "Dividing input data into valid/invalid partitions",
      "Coding a feature",
      "Designing UI",
      "Server setup",
    ],
    correctAnswer: "Dividing input data into valid/invalid partitions",
  },
  {
    id: 24,
    question: "Which testing is used for high load conditions?",
    options: [
      "Load Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Load Testing",
  },
  {
    id: 25,
    question: "What is smoke testing?",
    options: [
      "Basic sanity check",
      "Testing server",
      "Design testing",
      "Regression testing",
    ],
    correctAnswer: "Basic sanity check",
  },
  {
    id: 26,
    question: "Which testing simulates multiple users?",
    options: [
      "Stress Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Stress Testing",
  },
  {
    id: 27,
    question: "What is a test strategy?",
    options: [
      "High-level approach to testing",
      "Detailed test case",
      "UI design",
      "Server setup",
    ],
    correctAnswer: "High-level approach to testing",
  },
  {
    id: 28,
    question: "Which testing ensures all paths are executed?",
    options: [
      "Coverage Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Coverage Testing",
  },
  {
    id: 29,
    question: "Which tool automates API testing?",
    options: ["Postman", "Excel", "WordPress", "Photoshop"],
    correctAnswer: "Postman",
  },
  {
    id: 30,
    question: "Which testing identifies defects in early stages?",
    options: [
      "Static Testing",
      "Unit Testing",
      "System Testing",
      "Integration Testing",
    ],
    correctAnswer: "Static Testing",
  },
];

// =================== UI/UX ===================
export const UIUXQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What does UI stand for?",
    options: [
      "User Interface",
      "Unique Interaction",
      "Universal Input",
      "Unified Integration",
    ],
    correctAnswer: "User Interface",
  },
  {
    id: 2,
    question: "What does UX stand for?",
    options: [
      "User Experience",
      "Unique eXecution",
      "Universal eXperience",
      "Unified Experience",
    ],
    correctAnswer: "User Experience",
  },
  {
    id: 3,
    question: "Which tool is used for designing UI?",
    options: ["Figma", "WordPress", "VS Code", "MySQL"],
    correctAnswer: "Figma",
  },
  {
    id: 4,
    question: "What is a wireframe?",
    options: [
      "Basic layout of UI",
      "Final design",
      "CSS file",
      "Server script",
    ],
    correctAnswer: "Basic layout of UI",
  },
  {
    id: 5,
    question: "Which color combination is important in UI?",
    options: ["Contrast", "Font size", "Database", "Server"],
    correctAnswer: "Contrast",
  },
  {
    id: 6,
    question: "Which element improves UX on forms?",
    options: ["Placeholder text", "HTML tag", "Database index", "Server log"],
    correctAnswer: "Placeholder text",
  },

  // Medium (15)
  {
    id: 7,
    question: "What is a prototype?",
    options: [
      "Interactive mockup",
      "Final product",
      "Database script",
      "Server configuration",
    ],
    correctAnswer: "Interactive mockup",
  },
  {
    id: 8,
    question: "Which principle focuses on consistency?",
    options: [
      "Design Consistency",
      "Server Setup",
      "CSS Layout",
      "Database Schema",
    ],
    correctAnswer: "Design Consistency",
  },
  {
    id: 9,
    question: "What is user persona?",
    options: [
      "Representation of target users",
      "Server user",
      "CSS style",
      "Database table",
    ],
    correctAnswer: "Representation of target users",
  },
  {
    id: 10,
    question: "Which testing evaluates usability?",
    options: [
      "Usability Testing",
      "Unit Testing",
      "Integration Testing",
      "Load Testing",
    ],
    correctAnswer: "Usability Testing",
  },
  {
    id: 11,
    question: "Which font size improves readability?",
    options: ["16px", "8px", "4px", "32px"],
    correctAnswer: "16px",
  },
  {
    id: 12,
    question: "Which color theory concept is important for accessibility?",
    options: ["Contrast Ratio", "Hue Value", "CSS Gradient", "Server Response"],
    correctAnswer: "Contrast Ratio",
  },
  {
    id: 13,
    question: "What is responsive design?",
    options: [
      "Design adjusts to screen size",
      "Fixed design",
      "Server-side script",
      "Database schema",
    ],
    correctAnswer: "Design adjusts to screen size",
  },
  {
    id: 14,
    question: "Which prototyping tool allows interactions?",
    options: ["Adobe XD", "MySQL", "PHP", "Server logs"],
    correctAnswer: "Adobe XD",
  },
  {
    id: 15,
    question: "Which principle avoids clutter in design?",
    options: [
      "Minimalism",
      "Server Optimization",
      "SQL Optimization",
      "Testing",
    ],
    correctAnswer: "Minimalism",
  },
  {
    id: 16,
    question: "Which UX metric tracks user satisfaction?",
    options: ["CSAT", "Bounce Rate", "Server Uptime", "CSS Errors"],
    correctAnswer: "CSAT",
  },
  {
    id: 17,
    question: "Which design principle improves hierarchy?",
    options: [
      "Visual Hierarchy",
      "Server Design",
      "Database Structure",
      "CSS Z-Index",
    ],
    correctAnswer: "Visual Hierarchy",
  },
  {
    id: 18,
    question: "What is A/B testing?",
    options: [
      "Comparing two versions of design",
      "Database comparison",
      "CSS testing",
      "Server testing",
    ],
    correctAnswer: "Comparing two versions of design",
  },
  {
    id: 19,
    question: "Which UX principle emphasizes feedback?",
    options: [
      "User Feedback",
      "Database Feedback",
      "CSS Feedback",
      "Server Logs",
    ],
    correctAnswer: "User Feedback",
  },
  {
    id: 20,
    question: "Which design pattern improves navigation?",
    options: ["Card Layout", "Server Side", "Database Layout", "CSS Grid"],
    correctAnswer: "Card Layout",
  },
  {
    id: 21,
    question: "Which principle focuses on accessibility?",
    options: [
      "WCAG Guidelines",
      "SQL Guidelines",
      "Server Guidelines",
      "CSS Guidelines",
    ],
    correctAnswer: "WCAG Guidelines",
  },

  // Hard (9)
  {
    id: 22,
    question: "What is heuristic evaluation?",
    options: [
      "Expert review of usability",
      "Automated testing",
      "Database query",
      "Server log analysis",
    ],
    correctAnswer: "Expert review of usability",
  },
  {
    id: 23,
    question: "Which UX metric tracks task completion?",
    options: [
      "Task Success Rate",
      "Bounce Rate",
      "Server Uptime",
      "CSS Errors",
    ],
    correctAnswer: "Task Success Rate",
  },
  {
    id: 24,
    question: "Which method identifies usability issues quickly?",
    options: [
      "Cognitive Walkthrough",
      "Unit Testing",
      "Integration Testing",
      "Load Testing",
    ],
    correctAnswer: "Cognitive Walkthrough",
  },
  {
    id: 25,
    question: "Which tool tracks user interactions?",
    options: ["Hotjar", "VS Code", "MySQL", "Photoshop"],
    correctAnswer: "Hotjar",
  },
  {
    id: 26,
    question: "Which principle emphasizes error prevention?",
    options: [
      "Error Prevention",
      "Database Indexing",
      "Server Setup",
      "CSS Design",
    ],
    correctAnswer: "Error Prevention",
  },
  {
    id: 27,
    question: "Which testing checks real user behavior?",
    options: [
      "Field Testing",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
    ],
    correctAnswer: "Field Testing",
  },
  {
    id: 28,
    question: "Which technique maps user journey?",
    options: [
      "User Journey Mapping",
      "Database Mapping",
      "Server Mapping",
      "CSS Mapping",
    ],
    correctAnswer: "User Journey Mapping",
  },
  {
    id: 29,
    question: "Which principle ensures content is scannable?",
    options: [
      "F-Shaped Pattern",
      "Server Log Analysis",
      "Database Indexing",
      "CSS Flexbox",
    ],
    correctAnswer: "F-Shaped Pattern",
  },
  {
    id: 30,
    question: "Which design principle improves visual weight distribution?",
    options: ["Balance", "Database Normalization", "Server Load", "CSS Float"],
    correctAnswer: "Balance",
  },
];

// =================== App Script ===================
export const AppScriptQuestions = [
  // Easy (6)
  {
    id: 1,
    question: "What is Google Apps Script?",
    options: [
      "Scripting platform for Google Workspace",
      "Database software",
      "CSS framework",
      "Server application",
    ],
    correctAnswer: "Scripting platform for Google Workspace",
  },
  {
    id: 2,
    question: "Which language is used in Apps Script?",
    options: ["JavaScript", "Python", "PHP", "Ruby"],
    correctAnswer: "JavaScript",
  },
  {
    id: 3,
    question: "Apps Script can automate?",
    options: [
      "Google Sheets, Docs, Gmail",
      "Photoshop",
      "WordPress",
      "SQL Server",
    ],
    correctAnswer: "Google Sheets, Docs, Gmail",
  },
  {
    id: 4,
    question: "Which function reads a sheet value?",
    options: ["getValue()", "readSheet()", "getData()", "fetchValue()"],
    correctAnswer: "getValue()",
  },
  {
    id: 5,
    question: "Which service is used to send emails?",
    options: ["MailApp", "EmailService", "GmailApp", "SMTP"],
    correctAnswer: "MailApp",
  },
  {
    id: 6,
    question: "Which function writes a value to a cell?",
    options: ["setValue()", "writeCell()", "updateValue()", "putData()"],
    correctAnswer: "setValue()",
  },

  // Medium (15)
  {
    id: 7,
    question: "Which method retrieves all values in a range?",
    options: ["getValues()", "getValue()", "readRange()", "fetchRange()"],
    correctAnswer: "getValues()",
  },
  {
    id: 8,
    question: "Which trigger runs Apps Script on form submission?",
    options: ["onFormSubmit", "onEdit", "onOpen", "onInstall"],
    correctAnswer: "onFormSubmit",
  },
  {
    id: 9,
    question: "Which class represents a spreadsheet?",
    options: ["SpreadsheetApp", "SheetClass", "SpreadsheetService", "SheetApp"],
    correctAnswer: "SpreadsheetApp",
  },
  {
    id: 10,
    question: "Which method adds a new row?",
    options: ["appendRow()", "addRow()", "insertRow()", "newRow()"],
    correctAnswer: "appendRow()",
  },
  {
    id: 11,
    question: "Which service accesses Google Drive files?",
    options: ["DriveApp", "FileService", "DriveService", "FileApp"],
    correctAnswer: "DriveApp",
  },
  {
    id: 12,
    question: "Which method creates a new Google Doc?",
    options: [
      "DocumentApp.create()",
      "DocsApp.create()",
      "NewDoc()",
      "createDoc()",
    ],
    correctAnswer: "DocumentApp.create()",
  },
  {
    id: 13,
    question: "Which function retrieves the active sheet?",
    options: [
      "getActiveSheet()",
      "getCurrentSheet()",
      "activeSheet()",
      "getSheet()",
    ],
    correctAnswer: "getActiveSheet()",
  },
  {
    id: 14,
    question: "Which method deletes a sheet?",
    options: [
      "deleteSheet()",
      "removeSheet()",
      "destroySheet()",
      "eraseSheet()",
    ],
    correctAnswer: "deleteSheet()",
  },
  {
    id: 15,
    question: "Which Apps Script service manages calendar events?",
    options: ["CalendarApp", "EventApp", "CalendarService", "DateApp"],
    correctAnswer: "CalendarApp",
  },
  {
    id: 16,
    question: "Which trigger runs when a spreadsheet is opened?",
    options: ["onOpen", "onEdit", "onFormSubmit", "onInstall"],
    correctAnswer: "onOpen",
  },
  {
    id: 17,
    question: "Which method retrieves a file by ID?",
    options: ["getFileById()", "fetchFile()", "openFile()", "loadFile()"],
    correctAnswer: "getFileById()",
  },
  {
    id: 18,
    question: "Which method sets a cell formula?",
    options: [
      "setFormula()",
      "writeFormula()",
      "updateFormula()",
      "applyFormula()",
    ],
    correctAnswer: "setFormula()",
  },
  {
    id: 19,
    question: "Which class is used to send Gmail messages?",
    options: ["GmailApp", "MailApp", "EmailApp", "SMTPApp"],
    correctAnswer: "GmailApp",
  },
  {
    id: 20,
    question: "Which method protects a sheet?",
    options: ["protect()", "lockSheet()", "secureSheet()", "safeSheet()"],
    correctAnswer: "protect()",
  },
  {
    id: 21,
    question: "Which method sets multiple values at once?",
    options: ["setValues()", "setValue()", "appendRow()", "insertRows()"],
    correctAnswer: "setValues()",
  },

  // Hard (9)
  {
    id: 22,
    question: "Which Apps Script function creates a time-driven trigger?",
    options: [
      "ScriptApp.newTrigger().timeBased()",
      "TimeTrigger.create()",
      "TriggerApp.time()",
      "Schedule.newTrigger()",
    ],
    correctAnswer: "ScriptApp.newTrigger().timeBased()",
  },
  {
    id: 23,
    question: "Which service allows creating Google Forms?",
    options: ["FormApp", "DocumentApp", "SpreadsheetApp", "DriveApp"],
    correctAnswer: "FormApp",
  },
  {
    id: 24,
    question: "Which method removes a trigger?",
    options: [
      "deleteTrigger()",
      "removeTrigger()",
      "destroyTrigger()",
      "unsetTrigger()",
    ],
    correctAnswer: "deleteTrigger()",
  },
  {
    id: 25,
    question: "Which method flushes pending changes to sheet?",
    options: ["flush()", "commit()", "apply()", "save()"],
    correctAnswer: "flush()",
  },
  {
    id: 26,
    question: "Which method copies a sheet to another spreadsheet?",
    options: ["copyTo()", "duplicate()", "cloneSheet()", "moveTo()"],
    correctAnswer: "copyTo()",
  },
  {
    id: 27,
    question: "Which method retrieves all files in a folder?",
    options: ["getFiles()", "fetchFiles()", "listFiles()", "getFolderFiles()"],
    correctAnswer: "getFiles()",
  },
  {
    id: 28,
    question: "Which method appends multiple rows at once?",
    options: ["appendRows()", "appendRow()", "insertRows()", "setValues()"],
    correctAnswer: "appendRows()",
  },
  {
    id: 29,
    question: "Which method runs a script as another user?",
    options: ["runAsUser()", "executeAsUser()", "setUser()", "impersonate()"],
    correctAnswer: "runAsUser()",
  },
  {
    id: 30,
    question: "Which method publishes a script as a web app?",
    options: [
      "Deploy as web app",
      "Publish as web",
      "Run as web app",
      "Create web app",
    ],
    correctAnswer: "Deploy as web app",
  },
];
