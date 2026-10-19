// Evexia Sports AI Assistant – Client‑side chatbot engine
// ---------------------------------------------------------------
// This script provides a lightweight rule‑based AI assistant that
// lives entirely in the browser. No external API calls are made.
// It loads a structured knowledge base, matches user input to intents,
// and renders a premium glassmorphic UI (defined in chatbot.css).

(() => {
  // -----------------------------------------------------------------
  // 1️⃣ Knowledge Base – All core content required for the assistant
  // -----------------------------------------------------------------
  const KNOWLEDGE = {
    // General greetings and motto
    greeting: {
      triggers: ["hi", "hello", "hey", "good morning", "good evening", "namaste"],
      response: `👋 Hey there! I’m the Evexia Sports AI Assistant – your high‑energy, professional sports consultant.

🗣️ "Sports is nothing without passion! Enough in the meeting room, see you on the ground!"

How can I help you today?`,
      chips: ["About Evexia", "Our Services", "Leadership", "Contact"]
    },
    // Company overview
    about: {
      triggers: ["about", "who are you", "company", "evexia", "mission", "vision"],
      response: `Evexia XSports India LLP bridges grassroots participation with professional sports.

🏆 **Vision:** Empower every child to become healthier, stronger, & confident, with the dream of producing an **Olympic Gold Medallist** from India.

💡 **Mission:** Deliver scientific training, structured pathways, and world‑class infrastructure.
`,
      chips: ["Our Core Offerings", "Athlete Pathways", "Infrastructure"]
    },
    // Core offerings
    services: {
      triggers: ["services", "what do you do", "offer", "core offerings"],
      response: `We provide a 4‑pillared ecosystem:

1️⃣ **Sports Training & Academies** – scientific curricula, age‑appropriate pathways, biomechanics & video analysis.
2️⃣ **Institutional Partnerships** – turnkey school PE curriculum, court set‑up, after‑school academies.
3️⃣ **Facility & Infrastructure Management** – court resurfacing (acrylic/PU), lighting design, preventive maintenance.
4️⃣ **Events & Corporate Sports** – corporate leagues, Padel & Pickleball tournaments, executive wellness programs.
`,
      chips: ["School Programs", "Corporate Partnerships", "Infrastructure", "Training Pathways"]
    },
    // School programs (St. Xavier's case study)
    school_programs: {
      triggers: ["school", "institution", "curriculum", "st. xavier", "rahul", "ph", "k12"],
      response: `📚 **School Programs – St. Xavier's Rohini Case Study**

✅ Complete court management for Pickleball, Padel, Badminton & Basketball.
✅ Turnkey PE curriculum integration & after‑school academy.
✅ Ongoing facility maintenance, resurfacing & asset audit.

Our model can be replicated for any K‑12 institution – just let us know your needs!
`,
      chips: ["Contact School Inquiry", "Curriculum Details"]
    },
    // Corporate partnerships
    corporate: {
      triggers: ["corporate", "company", "employee", "wellness", "padel", "pickleball", "league"],
      response: `🏢 **Corporate Partnerships**

• Executive wellness leagues – Padel, Badminton, Table Tennis.
• Team‑building tournaments & live streaming.
• Custom fitness bootcamps, nutrition plans, mental‑focus workshops.

Ready to boost employee health and engagement?
`,
      chips: ["Book a Corporate Demo", "Event Pricing"]
    },
    // Infrastructure & court details
    infrastructure: {
      triggers: ["infrastructure", "court", "facility", "resurface", "acrylic", "lighting"],
      response: `🛠️ **Infrastructure & Court Engineering**

- **Standard dimensions** – FIBA basketball (28×15 m), Padel (20×10 m), Pickleball (13.4×6.1 m).
- **Flooring** – Acrylic, PU, wooden, synthetic turf – anti‑slip & shock‑absorbent.
- **Resurfacing** – 2‑year acrylic coat, UV‑stable, 12‑mm thickness.
- **Lighting** – LED ≥ 500 lux for indoor play, uniform glare‑free.
- **Maintenance schedule** – Weekly inspection, quarterly cleaning, annual re‑coat.

Need a site audit? Just ask!`,
      chips: ["Request Facility Audit", "Maintenance Quote"]
    },
    // Training & pathways
    pathways: {
      triggers: ["pathway", "grassroots", "olympic", "career", "athlete"],
      response: `🚀 **Athlete Development Pathway** – 4‑stage model:

1️⃣ **Grassroots Discovery** (4‑8 yrs) – fundamental motor skills, multi‑sport exposure.
2️⃣ **Fundamental Skill** (9‑13 yrs) – sport‑specific drills, teamwork, tactical basics.
3️⃣ **High‑Performance** (14‑18 yrs) – intensive tournaments, video analytics, periodised conditioning.
4️⃣ **Elite & National** (18+ yrs) – national squads, international academy exchanges, Olympic qualification.

We provide coaching, sports‑science analytics, and scholarship guidance at each stage.
`,
      chips: ["Enroll Athlete", "Scholarship Info"]
    },
    // Leadership profiles
    leadership: {
      triggers: ["director", "leadership", "ankur", "eric", "founder"],
      response: `👤 **Ankur Sharma – Director & Co‑Founder**

- 19+ years corporate leadership.
- International engagements with legends like Xavi Hernández & Novak Djokovic.
- Visionary behind Evexia’s global sports collaborations.

👤 **Eric Benjamin – Director & Co‑Founder**

- Operational excellence & structured sports education.
- Expert in PE curriculum design & institutional partnerships.
- Drives day‑to‑day academy operations.
`,
      chips: ["Contact Ankur", "Contact Eric"]
    },
    // Sports list
    sports_list: {
      triggers: ["sports", "disciplines", "how many", "list"],
      response: `We support **26 sports** across four categories:

**Team Sports** – Football, Cricket, Hockey, Basketball, Kabaddi, etc.
**Racquet Sports** – Tennis, Badminton, Table Tennis, Pickleball, Padel.
**Combat & Martial Arts** – Judo, Karate, Taekwondo, Boxing, Wrestling, Archery, Shooting.
**Athletics & Precision** – Track, Marathon, Weightlifting, Chess, Cycling.

Want details for a specific sport? Just ask!`,
      chips: ["Pickleball Details", "Padel Details"]
    },
    // Contact info
    contact: {
      triggers: ["contact", "phone", "email", "reach", "inquiry"],
      response: `📞 **Contact Evexia XSports**

- India: +91 95990 40555 | +91 98101 25412
- Spain / International: +34 693 181 135
- Email: evexiaxsports@outlook.com
- Social: @evexiaxsports (Instagram, LinkedIn, Facebook)

💬 Ready to transform your facility or program? Let’s chat!`,
      chips: ["Book a Consultation", "Schedule Facility Audit"]
    },
    // Specific sport – Pickleball
    pickleball: {
      triggers: ["pickleball", "pickleball court", "pickleball maintenance"],
      response: `🏓 **Pickleball Court Expertise**

- Court size: 13.4 m × 6.1 m, net height 91 cm.
- Recommended acrylic surface with anti‑slip coating.
- LED lighting ≥ 300 lux for indoor play.
- Maintenance: weekly cleaning, monthly edge inspection, 2‑year resurfacing.

We can design, build, and maintain a turnkey Pickleball facility.
`,
      chips: ["Request Pickleball Quote", "See Case Study"]
    },
    // Specific sport – Padel
    padel: {
      triggers: ["padel", "padel court", "padel maintenance"],
      response: `🎾 **Padel Court Expertise**

- Court size: 20 m × 10 m, enclosed walls (glass & mesh).
- Surface: synthetic acrylic with high‑bounce finish.
- Lighting: ≥ 500 lux, glare‑free.
- Maintenance: quarterly cleaning, annual surface re‑coat.

We offer full‑service Padel court installation & upkeep.
`,
      chips: ["Request Padel Quote", "Watch Padel Tour"]
    },
    // Fallback – generic menu
    fallback: {
      triggers: [],
      response: `I’m here to help! You can ask me about:

- **Our Services**
- **School Programs**
- **Corporate Partnerships**
- **Infrastructure & Courts**
- **Athlete Pathways**
- **Leadership**
- **Contact Details**
- **Sports List**

What would you like to know?`,
      chips: ["Our Services", "School Programs", "Contact"]
    }
  };

  // -----------------------------------------------------------------
  // 2️⃣ Intent Detection – simple keyword scoring
  // -----------------------------------------------------------------
  function detectIntent(message) {
    const lower = message.toLowerCase();
    let best = { name: "fallback", score: 0 };
    for (const [name, data] of Object.entries(KNOWLEDGE)) {
      if (!data.triggers.length) continue; // fallback has none
      let score = 0;
      for (const kw of data.triggers) {
        if (lower.includes(kw)) score += 1;
      }
      if (score > best.score) {
        best = { name, score };
      }
    }
    // Confidence threshold – if score less than 1, fall back
    return best.score >= 1 ? best.name : "fallback";
  }

  // -----------------------------------------------------------------
  // 3️⃣ UI Rendering – create widget markup (FAB + panel)
  // -----------------------------------------------------------------
  const html = `
  <!-- Chatbot Floating Action Button -->
  <button class="chatbot-fab" aria-label="Open Evexia AI Assistant">
    <span class="fab-icon-chat">🤖</span>
    <span class="fab-icon-close">✕</span>
    <span class="chatbot-fab-badge"></span>
  </button>

  <!-- Chat Panel -->
  <div class="chatbot-panel" aria-live="polite">
    <header class="chatbot-header">
      <div class="chatbot-avatar">🤖</div>
      <div class="chatbot-header-info">
        <div class="chatbot-header-name">Evexia Sports AI Assistant</div>
        <div class="chatbot-header-status"><span class="chatbot-status-dot"></span>Online</div>
      </div>
      <button class="chatbot-header-close" aria-label="Close chat">✕</button>
    </header>
    <div class="chatbot-messages" id="chatbot-messages"></div>
    <div class="chatbot-input-area">
      <input type="text" class="chatbot-input" placeholder="Ask me about Evexia..." aria-label="Chat input" />
      <button class="chatbot-send-btn" disabled aria-label="Send message">➤</button>
    </div>
    <div class="chatbot-powered">
      Powered by <strong>Evexia</strong> • Designed with <span style="color: var(--primary)">❤️</span>
    </div>
  </div>
  `;

  // Append to body
  document.body.insertAdjacentHTML('beforeend', html);

  // Grab elements
  const fab = document.querySelector('.chatbot-fab');
  const panel = document.querySelector('.chatbot-panel');
  const closeBtn = panel.querySelector('.chatbot-header-close');
  const messagesEl = panel.querySelector('#chatbot-messages');
  const input = panel.querySelector('.chatbot-input');
  const sendBtn = panel.querySelector('.chatbot-send-btn');

  // -----------------------------------------------------------------
  // 4️⃣ Helper – render a message bubble
  // -----------------------------------------------------------------
  function renderMessage({ text, from = 'bot', chips = [] }) {
    const msgEl = document.createElement('div');
    msgEl.className = `chatbot-msg ${from}`;
    if (from === 'bot') {
      const avatar = document.createElement('div');
      avatar.className = 'chatbot-msg-avatar';
      avatar.textContent = '🤖';
      msgEl.appendChild(avatar);
    }
    const bubble = document.createElement('div');
    bubble.className = 'chatbot-msg-bubble';
    bubble.innerHTML = text.replace(/\n/g, '<br>');
    msgEl.appendChild(bubble);
    // Timestamp
    const time = document.createElement('div');
    time.className = 'chatbot-msg-time';
    const now = new Date();
    time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    msgEl.appendChild(time);
    messagesEl.appendChild(msgEl);
    // Auto‑scroll
    messagesEl.scrollTop = messagesEl.scrollHeight;

    // Add chips if any (bot only)
    if (from === 'bot' && chips.length) {
      const chipsContainer = document.createElement('div');
      chipsContainer.className = 'chatbot-chips';
      chips.forEach(label => {
        const chip = document.createElement('button');
        chip.className = 'chatbot-chip';
        chip.type = 'button';
        chip.textContent = label;
        chip.addEventListener('click', () => handleUserMessage(label));
        chipsContainer.appendChild(chip);
      });
      messagesEl.appendChild(chipsContainer);
    }
  }

  // -----------------------------------------------------------------
  // 5️⃣ Typing indicator
  // -----------------------------------------------------------------
  function showTyping(show) {
    let typing = panel.querySelector('.chatbot-typing');
    if (!typing && show) {
      typing = document.createElement('div');
      typing.className = 'chatbot-typing';
      typing.innerHTML = `<div class="chatbot-typing-dots"><span></span><span></span><span></span></div>`;
      messagesEl.appendChild(typing);
    }
    if (typing) typing.classList.toggle('active', show);
    if (!show && typing) {
      typing.remove();
    }
  }

  // -----------------------------------------------------------------
  // 6️⃣ Core interaction flow
  // -----------------------------------------------------------------
  function botRespond(intentName) {
    const intent = KNOWLEDGE[intentName];
    renderMessage({ text: intent.response, from: 'bot', chips: intent.chips });
  }

  function handleUserMessage(raw) {
    // Render user bubble
    renderMessage({ text: raw, from: 'user' });
    // Clear input if triggered by user typing
    if (input.value && raw === input.value) input.value = '';
    sendBtn.disabled = true;
    // Show typing for realism
    showTyping(true);
    setTimeout(() => {
      showTyping(false);
      const intentName = detectIntent(raw);
      botRespond(intentName);
    }, 800 + Math.random() * 400);
  }

  // -----------------------------------------------------------------
  // 7️⃣ Event listeners
  // -----------------------------------------------------------------
  // FAB toggle
  fab.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    fab.classList.toggle('open', isOpen);
    // Focus input when opened
    if (isOpen) setTimeout(() => input.focus(), 200);
  });

  // Close button
  closeBtn.addEventListener('click', () => {
    panel.classList.remove('open');
    fab.classList.remove('open');
  });

  // Input handling
  input.addEventListener('input', () => {
    sendBtn.disabled = !input.value.trim();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      handleUserMessage(input.value.trim());
    }
    if (e.key === 'Escape') {
      panel.classList.remove('open');
      fab.classList.remove('open');
    }
  });

  sendBtn.addEventListener('click', () => {
    if (input.value.trim()) {
      handleUserMessage(input.value.trim());
    }
  });

  // -----------------------------------------------------------------
  // 8️⃣ Initial greeting on first open
  // -----------------------------------------------------------------
  let greeted = false;
  const observer = new MutationObserver(mutations => {
    for (const mut of mutations) {
      if (mut.attributeName === 'class') {
        const isOpen = panel.classList.contains('open');
        if (isOpen && !greeted) {
          greeted = true;
          botRespond('greeting');
        }
      }
    }
  });
  observer.observe(panel, { attributes: true });

  // -----------------------------------------------------------------
  // 9️⃣ Accessibility – focus trap when panel open (basic)
  // -----------------------------------------------------------------
  document.addEventListener('focusin', e => {
    if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== fab) {
      e.stopPropagation();
      input.focus();
    }
  });
})();
