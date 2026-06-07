const SUBJECTS = {
  matlab: { label: "Matlab", file: "data/matlab.json" },
  dsa: { label: "DSA", file: "data/dsa.json" },
  python: { label: "Python", file: "data/python.json" },
  dbms: { label: "DBMS", file: "data/dbms.json" }
};

const DUMMY_ADS = [
  { title: "Learn DSA & System Design", desc: "Master Data Structures and System Design", button: "Learn more" },
  { title: "Generative AI Training", desc: "Master AI with Expert Training", button: "Learn more" },
  { title: "Web Development", desc: "Build Modern Web Applications", button: "Explore" },
  { title: "Python Mastery", desc: "From Basics to Advanced Python", button: "Learn more" },
  { title: "Java Programming", desc: "Complete Java Development Course", button: "Get Started" },
  { title: "Cloud Computing", desc: "AWS, Azure, GCP Certified", button: "Learn more" },
  { title: "Competitive Coding", desc: "Ace Your Next Interview", button: "Start Now" }
];

const state = {
  allSubjectData: {},
  currentProgram: null,
  filteredPrograms: [],
  currentSearch: ""
};

const searchInput = document.getElementById("search-input");
const statusText = document.getElementById("status-text");
const emptyState = document.getElementById("empty-state");
const programTemplate = document.getElementById("program-template");
const programSection = document.getElementById("program-section");
const currentCategoryEl = document.getElementById("current-category");
const subjectAccordion = document.getElementById("subject-accordion");
const adContainer = document.getElementById("ad-container");

document.addEventListener("DOMContentLoaded", initializeApp);

async function initializeApp() {
  buildAccordion();
  loadAllSubjects();
  renderAdvertisements();
  
  searchInput.addEventListener("input", (e) => {
    filterAndRender(e.target.value);
  });
}

function buildAccordion() {
  const fragment = document.createDocumentFragment();

  Object.entries(SUBJECTS).forEach(([key, subject]) => {
    const item = document.createElement("div");
    item.className = "accordion-item";
    item.innerHTML = `
      <button class="accordion-button" data-subject="${key}">
        <span>${subject.label}</span>
        <span class="accordion-arrow">▼</span>
      </button>
      <div class="accordion-content" data-subject="${key}"></div>
    `;

    const button = item.querySelector(".accordion-button");
    button.addEventListener("click", (e) => {
      toggleAccordion(e.currentTarget);
    });

    fragment.appendChild(item);
  });

  subjectAccordion.appendChild(fragment);
}

async function loadAllSubjects() {
  for (const [key, subject] of Object.entries(SUBJECTS)) {
    try {
      const data = isFileProtocol()
        ? window.SUBJECT_DATA?.[key] || []
        : await (await fetch(subject.file)).json();

      state.allSubjectData[key] = normalizePrograms(data);
      populateAccordionContent(key);
    } catch (error) {
      console.warn(`Failed to load ${subject.label}:`, error);
      state.allSubjectData[key] = [];
    }
  }
}

function populateAccordionContent(subjectKey) {
  const content = document.querySelector(`.accordion-content[data-subject="${subjectKey}"]`);
  const programs = state.allSubjectData[subjectKey];
  
  const fragment = document.createDocumentFragment();
  programs.forEach((program) => {
    const item = document.createElement("div");
    item.className = "program-item";
    item.textContent = `${program.serial}. ${program.title}`;
    item.dataset.key = subjectKey;
    item.dataset.serial = program.serial;
    
    item.addEventListener("click", () => {
      displayProgram(program, subjectKey);
      updateActiveItem(item);
    });
    
    fragment.appendChild(item);
  });
  
  content.appendChild(fragment);
}

function toggleAccordion(button) {
  const subject = button.dataset.subject;
  const content = document.querySelector(`.accordion-content[data-subject="${subject}"]`);
  
  // Close other accordions
  document.querySelectorAll(".accordion-button").forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove("active");
      const otherContent = document.querySelector(
        `.accordion-content[data-subject="${btn.dataset.subject}"]`
      );
      otherContent.classList.remove("open");
    }
  });

  button.classList.toggle("active");
  content.classList.toggle("open");
}

function filterAndRender(query) {
  state.currentSearch = query.toLowerCase();
  
  if (!state.currentProgram) {
    statusText.textContent = "Select a program from the left menu";
    return;
  }

  // Check if current program matches filter
  if (!matchesQuery(state.currentProgram, state.currentSearch)) {
    emptyState.hidden = false;
    programSection.innerHTML = "";
    statusText.textContent = `No programs match "${query}"`;
    return;
  }

  emptyState.hidden = true;
  statusText.textContent = `Showing program matching "${query}"`;
  renderProgram(state.currentProgram);
}

function matchesQuery(program, query) {
  if (!query) return true;
  
  const haystack = [
    String(program.serial),
    program.title,
    program.description,
    ...program.keywords
  ].join(" ").toLowerCase();
  
  return haystack.includes(query);
}

function displayProgram(program, subject) {
  state.currentProgram = program;
  currentCategoryEl.textContent = `${SUBJECTS[subject].label} > ${program.title}`;
  renderProgram(program);
  
  // Clear search if it doesn't match
  if (!matchesQuery(program, state.currentSearch)) {
    searchInput.value = "";
    state.currentSearch = "";
  }
}

function renderProgram(program) {
  programSection.innerHTML = "";
  emptyState.hidden = true;

  const card = programTemplate.content.firstElementChild.cloneNode(true);
  
  card.querySelector(".serial-badge").textContent = `Program ${program.serial}`;
  card.querySelector(".program-title").textContent = program.title;
  card.querySelector(".program-description").textContent = program.description;
  card.querySelector(".program-explanation").textContent = program.explanation;
  card.querySelector(".example-input").textContent = program.example.input;
  card.querySelector(".example-output").textContent = program.example.output;
  card.querySelector(".program-code").textContent = program.code;

  const keywordRow = card.querySelector(".keyword-row");
  keywordRow.innerHTML = "";
  program.keywords.forEach((keyword) => {
    const chip = document.createElement("span");
    chip.className = "keyword-chip";
    chip.textContent = keyword;
    keywordRow.appendChild(chip);
  });

  if (program.keywords.length === 0) {
    keywordRow.hidden = true;
  }

  const copyButton = card.querySelector(".copy-button");
  copyButton.addEventListener("click", () => copyCode(program.code, copyButton));

  programSection.appendChild(card);
  statusText.textContent = `Program ${program.serial}: ${program.title}`;
}

function updateActiveItem(element) {
  document.querySelectorAll(".program-item").forEach((item) => {
    item.classList.remove("active");
  });
  element.classList.add("active");
}

async function copyCode(code, button) {
  const original = button.textContent;
  
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      copyUsingFallback(code);
    }
    button.textContent = "Copied!";
    button.classList.add("copied");
  } catch (error) {
    button.textContent = "Failed!";
    console.error(error);
  }

  setTimeout(() => {
    button.textContent = original;
    button.classList.remove("copied");
  }, 1600);
}

function copyUsingFallback(code) {
  const textarea = document.createElement("textarea");
  textarea.value = code;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function renderAdvertisements() {
  const fragment = document.createDocumentFragment();
  
  DUMMY_ADS.forEach((ad) => {
    const adElement = document.createElement("div");
    adElement.className = "ad-card";
    adElement.innerHTML = `
      <h3 class="ad-title">${ad.title}</h3>
      <p class="ad-description">${ad.desc}</p>
      <button class="ad-button">${ad.button}</button>
    `;
    fragment.appendChild(adElement);
  });

  adContainer.appendChild(fragment);
}

function normalizePrograms(programs) {
  return programs.map((program) => ({
    serial: program.serial,
    title: program.title,
    description: program.description,
    explanation: program.explanation || "No explanation available.",
    example: {
      input: program.example?.input || "No sample input.",
      output: program.example?.output || "No sample output."
    },
    code: decodeCode(program.code || ""),
    keywords: Array.isArray(program.keywords) ? program.keywords : []
  }));
}

function decodeCode(code) {
  return code
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t");
}

function isFileProtocol() {
  return window.location.protocol === "file:";
}
