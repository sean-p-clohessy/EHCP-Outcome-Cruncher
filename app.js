const SMART_BUILDER_URL = "https://sean-p-clohessy.github.io/SMARTTargetBuilder/";

const examples = {
  recording: {
    source: "The learner's handwritten work is not consistently legible, which can prevent their knowledge and ability from being represented accurately.",
    start: "The learner can record short responses by hand, but longer written work becomes difficult for them and others to read.",
    provision: "Staff ensure the learner has access to a word processor for classwork, note-taking, assessments and examinations as their normal way of working.",
    strand: "recording"
  },
  processing: {
    source: "The learner has difficulty processing and understanding information and instructions that are given verbally or read independently.",
    start: "The learner can follow one familiar instruction when it is repeated, simplified and checked by an adult.",
    provision: "Staff allow additional processing time, provide instructions in manageable chunks, reword information and check understanding.",
    strand: "processing"
  },
  memory: {
    source: "The learner struggles to remember and retain what they have been asked to do during learning activities.",
    start: "The learner begins a task after an explanation but may lose track of the sequence without another prompt.",
    provision: "Staff repeat and recap information, provide written task steps and break activities into manageable chunks.",
    strand: "memory"
  },
  attention: {
    source: "The learner has difficulty concentrating for sustained periods and can lose focus, affecting their ability to complete learning activities.",
    start: "The learner engages with a familiar activity for a short period and returns to it following direct adult prompting.",
    provision: "Staff provide timely prompts, check understanding, agree suitable rest breaks and use specific praise and encouragement.",
    strand: "attention"
  },
  support: {
    source: "The learner does not consistently remember to use their agreed visual overlay during reading activities.",
    start: "The learner uses the overlay successfully when an adult places it nearby and reminds them.",
    provision: "Staff ensure the agreed overlay is available and provide discreet reminders when reading activities begin.",
    strand: "support"
  }
};

const strands = {
  recording: {
    icon: "Aa",
    title: "Accessing and recording work",
    description: "Use appropriate methods and technology so knowledge can be recorded clearly.",
    keywords: ["handwriting", "handwritten", "legible", "readable", "word processor", "record", "writing"],
    outcome: "The learner will use an appropriate method to record and present their work clearly, so that their knowledge, ideas and progress can be understood across learning contexts.",
    steps: [
      "With the agreed word processor available, open the appropriate application and begin recording a short familiar task following a staff prompt.",
      "Use the agreed word processor to record a complete response, making simple amendments after checking the work with a familiar checklist.",
      "Choose and use the agreed recording method for classwork and notes with no more than one reminder during a learning session.",
      "Independently use the agreed recording method across different lessons and review the presentation before submitting work."
    ]
  },
  processing: {
    icon: "1·2",
    title: "Processing instructions",
    description: "Understand, clarify and act on verbal or written information in manageable stages.",
    keywords: ["processing", "understand", "instructions", "information", "verbal", "read", "chunk"],
    outcome: "The learner will understand and act on verbal and written instructions, using agreed strategies to clarify information and complete activities with increasing independence.",
    steps: [
      "Follow one familiar instruction after it has been presented in an agreed accessible format and understanding has been checked.",
      "Follow two sequenced instructions using a written or visual prompt, referring back to it when unsure.",
      "Identify when an instruction is unclear and use an agreed phrase or strategy to request clarification.",
      "Use written, visual or verbal information to complete a familiar multi-step activity across more than one learning context."
    ]
  },
  memory: {
    icon: "↺",
    title: "Memory and task management",
    description: "Use prompts, written steps and checking strategies to retain the thread of a task.",
    keywords: ["remember", "retain", "forget", "recall", "sequence", "task", "asked to do"],
    outcome: "The learner will use agreed memory and task-management strategies to retain instructions, organise a sequence of actions and complete familiar activities.",
    steps: [
      "Use a written or visual prompt to recall the next action in a familiar two-step activity with adult guidance.",
      "Refer back to an agreed checklist when the sequence of a task is forgotten, following no more than one staff reminder.",
      "Prepare and use a short task checklist before beginning a familiar activity, marking steps as they are completed.",
      "Independently select and use an agreed memory strategy to complete familiar activities in different lessons or settings."
    ]
  },
  attention: {
    icon: "◎",
    title: "Attention and engagement",
    description: "Recognise loss of focus and use agreed strategies to return to purposeful activity.",
    keywords: ["concentrat", "focus", "attention", "motivation", "engagement", "off track", "distract"],
    outcome: "The learner will recognise changes in their attention and use agreed strategies to engage with, return to and complete purposeful learning activities.",
    steps: [
      "Engage with a short familiar activity and respond to an agreed prompt to return attention when focus is lost.",
      "Choose one agreed focus strategy at the start of a task and use it with staff support for the planned activity period.",
      "Recognise when attention has moved away from the activity and use an agreed strategy to return with no more than one prompt.",
      "Select and use effective attention strategies across different learning activities, reviewing which approaches support successful completion."
    ]
  },
  support: {
    icon: "◇",
    title: "Using support and learning aids",
    description: "Recognise, access and use agreed support as a tool for participation and independence.",
    keywords: ["overlay", "aid", "support", "access", "prompt", "reminder", "equipment", "medical"],
    outcome: "The learner will recognise when agreed support or equipment is needed and access and use it effectively across relevant activities and settings.",
    steps: [
      "Use the agreed aid during a familiar activity after a discreet staff reminder and with the aid placed within reach.",
      "Collect or prepare the agreed aid at the start of a familiar activity following one prompt.",
      "Recognise when the agreed aid is needed and begin using it without a direct adult reminder.",
      "Independently access and use the agreed aid in different relevant settings, communicating when it is unavailable or unsuitable."
    ]
  }
};

const state = { panel: 1, maxReached: 1, selectedStrand: null, recommendedStrand: null, selectedStep: 0, originalSteps: [] };

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  qs("#themeToggle").setAttribute("aria-pressed", String(dark));
  qs("#themeToggle").setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  qs("#themeLabel").textContent = dark ? "Dark mode" : "Light mode";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#0d1426" : "#f4f2fb";
  localStorage.setItem("outcome-cruncher-theme", theme);
}

function showPanel(number) {
  if (number > state.maxReached) return;
  state.panel = number;
  qsa("[data-panel]").forEach((panel) => {
    const active = Number(panel.dataset.panel) === number;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  qsa("[data-step-indicator]").forEach((item) => {
    const step = Number(item.dataset.stepIndicator);
    item.classList.toggle("active", step === number);
    item.classList.toggle("complete", step < number);
  });
  updateNavigation();
  qs("#workspace").scrollIntoView({ behavior: "smooth", block: "start" });
}

function unlockStep(number) {
  state.maxReached = Math.max(state.maxReached, number);
  updateNavigation();
}

function updateNavigation() {
  qsa("[data-nav-step]").forEach((control) => {
    const step = Number(control.dataset.navStep);
    control.disabled = step > state.maxReached;
    control.setAttribute("aria-current", step === state.panel ? "step" : "false");
  });
}

function updateCounter() {
  qs("#sourceCount").textContent = qs("#sourceText").value.length;
}

function loadSelectedExample() {
  const example = examples[qs("#exampleSelect").value];
  if (!example) return;
  qs("#sourceText").value = example.source;
  qs("#startingPoint").value = example.start;
  qs("#provisionText").value = example.provision;
  state.recommendedStrand = example.strand;
  updateCounter();
  showToast("Example loaded—edit any wording you need.");
}

function inferStrand(text) {
  const source = text.toLowerCase();
  let best = "processing";
  let bestScore = -1;
  Object.entries(strands).forEach(([key, strand]) => {
    const score = strand.keywords.reduce((total, keyword) => total + (source.includes(keyword) ? 1 : 0), 0);
    if (score > bestScore) { best = key; bestScore = score; }
  });
  return best;
}

function renderStrands() {
  const grid = qs("#strandGrid");
  grid.innerHTML = "";
  Object.entries(strands).forEach(([key, strand]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `strand-card${key === state.selectedStrand ? " selected" : ""}`;
    button.dataset.strand = key;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(key === state.selectedStrand));
    button.innerHTML = `${key === state.recommendedStrand ? '<span class="recommendation">Suggested</span>' : ""}<span class="strand-icon" aria-hidden="true">${strand.icon}</span><strong>${strand.title}</strong><p>${strand.description}</p>`;
    button.addEventListener("click", () => {
      state.selectedStrand = key;
      renderStrands();
    });
    grid.append(button);
  });
}

function moveToStrands() {
  const source = qs("#sourceText").value.trim();
  if (!source) {
    qs("#sourceError").hidden = false;
    qs("#sourceText").focus();
    return;
  }
  qs("#sourceError").hidden = true;
  state.recommendedStrand = state.recommendedStrand || inferStrand(source);
  state.selectedStrand = state.recommendedStrand;
  qs("#sourceSummary").textContent = source;
  renderStrands();
  unlockStep(2);
  showPanel(2);
}

function renderSteps(steps) {
  const list = qs("#stonesList");
  list.innerHTML = "";
  steps.forEach((step, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = `stone${index === state.selectedStep ? " selected" : ""}`;
    wrapper.dataset.index = index;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stone-select";
    button.setAttribute("aria-label", `Select stepping stone ${index + 1}`);
    button.textContent = index + 1;
    button.addEventListener("click", () => selectStep(index));
    const field = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = `step-${index}`;
    label.textContent = ["Supported start", "Developing use", "Reduced prompting", "Across contexts"][index];
    const textarea = document.createElement("textarea");
    textarea.id = `step-${index}`;
    textarea.value = step;
    textarea.rows = 3;
    textarea.addEventListener("focus", () => selectStep(index));
    field.append(label, textarea);
    wrapper.append(button, field);
    list.append(wrapper);
  });
  updateSelectionLabel();
}

function buildSteps() {
  const strand = strands[state.selectedStrand];
  state.originalSteps = [...strand.steps];
  state.selectedStep = 0;
  qs("#outcomeDraft").value = strand.outcome;
  const provision = qs("#provisionText").value.trim();
  qs("#provisionSummary").textContent = provision || "No provision was entered. Add and agree the support that must remain in place before using a stepping stone.";
  renderSteps(state.originalSteps);
  unlockStep(3);
  showPanel(3);
}

function selectStep(index) {
  state.selectedStep = index;
  qsa(".stone").forEach((stone, i) => stone.classList.toggle("selected", i === index));
  updateSelectionLabel();
}

function updateSelectionLabel() {
  qs("#selectionCount").textContent = `Step ${state.selectedStep + 1} selected`;
}

async function copySelectedStep() {
  const selected = qs(`#step-${state.selectedStep}`).value.trim();
  try {
    await navigator.clipboard.writeText(selected);
    showToast("Selected stepping stone copied.");
  } catch {
    qs(`#step-${state.selectedStep}`).select();
    showToast("Select Copy from your browser to copy the highlighted wording.");
  }
}

let toastTimer;
function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initialise() {
  const savedTheme = localStorage.getItem("outcome-cruncher-theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  setTheme(savedTheme || preferredTheme);
  qs("#themeToggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  qsa("[data-nav-step]").forEach((control) => control.addEventListener("click", () => showPanel(Number(control.dataset.navStep))));
  qs("#sourceText").addEventListener("input", () => { state.recommendedStrand = null; updateCounter(); });
  qs("#loadExample").addEventListener("click", loadSelectedExample);
  qs("#toStrands").addEventListener("click", moveToStrands);
  qs("#buildSteps").addEventListener("click", buildSteps);
  qsa("[data-back]").forEach((button) => button.addEventListener("click", () => showPanel(Number(button.dataset.back))));
  qs("#resetSteps").addEventListener("click", () => { renderSteps(state.originalSteps); showToast("Suggested wording restored."); });
  qs("#copyStep").addEventListener("click", copySelectedStep);
  qs("#printOutcome").addEventListener("click", () => window.print());
  qs("#smartLink").href = SMART_BUILDER_URL;
  updateNavigation();
  updateCounter();
}

initialise();
