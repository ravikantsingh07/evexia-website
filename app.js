/**
 * Evexia XSports India LLP - Interactive Application Script
 * High-Performance, Mobile-First, Accessible Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Data Store: 26 Multi-Sport Disciplines
  // ==========================================================================
  const sportsData = [
    {
      id: 'football',
      name: 'Football',
      category: 'team',
      categoryLabel: 'Team Sport',
      icon: 'fa-futbol',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'FIFA-aligned youth and high-performance academy training focusing on ball mastery, tactical acumen, and match intelligence.',
      ageGroups: 'U-7, U-11, U-15, U-19 & Pro Squad',
      coachRatio: '1:8 Certified Coach Ratio',
      trainingRegimen: 'Ball mastery, spatial awareness, positional tactics, plyometrics, competitive league play.',
      highlights: ['UEFA & AFC licensed training methodology', 'Position-specific tactical video analysis', 'National youth I-League & tournament pathways', 'Injury prevention & sports physiotherapy']
    },
    {
      id: 'cricket',
      name: 'Cricket',
      category: 'team',
      categoryLabel: 'Team Sport',
      icon: 'fa-baseball-bat-ball',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Comprehensive cricket coaching covering batting strokeplay, pace/spin bowling biomechanics, fielding drills, and match temperament.',
      ageGroups: 'U-9, U-13, U-16, U-19 & Seniors',
      coachRatio: '1:8 High-Performance Coach Ratio',
      trainingRegimen: 'Bowling biomechanics, turf & matting wickets, video kinematic analysis, red/white ball leagues.',
      highlights: ['BCCI certified Level 1 & 2 coaches', 'Speed radar & high-speed bowling capture', 'Specialized spin & pace masterclasses', 'District & State board selection pathway']
    },
    {
      id: 'hockey',
      name: 'Hockey',
      category: 'team',
      categoryLabel: 'Team Sport',
      icon: 'fa-hockey-puck',
      image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Revitalizing India’s legacy sport with modern turf stickwork, rapid transition play, and physical conditioning.',
      ageGroups: 'U-10, U-14, U-18 & University',
      coachRatio: '1:10 Coach-to-Athlete Ratio',
      trainingRegimen: 'Modern synthetic turf training, 3D skills, aerial receptions, penalty corner routines.',
      highlights: ['FIH standard tactical drills', 'Aerobic capacity & change-of-direction agility', 'Junior National championship representation', 'Scholarship & institutional recruitment avenues']
    },
    {
      id: 'basketball',
      name: 'Basketball',
      category: 'team',
      categoryLabel: 'Team Sport',
      icon: 'fa-basketball',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Fast-paced hoops training emphasizing ball handling, shooting mechanics, defensive rotation, and court vision.',
      ageGroups: 'U-8, U-12, U-16, U-21',
      coachRatio: '1:8 Skill Development Ratio',
      trainingRegimen: 'Dribble drive, shooting form calibration, pick-and-roll IQ, vertical jump training.',
      highlights: ['FIBA certified hardwood training courts', '3x3 and 5x5 competitive league rosters', 'Sports science vertical leaping protocols', 'College scouting & overseas camp recommendations']
    },
    {
      id: 'athletics',
      name: 'Athletics',
      category: 'athletics',
      categoryLabel: 'Track & Field',
      icon: 'fa-person-running',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The foundation of all movement: sprint mechanics, middle/long distance, hurdles, and field jumps/throws.',
      ageGroups: 'Ages 6 to 24 (Grassroots to Elite)',
      coachRatio: '1:6 Specialized Sprint/Field Ratio',
      trainingRegimen: 'Cadence optimization, starting blocks, lactic tolerance, periodized strength training.',
      highlights: ['IAAF certified synthetic track regimens', 'Laser timing gate performance testing', 'Biomechanic stride & ground reaction analysis', 'Olympic & Asian Games developmental pipeline']
    },
    {
      id: 'tennis',
      name: 'Tennis',
      category: 'racquet',
      categoryLabel: 'Racquet Sport',
      icon: 'fa-baseball',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Championship tennis curriculum blending modern baseline power, spin control, footwork precision, and mental grit.',
      ageGroups: 'Mini-Tennis (4-7), Junior (8-14), ITF Tour (15+)',
      coachRatio: '1:4 Elite Court Ratio',
      trainingRegimen: 'Serve velocity, rally tolerance, cross-court depth, split-step agility, tournament play.',
      highlights: ['AITA & ITF tournament tour guidance', 'Video stroke breakdown & racket telemetry', 'Clay & hardcourt surface adaptability', 'Mental conditioning & pressure point handling']
    },
    {
      id: 'table-tennis',
      name: 'Table Tennis',
      category: 'racquet',
      categoryLabel: 'Racquet Sport',
      icon: 'fa-table-tennis-paddle-ball',
      image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Lightning-quick reaction training, spin variations, service deception, and dynamic table footwork.',
      ageGroups: 'U-9, U-13, U-17, Adults & Veterans',
      coachRatio: '1:4 Intensive Table Ratio',
      trainingRegimen: 'Multi-ball rapid firing, robotic feeder drills, rubber spin manipulation, third-ball attack.',
      highlights: ['ITTF approved high-bounce rubber flooring', 'High-frequency robotic ball servers', 'National ranking points circuit support', 'Cognitive processing & hand-eye reflex training']
    },
    {
      id: 'badminton',
      name: 'Badminton',
      category: 'racquet',
      categoryLabel: 'Racquet Sport',
      icon: 'fa-feather-pointed',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'High-speed smash power, deceptive drops, court perimeter agility, and endurance rallies under expert coaches.',
      ageGroups: 'Ages 6 to 22 (Beginner to Ranking Circuit)',
      coachRatio: '1:6 Court Ratio',
      trainingRegimen: 'Footwork shadow drills, multi-shuttle endurance, smash angle steepness, net tumble mastery.',
      highlights: ['BWF certified shock-absorbent synthetic courts', 'BAI circuit tournament participation', 'Specialized shoulder and ankle conditioning', 'Singles and Doubles tactical blueprints']
    },
    {
      id: 'swimming',
      name: 'Swimming',
      category: 'athletics',
      categoryLabel: 'Aquatics',
      icon: 'fa-person-swimming',
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'From learn-to-swim water safety to competitive stroke mechanics across Freestyle, Backstroke, Breaststroke, and Butterfly.',
      ageGroups: 'Toddlers (4+), Squad Swimmers, Masters',
      coachRatio: '1:6 Lane Safety & Stroke Ratio',
      trainingRegimen: 'Hydrodynamic streamlining, flip turns, underwater dolphin kicks, VO2 max sets.',
      highlights: ['Ozone-purified temperature-controlled pools', 'Underwater stroke video analysis', 'Swimming Federation of India (SFI) meets', 'Aerobic base & full-body endurance building']
    },
    {
      id: 'cycling',
      name: 'Cycling',
      category: 'athletics',
      categoryLabel: 'Endurance',
      icon: 'fa-person-biking',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Road racing, track cycling, and criterium training focusing on cadence efficiency, aerodynamic drafting, and stamina.',
      ageGroups: 'Ages 10 to Adult',
      coachRatio: '1:8 Pelotons Ratio',
      trainingRegimen: 'Wattage power zones, FTP interval ladders, cornering posture, bunch sprint tactics.',
      highlights: ['Power-meter based metric tracking', 'Safety-monitored group road expeditions', 'National cycling federation qualification', 'Custom bike fitting and cadence diagnostics']
    },
    {
      id: 'gymnastics',
      name: 'Gymnastics',
      category: 'athletics',
      categoryLabel: 'Artistic & Functional',
      icon: 'fa-child-reaching',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Unlocking supreme flexibility, core balance, aerial orientation, and artistic apparatus routines.',
      ageGroups: 'Ages 4 to 16 (Fundamental Physical Literacy)',
      coachRatio: '1:6 Spotter-Assisted Ratio',
      trainingRegimen: 'Floor tumbling, vault springboard, balance beam, uneven bars, mobility regimens.',
      highlights: ['FIG standard padded foam landing pits', 'Essential foundational gymnastics for all sports', 'Elite flexibility and injury prevention foundation', 'State and national gymnastics championship trials']
    },
    {
      id: 'archery',
      name: 'Archery',
      category: 'target',
      categoryLabel: 'Target & Precision',
      icon: 'fa-bullseye',
      image: 'https://images.unsplash.com/photo-1511067007772-9d8907892230?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Precision target shooting using Recurve and Compound bows with scientific posture alignment and breath control.',
      ageGroups: 'Ages 8 to 25',
      coachRatio: '1:5 Precision Lane Ratio',
      trainingRegimen: 'Anchor point consistency, scapular draw control, wind compensation, meditative focus.',
      highlights: ['Olympic standard 70m target outdoor ranges', 'High-accuracy draw weight adjustment', 'Archery Association of India competitive pathways', 'Mental focus and biofeedback heart-rate management']
    },
    {
      id: 'shooting',
      name: 'Shooting',
      category: 'target',
      categoryLabel: 'Target & Precision',
      icon: 'fa-crosshairs',
      image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: '10m Air Rifle and Air Pistol marksmanship with electronic scoring targets and olympic-grade discipline.',
      ageGroups: 'Ages 10 to 30',
      coachRatio: '1:4 Precision Lane Ratio',
      trainingRegimen: 'Sight alignment, trigger release stillness, breathing cadence, static endurance hold.',
      highlights: ['ISSF approved electronic scoring targets (SIUS)', 'Scatt system infrared trigger tracking', 'NRAI National Championship qualifying circuit', 'India’s prime Olympic medal discipline focus']
    },
    {
      id: 'judo',
      name: 'Judo',
      category: 'combat',
      categoryLabel: 'Combat & Martial Arts',
      icon: 'fa-user-ninja',
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The Gentle Way: mastering leverage, dynamic throws, grappling pins, balance disruption (kuzushi), and respect.',
      ageGroups: 'Ages 6 to 22',
      coachRatio: '1:8 Tatami Dojo Ratio',
      trainingRegimen: 'Ukemi (safe falling), forward/hip throws, ground hold-downs, Randori sparring.',
      highlights: ['Traditional Tatami mat safety installations', 'Recognized Dan & Kyu belt ranking system', 'Self-defense and core physical resilience', 'National School Games & Khelo India representation']
    },
    {
      id: 'karate',
      name: 'Karate',
      category: 'combat',
      categoryLabel: 'Combat & Martial Arts',
      icon: 'fa-hand-fist',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Traditional Shotokan & Olympic Karate training focusing on Kata precision, Kumite sparring, speed, and inner discipline.',
      ageGroups: 'Ages 5 to Adult',
      coachRatio: '1:8 Dojo Ratio',
      trainingRegimen: 'Kihon basics, Kata choreographies, speed punches, high chamber kicks, Kumite timing.',
      highlights: ['WKF (World Karate Federation) approved curriculum', 'Character development, respect, and discipline', 'Certified belt progressions from White to Black Belt', 'Inter-school and state championship tournaments']
    },
    {
      id: 'taekwondo',
      name: 'Taekwondo',
      category: 'combat',
      categoryLabel: 'Combat & Martial Arts',
      icon: 'fa-shield-halved',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Dynamic Olympic martial art renowned for fast head-height kicks, jumping spinning kicks, and agility.',
      ageGroups: 'Ages 5 to 25',
      coachRatio: '1:8 Dojo Ratio',
      trainingRegimen: 'Poomsae forms, electronic chest-guard sparring, hip mobility, jumping spin kicks.',
      highlights: ['World Taekwondo (WT) certified black belt instructors', 'Kukkiwon recognized certification pathway', 'High calorie burn and rapid reflex development', 'Olympic sparring rules and safety armor integration']
    },
    {
      id: 'boxing',
      name: 'Boxing',
      category: 'combat',
      categoryLabel: 'Combat & Martial Arts',
      icon: 'fa-mitten',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The sweet science: rhythm, footwork pivot, combinations, slip-and-counter defense, and cardiovascular grit.',
      ageGroups: 'U-14, U-18, Seniors & Amateur Squads',
      coachRatio: '1:6 Ring Ratio',
      trainingRegimen: 'Heavy bag endurance, speed bag rhythm, pad combinations, shadow boxing, technical sparring.',
      highlights: ['IBA recognized boxing ring and equipment', 'Strength & conditioning specific to explosive power', 'State & National Youth Championship routes', 'Unmatched stamina, courage, and mental toughness']
    },
    {
      id: 'wrestling',
      name: 'Wrestling',
      category: 'combat',
      categoryLabel: 'Combat & Martial Arts',
      icon: 'fa-people-robbery',
      image: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Freestyle and Greco-Roman wrestling: India’s global Olympic medal fortress with explosive takedowns and core stability.',
      ageGroups: 'U-12, U-15, U-17, U-23',
      coachRatio: '1:6 Mat Ratio',
      trainingRegimen: 'Sprawls, leg attacks, gut-wrench turns, explosive neck/shoulder bridges, anaerobic power.',
      highlights: ['UWW regulation wrestling mats and hygiene protocols', 'Dangal tradition merged with modern sports science', 'Dietary monitoring and healthy weight category management', 'Pathway to national camps & Olympic trials']
    },
    {
      id: 'kabaddi',
      name: 'Kabaddi',
      category: 'team',
      categoryLabel: 'Indigenous Team Sport',
      icon: 'fa-people-group',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'High-octane Indian sport blending breath control (kanthe), lightning raids, ankle holds, chain tackles, and bravery.',
      ageGroups: 'U-14, U-17, U-19 & Pro Kabaddi Trainees',
      coachRatio: '1:10 Court Ratio',
      trainingRegimen: 'Toe touches, dubki escapes, ankle/thigh holds, corner defense, anaerobic breath holding.',
      highlights: ['Pro Kabaddi League (PKL) scouted coaching drills', 'High-density foam matting to prevent abrasions', 'Rapid team synchronization and raid reflexes', 'Khelo India Youth Games medal focus']
    },
    {
      id: 'kho-kho',
      name: 'Kho-Kho',
      category: 'team',
      categoryLabel: 'Indigenous Team Sport',
      icon: 'fa-bolt-lightning',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Traditional tag sport upgraded to a modern professional athletic pursuit with pole dives, zig-zag dodges, and speed.',
      ageGroups: 'Ages 8 to 20',
      coachRatio: '1:10 Court Ratio',
      trainingRegimen: 'Pole turns, sudden deceleration, ring play evasions, sprint bursts, team cues.',
      highlights: ['Ultimate Kho Kho professional league training model', 'Supreme agility, cardio acceleration, and teamwork', 'Grassroots school championship prominence', 'Affordable, high-impact athletic development']
    },
    {
      id: 'weightlifting',
      name: 'Weightlifting',
      category: 'athletics',
      categoryLabel: 'Strength & Power',
      icon: 'fa-dumbbell',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Olympic Snatch and Clean & Jerk mastery with meticulous biomechanical form, spinal stability, and raw power.',
      ageGroups: 'Ages 12 to 25',
      coachRatio: '1:4 Platform Ratio',
      trainingRegimen: 'Barbell bar path tracking, triple extension, front squat depth, overhead lock stability.',
      highlights: ['IWF certified calibrated competition plates & bars', 'Wooden lifting platforms with rubber drop buffers', 'Injury-free youth strength progression protocols', 'Olympic podium pathway (building on India’s glory)']
    },
    {
      id: 'chess',
      name: 'Chess',
      category: 'mind',
      categoryLabel: 'Mind Sport',
      icon: 'fa-chess-knight',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Strategic calculation, pattern recognition, opening theory, and endgame mastery under FIDE titled masters.',
      ageGroups: 'Ages 5 to Adult',
      coachRatio: '1:6 Master Class Ratio',
      trainingRegimen: 'Tactical puzzle rushes, engine analysis (Stockfish), tournament clock management, blindfold drills.',
      highlights: ['FIDE rating tournament preparation', 'Cultivates patience, memory, decision-making, and focus', 'Weekly simulated swiss-system tournaments', 'Mentored by International Masters & FIDE trainers']
    },
    {
      id: 'pickleball',
      name: 'Pickleball',
      category: 'racquet',
      categoryLabel: 'Racquet Sport',
      icon: 'fa-table-tennis-paddle-ball',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The world’s fastest-growing racquet sport combining elements of tennis, badminton, and ping-pong on a compact court.',
      ageGroups: 'All Ages (6 to 70+)',
      coachRatio: '1:6 Court Ratio',
      trainingRegimen: 'Kitchen zone dinking, third-shot drops, paddle sweet spot control, quick hand battles at the net.',
      highlights: ['Dedicated regulation outdoor/indoor courts', 'Beginner-friendly learning curve with elite competitive depth', 'All India Pickleball Association (AIPA) tournaments', 'Ideal for inter-school, social, and corporate wellness leagues']
    },
    {
      id: 'padel',
      name: 'Padel',
      category: 'racquet',
      categoryLabel: 'Racquet Sport',
      icon: 'fa-border-all',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'High-energy glass-walled racquet sensation from Spain: ultra-dynamic rallies using wall rebounds, bandeja, and vibora.',
      ageGroups: 'Youth (8-16), Adults, Corporate Teams',
      coachRatio: '1:4 Padel Court Ratio',
      trainingRegimen: 'Wall bounce angles, bandeja overhead, lob defense, net positioning, doubles synergy.',
      highlights: ['World Padel Tour certified panoramic glass courts', 'Organizing Evexia Corporate Padel Tournaments', 'International Spanish coaching methodologies', 'Unrivaled social and dynamic fitness engagement']
    },
    {
      id: 'pentathlon',
      name: 'Modern Pentathlon',
      category: 'athletics',
      categoryLabel: 'Multi-Discipline Olympic',
      icon: 'fa-medal',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'The ultimate Olympic test of all-around capability: Laser-Run (laser shooting + cross country), Swimming, Fencing, and Obstacle.',
      ageGroups: 'U-15, U-19, Senior Athletes',
      coachRatio: '1:5 Specialized Multi-Coach Squad',
      trainingRegimen: 'Laser-run transition speed, 200m freestyle pacing, fencing epee bouts, cardiovascular conditioning.',
      highlights: ['UIPM standard laser targets and optical pistols', 'Multi-sport scheduling and load periodization', 'Creating India’s next-generation pentathletes', 'Comprehensive cross-training resilience']
    },
    {
      id: 'marathon',
      name: 'Marathon & Long Distance',
      category: 'athletics',
      categoryLabel: 'Endurance',
      icon: 'fa-person-running',
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      desc: 'Half-marathon, 10K, and 42.195K marathon training with lactate threshold pacing, nutrition plans, and mental stamina.',
      ageGroups: 'Youth Endurance Squad (14+) & Adults',
      coachRatio: '1:8 Pace Group Ratio',
      trainingRegimen: 'Long slow distance (LSD) base, tempo intervals, fueling strategies, active recovery runs.',
      highlights: ['Cardiac zone monitoring & GPS split analysis', 'Hydration and carbohydrate loading guidelines', 'Preparation for Mumbai, Delhi, and World Marathon Majors', 'Specialized plantar and Achilles tendon strength routines']
    }
  ];

  const projectsData = [
    {
      id: 'community-outreach',
      title: 'Evexia Grassroots Initiative',
      desc: 'Empowering underprivileged youth through structured sports training and nutrition support.',
      category: 'social'
    },
    {
      id: 'corporate-wellness',
      title: 'Corporate Athlete Program',
      desc: 'Optimizing executive health and performance through integrated sports and mental wellness modules.',
      category: 'corporate'
    }
  ];

  function renderProjectCards() {
  const projectGrid = document.getElementById('project-grid');
  if (!projectGrid) return;
  const filtered = projectsData.filter(project => {
    return activeCategory === 'all' || project.category === activeCategory;
  });
  projectGrid.innerHTML = filtered.map(project => `
    <div class="project-card" data-project-id="${project.id}" tabindex="0" role="button" aria-label="View details for ${project.title}">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <a href="mailto:info@evexia.com" class="cta-link">Contact Us</a>
    </div>
  `).join('');
  // Attach listeners
  document.querySelectorAll('.project-card').forEach(card => {
    const pid = card.getAttribute('data-project-id');
    if (pid) {
      card.addEventListener('click', () => openProjectModal(pid));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(pid);
        }
      });
    }
  });
}

  // ==========================================================================
  // 2. DOM Elements Selection
  // ==========================================================================
  const headerWrapper = document.getElementById('header-wrapper');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  const sportsGrid = document.getElementById('sports-grid');
  const sportsSearchInput = document.getElementById('sports-search');
  const filterTabBtns = document.querySelectorAll('.filter-tab-btn');

  const sportModal = document.getElementById('sport-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalInquireBtn = document.getElementById('modal-inquire-btn');

  const registrationForm = document.getElementById('registration-form');
  const sportDropdown = document.getElementById('form-sport');
  const formToggleBtns = document.querySelectorAll('.form-toggle-btn');
  const inquiryTypeInput = document.getElementById('form-inquiry-type');
  const formRoleLabel = document.getElementById('form-role-label');

  const newsletterForm = document.getElementById('footer-newsletter-form');
  const backToTopBtn = document.getElementById('back-to-top');
  const toastNotification = document.getElementById('toast-notification');

  let activeCategory = 'all';
  let searchQuery = '';

  // ==========================================================================
  // 3. Populate Sport Dropdown in Contact Form
  // ==========================================================================
  if (sportDropdown) {
    // Clear and build options
    sportDropdown.innerHTML = '<option value="">Select a Sport / Program (26 Disciplines)</option>';
    sportsData.forEach(sport => {
      const option = document.createElement('option');
      option.value = sport.name;
      option.textContent = `${sport.name} (${sport.categoryLabel})`;
      sportDropdown.appendChild(option);
    });
    // Add General All-Sport option
    const multiOption = document.createElement('option');
    multiOption.value = 'Multi-Sport Grassroots Program';
    multiOption.textContent = 'Multi-Sport Grassroots Program (Ages 4-10)';
    sportDropdown.appendChild(multiOption);
  }

  // ==========================================================================
  // 4. Render Sports Cards Grid
  // ==========================================================================
  function renderSportsCards() {
    if (!sportsGrid) return;

    const filtered = sportsData.filter(sport => {
      const matchesCategory = (activeCategory === 'all') || (sport.category === activeCategory);
      const matchesSearch = sport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            sport.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            sport.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      sportsGrid.innerHTML = `
        <div class="sports-empty-state">
          <i class="fas fa-search"></i>
          <h3>No sports found matching "${searchQuery}"</h3>
          <p>Try searching for Football, Padel, Tennis, Cricket, Athletics, or browse by categories above.</p>
        </div>
      `;
      return;
    }

    sportsGrid.innerHTML = filtered.map(sport => `
      <article class="sport-interactive-card" data-sport-id="${sport.id}" tabindex="0" role="button" aria-label="View details for ${sport.name}">
        <div class="sport-card-thumbnail">
          <img src="${sport.image}" alt="${sport.name} Training at Evexia XSports" loading="lazy">
          <div class="sport-thumbnail-overlay"></div>
          <span class="sport-category-pill ${sport.category}">${sport.categoryLabel}</span>
          <div class="sport-icon-bubble">
            <i class="fas ${sport.icon}"></i>
          </div>
        </div>
        <div class="sport-card-body">
          <h3 class="sport-card-title">
            <span>${sport.name}</span>
            <i class="fas fa-arrow-up-right-from-square" style="font-size: 0.9rem; color: var(--accent);"></i>
          </h3>
          <p class="sport-card-desc">${sport.desc}</p>
          <div class="sport-card-footer">
            <span class="sport-meta-tag">
              <i class="fas fa-medal"></i> ${sport.ageGroups.split(',')[0]}
            </span>
            <span class="sport-view-btn">
              Explore Program <i class="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click handlers to newly rendered cards
    document.querySelectorAll('.sport-interactive-card').forEach(card => {
      card.addEventListener('click', () => {
        const sportId = card.getAttribute('data-sport-id');
        openSportModal(sportId);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const sportId = card.getAttribute('data-sport-id');
          openSportModal(sportId);
        }
      });
    });
  }

  // Initial render
  renderSportsCards();
  renderProjectCards();

  // ==========================================================================
  // 5. Category Tabs & Search Event Listeners
  // ==========================================================================
  filterTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderSportsCards();
      renderProjectCards();
    });
  });

  if (sportsSearchInput) {
    sportsSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderSportsCards();
    });
  }

  // ==========================================================================
  // 6. Interactive Sport Detail Modal
  // ==========================================================================
  let currentSelectedSport = null;

  function openSportModal(sportId) {
    const sport = sportsData.find(s => s.id === sportId);
    if (!sport || !sportModal) return;

    currentSelectedSport = sport;

    // Fill modal data
    document.getElementById('modal-img').src = sport.image;
    document.getElementById('modal-img').alt = `${sport.name} Training Program`;
    document.getElementById('modal-category-badge').textContent = sport.categoryLabel;
    document.getElementById('modal-title').textContent = sport.name;
    document.getElementById('modal-age-groups').textContent = sport.ageGroups;
    document.getElementById('modal-coach-ratio').textContent = sport.coachRatio;
    document.getElementById('modal-overview-text').textContent = sport.desc;
    document.getElementById('modal-regimen-text').textContent = sport.trainingRegimen;

    const highlightsList = document.getElementById('modal-highlights-list');
    highlightsList.innerHTML = sport.highlights.map(h => `
      <li class="modal-curriculum-item">
        <i class="fas fa-check-circle"></i> ${h}
      </li>
    `).join('');

    // Open modal
    sportModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeSportModal() {
    if (!sportModal) return;
    sportModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSportModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeSportModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sportModal && sportModal.classList.contains('active')) {
      closeSportModal();
    }
  });

  // Modal Inquire CTA: pre-fill form and smooth scroll
  if (modalInquireBtn) {
    modalInquireBtn.addEventListener('click', () => {
      closeSportModal();
      if (currentSelectedSport && sportDropdown) {
        sportDropdown.value = currentSelectedSport.name;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameField = document.getElementById('form-name');
        if (nameField) setTimeout(() => nameField.focus(), 600);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Project Modal Logic (Project Details)
  // --------------------------------------------------------------------------
  const projectModal = document.getElementById('project-modal');
  const projectModalCloseBtn = document.getElementById('project-modal-close');
  const projectModalBackdrop = document.getElementById('project-modal-backdrop');

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;
    // Populate modal fields (reuse generic elements)
    document.getElementById('project-modal-title').textContent = project.title;
    document.getElementById('project-modal-scope').textContent = project.desc;
    document.getElementById('project-modal-category').textContent = project.category;
    // Optional: set image if available, else hide
    const imgEl = document.getElementById('project-modal-img');
    if (imgEl) {
      imgEl.src = '';
      imgEl.alt = '';
    }
    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    projectModalCloseBtn.focus();
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (projectModalCloseBtn) projectModalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModalBackdrop) projectModalBackdrop.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Attach click listeners to project cards after rendering
  function attachProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
      const pid = card.getAttribute('data-project-id');
      if (pid) {
        card.addEventListener('click', () => openProjectModal(pid));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(pid);
          }
        });
      }
    });
  }

  // Update renderProjectCards to include data-project-id and call attachProjectCardListeners
  const originalRenderProjectCards = renderProjectCards;
  renderProjectCards = function() {
    originalRenderProjectCards();
    // Add data attribute for filtering (already handled) and attach listeners
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
      const cards = projectGrid.querySelectorAll('.project-card');
      cards.forEach((card, idx) => {
        const proj = projectsData[idx];
        if (proj) {
          card.setAttribute('data-project-id', proj.id);
          card.setAttribute('tabindex', '0');
          card.setAttribute('role', 'button');
          card.setAttribute('aria-label', `View details for ${proj.title}`);
        }
      });
      attachProjectCardListeners();
    }
  };

  // Modify renderProjectCards to filter based on activeCategory
  function renderProjectCards() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;
    const filtered = projectsData.filter(project => {
      return activeCategory === 'all' || project.category === activeCategory;
    });
    projectGrid.innerHTML = filtered.map(project => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href="mailto:info@evexia.com" class="cta-link">Contact Us</a>
      </div>
    `).join('');
    // Attach listeners
    const cards = projectGrid.querySelectorAll('.project-card');
    cards.forEach(card => {
      const pid = card.getAttribute('data-project-id');
    });
  }


  // ==========================================================================
  // 7. Form Type Toggle (Athlete vs Institutional/School)
  // ==========================================================================
  formToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      formToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-type');
      if (inquiryTypeInput) inquiryTypeInput.value = type;

      if (formRoleLabel) {
        if (type === 'institutional') {
          formRoleLabel.innerHTML = 'Institution / School / Corporate Name <span class="req">*</span>';
        } else {
          formRoleLabel.innerHTML = 'Full Name of Athlete / Parent <span class="req">*</span>';
        }
      }
    });
  });

  // ==========================================================================
  // 8. Contact & Registration Form Submission
  // ==========================================================================
  if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const sport = document.getElementById('form-sport').value;
      const ageGroup = document.getElementById('form-age-group').value;
      const message = document.getElementById('form-message').value.trim();
      const inquiryType = inquiryTypeInput ? inquiryTypeInput.value : 'athlete';

      if (!fullName || !email || !phone || !sport) {
        showToast('Please fill out all required fields marked with *', true);
        return;
      }

      const submissionData = {
        id: 'EVX-' + Date.now().toString(36).toUpperCase(),
        inquiryType,
        fullName,
        email,
        phone,
        sport,
        ageGroup,
        message,
        timestamp: new Date().toISOString()
      };

      // Store in localStorage
      try {
        const existingSubmissions = JSON.parse(localStorage.getItem('evexia_inquiries')) || [];
        existingSubmissions.push(submissionData);
        localStorage.setItem('evexia_inquiries', JSON.stringify(existingSubmissions));
      } catch (err) {
        console.warn('Storage warning:', err);
      }

      showToast(`Thank you ${fullName}! Your inquiry for ${sport} has been received. Our directors and coaching team will reach out promptly.`);
      registrationForm.reset();
    });
  }

  // ==========================================================================
  // 9. Toast Notification Helper
  // ==========================================================================
  let toastTimer = null;
  function showToast(message, isError = false) {
    if (!toastNotification) return;

    clearTimeout(toastTimer);
    toastNotification.textContent = message;
    if (isError) {
      toastNotification.classList.add('toast-error');
    } else {
      toastNotification.classList.remove('toast-error');
    }

    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 5500);
  }

  // ==========================================================================
  // 10. Newsletter Subscription Form
  // ==========================================================================
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        showToast('Subscribed to Evexia XSports Monthly Athletic Briefing!');
        emailInput.value = '';
      }
    });
  }

  // ==========================================================================
  // 11. Sticky Header & Active Scrollspy
  // ==========================================================================
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header blur/shadow
    if (headerWrapper) {
      if (scrollY > 40) {
        headerWrapper.classList.add('scrolled');
      } else {
        headerWrapper.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy for nav links
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 12. Mobile Drawer Navigation
  // ==========================================================================
  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.add('open');
      mobileDrawerBackdrop.classList.add('open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    } else {
      mobileDrawer.classList.remove('open');
      mobileDrawerBackdrop.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (mobileDrawerBackdrop) {
    mobileDrawerBackdrop.addEventListener('click', () => toggleMobileMenu(false));
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // ==========================================================================
  // 13. Smooth Anchor Scrolling with Header Offset
  // ==========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
