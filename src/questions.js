const questions = [
  {
    "type": "Basic",
    "questions": [
      "Tell me about yourself?",
      "What technology have you used?",
      "Why us?",
      "What do you bring to the table?",
      "What are your 3 strengths?",
      "What are your 3 weakness?",
      "What is your biggest strengths?",
      "What is your biggest weakness?",
      "Tell me about a feature you developed from start to finish.",
      "Give me 3 leadership principles."
    ]
  },
  {
    "type": "System Design",
    "questions": [
      "How would you design a warehouse system for Amazon.com",
      "How would you design Amazon.com so it can handle 10x more traffic than today",
      "How would you design Amazon.com's database (customers, orders, products, etc.)",
      "How would you design TinyURL",
      "How would you design Google's search autocomplete",
      "How would you design Dropbox",
      "How would you design a real time ranking system for Fortnite",
      "How would you design a parking payment system",
      "How would you design an electronic voting system",
      "How would you design a distributed cache system",
    ]
  },
  {
    "type": "Customer obsession",
    "questions": [
      "What is customer obsession?",
      "Tell me about a time you had to deal with a difficult customer",
      "Tell me about a time you made something much simpler for customers",
      "Which company has the best customer service and why?",
      "Tell me about a time you said no to a customer request and why"
    ],
    "definition": "Leaders start with the customer and work backwards. They work vigorously to earn and keep customer trust. Although leaders pay attention to competitors, they obsess over customers.",
    "explanation": "This is by far the most important leadership principle used at Amazon. Therefore, it is the most critical one to prepare for."
  },
  {
    "type": "Ownership",
    "questions": [
      "Tell me about a time you did something at work that wasn't your responsibility / in your job description",
      "Describe an instance where you had to make an important decision without approval from your boss",
      "Tell me about a time you took ownership of a problem that was not the focus of your organization",
      "When was the last time that you sacrificed a long term value to complete a short term task?"
    ],
    "definition": "Leaders are owners. They think long term and don’t sacrifice long-term value for short-term results. They act on behalf of the entire company, beyond just their own team. They never say “that’s not my job.",
    "explanation": "Interviewers at Amazon want to avoid hiring people who think, “That’s not my job!” When answering ownership questions, you’ll want to prove that you take initiative, can make tough decisions, and take responsibility for your mistakes."
  },
  {
    "type": "Bias for action",
    "questions": [
      "Tell me about a time you had to change your approach because you were going to miss a deadline",
      "Tell me about a time you had to make a decision with incomplete information. How did you make it and what was the outcome?",
      "Tell me about a time when you launched a feature with known risks",
      "Tell me about a time you broke a complex problem into simple sub-parts"
    ],
    "definition": "Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking.",
    "explanation": "Since Amazon likes to ship quickly, they also prefer to learn from doing (while also measuring results) vs. performing user research and making projections. They want to see that you can take calculated risks and move things forward."
  },
  {
    "type": "Have backbone; disagree and commit",
    "questions": [
      "Tell me about a time you had a conflict with a coworker or manager and how you approached it",
      "Tell me about a time you disagreed with your team and convinced them to change their position",
      "Tell me about a time you had a conflict with your team but decided to go ahead with their proposal",
      "Tell me about a time your work was criticized"
    ],
    "definition": "Have backbone; disagree and commit — \"Leaders are obligated to respectfully challenge decisions when they disagree, even when doing so is uncomfortable or exhausting. Leaders have conviction and are tenacious. They do not compromise for the sake of social cohesion. Once a decision is determined, they commit wholly.\"",
    "explanation": "Any group of smart leaders will disagree at some point. Amazon wants to see that you know when to challenge ideas and escalate problems to senior leadership. At the same time, they want to know you can sense the right time to move forward regardless of your disagreement."
  },
  {
    "type": "Invent and simplify",
    "questions": [
      "Tell me about a time you suggested a new approach",
      "What is the most innovative idea you've ever had?",
      "Tell me how you built a feature in an innovative way, give specific details"
    ],
    "definition": "Leaders expect and require innovation and invention from their teams and always find ways to simplify. They are externally aware, look for new ideas from everywhere, and are not limited by “not invented here.\" Because we do new things, we accept that we may be misunderstood for long periods of time.",
    "explanation": "Amazon relies on a culture of innovation. Answering invent and simplify questions is an opportunity to show your ability to create solutions when there is no obvious answer. You’ll also want to show that you know how to execute big ideas as simply and cheaply as possible."
  },
  {
    "type": "Dive deep",
    "questions": [
      "Tell me about a project in which you had to deep dive into analysis",
      "Tell me about the most complex problem you have worked on",
      "Describe an instance when you used a lot of data in a short period of time"
    ],
    "definition": "Leaders operate at all levels, stay connected to the details, audit frequently, and are skeptical when metrics and anecdote differ. No task is beneath them.",
    "explanation": "When something isn’t working, SDEs need to quickly find a solution. Interviewers want to see that you are excited to dive deep when problems arise."
  },
  {
    "type": "Are right, a lot",
    "questions": [
      "Describe a time you made a mistake",
      "Tell me about a time you applied judgment to a decision when data was not available",
      "Tell me about a time you had very little information about a project but still had to move forward"
    ],
    "definition": "Are right, a lot — \"Leaders are right a lot. They have strong judgement and good instincts. They seek diverse perspectives and work to disconfirm their beliefs.\"",
    "explanation": "Amazon expects its Software Development Engineers to produce solutions as quickly as possible and to make a lot of decisions with little information. You’ll want to demonstrate skill in taking calculated risks and show that you're comfortable disproving your own opinions before moving ahead."
  },
  {
    "type": "Deliver results",
    "questions": [
      "Tell me about the most challenging project you ever worked on",
      "How do you prioritize in your current role?",
      "What do you think are the most difficult parts of software engineering?"
    ],
    "definition": "Leaders focus on the key inputs for their business and deliver them with the right quality and in a timely fashion. Despite setbacks, they rise to the occasion and never settle.",
    "explanation": "Amazon values action over perfection. When answering questions related to delivering results, you’ll want to indicate that you dislike slipped deadlines and failed goals."
  },
  {
    "type": "Think big",
    "questions": [
      "Describe a time you proposed a non-intuitive solution to a problem and how you identified that it required a different way of thinking",
      "Give a specific example where you drove adoption for your vision and explain how you knew it had been adopted by others",
      "Tell me about your most significant accomplishment. Why was it significant?"
    ],
    "definition": "Thinking small is a self-fulfilling prophecy. Leaders create and communicate a bold direction that inspires results. They think differently and look around corners for ways to serve customers.",
    "explanation": "Amazon is huge and its SDEs need to build products that reach significant scale to make a difference for the business. As a result, interviewers will want to see that you can develop and articulate a bold vision."
  },
  {
    "type": "Frugality",
    "questions": [
      "Tell me about a time you successfully delivered a project without a budget or resources",
      "Describe the last time you figured out a way to keep an approach simple or to save on expenses"
    ],
    "definition": "Accomplish more with less. Constraints breed resourcefulness, self-sufficiency, and invention. There are no extra points for growing headcount, budget size, or fixed expense.",
    "explanation": "At every touchpoint, Amazon tries to provide customers with as much value for as little cost as possible. Interviewers will be looking for how you can support this idea while maintaining a constant drive for innovation."
  },
  {
    "type": "Learn and be curious",
    "questions": [
      "Explain something interesting you’ve learned recently",
      "Tell me about a time you taught yourself a skill",
      "Why Software Engineering?"
    ],
    "definition": "Leaders are never done learning and always seek to improve themselves. They are curious about new possibilities and act to explore them.",
    "explanation": "Amazon demands constant improvement in every part of their business. You’ll want to show that you are interested in learning new things and exploring new ideas. Some examples listed here are general interview questions, but they provide a perfect opportunity for you to address this principle."
  },
  {
    "type": "Insist on the highest standards",
    "questions": [
      "Describe a project that you wish you had done better and how you would do it differently today",
      "Tell me about the most successful project you've done",
      "How do you ensure standards are met when delivering projects?"
    ],
    "definition": "Leaders have relentlessly high standards — many people may think these standards are unreasonably high. Leaders are continually raising the bar and drive their teams to deliver high quality products, services, and processes. Leaders ensure that defects do not get sent down the line and that problems are fixed so they stay fixed.",
    "explanation": "Amazon takes the view that nothing is ever “good enough.” They’d like to see that you push for standards that are difficult to meet."
  },
  {
    "type": "Earn trust",
    "questions": [
      "How do you earn trust with a team?",
      "Tell me a piece of difficult feedback you received and how you handled it",
      "A co-worker constantly arrives late to a recurring meeting. What would you do?"
    ],
    "definition": "Leaders listen attentively, speak candidly, and treat others respectfully. They are vocally self-critical, even when doing so is awkward or embarrassing. Leaders do not believe their or their team’s body odor smells of perfume. They benchmark themselves and their teams against the best.",
    "explanation": "The key part of that principle candidates often miss is the “vocally self-critical.” Amazon wants SDEs who focus on fixing mistakes instead of figuring out who to blame. You’ll want to show that you take action when something is wrong and acknowledge your own faults before blaming other people and teams."
  },
  {
    "type": "Success and scale bring broad responsibility",
    "questions": [
      "Give me an example on when you made a decision which impacted the team or the company",
      "Can you tell me a decision that you made about your work and you regret now?"
    ],
    "definition": "We started in a garage, but we're not there anymore. We are big, we impact the world, and we are far from perfect. We must be humble and thoughtful about even the secondary effects of our actions. Our local communities, planet, and future generations need us to be better every day. We must begin each day with a determination to make better, do better, and be better for our customers, our employees, our partners, and the world at large. And we must end every day knowing we can do even more tomorrow. Leaders create more than they consume and always leave things better than how they found them.",
    "explanation": "Amazon wants its employees to understand the responsibility of working for a vast, impactful company. Show how you measure the impact of your decisions, both in your workspace and in the world around you (e.g. sustainability, justice, etc.). You must always be willing to improve."
  }
]

export default questions