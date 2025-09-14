// const QuestionsData: Record<string, string[]> =  {
    //add the new catgories
    //check data population and card population - define randomizer algorithm
    //update the card design to incorporate the new categories
    //remnove the categories from the ui
    //add options to select the categories to be used in the game in the beginning and populate the state. By default all categories are selected. except deepen relationships

export const categories = ['Life Experiences', 'Self-Reflection', 'Professional Growth', 'Miscellaneous'];

const QuestionsData = 
    {
        "Life Experiences": [

    {
        "question":"Share a past experience that brings you joy when you remember it.",
        "deep":false
    },
    {
        "question":"Share some of your personal life lessons which helped you succeed in life.",
        "deep":false
    },
    {
        "question":"What has the Coronavirus disease taught you?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What was your first impression about me, and how did it change in the meantime?",
        "deep":true
    },
    {
        "question":"Question for all (quick round): Which music genre matches your personality?",
        "deep":false
    },
    {
        "question":"Name two or three things that you are grateful for in this moment?",
        "deep":false
    },
    {
        "question":"Which was the topic of the last book you read, and what did you learn from it?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I respond to stress by...",
        "deep":false
    },
    {
        "question":"What habit or behaviour would you like to let go of?",
        "deep":false
    },
    {
        "question":"Is it better to be autocratic or servile? Please explain.",
        "deep":false
    },
    {
        "question":"What are you most curious about to experience in the near future?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I feel relaxed, balanced and focused when…",
        "deep":false
    },
    {
        "question":"Share a special item that you always have in your pocket or bag.",
        "deep":false
    },
    {
        "question":"What do you always take with you when you travel?",
        "deep":false
    },
    {
        "question":"What is your biggest regret (work and career related)?",
        "deep":false
    },
    {
        "question":"What means diversity, equity and inclusion to you?",
        "deep":false
    },
    {
        "question":"What are you most proud of?",
        "deep":false
    },
    {
        "question":"On a spectrum of extroverts and introverts, where do you lie?",
        "deep":false
    },
    {
        "question":"How do you define spirituality, and what does it mean to you?",
        "deep":false
    },
    {
        "question":"Who is your biggest idol, and why?",
        "deep":false
    },
    {
        "question":"Do you tend to put the wants and needs of others above yours? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: If I were the CEO of this company, I would...",
        "deep":false
    },
    {
        "question":"How do you define a great company culture?",
        "deep":false
    },
    {
        "question":"How do you express your creativity?",
        "deep":false
    },
    {
        "question":"Are you closer to your father or mother? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: The most important character trait for me in a friend is...",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What’s one thing I could do to improve to generate a bigger impact?",
        "deep":false
    },
    {
        "question":"Have you ever been betrayed or cheated on?",
        "deep":true
    },
    {
        "question":"How do you practice self-care in your daily business life?",
        "deep":false
    },
    {
        "question":"If you were an animal, what would you be and why?",
        "deep":false
    },
    {
        "question":"How would you define your current relationship with your parents, and what´s the main reason for it?",
        "deep":true
    },
    {
        "question":"There are two types of people in this world. Believers and scientists. Which one are you, and why?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would rather kiss a snake than…",
        "deep":false
    },
    {
        "question":"Do you find it difficult to trust others? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What´s your favourite dish?",
        "deep":false
    },
    {
        "question":"What are you usually doing at 6 AM? And at 6 PM?",
        "deep":false
    },
    {
        "question":"Admit something about yourself.",
        "deep":false
    },
    {
        "question":"What do you think of when you hear the word - independence?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I am scared of…",
        "deep":false
    },
    {
        "question":"What does it mean to you to be recognized and rewared?",
        "deep":false
    },
    {
        "question":"What is your aim in life?",
        "deep":false
    },
    {
        "question":"What is currently challenging you?",
        "deep":false
    },
    {
        "question":"When did you last feel deeply connected to someone—whether a friend, mentor, or colleague?",
        "deep":false
    },
    {
        "question":"What are the most attractive and unattractive qualities in a person?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Joy to me is…",
        "deep":false
    },
    {
        "question":"Do you easily adapt to change? Can you share an example?",
        "deep":false
    },
    {
        "question":"How would a perfect day look like for you?",
        "deep":false
    },
    {
        "question":"What kind of footprint would you like to leave in this world?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I have stopped apologizing for my…",
        "deep":false
    },
    {
        "question":"Share one of your boundaries.",
        "deep":false
    },
    {
        "question":"Out of the 5 tastes - bitter, sour, sweet, salty and spicy; which taste do you like most, and which do you avoid?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would find it hard to forgive someone who…",
        "deep":false
    },
    {
        "question":"Which was your best subject in school and which subject did you struggle with?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a parent?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: To me a happy life is one that…",
        "deep":false
    },
    {
        "question":"Who do you consider to be family to you and why?",
        "deep":false
    },
    {
        "question":"How do you spend your leisure time?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a work colleague, and how as a friend?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Right now, I feel...",
        "deep":false
    },
    {
        "question":"How do you respond to an insult?",
        "deep":false
    },
    {
        "question":"Share one or two things that make you feel psychologically safe at work, and explain why.",
        "deep":false
    },
    {
        "question":"Share a funny story from your childhood.",
        "deep":false
    },
    {
        "question":"Can the need for safety and security coexist with the need for freedom and adventure within a relationship? Please explain.",
        "deep":false
    },
    {
        "question":"Complete the sentence: Something I hope others understand about me is…",
        "deep":false
    },
    {
        "question":"What was the best and worst advice you´ve ever got?",
        "deep":false
    },
    {
        "question":"Who do you wish you could get to know on a deeper level?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would like to be remembered for…",
        "deep":false
    },
    {
        "question":"Share a story of a funny moment in your life.",
        "deep":false
    },
    {
        "question":"Share two truths and a lie about yourself and let the rest figure out which is which.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I wish I could be a professional...",
        "deep":false
    },
    {
        "question":"Share the story of your given name.",
        "deep":false
    },
    {
        "question":"From your perspective, what are the three keys to a successful relationship.",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could … because …",
        "deep":false
    },
    {
        "question":"When did you last receive feedback that helped you grow? What was it about?",
        "deep":false
    },
    {
        "question":"What is your favourite form of physical or mental exercise?",
        "deep":false
    },
    {
        "question":"Share an instance when you ignored red flags in a person.",
        "deep":false
    },
    {
        "question":"What would you do if you would get 1 million USD?",
        "deep":false
    },
    {
        "question":"Complete the sentence: No matter how much I respect and appreciate someone, I would never...",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Which superhero ability would you like to have?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What is your favourite movie or series and why?",
        "deep":false
    },
    {
        "question":"What do you look for in a line manager?",
        "deep":false
    },
    {
        "question":"What life experiences have made you the person you are today?",
        "deep":false
    },
    {
        "question":"Are you able to be your authentic self at work? Explain why / why not?",
        "deep":false
    },
    {
        "question":"What does your best possible self look like? What skills and character strengths do you need to get there?",
        "deep":false
    },
    {
        "question":"What are you most grateful for.",
        "deep":false
    },
    {
        "question":"What is your biggest concern and what is in your control to improve the situation?",
        "deep":true
    },
    {
        "question":"How does exclusion feel to you?",
        "deep":true
    },
    {
        "question":"Share a situation where your opinion or reaction might have been biased.",
        "deep":false
    },
    {
        "question":"Share a recent moment when you felt proud of yourself.",
        "deep":false
    },
    {
        "question":"What inspires you the most and why?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Rate my problem-solving skills and share any tips for improvement.",
        "deep":true
    },
    {
        "question":"Is there anything you´re passionate about that most people might find weird?",
        "deep":false
    },
    {
        "question":"What do you dislike that most people love?",
        "deep":false
    },
    {
        "question":"What´s your biggest goal for this year?",
        "deep":false
    },
    {
        "question":"Share the story of your first job and what it taught you.",
        "deep":false
    },
    {
        "question":"If your current situation in life would be a (fictional) TV series, what would it be called, and what episode are we in?",
        "deep":false
    },
    {
        "question":"What´s the most important lesson a past work experience has taught you that you applied to the current job?",
        "deep":false
    },
    {
        "question":"How do you think your job affects your private life?",
        "deep":false
    },
    {
        "question":"What do you like most about your current job?",
        "deep":false
    },
    {
        "question":"How would you describe yourself as a friend?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience?",
        "deep":false
    },
    {
        "question":"Share something you´ve always wanted to try but haven´t yet?",
        "deep":false
    },
    {
        "question":"What is something you´re currently working on in your leisure time?",
        "deep":false
    },
    {
        "question":"Share the story of the last time you struggled to succeed in doing something.",
        "deep":false
    },
    {
        "question":"What is your favourite motto or quote?",
        "deep":false
    },
    {
        "question":"What is your favourite way to unwind and relax?",
        "deep":false
    },
    {
        "question":"What do you appreciate most about your team´s culture & spirit?",
        "deep":false
    },
    {
        "question":"If you could have any job in the world, what would it be?",
        "deep":false
    },
    {
        "question":"What is the most creative job or activity you ever did?",
        "deep":false
    },
    {
        "question":"What is the most creative way you´ve used social media?",
        "deep":false
    },
    {
        "question":"Can you give an example of a time when you had to navigate a dificult situation with an important stakeholder?",
        "deep":false
    },
    {
        "question":"How do you manage difficult conversations?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience related to collaboration and teamwork?",
        "deep":false
    },
    {
        "question":"Complete the sentence: A recurring pattern that I notice in my life is… ",
        "deep":false
    },
    {
        "question":"How do you define diversity?",
        "deep":false
    },
    {
        "question":"When was the last time you lost your temper and what caused it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): What is your favourite travel destination and why?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): How would you describe your relationship with food?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How have you seen me grow so far?",
        "deep":false
    },
    {
        "question":"On a scale of 1-10, how open do you feel the team is with you? Please explain.",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one difference between us that you like?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one similarity between us that you like?",
        "deep":false
    },
    {
        "question":"What about your relationship with the current team are you most proud of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If you were to set me up on a blind date and tell the date about me, what would you say?",
        "deep":false
    },
    {
        "question":"Why do you think numerous people suffer from loneliness, and what could change that situation?",
        "deep":false
    },
    {
        "question":"Why do you think so many people suffer from mental health issues?",
        "deep":false
    },
    {
        "question":"What goal would feel best for you to accomplish this year, and how can I support you in that?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What am I most qualified to give advice about?",
        "deep":false
    },
    {
        "question":"Is there anyone in the team who helped you become a better person? If yes, how?",
        "deep":false
    },
    {
        "question":"What do you think our defining characteristic is as a team?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If we would start a business together, what would it be?",
        "deep":false
    },
    {
        "question":"What could other teams learn from us?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s a superpower of mine that I may not be aware of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Finish the sentence: I´m proudest of you for…",
        "deep":false
    },
    {
        "question":"What is your favourite thing about working with this team?",
        "deep":false
    },
    {
        "question":"How do you think a team can learn from failures and use them to improve?",
        "deep":false
    },
    {
        "question":"What do you think is the most common cause of conflict in a team? How would you solve it?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How well do you know me: What characteristics do I appreciate in a person?",
        "deep":true
    },
    {
        "question":"Share a time when you felt uncomfortable and forced to fit in.",
        "deep":true
    },
    {
        "question":"What worries you?",
        "deep":true
    },
    {
        "question":"What steps do you think we should take to create a more inclusive team environment?",
        "deep":false
    },
    {
        "question":"Are you satisfied with your current career stage? Explain why or why not?",
        "deep":false
    },
    {
        "question":"Share a time when you really screwed up.",
        "deep":false
    },
    {
        "question":"What would you wish for your children to know (if you had/have children)?",
        "deep":false
    },
    {
        "question":"If you had three labels that had been assigned to you, what would they be?",
        "deep":false
    },
    {
        "question":"What are you currently working on (outside business)?",
        "deep":false
    },
    {
        "question":"How do you deal with your own anger?",
        "deep":false
    },
    {
        "question":"Under what circumstances would you end a friendship?",
        "deep":false
    },
    {
        "question":"Share an experience from your professional life when someone betrayed your trust?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What do you need to fully trust someone?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel seen, heard, and accepted when...",
        "deep":false
    },
    {
        "question":"Do your parents truly know you?",
        "deep":false
    },
    {
        "question":"Share an instance when you wronged a friend or workmate. How did the person react and how did you feel?",
        "deep":false
    },
    {
        "question":"Do you feel seen and appreciated within the wider organization?",
        "deep":false
    },
    {
        "question":"Share the story of the first time you fell in love.",
        "deep":false
    },
    {
        "question":"Share a memory from your childhood which stands out.",
        "deep":false
    },
    {
        "question":"Tell us about a moment when your words or actions came back to harm you.",
        "deep":false
    },
    {
        "question":"Have you ever had a dysfunctional relationship? How did you cope with it?",
        "deep":true
    },
    {
        "question":"Share a moment when you experienced immense kindness.",
        "deep":false
    },
    {
        "question":"Do you prefer diverting attention away from you or being the center of attention? Why?",
        "deep":false
    },
    {
        "question":"What is a hard truth that you had to face in your life?",
        "deep":true
    },
    {
        "question":"What should people remember about your life story, and how should it make them feel?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Describe your relationship with me in one word. Please explain.",
        "deep":false
    },
    {
        "question":"What is an experience you wish you never had to go through?",
        "deep":true
    },
    {
        "question":"Share a moment where you had to be brave?",
        "deep":true
    },
    {
        "question":"When was the last time you felt misunderstood?",
        "deep":false
    },
    {
        "question":"What is the greatest (non-tangible) gift you have ever received?",
        "deep":false
    },
    {
        "question":"What behaviour do you tend to ignore in yourself and others?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could turn back the time so that I can…",
        "deep":false
    },
    {
        "question":"How was your relationship with your mother, father and siblings (if any) while growing up?",
        "deep":true
    },
    {
        "question":"What is the one thing about yourself that you would like to change?",
        "deep":false
    },
    {
        "question":"What (if anything) was missing in your childhood?",
        "deep":true
    },
    {
        "question":"Complete the sentence: A moment I’d rather not revisit is…",
        "deep":true
    },
    {
        "question":"Complete the sentence: In order to do the best possible job, I need…",
        "deep":false
    },
    {
        "question":"Are you rather calm & collected or rather emotional & triggered in a conflict?",
        "deep":false
    },
    {
        "question":"Describe a situation in which you ignored your intuition and regretted it.",
        "deep":false
    },
    {
        "question":"Are you truly satisfied in your job / role? Please explain.",
        "deep":false
    },
    {
        "question":"What keeps you awake at night?",
        "deep":false
    },
    {
        "question":"Do you tend to compare yourself with others? If so, where does that tendency come from?",
        "deep":false
    },
    {
        "question":"Do you feel like you´re not doing enough in your professional or private life?",
        "deep":true
    },
    {
        "question":"Are you concerned about the way you come across to other people and the impression you create?",
        "deep":false
    },
    {
        "question":"Which areas in your professional and private life have you neglected, and what have been the consequences?",
        "deep":true
    },
    {
        "question":"What was passed on to you by your family and how does it affect your professional and private life?",
        "deep":true
    },
    {
        "question":"What advice or best practice do you have for being more trustworthy and compassionate toward others?",
        "deep":false
    },
    {
        "question":"What have you realized that is beyond your control?",
        "deep":false
    },
    {
        "question":"Share a story about a situation where someone crossed a line. How did you react?",
        "deep":true
    },
    {
        "question":"Complete the sentence: I tend to get emotional when I talk about… Please explain.",
        "deep":true
    },
    {
        "question":"Complete the sentence: A lifelong dream of mine is… Please explain.",
        "deep":false
    },
    {
        "question":"Share an experience when you had to be courageous.",
        "deep":true
    },
    {
        "question":"Complete the sentence: I am sensitive about… Please explain.",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: One of my rituals is…",
        "deep":false
    },
    {
        "question":"When was the last time you experienced guilt?",
        "deep":true
    },
    {
        "question":"When was the last time you felt lonely?",
        "deep":true
    },
    {
        "question":"Were you ever made fun of as a child? What did you learn from this experience?",
        "deep":true
    },
    {
        "question":"What experiences have you had with grief and how do you deal with it?",
        "deep":true
    },
    {
        "question":"Share an experience that made you panic, and what you did to overcome it.",
        "deep":true
    },
    {
        "question":"Which life experiences made you grow?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I would never ask for…",
        "deep":false
    },
    {
        "question":"What is stopping you from saying what someone means to you?",
        "deep":true
    },
    {
        "question":"Which parts of your personality do you find difficult to express?",
        "deep":false
    },
    {
        "question":"What do you consider a dealbreaker in a friendship or a professional relationship?",
        "deep":false
    },
    {
        "question":"Share a story that always makes you smile.",
        "deep":false
    },
    {
        "question":"Share a story that you haven´t told anyone in this room before.",
        "deep":false
    },
    {
        "question":"How do you wish to be remembered?",
        "deep":false
    },
    {
        "question":"If you could give your younger self one advice, what would it be?",
        "deep":false
    },
    {
        "question":"If you could change one thing about your career path, what would it be?",
        "deep":false
    },
    {
        "question":"When was the last time you felt vulnerable?",
        "deep":true
    },
    {
        "question":"Have you changed parts of yourself to meet someone else´s expectations?",
        "deep":true
    },
    {
        "question":"What have you not yet forgiven and how do you feel about it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel emotionally safe around people when…",
        "deep":false
    },
    {
        "question":"What did you have to unlearn as you got older?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What initial assumption did you make about me that turned out to be wrong?",
        "deep":true
    },
    {
        "question":"Question to the next person in the round: Is there anything you don´t know about me but would like to know?",
        "deep":false
    },
    {
        "question":"What triggers you the most during a verbal confrontation?",
        "deep":false
    },
    {
        "question":"What did you learn from your parents´ relationship that you would like to apply or avoid?",
        "deep":false
    }
],
"Miscellaneous": [
    {
        "question":"Share a past experience that brings you joy when you remember it.",
        "deep":false
    },
    {
        "question":"Share some of your personal life lessons which helped you succeed in life.",
        "deep":false
    },
    {
        "question":"What has the Coronavirus disease taught you?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What was your first impression about me, and how did it change in the meantime?",
        "deep":true
    },
    {
        "question":"Question for all (quick round): Which music genre matches your personality?",
        "deep":false
    },
    {
        "question":"Name two or three things that you are grateful for in this moment?",
        "deep":false
    },
    {
        "question":"Which was the topic of the last book you read, and what did you learn from it?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I respond to stress by...",
        "deep":false
    },
    {
        "question":"What habit or behaviour would you like to let go of?",
        "deep":false
    },
    {
        "question":"Is it better to be autocratic or servile? Please explain.",
        "deep":false
    },
    {
        "question":"What are you most curious about to experience in the near future?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I feel relaxed, balanced and focused when…",
        "deep":false
    },
    {
        "question":"Share a special item that you always have in your pocket or bag.",
        "deep":false
    },
    {
        "question":"What do you always take with you when you travel?",
        "deep":false
    },
    {
        "question":"What is your biggest regret (work and career related)?",
        "deep":false
    },
    {
        "question":"What means diversity, equity and inclusion to you?",
        "deep":false
    },
    {
        "question":"What are you most proud of?",
        "deep":false
    },
    {
        "question":"On a spectrum of extroverts and introverts, where do you lie?",
        "deep":false
    },
    {
        "question":"How do you define spirituality, and what does it mean to you?",
        "deep":false
    },
    {
        "question":"Who is your biggest idol, and why?",
        "deep":false
    },
    {
        "question":"Do you tend to put the wants and needs of others above yours? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: If I were the CEO of this company, I would...",
        "deep":false
    },
    {
        "question":"How do you define a great company culture?",
        "deep":false
    },
    {
        "question":"How do you express your creativity?",
        "deep":false
    },
    {
        "question":"Are you closer to your father or mother? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: The most important character trait for me in a friend is...",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What’s one thing I could do to improve to generate a bigger impact?",
        "deep":false
    },
    {
        "question":"Have you ever been betrayed or cheated on?",
        "deep":true
    },
    {
        "question":"How do you practice self-care in your daily business life?",
        "deep":false
    },
    {
        "question":"What did your first relationship teach you? And what did your last relationship teach you?",
        "deep":true
    },
    {
        "question":"If you were an animal, what would you be and why?",
        "deep":false
    },
    {
        "question":"How would you define your current relationship with your parents, and what´s the main reason for it?",
        "deep":true
    },
    {
        "question":"There are two types of people in this world. Believers and scientists. Which one are you, and why?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would rather kiss a snake than…",
        "deep":false
    },
    {
        "question":"Do you find it difficult to trust others? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What´s your favourite dish?",
        "deep":false
    },
    {
        "question":"What are you usually doing at 6 AM? And at 6 PM?",
        "deep":false
    },
    {
        "question":"Admit something about yourself.",
        "deep":false
    },
    {
        "question":"What do you think of when you hear the word - independence?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I am scared of…",
        "deep":false
    },
    {
        "question":"What does it mean to you to be recognized and rewared?",
        "deep":false
    },
    {
        "question":"What is your aim in life?",
        "deep":false
    },
    {
        "question":"What is currently challenging you?",
        "deep":false
    },
    {
        "question":"When did you last feel deeply connected to someone—whether a friend, mentor, or colleague?",
        "deep":false
    },
    {
        "question":"What are the most attractive and unattractive qualities in a person?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Joy to me is…",
        "deep":false
    },
    {
        "question":"Do you easily adapt to change? Can you share an example?",
        "deep":false
    },
    {
        "question":"How would a perfect day look like for you?",
        "deep":false
    },
    {
        "question":"What kind of footprint would you like to leave in this world?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I have stopped apologizing for my…",
        "deep":false
    },
    {
        "question":"Share one of your boundaries.",
        "deep":false
    },
    {
        "question":"Out of the 5 tastes - bitter, sour, sweet, salty and spicy; which taste do you like most, and which do you avoid?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would find it hard to forgive someone who…",
        "deep":false
    },
    {
        "question":"Which was your best subject in school and which subject did you struggle with?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a parent?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: To me a happy life is one that…",
        "deep":false
    },
    {
        "question":"Who do you consider to be family to you and why?",
        "deep":false
    },
    {
        "question":"How do you spend your leisure time?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a work colleague, and how as a friend?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Right now, I feel...",
        "deep":false
    },
    {
        "question":"How do you respond to an insult?",
        "deep":false
    },
    {
        "question":"Share one or two things that make you feel psychologically safe at work, and explain why.",
        "deep":false
    },
    {
        "question":"Share a funny story from your childhood.",
        "deep":false
    },
    {
        "question":"Can the need for safety and security coexist with the need for freedom and adventure within a relationship? Please explain.",
        "deep":false
    },
    {
        "question":"Complete the sentence: Something I hope others understand about me is…",
        "deep":false
    },
    {
        "question":"What was the best and worst advice you´ve ever got?",
        "deep":false
    },
    {
        "question":"Who do you wish you could get to know on a deeper level?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would like to be remembered for…",
        "deep":false
    },
    {
        "question":"Share a story of a funny moment in your life.",
        "deep":false
    },
    {
        "question":"Share two truths and a lie about yourself and let the rest figure out which is which.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I wish I could be a professional...",
        "deep":false
    },
    {
        "question":"Share the story of your given name.",
        "deep":false
    },
    {
        "question":"From your perspective, what are the three keys to a successful relationship.",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could … because …",
        "deep":false
    },
    {
        "question":"When did you last receive feedback that helped you grow? What was it about?",
        "deep":false
    },
    {
        "question":"What is your favourite form of physical or mental exercise?",
        "deep":false
    },
    {
        "question":"Share an instance when you ignored red flags in a person.",
        "deep":false
    },
    {
        "question":"What would you do if you would get 1 million USD?",
        "deep":false
    },
    {
        "question":"Complete the sentence: No matter how much I respect and appreciate someone, I would never...",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Which superhero ability would you like to have?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What is your favourite movie or series and why?",
        "deep":false
    },
    {
        "question":"What do you look for in a line manager?",
        "deep":false
    },
    {
        "question":"What life experiences have made you the person you are today?",
        "deep":false
    },
    {
        "question":"Are you able to be your authentic self at work? Explain why / why not?",
        "deep":false
    },
    {
        "question":"What does your best possible self look like? What skills and character strengths do you need to get there?",
        "deep":false
    },
    {
        "question":"What are you most grateful for.",
        "deep":false
    },
    {
        "question":"What is your biggest concern and what is in your control to improve the situation?",
        "deep":true
    },
    {
        "question":"How does exclusion feel to you?",
        "deep":true
    },
    {
        "question":"Share a situation where your opinion or reaction might have been biased.",
        "deep":false
    },
    {
        "question":"Share a recent moment when you felt proud of yourself.",
        "deep":false
    },
    {
        "question":"What inspires you the most and why?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Rate my problem-solving skills and share any tips for improvement.",
        "deep":true
    },
    {
        "question":"Is there anything you´re passionate about that most people might find weird?",
        "deep":false
    },
    {
        "question":"What do you dislike that most people love?",
        "deep":false
    },
    {
        "question":"What´s your biggest goal for this year?",
        "deep":false
    },
    {
        "question":"Share the story of your first job and what it taught you.",
        "deep":false
    },
    {
        "question":"If your current situation in life would be a (fictional) TV series, what would it be called, and what episode are we in?",
        "deep":false
    },
    {
        "question":"What´s the most important lesson a past work experience has taught you that you applied to the current job?",
        "deep":false
    },
    {
        "question":"How do you think your job affects your private life?",
        "deep":false
    },
    {
        "question":"What do you like most about your current job?",
        "deep":false
    },
    {
        "question":"How would you describe yourself as a friend?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience?",
        "deep":false
    },
    {
        "question":"Share something you´ve always wanted to try but haven´t yet?",
        "deep":false
    },
    {
        "question":"What is something you´re currently working on in your leisure time?",
        "deep":false
    },
    {
        "question":"Share the story of the last time you struggled to succeed in doing something.",
        "deep":false
    },
    {
        "question":"What is your favourite motto or quote?",
        "deep":false
    },
    {
        "question":"What is your favourite way to unwind and relax?",
        "deep":false
    },
    {
        "question":"What do you appreciate most about your team´s culture & spirit?",
        "deep":false
    },
    {
        "question":"If you could have any job in the world, what would it be?",
        "deep":false
    },
    {
        "question":"What is the most creative job or activity you ever did?",
        "deep":false
    },
    {
        "question":"What is the most creative way you´ve used social media?",
        "deep":false
    },
    {
        "question":"Can you give an example of a time when you had to navigate a dificult situation with an important stakeholder?",
        "deep":false
    },
    {
        "question":"How do you manage difficult conversations?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience related to collaboration and teamwork?",
        "deep":false
    },
    {
        "question":"Complete the sentence: A recurring pattern that I notice in my life is… ",
        "deep":false
    },
    {
        "question":"How do you define diversity?",
        "deep":false
    },
    {
        "question":"When was the last time you lost your temper and what caused it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): What is your favourite travel destination and why?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): How would you describe your relationship with food?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How have you seen me grow so far?",
        "deep":false
    },
    {
        "question":"On a scale of 1-10, how open do you feel the team is with you? Please explain.",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one difference between us that you like?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one similarity between us that you like?",
        "deep":false
    },
    {
        "question":"What about your relationship with the current team are you most proud of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If you were to set me up on a blind date and tell the date about me, what would you say?",
        "deep":false
    },
    {
        "question":"Why do you think numerous people suffer from loneliness, and what could change that situation?",
        "deep":false
    },
    {
        "question":"Why do you think so many people suffer from mental health issues?",
        "deep":false
    },
    {
        "question":"What goal would feel best for you to accomplish this year, and how can I support you in that?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What am I most qualified to give advice about?",
        "deep":false
    },
    {
        "question":"Is there anyone in the team who helped you become a better person? If yes, how?",
        "deep":false
    },
    {
        "question":"What do you think our defining characteristic is as a team?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If we would start a business together, what would it be?",
        "deep":false
    },
    {
        "question":"What could other teams learn from us?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s a superpower of mine that I may not be aware of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Finish the sentence: I´m proudest of you for…",
        "deep":false
    },
    {
        "question":"What is your favourite thing about working with this team?",
        "deep":false
    },
    {
        "question":"How do you think a team can learn from failures and use them to improve?",
        "deep":false
    },
    {
        "question":"What do you think is the most common cause of conflict in a team? How would you solve it?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How well do you know me: What characteristics do I appreciate in a person?",
        "deep":true
    },
    {
        "question":"Share a time when you felt uncomfortable and forced to fit in.",
        "deep":true
    },
    {
        "question":"What worries you?",
        "deep":true
    },
    {
        "question":"What steps do you think we should take to create a more inclusive team environment?",
        "deep":false
    },
    {
        "question":"Are you satisfied with your current career stage? Explain why or why not?",
        "deep":false
    },
    {
        "question":"Share a time when you really screwed up.",
        "deep":false
    },
    {
        "question":"What would you wish for your children to know (if you had/have children)?",
        "deep":false
    },
    {
        "question":"If you had three labels that had been assigned to you, what would they be?",
        "deep":false
    },
    {
        "question":"What are you currently working on (outside business)?",
        "deep":false
    },
    {
        "question":"How do you deal with your own anger?",
        "deep":false
    },
    {
        "question":"Under what circumstances would you end a friendship?",
        "deep":false
    },
    {
        "question":"Share an experience from your professional life when someone betrayed your trust?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What do you need to fully trust someone?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel seen, heard, and accepted when...",
        "deep":false
    },
    {
        "question":"Do your parents truly know you?",
        "deep":false
    },
    {
        "question":"Share an instance when you wronged a friend or workmate. How did the person react and how did you feel?",
        "deep":false
    },
    {
        "question":"Do you feel seen and appreciated within the wider organization?",
        "deep":false
    },
    {
        "question":"Share the story of the first time you fell in love.",
        "deep":false
    },
    {
        "question":"Share a memory from your childhood which stands out.",
        "deep":false
    },
    {
        "question":"Tell us about a moment when your words or actions came back to harm you.",
        "deep":false
    },
    {
        "question":"Have you ever had a dysfunctional relationship? How did you cope with it?",
        "deep":true
    },
    {
        "question":"Share a moment when you experienced immense kindness.",
        "deep":false
    },
    {
        "question":"Do you prefer diverting attention away from you or being the center of attention? Why?",
        "deep":false
    },
    {
        "question":"What is a hard truth that you had to face in your life?",
        "deep":true
    },
    {
        "question":"What should people remember about your life story, and how should it make them feel?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Describe your relationship with me in one word. Please explain.",
        "deep":false
    },
    {
        "question":"What is an experience you wish you never had to go through?",
        "deep":true
    },
    {
        "question":"Share a moment where you had to be brave?",
        "deep":true
    },
    {
        "question":"When was the last time you felt misunderstood?",
        "deep":false
    },
    {
        "question":"What is the greatest (non-tangible) gift you have ever received?",
        "deep":false
    },
    {
        "question":"What behaviour do you tend to ignore in yourself and others?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could turn back the time so that I can…",
        "deep":false
    },
    {
        "question":"How was your relationship with your mother, father and siblings (if any) while growing up?",
        "deep":true
    },
    {
        "question":"What is the one thing about yourself that you would like to change?",
        "deep":false
    },
    {
        "question":"What (if anything) was missing in your childhood?",
        "deep":true
    },
    {
        "question":"Complete the sentence: A moment I’d rather not revisit is…",
        "deep":true
    },
    {
        "question":"Complete the sentence: In order to do the best possible job, I need…",
        "deep":false
    },
    {
        "question":"Are you rather calm & collected or rather emotional & triggered in a conflict?",
        "deep":false
    },
    {
        "question":"Describe a situation in which you ignored your intuition and regretted it.",
        "deep":false
    },
    {
        "question":"Are you truly satisfied in your job / role? Please explain.",
        "deep":false
    },
    {
        "question":"What keeps you awake at night?",
        "deep":false
    },
    {
        "question":"Do you tend to compare yourself with others? If so, where does that tendency come from?",
        "deep":false
    },
    {
        "question":"Do you feel like you´re not doing enough in your professional or private life?",
        "deep":true
    },
    {
        "question":"Are you concerned about the way you come across to other people and the impression you create?",
        "deep":false
    },
    {
        "question":"Which areas in your professional and private life have you neglected, and what have been the consequences?",
        "deep":true
    },
    {
        "question":"What was passed on to you by your family and how does it affect your professional and private life?",
        "deep":true
    },
    {
        "question":"What advice or best practice do you have for being more trustworthy and compassionate toward others?",
        "deep":false
    },
    {
        "question":"What have you realized that is beyond your control?",
        "deep":false
    },
    {
        "question":"Share a story about a situation where someone crossed a line. How did you react?",
        "deep":true
    },
    {
        "question":"Complete the sentence: I tend to get emotional when I talk about… Please explain.",
        "deep":true
    },
    {
        "question":"Complete the sentence: A lifelong dream of mine is… Please explain.",
        "deep":false
    },
    {
        "question":"Share an experience when you had to be courageous.",
        "deep":true
    },
    {
        "question":"Complete the sentence: I am sensitive about… Please explain.",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: One of my rituals is…",
        "deep":false
    },
    {
        "question":"When was the last time you experienced guilt?",
        "deep":true
    },
    {
        "question":"When was the last time you felt lonely?",
        "deep":true
    },
    {
        "question":"Were you ever made fun of as a child? What did you learn from this experience?",
        "deep":true
    },
    {
        "question":"What experiences have you had with grief and how do you deal with it?",
        "deep":true
    },
    {
        "question":"Share an experience that made you panic, and what you did to overcome it.",
        "deep":true
    },
    {
        "question":"Which life experiences made you grow?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I would never ask for…",
        "deep":false
    },
    {
        "question":"What is stopping you from saying what someone means to you?",
        "deep":true
    },
    {
        "question":"Which parts of your personality do you find difficult to express?",
        "deep":false
    },
    {
        "question":"What do you consider a dealbreaker in a friendship or a professional relationship?",
        "deep":false
    },
    {
        "question":"Share a story that always makes you smile.",
        "deep":false
    },
    {
        "question":"Share a story that you haven´t told anyone in this room before.",
        "deep":false
    },
    {
        "question":"How do you wish to be remembered?",
        "deep":false
    },
    {
        "question":"If you could give your younger self one advice, what would it be?",
        "deep":false
    },
    {
        "question":"If you could change one thing about your career path, what would it be?",
        "deep":false
    },
    {
        "question":"When was the last time you felt vulnerable?",
        "deep":true
    },
    {
        "question":"Have you changed parts of yourself to meet someone else´s expectations?",
        "deep":true
    },
    {
        "question":"What have you not yet forgiven and how do you feel about it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel emotionally safe around people when…",
        "deep":false
    },
    {
        "question":"What did you have to unlearn as you got older?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What initial assumption did you make about me that turned out to be wrong?",
        "deep":true
    },
    {
        "question":"Question to the next person in the round: Is there anything you don´t know about me but would like to know?",
        "deep":false
    },
    {
        "question":"What triggers you the most during a verbal confrontation?",
        "deep":false
    },
    {
        "question":"What did you learn from your parents´ relationship that you would like to apply or avoid?",
        "deep":false
    }
],
"Professional Growth": [
    {
        "question":"Share a past experience that brings you joy when you remember it.",
        "deep":false
    },
    {
        "question":"Share some of your personal life lessons which helped you succeed in life.",
        "deep":false
    },
    {
        "question":"What has the Coronavirus disease taught you?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What was your first impression about me, and how did it change in the meantime?",
        "deep":true
    },
    {
        "question":"Question for all (quick round): Which music genre matches your personality?",
        "deep":false
    },
    {
        "question":"Name two or three things that you are grateful for in this moment?",
        "deep":false
    },
    {
        "question":"Which was the topic of the last book you read, and what did you learn from it?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I respond to stress by...",
        "deep":false
    },
    {
        "question":"What habit or behaviour would you like to let go of?",
        "deep":false
    },
    {
        "question":"Is it better to be autocratic or servile? Please explain.",
        "deep":false
    },
    {
        "question":"What are you most curious about to experience in the near future?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I feel relaxed, balanced and focused when…",
        "deep":false
    },
    {
        "question":"Share a special item that you always have in your pocket or bag.",
        "deep":false
    },
    {
        "question":"What do you always take with you when you travel?",
        "deep":false
    },
    {
        "question":"What is your biggest regret (work and career related)?",
        "deep":false
    },
    {
        "question":"What means diversity, equity and inclusion to you?",
        "deep":false
    },
    {
        "question":"What are you most proud of?",
        "deep":false
    },
    {
        "question":"On a spectrum of extroverts and introverts, where do you lie?",
        "deep":false
    },
    {
        "question":"How do you define spirituality, and what does it mean to you?",
        "deep":false
    },
    {
        "question":"Who is your biggest idol, and why?",
        "deep":false
    },
    {
        "question":"Do you tend to put the wants and needs of others above yours? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: If I were the CEO of this company, I would...",
        "deep":false
    },
    {
        "question":"How do you define a great company culture?",
        "deep":false
    },
    {
        "question":"How do you express your creativity?",
        "deep":false
    },
    {
        "question":"Are you closer to your father or mother? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: The most important character trait for me in a friend is...",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What’s one thing I could do to improve to generate a bigger impact?",
        "deep":false
    },
    {
        "question":"Have you ever been betrayed or cheated on?",
        "deep":true
    },
    {
        "question":"How do you practice self-care in your daily business life?",
        "deep":false
    },
    {
        "question":"What did your first relationship teach you? And what did your last relationship teach you?",
        "deep":true
    },
    {
        "question":"If you were an animal, what would you be and why?",
        "deep":false
    },
    {
        "question":"How would you define your current relationship with your parents, and what´s the main reason for it?",
        "deep":true
    },
    {
        "question":"There are two types of people in this world. Believers and scientists. Which one are you, and why?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would rather kiss a snake than…",
        "deep":false
    },
    {
        "question":"Do you find it difficult to trust others? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What´s your favourite dish?",
        "deep":false
    },
    {
        "question":"What are you usually doing at 6 AM? And at 6 PM?",
        "deep":false
    },
    {
        "question":"Admit something about yourself.",
        "deep":false
    },
    {
        "question":"What do you think of when you hear the word - independence?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I am scared of…",
        "deep":false
    },
    {
        "question":"What does it mean to you to be recognized and rewared?",
        "deep":false
    },
    {
        "question":"What is your aim in life?",
        "deep":false
    },
    {
        "question":"What is currently challenging you?",
        "deep":false
    },
    {
        "question":"When did you last feel deeply connected to someone—whether a friend, mentor, or colleague?",
        "deep":false
    },
    {
        "question":"What are the most attractive and unattractive qualities in a person?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Joy to me is…",
        "deep":false
    },
    {
        "question":"Do you easily adapt to change? Can you share an example?",
        "deep":false
    },
    {
        "question":"How would a perfect day look like for you?",
        "deep":false
    },
    {
        "question":"What kind of footprint would you like to leave in this world?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I have stopped apologizing for my…",
        "deep":false
    },
    {
        "question":"Share one of your boundaries.",
        "deep":false
    },
    {
        "question":"Out of the 5 tastes - bitter, sour, sweet, salty and spicy; which taste do you like most, and which do you avoid?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would find it hard to forgive someone who…",
        "deep":false
    },
    {
        "question":"Which was your best subject in school and which subject did you struggle with?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a parent?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: To me a happy life is one that…",
        "deep":false
    },
    {
        "question":"Who do you consider to be family to you and why?",
        "deep":false
    },
    {
        "question":"How do you spend your leisure time?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a work colleague, and how as a friend?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Right now, I feel...",
        "deep":false
    },
    {
        "question":"How do you respond to an insult?",
        "deep":false
    },
    {
        "question":"Share one or two things that make you feel psychologically safe at work, and explain why.",
        "deep":false
    },
    {
        "question":"Share a funny story from your childhood.",
        "deep":false
    },
    {
        "question":"Can the need for safety and security coexist with the need for freedom and adventure within a relationship? Please explain.",
        "deep":false
    },
    {
        "question":"Complete the sentence: Something I hope others understand about me is…",
        "deep":false
    },
    {
        "question":"What was the best and worst advice you´ve ever got?",
        "deep":false
    },
    {
        "question":"Who do you wish you could get to know on a deeper level?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would like to be remembered for…",
        "deep":false
    },
    {
        "question":"Share a story of a funny moment in your life.",
        "deep":false
    },
    {
        "question":"Share two truths and a lie about yourself and let the rest figure out which is which.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I wish I could be a professional...",
        "deep":false
    },
    {
        "question":"Share the story of your given name.",
        "deep":false
    },
    {
        "question":"From your perspective, what are the three keys to a successful relationship.",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could … because …",
        "deep":false
    },
    {
        "question":"When did you last receive feedback that helped you grow? What was it about?",
        "deep":false
    },
    {
        "question":"What is your favourite form of physical or mental exercise?",
        "deep":false
    },
    {
        "question":"Share an instance when you ignored red flags in a person.",
        "deep":false
    },
    {
        "question":"What would you do if you would get 1 million USD?",
        "deep":false
    },
    {
        "question":"Complete the sentence: No matter how much I respect and appreciate someone, I would never...",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Which superhero ability would you like to have?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What is your favourite movie or series and why?",
        "deep":false
    },
    {
        "question":"What do you look for in a line manager?",
        "deep":false
    },
    {
        "question":"What life experiences have made you the person you are today?",
        "deep":false
    },
    {
        "question":"Are you able to be your authentic self at work? Explain why / why not?",
        "deep":false
    },
    {
        "question":"What does your best possible self look like? What skills and character strengths do you need to get there?",
        "deep":false
    },
    {
        "question":"What are you most grateful for.",
        "deep":false
    },
    {
        "question":"What is your biggest concern and what is in your control to improve the situation?",
        "deep":true
    },
    {
        "question":"How does exclusion feel to you?",
        "deep":true
    },
    {
        "question":"Share a situation where your opinion or reaction might have been biased.",
        "deep":false
    },
    {
        "question":"Share a recent moment when you felt proud of yourself.",
        "deep":false
    },
    {
        "question":"What inspires you the most and why?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Rate my problem-solving skills and share any tips for improvement.",
        "deep":true
    },
    {
        "question":"Is there anything you´re passionate about that most people might find weird?",
        "deep":false
    },
    {
        "question":"What do you dislike that most people love?",
        "deep":false
    },
    {
        "question":"What´s your biggest goal for this year?",
        "deep":false
    },
    {
        "question":"Share the story of your first job and what it taught you.",
        "deep":false
    },
    {
        "question":"If your current situation in life would be a (fictional) TV series, what would it be called, and what episode are we in?",
        "deep":false
    },
    {
        "question":"What´s the most important lesson a past work experience has taught you that you applied to the current job?",
        "deep":false
    },
    {
        "question":"How do you think your job affects your private life?",
        "deep":false
    },
    {
        "question":"What do you like most about your current job?",
        "deep":false
    },
    {
        "question":"How would you describe yourself as a friend?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience?",
        "deep":false
    },
    {
        "question":"Share something you´ve always wanted to try but haven´t yet?",
        "deep":false
    },
    {
        "question":"What is something you´re currently working on in your leisure time?",
        "deep":false
    },
    {
        "question":"Share the story of the last time you struggled to succeed in doing something.",
        "deep":false
    },
    {
        "question":"What is your favourite motto or quote?",
        "deep":false
    },
    {
        "question":"What is your favourite way to unwind and relax?",
        "deep":false
    },
    {
        "question":"What do you appreciate most about your team´s culture & spirit?",
        "deep":false
    },
    {
        "question":"If you could have any job in the world, what would it be?",
        "deep":false
    },
    {
        "question":"What is the most creative job or activity you ever did?",
        "deep":false
    },
    {
        "question":"What is the most creative way you´ve used social media?",
        "deep":false
    },
    {
        "question":"Can you give an example of a time when you had to navigate a dificult situation with an important stakeholder?",
        "deep":false
    },
    {
        "question":"How do you manage difficult conversations?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience related to collaboration and teamwork?",
        "deep":false
    },
    {
        "question":"Complete the sentence: A recurring pattern that I notice in my life is… ",
        "deep":false
    },
    {
        "question":"How do you define diversity?",
        "deep":false
    },
    {
        "question":"When was the last time you lost your temper and what caused it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): What is your favourite travel destination and why?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): How would you describe your relationship with food?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How have you seen me grow so far?",
        "deep":false
    },
    {
        "question":"On a scale of 1-10, how open do you feel the team is with you? Please explain.",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one difference between us that you like?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one similarity between us that you like?",
        "deep":false
    },
    {
        "question":"What about your relationship with the current team are you most proud of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If you were to set me up on a blind date and tell the date about me, what would you say?",
        "deep":false
    },
    {
        "question":"Why do you think numerous people suffer from loneliness, and what could change that situation?",
        "deep":false
    },
    {
        "question":"Why do you think so many people suffer from mental health issues?",
        "deep":false
    },
    {
        "question":"What goal would feel best for you to accomplish this year, and how can I support you in that?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What am I most qualified to give advice about?",
        "deep":false
    },
    {
        "question":"Is there anyone in the team who helped you become a better person? If yes, how?",
        "deep":false
    },
    {
        "question":"What do you think our defining characteristic is as a team?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If we would start a business together, what would it be?",
        "deep":false
    },
    {
        "question":"What could other teams learn from us?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s a superpower of mine that I may not be aware of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Finish the sentence: I´m proudest of you for…",
        "deep":false
    },
    {
        "question":"What is your favourite thing about working with this team?",
        "deep":false
    },
    {
        "question":"How do you think a team can learn from failures and use them to improve?",
        "deep":false
    },
    {
        "question":"What do you think is the most common cause of conflict in a team? How would you solve it?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How well do you know me: What characteristics do I appreciate in a person?",
        "deep":true
    },
    {
        "question":"Share a time when you felt uncomfortable and forced to fit in.",
        "deep":true
    },
    {
        "question":"What worries you?",
        "deep":true
    },
    {
        "question":"What steps do you think we should take to create a more inclusive team environment?",
        "deep":false
    },
    {
        "question":"Are you satisfied with your current career stage? Explain why or why not?",
        "deep":false
    },
    {
        "question":"Share a time when you really screwed up.",
        "deep":false
    },
    {
        "question":"What would you wish for your children to know (if you had/have children)?",
        "deep":false
    },
    {
        "question":"If you had three labels that had been assigned to you, what would they be?",
        "deep":false
    },
    {
        "question":"What are you currently working on (outside business)?",
        "deep":false
    },
    {
        "question":"How do you deal with your own anger?",
        "deep":false
    },
    {
        "question":"Under what circumstances would you end a friendship?",
        "deep":false
    },
    {
        "question":"Share an experience from your professional life when someone betrayed your trust?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What do you need to fully trust someone?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel seen, heard, and accepted when...",
        "deep":false
    },
    {
        "question":"Do your parents truly know you?",
        "deep":false
    },
    {
        "question":"Share an instance when you wronged a friend or workmate. How did the person react and how did you feel?",
        "deep":false
    },
    {
        "question":"Do you feel seen and appreciated within the wider organization?",
        "deep":false
    },
    {
        "question":"Share the story of the first time you fell in love.",
        "deep":false
    },
    {
        "question":"Share a memory from your childhood which stands out.",
        "deep":false
    },
    {
        "question":"Tell us about a moment when your words or actions came back to harm you.",
        "deep":false
    },
    {
        "question":"Have you ever had a dysfunctional relationship? How did you cope with it?",
        "deep":true
    },
    {
        "question":"Share a moment when you experienced immense kindness.",
        "deep":false
    },
    {
        "question":"Do you prefer diverting attention away from you or being the center of attention? Why?",
        "deep":false
    },
    {
        "question":"What is a hard truth that you had to face in your life?",
        "deep":true
    },
    {
        "question":"What should people remember about your life story, and how should it make them feel?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Describe your relationship with me in one word. Please explain.",
        "deep":false
    },
    {
        "question":"What is an experience you wish you never had to go through?",
        "deep":true
    },
    {
        "question":"Share a moment where you had to be brave?",
        "deep":true
    },
    {
        "question":"When was the last time you felt misunderstood?",
        "deep":false
    },
    {
        "question":"What is the greatest (non-tangible) gift you have ever received?",
        "deep":false
    },
    {
        "question":"What behaviour do you tend to ignore in yourself and others?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could turn back the time so that I can…",
        "deep":false
    },
    {
        "question":"How was your relationship with your mother, father and siblings (if any) while growing up?",
        "deep":true
    },
    {
        "question":"What is the one thing about yourself that you would like to change?",
        "deep":false
    },
    {
        "question":"What (if anything) was missing in your childhood?",
        "deep":true
    },
    {
        "question":"Complete the sentence: A moment I’d rather not revisit is…",
        "deep":true
    },
    {
        "question":"Complete the sentence: In order to do the best possible job, I need…",
        "deep":false
    },
    {
        "question":"Are you rather calm & collected or rather emotional & triggered in a conflict?",
        "deep":false
    },
    {
        "question":"Describe a situation in which you ignored your intuition and regretted it.",
        "deep":false
    },
    {
        "question":"Are you truly satisfied in your job / role? Please explain.",
        "deep":false
    },
    {
        "question":"What keeps you awake at night?",
        "deep":false
    },
    {
        "question":"Do you tend to compare yourself with others? If so, where does that tendency come from?",
        "deep":false
    },
    {
        "question":"Do you feel like you´re not doing enough in your professional or private life?",
        "deep":true
    },
    {
        "question":"Are you concerned about the way you come across to other people and the impression you create?",
        "deep":false
    },
    {
        "question":"Which areas in your professional and private life have you neglected, and what have been the consequences?",
        "deep":true
    },
    {
        "question":"What was passed on to you by your family and how does it affect your professional and private life?",
        "deep":true
    },
    {
        "question":"What advice or best practice do you have for being more trustworthy and compassionate toward others?",
        "deep":false
    },
    {
        "question":"What have you realized that is beyond your control?",
        "deep":false
    },
    {
        "question":"Share a story about a situation where someone crossed a line. How did you react?",
        "deep":true
    },
    {
        "question":"Complete the sentence: I tend to get emotional when I talk about… Please explain.",
        "deep":true
    },
    {
        "question":"Complete the sentence: A lifelong dream of mine is… Please explain.",
        "deep":false
    },
    {
        "question":"Share an experience when you had to be courageous.",
        "deep":true
    },
    {
        "question":"Complete the sentence: I am sensitive about… Please explain.",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: One of my rituals is…",
        "deep":false
    },
    {
        "question":"When was the last time you experienced guilt?",
        "deep":true
    },
    {
        "question":"When was the last time you felt lonely?",
        "deep":true
    },
    {
        "question":"Were you ever made fun of as a child? What did you learn from this experience?",
        "deep":true
    },
    {
        "question":"What experiences have you had with grief and how do you deal with it?",
        "deep":true
    },
    {
        "question":"Share an experience that made you panic, and what you did to overcome it.",
        "deep":true
    },
    {
        "question":"Which life experiences made you grow?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I would never ask for…",
        "deep":false
    },
    {
        "question":"What is stopping you from saying what someone means to you?",
        "deep":true
    },
    {
        "question":"Which parts of your personality do you find difficult to express?",
        "deep":false
    },
    {
        "question":"What do you consider a dealbreaker in a friendship or a professional relationship?",
        "deep":false
    },
    {
        "question":"Share a story that always makes you smile.",
        "deep":false
    },
    {
        "question":"Share a story that you haven´t told anyone in this room before.",
        "deep":false
    },
    {
        "question":"How do you wish to be remembered?",
        "deep":false
    },
    {
        "question":"If you could give your younger self one advice, what would it be?",
        "deep":false
    },
    {
        "question":"If you could change one thing about your career path, what would it be?",
        "deep":false
    },
    {
        "question":"When was the last time you felt vulnerable?",
        "deep":true
    },
    {
        "question":"Have you changed parts of yourself to meet someone else´s expectations?",
        "deep":true
    },
    {
        "question":"What have you not yet forgiven and how do you feel about it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel emotionally safe around people when…",
        "deep":false
    },
    {
        "question":"What did you have to unlearn as you got older?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What initial assumption did you make about me that turned out to be wrong?",
        "deep":true
    },
    {
        "question":"Question to the next person in the round: Is there anything you don´t know about me but would like to know?",
        "deep":false
    },
    {
        "question":"What triggers you the most during a verbal confrontation?",
        "deep":false
    },
    {
        "question":"What did you learn from your parents´ relationship that you would like to apply or avoid?",
        "deep":false
    }
],

"Self-Reflection": [
    {
        "question":"Share a past experience that brings you joy when you remember it.",
        "deep":false
    },
    {
        "question":"Share some of your personal life lessons which helped you succeed in life.",
        "deep":false
    },
    {
        "question":"What has the Coronavirus disease taught you?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What was your first impression about me, and how did it change in the meantime?",
        "deep":true
    },
    {
        "question":"Question for all (quick round): Which music genre matches your personality?",
        "deep":false
    },
    {
        "question":"Name two or three things that you are grateful for in this moment?",
        "deep":false
    },
    {
        "question":"Which was the topic of the last book you read, and what did you learn from it?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I respond to stress by...",
        "deep":false
    },
    {
        "question":"What habit or behaviour would you like to let go of?",
        "deep":false
    },
    {
        "question":"Is it better to be autocratic or servile? Please explain.",
        "deep":false
    },
    {
        "question":"What are you most curious about to experience in the near future?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I feel relaxed, balanced and focused when…",
        "deep":false
    },
    {
        "question":"Share a special item that you always have in your pocket or bag.",
        "deep":false
    },
    {
        "question":"What do you always take with you when you travel?",
        "deep":false
    },
    {
        "question":"What is your biggest regret (work and career related)?",
        "deep":false
    },
    {
        "question":"What means diversity, equity and inclusion to you?",
        "deep":false
    },
    {
        "question":"What are you most proud of?",
        "deep":false
    },
    {
        "question":"On a spectrum of extroverts and introverts, where do you lie?",
        "deep":false
    },
    {
        "question":"How do you define spirituality, and what does it mean to you?",
        "deep":false
    },
    {
        "question":"Who is your biggest idol, and why?",
        "deep":false
    },
    {
        "question":"Do you tend to put the wants and needs of others above yours? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: If I were the CEO of this company, I would...",
        "deep":false
    },
    {
        "question":"How do you define a great company culture?",
        "deep":false
    },
    {
        "question":"How do you express your creativity?",
        "deep":false
    },
    {
        "question":"Are you closer to your father or mother? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: The most important character trait for me in a friend is...",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What’s one thing I could do to improve to generate a bigger impact?",
        "deep":false
    },
    {
        "question":"Have you ever been betrayed or cheated on?",
        "deep":true
    },
    {
        "question":"How do you practice self-care in your daily business life?",
        "deep":false
    },
    {
        "question":"What did your first relationship teach you? And what did your last relationship teach you?",
        "deep":true
    },
    {
        "question":"If you were an animal, what would you be and why?",
        "deep":false
    },
    {
        "question":"How would you define your current relationship with your parents, and what´s the main reason for it?",
        "deep":true
    },
    {
        "question":"There are two types of people in this world. Believers and scientists. Which one are you, and why?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would rather kiss a snake than…",
        "deep":false
    },
    {
        "question":"Do you find it difficult to trust others? Please explain.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What´s your favourite dish?",
        "deep":false
    },
    {
        "question":"What are you usually doing at 6 AM? And at 6 PM?",
        "deep":false
    },
    {
        "question":"Admit something about yourself.",
        "deep":false
    },
    {
        "question":"What do you think of when you hear the word - independence?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I am scared of…",
        "deep":false
    },
    {
        "question":"What does it mean to you to be recognized and rewared?",
        "deep":false
    },
    {
        "question":"What is your aim in life?",
        "deep":false
    },
    {
        "question":"What is currently challenging you?",
        "deep":false
    },
    {
        "question":"When did you last feel deeply connected to someone—whether a friend, mentor, or colleague?",
        "deep":false
    },
    {
        "question":"What are the most attractive and unattractive qualities in a person?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Joy to me is…",
        "deep":false
    },
    {
        "question":"Do you easily adapt to change? Can you share an example?",
        "deep":false
    },
    {
        "question":"How would a perfect day look like for you?",
        "deep":false
    },
    {
        "question":"What kind of footprint would you like to leave in this world?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I have stopped apologizing for my…",
        "deep":false
    },
    {
        "question":"Share one of your boundaries.",
        "deep":false
    },
    {
        "question":"Out of the 5 tastes - bitter, sour, sweet, salty and spicy; which taste do you like most, and which do you avoid?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would find it hard to forgive someone who…",
        "deep":false
    },
    {
        "question":"Which was your best subject in school and which subject did you struggle with?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a parent?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: To me a happy life is one that…",
        "deep":false
    },
    {
        "question":"Who do you consider to be family to you and why?",
        "deep":false
    },
    {
        "question":"How do you spend your leisure time?",
        "deep":false
    },
    {
        "question":"How do you want to be perceived as a work colleague, and how as a friend?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: Right now, I feel...",
        "deep":false
    },
    {
        "question":"How do you respond to an insult?",
        "deep":false
    },
    {
        "question":"Share one or two things that make you feel psychologically safe at work, and explain why.",
        "deep":false
    },
    {
        "question":"Share a funny story from your childhood.",
        "deep":false
    },
    {
        "question":"Can the need for safety and security coexist with the need for freedom and adventure within a relationship? Please explain.",
        "deep":false
    },
    {
        "question":"Complete the sentence: Something I hope others understand about me is…",
        "deep":false
    },
    {
        "question":"What was the best and worst advice you´ve ever got?",
        "deep":false
    },
    {
        "question":"Who do you wish you could get to know on a deeper level?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I would like to be remembered for…",
        "deep":false
    },
    {
        "question":"Share a story of a funny moment in your life.",
        "deep":false
    },
    {
        "question":"Share two truths and a lie about yourself and let the rest figure out which is which.",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I wish I could be a professional...",
        "deep":false
    },
    {
        "question":"Share the story of your given name.",
        "deep":false
    },
    {
        "question":"From your perspective, what are the three keys to a successful relationship.",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could … because …",
        "deep":false
    },
    {
        "question":"When did you last receive feedback that helped you grow? What was it about?",
        "deep":false
    },
    {
        "question":"What is your favourite form of physical or mental exercise?",
        "deep":false
    },
    {
        "question":"Share an instance when you ignored red flags in a person.",
        "deep":false
    },
    {
        "question":"What would you do if you would get 1 million USD?",
        "deep":false
    },
    {
        "question":"Complete the sentence: No matter how much I respect and appreciate someone, I would never...",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Which superhero ability would you like to have?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What is your favourite movie or series and why?",
        "deep":false
    },
    {
        "question":"What do you look for in a line manager?",
        "deep":false
    },
    {
        "question":"What life experiences have made you the person you are today?",
        "deep":false
    },
    {
        "question":"Are you able to be your authentic self at work? Explain why / why not?",
        "deep":false
    },
    {
        "question":"What does your best possible self look like? What skills and character strengths do you need to get there?",
        "deep":false
    },
    {
        "question":"What are you most grateful for.",
        "deep":false
    },
    {
        "question":"What is your biggest concern and what is in your control to improve the situation?",
        "deep":true
    },
    {
        "question":"How does exclusion feel to you?",
        "deep":true
    },
    {
        "question":"Share a situation where your opinion or reaction might have been biased.",
        "deep":false
    },
    {
        "question":"Share a recent moment when you felt proud of yourself.",
        "deep":false
    },
    {
        "question":"What inspires you the most and why?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Rate my problem-solving skills and share any tips for improvement.",
        "deep":true
    },
    {
        "question":"Is there anything you´re passionate about that most people might find weird?",
        "deep":false
    },
    {
        "question":"What do you dislike that most people love?",
        "deep":false
    },
    {
        "question":"What´s your biggest goal for this year?",
        "deep":false
    },
    {
        "question":"Share the story of your first job and what it taught you.",
        "deep":false
    },
    {
        "question":"If your current situation in life would be a (fictional) TV series, what would it be called, and what episode are we in?",
        "deep":false
    },
    {
        "question":"What´s the most important lesson a past work experience has taught you that you applied to the current job?",
        "deep":false
    },
    {
        "question":"How do you think your job affects your private life?",
        "deep":false
    },
    {
        "question":"What do you like most about your current job?",
        "deep":false
    },
    {
        "question":"How would you describe yourself as a friend?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience?",
        "deep":false
    },
    {
        "question":"Share something you´ve always wanted to try but haven´t yet?",
        "deep":false
    },
    {
        "question":"What is something you´re currently working on in your leisure time?",
        "deep":false
    },
    {
        "question":"Share the story of the last time you struggled to succeed in doing something.",
        "deep":false
    },
    {
        "question":"What is your favourite motto or quote?",
        "deep":false
    },
    {
        "question":"What is your favourite way to unwind and relax?",
        "deep":false
    },
    {
        "question":"What do you appreciate most about your team´s culture & spirit?",
        "deep":false
    },
    {
        "question":"If you could have any job in the world, what would it be?",
        "deep":false
    },
    {
        "question":"What is the most creative job or activity you ever did?",
        "deep":false
    },
    {
        "question":"What is the most creative way you´ve used social media?",
        "deep":false
    },
    {
        "question":"Can you give an example of a time when you had to navigate a dificult situation with an important stakeholder?",
        "deep":false
    },
    {
        "question":"How do you manage difficult conversations?",
        "deep":false
    },
    {
        "question":"What is your most memorable experience related to collaboration and teamwork?",
        "deep":false
    },
    {
        "question":"Complete the sentence: A recurring pattern that I notice in my life is… ",
        "deep":false
    },
    {
        "question":"How do you define diversity?",
        "deep":false
    },
    {
        "question":"When was the last time you lost your temper and what caused it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): What is your favourite travel destination and why?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): How would you describe your relationship with food?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How have you seen me grow so far?",
        "deep":false
    },
    {
        "question":"On a scale of 1-10, how open do you feel the team is with you? Please explain.",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one difference between us that you like?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s one similarity between us that you like?",
        "deep":false
    },
    {
        "question":"What about your relationship with the current team are you most proud of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If you were to set me up on a blind date and tell the date about me, what would you say?",
        "deep":false
    },
    {
        "question":"Why do you think numerous people suffer from loneliness, and what could change that situation?",
        "deep":false
    },
    {
        "question":"Why do you think so many people suffer from mental health issues?",
        "deep":false
    },
    {
        "question":"What goal would feel best for you to accomplish this year, and how can I support you in that?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What am I most qualified to give advice about?",
        "deep":false
    },
    {
        "question":"Is there anyone in the team who helped you become a better person? If yes, how?",
        "deep":false
    },
    {
        "question":"What do you think our defining characteristic is as a team?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: If we would start a business together, what would it be?",
        "deep":false
    },
    {
        "question":"What could other teams learn from us?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What´s a superpower of mine that I may not be aware of?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Finish the sentence: I´m proudest of you for…",
        "deep":false
    },
    {
        "question":"What is your favourite thing about working with this team?",
        "deep":false
    },
    {
        "question":"How do you think a team can learn from failures and use them to improve?",
        "deep":false
    },
    {
        "question":"What do you think is the most common cause of conflict in a team? How would you solve it?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: How well do you know me: What characteristics do I appreciate in a person?",
        "deep":true
    },
    {
        "question":"Share a time when you felt uncomfortable and forced to fit in.",
        "deep":true
    },
    {
        "question":"What worries you?",
        "deep":true
    },
    {
        "question":"What steps do you think we should take to create a more inclusive team environment?",
        "deep":false
    },
    {
        "question":"Are you satisfied with your current career stage? Explain why or why not?",
        "deep":false
    },
    {
        "question":"Share a time when you really screwed up.",
        "deep":false
    },
    {
        "question":"What would you wish for your children to know (if you had/have children)?",
        "deep":false
    },
    {
        "question":"If you had three labels that had been assigned to you, what would they be?",
        "deep":false
    },
    {
        "question":"What are you currently working on (outside business)?",
        "deep":false
    },
    {
        "question":"How do you deal with your own anger?",
        "deep":false
    },
    {
        "question":"Under what circumstances would you end a friendship?",
        "deep":false
    },
    {
        "question":"Share an experience from your professional life when someone betrayed your trust?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): What do you need to fully trust someone?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel seen, heard, and accepted when...",
        "deep":false
    },
    {
        "question":"Do your parents truly know you?",
        "deep":false
    },
    {
        "question":"Share an instance when you wronged a friend or workmate. How did the person react and how did you feel?",
        "deep":false
    },
    {
        "question":"Do you feel seen and appreciated within the wider organization?",
        "deep":false
    },
    {
        "question":"Share the story of the first time you fell in love.",
        "deep":false
    },
    {
        "question":"Share a memory from your childhood which stands out.",
        "deep":false
    },
    {
        "question":"Tell us about a moment when your words or actions came back to harm you.",
        "deep":false
    },
    {
        "question":"Have you ever had a dysfunctional relationship? How did you cope with it?",
        "deep":true
    },
    {
        "question":"Share a moment when you experienced immense kindness.",
        "deep":false
    },
    {
        "question":"Do you prefer diverting attention away from you or being the center of attention? Why?",
        "deep":false
    },
    {
        "question":"What is a hard truth that you had to face in your life?",
        "deep":true
    },
    {
        "question":"What should people remember about your life story, and how should it make them feel?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: Describe your relationship with me in one word. Please explain.",
        "deep":false
    },
    {
        "question":"What is an experience you wish you never had to go through?",
        "deep":true
    },
    {
        "question":"Share a moment where you had to be brave?",
        "deep":true
    },
    {
        "question":"When was the last time you felt misunderstood?",
        "deep":false
    },
    {
        "question":"What is the greatest (non-tangible) gift you have ever received?",
        "deep":false
    },
    {
        "question":"What behaviour do you tend to ignore in yourself and others?",
        "deep":false
    },
    {
        "question":"Complete the sentence: I wish I could turn back the time so that I can…",
        "deep":false
    },
    {
        "question":"How was your relationship with your mother, father and siblings (if any) while growing up?",
        "deep":true
    },
    {
        "question":"What is the one thing about yourself that you would like to change?",
        "deep":false
    },
    {
        "question":"What (if anything) was missing in your childhood?",
        "deep":true
    },
    {
        "question":"Complete the sentence: A moment I’d rather not revisit is…",
        "deep":true
    },
    {
        "question":"Complete the sentence: In order to do the best possible job, I need…",
        "deep":false
    },
    {
        "question":"Are you rather calm & collected or rather emotional & triggered in a conflict?",
        "deep":false
    },
    {
        "question":"Describe a situation in which you ignored your intuition and regretted it.",
        "deep":false
    },
    {
        "question":"Are you truly satisfied in your job / role? Please explain.",
        "deep":false
    },
    {
        "question":"What keeps you awake at night?",
        "deep":false
    },
    {
        "question":"Do you tend to compare yourself with others? If so, where does that tendency come from?",
        "deep":false
    },
    {
        "question":"Do you feel like you´re not doing enough in your professional or private life?",
        "deep":true
    },
    {
        "question":"Are you concerned about the way you come across to other people and the impression you create?",
        "deep":false
    },
    {
        "question":"Which areas in your professional and private life have you neglected, and what have been the consequences?",
        "deep":true
    },
    {
        "question":"What was passed on to you by your family and how does it affect your professional and private life?",
        "deep":true
    },
    {
        "question":"What advice or best practice do you have for being more trustworthy and compassionate toward others?",
        "deep":false
    },
    {
        "question":"What have you realized that is beyond your control?",
        "deep":false
    },
    {
        "question":"Share a story about a situation where someone crossed a line. How did you react?",
        "deep":true
    },
    {
        "question":"Complete the sentence: I tend to get emotional when I talk about… Please explain.",
        "deep":true
    },
    {
        "question":"Complete the sentence: A lifelong dream of mine is… Please explain.",
        "deep":false
    },
    {
        "question":"Share an experience when you had to be courageous.",
        "deep":true
    },
    {
        "question":"Complete the sentence: I am sensitive about… Please explain.",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: One of my rituals is…",
        "deep":false
    },
    {
        "question":"When was the last time you experienced guilt?",
        "deep":true
    },
    {
        "question":"When was the last time you felt lonely?",
        "deep":true
    },
    {
        "question":"Were you ever made fun of as a child? What did you learn from this experience?",
        "deep":true
    },
    {
        "question":"What experiences have you had with grief and how do you deal with it?",
        "deep":true
    },
    {
        "question":"Share an experience that made you panic, and what you did to overcome it.",
        "deep":true
    },
    {
        "question":"Which life experiences made you grow?",
        "deep":false
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I would never ask for…",
        "deep":false
    },
    {
        "question":"What is stopping you from saying what someone means to you?",
        "deep":true
    },
    {
        "question":"Which parts of your personality do you find difficult to express?",
        "deep":false
    },
    {
        "question":"What do you consider a dealbreaker in a friendship or a professional relationship?",
        "deep":false
    },
    {
        "question":"Share a story that always makes you smile.",
        "deep":false
    },
    {
        "question":"Share a story that you haven´t told anyone in this room before.",
        "deep":false
    },
    {
        "question":"How do you wish to be remembered?",
        "deep":false
    },
    {
        "question":"If you could give your younger self one advice, what would it be?",
        "deep":false
    },
    {
        "question":"If you could change one thing about your career path, what would it be?",
        "deep":false
    },
    {
        "question":"When was the last time you felt vulnerable?",
        "deep":true
    },
    {
        "question":"Have you changed parts of yourself to meet someone else´s expectations?",
        "deep":true
    },
    {
        "question":"What have you not yet forgiven and how do you feel about it?",
        "deep":true
    },
    {
        "question":"Quick round (to everyone): Complete the sentence: I feel emotionally safe around people when…",
        "deep":false
    },
    {
        "question":"What did you have to unlearn as you got older?",
        "deep":false
    },
    {
        "question":"Question to the next person in the round: What initial assumption did you make about me that turned out to be wrong?",
        "deep":true
    },
    {
        "question":"Question to the next person in the round: Is there anything you don´t know about me but would like to know?",
        "deep":false
    },
    {
        "question":"What triggers you the most during a verbal confrontation?",
        "deep":false
    },
    {
        "question":"What did you learn from your parents´ relationship that you would like to apply or avoid?",
        "deep":false
    }
]



};

export default QuestionsData;