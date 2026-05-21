export type ProjectCategory = 'Hardware' | 'Firmware' | 'IoT' | 'FPGA' | 'IA' | 'Logiciel' | 'Industriel';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  short: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'ai-traffic',
    title: 'Système de détection et optimisation du trafic',
    category: ['IA', 'IoT'],
    short: "Vision artificielle YOLO embarquée pour optimiser le flux d'intersections en temps réel.",
    description:
      "Développement d'un système IA / vision artificielle basé sur YOLO, déployé sur caméras embarquées et cartes VPU pour accélérer le traitement. Le dispositif détecte les véhicules en temps réel et optimise le flux aux intersections de façon rapide, autonome et supervisée en temps réel.",
    highlights: [
      'Inférence temps réel sur VPU (Movidius)',
      'Détection multi-classes (véhicules, piétons, vélos)',
      'Pipeline OpenCV optimisé pour Linux embarqué',
      'Supervision distante via dashboard',
    ],
    tags: ['Python', 'Deep Learning', 'OpenCV', 'Embedded Linux'],
    image: '/images/details_du_projet.png',
    year: '2023',
  },

  
  {
    id: 'kivala',
    title: 'Visiophone connecté nouvelle génération',
    category: ['IoT', 'Hardware'],
    short: 'Conception et validation hardware/software d’un visiophone IoT sous Ubuntu embarqué.',
    description:
      "Participation au développement d'un visiophone intelligent basé sur l'IoT. Contribution à l'étude des composants électroniques, au choix du système embarqué (Ubuntu), à l'intégration des pilotes, et à la validation hardware/software. Rédaction des rapports techniques et présentation des résultats.",
    highlights: [
      'Sélection des composants électroniques',
      'Intégration drivers Linux (caméra, audio)',
      'Validation HW/SW complète',
      'Documentation technique livrable',
    ],
    tags: ['Ubuntu Embedded', 'Drivers', 'Validation HW/SW'],
    image: 'https://www.lakdim.com/assets/img/kivala.png',
    year: '2025',
  },

  {
    id: 'ched-med',
    title: 'devlopment dune plateforme de mise en relation entre voyageurs et expediteurs de colis (CHED-MED.me)',
    category: ['Logiciel'],
    short: 'CHED-MED est une solution pour faciliter le transport des colis entre particulier dune fason simple, rapide et securise.',
    description:
      "Une plateforme de mise en relation entre Des voyageurs qui ont des kilos disponibles dans leur bagage Des expéditeurs qui veulent envoyer ou recevoir un coli Ce que jai construit en solo  Système d'authentification (email + Google) Publication de voyages et de demandes Matching intelligent entre voyageurs et expéditeurs Messagerie interne sécurisée Système de reviews et badges de réputation Stack : Next.js · TypeScript · Prisma · Supabase · NextAuth Déployé sur Vercel et live dès maintenant Ce projet ma appris plus que nimporte quel cours Construire un produit de A à Z Penser sécurité, UX et légal en même temps Comprendre ce que veut vraiment un utilisateur Tenir quand c'est difficile",
    highlights: [
      'Authentification email et Google',
      'Publication de trajets et de colis',
      'Matching entre voyageurs et expéditeurs',
      'Messagerie sécurisée et système de réputation',
    ],
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'NextAuth', 'Vercel'],
    image: '/images/ched-med-cover.jpeg',
    year: '2026',
  },
  {
    id: 'pcb-ir',
    title: 'PCB double couche — Détecteur IR 10 kHz',
    category: ['Hardware'],
    short: 'Chaîne analogique complète pour détection IR modulée, du schéma au routage.',
    description:
      "Conception complète d'un détecteur infrarouge modulé à 10 kHz, intégrant un chemin analogique complet : amplification du signal issu d'une photodiode, filtrage passe-bande, détection de crête et comparaison avec une référence ajustable. Réalisation de l'ensemble du design électronique, du schéma au routage PCB, en passant par l'optimisation du plan de masse et l'ajout de points de test.",
    highlights: [
      'Filtrage passe-bande centré 10 kHz',
      'Optimisation plan de masse 2 couches',
      'Simulations LTspice avant routage',
      'Points de test pour debug terrain',
    ],
    tags: ['KiCad', 'LTspice', 'PCB Design'],
    image: 'https://www.lakdim.com/assets/img/PCB_3D.png',
    year: '2025',
  },
  {
    id: 'arc-tool',
    title: 'Outil de génération et traitement de données',
    category: ['Logiciel', 'IA'],
    short: 'GUI Python pour traitement de signaux CSV et création de datasets IA.',
    description:
      "Interface graphique en Python permettant de manipuler facilement des signaux via des fichiers CSV. L'outil intègre des techniques de traitement du signal appliquées aux données chargées, afin de créer et analyser des jeux de données destinés aux modèles d'IA pour la détection de défauts d'arc.",
    highlights: [
      'GUI intuitive (Tkinter / PyQt)',
      'FFT, filtrage, fenêtrage signal',
      'Export datasets ML-ready',
      'Visualisation matplotlib intégrée',
    ],
    tags: ['Python', 'Signal Processing', 'FFT'],
    image: 'https://www.lakdim.com/assets/img/Arc_project.jpg',
    year: '2023',
  },
  {
    id: 'risk-iot',
    title: 'Système IoT de prévention des risques industriels',
    category: ['IoT', 'Firmware'],
    short: 'Pré-industrialisation ESP32 low-power avec analyse énergétique Otii Ace.',
    description:
      "Pré-industrialisation d'un système IoT embarqué dédié à la prévention des risques industriels. Réalisation des spécifications techniques, sélection de l'architecture matérielle selon des critères de fiabilité, sécurité et coût, et portage des applications embarquées sur ESP32. Tests énergétiques avec Otii Ace pour analyser la consommation et optimiser le comportement du système.",
    highlights: [
      'Architecture matérielle fiable & low-cost',
      'Portage firmware sur ESP32',
      'Profiling énergétique avec Otii Ace',
      'Optimisation modes deep-sleep',
    ],
    tags: ['ESP32', 'Low-Power', 'Otii Ace'],
    image: 'https://www.lakdim.com/assets/img/risk_iot.jpg',
    year: '2024',
  },
  {
    id: 'booth',
    title: 'Multiplieur Booth Radix-4 en VHDL',
    category: ['FPGA'],
    short: 'Multiplieur optimisé avec arbre CSA, encodeur Booth et CPA en VHDL.',
    description:
      "Développement et implémentation d'un multiplieur Booth Radix-4 optimisé à l'aide d'un arbre Carry Save Adder (CSA). Le projet inclut la conception de l'encodeur Booth, la réalisation de l'arbre CSA et du CPA, ainsi que l'intégration complète du circuit en VHDL. Des simulations RTL et bancs de test ont été menés pour valider le fonctionnement et optimiser la latence du calcul.",
    highlights: [
      'Encodeur Booth Radix-4 personnalisé',
      'Arbre CSA pour réduction partielle',
      'Bancs de test exhaustifs',
      'Optimisation de latence validée RTL',
    ],
    tags: ['VHDL', 'ModelSim', 'RTL'],
    image: 'https://www.lakdim.com/assets/img/booth.jpg',
    year: '2024',
  },
  {
    id: 'cmos',
    title: 'Microélectronique CMOS 0.35µm',
    category: ['Hardware', 'FPGA'],
    short: 'Conception inverter, AND3 et Full Adder sous Cadence Virtuoso avec DRC/LVS.',
    description:
      "Réalisation de circuits numériques en CMOS 0.35µm avec Cadence Virtuoso : conception et simulation d'une porte inverseuse, d'une porte AND à 3 entrées et d'un Full Adder standard cell. Validation complète par simulations électriques, layout, et vérifications DRC/LVS pour assurer la cohérence entre schéma et layout.",
    highlights: [
      'Schémas transistor-level',
      'Layout standard cells',
      'Validation DRC / LVS clean',
      'Caractérisation électrique complète',
    ],
    tags: ['CMOS', 'Cadence Virtuoso', 'Layout'],
    image: 'https://www.lakdim.com/assets/img/layout.png',
    year: '2024',
  },
  {
    id: 'dashboard',
    title: 'Dashboard de monitoring Raspberry Pi',
    category: ['Logiciel', 'IoT'],
    short: 'Supervision temps réel d’un système embarqué avec Flask + Chart.js + systemd.',
    description:
      "Dashboard interactif pour la supervision en temps réel d'un système embarqué basé sur Raspberry Pi. Le projet inclut la création d'une API Flask pour collecter les données, l'intégration d'un frontend en HTML/CSS/JavaScript avec Chart.js, et la mise en place de services systemd pour assurer la fiabilité et l'automatisation du monitoring.",
    highlights: [
      'API Flask robuste',
      'Visualisation Chart.js temps réel',
      'Services systemd auto-restart',
      'Interface responsive',
    ],
    tags: ['Flask', 'Python', 'Linux'],
    image: 'https://www.lakdim.com/assets/img/dashboard.png',
    year: '2026',
  },
  {
    id: 'plc-elevator',
    title: 'Commande d’ascenseur — Grafcet & Ladder',
    category: ['Industriel'],
    short: 'Modélisation Grafcet puis implémentation Ladder sur PLC-Sim.',
    description:
      "Conception d'un système de commande d'ascenseur en automatisme industriel, en partant d'un Grafcet fonctionnel pour modéliser les séquences, puis en le traduisant en programme Ladder sur PLC-Sim. Le projet inclut la gestion des étages, capteurs de position, boutons d'appel, et la sécurité du déplacement.",
    highlights: [
      'Modélisation Grafcet complète',
      'Traduction fidèle en Ladder',
      'Gestion sécurité & priorités',
      'Validation par simulation PLC-Sim',
    ],
    tags: ['Grafcet', 'Ladder', 'PLC-Sim'],
    image: 'https://www.lakdim.com/assets/img/plcsim.png',
    year: '2022',
  },
];

export const skills = [
  {
    id: 'embedded',
    title: 'Systèmes Embarqués & Firmware',
    icon: 'Cpu',
    items: [
      'C / C++ (bare metal & RTOS)',
      'STM32, ESP32, ARM Cortex-M, AVR',
      'Drivers bas niveau & périphériques',
      'SPI, I2C, UART, CAN, RS485, Modbus',
      'Low-power, BLE, LoRa',
    ],
  },
  {
    id: 'linux',
    title: 'Linux Embarqué',
    icon: 'Terminal',
    items: [
      'Intégration systèmes, drivers, Bash',
      'Buildroot / Yocto (notions)',
      'Debug : strace, gdb, dmesg, perf',
      'Services systemd',
      'GCC, CMake, Make, Git, GitLab CI/CD',
    ],
  },
  {
    id: 'software',
    title: 'Développement Logiciel',
    icon: 'Code2',
    items: [
      'Python (GUI, AI/ML, Flask, FastAPI)',
      'Java, JavaScript, TypeScript',
      'HTML5, CSS3, Tailwind, Bootstrap',
      'Docker, Linux, CI/CD',
      'POO & design patterns',
    ],
  },
  {
    id: 'industrial',
    title: 'Automatisation & Industriel',
    icon: 'Factory',
    items: [
      'Programmation automates (Ladder)',
      'TIA Portal, PLCSIM',
      'Diagnostic systèmes automatisés',
      'Capteurs / actionneurs',
      'Modbus, RS485',
    ],
  },
  {
    id: 'fpga',
    title: 'FPGA & HDL',
    icon: 'CircuitBoard',
    items: [
      'Conception logique numérique FPGA',
      'VHDL : description, testbench, simulation',
      'Verilog (bases & projets)',
      'Quartus, ModelSim, MAX+PLUS II',
      'Synthèse, simulation, validation',
    ],
  },
  {
    id: 'tools',
    title: 'Hardware & EDA',
    icon: 'Wrench',
    items: [
      'KiCad, Altium (notions)',
      'LTspice, Cadence Virtuoso',
      'Oscilloscope, analyseur logique',
      'Otii Ace (analyse énergétique)',
      'DRC / LVS / Layout CMOS',
    ],
  },
];

export const stats = [
  { label: 'Années d\'études', value: '7+', code: 'edu.years' },
  { label: 'Projets réalisés', value: '15+', code: 'proj.count' },
  { label: 'Technos maîtrisées', value: '30+', code: 'stack.size' },
  { label: 'Disponibilité', value: 'Now', code: 'cdi.status' },
];

export const timeline = [
  {
    year: '2024',
    title: 'Ingénieur Électronique Embarquée',
    org: 'Recherche CDI · Paris',
    desc: 'Disponible immédiatement pour rejoindre une équipe ambitieuse en hardware/firmware/IoT.',
    status: 'active',
  },
  {
    year: '03/2025 — 09/2025',
    title: 'Ingénieur en Électronique Embarquée',
    org: 'Kivala Systèmes, stage',
    desc: 'Développement complet d’un visiophone IoT nouvelle génération, depuis la phase de conception jusqu’à la validation finale.',
    status: 'done',
  },
  {
    year: '03/2023 — 08/2023',
    title: 'Ingénieur Systèmes Embarqués',
    org: 'CITAL SPA, stage',
    desc: 'Conception et implémentation d’un système de contrôle adaptatif temps réel pour la gestion intelligente de feux de signalisation sur plusieurs intersections.',
    status: 'done',
  },
  {
    year: '05/2022 — 08/2022',
    title: 'Ingénieur automatisation',
    org: 'SOCIETE DES CIMENTS DE ZAHANA SCIZ, stage',
    desc: 'Développement et mise en service de séquences d’automatisation pour lignes industrielles.',
    status: 'done',
  },
];
