const SMART_BUILDER_URL = "https://sean-p-clohessy.github.io/SMARTTargetBuilder/";

const exampleGroups = [
  { label: "Communication and interaction", items: {
    expressive: ["Expressing needs and choices", "The learner finds it difficult to express their needs, choices and ideas clearly to other people.", "The learner communicates familiar choices using short phrases or an agreed communication method when prompted.", "Staff allow processing time, use the learner's agreed communication approach and check that their meaning has been understood.", "communication", false],
    clarification: ["Asking for clarification", "The learner may continue with a task without indicating that they have not understood an instruction.", "The learner answers direct checking questions but does not yet independently say when information is unclear.", "Staff present information clearly, allow processing time and respond positively when the learner requests clarification.", "communication", false],
    conversation: ["Taking part in a conversation", "The learner finds it difficult to begin, maintain or end an appropriate conversation with familiar and unfamiliar people.", "The learner responds to a familiar adult's question but needs prompts to contribute further or remain on topic.", "Staff model conversation strategies, provide visual prompts where helpful and create low-pressure opportunities to practise.", "communication", false],
    groupInteraction: ["Participating in group work", "The learner finds it difficult to contribute, listen and negotiate their role during paired or group activities.", "The learner participates alongside others when given a clear role and direct adult prompts.", "Staff clarify roles, provide predictable group structures and explicitly teach turn-taking and repair strategies.", "communication", false]
  }},
  { label: "Cognition and learning", items: {
    processing: ["Processing instructions", "The learner has difficulty processing and understanding information and instructions that are given verbally or read independently.", "The learner follows one familiar instruction when it is repeated, simplified and checked by an adult.", "Staff allow additional processing time, provide instructions in manageable chunks, reword information and check understanding.", "processing", false],
    memory: ["Remembering and retaining instructions", "The learner struggles to remember and retain what they have been asked to do during learning activities.", "The learner begins a task after an explanation but may lose track of the sequence without another prompt.", "Staff repeat and recap information, provide written task steps and break activities into manageable chunks.", "memory", false],
    organisation: ["Organising a multi-step task", "The learner finds it difficult to plan, sequence and monitor the separate stages of an extended activity.", "The learner completes individual stages when an adult identifies what to do next.", "Staff provide a model, planning frame or checklist and schedule brief review points during longer activities.", "memory", false],
    strategy: ["Choosing an effective learning strategy", "The learner does not yet independently select strategies that help them understand, remember or complete learning activities.", "The learner uses a familiar strategy when an adult names it and provides the relevant resource.", "Staff explicitly teach a small range of strategies, model when to use them and provide opportunities for supported reflection.", "processing", false],
    recording: ["Handwriting and recording work", "The learner's handwritten work is not consistently legible, which can prevent their knowledge and ability from being represented accurately.", "The learner records short responses by hand, but longer written work becomes difficult for them and others to read.", "Staff ensure the learner has access to a word processor for classwork, note-taking, assessments and examinations as their normal way of working.", "recording", true]
  }},
  { label: "Social, emotional and mental health", items: {
    attention: ["Concentration and focus", "The learner has difficulty concentrating for sustained periods and can lose focus, affecting their ability to complete learning activities.", "The learner engages with a familiar activity for a short period and returns to it following direct adult prompting.", "Staff provide timely prompts, check understanding, agree suitable rest breaks and use specific praise and encouragement.", "attention", true],
    regulation: ["Recognising and regulating emotions", "The learner finds it difficult to recognise rising emotional distress and use a safe strategy before becoming overwhelmed.", "The learner can identify how they feel after an incident with support from a familiar adult.", "Staff use agreed, non-punitive regulation approaches, provide access to a safe space and teach strategies during calm periods.", "socialEmotional", false],
    transitions: ["Managing changes and transitions", "Unexpected changes or transitions can cause the learner significant uncertainty and reduce their ability to engage.", "The learner manages a familiar transition when given advance notice and a clear visual or verbal prompt.", "Staff provide accessible advance information, explain changes honestly and agree a predictable check-in or regulation plan.", "socialEmotional", false],
    confidence: ["Building confidence to participate", "The learner lacks confidence when contributing ideas, attempting unfamiliar work or participating in front of others.", "The learner contributes to a familiar one-to-one activity when reassured by a trusted adult.", "Staff offer graduated, low-pressure participation choices and recognise effort without placing the learner under public pressure.", "socialEmotional", false]
  }},
  { label: "Sensory and physical access", items: {
    overlay: ["Using an agreed visual overlay", "The learner does not consistently remember to use their agreed visual overlay during reading activities.", "The learner uses the overlay successfully when an adult places it nearby and reminds them.", "Staff ensure the agreed overlay is available and provide discreet reminders when reading activities begin.", "access", true],
    assistiveTech: ["Using assistive technology", "The learner needs assistive technology to access, record or review learning but does not yet use it consistently across activities.", "The learner uses one familiar accessibility feature after an adult opens or prepares it.", "Staff ensure agreed technology is available, charged and permitted, and teach its use in ordinary lessons and assessments.", "access", true],
    restBreaks: ["Using agreed rest breaks", "The learner's physical, sensory or attention needs mean that sustained activity can lead to fatigue or reduced access to learning.", "The learner takes a break when directed but does not yet reliably recognise or communicate when one is needed.", "Staff agree how breaks are requested, provide a suitable space and support the learner to return without losing essential instruction.", "access", true],
    extraTime: ["Using additional time effectively", "The learner requires additional processing or working time to demonstrate their knowledge and complete activities without being disadvantaged.", "The learner uses additional time when prompted but may not yet plan or prioritise how to use it.", "Staff routinely allow the agreed additional time in relevant classroom tasks, internal assessments and practice activities.", "access", true]
  }},
  { label: "Preparing for adulthood", items: {
    selfAdvocacy: ["Explaining support needs", "The learner finds it difficult to explain what support helps them or to request it appropriately in a new situation.", "The learner identifies one helpful adjustment when offered choices by a familiar adult.", "Staff involve the learner in reviewing support, provide accessible choices and ensure requests are heard and acted upon.", "independence", false],
    travel: ["Planning a familiar journey", "The learner needs support to plan, follow and adapt a familiar journey safely and reliably.", "The learner identifies the destination and follows part of a practised route with close support.", "Staff complete appropriate risk planning and provide structured travel training matched to the learner's needs.", "independence", false],
    workplace: ["Following workplace routines", "The learner finds it difficult to prepare for, follow and review the routines expected in a work-related setting.", "The learner completes one familiar workplace task when the sequence and expectations are explained directly.", "Staff or placement supervisors provide accessible instructions, model expectations and agree a named point of contact.", "independence", false],
    weeklyRoutine: ["Managing a weekly routine", "The learner finds it difficult to organise equipment, appointments, deadlines or travel across their weekly programme.", "The learner follows a daily plan when it has been prepared with a familiar adult.", "Staff provide access to an agreed planner, model its use and schedule proportionate review prompts while independence develops.", "independence", false]
  }}
];

const examples = Object.assign({}, ...exampleGroups.map(group => group.items));
const strands = {
  recording: { icon: "Aa", title: "Accessing and recording work", description: "Use appropriate methods and technology so knowledge can be recorded clearly.", keywords: ["handwriting", "legible", "word processor", "record", "writing"], outcome: "The learner will use an appropriate method to record and present their work clearly, so that their knowledge, ideas and progress can be understood across learning contexts.", steps: ["With the agreed recording method available, begin a short familiar task following a staff prompt.", "Use the agreed recording method to complete a response and make simple amendments using a familiar checklist.", "Choose and use the agreed recording method for classwork and notes with no more than one reminder.", "Independently use the agreed recording method across different lessons and review work before submitting it."] },
  processing: { icon: "1·2", title: "Understanding and processing", description: "Understand, clarify and act on information in manageable stages.", keywords: ["processing", "understand", "instruction", "information", "verbal", "strategy", "chunk"], outcome: "The learner will understand and act on information and instructions, using agreed strategies to clarify meaning and complete activities with increasing independence.", steps: ["Follow one familiar instruction after it has been presented in an agreed accessible format and understanding has been checked.", "Follow two sequenced instructions using a written or visual prompt, referring back to it when unsure.", "Identify when information is unclear and use an agreed strategy to seek clarification.", "Select and use an effective processing strategy to complete a familiar multi-step activity across more than one context."] },
  memory: { icon: "↺", title: "Memory and task management", description: "Use prompts, plans and checking strategies to retain the thread of a task.", keywords: ["remember", "retain", "forget", "recall", "sequence", "organis", "multi-step", "deadline"], outcome: "The learner will use agreed memory and task-management strategies to retain instructions, organise a sequence of actions and complete familiar activities.", steps: ["Use a written or visual prompt to recall the next action in a familiar two-step activity with adult guidance.", "Refer back to an agreed checklist when the sequence of a task is forgotten, following no more than one reminder.", "Prepare and use a short task plan before beginning a familiar activity, marking stages as they are completed.", "Independently select and use an agreed organisational strategy across different lessons or settings."] },
  attention: { icon: "◎", title: "Attention and engagement", description: "Recognise loss of focus and use agreed strategies to return to purposeful activity.", keywords: ["concentrat", "focus", "attention", "motivation", "engagement", "distract", "fatigue"], outcome: "The learner will recognise changes in their attention and use agreed strategies to engage with, return to and complete purposeful learning activities.", steps: ["Engage with a short familiar activity and respond to an agreed prompt to return attention when focus is lost.", "Choose one agreed focus strategy at the start of a task and use it with staff support for the planned activity period.", "Recognise when attention has moved away from the activity and use an agreed strategy to return with no more than one prompt.", "Select and use effective attention strategies across different activities, reviewing which approaches support completion."] },
  communication: { icon: "…", title: "Communication and interaction", description: "Express, understand and repair communication with familiar and unfamiliar people.", keywords: ["communicat", "conversation", "clarif", "express", "choice", "group", "turn-taking", "understood"], outcome: "The learner will use their agreed communication approach to express needs and ideas, understand others and repair misunderstandings across relevant situations.", steps: ["Use an agreed communication method to express one familiar need or choice with support from a trusted adult.", "Contribute one relevant message or response during a familiar interaction using an agreed prompt.", "Indicate when a message has not been understood and use an agreed repair or clarification strategy.", "Initiate, maintain and end a purposeful interaction with familiar and less familiar people across different settings."] },
  socialEmotional: { icon: "◇", title: "Emotional regulation and participation", description: "Recognise needs and use agreed strategies to participate safely and confidently.", keywords: ["emotion", "overwhelm", "anxiety", "transition", "change", "confidence", "regulat", "distress"], outcome: "The learner will recognise and communicate their emotional or participation needs and use agreed strategies to remain safe, recover and re-engage.", steps: ["Identify a familiar feeling or participation need using an agreed prompt or communication tool with a trusted adult.", "Choose one agreed strategy from a small accessible selection during a familiar low-pressure situation.", "Recognise an early sign that support is needed and communicate this before becoming overwhelmed, with no more than one prompt.", "Use and review effective regulation or participation strategies across different relevant settings."] },
  access: { icon: "⌁", title: "Using support and access arrangements", description: "Recognise, access and use agreed adjustments as tools for participation.", keywords: ["overlay", "assistive", "technology", "extra time", "rest break", "reader", "scribe", "access", "equipment"], outcome: "The learner will recognise when agreed support or equipment is needed and access and use it effectively across relevant activities and settings.", steps: ["Use the agreed support during a familiar activity after a discreet staff reminder and with it prepared nearby.", "Prepare or request the agreed support at the start of a familiar activity following one prompt.", "Recognise when the agreed support is needed and begin using it without a direct reminder.", "Independently access and use the agreed support in different settings, communicating when it is unavailable or unsuitable."] },
  independence: { icon: "→", title: "Independence and preparation for adulthood", description: "Plan, communicate and complete meaningful routines across adult-life contexts.", keywords: ["independen", "travel", "workplace", "employment", "routine", "appointment", "self-advoc", "support needs"], outcome: "The learner will use agreed planning, communication and problem-solving strategies to participate with increasing independence in meaningful adult-life routines.", steps: ["Complete one familiar part of an agreed routine using a clear prompt and support from a trusted adult.", "Follow a short accessible plan for a familiar routine, checking each stage with an adult at agreed points.", "Recognise a predictable difficulty and use an agreed strategy or request support with no more than one prompt.", "Plan, complete and review a familiar routine across relevant community, education or work-related settings."] }
};

const defaultActions = {
  recording: "use an agreed recording method to produce clear, readable work",
  processing: "follow and act on information using agreed processing and clarification strategies",
  memory: "use an agreed memory or planning strategy to follow and complete task steps",
  attention: "recognise changes in attention and use an agreed strategy to return to the activity",
  communication: "use their agreed communication approach to express needs and ideas and repair misunderstandings",
  socialEmotional: "recognise and communicate their needs and use an agreed strategy to regulate and re-engage",
  access: "recognise when agreed support is needed and use it effectively",
  independence: "plan and complete a meaningful routine using agreed communication and problem-solving strategies"
};

const state = { panel: 1, maxReached: 1, mode: "custom", selectedStrand: null, recommendedStrand: null, selectedStep: 0, originalSteps: [], extractedAction: "" };
const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];

function setTheme(theme) { document.documentElement.dataset.theme = theme; const dark = theme === "dark"; qs("#themeToggle").setAttribute("aria-pressed", String(dark)); qs("#themeToggle").setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode"); qs("#themeLabel").textContent = dark ? "Dark mode" : "Light mode"; document.querySelector('meta[name="theme-color"]').content = dark ? "#0d1426" : "#f4f2fb"; localStorage.setItem("outcome-cruncher-theme", theme); }
function populateExamples() { const select = qs("#exampleSelect"); exampleGroups.forEach(group => { const optgroup = document.createElement("optgroup"); optgroup.label = group.label; Object.entries(group.items).forEach(([key, item]) => { const option = document.createElement("option"); option.value = key; option.textContent = `• ${item[0]}`; optgroup.append(option); }); select.append(optgroup); }); }
function showPanel(number) { if (number > state.maxReached) return; state.panel = number; qsa("[data-panel]").forEach(panel => { const active = Number(panel.dataset.panel) === number; panel.hidden = !active; panel.classList.toggle("active", active); }); qsa("[data-step-indicator]").forEach(item => { const step = Number(item.dataset.stepIndicator); item.classList.toggle("active", step === number); item.classList.toggle("complete", step < number); }); updateNavigation(); qs("#workspace").scrollIntoView({ behavior: "smooth", block: "start" }); }
function updateNavigation() { qsa("[data-nav-step]").forEach(control => { const step = Number(control.dataset.navStep); control.disabled = step > state.maxReached; control.setAttribute("aria-current", step === state.panel ? "step" : "false"); }); }
function startAgain() {
  qs("#exampleSelect").value = "";
  qs("#useExample").disabled = true;
  qs("#sourceText").value = "";
  qs("#startingPoint").value = "";
  qs("#provisionText").value = "";
  qs("#exampleError").hidden = true;
  qs("#sourceError").hidden = true;
  qs("#strandChooser").hidden = true;
  qs("#changeStrand").setAttribute("aria-expanded", "false");
  qs("#nwwBox").classList.remove("possible", "needed");
  qs(".support-details").open = false;
  setNww("no");
  Object.assign(state, { panel: 1, maxReached: 1, mode: "custom", selectedStrand: null, recommendedStrand: null, selectedStep: 0, originalSteps: [], extractedAction: "" });
  qs("#stonesList").replaceChildren();
  qs("#outcomeDraft").value = "";
  qs("#sourceSummary").textContent = "";
  qs("#provisionSummary").textContent = "";
  updateCounter();
  showPanel(1);
  setTimeout(() => qs("#startHeading").focus({ preventScroll: true }), 350);
  showToast("Ready to crunch another outcome.");
}
function setNww(value) { const input = qs(`input[name="nww"][value="${value}"]`); if (input) input.checked = true; updateNww(); }
function updateNww() { const needed = qs('input[name="nww"]:checked')?.value === "yes"; qs("#nwwAlert").hidden = !needed; qs("#nwwBox").classList.toggle("needed", needed); if (qs("#nwwResult")) qs("#nwwResult").hidden = !needed; }
function updateCounter() { qs("#sourceCount").textContent = qs("#sourceText").value.length; }
function useSelectedExample() {
  const example = examples[qs("#exampleSelect").value];
  if (!example) { qs("#exampleError").hidden = false; return; }
  qs("#exampleError").hidden = true;
  qs("#sourceText").value = example[1];
  qs("#startingPoint").value = example[2];
  qs("#provisionText").value = example[3];
  state.mode = "example";
  state.recommendedStrand = example[4];
  setNww(example[5] ? "yes" : "no");
  updateCounter();
  crunchOutcome(true);
}
function inferStrand(text) { const source = text.toLowerCase(); let best = "processing"; let bestScore = -1; Object.entries(strands).forEach(([key, strand]) => { const score = strand.keywords.reduce((total, keyword) => total + (source.includes(keyword) ? 1 : 0), 0); if (score > bestScore) { best = key; bestScore = score; } }); return best; }
function inferNww(text) { return ["word processor", "extra time", "additional time", "rest break", "reader", "scribe", "assistive technology", "overlay"].some(term => text.toLowerCase().includes(term)); }
function sentenceCaseAction(action) { return action.trim().replace(/^[,;:\-–—\s]+/, "").replace(/[.;:,\s]+$/, "").replace(/^(?:be able to|independently)\s+/i, "").replace(/^([A-Z])/, letter => letter.toLowerCase()); }
function extractOutcomeAction(source, strandKey) {
  const text = source.replace(/\s+/g, " ").trim();
  const future = text.match(/\b(?:will be able to|will|can)\s+(.+)$/i);
  if (!future) return defaultActions[strandKey];
  let action = future[1].split(/\b(?:so that|in order to|which will enable|thereby)\b/i)[0].split(/[.!?](?:\s|$)/)[0];
  action = action.replace(/\bby the end of\b.+$/i, "");
  return sentenceCaseAction(action) || defaultActions[strandKey];
}
function makeCustomSteps(action) {
  const clean = sentenceCaseAction(action);
  return [
    `With direct support and agreed provision, ${clean} during one familiar activity.`,
    `Using an agreed prompt or strategy, ${clean} in a familiar context with no more than two prompts.`,
    `With no more than one prompt, ${clean} in a familiar context and review what helped.`,
    `Independently ${clean} across at least two relevant contexts or settings.`
  ];
}
function makeOutcomeDraft(source, action, strandKey) {
  if (/\b(?:will be able to|will|can)\b/i.test(source)) return `The learner will ${sentenceCaseAction(action)}.`;
  return strands[strandKey].outcome;
}
function renderStrands() { const grid = qs("#strandGrid"); grid.innerHTML = ""; Object.entries(strands).forEach(([key, strand]) => { const button = document.createElement("button"); button.type = "button"; button.className = `strand-card${key === state.selectedStrand ? " selected" : ""}`; button.setAttribute("role", "radio"); button.setAttribute("aria-checked", String(key === state.selectedStrand)); button.innerHTML = `${key === state.recommendedStrand ? '<span class="recommendation">Suggested</span>' : ""}<span class="strand-icon" aria-hidden="true">${strand.icon}</span><strong>${strand.title}</strong><p>${strand.description}</p>`; button.addEventListener("click", () => { state.selectedStrand = key; buildResult(); renderStrands(); showToast(`Draft rebuilt for ${strand.title}.`); }); grid.append(button); }); }
function renderSteps(steps) { const list = qs("#stonesList"); list.innerHTML = ""; steps.forEach((step, index) => { const wrapper = document.createElement("div"); wrapper.className = `stone${index === state.selectedStep ? " selected" : ""}`; const button = document.createElement("button"); button.type = "button"; button.className = "stone-select"; button.setAttribute("aria-label", `Select stepping stone ${index + 1}`); button.textContent = index + 1; button.addEventListener("click", () => selectStep(index)); const field = document.createElement("div"); const label = document.createElement("label"); label.htmlFor = `step-${index}`; label.textContent = ["Supported start", "Developing use", "Reduced prompting", "Across contexts"][index]; const textarea = document.createElement("textarea"); textarea.id = `step-${index}`; textarea.value = step; textarea.rows = 3; textarea.addEventListener("focus", () => selectStep(index)); field.append(label, textarea); wrapper.append(button, field); list.append(wrapper); }); updateSelectionLabel(); }
function buildResult() {
  const source = qs("#sourceText").value.trim();
  const strand = strands[state.selectedStrand];
  state.extractedAction = extractOutcomeAction(source, state.selectedStrand);
  state.originalSteps = state.mode === "custom" ? makeCustomSteps(state.extractedAction) : [...strand.steps];
  state.selectedStep = 0;
  qs("#strandName").textContent = strand.title;
  qs("#sourceSummary").textContent = state.mode === "custom" ? `Learner action identified: “${state.extractedAction}”` : source;
  qs("#outcomeDraft").value = state.mode === "custom" ? makeOutcomeDraft(source, state.extractedAction, state.selectedStrand) : strand.outcome;
  qs("#provisionSummary").textContent = qs("#provisionText").value.trim() || "No provision was entered. Add and agree the support that must remain in place before using a stepping stone.";
  renderSteps(state.originalSteps);
  updateNww();
}
function crunchOutcome(fromExample = false) {
  const source = qs("#sourceText").value.trim();
  if (!source) { qs("#sourceError").hidden = false; qs("#sourceText").focus(); return; }
  qs("#sourceError").hidden = true;
  if (!fromExample) { state.mode = "custom"; state.recommendedStrand = inferStrand(source); }
  state.selectedStrand = state.recommendedStrand || inferStrand(source);
  if (inferNww(`${source} ${qs("#provisionText").value}`) && qs('input[name="nww"]:checked')?.value !== "yes") setNww("yes");
  renderStrands();
  buildResult();
  state.maxReached = 2;
  showPanel(2);
  showToast(state.mode === "custom" ? "Pasted outcome crunched—review the suggested wording." : "Example loaded and crunched.");
}
function selectStep(index) { state.selectedStep = index; qsa(".stone").forEach((stone, i) => stone.classList.toggle("selected", i === index)); updateSelectionLabel(); }
function updateSelectionLabel() { qs("#selectionCount").textContent = `Step ${state.selectedStep + 1} selected`; }
async function copySelectedStep() { const selected = qs(`#step-${state.selectedStep}`).value.trim(); try { await navigator.clipboard.writeText(selected); showToast("Selected stepping stone copied."); } catch { qs(`#step-${state.selectedStep}`).select(); showToast("Use your browser's Copy command to copy the highlighted wording."); } }
let toastTimer;
function showToast(message) { const toast = qs("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2800); }

function initialise() {
  populateExamples();
  const savedTheme = localStorage.getItem("outcome-cruncher-theme");
  setTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  qs("#themeToggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  qsa("[data-nav-step]").forEach(control => control.addEventListener("click", () => showPanel(Number(control.dataset.navStep))));
  qs("#exampleSelect").addEventListener("change", () => { qs("#useExample").disabled = !qs("#exampleSelect").value; qs("#exampleError").hidden = true; });
  qs("#sourceText").addEventListener("input", () => { state.mode = "custom"; state.recommendedStrand = null; updateCounter(); });
  qs("#provisionText").addEventListener("input", () => qs("#nwwBox").classList.toggle("possible", inferNww(qs("#provisionText").value)));
  qsa('input[name="nww"]').forEach(input => input.addEventListener("change", updateNww));
  qs("#useExample").addEventListener("click", useSelectedExample);
  qs("#crunchOutcome").addEventListener("click", crunchOutcome);
  qs("#changeStrand").addEventListener("click", () => { const chooser = qs("#strandChooser"); chooser.hidden = !chooser.hidden; qs("#changeStrand").setAttribute("aria-expanded", String(!chooser.hidden)); });
  qs("#startAgain").addEventListener("click", startAgain);
  qsa("[data-back]").forEach(button => button.addEventListener("click", () => showPanel(Number(button.dataset.back))));
  qs("#resetSteps").addEventListener("click", () => { renderSteps(state.originalSteps); showToast("Suggested wording restored."); });
  qs("#copyStep").addEventListener("click", copySelectedStep);
  qs("#printOutcome").addEventListener("click", () => window.print());
  qs("#smartLink").href = SMART_BUILDER_URL;
  updateNavigation(); updateCounter(); updateNww();
}
initialise();
