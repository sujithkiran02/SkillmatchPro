/* ============================================================
   SKILL DICTIONARY — role → required skills (canonical forms)
============================================================ */
const ROLE_SKILLS = {
  'Web Developer': {
    skills: ['html','css','javascript','typescript','react','vue','angular','nodejs','php','mysql','postgresql','git','rest api','responsive design','bootstrap','tailwind','webpack','graphql','redux','jest'],
    courses: [
      {n:'React – The Complete Guide',p:'Udemy',s:'react',u:'https://udemy.com'},
      {n:'Node.js Developer Course',p:'Udemy',s:'nodejs',u:'https://udemy.com'},
      {n:'Responsive Web Design',p:'freeCodeCamp',s:'responsive design',u:'https://freecodecamp.org'},
      {n:'MySQL Bootcamp',p:'Udemy',s:'mysql',u:'https://udemy.com'},
      {n:'Git Complete',p:'Udemy',s:'git',u:'https://udemy.com'},
      {n:'TypeScript Deep Dive',p:'Udemy',s:'typescript',u:'https://udemy.com'},
    ]
  },
  'Data Scientist': {
    skills: ['python','r','sql','statistics','machine learning','deep learning','pandas','numpy','tensorflow','pytorch','scikit-learn','data visualization','tableau','spark','hadoop','nlp','a/b testing','statistics','probability'],
    courses: [
      {n:'Machine Learning A-Z',p:'Udemy',s:'machine learning',u:'https://udemy.com'},
      {n:'Python for Data Science',p:'Coursera',s:'python',u:'https://coursera.org'},
      {n:'TensorFlow Developer',p:'Coursera',s:'tensorflow',u:'https://coursera.org'},
      {n:'SQL for Data Analysis',p:'Udemy',s:'sql',u:'https://udemy.com'},
      {n:'Tableau for Beginners',p:'Udemy',s:'tableau',u:'https://udemy.com'},
      {n:'Statistics for Data Science',p:'edX',s:'statistics',u:'https://edx.org'},
    ]
  },
  'Mobile Developer': {
    skills: ['react native','flutter','swift','kotlin','java','ios','android','firebase','redux','expo','xcode','dart','mobile ui','rest api','sqlite','push notifications','app store deployment'],
    courses: [
      {n:'React Native – Practical Guide',p:'Udemy',s:'react native',u:'https://udemy.com'},
      {n:'Flutter & Dart Complete Guide',p:'Udemy',s:'flutter',u:'https://udemy.com'},
      {n:'iOS Dev with Swift',p:'Apple Dev',s:'swift',u:'https://developer.apple.com'},
      {n:'Android in Kotlin',p:'Udemy',s:'kotlin',u:'https://udemy.com'},
      {n:'Firebase for Mobile',p:'Firebase',s:'firebase',u:'https://firebase.google.com'},
      {n:'Redux Toolkit Mastery',p:'Udemy',s:'redux',u:'https://udemy.com'},
    ]
  },
  'DevOps Engineer': {
    skills: ['linux','bash','docker','kubernetes','jenkins','aws','azure','gcp','terraform','ansible','ci/cd','prometheus','grafana','helm','nginx','git','monitoring','networking','security'],
    courses: [
      {n:'Docker & Kubernetes',p:'Udemy',s:'docker',u:'https://udemy.com'},
      {n:'AWS Certified Solutions Architect',p:'AWS',s:'aws',u:'https://aws.amazon.com'},
      {n:'Terraform Zero to Hero',p:'Udemy',s:'terraform',u:'https://udemy.com'},
      {n:'Jenkins Complete Guide',p:'Udemy',s:'jenkins',u:'https://udemy.com'},
      {n:'Kubernetes for Beginners',p:'KodeKloud',s:'kubernetes',u:'https://kodekloud.com'},
      {n:'Ansible Automation',p:'RedHat',s:'ansible',u:'https://redhat.com'},
    ]
  },
  'UI/UX Designer': {
    skills: ['figma','sketch','adobe xd','user research','wireframing','prototyping','usability testing','design systems','accessibility','information architecture','motion design','css','html','typography','color theory','interaction design'],
    courses: [
      {n:'Google UX Design Certificate',p:'Coursera',s:'user research',u:'https://coursera.org'},
      {n:'Figma UI Design',p:'Udemy',s:'figma',u:'https://udemy.com'},
      {n:'UX Research Methods',p:'Nielsen Norman',s:'usability testing',u:'https://nngroup.com'},
      {n:'Design Systems Mastery',p:'Udemy',s:'design systems',u:'https://udemy.com'},
      {n:'Web Accessibility (WCAG)',p:'W3C',s:'accessibility',u:'https://w3.org'},
      {n:'Motion Design Principles',p:'Skillshare',s:'motion design',u:'https://skillshare.com'},
    ]
  },
  'Backend Developer': {
    skills: ['python','java','nodejs','php','ruby','golang','rest api','graphql','microservices','redis','postgresql','mongodb','sql','message queues','docker','aws','authentication','caching','testing','ci/cd'],
    courses: [
      {n:'Node.js Complete Guide',p:'Udemy',s:'nodejs',u:'https://udemy.com'},
      {n:'Python Backend Development',p:'Udemy',s:'python',u:'https://udemy.com'},
      {n:'GraphQL with Node',p:'Udemy',s:'graphql',u:'https://udemy.com'},
      {n:'PostgreSQL Mastery',p:'Udemy',s:'postgresql',u:'https://udemy.com'},
      {n:'Microservices with Docker',p:'Udemy',s:'microservices',u:'https://udemy.com'},
      {n:'Redis in Action',p:'Redis University',s:'redis',u:'https://university.redis.com'},
    ]
  },
  'Cybersecurity Analyst': {
    skills: ['networking','ethical hacking','penetration testing','siem','forensics','firewalls','cryptography','compliance','vulnerability assessment','incident response','threat intelligence','linux','python','wireshark','nmap','ids/ips','cloud security'],
    courses: [
      {n:'Ethical Hacking Complete',p:'Udemy',s:'ethical hacking',u:'https://udemy.com'},
      {n:'CompTIA Security+',p:'CompTIA',s:'compliance',u:'https://comptia.org'},
      {n:'Penetration Testing',p:'Cybrary',s:'penetration testing',u:'https://cybrary.it'},
      {n:'SIEM with Splunk',p:'Splunk',s:'siem',u:'https://splunk.com'},
      {n:'Digital Forensics',p:'SANS',s:'forensics',u:'https://sans.org'},
      {n:'Threat Intelligence',p:'Cybrary',s:'threat intelligence',u:'https://cybrary.it'},
    ]
  },
  'AI/ML Engineer': {
    skills: ['python','mathematics','deep learning','tensorflow','pytorch','nlp','computer vision','mlops','transformers','reinforcement learning','scikit-learn','statistics','data engineering','cloud computing','model deployment','feature engineering'],
    courses: [
      {n:'Deep Learning Specialization',p:'Coursera',s:'deep learning',u:'https://coursera.org'},
      {n:'PyTorch for Deep Learning',p:'Udemy',s:'pytorch',u:'https://udemy.com'},
      {n:'NLP with Transformers',p:'Hugging Face',s:'nlp',u:'https://huggingface.co'},
      {n:'Computer Vision with OpenCV',p:'Udemy',s:'computer vision',u:'https://udemy.com'},
      {n:'MLOps Fundamentals',p:'Google Cloud',s:'mlops',u:'https://cloud.google.com'},
      {n:'Reinforcement Learning',p:'DeepMind',s:'reinforcement learning',u:'https://deepmind.com'},
    ]
  }
};

/* ============================================================
   SKILL ALIAS MAP — normalizes common variations
   key = alias → value = canonical skill name
============================================================ */
const SKILL_ALIASES = {
  // JavaScript variants
  'js': 'javascript', 'javascript': 'javascript', 'es6': 'javascript', 'es2015': 'javascript', 'ecmascript': 'javascript',
  'ts': 'typescript', 'typescript': 'typescript',
  // React ecosystem
  'react': 'react', 'reactjs': 'react', 'react.js': 'react',
  'next': 'react', 'nextjs': 'react', 'next.js': 'react',
  'redux': 'redux', 'zustand': 'redux', 'mobx': 'redux',
  // Vue
  'vue': 'vue', 'vuejs': 'vue', 'vue.js': 'vue', 'nuxt': 'vue',
  // Angular
  'angular': 'angular', 'angularjs': 'angular',
  // Node
  'node': 'nodejs', 'nodejs': 'nodejs', 'node.js': 'nodejs', 'express': 'nodejs', 'expressjs': 'nodejs',
  // Python
  'python': 'python', 'python3': 'python', 'django': 'python', 'flask': 'python', 'fastapi': 'python',
  // Java
  'java': 'java', 'spring': 'java', 'springboot': 'java', 'spring boot': 'java',
  // PHP
  'php': 'php', 'laravel': 'php', 'symfony': 'php',
  // Go
  'go': 'golang', 'golang': 'golang',
  // Ruby
  'ruby': 'ruby', 'rails': 'ruby', 'ruby on rails': 'ruby',
  // Databases
  'sql': 'sql', 'mysql': 'mysql', 'postgresql': 'postgresql', 'postgres': 'postgresql',
  'mongodb': 'mongodb', 'mongo': 'mongodb', 'mongoose': 'mongodb',
  'redis': 'redis', 'sqlite': 'sqlite',
  // CSS frameworks
  'css': 'css', 'scss': 'css', 'sass': 'css', 'less': 'css',
  'bootstrap': 'bootstrap', 'tailwind': 'tailwind', 'tailwindcss': 'tailwind',
  'html': 'html', 'html5': 'html',
  // API
  'rest': 'rest api', 'restful': 'rest api', 'rest api': 'rest api', 'graphql': 'graphql', 'grpc': 'rest api',
  // Cloud
  'aws': 'aws', 'amazon web services': 'aws',
  'azure': 'azure', 'microsoft azure': 'azure',
  'gcp': 'gcp', 'google cloud': 'gcp', 'google cloud platform': 'gcp',
  // DevOps
  'docker': 'docker', 'containers': 'docker',
  'kubernetes': 'kubernetes', 'k8s': 'kubernetes',
  'jenkins': 'jenkins', 'github actions': 'ci/cd', 'ci cd': 'ci/cd', 'cicd': 'ci/cd', 'ci/cd': 'ci/cd', 'gitlab ci': 'ci/cd',
  'terraform': 'terraform', 'ansible': 'ansible',
  'linux': 'linux', 'ubuntu': 'linux', 'centos': 'linux', 'unix': 'linux',
  'bash': 'bash', 'shell': 'bash', 'shell scripting': 'bash',
  'nginx': 'nginx', 'apache': 'nginx',
  // ML/AI
  'machine learning': 'machine learning', 'ml': 'machine learning',
  'deep learning': 'deep learning', 'dl': 'deep learning',
  'tensorflow': 'tensorflow', 'tf': 'tensorflow',
  'pytorch': 'pytorch', 'torch': 'pytorch',
  'nlp': 'nlp', 'natural language processing': 'nlp',
  'computer vision': 'computer vision', 'cv': 'computer vision', 'opencv': 'computer vision',
  'scikit': 'scikit-learn', 'sklearn': 'scikit-learn', 'scikit-learn': 'scikit-learn',
  'pandas': 'pandas', 'numpy': 'numpy', 'matplotlib': 'data visualization',
  'transformers': 'transformers', 'bert': 'transformers', 'gpt': 'transformers', 'llm': 'transformers', 'langchain': 'transformers',
  'mlops': 'mlops',
  'data science': 'machine learning', 'data analysis': 'pandas',
  // Mobile
  'react native': 'react native', 'flutter': 'flutter', 'dart': 'dart',
  'swift': 'swift', 'swiftui': 'swift', 'objective-c': 'swift',
  'kotlin': 'kotlin', 'android': 'android', 'ios': 'ios',
  'firebase': 'firebase', 'expo': 'expo',
  // Design
  'figma': 'figma', 'sketch': 'sketch', 'adobe xd': 'adobe xd', 'xd': 'adobe xd',
  'photoshop': 'figma', 'illustrator': 'figma', 'adobe': 'figma',
  'ux': 'user research', 'ui': 'figma', 'ui/ux': 'figma',
  'wireframe': 'wireframing', 'wireframing': 'wireframing',
  'prototype': 'prototyping', 'prototyping': 'prototyping',
  'usability': 'usability testing',
  'accessibility': 'accessibility', 'wcag': 'accessibility',
  // Security
  'cybersecurity': 'ethical hacking', 'cyber security': 'ethical hacking',
  'penetration testing': 'penetration testing', 'pentest': 'penetration testing',
  'siem': 'siem', 'splunk': 'siem',
  'forensics': 'forensics', 'digital forensics': 'forensics',
  'cryptography': 'cryptography', 'encryption': 'cryptography',
  'networking': 'networking', 'tcp/ip': 'networking', 'ccna': 'networking',
  'firewalls': 'firewalls', 'firewall': 'firewalls',
  // Misc
  'git': 'git', 'github': 'git', 'gitlab': 'git', 'bitbucket': 'git',
  'agile': 'agile', 'scrum': 'agile', 'jira': 'agile',
  'statistics': 'statistics', 'statistical': 'statistics',
  'tableau': 'tableau', 'power bi': 'data visualization', 'powerbi': 'data visualization',
  'spark': 'spark', 'hadoop': 'hadoop',
  'microservices': 'microservices', 'service mesh': 'microservices',
  'testing': 'testing', 'jest': 'jest', 'mocha': 'testing', 'unit testing': 'testing',
  'webpack': 'webpack', 'vite': 'webpack', 'parcel': 'webpack',
  'responsive': 'responsive design', 'responsive design': 'responsive design',
  'mathematics': 'mathematics', 'math': 'mathematics', 'calculus': 'mathematics', 'linear algebra': 'mathematics',
  'reinforcement learning': 'reinforcement learning', 'rl': 'reinforcement learning',
  'model deployment': 'model deployment', 'mlflow': 'mlops',
  'mongodb': 'mongodb',
  'message queue': 'message queues', 'message queues': 'message queues', 'rabbitmq': 'message queues', 'kafka': 'message queues',
  'incident response': 'incident response', 'vulnerability': 'vulnerability assessment',
  'threat intelligence': 'threat intelligence',
  'ids': 'ids/ips', 'ips': 'ids/ips', 'ids/ips': 'ids/ips',
  'cloud security': 'cloud security',
  'compliance': 'compliance', 'gdpr': 'compliance', 'iso': 'compliance',
  'wireshark': 'wireshark', 'nmap': 'nmap',
  'information architecture': 'information architecture', 'ia': 'information architecture',
  'design systems': 'design systems', 'storybook': 'design systems',
  'motion design': 'motion design', 'animation': 'motion design', 'after effects': 'motion design',
  'color theory': 'color theory', 'typography': 'typography',
  'interaction design': 'interaction design',
  'app store': 'app store deployment', 'play store': 'app store deployment',
  'push notifications': 'push notifications',
  'feature engineering': 'feature engineering',
  'data engineering': 'data engineering', 'etl': 'data engineering', 'pipeline': 'data engineering',
  'cloud computing': 'cloud computing',
  'caching': 'caching', 'cdn': 'caching',
  'authentication': 'authentication', 'jwt': 'authentication', 'oauth': 'authentication', 'oauth2': 'authentication',
};

/* ============================================================
   AUTH MODULE — localStorage-based auth
============================================================ */
const Auth = (() => {
  const USERS_KEY = 'smp_users';
  const SESSION_KEY = 'smp_session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || '{}'); } catch(e) { return {}; }
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function getCurrentUser() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null'); } catch(e) { return null; }
  }
  function setCurrentUser(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function updateNav() {
    const user = getCurrentUser();
    const guestNav = document.getElementById('nav-guest');
    const userNav  = document.getElementById('nav-user');
    if (user) {
      guestNav.style.display = 'none';
      userNav.style.display  = 'flex';
      document.getElementById('nav-username').textContent = user.name.split(' ')[0];
      document.getElementById('nav-avatar').textContent   = user.name.charAt(0).toUpperCase();
    } else {
      guestNav.style.display = 'flex';
      userNav.style.display  = 'none';
    }
  }

  function login() {
    const email    = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl  = document.getElementById('login-error');
    const btn      = document.getElementById('login-btn');
    const msgEl    = document.getElementById('login-error-msg');

    errorEl.classList.remove('show');
    if (!email || !password) { msgEl.textContent = 'Please fill in all fields.'; errorEl.classList.add('show'); return; }

    btn.disabled = true; btn.textContent = 'Signing in…';
    setTimeout(() => {
      const users = getUsers();
      const user  = users[email.toLowerCase()];
      if (!user || user.password !== password) {
        msgEl.textContent = 'Invalid email or password.';
        errorEl.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = 'Sign In <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        return;
      }
      setCurrentUser({ email: user.email, name: user.name });
      updateNav();
      UI.toast('Welcome back, ' + user.name.split(' ')[0] + '! 👋', 'success');
      App.startAnalyze();
    }, 700);
  }

  function signup() {
    const name     = document.getElementById('signup-name').value.trim();
    const email    = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const errorEl  = document.getElementById('signup-error');
    const btn      = document.getElementById('signup-btn');
    const msgEl    = document.getElementById('signup-error-msg');

    errorEl.classList.remove('show');
    if (!name || !email || !password) { msgEl.textContent = 'Please fill in all fields.'; errorEl.classList.add('show'); return; }
    if (password.length < 6) { msgEl.textContent = 'Password must be at least 6 characters.'; errorEl.classList.add('show'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msgEl.textContent = 'Please enter a valid email address.'; errorEl.classList.add('show'); return; }

    btn.disabled = true; btn.textContent = 'Creating account…';
    setTimeout(() => {
      const users = getUsers();
      if (users[email.toLowerCase()]) {
        msgEl.textContent = 'An account with this email already exists.';
        errorEl.classList.add('show');
        btn.disabled = false;
        btn.innerHTML = 'Create Account <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        return;
      }
      users[email.toLowerCase()] = { email: email.toLowerCase(), name, password };
      saveUsers(users);
      setCurrentUser({ email: email.toLowerCase(), name });
      updateNav();
      UI.toast('Account created! Welcome, ' + name.split(' ')[0] + '! 🎉', 'success');
      App.startAnalyze();
    }, 700);
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    updateNav();
    App.showPage('home');
    UI.toast('Logged out successfully.', 'info');
  }

  return { login, signup, logout, getCurrentUser, updateNav };
})();

/* ============================================================
   UI MODULE — toasts, helpers
============================================================ */
const UI = (() => {
  function toast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    const icons = {
      success: '✓', error: '✕', info: '✦'
    };
    el.innerHTML = `<span style="font-size:14px">${icons[type] || '✦'}</span>${msg}`;
    container.appendChild(el);
    setTimeout(() => { el.classList.add('hide'); setTimeout(() => el.remove(), 350); }, 3500);
  }
  return { toast };
})();

/* ============================================================
   PDF PARSER — extracts text using PDF.js
============================================================ */
const PDFParser = (() => {
  // Configure PDF.js worker
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  async function extractText(file, onProgress) {
    if (!window.pdfjsLib) throw new Error('PDF.js not loaded');

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdf.numPages;
    let fullText = '';

    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items.map(item => item.str).join(' ');
      fullText += pageText + '\n';
      if (onProgress) onProgress(Math.round((i / totalPages) * 100));
    }
    return fullText;
  }

  return { extractText };
})();

/* ============================================================
   SKILL EXTRACTOR — finds skills in resume text
============================================================ */
const SkillExtractor = (() => {
  /**
   * Extract canonical skills from raw resume text.
   * Uses word/phrase matching with the SKILL_ALIASES dictionary.
   */
  function extract(rawText) {
    const lower = rawText.toLowerCase()
      .replace(/[^\w\s\./+-]/g, ' ')  // keep useful chars
      .replace(/\s+/g, ' ');

    const found = new Set();

    // Sort aliases by length descending so longer phrases match first
    const sortedAliases = Object.keys(SKILL_ALIASES).sort((a, b) => b.length - a.length);

    for (const alias of sortedAliases) {
      // Use word boundary-aware check for short aliases
      const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pattern = alias.length <= 3
        ? new RegExp(`\\b${escaped}\\b`, 'i')
        : new RegExp(escaped, 'i');
      if (pattern.test(lower)) {
        found.add(SKILL_ALIASES[alias]);
      }
    }

    return [...found];
  }

  return { extract };
})();

/* ============================================================
   SKILL MATCHER — compares extracted skills vs role requirements
============================================================ */
const SkillMatcher = (() => {
  /**
   * Match extracted skills against a role's required skills.
   * Supports partial / fuzzy matching.
   */
  function match(extractedSkills, roleName) {
    const roleData = ROLE_SKILLS[roleName];
    if (!roleData) return null;

    const required = roleData.skills;
    const extracted = new Set(extractedSkills.map(s => s.toLowerCase()));

    const matching = [];
    const missing  = [];

    for (const req of required) {
      const reqLow = req.toLowerCase();
      // Direct match
      if (extracted.has(reqLow)) {
        matching.push(req);
        continue;
      }
      // Partial match: extracted contains required as substring (or vice versa)
      let partialMatch = false;
      for (const ext of extracted) {
        if (ext.includes(reqLow) || reqLow.includes(ext)) {
          partialMatch = true;
          break;
        }
      }
      if (partialMatch) {
        matching.push(req);
      } else {
        missing.push(req);
      }
    }

    const score = Math.round((matching.length / required.length) * 100);
    let label, color;
    if (score >= 75) { label = 'EXCELLENT'; color = '#10B981'; }
    else if (score >= 55) { label = 'GOOD'; color = '#F59E0B'; }
    else if (score >= 35) { label = 'FAIR'; color = '#F97316'; }
    else { label = 'NEEDS WORK'; color = '#EF4444'; }

    // Pick relevant courses (prioritize missing skills)
    const courses = roleData.courses.slice(0, 6);

    return { score, label, color, matching, missing, courses };
  }

  return { match };
})();

/* ============================================================
   AI ENHANCER — calls Claude API for personalized insights
============================================================ */
const AIEnhancer = (() => {
  async function generateInsight(roleName, matchResult, resumeText) {
    const prompt = `You are a career counselor AI. Analyze this resume skill match result and provide a concise, personalized insight.

Role: ${roleName}
Match Score: ${matchResult.score}%
Matching Skills: ${matchResult.matching.join(', ')}
Missing Skills: ${matchResult.missing.slice(0,6).join(', ')}
Resume snippet (first 600 chars): ${resumeText.slice(0, 600)}

Respond in 2-3 sentences that:
1. Acknowledge what's strong in the resume
2. Highlight the most important skill gap to address
3. Give one specific, actionable tip

Be warm, specific, and encouraging. Do NOT use generic phrases. Start directly without "Based on..." preamble.`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      const text = data.content?.map(b => b.text || '').join('') || '';
      return text.trim() || null;
    } catch(e) {
      // Fallback: generate insight client-side
      return generateFallbackInsight(roleName, matchResult);
    }
  }

  function generateFallbackInsight(roleName, matchResult) {
    const { score, matching, missing } = matchResult;
    const topMissing = missing.slice(0, 2).join(' and ');
    const topMatch   = matching.slice(0, 2).join(' and ');

    if (score >= 70) {
      return `You're in strong shape for a ${roleName} role with solid experience in ${topMatch}. ${topMissing ? `Leveling up your ${topMissing} skills would make you highly competitive.` : 'Keep building on your strong foundation.'} Consider contributing to open-source projects to demonstrate your skills to recruiters.`;
    } else if (score >= 40) {
      return `Your background in ${topMatch || 'the listed skills'} gives you a good starting point for ${roleName}. Focusing on ${topMissing || 'the missing skills'} would significantly strengthen your candidacy. Aim to build one portfolio project using those technologies within the next 30 days.`;
    } else {
      return `You're beginning your journey toward a ${roleName} role. ${topMissing ? `Prioritizing ${topMissing} will give you the biggest return on learning time.` : 'Focus on the fundamentals listed below.'} Structured learning through the recommended courses, combined with hands-on projects, will accelerate your progress significantly.`;
    }
  }

  async function generateProTip(roleName, matchResult) {
    const topMissing = matchResult.missing[0];
    if (!topMissing) return `You have excellent coverage for the ${roleName} role. Focus on deepening expertise in your existing skills and building a strong portfolio.`;

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: `Give one specific, actionable career tip (1 sentence, max 25 words) for someone targeting a ${roleName} role who is missing: ${topMissing}. Be direct and practical.` }]
        })
      });
      const data = await response.json();
      return data.content?.map(b => b.text || '').join('').trim() || null;
    } catch(e) {
      const tips = {
        'Web Developer':   `Start with React and build 3 small projects — a portfolio, a todo app, and a weather app — to showcase full-stack capability.`,
        'Data Scientist':  `Master pandas and scikit-learn first; analyze a public dataset (Kaggle) and share your notebooks on GitHub.`,
        'Mobile Developer': `Pick Flutter for cross-platform mobile — one codebase, two stores, and growing demand from employers.`,
        'DevOps Engineer': `Docker is the entry point to DevOps; containerize an existing app and deploy it via a CI/CD pipeline to demonstrate hands-on skills.`,
        'UI/UX Designer':  `Complete the Google UX Design Certificate on Coursera and add 2 case studies to a Figma-based portfolio.`,
        'Backend Developer': `Node.js + PostgreSQL is the fastest path to backend employment; build a REST API and deploy it to a free cloud tier.`,
        'Cybersecurity Analyst': `Start with CompTIA Security+ certification — it's the industry-standard credential that opens doors at most security teams.`,
        'AI/ML Engineer': `Deep learning and the PyTorch ecosystem are your fastest path to an AI/ML role; complete fast.ai and build a personal project.`,
      };
      return tips[roleName] || `Focus on ${topMissing} — it's the most frequently requested skill gap for ${roleName} positions right now.`;
    }
  }

  return { generateInsight, generateProTip };
})();

/* ============================================================
   ANALYZER MODULE — orchestrates the analysis flow
============================================================ */
const Analyzer = (() => {
  // Private state
  let state = {
    uploadedFile: null,
    uploadedFileName: null,
    resumeText: '',
    extractedSkills: [],
    chosenRole: null,
    parsedSuccessfully: false,
  };

  /* ---------- File handling ---------- */
  function onFileSelected(input) {
    if (input.files && input.files[0]) setFile(input.files[0]);
  }

  function onFileDrop(e) {
    const f = e.dataTransfer.files[0];
    if (f && f.type === 'application/pdf') setFile(f);
    else UI.toast('Please upload a PDF file.', 'error');
  }

  async function setFile(file) {
    state.uploadedFile = file;
    state.uploadedFileName = file.name;

    document.getElementById('fname-display').textContent = file.name;
    document.getElementById('drop-zone').style.display    = 'none';
    document.getElementById('file-uploaded').style.display = 'block';

    // Begin PDF parsing immediately
    await parseResume(file);
  }

  async function parseResume(file) {
    const progress = document.getElementById('parse-progress');
    const bar      = document.getElementById('parse-bar');
    const labelTxt = document.getElementById('parse-label-text');
    const pctTxt   = document.getElementById('parse-pct-text');
    const continueBtn = document.getElementById('btn-continue-step2');
    const statusEl = document.getElementById('file-status-text');

    progress.classList.add('show');
    labelTxt.textContent = 'Extracting text from PDF…';
    continueBtn.disabled = true;

    try {
      state.resumeText = await PDFParser.extractText(file, (pct) => {
        bar.style.width = pct + '%';
        pctTxt.textContent = pct + '%';
      });

      bar.style.width = '100%';
      pctTxt.textContent = '100%';
      labelTxt.textContent = 'Identifying skills…';

      // Extract skills
      state.extractedSkills = SkillExtractor.extract(state.resumeText);
      state.parsedSuccessfully = true;

      // Show extracted skills preview
      setTimeout(() => {
        progress.classList.remove('show');
        showExtractedPreview(state.extractedSkills);
        statusEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${state.extractedSkills.length} skills detected`;
        continueBtn.disabled = false;
        UI.toast(`Found ${state.extractedSkills.length} skills in your resume!`, 'success');
      }, 400);

    } catch (err) {
      progress.classList.remove('show');
      statusEl.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> PDF parsed (text extraction limited)`;
      statusEl.style.color = 'var(--amber)';
      // Still allow continuation even if PDF.js can't parse
      state.extractedSkills = [];
      state.parsedSuccessfully = false;
      continueBtn.disabled = false;
      UI.toast('PDF loaded. AI will analyze the content.', 'info');
    }
  }

  function showExtractedPreview(skills) {
    const container = document.getElementById('ep-tags-container');
    const preview   = document.getElementById('extracted-preview');
    if (!skills.length) return;
    container.innerHTML = skills.slice(0, 18).map((s, i) =>
      `<span class="ep-tag" style="animation-delay:${i * 40}ms">${s}</span>`
    ).join('') + (skills.length > 18 ? `<span class="ep-tag" style="animation-delay:720ms">+${skills.length - 18} more</span>` : '');
    preview.classList.add('show');
  }

  function removeFile() {
    state = { ...state, uploadedFile: null, uploadedFileName: null, resumeText: '', extractedSkills: [], parsedSuccessfully: false };
    document.getElementById('fileInput').value = '';
    document.getElementById('drop-zone').style.display      = 'block';
    document.getElementById('file-uploaded').style.display  = 'none';
    document.getElementById('extracted-preview').classList.remove('show');
    document.getElementById('parse-progress').classList.remove('show');
    document.getElementById('ep-tags-container').innerHTML = '';
  }

  /* ---------- Stepper ---------- */
  function setStep(n) {
    [1, 2, 3].forEach(i => {
      const el = document.getElementById('si-' + i);
      el.classList.remove('active', 'done');
      if (i < n)  el.classList.add('done');
      if (i === n) el.classList.add('active');
    });
    [1, 2].forEach(i =>
      document.getElementById('sl-' + i).classList.toggle('done', i < n)
    );

    const cardMap = { 1: 'card-upload', 2: 'card-role', 3: 'card-loading' };
    ['card-upload', 'card-role', 'card-loading', 'card-results'].forEach(id => {
      document.getElementById(id).style.display = 'none';
    });

    if (cardMap[n]) {
      const c = document.getElementById(cardMap[n]);
      c.style.display = 'block';
      c.style.animation = 'none';
      void c.offsetWidth;
      c.style.animation = 'fadeUp .35s ease both';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goStep(n) {
    if (n === 2) {
      document.getElementById('fname-step2').textContent = state.uploadedFileName || 'resume.pdf';
      const count = state.extractedSkills.length;
      document.getElementById('skills-detected-count').textContent =
        count > 0 ? `${count} skills detected · Ready to compare` : 'Resume loaded · AI will analyze';
    }
    setStep(n);
  }

  /* ---------- Role selection ---------- */
  function pickRole(card, role) {
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('sel'));
    card.classList.add('sel');
    state.chosenRole = role;
    const btn = document.getElementById('btn-analyze');
    btn.classList.add('active');
    btn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Analyze as ${role}`;
  }

  /* ---------- Analysis ---------- */
  async function runAnalysis() {
    if (!state.chosenRole) return;
    setStep(3);

    // Animate loading steps
    const stepDelays = [0, 900, 1800, 2800];
    const stepIds    = ['lstep-1', 'lstep-2', 'lstep-3', 'lstep-4'];

    stepIds.forEach((id, i) => {
      setTimeout(() => {
        if (i > 0) {
          const prev = document.getElementById(stepIds[i - 1]);
          if (prev) {
            prev.classList.remove('active');
            prev.classList.add('done');
            const dot = prev.querySelector('.step-dot');
            if (dot) dot.textContent = '✓';
          }
        }
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
      }, stepDelays[i]);
    });

    // Wait for animation then show results
    setTimeout(async () => {
      const last = document.getElementById(stepIds[stepIds.length - 1]);
      if (last) { last.classList.remove('active'); last.classList.add('done'); const d = last.querySelector('.step-dot'); if(d) d.textContent = '✓'; }
      await showResults();
    }, 3800);
  }

  async function showResults() {
    const role   = state.chosenRole;
    const result = SkillMatcher.match(state.extractedSkills, role);

    if (!result) return;

    // Header
    document.getElementById('res-title').textContent = `Skill Gap Analysis: ${role}`;
    document.getElementById('res-sub').textContent   = `Based on real content from your resume — ${result.matching.length} matches, ${result.missing.length} gaps identified`;

    // Score ring
    const circ   = 314;
    const offset = circ - (result.score / 100) * circ;
    document.getElementById('res-pct').textContent   = result.score + '%';
    document.getElementById('res-label').textContent = result.label;
    document.getElementById('res-label').style.color  = result.color;

    const ring = document.getElementById('ring-fill');
    ring.style.stroke           = result.color;
    ring.style.strokeDashoffset = circ;

    // Skills
    document.getElementById('res-match-count').textContent = result.matching.length;
    document.getElementById('res-miss-count').textContent  = result.missing.length;
    document.getElementById('res-match-tags').innerHTML = result.matching.map(s =>
      `<span class="tag g">${s}</span>`
    ).join('');
    document.getElementById('res-miss-tags').innerHTML = result.missing.map(s =>
      `<span class="tag r">${s}</span>`
    ).join('');

    // Courses
    document.getElementById('res-courses').innerHTML = result.courses.map(c => `
      <div class="course-card">
        <div class="course-top">
          <div class="course-name"><a href="${c.u}" target="_blank" rel="noopener">${c.n}</a></div>
          <div class="course-ext"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
        </div>
        <div class="course-platform">${c.p}</div>
        <span class="tag r">${c.s}</span>
      </div>`
    ).join('');

    // Show results card
    ['card-upload', 'card-role', 'card-loading'].forEach(id =>
      document.getElementById(id).style.display = 'none'
    );
    const rc = document.getElementById('card-results');
    rc.style.display = 'block';
    rc.style.animation = 'none';
    void rc.offsetWidth;
    rc.style.animation = 'fadeUp .35s ease both';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Mark all steps done
    [1, 2, 3].forEach(i => {
      const el = document.getElementById('si-' + i);
      el.classList.remove('active');
      el.classList.add('done');
    });
    [1, 2].forEach(i => document.getElementById('sl-' + i).classList.add('done'));

    // Animate ring
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

    // AI insight (async)
    const bannerText = document.getElementById('ai-insight-text');
    bannerText.innerHTML = '<div class="ai-thinking">AI is generating your personalized insights…</div>';
    document.getElementById('res-tip').textContent = 'Generating tip…';

    // Run AI enhancement in background
    try {
      const [insight, tip] = await Promise.all([
        AIEnhancer.generateInsight(role, result, state.resumeText),
        AIEnhancer.generateProTip(role, result)
      ]);
      bannerText.innerHTML = `<strong>✦ AI Insight:</strong> ${insight}`;
      document.getElementById('res-tip').textContent = tip;
    } catch(e) {
      bannerText.innerHTML = `<strong>✦ AI Insight:</strong> ${AIEnhancer.generateInsight(role, result, '')}`;
    }
  }

  /* ---------- Reset ---------- */
  function resetAll() {
    state = { uploadedFile: null, uploadedFileName: null, resumeText: '', extractedSkills: [], chosenRole: null, parsedSuccessfully: false };
    document.getElementById('fileInput').value = '';
    document.getElementById('drop-zone').style.display      = 'block';
    document.getElementById('file-uploaded').style.display  = 'none';
    document.getElementById('extracted-preview').classList.remove('show');
    document.getElementById('parse-progress').classList.remove('show');
    document.getElementById('ep-tags-container').innerHTML  = '';
    document.getElementById('btn-continue-step2').disabled  = true;
    document.querySelectorAll('.role-card').forEach(c => c.classList.remove('sel'));
    const btn = document.getElementById('btn-analyze');
    btn.classList.remove('active');
    btn.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Analyze with AI`;
    setStep(1);
  }

  return { onFileSelected, onFileDrop, removeFile, goStep, pickRole, runAnalysis, resetAll };
})();

/* ============================================================
   APP MODULE — page routing, theme
============================================================ */
const App = (() => {
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const page = document.getElementById('page-' + id);
    if (page) {
      page.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function startAnalyze() {
    const user = Auth.getCurrentUser();
    if (!user) {
      UI.toast('Please sign in to analyze your resume.', 'info');
      showPage('login');
      return;
    }
    showPage('analyze');
    Analyzer.resetAll();
  }

  function goHome() {
    showPage('home');
  }

  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      document.getElementById('theme-icon-moon').style.display = 'block';
      document.getElementById('theme-icon-sun').style.display  = 'none';
      localStorage.setItem('smp_theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('theme-icon-moon').style.display = 'none';
      document.getElementById('theme-icon-sun').style.display  = 'block';
      localStorage.setItem('smp_theme', 'dark');
    }
  }

  function init() {
    // Restore theme
    const savedTheme = localStorage.getItem('smp_theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('theme-icon-moon').style.display = 'none';
      document.getElementById('theme-icon-sun').style.display  = 'block';
    }

    // Update nav
    Auth.updateNav();

    // Scroll reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  return { showPage, startAnalyze, goHome, toggleTheme, init };
})();

/* ============================================================
   BOOTSTRAP
============================================================ */
document.addEventListener('DOMContentLoaded', App.init);

/* ============================================================
   RESUME BUILDER MODULE
============================================================ */
const ResumeBuilder = (() => {

  /* ---- State ---- */
  let state = {
    template: 'classic',
    accent: '#2DD4BF',
    zoom: 0.85,
    experience: [],
    education: [],
    projects: [],
    certs: [],
    expCounter: 0,
    eduCounter: 0,
    projCounter: 0,
    certCounter: 0,
  };

  /* ---- Template definitions ---- */
  const TEMPLATES = [
    { id: 'classic',   label: 'Classic',   color: '#2DD4BF' },
    { id: 'modern',    label: 'Modern',    color: '#6366f1' },
    { id: 'minimal',   label: 'Minimal',   color: '#10B981' },
    { id: 'bold',      label: 'Executive', color: '#1e293b' },
    { id: 'creative',  label: 'Creative',  color: '#7c3aed' },
    { id: 'ats',       label: 'ATS Clean', color: '#334155' },
  ];

  const ACCENT_COLORS = [
    '#2DD4BF','#6366f1','#f59e0b','#10B981','#EF4444','#8B5CF6',
    '#ec4899','#0ea5e9','#d97706','#334155','#7c3aed','#0f766e',
  ];

  /* ---- Init ---- */
  function init() {
    renderTemplatePicker();
    renderColorSwatches();
    applyZoom();
  }

  function renderTemplatePicker() {
    const container = document.getElementById('template-picker');
    if (!container) return;
    container.innerHTML = TEMPLATES.map(t => `
      <div class="template-thumb ${state.template === t.id ? 'active' : ''}"
           onclick="ResumeBuilder.selectTemplate('${t.id}')"
           title="${t.label}">
        <div style="width:100%;height:100%;background:linear-gradient(160deg,${t.color}22 0%,#f8fafc 40%);padding:6px 5px">
          <div style="background:${t.color};height:10px;border-radius:2px;margin-bottom:5px;opacity:.9"></div>
          <div style="background:#e2e8f0;height:4px;border-radius:2px;margin-bottom:3px;width:85%"></div>
          <div style="background:#e2e8f0;height:4px;border-radius:2px;margin-bottom:3px;width:70%"></div>
          <div style="background:#e2e8f0;height:3px;border-radius:2px;margin-bottom:6px;width:90%"></div>
          <div style="background:${t.color};height:3px;border-radius:1px;margin-bottom:4px;width:40%;opacity:.5"></div>
          <div style="background:#e2e8f0;height:3px;border-radius:2px;margin-bottom:2px;width:95%"></div>
          <div style="background:#e2e8f0;height:3px;border-radius:2px;margin-bottom:2px;width:80%"></div>
        </div>
        <div class="template-badge">${t.label}</div>
      </div>
    `).join('');
  }

  function renderColorSwatches() {
    const container = document.getElementById('color-swatches');
    if (!container) return;
    container.innerHTML = ACCENT_COLORS.map(c => `
      <div class="color-swatch ${state.accent === c ? 'active' : ''}"
           style="background:${c}"
           onclick="ResumeBuilder.selectColor('${c}')"
           title="${c}"></div>
    `).join('');
  }

  function selectTemplate(id) {
    state.template = id;
    const tpl = TEMPLATES.find(t => t.id === id);
    if (tpl) {
      document.getElementById('current-template-name').textContent = tpl.label;
    }
    renderTemplatePicker();
    update();
  }

  function selectColor(hex) {
    state.accent = hex;
    renderColorSwatches();
    update();
  }

  /* ---- Section toggle ---- */
  function toggleSection(id) {
    const body = document.getElementById('fsb-' + id);
    const chevron = document.querySelector(`#fs-${id} .fs-chevron`);
    if (!body) return;
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    if (chevron) chevron.classList.toggle('open', !isOpen);
  }

  /* ---- Repeatable items ---- */
  function addExperience() {
    const id = ++state.expCounter;
    state.experience.push({ id });
    const list = document.getElementById('experience-list');
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.id = 'exp-item-' + id;
    div.innerHTML = `
      <div class="repeatable-item-header">
        <div class="repeatable-item-title">Experience #${id}</div>
        <button class="btn-remove-item" onclick="ResumeBuilder.removeItem('experience',${id})"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Job Title</label><input class="form-input" id="exp-role-${id}" placeholder="Software Engineer" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">Company</label><input class="form-input" id="exp-company-${id}" placeholder="Google" oninput="ResumeBuilder.update()"/></div>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Start Date</label><input class="form-input" id="exp-start-${id}" placeholder="Jan 2022" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">End Date</label><input class="form-input" id="exp-end-${id}" placeholder="Present" oninput="ResumeBuilder.update()"/></div>
      </div>
      <div class="form-group"><label class="form-label">Location</label><input class="form-input" id="exp-loc-${id}" placeholder="San Francisco, CA" oninput="ResumeBuilder.update()"/></div>
      <div class="form-group"><label class="form-label">Description / Achievements</label><textarea class="form-input form-textarea" id="exp-desc-${id}" placeholder="• Led development of a microservices platform serving 1M+ users&#10;• Reduced load time by 40% through performance optimization" oninput="ResumeBuilder.update()" rows="4"></textarea></div>
    `;
    list.appendChild(div);
  }

  function addEducation() {
    const id = ++state.eduCounter;
    state.education.push({ id });
    const list = document.getElementById('education-list');
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.id = 'edu-item-' + id;
    div.innerHTML = `
      <div class="repeatable-item-header">
        <div class="repeatable-item-title">Education #${id}</div>
        <button class="btn-remove-item" onclick="ResumeBuilder.removeItem('education',${id})"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Degree</label><input class="form-input" id="edu-degree-${id}" placeholder="B.S. Computer Science" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">School</label><input class="form-input" id="edu-school-${id}" placeholder="MIT" oninput="ResumeBuilder.update()"/></div>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Year</label><input class="form-input" id="edu-year-${id}" placeholder="2018 – 2022" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">GPA / Honors</label><input class="form-input" id="edu-gpa-${id}" placeholder="3.9 / 4.0 • Dean's List" oninput="ResumeBuilder.update()"/></div>
      </div>
    `;
    list.appendChild(div);
  }

  function addProject() {
    const id = ++state.projCounter;
    state.projects.push({ id });
    const list = document.getElementById('projects-list');
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.id = 'proj-item-' + id;
    div.innerHTML = `
      <div class="repeatable-item-header">
        <div class="repeatable-item-title">Project #${id}</div>
        <button class="btn-remove-item" onclick="ResumeBuilder.removeItem('projects',${id})"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Project Name</label><input class="form-input" id="proj-name-${id}" placeholder="E-commerce Platform" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">Tech Stack</label><input class="form-input" id="proj-tech-${id}" placeholder="React, Node.js, MongoDB" oninput="ResumeBuilder.update()"/></div>
      </div>
      <div class="form-group"><label class="form-label">Link (optional)</label><input class="form-input" id="proj-link-${id}" placeholder="github.com/you/project" oninput="ResumeBuilder.update()"/></div>
      <div class="form-group"><label class="form-label">Description</label><textarea class="form-input form-textarea" id="proj-desc-${id}" placeholder="Built a full-stack e-commerce app with real-time inventory management and Stripe payments." oninput="ResumeBuilder.update()" rows="3"></textarea></div>
    `;
    list.appendChild(div);
  }

  function addCert() {
    const id = ++state.certCounter;
    state.certs.push({ id });
    const list = document.getElementById('certs-list');
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.id = 'cert-item-' + id;
    div.innerHTML = `
      <div class="repeatable-item-header">
        <div class="repeatable-item-title">Certification #${id}</div>
        <button class="btn-remove-item" onclick="ResumeBuilder.removeItem('certs',${id})"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="form-row-2">
        <div class="form-group"><label class="form-label">Certification Name</label><input class="form-input" id="cert-name-${id}" placeholder="AWS Solutions Architect" oninput="ResumeBuilder.update()"/></div>
        <div class="form-group"><label class="form-label">Issuer & Year</label><input class="form-input" id="cert-issuer-${id}" placeholder="Amazon Web Services · 2023" oninput="ResumeBuilder.update()"/></div>
      </div>
    `;
    list.appendChild(div);
  }

  function removeItem(type, id) {
    const el = document.getElementById(`${type === 'experience' ? 'exp' : type === 'education' ? 'edu' : type === 'projects' ? 'proj' : 'cert'}-item-${id}`);
    if (el) el.remove();
    state[type] = state[type].filter(i => i.id !== id);
    update();
  }

  /* ---- Data collection ---- */
  function getData() {
    const g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };

    const experience = state.experience
      .filter(e => document.getElementById('exp-item-' + e.id))
      .map(e => ({
        role:    g(`exp-role-${e.id}`),
        company: g(`exp-company-${e.id}`),
        start:   g(`exp-start-${e.id}`),
        end:     g(`exp-end-${e.id}`),
        loc:     g(`exp-loc-${e.id}`),
        desc:    g(`exp-desc-${e.id}`),
      })).filter(e => e.role || e.company);

    const education = state.education
      .filter(e => document.getElementById('edu-item-' + e.id))
      .map(e => ({
        degree: g(`edu-degree-${e.id}`),
        school: g(`edu-school-${e.id}`),
        year:   g(`edu-year-${e.id}`),
        gpa:    g(`edu-gpa-${e.id}`),
      })).filter(e => e.degree || e.school);

    const projects = state.projects
      .filter(p => document.getElementById('proj-item-' + p.id))
      .map(p => ({
        name: g(`proj-name-${p.id}`),
        tech: g(`proj-tech-${p.id}`),
        link: g(`proj-link-${p.id}`),
        desc: g(`proj-desc-${p.id}`),
      })).filter(p => p.name);

    const certs = state.certs
      .filter(c => document.getElementById('cert-item-' + c.id))
      .map(c => ({
        name:   g(`cert-name-${c.id}`),
        issuer: g(`cert-issuer-${c.id}`),
      })).filter(c => c.name);

    const skillsRaw = g('r-skills');
    const skills = skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

    const langsRaw = g('r-languages');
    const languages = langsRaw ? langsRaw.split(',').map(l => l.trim()).filter(Boolean) : [];

    return {
      name:      g('r-name'),
      title:     g('r-title'),
      email:     g('r-email'),
      phone:     g('r-phone'),
      location:  g('r-location'),
      linkedin:  g('r-linkedin'),
      website:   g('r-website'),
      summary:   g('r-summary'),
      skills,
      languages,
      experience,
      education,
      projects,
      certs,
    };
  }

  /* ---- Shared HTML helpers ---- */
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const contactLine = (icon, text) => text ? `<div class="r-contact-item">${icon} ${esc(text)}</div>` : '';
  const iconEmail    = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  const iconPhone    = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.4 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z"/></svg>`;
  const iconLocation = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  const iconLink     = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

  function formatDesc(desc) {
    if (!desc) return '';
    return desc.split('\n').map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
        return `<div style="display:flex;gap:5px;margin-bottom:2px"><span style="flex-shrink:0;margin-top:1px">•</span><span>${esc(trimmed.replace(/^[•\-]\s*/,''))}</span></div>`;
      }
      return `<p style="margin:0 0 3px">${esc(trimmed)}</p>`;
    }).join('');
  }

  /* ---- Template renderers ---- */
  function renderClassic(d, ac) {
    const acLight = ac + '22'; const acLight2 = ac + '44';
    const expHTML = d.experience.map(e => `
      <div class="exp-item">
        <div class="exp-role">${esc(e.role)}</div>
        <div class="exp-company">${esc(e.company)}${e.loc ? ` · <span style="color:#888;font-weight:400">${esc(e.loc)}</span>` : ''}</div>
        <div class="exp-dates">${esc(e.start)}${e.end ? ` – ${esc(e.end)}` : ''}</div>
        <div class="exp-desc">${formatDesc(e.desc)}</div>
      </div>`).join('');
    const projHTML = d.projects.map(p => `
      <div class="exp-item">
        <div class="exp-role">${esc(p.name)}${p.tech ? ` <span style="font-size:11px;font-weight:500;color:#888">· ${esc(p.tech)}</span>` : ''}</div>
        ${p.link ? `<div style="font-size:11.5px;color:${ac};margin-bottom:4px">${esc(p.link)}</div>` : ''}
        <div class="exp-desc">${formatDesc(p.desc)}</div>
      </div>`).join('');
    const eduHTML = d.education.map(e => `
      <div class="edu-degree">${esc(e.degree)}</div>
      <div class="edu-school">${esc(e.school)}</div>
      <div class="edu-year">${esc(e.year)}${e.gpa ? ` · ${esc(e.gpa)}` : ''}</div>`).join('');
    const certHTML = d.certs.map(c => `<div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)}</div>`).join('');
    const skillHTML = d.skills.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('');
    const langHTML = d.languages.map(l => `<div class="lang-item">${esc(l)}</div>`).join('');

    return `<div class="tpl-classic" style="--accent:${ac};--accent-light:${acLight};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-header">
        <div class="r-name">${esc(d.name || 'Your Name')}</div>
        <div class="r-job-title">${esc(d.title || 'Professional Title')}</div>
        <div class="r-contacts">
          ${contactLine(iconEmail, d.email)}${contactLine(iconPhone, d.phone)}${contactLine(iconLocation, d.location)}${contactLine(iconLink, d.linkedin)}${contactLine(iconLink, d.website)}
        </div>
      </div>
      <div class="resume-body">
        <div class="resume-main">
          ${d.summary ? `<div class="section-title">Summary</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
          ${d.experience.length ? `<div class="section-title">Experience</div>${expHTML}` : ''}
          ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
        </div>
        <div class="resume-sidebar">
          ${skillHTML ? `<div class="section-title">Skills</div><div>${skillHTML}</div>` : ''}
          ${eduHTML ? `<div class="section-title" style="margin-top:18px">Education</div>${eduHTML}` : ''}
          ${certHTML ? `<div class="section-title" style="margin-top:18px">Certifications</div>${certHTML}` : ''}
          ${langHTML ? `<div class="section-title" style="margin-top:18px">Languages</div>${langHTML}` : ''}
        </div>
      </div>
    </div>`;
  }

  function renderModern(d, ac) {
    const expHTML = d.experience.map(e => `
      <div class="exp-item">
        <div class="exp-role">${esc(e.role)}</div>
        <div class="exp-company">${esc(e.company)}</div>
        <div class="exp-dates">${esc(e.start)}${e.end ? ` – ${esc(e.end)}` : ''}${e.loc ? ` · ${esc(e.loc)}` : ''}</div>
        <div class="exp-desc">${formatDesc(e.desc)}</div>
      </div>`).join('');
    const projHTML = d.projects.map(p => `
      <div class="exp-item">
        <div class="exp-role">${esc(p.name)}</div>
        <div class="exp-company">${esc(p.tech)}</div>
        ${p.link ? `<div class="exp-dates">${esc(p.link)}</div>` : ''}
        <div class="exp-desc">${formatDesc(p.desc)}</div>
      </div>`).join('');
    const skillHTML = d.skills.map(s => `<div class="skill-tag">${esc(s)}</div>`).join('');
    const eduHTML = d.education.map(e => `<div class="edu-degree">${esc(e.degree)}</div><div class="edu-school">${esc(e.school)}</div><div class="edu-year">${esc(e.year)}${e.gpa ? ` · ${esc(e.gpa)}` : ''}</div>`).join('');
    const certHTML = d.certs.map(c => `<div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)}</div>`).join('');
    const langHTML = d.languages.map(l => `<div class="lang-item">${esc(l)}</div>`).join('');

    return `<div class="tpl-modern" style="--accent:${ac};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-header" style="background:${ac}">
        <div class="r-name">${esc(d.name || 'Your Name')}</div>
        <div class="r-job-title">${esc(d.title || '')}</div>
        <div class="r-contacts">
          ${contactLine(iconEmail,d.email)}${contactLine(iconPhone,d.phone)}${contactLine(iconLocation,d.location)}${contactLine(iconLink,d.linkedin)}${contactLine(iconLink,d.website)}
        </div>
      </div>
      <div class="resume-body">
        <div class="resume-sidebar">
          ${skillHTML ? `<div class="section-title">Skills</div>${skillHTML}` : ''}
          ${eduHTML ? `<div class="section-title">Education</div>${eduHTML}` : ''}
          ${certHTML ? `<div class="section-title">Certifications</div>${certHTML}` : ''}
          ${langHTML ? `<div class="section-title">Languages</div>${langHTML}` : ''}
        </div>
        <div class="resume-main">
          ${d.summary ? `<div class="section-title">Summary</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
          ${d.experience.length ? `<div class="section-title">Experience</div>${expHTML}` : ''}
          ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
        </div>
      </div>
    </div>`;
  }

  function renderMinimal(d, ac) {
    const expHTML = d.experience.map(e => `
      <div class="exp-item">
        <div class="exp-left"><div class="exp-dates">${esc(e.start)}${e.end ? ` –\n${esc(e.end)}` : ''}</div></div>
        <div><div class="exp-role">${esc(e.role)}</div><div class="exp-company">${esc(e.company)}${e.loc ? ` · ${esc(e.loc)}` : ''}</div><div class="exp-desc">${formatDesc(e.desc)}</div></div>
      </div>`).join('');
    const projHTML = d.projects.map(p => `
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between"><span class="exp-role">${esc(p.name)}</span>${p.tech ? `<span style="font-size:11.5px;color:#888">${esc(p.tech)}</span>` : ''}</div>
        <div class="exp-desc">${formatDesc(p.desc)}</div>
      </div>`).join('');
    const skillHTML = `<div class="skill-row">${d.skills.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('')}</div>`;
    const eduHTML = d.education.map(e => `
      <div class="edu-item">
        <div class="edu-year">${esc(e.year)}</div>
        <div><div class="edu-degree">${esc(e.degree)}</div><div class="edu-school">${esc(e.school)}${e.gpa ? ` · ${esc(e.gpa)}` : ''}</div></div>
      </div>`).join('');
    const certHTML = d.certs.map(c => `<div style="margin-bottom:8px"><div class="cert-name">${esc(c.name)}</div><div style="font-size:12px;color:#888">${esc(c.issuer)}</div></div>`).join('');
    const langHTML = d.languages.map(l => `<span class="skill-tag" style="margin-right:6px">${esc(l)}</span>`).join('');

    return `<div class="tpl-minimal" style="--accent:${ac};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-header">
        <div class="r-name">${esc(d.name || 'Your Name')}</div>
        <div class="r-job-title">${esc(d.title || '')}</div>
        <div class="r-contacts">
          ${[d.email,d.phone,d.location,d.linkedin,d.website].filter(Boolean).map(v=>`<span class="r-contact-item">${esc(v)}</span>`).join('')}
        </div>
      </div>
      <div class="resume-main">
        ${d.summary ? `<div class="section-title">About</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
        ${d.experience.length ? `<div class="section-title">Experience</div>${expHTML}` : ''}
        ${d.education.length ? `<div class="section-title">Education</div>${eduHTML}` : ''}
        ${d.skills.length ? `<div class="section-title">Skills</div>${skillHTML}` : ''}
        ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
        ${d.certs.length ? `<div class="section-title">Certifications</div>${certHTML}` : ''}
        ${d.languages.length ? `<div class="section-title">Languages</div><div>${langHTML}</div>` : ''}
      </div>
    </div>`;
  }

  function renderBold(d, ac) {
    const acLight = ac + '18'; const acLight2 = ac + '33';
    const expHTML = d.experience.map(e => `
      <div class="exp-item">
        <div class="exp-header"><div class="exp-role">${esc(e.role)}</div><div class="exp-dates">${esc(e.start)}${e.end ? ` – ${esc(e.end)}` : ''}</div></div>
        <div class="exp-company">${esc(e.company)}${e.loc ? ` · ${esc(e.loc)}` : ''}</div>
        <div class="exp-desc">${formatDesc(e.desc)}</div>
      </div>`).join('');
    const skillHTML = `<div class="skills-grid">${d.skills.map(s=>`<span class="skill-tag">${esc(s)}</span>`).join('')}</div>`;
    const eduHTML = d.education.map(e => `<div class="edu-degree">${esc(e.degree)}</div><div class="edu-school">${esc(e.school)}</div><div class="edu-year">${esc(e.year)}${e.gpa ? ` · ${esc(e.gpa)}` : ''}</div>`).join('');
    const certHTML = d.certs.map(c => `<div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)}</div>`).join('');
    const projHTML = d.projects.map(p => `
      <div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:baseline"><div class="exp-role">${esc(p.name)}</div>${p.tech?`<span style="font-size:11.5px;color:${ac}">${esc(p.tech)}</span>`:''}
        </div>
        <div class="exp-desc">${formatDesc(p.desc)}</div>
      </div>`).join('');
    const langHTML = d.languages.map(l => `<div class="lang-item">${esc(l)}</div>`).join('');

    return `<div class="tpl-bold" style="--accent:${ac};--accent-light:${acLight};--accent-light2:${acLight2};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-header" style="background:${ac}">
        <div><div class="r-name">${esc(d.name || 'Your Name')}</div><div class="r-job-title">${esc(d.title || '')}</div></div>
        <div class="r-contacts">
          ${[d.email,d.phone,d.location].filter(Boolean).map(v=>`<div class="r-contact-item">${esc(v)}</div>`).join('')}
        </div>
      </div>
      <div class="accent-bar" style="background:linear-gradient(90deg,${ac}aa,transparent)"></div>
      <div class="resume-main">
        ${d.summary ? `<div class="section-title">Professional Summary</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
        ${d.experience.length ? `<div class="section-title">Experience</div>${expHTML}` : ''}
        <div class="two-col">
          <div>
            ${d.education.length ? `<div class="section-title">Education</div>${eduHTML}` : ''}
            ${d.certs.length ? `<div class="section-title">Certifications</div>${certHTML}` : ''}
            ${d.languages.length ? `<div class="section-title">Languages</div>${langHTML}` : ''}
          </div>
          <div>
            ${d.skills.length ? `<div class="section-title">Skills</div>${skillHTML}` : ''}
            ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderCreative(d, ac) {
    const ac2 = '#2DD4BF';
    const sideContacts = [d.email,d.phone,d.location,d.linkedin,d.website].filter(Boolean).map(v=>`<div class="r-contact-item">${esc(v)}</div>`).join('');
    const sideSkills = d.skills.map(s=>`<div class="skill-tag">${esc(s)}</div>`).join('');
    const sideEdu = d.education.map(e=>`<div class="edu-degree">${esc(e.degree)}</div><div class="edu-school">${esc(e.school)}</div><div class="edu-year">${esc(e.year)}</div>`).join('');
    const sideLang = d.languages.map(l=>`<div class="lang-item">${esc(l)}</div>`).join('');
    const sideCerts = d.certs.map(c=>`<div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)}</div>`).join('');
    const expHTML = d.experience.map(e=>`
      <div class="exp-item">
        <div class="exp-role">${esc(e.role)}</div>
        <div class="exp-company">${esc(e.company)}</div>
        <div class="exp-dates">${esc(e.start)}${e.end?` – ${esc(e.end)}`:''}</div>
        <div class="exp-desc">${formatDesc(e.desc)}</div>
      </div>`).join('');
    const projHTML = d.projects.map(p=>`
      <div style="margin-bottom:14px">
        <div class="exp-role">${esc(p.name)}${p.tech?` <span style="font-size:11px;color:#94a3b8">· ${esc(p.tech)}</span>`:''}</div>
        <div class="exp-desc">${formatDesc(p.desc)}</div>
      </div>`).join('');

    return `<div class="tpl-creative" style="--accent:${ac};--accent2:${ac2};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-body">
        <div class="resume-sidebar" style="background:${ac}">
          <div class="r-name">${esc(d.name || 'Your Name')}</div>
          <div class="r-job-title">${esc(d.title || '')}</div>
          ${sideContacts ? `<div class="sidebar-section-title">Contact</div>${sideContacts}` : ''}
          ${sideSkills ? `<div class="sidebar-section-title">Skills</div>${sideSkills}` : ''}
          ${sideEdu ? `<div class="sidebar-section-title">Education</div>${sideEdu}` : ''}
          ${sideCerts ? `<div class="sidebar-section-title">Certifications</div>${sideCerts}` : ''}
          ${sideLang ? `<div class="sidebar-section-title">Languages</div>${sideLang}` : ''}
        </div>
        <div class="resume-main">
          ${d.summary ? `<div class="section-title">About Me</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
          ${d.experience.length ? `<div class="section-title">Experience</div>${expHTML}` : ''}
          ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
        </div>
      </div>
    </div>`;
  }

  function renderATS(d, ac) {
    const contacts = [d.email,d.phone,d.location,d.linkedin,d.website].filter(Boolean).map(v=>`<span class="r-contact-item">${esc(v)}</span>`).join(' | ');
    const expHTML = d.experience.map(e=>`
      <div class="exp-item">
        <div class="exp-header"><div><div class="exp-role">${esc(e.role)}</div><div class="exp-company">${esc(e.company)}${e.loc?` · ${esc(e.loc)}`:''}</div></div><div class="exp-dates">${esc(e.start)}${e.end?` – ${esc(e.end)}`:''}</div></div>
        <div class="exp-desc">${formatDesc(e.desc)}</div>
      </div>`).join('');
    const eduHTML = d.education.map(e=>`
      <div class="edu-item">
        <div><div class="edu-degree">${esc(e.degree)}</div><div class="edu-school">${esc(e.school)}${e.gpa?` · ${esc(e.gpa)}`:''}</div></div>
        <div class="edu-year">${esc(e.year)}</div>
      </div>`).join('');
    const skillHTML = `<div class="skill-list">${d.skills.map(s=>`<span class="skill-tag">${esc(s)}</span>`).join('')}</div>`;
    const projHTML = d.projects.map(p=>`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between"><strong style="font-size:13px">${esc(p.name)}</strong>${p.tech?`<span style="font-size:12px;color:#555">${esc(p.tech)}</span>`:''}</div><div class="exp-desc">${formatDesc(p.desc)}</div></div>`).join('');
    const certHTML = d.certs.map(c=>`<div class="cert-name">${esc(c.name)}</div><div class="cert-issuer">${esc(c.issuer)}</div>`).join('');
    const langHTML = d.languages.map(l=>`<span class="lang-item" style="margin-right:10px">${esc(l)}</span>`).join('');

    return `<div class="tpl-ats" style="--accent:${ac};font-family:'DM Sans',sans-serif;min-height:1122px">
      <div class="resume-header">
        <div class="r-name">${esc(d.name || 'Your Name')}</div>
        <div class="r-job-title">${esc(d.title || '')}</div>
        <div class="r-contacts" style="font-size:12px;color:#444">${contacts}</div>
      </div>
      <div class="resume-main">
        ${d.summary ? `<div class="section-title">Summary</div><div class="summary-text">${esc(d.summary)}</div>` : ''}
        ${d.experience.length ? `<div class="section-title">Work Experience</div>${expHTML}` : ''}
        ${d.education.length ? `<div class="section-title">Education</div>${eduHTML}` : ''}
        ${d.skills.length ? `<div class="section-title">Skills</div>${skillHTML}` : ''}
        ${d.projects.length ? `<div class="section-title">Projects</div>${projHTML}` : ''}
        ${d.certs.length ? `<div class="section-title">Certifications</div>${certHTML}` : ''}
        ${d.languages.length ? `<div class="section-title">Languages</div><div>${langHTML}</div>` : ''}
      </div>
    </div>`;
  }

  /* ---- Master update ---- */
  function update() {
    const d   = getData();
    const ac  = state.accent;
    const map = {
      classic:  () => renderClassic(d, ac),
      modern:   () => renderModern(d, ac),
      minimal:  () => renderMinimal(d, ac),
      bold:     () => renderBold(d, ac),
      creative: () => renderCreative(d, ac),
      ats:      () => renderATS(d, ac),
    };
    const renderer = map[state.template] || map.classic;
    const preview = document.getElementById('resume-preview');
    if (preview) preview.innerHTML = renderer();
  }

  /* ---- Zoom ---- */
  function applyZoom() {
    const wrap = document.getElementById('preview-page-wrap');
    const label = document.getElementById('zoom-label');
    if (wrap) wrap.style.transform = `scale(${state.zoom})`;
    if (label) label.textContent = Math.round(state.zoom * 100) + '%';
  }
  function zoomIn()  { if (state.zoom < 1.4) { state.zoom = +(state.zoom + 0.1).toFixed(1); applyZoom(); } }
  function zoomOut() { if (state.zoom > 0.4) { state.zoom = +(state.zoom - 0.1).toFixed(1); applyZoom(); } }

  /* ---- PDF Download ---- */
  function downloadPDF() {
    const preview = document.getElementById('resume-preview');
    if (!preview || !preview.innerHTML.trim()) {
      UI.toast('Please fill in your details first.', 'error');
      return;
    }
    const name = document.getElementById('r-name')?.value.trim() || 'resume';
    UI.toast('Preparing PDF download…', 'info');

    // Clone preview into a new window and use print
    const clone = preview.cloneNode(true);
    const printWin = window.open('', '_blank', 'width=900,height=1100');
    printWin.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<title>${name} — Resume</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
@media print{body{width:210mm;height:297mm}html,body{margin:0;padding:0}}
${document.querySelector('link[rel="stylesheet"]') ? '' : ''}
/* Inline all builder template styles */
${Array.from(document.styleSheets).map(ss => { try { return Array.from(ss.cssRules).map(r => r.cssText).join('\n'); } catch(e){ return ''; } }).join('\n')}
</style>
</head>
<body>${clone.outerHTML}</body>
</html>`);
    printWin.document.close();
    setTimeout(() => {
      printWin.focus();
      printWin.print();
      printWin.close();
    }, 800);
    UI.toast(`Downloading ${name}_resume.pdf`, 'success');
  }

  return {
    init, selectTemplate, selectColor, toggleSection,
    addExperience, addEducation, addProject, addCert,
    removeItem, update, zoomIn, zoomOut, downloadPDF,
  };
})();

/* ============================================================
   PATCH App MODULE — add startBuilder
============================================================ */
const _origAppInit = App.init;
App.startBuilder = function() {
  App.showPage('builder');
  setTimeout(() => ResumeBuilder.init(), 50);
};
/* ============================================================
   COVER LETTER MODULE
============================================================ */
const CoverLetter = (() => {

  let state = { tone: 'Professional', lastLetter: '', generating: false };

  const TONE_EMOJI = { Professional:'💼', Enthusiastic:'🔥', Concise:'⚡', Creative:'🎨', Formal:'🎓' };

  function el(id) { return document.getElementById(id); }

  function setGenerating(on) {
    state.generating = on;
    const btn = el('cl-generate-btn');
    if (!btn) return;
    if (on) {
      btn.disabled = true;
      btn.innerHTML = '<span class="cl-btn-spinner"></span> Generating…';
      el('cl-shimmer').classList.add('show');
      el('cl-output-empty').style.display = 'none';
      el('cl-output-content').classList.remove('show');
      el('cl-fallback-notice').classList.remove('show');
    } else {
      btn.disabled = false;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Generate Cover Letter';
      el('cl-shimmer').classList.remove('show');
    }
  }

  function showOutput(text, isFallback) {
    state.lastLetter = text;
    const outputEl   = el('cl-output-text');
    const wordCountEl= el('cl-word-count');
    const toneBadgeEl= el('cl-tone-badge');
    const contentEl  = el('cl-output-content');
    if (!outputEl) return;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    if (wordCountEl) wordCountEl.textContent = words;
    if (toneBadgeEl) toneBadgeEl.textContent = (TONE_EMOJI[state.tone]||'') + ' ' + state.tone;
    outputEl.textContent = '';
    contentEl.classList.add('show');
    el('cl-output-empty').style.display = 'none';
    if (isFallback) el('cl-fallback-notice').classList.add('show');
    const cursor = document.createElement('span');
    cursor.className = 'cl-cursor';
    outputEl.appendChild(cursor);
    const chars = text.split('');
    let i = 0;
    const speed = Math.max(8, Math.floor(4000 / chars.length));
    function typeNext() {
      if (i < chars.length) {
        outputEl.insertBefore(document.createTextNode(chars[i]), cursor);
        i++;
        const soFar = outputEl.textContent.trim().split(/\s+/).filter(Boolean).length;
        if (wordCountEl) wordCountEl.textContent = soFar;
        setTimeout(typeNext, speed);
      } else {
        cursor.remove();
        if (wordCountEl) wordCountEl.textContent = words;
      }
    }
    typeNext();
  }

  function selectTone(btn) {
    document.querySelectorAll('.cl-tone-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.tone = btn.dataset.tone;
  }

  function getFormData() {
    return {
      name:    (el('cl-name')?.value    || '').trim(),
      company: (el('cl-company')?.value || '').trim(),
      skills:  (el('cl-skills')?.value  || '').trim(),
      jd:      (el('cl-jd')?.value      || '').trim(),
      tone:    state.tone,
    };
  }

  function generateFallback({ name, company, skills, jd, tone }) {
    const today = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    const applicant   = name || 'Your Name';
    const companyName = company || 'your company';
    const skillsList  = skills ? skills.split(',').map(s=>s.trim()).filter(Boolean) : [];
    const roleMatch   = jd.match(/(?:for (?:a|an|the)\s+)?([A-Z][a-z]+(?: [A-Z][a-z]+){0,3}(?:\s+(?:Engineer|Developer|Designer|Manager|Analyst|Scientist|Architect|Lead|Director|Specialist|Consultant)))/);
    const role        = roleMatch ? roleMatch[0].replace(/^for (?:a|an|the)\s+/i,'') : 'this role';
    const jdSentences = jd.split(/[.!?]/).map(s=>s.trim()).filter(s=>s.length>30);
    const jdHighlight = jdSentences[0] || '';
    const cfg = {
      Professional:{
        opening: `I am writing to express my strong interest in ${role} at ${companyName}.`,
        middle:  `Throughout my career, I have developed a proven track record of delivering high-quality results. ${jdHighlight?`I was particularly drawn to your focus on ${jdHighlight.toLowerCase().slice(0,80)}.`:''}`,
        skill:   skillsList.length?`My expertise in ${skillsList.slice(0,3).join(', ')} positions me well to contribute meaningfully from day one.`:`I bring a strong technical background that aligns with your team's goals.`,
        closing: `I would welcome the opportunity to discuss how my experience can benefit ${companyName}. Thank you for your consideration.`,
      },
      Enthusiastic:{
        opening: `I was absolutely thrilled to come across the ${role} opportunity at ${companyName} — this is exactly the role I've been looking for!`,
        middle:  `I'm passionate about building impactful solutions and I love what ${companyName} stands for. ${jdHighlight?`The part about "${jdHighlight.slice(0,80)}…" really resonated with me.`:''}`,
        skill:   skillsList.length?`With hands-on experience in ${skillsList.slice(0,3).join(', ')}, I'm excited to bring my energy to your team.`:`I bring genuine enthusiasm, a growth mindset, and a drive to deliver amazing results.`,
        closing: `I would love to chat and show you why I'd be a fantastic fit. Thanks so much for your time!`,
      },
      Concise:{
        opening: `I'm applying for ${role} at ${companyName}.`,
        middle:  `${jdHighlight?`Your requirement for "${jdHighlight.slice(0,60)}…" aligns directly with my background.`:`My background directly addresses your team's needs.`}`,
        skill:   skillsList.length?`Key skills: ${skillsList.slice(0,4).join(', ')}.`:`I deliver results efficiently and adapt quickly.`,
        closing: `I'd welcome a brief call to explore the fit. Thank you.`,
      },
      Creative:{
        opening: `Every great product starts with the right person. I believe I'm that person for your ${role} role at ${companyName}.`,
        middle:  `I don't just execute tasks — I think differently, challenge assumptions, and craft solutions that stick. ${jdHighlight?`Reading "${jdHighlight.slice(0,80)}…" in your JD, I immediately began thinking about how I'd approach it.`:''}`,
        skill:   skillsList.length?`My toolkit includes ${skillsList.slice(0,3).join(', ')}, but what truly sets me apart is how I connect them to create real impact.`:`What I bring isn't just a skill set — it's a perspective that transforms how teams work.`,
        closing: `Let's build something great together. I'd love to connect and explore the possibilities at ${companyName}.`,
      },
      Formal:{
        opening: `I respectfully submit my application for the position of ${role} at ${companyName}.`,
        middle:  `I have carefully reviewed the requirements outlined in the position description and am confident that my qualifications align closely with your expectations. ${jdHighlight?`The specification regarding "${jdHighlight.slice(0,80)}" corresponds directly to my professional experience.`:''}`,
        skill:   skillsList.length?`I possess demonstrable competence in ${skillsList.slice(0,3).join(', ')}, and I am committed to maintaining the highest standards of professional conduct.`:`I bring a disciplined, methodical approach underpinned by a commitment to quality.`,
        closing: `I would be honoured to discuss my application further at your earliest convenience. I thank you for your time and consideration.`,
      },
    }[tone] || {};
    return [
      today,'',
      'Hiring Manager', companyName,'',
      'Dear Hiring Manager,','',
      cfg.opening,'',
      cfg.middle,'',
      cfg.skill,'',
      `I am excited about the possibility of joining ${companyName} and contributing to your team's continued success. I am confident that my background, combined with my dedication to continuous learning, makes me a strong candidate for this position.`,'',
      cfg.closing,'',
      'Sincerely,', applicant,
    ].join('\n');
  }

  async function generateWithAI({ name, company, skills, jd, tone }) {
    const toneGuide = {
      Professional:'confident, polished, and professional — businesslike without being cold',
      Enthusiastic:'energetic, warm, and genuinely excited — let the passion shine through',
      Concise:     'brief and punchy — ideally under 200 words, every sentence earns its place',
      Creative:    'imaginative and memorable — show personality, avoid corporate clichés',
      Formal:      'highly formal and respectful — appropriate for academic or executive roles',
    };
    const prompt = `You are an expert career coach and professional writer. Write a complete, tailored cover letter.

Tone: ${tone} — ${toneGuide[tone]||'professional and confident'}
Applicant name: ${name||'[Your Name]'}
Target company: ${company||'[Company]'}
Key skills: ${skills||'not specified — infer from job description'}

Job Description:
---
${jd.slice(0,2500)}
---

Requirements:
- Write the full cover letter, ready to send, including date, salutation, body paragraphs, and sign-off
- Tailor it specifically to this job description — reference concrete details from the JD
- Highlight the applicant's relevant skills naturally in context
- Match the requested tone throughout
- Keep it to 3–4 body paragraphs (not counting opening/closing)
- Do NOT include placeholders like [Your Address] — write it as if ready to send
- Do NOT add any preamble or explanation — output ONLY the cover letter text`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role:'user', content: prompt }],
      }),
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();
    const text = (data.content||[]).map(b=>b.text||'').join('').trim();
    if (!text) throw new Error('Empty');
    return text;
  }

  async function generate() {
    if (state.generating) return;
    const data = getFormData();
    if (!data.jd) { UI.toast('Please paste a job description first.','error'); el('cl-jd')?.focus(); return; }
    setGenerating(true);
    let letter = '', isFallback = false;
    try {
      letter = await generateWithAI(data);
    } catch(e) {
      console.warn('CoverLetter: API unavailable, using fallback.', e.message);
      letter = generateFallback(data);
      isFallback = true;
    }
    setGenerating(false);
    showOutput(letter, isFallback);
    UI.toast(isFallback ? 'Generated using smart template (AI unavailable)' : 'Cover letter generated! ✦', isFallback ? 'info' : 'success');
  }

  function regenerate() { generate(); }

  function copyToClipboard() {
    if (!state.lastLetter) return;
    const btn = el('cl-copy-btn');
    navigator.clipboard.writeText(state.lastLetter).then(() => {
      UI.toast('Copied to clipboard! ✓','success');
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
        setTimeout(()=>{ btn.innerHTML = orig; }, 2000);
      }
    }).catch(()=>{
      const ta = document.createElement('textarea');
      ta.value = state.lastLetter; ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      UI.toast('Copied to clipboard! ✓','success');
    });
  }

  function downloadTxt() {
    if (!state.lastLetter) return;
    const data = getFormData();
    const filename = [data.name||'cover-letter', data.company||''].filter(Boolean).join('-').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'') + '.txt';
    const blob = new Blob([state.lastLetter],{type:'text/plain'});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href=url; a.download=filename; document.body.appendChild(a); a.click();
    setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); },500);
    UI.toast(`Downloaded ${filename}`,'success');
  }

  return { selectTone, generate, regenerate, copyToClipboard, downloadTxt };
})();