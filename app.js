const missions = [
  {
    id: "u0",
    unit: "Unit 0",
    title: "Onboarding and Setup",
    xp: 80,
    hook: "Choose your route, set up accounts, and understand how the course turns into a portfolio.",
    learn: [
      "The Hugging Face course has audit and certificate paths.",
      "You will use Python, Hugging Face Hub, Spaces, notebooks, and agent libraries.",
      "The learning loop is read, quiz, build, share, evaluate, improve."
    ],
    drill: "Create a one-sentence goal for your final agent. Example: 'A research agent that answers questions over my notes and cites sources.'",
    code: "goal = 'Build an agent that can use tools, explain traces, and pass an evaluation set'",
    url: "https://huggingface.co/learn/agents-course/en/unit0/introduction"
  },
  {
    id: "u1",
    unit: "Unit 1",
    title: "Agent Fundamentals",
    xp: 120,
    hook: "An agent is not just a chatbot. It is a model plus a loop that can choose actions.",
    learn: [
      "LLMs predict tokens, but agent loops let them observe, decide, act, and revise.",
      "Core trace pattern: Thought, Action, Observation, Answer.",
      "Messages, chat templates, special tokens, and system prompts shape behavior."
    ],
    drill: "Take any task and label which part needs reasoning, which part needs a tool, and what observation would prove progress.",
    code: "Thought -> I need fresh data\nAction -> call_search(query)\nObservation -> search result text\nAnswer -> cite result and explain",
    url: "https://huggingface.co/learn/agents-course/en/unit1/introduction"
  },
  {
    id: "tools",
    unit: "Core Concept",
    title: "Tools and Function Calling",
    xp: 110,
    hook: "Tools are how agents get hands. Good tools are boring, clear, typed, and hard to misuse.",
    learn: [
      "A tool needs a name, description, input schema, output contract, and failure mode.",
      "Function calling is structured tool selection, not magic.",
      "The model should never guess tool results. It should call, observe, then answer."
    ],
    drill: "Design one tool with inputs, outputs, and two examples. Then write one bad call and explain why it should fail.",
    code: "def get_weather(city: str) -> dict:\n    return {'city': city, 'forecast': 'rain', 'source': 'weather_api'}",
    url: "https://huggingface.co/learn/agents-course/en/unit1/tools"
  },
  {
    id: "u2",
    unit: "Unit 2",
    title: "Frameworks: smolagents, LlamaIndex, LangGraph",
    xp: 135,
    hook: "Frameworks package the same fundamentals into different control surfaces.",
    learn: [
      "smolagents is lightweight and practical for code/tool agents.",
      "LlamaIndex shines when agents work over data, indexes, and retrieval workflows.",
      "LangGraph is strong when you need explicit state, branches, loops, and production control."
    ],
    drill: "Pick a framework for a research assistant, a customer support workflow, and a code agent. Defend each choice in one line.",
    code: "framework_choice = {\n  'fast prototype': 'smolagents',\n  'data-heavy RAG': 'LlamaIndex',\n  'stateful workflow': 'LangGraph'\n}",
    url: "https://huggingface.co/learn/agents-course/en/unit2/introduction"
  },
  {
    id: "memory",
    unit: "Missing Link",
    title: "Memory, State, and Planning",
    xp: 105,
    hook: "Memory is not a scrapbook. It is task state with rules about what matters now.",
    learn: [
      "Short-term memory keeps the current trace coherent.",
      "Long-term memory stores durable facts, preferences, summaries, or embeddings.",
      "Planning can be explicit steps, graph state, or a planner-executor split."
    ],
    drill: "Write what your agent should remember, what it must forget, and what needs user consent.",
    code: "state = {'task': user_goal, 'plan': steps, 'evidence': [], 'done': False}",
    url: "https://huggingface.co/learn/agents-course/en/unit2/introduction"
  },
  {
    id: "u3",
    unit: "Unit 3",
    title: "Agentic RAG",
    xp: 125,
    hook: "RAG gives knowledge. Agentic RAG decides when, where, and how to retrieve.",
    learn: [
      "Classic RAG retrieves once; agentic RAG can query, inspect, refine, and cite.",
      "Retrieval quality depends on chunking, metadata, reranking, and source grounding.",
      "Good agents separate retrieved facts from model guesses."
    ],
    drill: "Make a mini RAG plan: question, search query, source filter, citation rule, and fallback response.",
    code: "if confidence < threshold:\n    query = rewrite_question(user_question)\n    docs = retrieve(query)\n    answer = synthesize_with_citations(docs)",
    url: "https://huggingface.co/learn/agents-course/en/unit3/agentic-rag/introduction"
  },
  {
    id: "evals",
    unit: "Bonus",
    title: "Observability and Evaluation",
    xp: 115,
    hook: "If you cannot inspect the trace, you cannot improve the agent.",
    learn: [
      "Log prompts, tool calls, outputs, latency, cost, and failure reasons.",
      "Evaluate exactness, groundedness, tool choice, safety, and user satisfaction.",
      "Use small golden datasets before trusting a live agent."
    ],
    drill: "Create five test questions your final agent must answer correctly and two it should refuse or clarify.",
    code: "score = judge(answer, rubric=['correct', 'cited', 'safe', 'complete'])",
    url: "https://huggingface.co/learn/agents-course/en/bonus-unit2/introduction"
  },
  {
    id: "safety",
    unit: "Essential",
    title: "Safety, Permissions, and Guardrails",
    xp: 105,
    hook: "Autonomy without boundaries is just a bug with confidence.",
    learn: [
      "Separate read actions from write actions, purchases, messages, uploads, and deletes.",
      "Use allowlists, confirmations, rate limits, and least-privilege credentials.",
      "Defend against prompt injection in tool outputs, webpages, documents, and emails."
    ],
    drill: "List which actions your agent may do alone, which require confirmation, and which are forbidden.",
    code: "if action.risk == 'writes_external_state':\n    require_user_confirmation(action)",
    url: "https://huggingface.co/learn/agents-course/en/bonus-unit2/introduction"
  },
  {
    id: "protocols",
    unit: "Modern Concept",
    title: "MCP and Tool Protocols",
    xp: 95,
    hook: "Protocols make tools portable. The agent gets a menu instead of a pile of custom glue.",
    learn: [
      "Tool protocols describe capabilities, schemas, resources, and permissions.",
      "A stable tool contract lets models and apps cooperate across providers.",
      "The key design skill is exposing the right capability at the right level of risk."
    ],
    drill: "Sketch an MCP-style server for your final project: resources, tools, auth, and logs.",
    code: "tool = {'name': 'search_notes', 'input': {'query': 'string'}, 'risk': 'read-only'}",
    url: "https://huggingface.co/learn/agents-course/en/unit4/conclusion"
  },
  {
    id: "u4",
    unit: "Unit 4",
    title: "Final Agent Project",
    xp: 150,
    hook: "Ship one agent that solves a real task, shows its trace, and survives tests.",
    learn: [
      "The course final project uses benchmark-style evaluation and leaderboard thinking.",
      "A strong portfolio agent has a clear task, useful tools, transparent traces, and evals.",
      "Finish by deploying, documenting limitations, and showing example runs."
    ],
    drill: "Write your README sections: problem, architecture, tools, eval set, failures, demo, next steps.",
    code: "final_agent = Agent(model, tools, memory, evaluator)\nresult = final_agent.run(task)\nassert result.passes_minimum_bar",
    url: "https://huggingface.co/learn/agents-course/en/unit4/introduction"
  }
];

const questions = [
  {
    q: "What makes an AI agent different from a plain chatbot?",
    options: [
      "It can run a loop that chooses actions, observes results, and updates its answer.",
      "It always uses a larger model.",
      "It never needs prompts.",
      "It only answers from a vector database."
    ],
    answer: 0,
    why: "Agents combine model reasoning with action and observation loops."
  },
  {
    q: "What is the safest default for a tool that sends emails, deletes files, or buys something?",
    options: [
      "Let the model decide silently.",
      "Require user confirmation before the action is executed.",
      "Hide the action in the system prompt.",
      "Run it twice to verify consistency."
    ],
    answer: 1,
    why: "External write actions need explicit confirmation and clear user awareness."
  },
  {
    q: "Which framework fit is most natural for explicit state graphs and controlled agent workflows?",
    options: ["LangGraph", "A static CSV file", "A CSS framework", "Only a tokenizer"],
    answer: 0,
    why: "LangGraph is designed around stateful graph workflows."
  },
  {
    q: "In agentic RAG, why should an agent cite retrieved sources?",
    options: [
      "To make the answer longer.",
      "To separate grounded evidence from model guesswork.",
      "To avoid using tools.",
      "To replace evaluation."
    ],
    answer: 1,
    why: "Citations expose evidence and make the answer easier to check."
  },
  {
    q: "What should a well-designed tool description include?",
    options: [
      "A vague name and secret behavior.",
      "Name, purpose, input schema, output contract, and failure behavior.",
      "Only a clever prompt.",
      "A random JSON blob."
    ],
    answer: 1,
    why: "Structured contracts make tools reliable and easier for models to use correctly."
  }
];

const flashcards = [
  ["Agent", "A model-driven system that can reason over state, use tools, observe results, and continue toward a goal."],
  ["Tool", "A callable capability with a clear contract. It extends what the model can do."],
  ["Observation", "The real result returned by the environment or tool after an action."],
  ["Agentic RAG", "Retrieval where the agent can plan, search, refine, inspect, and synthesize instead of retrieving once."],
  ["Eval", "A repeatable test that tells you whether the agent is getting better or just getting louder."],
  ["Prompt injection", "Untrusted content trying to override the agent's real instructions or permissions."]
];

const bossItems = [
  ["Problem", "Define one narrow, useful problem and the user it helps."],
  ["Tools", "Implement read-only tools first, then add risky tools with confirmations."],
  ["Memory", "Decide what state is temporary, durable, private, or forbidden."],
  ["Trace", "Show thought-free operational traces: tool calls, observations, sources, and decisions."],
  ["Evaluation", "Create a golden test set with expected behaviors and failure cases."],
  ["Deployment", "Deploy a demo, document setup, limits, costs, and safety boundaries."]
];

const state = {
  activeMission: localStorage.getItem("activeMission") || "u0",
  completed: new Set(JSON.parse(localStorage.getItem("completedMissions") || "[]")),
  quizWins: Number(localStorage.getItem("quizWins") || "0"),
  bossDone: new Set(JSON.parse(localStorage.getItem("bossDone") || "[]")),
  flashIndex: Number(localStorage.getItem("flashIndex") || "0"),
  quizIndex: Number(localStorage.getItem("quizIndex") || "0")
};

const $ = (selector) => document.querySelector(selector);

function save() {
  localStorage.setItem("activeMission", state.activeMission);
  localStorage.setItem("completedMissions", JSON.stringify([...state.completed]));
  localStorage.setItem("quizWins", String(state.quizWins));
  localStorage.setItem("bossDone", JSON.stringify([...state.bossDone]));
  localStorage.setItem("flashIndex", String(state.flashIndex));
  localStorage.setItem("quizIndex", String(state.quizIndex));
}

function totalXp() {
  return missions.reduce((sum, mission) => sum + (state.completed.has(mission.id) ? mission.xp : 0), 0)
    + state.quizWins * 20
    + state.bossDone.size * 15;
}

function rankFor(xp) {
  if (xp >= 900) return "Benchmark Boss";
  if (xp >= 650) return "Toolsmith";
  if (xp >= 420) return "RAG Ranger";
  if (xp >= 220) return "Loop Tamer";
  return "Rookie Reasoner";
}

function renderProgress() {
  const xp = totalXp();
  const goal = 900;
  $("#xpValue").textContent = xp;
  $("#xpGoal").textContent = goal;
  $("#rankLabel").textContent = rankFor(xp);
  $("#progressBar").style.width = `${Math.min(100, Math.round((xp / goal) * 100))}%`;
  $("#doneCount").textContent = state.completed.size;
  $("#quizCount").textContent = state.quizWins;
  $("#streakCount").textContent = state.completed.size > 0 ? Math.min(7, state.completed.size) : 0;
  $("#coachLine").textContent = xp >= goal
    ? "You cleared the academy. Time to ship the final agent."
    : "Next unlock is waiting. Small wins compound fast.";
}

function renderMissions() {
  const list = $("#missionList");
  list.innerHTML = missions.map((mission) => `
    <button class="mission-card ${mission.id === state.activeMission ? "active" : ""} ${state.completed.has(mission.id) ? "done" : ""}"
      type="button" data-mission="${mission.id}">
      <strong>${mission.unit}: ${mission.title}</strong>
      <span>${mission.xp} XP - ${mission.hook}</span>
    </button>
  `).join("");

  list.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMission = button.dataset.mission;
      save();
      renderMissions();
      renderLesson();
      jumpToLesson();
    });
  });
}

function jumpToLesson() {
  requestAnimationFrame(() => {
    $("#lessonPanel").scrollIntoView({ behavior: "auto", block: "start" });
  });
}

function renderLesson() {
  const mission = missions.find((item) => item.id === state.activeMission) || missions[0];
  const done = state.completed.has(mission.id);
  $("#lessonPanel").innerHTML = `
    <div class="lesson-top">
      <div>
        <span class="pill">${mission.unit} - ${mission.xp} XP</span>
        <h2>${mission.title}</h2>
        <p>${mission.hook}</p>
      </div>
      <div class="lesson-status-actions">
        <span class="pill">${done ? "Complete" : "Open"}</span>
        <a class="button ghost compact" href="${mission.url}" target="_blank" rel="noreferrer">Open course section</a>
      </div>
    </div>
    <div class="lesson-grid">
      <div class="mini-panel">
        <h3>Learn</h3>
        <ul>${mission.learn.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div class="mini-panel">
        <h3>Do this now</h3>
        <p>${mission.drill}</p>
      </div>
    </div>
    <pre class="codebox"><code>${mission.code}</code></pre>
    <div class="lesson-actions">
      <button class="button primary" type="button" id="completeMission">${done ? "Review complete" : "Mark mission complete"}</button>
      <a class="button ghost" href="${mission.url}" target="_blank" rel="noreferrer">Open course section</a>
    </div>
  `;

  $("#completeMission").addEventListener("click", () => {
    state.completed.add(mission.id);
    save();
    renderAll();
  });
}

function renderQuiz() {
  const card = $("#quizCard");
  const question = questions[state.quizIndex % questions.length];
  card.innerHTML = `
    <span class="pill">Question ${(state.quizIndex % questions.length) + 1} of ${questions.length}</span>
    <h3>${question.q}</h3>
    <div>${question.options.map((option, index) => `
      <button class="option" type="button" data-index="${index}">${option}</button>
    `).join("")}</div>
    <p class="feedback" id="quizFeedback">Choose carefully. Misconceptions love confidence.</p>
    <div class="quiz-actions">
      <button class="button ghost" id="nextQuestion" type="button">Next question</button>
    </div>
  `;

  card.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.index);
      const correct = selected === question.answer;
      card.querySelectorAll(".option").forEach((optionButton, optionIndex) => {
        optionButton.disabled = true;
        if (optionIndex === question.answer) optionButton.classList.add("correct");
      });
      if (!correct) button.classList.add("wrong");
      $("#quizFeedback").textContent = correct ? `Correct. ${question.why}` : `Not quite. ${question.why}`;
      if (correct) {
        state.quizWins += 1;
        save();
        renderProgress();
      }
    });
  });

  $("#nextQuestion").addEventListener("click", () => {
    state.quizIndex = (state.quizIndex + 1) % questions.length;
    save();
    renderQuiz();
  });
}

function renderFlashcard(showAnswer = false) {
  const [term, definition] = flashcards[state.flashIndex % flashcards.length];
  $("#flashcard").innerHTML = showAnswer
    ? `<strong>${term}</strong><br>${definition}`
    : `<strong>${term}</strong><br><span>Click to reveal</span>`;
  $("#flashcard").dataset.showing = showAnswer ? "answer" : "term";
}

function wireFlashcards() {
  $("#flashcard").addEventListener("click", () => {
    renderFlashcard($("#flashcard").dataset.showing !== "answer");
  });
  $("#nextFlashcard").addEventListener("click", () => {
    state.flashIndex = (state.flashIndex + 1) % flashcards.length;
    save();
    renderFlashcard(false);
  });
}

function wireAgentLab() {
  $("#agentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const mission = $("#agentMission").value;
    const tools = form.getAll("tool");
    const trace = makeTrace(mission, tools);
    $("#agentTrace").innerHTML = trace.map((line) => `<p class="trace-line">${line}</p>`).join("");
  });
}

function makeTrace(mission, tools) {
  const toolText = tools.length ? tools.join(", ") : "no tools";
  const base = [
    `<strong>System</strong> Mission loaded with ${toolText}.`,
    "<strong>Thought</strong> Identify the missing information before answering.",
    tools.includes("search")
      ? "<strong>Action</strong> search('course concept and examples')"
      : "<strong>Action</strong> skip search because it is not available.",
    tools.includes("notes")
      ? "<strong>Observation</strong> Notes provide grounded course context."
      : "<strong>Observation</strong> No notes tool. Risk of unsupported claims rises."
  ];

  if (mission === "rag") {
    base.push("<strong>Thought</strong> Retrieval should happen before synthesis.");
    base.push(tools.includes("evaluator")
      ? "<strong>Action</strong> evaluator.check_grounding(answer, sources)"
      : "<strong>Action</strong> answer with a caveat and ask for source access.");
  }

  if (mission === "debug") {
    base.push("<strong>Thought</strong> Tool failures need visible error messages and fallback behavior.");
    base.push("<strong>Observation</strong> A good agent reports the failed call instead of pretending it worked.");
  }

  if (mission === "trip") {
    base.push("<strong>Thought</strong> Turn the goal into a short schedule with checkpoints.");
    base.push(tools.includes("calculator")
      ? "<strong>Action</strong> calculator.divide(12 study hours, 4 modules)"
      : "<strong>Observation</strong> Estimate manually and keep the plan flexible.");
  }

  base.push("<strong>Answer</strong> Final response should include evidence, next action, and limits.");
  return base;
}

function renderBoss() {
  $("#bossGrid").innerHTML = bossItems.map(([title, text], index) => `
    <label class="boss-item">
      <input type="checkbox" data-boss="${index}" ${state.bossDone.has(String(index)) ? "checked" : ""}>
      <strong>${title}</strong>
      <span>${text}</span>
    </label>
  `).join("");

  $("#bossGrid").querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) state.bossDone.add(input.dataset.boss);
      else state.bossDone.delete(input.dataset.boss);
      save();
      renderProgress();
    });
  });
}

function wireReset() {
  $("#resetProgress").addEventListener("click", () => {
    localStorage.removeItem("completedMissions");
    localStorage.removeItem("quizWins");
    localStorage.removeItem("bossDone");
    state.completed.clear();
    state.quizWins = 0;
    state.bossDone.clear();
    save();
    renderAll();
  });
}

function renderAll() {
  renderProgress();
  renderMissions();
  renderLesson();
  renderQuiz();
  renderFlashcard(false);
  renderBoss();
}

function animateSky() {
  const canvas = $("#sky");
  const ctx = canvas.getContext("2d");
  const dots = Array.from({ length: 80 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 1 + Math.random() * 2.2,
    s: 0.12 + Math.random() * 0.45
  }));

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  }

  function draw() {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(104, 216, 255, 0.13)";
    ctx.lineWidth = 1;

    dots.forEach((dot, index) => {
      dot.y += dot.s / height;
      if (dot.y > 1.05) dot.y = -0.05;
      const x = dot.x * width;
      const y = dot.y * height;
      ctx.beginPath();
      ctx.arc(x, y, dot.r * window.devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = index % 3 === 0 ? "rgba(75, 212, 137, 0.55)" : "rgba(245, 240, 223, 0.5)";
      ctx.fill();
      const neighbor = dots[(index + 7) % dots.length];
      const nx = neighbor.x * width;
      const ny = neighbor.y * height;
      const distance = Math.hypot(x - nx, y - ny);
      if (distance < 180 * window.devicePixelRatio) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) draw();
}

wireReset();
wireAgentLab();
wireFlashcards();
renderAll();
animateSky();
