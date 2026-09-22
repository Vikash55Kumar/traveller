export interface EphemerisEvent {
  time: string;
  phase: string;
  skyState: string;
  scrollThreshold: number; // percentage 0-100
}

export interface ExperienceData {
  meta: {
    title: string;
    description: string;
    locationName: string;
    coordinates: string;
    elevation: string;
    region: string;
    mapsUrl: string;
  };
  ephemeris: EphemerisEvent[];
  navigation: {
    brand: string;
    links: Array<{ label: string; href: string }>;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quoteLine1: string;
    quoteLine2: string;
    date: string;
    time: string;
    location: string;
    reporting: string;
    scrollPrompt: string;
    coordinates: string;
    elevation: string;
  };
  question: {
    label: string;
    number: string;
    mainQuestionLine1: string;
    mainQuestionLine2: string;
    reflection1: string;
    reflection2: string;
    paces: Array<{
      step: string;
      sub: string;
    }>;
    revelation: {
      lead: string;
      reveal: string;
    };
  };
  morning: {
    label: string;
    number: string;
    title: string;
    subtitle: string;
    fragments: Array<{
      word: string;
      definition: string;
    }>;
    arrival: {
      time: string;
      label: string;
      phase: string;
    };
    departure: {
      time: string;
      label: string;
      phase: string;
    };
    discoverNote: string;
  };
  unknown: {
    label: string;
    number: string;
    title: string;
    paragraphs: string[];
    cards: Array<{
      prefix: string;
      line: string;
      emphasis?: boolean;
    }>;
  };
  essentials: {
    label: string;
    number: string;
    title: string;
    subtitle: string;
    dispatches: Array<{
      index: string;
      code: string;
      tag: string;
      primary: string;
      secondary: string;
      specs?: string[];
      action?: {
        label: string;
        href: string;
        external: boolean;
      };
    }>;
  };
  notebook: {
    label: string;
    number: string;
    title: string;
    lines: string[];
    closing: string;
    fieldNotes: string[];
    caption: string;
  };
  preparation: {
    label: string;
    number: string;
    title: string;
    essentialTitle: string;
    essentials: Array<{ name: string; rationale: string }>;
    mindsetTitle: string;
    mindset: Array<{ name: string; rationale: string }>;
  };
  arrival: {
    label: string;
    number: string;
    title: string;
    lines: string[];
    ctaPrompt: string;
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
    coordinates: string;
    year: string;
  };
}

export const experience: ExperienceData = {
  meta: {
    title: "The Traveller — A Morning of Walking, Observation & Questions",
    description:
      "A four-hour morning experience beginning at 5 AM at Kaylana Chouraha. Come prepared. The rest is meant to be discovered.",
    locationName: "Kaylana Chouraha",
    coordinates: "26°17'58.2\"N 72°58'42.1\"E",
    elevation: "245 M ASL",
    region: "Jodhpur, Rajasthan",
    mapsUrl: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
  },
  ephemeris: [
    {
      time: "04:45 AM",
      phase: "PITCH BLACK",
      skyState: "Night silence",
      scrollThreshold: 0,
    },
    {
      time: "05:00 AM",
      phase: "THE GATHERING",
      skyState: "Sharp arrival",
      scrollThreshold: 18,
    },
    {
      time: "05:38 AM",
      phase: "ASTRONOMICAL DAWN",
      skyState: "The question forms",
      scrollThreshold: 35,
    },
    {
      time: "06:14 AM",
      phase: "NAUTICAL TWILIGHT",
      skyState: "Horizon silhouette",
      scrollThreshold: 55,
    },
    {
      time: "07:20 AM",
      phase: "INK & REFLECTION",
      skyState: "Notebook in hand",
      scrollThreshold: 75,
    },
    {
      time: "09:00 AM",
      phase: "THE RETURN",
      skyState: "Sunlit horizon",
      scrollThreshold: 95,
    },
  ],
  navigation: {
    brand: "THE TRAVELLER",
    links: [
      { label: "PHILOSOPHY", href: "#philosophy" },
      { label: "THE MORNING", href: "#the-morning" },
      { label: "ESSENTIALS", href: "#essentials" },
    ],
  },
  hero: {
    eyebrow: "AN UNCOMPROMISING MORNING EXPERIENCE",
    title: "THE TRAVELLER",
    subtitle: "The Journey Within",
    quoteLine1: "We all travel.",
    quoteLine2: "Somewhere along the way, we forget the traveller.",
    date: "SUNDAY",
    time: "05:00 AM — 09:00 AM",
    location: "Kaylana Chouraha",
    reporting: "Sharp 5:00 AM",
    scrollPrompt: "DESCEND INTO DAWN",
    coordinates: "26°17'58.2\"N 72°58'42.1\"E",
    elevation: "245 M",
  },
  question: {
    label: "INQUIRY",
    number: "01",
    mainQuestionLine1: "You know where you're going.",
    mainQuestionLine2: "But do you know who's travelling?",
    reflection1: "Maybe the morning isn't asking you to reach somewhere.",
    reflection2: "Maybe it is asking you to notice something.",
    paces: [
      { step: "You walk.", sub: "Pacing the quiet earth" },
      { step: "You look.", sub: "Beyond the trail line" },
      { step: "You listen.", sub: "To the wind before day" },
      { step: "You pause.", sub: "The space between strides" },
    ],
    revelation: {
      lead: "And somewhere between one step and the next...",
      reveal: "a question appears.",
    },
  },
  morning: {
    label: "ARCHIVAL",
    number: "02",
    title: "BETWEEN 5 AM AND 9 AM",
    subtitle: "What happens between the first step and the last?",
    fragments: [
      { word: "WALK", definition: "Unmeasured movement without a digital clock." },
      { word: "OBSERVE", definition: "The changing shadows of stone before light." },
      { word: "PAUSE", definition: "Ceasing momentum before you are asked to." },
      { word: "QUESTION", definition: "The inquiry that surfaces in absolute quiet." },
    ],
    arrival: {
      time: "05:00",
      label: "ARRIVE",
      phase: "DARK HORIZON",
    },
    departure: {
      time: "09:00",
      label: "LEAVE",
      phase: "SUNLIT HORIZON",
    },
    discoverNote: "Everything between those two moments is yours to discover.",
  },
  unknown: {
    label: "INTENTIONAL WITHHOLDING",
    number: "03",
    title: "SOME THINGS ARE BETTER DISCOVERED.",
    paragraphs: [
      "You won't find a schedule here.",
      "You won't find the route.",
      "You won't find the questions.",
      "And that's intentional.",
      "Some experiences lose something when they're explained beforehand.",
    ],
    cards: [
      { prefix: "A path", line: "you haven't seen." },
      { prefix: "A question", line: "you haven't asked." },
      { prefix: "A moment", line: "you didn't expect." },
      {
        prefix: "And perhaps,",
        line: "a glimpse of the person who has been travelling all along.",
        emphasis: true,
      },
    ],
  },
  essentials: {
    label: "FIELD PROTOCOL",
    number: "04",
    title: "JUST COME PREPARED.",
    subtitle: "No itinerary will be shared. Only the strict conditions of arrival and equipment.",
    dispatches: [
      {
        index: "01",
        code: "TEMP / TIME",
        tag: "WHEN",
        primary: "Sunday Morning",
        secondary: "05:00 AM — 09:00 AM",
        specs: ["04:45 AM: Reporting begins", "05:00 AM: Group departs into silence"],
      },
      {
        index: "02",
        code: "GEO / PIN",
        tag: "WHERE",
        primary: "Kaylana Chouraha",
        secondary: "Reporting: Sharp 5:00 AM",
        specs: ["Coordinates: 26°17'58.2\"N 72°58'42.1\"E", "Route remains sealed until arrival"],
        action: {
          label: "OPEN LOCATION PIN →",
          href: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
          external: true,
        },
      },
      {
        index: "03",
        code: "LOAD / PACK",
        tag: "CARRY",
        primary: "Notebook & Pen",
        secondary: "Water bottle (minimum 1 Litre)",
        specs: ["Physical notebook (no screens)", "Comfortable, dependable writing tool"],
      },
      {
        index: "04",
        code: "TERRAIN / GEAR",
        tag: "WEAR",
        primary: "Comfortable Clothing",
        secondary: "Trekking footwear with grip",
        specs: ["Breathable layers for cool pre-dawn", "Sturdy soles for rocky elevation"],
      },
    ],
  },
  notebook: {
    label: "ARTIFACT",
    number: "05",
    title: "BRING A NOTEBOOK. AND A PEN.",
    lines: [
      "You may not know yet why you'll need them.",
      "That's okay.",
    ],
    closing: "Some observations exist only in ink before the sun climbs.",
    fieldNotes: [
      "Leave notifications off.",
      "Write what is seen, not what is performed.",
      "The paper is your only mirror out here.",
    ],
    caption: "SPECIMEN · PHYSICAL FIELD JOURNAL // UNLINED CREAM STOCK",
  },
  preparation: {
    label: "READINESS",
    number: "06",
    title: "WHAT TO CARRY",
    essentialTitle: "TANGIBLE LOAD",
    essentials: [
      { name: "Notebook", rationale: "For capturing impressions before they evaporate." },
      { name: "Pen", rationale: "Ink holds permanence that digital notes cannot mimic." },
      { name: "Water (1L+)", rationale: "Desert air is deceptive in early twilight." },
      { name: "Layered clothing", rationale: "Cool pre-dawn shifts to warm morning sun." },
      { name: "Trekking footwear", rationale: "Uneven gravel, desert sandstone, and stone steps." },
    ],
    mindsetTitle: "INTERNAL PREPARATION",
    mindset: [
      { name: "Curiosity", rationale: "Without the need to immediately name what you see." },
      { name: "Attention", rationale: "Sustained observation over rapid glances." },
      { name: "Willingness to pause", rationale: "Standing still when habit urges you to march forward." },
    ],
  },
  arrival: {
    label: "INTENT",
    number: "07",
    title: "YOU DON'T NEED TO KNOW.",
    lines: [
      "You don't need to know the route.",
      "You don't need to know the questions.",
      "You don't need to know what comes next.",
      "Just arrive.",
      "At 5 AM.",
    ],
    ctaPrompt: "Will you be there when the morning opens?",
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
    coordinates: "26°17'58.2\"N 72°58'42.1\"E // 245M ASL",
    year: "2026",
  },
};
