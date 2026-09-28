// Each option: [label, "TraitLetter+weight, ..."]
// L logic, T technical/digital, C creative, P people, O leadership, R research, H hands-on/practical
// Every question has one option per trait so no trait is favoured.
export const universityQuestions = [
  { q: "What do you enjoy doing most?", options: [
    ["Solving complex problems", "L2,T1"], ["Creating things", "C2"], ["Helping people", "P2"],
    ["Understanding how things work", "R2"], ["Organizing projects", "O2"], ["Analyzing information", "L1,R2"],
    ["Working with my hands or outdoors", "H2"] ] },
  { q: "Which school subject do you like best?", options: [
    ["Math or physics", "L2"], ["Art, music or languages", "C2,P1"], ["Biology or chemistry", "R2,P1"],
    ["Computer science", "T2,L1"], ["Economics or social studies", "O2,R1"], ["History, philosophy or literature", "R1,C1,P1"],
    ["Sport, workshops or field trips", "H2"] ] },
  { q: "What would you do with a free weekend?", options: [
    ["Build an app or gadget", "T2"], ["Write, draw or make videos", "C2"], ["Volunteer or help a friend", "P2"],
    ["Watch documentaries and read", "R2"], ["Plan an event", "O2,P1"], ["Play puzzles or strategy games", "L2"],
    ["Cook, fix things, garden or play sport", "H2"] ] },
  { q: "In a group project, you usually...", options: [
    ["Lead and assign tasks", "O2,P1"], ["Come up with the ideas", "C2"], ["Handle the digital or technical part", "T2"],
    ["Research and check the facts", "R2"], ["Keep the team getting along", "P2"], ["Make sure the reasoning holds up", "L2"],
    ["Build or organize the practical side", "H2"] ] },
  { q: "What kind of impact matters most to you?", options: [
    ["Improving people's health", "P2,R1"], ["Building new technology", "T2,L1"], ["Growing organizations", "O2,L1"],
    ["Discovering new knowledge", "R2"], ["Expressing ideas through art or media", "C2"], ["Shaping the physical world: nature, food, cities", "H2"],
    ["Making society fairer", "P1,O1,L1"] ] },
  { q: "How do you learn best?", options: [
    ["By doing it myself", "H2"], ["Reading and research", "R2"], ["Discussing with others", "P2"],
    ["Following a structured plan", "O2"], ["Experiments and logic", "L2"], ["Exploring visually or creatively", "C2"],
    ["Trying out software and tools", "T2"] ] },
  { q: "Which kind of problem attracts you?", options: [
    ["One with a single correct answer", "L2"], ["An open-ended one", "C2"], ["One about people's needs", "P2"],
    ["One about systems and data", "T2,R1"], ["One about strategy and money", "O2,L1"], ["One nobody has solved yet", "R2"],
    ["Something broken that needs fixing in real life", "H2"] ] },
  { q: "Where do you picture yourself working?", options: [
    ["In a lab or library", "R2"], ["In a studio or on a stage", "C2"], ["In a hospital, school or community space", "P2"],
    ["In a tech company", "T2"], ["In an office leading a team", "O2"], ["Outdoors, on site or in a workshop", "H2"],
    ["In a bank, court or public institution", "L2,O1"] ] },
  { q: "People would say you are...", options: [
    ["Logical and precise", "L2"], ["Creative and original", "C2"], ["Kind and a good listener", "P2"],
    ["Curious and observant", "R2"], ["A natural leader", "O2"], ["Practical and energetic", "H2"],
    ["Good with gadgets and computers", "T2"] ] },
  { q: "What would make your studies feel worthwhile?", options: [
    ["Mastering precise, demanding skills", "L2"], ["Learning the latest technology", "T2"], ["Expressing myself", "C2"],
    ["Helping others directly", "P2"], ["Preparing to lead or run something", "O2"], ["Understanding the world deeply", "R2"],
    ["Being active and learning by doing", "H2"] ] },
];

export const careerQuestions = [
  { q: "What do you enjoy doing most at work?", options: [
    ["Solving complex problems", "L2,T1"], ["Creating things", "C2"], ["Helping people", "P2"],
    ["Understanding how things work", "R2"], ["Organizing projects", "O2"], ["Analyzing information", "L1,R2"],
    ["Working with my hands or outdoors", "H2"] ] },
  { q: "Which skill are you strongest in?", options: [
    ["Coding or digital tools", "T2,L1"], ["Communication", "P2"], ["Design or writing", "C2"],
    ["Numbers and analysis", "L2"], ["Managing and planning", "O2"], ["Practical or manual skills", "H2"],
    ["Researching and investigating", "R2"] ] },
  { q: "What work environment suits you?", options: [
    ["Fast-paced team", "O1,P1"], ["Quiet and focused", "R1,L1"], ["Creative studio", "C2"],
    ["Client-facing or public-facing", "P2"], ["Structured organization", "O2"], ["Outdoors, on site or in a workshop", "H2"],
    ["Remote and independent", "T1,R1"] ] },
  { q: "When something goes wrong, you first...", options: [
    ["Go through it step by step", "L2"], ["Rethink the whole approach", "C2"], ["Coordinate people to fix it", "O2"],
    ["Investigate the root cause", "R2"], ["Reassure the people affected", "P2"], ["Roll up my sleeves and fix it", "H2"],
    ["Look for a tool to automate the fix", "T2"] ] },
  { q: "What motivates you most?", options: [
    ["Seeing tangible results", "H2"], ["Making a difference to people", "P2"], ["Making something original", "C2"],
    ["Leading and growing", "O2"], ["Cracking hard problems", "L2"], ["Discovering something new", "R2"],
    ["Working with cutting-edge tools", "T2"] ] },
  { q: "On a team, you are the...", options: [
    ["Decision maker", "O2"], ["Technical specialist", "T2,L1"], ["Ideas person", "C2"],
    ["Connector", "P2"], ["Analyst", "R2,L1"], ["Doer who gets things done on the ground", "H2"],
    ["Perfectionist who checks the details", "L2"] ] },
  { q: "Which task would you pick today?", options: [
    ["Automate a workflow", "T2"], ["Pitch a new concept", "C2"], ["Talk with clients or patients", "P2"],
    ["Audit numbers or build a forecast", "L2,R1"], ["Plan a launch or event", "O2"], ["Build, repair or install something", "H2"],
    ["Research a tough question", "R2"] ] },
  { q: "How do you like to spend your day?", options: [
    ["Talking with people", "P2"], ["Focused on a screen", "T1,L1"], ["Moving around, on my feet", "H2"],
    ["Brainstorming ideas", "C2"], ["Making decisions and coordinating", "O2"], ["Reading and investigating", "R2"],
    ["Working through numbers and logic", "L2"] ] },
  { q: "People would say you are...", options: [
    ["Logical and precise", "L2"], ["Creative and original", "C2"], ["Kind and a good listener", "P2"],
    ["Curious and observant", "R2"], ["A natural leader", "O2"], ["Practical and energetic", "H2"],
    ["Good with gadgets and computers", "T2"] ] },
  { q: "Where do you want to be in five years?", options: [
    ["A recognized expert", "R2"], ["A team lead", "O2,P1"], ["Owning my creative work", "C2"],
    ["Running my own business", "O2,C1"], ["Helping many people", "P2"], ["A skilled practitioner on the ground", "H2"],
    ["Building digital products", "T2"] ] },
];