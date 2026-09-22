export interface ExperienceData {
  meta: {
    title: string;
    description: string;
    locationName: string;
    mapsUrl: string;
  };
  navigation: {
    brand: string;
    links: Array<{ label: string; href: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    quoteLine1: string;
    quoteLine2: string;
    date: string;
    time: string;
    location: string;
    reporting: string;
    scrollPrompt: string;
  };
  question: {
    label: string;
    mainQuestionLine1: string;
    mainQuestionLine2: string;
    reflection1: string;
    reflection2: string;
    paces: string[];
    revelation: {
      lead: string;
      reveal: string;
    };
  };
  morning: {
    label: string;
    title: string;
    subtitle: string;
    lead: string;
    movements: Array<{
      id: string;
      word: string;
      roman: string;
      subtitle: string;
      description: string;
      tag: string;
      glyph: "pulse" | "aperture" | "zenith" | "labyrinth";
    }>;
    discoverNote: string;
    principles: Array<{
      label: string;
      text: string;
    }>;
  };
  unknown: {
    label: string;
    title: string;
    subtitle?: string;
    paragraphs: string[];
    manifesto?: string[];
    sealedPillars?: Array<{
      id: string;
      number: string;
      title: string;
      tag: string;
      question: string;
      philosophy: string;
      glyph: "path" | "scroll" | "horizon";
    }>;
    fragments: Array<{
      prefix: string;
      line: string;
      emphasis?: boolean;
    }>;
    revelations?: Array<{
      prefix: string;
      line: string;
      emphasis?: boolean;
    }>;
  };
  essentials: {
    label: string;
    title: string;
    columns: Array<{
      tag: string;
      title: string;
      details: string;
      image?: string;
      imageAlt?: string;
      action?: {
        label: string;
        href: string;
      };
    }>;
  };
  notebook: {
    label: string;
    title: string;
    subtitle: string;
    lines: string[];
  };
  checklist: {
    label: string;
    title: string;
    essentialTitle: string;
    essentials: string[];
    mindsetTitle: string;
    mindset: string[];
  };
  arrival: {
    label: string;
    title: string;
    lines: string[];
    ctaTime: string;
    actionLabel: string;
  };
  final: {
    title: string;
    lines: string[];
    date: string;
    time: string;
    location: string;
    unansweredQuestion: string;
  };
  footer: {
    brand: string;
    subline: string;
    year: string;
  };
}

export const experience: ExperienceData = {
  meta: {
    title: "The Traveller — A Morning of Walking, Observation & Questions",
    description:
      "A quiet morning walk of observation and inquiry beginning at Kaylana Chouraha. Come prepared. The rest is meant to be discovered.",
    locationName: "Kaylana Chouraha, Jodhpur",
    mapsUrl: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
  },
  navigation: {
    brand: "THE TRAVELLER",
    links: [
      { label: "THE MORNING", href: "#the-morning" },
      { label: "ESSENTIALS", href: "#essentials" },
    ],
  },
  hero: {
    eyebrow: "A MORNING EXPERIENCE",
    title: "THE TRAVELLER",
    quoteLine1: "We all travel.",
    quoteLine2: "Somewhere along the way, we forget the traveller.",
    date: "SUNDAY",
    time: "AT FIRST LIGHT",
    location: "Kaylana Chouraha",
    reporting: "05:00 AM",
    scrollPrompt: "SCROLL TO BEGIN",
  },
  question: {
    label: "THE QUESTION",
    mainQuestionLine1: "You know where you're going.",
    mainQuestionLine2: "But do you know who's travelling?",
    reflection1: "Maybe the morning isn't asking you to reach somewhere.",
    reflection2: "Maybe it is asking you to notice something.",
    paces: [
      "You walk.",
      "You look.",
      "You listen.",
      "You pause.",
    ],
    revelation: {
      lead: "And somewhere between one step and the next...",
      reveal: "a question appears.",
    },
  },
  morning: {
    label: "THE MORNING",
    title: "BEFORE THE CITY WAKES",
    subtitle: "A quiet space between the stillness of night and the noise of the day.",
    lead: "There is a brief window before the world demands your attention. No agenda. No destinations to check off. Just the open earth, the early air, and room to be present.",
    movements: [
      {
        id: "01",
        word: "WALK",
        roman: "I",
        subtitle: "Movement without destination.",
        description:
          "Moving without an agenda. The pace is unhurried, allowing thought to detach from urgency and sync with the cadence of boots against stone.",
        tag: "CADENCE & EMBODIMENT",
        glyph: "pulse",
      },
      {
        id: "02",
        word: "OBSERVE",
        roman: "II",
        subtitle: "Looking without naming.",
        description:
          "Notice the cool air on your skin, the shifting mineral tones of ancient sandstone, and the horizon changing hue long before the sun appears.",
        tag: "SENSORY ATTUNEMENT",
        glyph: "aperture",
      },
      {
        id: "03",
        word: "PAUSE",
        roman: "III",
        subtitle: "Stillness without purpose.",
        description:
          "Stand when you need to stand. Sit when you need to sit. No instructor, no timer, no performance metrics. Inhabiting pure silence.",
        tag: "SACRED CESSATION",
        glyph: "zenith",
      },
      {
        id: "04",
        word: "QUESTION",
        roman: "IV",
        subtitle: "Wonder without urgency.",
        description:
          "The inquiries that awaken in the pre-dawn silence are not the ones you answer at an office desk. You do not solve them; you simply carry them.",
        tag: "UNANSWERED TRUTH",
        glyph: "labyrinth",
      },
    ],
    discoverNote: "Everything between the first step and the last is yours to discover.",
    principles: [
      {
        label: "SILENCE",
        text: "Spoken words are rare and deliberate. Let the morning speak first.",
      },
      {
        label: "SOLITUDE TOGETHER",
        text: "Walking alongside others, yet entirely at ease within your own mind.",
      },
      {
        label: "DISCOVERY",
        text: "Nothing is rehearsed. The trail unfolds one step at a time.",
      },
    ],
  },
  unknown: {
    label: "THE UNKNOWN",
    title: "SOME THINGS ARE BETTER DISCOVERED.",
    subtitle: "The rare luxury of not knowing what lies ahead.",
    paragraphs: [
      "You won't find a schedule here.",
      "You won't find the route.",
      "You won't find the questions.",
      "And that's intentional.",
      "Some experiences lose something vital when they're explained beforehand.",
    ],
    manifesto: [
      "In a world where every step is mapped by satellite, every view is photographed in advance, and every moment is pre-calculated, uncertainty has become a lost art.",
      "The Traveller restores the quiet dignity of the unwritten morning. By withholding the route and the questions, we leave room for genuine discovery.",
    ],
    sealedPillars: [
      {
        id: "route",
        number: "I",
        title: "THE ROUTE",
        tag: "SEALED BY DESIGN",
        question: "Why is the trail unrevealed?",
        philosophy:
          "If you knew every turn in advance, your mind would walk the trail before your feet ever touched the sandstone. When the path is unknown, your attention stays entirely in the present step.",
        glyph: "path",
      },
      {
        id: "questions",
        number: "II",
        title: "THE INQUIRY",
        tag: "UNSPOKEN UNTIL DAWN",
        question: "Why are the questions kept secret?",
        philosophy:
          "Premature answers destroy honest questions. The prompts are designed to meet you in the quiet wind of the morning—when the noise of routine has not yet dictated your thoughts.",
        glyph: "scroll",
      },
      {
        id: "destination",
        number: "III",
        title: "THE HORIZON",
        tag: "NO FINISH LINE",
        question: "Where does the morning lead?",
        philosophy:
          "We do not walk to conquer a peak or tick off a milestone. The walk itself is the entire purpose. When you surrender the destination, the real journey begins.",
        glyph: "horizon",
      },
    ],
    fragments: [
      { prefix: "A path", line: "you have passed a hundred times, yet never truly seen." },
      { prefix: "A silence", line: "deep enough that your thoughts finally stop competing." },
      { prefix: "A question", line: "that has waited patiently for the world to grow quiet." },
      {
        prefix: "And perhaps,",
        line: "a rare glimpse of the person who has been travelling all along.",
        emphasis: true,
      },
    ],
    revelations: [
      { prefix: "A PATH", line: "you have passed a hundred times, yet never truly seen." },
      { prefix: "A SILENCE", line: "deep enough that your thoughts finally stop competing." },
      { prefix: "A QUESTION", line: "that has waited patiently for the world to grow quiet." },
      {
        prefix: "AND PERHAPS",
        line: "a rare glimpse of the person who has been travelling all along.",
        emphasis: true,
      },
    ],
  },
  essentials: {
    label: "PRACTICAL INFORMATION",
    title: "JUST COME PREPARED.",
    columns: [
      {
        tag: "SCHEDULE",
        title: "Sunday Dawn",
        details: "Gathering before sunrise · Returning by mid-morning",
        image: "/images/practical-schedule.jpg",
        imageAlt: "Atmospheric pre-dawn desert horizon with faint starlight and golden sunrise rim",
      },
      {
        tag: "LOCATION",
        title: "Kaylana Chouraha",
        details: "Reporting at 05:00 AM sharp",
        image: "/images/practical-location.jpg",
        imageAlt: "Kaylana Lake escarpment shoreline near Jodhpur in pre-dawn blue hour mist",
        action: {
          label: "OPEN LOCATION →",
          href: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
        },
      },
      {
        tag: "CARRY",
        title: "Notebook & Pen",
        details: "Water (at least 1 Litre)",
        image: "/images/practical-carry.jpg",
        imageAlt: "Field journal leather notebook, brass pen, and black canteen on desert sandstone",
      },
      {
        tag: "WEAR",
        title: "Comfortable Clothing",
        details: "Suitable trekking footwear",
        image: "/images/practical-wear.jpg",
        imageAlt: "Rugged trail boots and durable trekking trousers standing on desert sandstone rock at sunrise",
      },
    ],
  },
  notebook: {
    label: "THE COMPANION",
    title: "BRING A NOTEBOOK.",
    subtitle: "AND A PEN.",
    lines: [
      "You may not know yet why you'll need them.",
      "That's okay.",
    ],
  },
  checklist: {
    label: "WHAT TO CARRY",
    title: "PREPARATION",
    essentialTitle: "ESSENTIAL",
    essentials: [
      "Notebook",
      "Pen",
      "Water",
      "Comfortable clothing",
      "Suitable footwear",
    ],
    mindsetTitle: "ALSO BRING",
    mindset: [
      "Curiosity",
      "Attention",
      "Willingness to pause",
    ],
  },
  arrival: {
    label: "WHO IS THIS FOR?",
    title: "YOU DON'T NEED TO KNOW.",
    lines: [
      "You don't need to know the route.",
      "You don't need to know the questions.",
      "You don't need to know what comes next.",
      "Just arrive.",
    ],
    ctaTime: "Before First Light.",
    actionLabel: "SAVE THE MORNING",
  },
  final: {
    title: "THE TRAIL BEGINS BEFORE THE SUN RISES.",
    lines: [
      "You know where to meet.",
      "You know when to arrive.",
      "The rest...",
      "is better experienced than explained.",
    ],
    date: "SUNDAY",
    time: "05:00 AM",
    location: "KAYLANA CHOURAHA",
    unansweredQuestion:
      "You know the time and the place. But are you ready to meet the traveller?",
  },
  footer: {
    brand: "THE TRAVELLER",
    subline: "Sunday · 5:00 AM · Kaylana Chouraha",
    year: "2026",
  },
};
