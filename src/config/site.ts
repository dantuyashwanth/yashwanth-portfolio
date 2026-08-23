/**
 * ---------------------------------------------------------------------------
 * SITE CONTENT
 * ---------------------------------------------------------------------------
 * Personal portfolio content.
 * ---------------------------------------------------------------------------
 */

export const site = {
  displayWord: 'YASHWANTH',
  faceLetterIndex: 4,

  eyebrow: 'AI ENGINEER / ML ENTHUSIAST',
  year: '2026',

  firstName: 'YASHWANTH',
  signatureName: 'YASHWANTH KUMAR',
  lastName: 'KUMAR',

  connect: {
    status: 'is available to talk',
    cta: "Let's connect",
    href: '#contact',
  },

  intro: {
    heading: 'HELLO',
    lede: "Hi, I'm YASHWANTH.",
    paragraphs: [
      'I am an AI and Machine Learning enthusiast passionate about building intelligent systems that solve real-world problems.',
      'My interests include Machine Learning, Deep Learning, Artificial Intelligence, Generative AI, and developing practical applications using modern technologies.',
      'Currently, I am focused on building projects, improving my technical skills, and exploring the future of Artificial Intelligence.',
    ],
  },

  education: {
    heading: 'EDUCATION',
    items: [
      {
        degree: 'Bachelor of Technology in CSE (AI & ML)',
        detail: '2021 – 2025',
      },
    ],
  },

  skills: {
    heading: 'SKILLS',

    items: [
      {
        label: 'Python',
        short: 'Py',
        src: '/assets/skills/python.png',
        scale: 1,
      },
      {
        label: 'Machine Learning',
        short: 'ML',
        src: '/assets/skills/machine-learning.png',
        scale: 1,
      },
      {
        label: 'Deep Learning',
        short: 'DL',
        src: '/assets/skills/deep-learning.png',
        scale: 1,
      },
      {
        label: 'TensorFlow',
        short: 'Tf',
        src: '/assets/skills/tensorflow.png',
        scale: 1,
      },
      {
        label: 'SQL',
        short: 'SQL',
        src: '/assets/skills/sql.png',
        scale: 1,
      },
      {
        label: 'Java',
        short: 'Jv',
        src: '/assets/skills/java.png',
        scale: 1,
      },
    ] as {
      label: string
      short: string
      src: string | null
      scale: number
    }[],
  },

  studio: {
    heading: 'THE LAB',

    items: [
      {
        quote:
          'Advanced Calorie Tracker using Artificial Intelligence to analyze food images and estimate nutritional information.',
        author: 'AI CALORIE TRACKER',
        rotation: -5,
        drop: 0,
        shade: 0.2,
        skew: -0.9,
        indent: 1,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
      {
        quote:
          'A KNN-based system designed to detect counterfeit logos by analyzing logo features and distinguishing genuine designs from fake ones.',
        author: 'FAKE LOGO DETECTION USING KNN',
        rotation: 1.2,
        drop: 11,
        shade: 0.6,
        skew: 0.7,
        indent: 0,
        objectPosition: '56% 38%',
        href: null as string | null,
      },
      {
        quote:
          'Exploring Artificial Intelligence, Machine Learning and Deep Learning to create intelligent solutions for real-world problems.',
        author: 'AI & MACHINE LEARNING',
        rotation: 4,
        drop: 3,
        shade: 0.35,
        skew: -0.5,
        indent: 2,
        objectPosition: '50% 50%',
        href: null as string | null,
      },
    ],
  },

  experience: {
    heading: 'JOURNEY',

    items: [
      {
        period: '2021 – 2025',
        role: 'B.Tech CSE (AI & ML)',
        company: 'Graduate',
      },
    ],
  },

  footer: {
    heading: "Let's connect",
    acknowledged: 'See you there',
    sub: 'Have an opportunity, an idea, or simply want to say hello?',

    href: 'mailto:dantuyashwanth2004@gmail.com',

    marquee: ['YASHWANTH', 'AI ENGINEER', 'INNOVATOR'],

    links: [
      {
        label: 'LinkedIn',
        href:
          'https://www.linkedin.com/in/dantu-yashwanth-kumar-56776b231/' as string | null,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/dantuyashwanth/' as string | null,
      },
      {
        label: 'Email',
        href: 'mailto:dantuyashwanth2004@gmail.com' as string | null,
      },
    ],
  },
} as const

export type Site = typeof site