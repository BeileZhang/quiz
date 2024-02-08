


const allQuestions = [
    {
      "question": "Which is NOT a foundation of Artificial Intelligence?",
      "options": ["Machine Learning", "Knowledge Representation", "Quantum Physics", "Problem Solving"],
      "answer": 2,
      "explanation": "While Machine Learning, Knowledge Representation, and Problem Solving are foundational concepts in Artificial Intelligence, Quantum Physics is not directly a foundation of AI."
    },
    {
      "question": "What type of search strategy does A* Search belong to?",
      "options": ["Uninformed Search", "Informed (Heuristic) Search", "Local Search", "Adversarial Search"],
      "answer": 1,
      "explanation": "A* Search uses heuristics to guide its search, making it an Informed (Heuristic) Search strategy."
    },
    {
      "question": "In logic, which component is specific to First-Order Logic and not Propositional Logic?",
      "options": ["Quantifiers", "Connectives", "Constants", "Truth Tables"],
      "answer": 0,
      "explanation": "Quantifiers, like 'for all' and 'there exists', are specific to First-Order Logic. Propositional Logic doesn't have quantifiers."
    },
    {
      "question": "In Bayesian Networks, to compute the probability of a node, you typically need the probabilities of which other nodes?",
      "options": ["Child Nodes", "Parent Nodes", "Unrelated Nodes", "Siblings Nodes"],
      "answer": 1,
      "explanation": "In Bayesian Networks, the probability of a node is typically computed based on its Parent Nodes."
    },
    {
      "question": "Which is a common optimization algorithm used in Deep Learning networks?",
      "options": ["Monte Carlo Method", "Dynamic Programming", "Simulated Annealing", "Stochastic Gradient Descent"],
      "answer": 3,
      "explanation": "Stochastic Gradient Descent (SGD) is a common optimization algorithm used to adjust parameters in learning algorithms, especially in Deep Learning."
    },
    {
      "question": "In Natural Language Processing, what is the core idea of the Transformer architecture?",
      "options": ["Convolution", "Recursion", "Attention Mechanism", "Reinforcement Learning"],
      "answer": 2,
      "explanation": "The Transformer architecture, particularly popularized by models like BERT, heavily relies on the Attention Mechanism to weigh the importance of different words in a sequence."
    },
    {
      "question": "When discussing the ethics of AI, what is typically a primary concern?",
      "options": ["Computing Power of AI", "Programming Language of AI", "AI's Decision's Impact on Society", "AI's Data Storage Techniques"],
      "answer": 2,
      "explanation": "The ethical implications of AI often revolve around the impact of AI's decisions on society, including issues of bias, privacy, autonomy, and more."
    },
    {
      "question": "Which environment type might have the characteristic that the current percept does not reliably indicate the current state?",
      "options": ["Fully Observable", "Partially Observable", "Deterministic", "Static"],
      "answer": 1,
      "explanation": "A Partially Observable environment is where agents can't fully detect the current state just through the current percept."
    },
    {
      "question": "Which of the following is a type of environment where every action has a predictable result?",
      "options": ["Stochastic", "Deterministic", "Episodic", "Sequential"],
      "answer": 1,
      "explanation": "In a Deterministic environment, every action has a predictable outcome. In contrast, in a Stochastic environment, actions might have random outcomes."
    },
    {
      "question": "What does the 'Monte Carlo Tree Search' method specifically apply to?",
      "options": ["Natural Language Processing", "Uninformed Search", "Games", "Robotics"],
      "answer": 2,
      "explanation": "Monte Carlo Tree Search (MCTS) is a heuristic search algorithm, especially used for decision-making in games."
    },
    {
      "question": "In which section would you most likely learn about backpropagation?",
      "options": ["Knowledge Representation", "Deep Learning", "Logical Agents", "Adversarial Search"],
      "answer": 1,
      "explanation": "Backpropagation is a central algorithm in training deep neural networks, which falls under the category of Deep Learning."
    },
    {
      "question": "Which method is commonly used for reasoning with uncertainty?",
      "options": ["First-Order Logic", "Bayesian Networks", "Decision Trees", "Heuristic Search"],
      "answer": 1,
      "explanation": "Bayesian Networks provide a graphical model for probabilistic relationships among a set of variables, making them a cornerstone for reasoning under uncertainty."
    },
    {
      "question": "Which of the following best describes 'Reinforcement Learning'?",
      "options": ["Learning from labeled examples", "Learning from feedback on actions", "Learning from large datasets", "Learning from rules"],
      "answer": 1,
      "explanation": "Reinforcement Learning is a type of machine learning where agents learn how to behave by receiving feedback on their actions, usually in the form of rewards or penalties."
    },
    {
      "question": "Where in AI is the 'Transformer Architecture' predominantly used?",
      "options": ["Adversarial Games", "Robotic Perception", "Natural Language Processing", "Image Formation"],
      "answer": 2,
      "explanation": "The Transformer Architecture has revolutionized Natural Language Processing tasks with models like BERT and GPT using it as their base architecture."
    },
    {
      "question": "In the context of robotics, what does 'SLAM' stand for?",
      "options": ["Sequential Learning and Memory", "Simultaneous Localization and Mapping", "Synchronized Learning and Movement", "Single Loop Action Mechanism"],
      "answer": 1,
      "explanation": "In robotics, 'SLAM' stands for Simultaneous Localization and Mapping, a process by which a robot builds up a map of an environment and simultaneously keeps track of its position within it."
    },
    {
      "question": "Which topic primarily discusses 'Heuristic Functions'?",
      "options": ["Knowledge Representation", "Problem-solving", "Machine Learning", "Natural Language Processing"],
      "answer": 1,
      "explanation": "Heuristic Functions are primarily discussed in the context of 'Problem-solving', especially in search algorithms to estimate the cost of reaching the goal."
    },
    {
      "question": "What is the main focus of 'First-Order Logic' compared to 'Propositional Logic'?",
      "options": ["Dealing with probabilities", "Introducing variables and quantifiers", "Understanding neural networks", "Handling games and agents"],
      "answer": 1,
      "explanation": "First-Order Logic extends Propositional Logic by introducing variables, predicates, and quantifiers, allowing more expressive knowledge representation."
    },
    {
      "question": "Which section would discuss 'Naive Bayes Models'?",
      "options": ["Quantifying Uncertainty", "Deep Learning", "Reinforcement Learning", "Logical Agents"],
      "answer": 0,
      "explanation": "Naive Bayes Models are a type of probabilistic classifier discussed under 'Quantifying Uncertainty'."
    },
    {
      "question": "Which approach involves agents learning optimal sequences of actions in interactive environments?",
      "options": ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Deep Learning"],
      "answer": 1,
      "explanation": "Reinforcement Learning involves agents learning to make decisions by performing certain actions in an environment to maximize some notion of cumulative reward."
    },
    {
      "question": "In which section would 'Word Embeddings' primarily be discussed?",
      "options": ["Adversarial Search", "Deep Learning for Natural Language Processing", "Robotics", "Automated Planning"],
      "answer": 1,
      "explanation": "Word Embeddings, which are used to represent words in a dense vector format, are primarily discussed in 'Deep Learning for Natural Language Processing'."
    },
    {
      "question": "What does 'Wumpus World' illustrate in the context of AI?",
      "options": ["Deep Neural Network architectures", "The challenges of robotics", "A game in adversarial search", "Knowledge-based agent design in a simplified environment"],
      "answer": 3,
      "explanation": "The 'Wumpus World' is a fictional underground environment used in the study of AI to illustrate the challenges and concepts of designing knowledge-based agents in a simplified setting."
    },
    {
      "question": "Which section would most likely discuss the 'Transformer Architecture'?",
      "options": ["Computer Vision", "Natural Language Processing", "Problem-solving", "Machine Learning"],
      "answer": 1,
      "explanation": "The 'Transformer Architecture' has been revolutionary in 'Natural Language Processing' and is discussed in the context of models such as BERT and GPT."
    },
    {
      "question": "What is the primary concern of 'Ethics of AI'?",
      "options": ["Designing more efficient algorithms", "Hardware requirements for AI", "Moral implications and societal impacts of AI technologies", "Learning algorithms of neural networks"],
      "answer": 2,
      "explanation": "The 'Ethics of AI' primarily concerns the moral implications, potential biases, societal impacts, and responsible use of AI technologies."
    },
    {
      "question": "Which section is most likely to cover the topic of 'Backpropagation'?",
      "options": ["Deep Learning", "Logical Agents", "Constraint Satisfaction Problems", "Probabilistic Reasoning"],
      "answer": 0,
      "explanation": "Backpropagation is a fundamental algorithm in training neural networks and is typically covered under 'Deep Learning'."
    },
    {
      "question": "What type of search strategy does not utilize any information about the goal?",
      "options": ["Heuristic Search", "Uninformed Search", "Local Search", "Alpha-beta Search"],
      "answer": 1,
      "explanation": "Uninformed Search, also known as blind search, does not use any information about the goal and simply explores all possible paths."
    },
    {
      "question": "Which section would most likely delve into the syntax and semantics of a formal system for knowledge representation?",
      "options": ["First-Order Logic", "Computer Vision", "Adversarial Search and Games", "Reinforcement Learning"],
      "answer": 0,
      "explanation": "First-Order Logic primarily covers the syntax and semantics of a formal system for representing and reasoning about knowledge."
    },
    {
      "question": "In which section is the 'Monte Carlo Tree Search' algorithm discussed?",
      "options": ["Probabilistic Programming", "Adversarial Search and Games", "Deep Learning", "Robotics"],
      "answer": 1,
      "explanation": "Monte Carlo Tree Search (MCTS) is an algorithm used for decision-making in games and is covered under 'Adversarial Search and Games'."
    },
    {
      "question": "Which topic primarily deals with uncertainty in sequences over time?",
      "options": ["Probabilistic Reasoning over Time", "Automated Planning", "Constraint Satisfaction Problems", "Learning from Examples"],
      "answer": 0,
      "explanation": "Probabilistic Reasoning over Time focuses on handling uncertainty in sequences of events or states over time, such as with Hidden Markov Models or Kalman Filters."
    },
    {
      "question": "Which section would discuss the challenges and methods for parsing sentences in a natural language?",
      "options": ["Natural Language Processing", "Quantifying Uncertainty", "Deep Learning", "Problem-solving"],
      "answer": 0,
      "explanation": "Natural Language Processing deals with understanding, interpreting, and generating human languages, which includes challenges like parsing."
    },
    {
      "question": "In which section would you find discussions about 'State Spaces' in relation to optimization problems?",
      "options": ["Search in Complex Environments", "Deep Learning for Natural Language Processing", "Making Simple Decisions", "Communicating, perceiving, and acting"],
      "answer": 0,
      "explanation": "Search in Complex Environments includes topics related to navigating large or complicated state spaces, especially in the context of optimization."
    },
    {
      "question": "Which of these sections is likely to discuss methods to handle 'bandit problems'?",
      "options": ["Making Complex Decisions", "Learning Probabilistic Models", "Computer Vision", "Problem-solving"],
      "answer": 0,
      "explanation": "Bandit problems are classic problems in decision making and reinforcement learning, and they are discussed under 'Making Complex Decisions'."
    },
    {
      "question": "Which section is most likely to cover the topic of 'Agents interacting in an environment'?",
      "options": ["Intelligent Agents", "Deep Learning", "Computer Vision", "Probabilistic Programming"],
      "answer": 0,
      "explanation": "The 'Intelligent Agents' section is primarily focused on the study of agents and how they interact within an environment."
    },
    {
      "question": "Where would you find discussions on the ethical implications of AI?",
      "options": ["First-Order Logic", "Philosophy, Ethics, and Safety of AI", "Search in Complex Environments", "Deep Learning"],
      "answer": 1,
      "explanation": "'Philosophy, Ethics, and Safety of AI' would be the most relevant section to discuss the ethical implications and considerations of artificial intelligence."
    },
    {
      "question": "Which section primarily discusses the representation of categories and objects in knowledge bases?",
      "options": ["Knowledge Representation", "Probabilistic Reasoning over Time", "Robotics", "Deep Learning"],
      "answer": 0,
      "explanation": "'Knowledge Representation' delves into various aspects of representing knowledge, including categories and objects."
    },
    {
      "question": "Which topic deals with decision-making in scenarios with multiple interacting agents?",
      "options": ["Robotics", "Making Simple Decisions", "Multiagent Decision Making", "Learning from Examples"],
      "answer": 2,
      "explanation": "'Multiagent Decision Making' focuses on decision-making processes in environments where multiple agents interact and possibly compete or collaborate."
    },
    {
      "question": "In which section would 'Bayesian Networks' be a primary topic?",
      "options": ["Probabilistic Reasoning", "First-Order Logic", "Reinforcement Learning", "Natural Language Processing"],
      "answer": 0,
      "explanation": "'Probabilistic Reasoning' is where Bayesian Networks, a type of probabilistic graphical model, would be a central topic."
    },
    {
      "question": "Where can one find the exploration of 'The limits of artificial intelligence'?",
      "options": ["The Future of AI", "Natural Language Processing", "Problem-solving", "Philosophy, Ethics, and Safety of AI"],
      "answer": 3,
      "explanation": "The 'Philosophy, Ethics, and Safety of AI' section would delve into discussions about the philosophical aspects and the limitations of AI."
    },
    {
      "question": "Which section would be most relevant for understanding 'Backtracking Search' methods?",
      "options": ["Adversarial Search and Games", "Constraint Satisfaction Problems", "Deep Learning", "Natural Language Processing"],
      "answer": 1,
      "explanation": "'Constraint Satisfaction Problems' would cover methods like 'Backtracking Search' that are used to solve these types of problems."
    },
    {
      "question": "Where would the study of 'Sequence-to-Sequence Models' in natural language tasks be covered?",
      "options": ["Computer Vision", "Deep Learning for Natural Language Processing", "Search in Complex Environments", "Learning Probabilistic Models"],
      "answer": 1,
      "explanation": "'Deep Learning for Natural Language Processing' would be the section discussing advanced topics like 'Sequence-to-Sequence Models' for NLP tasks."
    },
    {
      "question": "Which section would delve into the technical details of 'Convolutional Networks'?",
      "options": ["Learning from Examples", "Reinforcement Learning", "Computer Vision", "Deep Learning"],
      "answer": 3,
      "explanation": "'Deep Learning' is the section that discusses neural network architectures like 'Convolutional Networks'."
    },
    {
      "question": "Where is 'Game Theory' primarily discussed?",
      "options": ["Intelligent Agents", "Adversarial Search and Games", "Robotics", "Multiagent Decision Making"],
      "answer": 1,
      "explanation": "'Adversarial Search and Games' is the section that would focus on game-related concepts, including 'Game Theory'."
    },
    {
      "question": "Which section discusses 'Kalman Filters', a tool for temporal probabilistic reasoning?",
      "options": ["Probabilistic Reasoning", "Probabilistic Reasoning over Time", "Deep Learning", "Robotics"],
      "answer": 1,
      "explanation": "'Probabilistic Reasoning over Time' covers topics related to temporal models and would discuss 'Kalman Filters'."
    },
    {
      "question": "Where would you find the concept of 'Agents Based on Propositional Logic'?",
      "options": ["Logical Agents", "First-Order Logic", "Reinforcement Learning", "Deep Learning for Natural Language Processing"],
      "answer": 0,
      "explanation": "The 'Logical Agents' section would discuss the concept of agents and how they can be based on propositional logic."
    },
    {
      "question": "Which section primarily discusses problems related to uncertainty in actions and percepts?",
      "options": ["Multiagent Decision Making", "Planning and Control", "Planning Uncertain Movements", "Probabilistic Programming"],
      "answer": 2,
      "explanation": "'Planning Uncertain Movements' would delve into challenges and strategies for uncertain scenarios in robotic movements."
    },
    {
      "question": "Where would the exploration of 'Word Embeddings' in natural language processing be?",
      "options": ["Natural Language Processing", "Deep Learning", "Deep Learning for Natural Language Processing", "Computer Vision"],
      "answer": 2,
      "explanation": "'Deep Learning for Natural Language Processing' would be the section discussing topics like 'Word Embeddings' for NLP tasks."
    },
    {
      "question": "Which section focuses on problems where agents must act without full knowledge?",
      "options": ["Search in Partially Observable Environments", "Probabilistic Reasoning", "The Wumpus World", "Making Complex Decisions"],
      "answer": 0,
      "explanation": "'Search in Partially Observable Environments' is tailored to scenarios where agents operate without complete visibility or knowledge."
    },
    {
      "question": "Which section delves into 'Monte Carlo Tree Search'?",
      "options": ["Solving Problems by Searching", "Adversarial Search and Games", "Robotics", "Deep Learning"],
      "answer": 1,
      "explanation": "'Adversarial Search and Games' would be where strategies specific to game-tree search, like 'Monte Carlo Tree Search', are discussed."
    },
    {
      "question": "Which topic deals with 'The EM Algorithm'?",
      "options": ["Learning Probabilistic Models", "Deep Learning", "Reinforcement Learning", "Natural Language Processing"],
      "answer": 0,
      "explanation": "The 'Learning Probabilistic Models' section touches on statistical methods and algorithms, including 'The EM Algorithm'."
    },
    {
      "question": "Where can you find a discussion on 'The Transformer Architecture'?",
      "options": ["Natural Language Processing", "Deep Learning for Natural Language Processing", "Deep Learning", "Computer Vision"],
      "answer": 1,
      "explanation": "'Deep Learning for Natural Language Processing' covers advanced NLP methods including 'The Transformer Architecture'."
    },
    {
      "question": "What section discusses 'Backtracking Search for CSPs'?",
      "options": ["Constraint Satisfaction Problems", "Search in Complex Environments", "Probabilistic Reasoning", "Automated Planning"],
      "answer": 0,
      "explanation": "'Constraint Satisfaction Problems' is the section discussing techniques such as backtracking for solving CSPs."
    },
    {
      "question": "Where is 'Heuristic Alpha-beta Tree Search' primarily discussed?",
      "options": ["Intelligent Agents", "Multiagent Decision Making", "Robotics", "Adversarial Search and Games"],
      "answer": 3,
      "explanation": "'Adversarial Search and Games' is where you'd find specific game search strategies like 'Heuristic Alpha-beta Tree Search'."
    },
    {
      "question": "Which section covers 'Policy Search' in the context of learning optimal strategies?",
      "options": ["Learning from Examples", "Reinforcement Learning", "Deep Learning", "Automated Planning"],
      "answer": 1,
      "explanation": "In the 'Reinforcement Learning' section, methods to optimize strategies, like 'Policy Search', are explored."
    },
    {
      "question": "In which section would you explore the concept of 'Resolution' in the context of logical inference?",
      "options": ["Logical Agents", "Inference in First-Order Logic", "Knowledge Representation", "Probabilistic Reasoning"],
      "answer": 1,
      "explanation": "'Inference in First-Order Logic' is the section where logical inference techniques, including 'Resolution', are detailed."
    },
    {
      "question": "Which section focuses on the challenges and methodologies of 'Online Search Agents'?",
      "options": ["Intelligent Agents", "Search in Complex Environments", "Probabilistic Reasoning over Time", "Reinforcement Learning"],
      "answer": 1,
      "explanation": "'Search in Complex Environments' discusses the intricacies of agents searching in various scenarios, including online environments."
    },
    {
      "question": "Where would you find discussions on the ethics and potential risks of artificial intelligence?",
      "options": ["The Future of AI", "The Limits of AI", "Philosophy, Ethics, and Safety of AI", "Knowledge Representation"],
      "answer": 2,
      "explanation": "The 'Philosophy, Ethics, and Safety of AI' section is specifically devoted to discussing the ethical implications and potential hazards of AI."
    },
    {
      "question": "In which section can one find detailed explanations on 'Bayes Rule and Its Use' in uncertain environments?",
      "options": ["Quantifying Uncertainty", "Probabilistic Reasoning", "Deep Learning", "Learning Probabilistic Models"],
      "answer": 0,
      "explanation": "'Quantifying Uncertainty' touches on foundational probabilistic concepts like Bayes Rule for decision making under uncertainty."
    },
    {
      "question": "Which section discusses techniques like 'Ensemble Learning'?",
      "options": ["Learning from Examples", "Reinforcement Learning", "Deep Learning", "Learning Probabilistic Models"],
      "answer": 0,
      "explanation": "'Learning from Examples' is the section discussing various methods of supervised learning, including 'Ensemble Learning'."
    },
    {
      "question": "Where are 'Hidden Markov Models' mainly discussed?",
      "options": ["Probabilistic Reasoning over Time", "Probabilistic Reasoning", "Quantifying Uncertainty", "Deep Learning"],
      "answer": 0,
      "explanation": "'Probabilistic Reasoning over Time' is the section where time-dependent probabilistic methods, like 'Hidden Markov Models', are detailed."
    },
    {
      "question": "Which section deals with 'Applications of Reinforcement Learning'?",
      "options": ["Deep Learning", "Reinforcement Learning", "Robotics", "Natural Language Processing"],
      "answer": 1,
      "explanation": "'Reinforcement Learning' includes a discussion on various applications of reinforcement learning techniques."
    },
    {
      "question": "Where would you find information on 'Pretraining and Transfer Learning' for Natural Language Processing?",
      "options": ["Natural Language Processing", "Deep Learning for Natural Language Processing", "Computer Vision", "Deep Learning"],
      "answer": 1,
      "explanation": "'Deep Learning for Natural Language Processing' discusses advanced methods in NLP, including 'Pretraining and Transfer Learning'."
    },
    {
      "question": "What section discusses 'Backward Chaining' in logical inference?",
      "options": ["Inference in First-Order Logic", "Knowledge Representation", "Logical Agents", "Automated Planning"],
      "answer": 0,
      "explanation": "'Inference in First-Order Logic' includes discussions on logical inference methods like 'Backward Chaining'."
    },
    {
      "question": "Where can 'The Theory of Learning' be found?",
      "options": ["Learning Probabilistic Models", "Learning from Examples", "Deep Learning", "Reinforcement Learning"],
      "answer": 1,
      "explanation": "'Learning from Examples' includes fundamental concepts and theoretical aspects of learning."
    },
    {
      "question": "Which section covers 'The Ethics of AI'?",
      "options": ["The Future of AI", "Philosophy, Ethics, and Safety of AI", "The Limits of AI", "Quantifying Uncertainty"],
      "answer": 1,
      "explanation": "The 'Philosophy, Ethics, and Safety of AI' section discusses ethical considerations in AI."
    },
    {
      "question": "In which part does the discussion about 'Classifying Images' in computer vision take place?",
      "options": ["Deep Learning for Natural Language Processing", "Computer Vision", "Robotics", "Natural Language Processing"],
      "answer": 1,
      "explanation": "The 'Computer Vision' section includes topics related to image processing and classification."
    },
    {
      "question": "Where are 'Convolutional Networks' mainly discussed?",
      "options": ["Deep Learning", "Learning from Examples", "Reinforcement Learning", "Computer Vision"],
      "answer": 0,
      "explanation": "'Deep Learning' is where convolutional networks, a type of neural network, are mainly discussed."
    },
    {
      "question": "Which section provides insights into 'Multiattribute Utility Functions' in decision-making?",
      "options": ["Making Simple Decisions", "Making Complex Decisions", "Multiagent Decision Making", "Automated Planning"],
      "answer": 0,
      "explanation": "'Making Simple Decisions' covers decision-making concepts, including 'Multiattribute Utility Functions'."
    },
    {
      "question": "Which section would discuss the agent's behavior in relation to its environment?",
      "options": ["Intelligent Agents", "Search in Complex Environments", "Automated Planning", "Logical Agents"],
      "answer": 0,
      "explanation": "The 'Intelligent Agents' section provides insights into how agents interact and behave in relation to their environments."
    },
    {
      "question": "Where is 'The Wumpus World', a fictional underground environment, introduced?",
      "options": ["Intelligent Agents", "Problem-solving", "Logical Agents", "Inference in First-Order Logic"],
      "answer": 2,
      "explanation": "'The Wumpus World' is introduced in the 'Logical Agents' section."
    },
    {
      "question": "Which of these sections is primarily concerned with decision-making in a scenario where multiple agents are involved?",
      "options": ["Making Simple Decisions", "Learning from Examples", "Automated Planning", "Multiagent Decision Making"],
      "answer": 3,
      "explanation": "'Multiagent Decision Making' section deals with decisions in scenarios with multiple agents."
    },
    {
      "question": "Where can one find the topic 'Online Search Agents and Unknown Environments'?",
      "options": ["Search in Complex Environments", "Intelligent Agents", "Problem-solving", "Reinforcement Learning"],
      "answer": 0,
      "explanation": "'Online Search Agents and Unknown Environments' is discussed in the 'Search in Complex Environments' section."
    },
    {
      "question": "Which section primarily discusses the nuances of 'Backtracking Search for CSPs'?",
      "options": ["Adversarial Search and Games", "Constraint Satisfaction Problems", "Inference in First-Order Logic", "Probabilistic Reasoning"],
      "answer": 1,
      "explanation": "'Backtracking Search for CSPs' is a topic covered in 'Constraint Satisfaction Problems'."
    },
    {
      "question": "Where would one learn about 'The Transformer Architecture' in the context of NLP?",
      "options": ["Natural Language Processing", "Deep Learning for Natural Language Processing", "Computer Vision", "Learning from Examples"],
      "answer": 1,
      "explanation": "'The Transformer Architecture' for NLP is covered in 'Deep Learning for Natural Language Processing'."
    },
    {
      "question": "Which section discusses methods like 'Kalman Filters'?",
      "options": ["Probabilistic Reasoning over Time", "Learning Probabilistic Models", "Reinforcement Learning", "Deep Learning"],
      "answer": 0,
      "explanation": "'Probabilistic Reasoning over Time' is the section that discusses time-dependent probabilistic methods, including 'Kalman Filters'."
    },
    {
      "question": "Which section would be best for understanding 'The Ethics of AI'?",
      "options": ["The Future of AI", "Machine Learning", "Philosophy, Ethics, and Safety of AI", "Conclusions"],
      "answer": 2,
      "explanation": "The 'Philosophy, Ethics, and Safety of AI' section delves into the ethical considerations in AI."
    },
    {
      "question": "Where can 'Recurrent Neural Networks for NLP' be found?",
      "options": ["Deep Learning for Natural Language Processing", "Natural Language Processing", "Deep Learning", "Reinforcement Learning"],
      "answer": 0,
      "explanation": "'Recurrent Neural Networks for NLP' is a topic covered under 'Deep Learning for Natural Language Processing'."
    },
    {
      "question": "Which part of the book discusses the challenges and techniques associated with 'Planning Uncertain Movements' for robots?",
      "options": ["Natural Language Processing", "Computer Vision", "Robotics", "Deep Learning for Natural Language Processing"],
      "answer": 2,
      "explanation": "'Robotics' is the section that dives deep into the challenges and methods for 'Planning Uncertain Movements'."
    },
    {
      "question": "What discusses 'Online Search Agents and Unknown Environments'?",
      "options": ["Probabilistic Reasoning", "Search in Complex Environments", "Logical Agents", "Automated Planning"],
      "answer": 1,
      "explanation": "'Online Search Agents and Unknown Environments' is a topic covered in 'Search in Complex Environments'."
    },
    {
      "question": "Which section introduces and elaborates on 'Uninformed Search Strategies'?",
      "options": ["Search in Complex Environments", "Solving Problems by Searching", "Inference in First-Order Logic", "Adversarial Search and Games"],
      "answer": 1,
      "explanation": "'Uninformed Search Strategies' is discussed in 'Solving Problems by Searching'."
    },
    {
      "question": "Where can one learn about decision-making techniques when multiple agents have partial information about the environment?",
      "options": ["Making Simple Decisions", "Multiagent Decision Making", "Automated Planning", "Partially Observable Games"],
      "answer": 3,
      "explanation": "'Partially Observable Games' provides insights into decision-making in scenarios where agents have limited knowledge about the environment."
    },
    {
      "question": "In which section is 'Game Theory' primarily discussed?",
      "options": ["Adversarial Search and Games", "Multiagent Decision Making", "Reinforcement Learning", "Probabilistic Reasoning"],
      "answer": 0,
      "explanation": "'Game Theory' is a key topic in the 'Adversarial Search and Games' section."
    },
    {
      "question": "Where would you find an in-depth discussion on 'Resolution' in the context of First-Order Logic?",
      "options": ["Inference in First-Order Logic", "First-Order Logic", "Logical Agents", "Automated Planning"],
      "answer": 0,
      "explanation": "The topic 'Resolution' in the context of First-Order Logic is elaborated in 'Inference in First-Order Logic'."
    },
    {
      "question": "Which part of the book deals with 'Ontological Engineering'?",
      "options": ["Knowledge Representation", "Automated Planning", "Logical Agents", "Machine Learning"],
      "answer": 0,
      "explanation": "'Ontological Engineering' is a topic within the 'Knowledge Representation' section."
    },
    {
      "question": "Which section would be best suited for understanding the principles behind 'Monte Carlo Tree Search'?",
      "options": ["Adversarial Search and Games", "Probabilistic Reasoning over Time", "Reinforcement Learning", "Machine Learning"],
      "answer": 0,
      "explanation": "'Monte Carlo Tree Search' is primarily discussed in 'Adversarial Search and Games'."
    },
    {
      "question": "In which section does the book introduce 'Hidden Markov Models'?",
      "options": ["Deep Learning", "Probabilistic Reasoning over Time", "Reinforcement Learning", "Learning Probabilistic Models"],
      "answer": 1,
      "explanation": "'Hidden Markov Models' are introduced and elaborated in 'Probabilistic Reasoning over Time'."
    },
    {
      "question": "Which section discusses the concepts and applications of 'The Transformer Architecture'?",
      "options": ["Natural Language Processing", "Deep Learning for Natural Language Processing", "Deep Learning", "Reinforcement Learning"],
      "answer": 1,
      "explanation": "'The Transformer Architecture' is discussed in detail within 'Deep Learning for Natural Language Processing'."
    },
    {
      "question": "Which part of the book touches upon the topic 'The Limits of AI'?",
      "options": ["The Future of AI", "Philosophy, Ethics, and Safety of AI", "Machine Learning", "Reinforcement Learning"],
      "answer": 1,
      "explanation": "The 'Philosophy, Ethics, and Safety of AI' section delves into the limitations and possibilities of AI, including 'The Limits of AI'."
    },
    {
      "question": "Which section would one study to understand 'Word Embeddings' in depth?",
      "options": ["Natural Language Processing", "Deep Learning for Natural Language Processing", "Deep Learning", "Machine Learning"],
      "answer": 1,
      "explanation": "'Word Embeddings' is discussed in the 'Deep Learning for Natural Language Processing' section."
    },
    {
      "question": "What does 'The 3D World' topic likely pertain to?",
      "options": ["Deep Learning", "Computer Vision", "Reinforcement Learning", "Natural Language Processing"],
      "answer": 1,
      "explanation": "'The 3D World' is a topic within the 'Computer Vision' section, likely discussing three-dimensional visual data interpretation and processing."
    },
    {
      "question": "Where would one learn about 'Heuristic Alpha-beta Tree Search'?",
      "options": ["Adversarial Search and Games", "Reinforcement Learning", "Automated Planning", "Probabilistic Reasoning"],
      "answer": 0,
      "explanation": "'Heuristic Alpha-beta Tree Search' is discussed in the 'Adversarial Search and Games' section."
    },
    {
      "question": "Which section introduces 'Utility Theory'?",
      "options": ["Making Simple Decisions", "Making Complex Decisions", "Multiagent Decision Making", "Probabilistic Reasoning over Time"],
      "answer": 0,
      "explanation": "'Utility Theory' is introduced in the 'Making Simple Decisions' section."
    },
    {
      "question": "In which section can one study about 'Kalman Filters'?",
      "options": ["Deep Learning", "Probabilistic Reasoning over Time", "Learning Probabilistic Models", "Machine Learning"],
      "answer": 1,
      "explanation": "'Kalman Filters' are discussed in the 'Probabilistic Reasoning over Time' section."
    },
    {
      "question": "Which topic likely involves discussing 'Bayesian Networks'?",
      "options": ["Quantifying Uncertainty", "Probabilistic Reasoning", "Reinforcement Learning", "Knowledge Representation"],
      "answer": 1,
      "explanation": "'Probabilistic Reasoning' is the section that delves into Bayesian Networks."
    },
    {
      "question": "Where would one find discussions about 'Hierarchical Planning'?",
      "options": ["Automated Planning", "Adversarial Search and Games", "Probabilistic Reasoning over Time", "Logical Agents"],
      "answer": 0,
      "explanation": "'Hierarchical Planning' is a topic within the 'Automated Planning' section."
    },
    {
      "question": "In which section does the book tackle the topic of 'Image Formation'?",
      "options": ["Computer Vision", "Deep Learning", "Reinforcement Learning", "Natural Language Processing"],
      "answer": 0,
      "explanation": "'Image Formation' is introduced and discussed in the 'Computer Vision' section."
    },
    {
      "question": "Where is 'Propositional Theorem Proving' elaborated upon?",
      "options": ["Logical Agents", "Inference in First-Order Logic", "Knowledge Representation", "Machine Learning"],
      "answer": 0,
      "explanation": "'Propositional Theorem Proving' is detailed within the 'Logical Agents' section."
    },
    {
      "question": "Which section delves into 'Bandit Problems' and their solutions?",
      "options": ["Making Complex Decisions", "Multiagent Decision Making", "Reinforcement Learning", "Probabilistic Reasoning over Time"],
      "answer": 0,
      "explanation": "The 'Making Complex Decisions' section discusses 'Bandit Problems'."
    }

];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let questions = [];
let hp = 100; // Changed from coins to hp and initialized with 100

function selectRandomQuestions() {
  let shuffledQuestions = [...allQuestions];
  shuffledQuestions.sort(() => 0.5 - Math.random()); 
  questions = shuffledQuestions.slice(0, 10); 
}

function startQuiz() {
  selectRandomQuestions();
  document.getElementById("startBtn").classList.add("hidden");
  document.querySelector(".quiz-content").classList.remove("hidden");
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("hp").textContent = `HP: ${hp}`; // Update to show HP
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsButtons = document.querySelectorAll(".option");
    optionsButtons.forEach((button, index) => {
      button.textContent = questionObj.options[index];
    });
    document.getElementById("progressText").textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById("progressBar").style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  } else {
    endQuiz();
  }
}

function submitAnswer(optionIndex) {
  const questionObj = questions[currentQuestionIndex];
  const correct = optionIndex === questionObj.answer;
  const feedback = document.getElementById("feedback");
  if (correct) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    hp -= 10; // Deduct 10 HP for a wrong answer
    document.getElementById("hp").textContent = `HP: ${hp}`; // Update the display of HP
    feedback.textContent = `Incorrect! Correct answer: ${questionObj.options[questionObj.answer]}. Explanation: ${questionObj.explanation}`;
    feedback.style.color = "red";
    if (hp <= 0) {
      endQuizEarly(); // End the quiz if HP drops to 0
      return; // Exit the function early to avoid executing the remaining code
    }
  }
  selectedAnswers.push({ question: questionObj.question, selectedOption: questionObj.options[optionIndex], correct });
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").disabled = true;
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuizEarly() {
  alert("HP has run out! Quiz over.");
  endQuiz(); // Handles early quiz termination when HP is 0
}

function endQuiz() {
  document.querySelector(".quiz-content").classList.add("hidden");
  const resultsContainer = document.getElementById("results");
  document.getElementById("score").textContent = score;
  const summary = selectedAnswers.map((item, index) => {
    return `<div><strong>Question ${index + 1}:</strong> ${item.question} <br> <strong>Your Answer:</strong> ${item.selectedOption} <br> <strong>Correct:</strong> ${item.correct ? 'Yes' : 'No'}</div>`;
  }).join('');
  document.getElementById("answerSummary").innerHTML = summary;
  resultsContainer.classList.remove("hidden");
  document.getElementById("restartBtn").style.display = "block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = [];
  questions = [];
  hp = 100; // Reset HP to 100
  document.getElementById("hp").textContent = `HP: ${hp}`; // Update the display of HP
  selectRandomQuestions();
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
      option.classList.remove('correct', 'incorrect');
  });
  document.getElementById("feedback").textContent = "";
  document.getElementById("results").classList.add("hidden");
  startQuiz();
}
