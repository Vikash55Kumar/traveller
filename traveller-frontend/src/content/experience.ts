export interface ExperienceData {
  meta: {
    title: string;
    description: string;
    locationName: string;
    mapsUrl: string;
    calendarDetails: {
      title: string;
      description: string;
      location: string;
      startTime: string;
      endTime: string;
    };
  };
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
    fragments: Array<{
      word: string;
      annotation?: string;
      offset: string;
    }>;
    arrival: {
      time: string;
      label: string;
    };
    departure: {
      time: string;
      label: string;
    };
    discoverNote: string;
  };
  unknown: {
    label: string;
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
    title: string;
    cards: Array<{
      index: string;
      tag: string;
      primary: string;
      secondary: string;
      details?: string[];
      action?: {
        label: string;
        href: string;
        external: boolean;
      };
    }>;
  };
  notebook: {
    title: string;
    lines: string[];
    closing: string;
    imageCaption: string;
  };
  preparation: {
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
    year: string;
  };
}

export const experience: ExperienceData = {
  meta: {
    title: "The Traveller — A Morning of Walking, Observation & Questions",
    description:
      "A four-hour morning experience beginning at 5 AM at Kaylana Chouraha. Come prepared. The rest is meant to be discovered.",
    locationName: "Kaylana Chouraha, Jodhpur",
    mapsUrl: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
    calendarDetails: {
      title: "The Traveller — Morning Experience",
      description:
        "The trail begins before the sun rises. Reporting sharp at 5:00 AM. Bring notebook, pen, water, and trekking footwear. Everything else is meant to be discovered.",
      location: "Kaylana Chouraha, Jodhpur",
      startTime: "2026-09-27T05:00:00+05:30",
      endTime: "2026-09-27T09:00:00+05:30",
    },
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
    subtitle: "The Journey Within",
    quoteLine1: "We all travel.",
    quoteLine2: "Somewhere along the way, we forget the traveller.",
    date: "SUNDAY",
    time: "05:00 AM — 09:00 AM",
    location: "Kaylana Chouraha",
    reporting: "Sharp 5:00 AM",
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
    title: "BETWEEN 5 AM AND 9 AM",
    subtitle: "What happens between the first step and the last?",
    fragments: [
      { word: "WALK", offset: "translate-x-0" },
      { word: "OBSERVE", offset: "md:translate-x-24" },
      { word: "PAUSE", offset: "md:-translate-x-12" },
      { word: "QUESTION", offset: "md:translate-x-32" },
    ],
    arrival: {
      time: "05:00",
      label: "ARRIVE",
    },
    departure: {
      time: "09:00",
      label: "LEAVE",
    },
    discoverNote: "Everything between those two moments is yours to discover.",
  },
  unknown: {
    label: "THE UNKNOWN",
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
    label: "THE ESSENTIALS",
    title: "JUST COME PREPARED.",
    cards: [
      {
        index: "01",
        tag: "WHEN",
        primary: "Sunday",
        secondary: "05:00 AM – 09:00 AM",
      },
      {
        index: "02",
        tag: "WHERE",
        primary: "Kaylana Chouraha",
        secondary: "Reporting: Sharp 5:00 AM",
        action: {
          label: "OPEN LOCATION →",
          href: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
          external: true,
        },
      },
      {
        index: "03",
        tag: "CARRY",
        primary: "Notebook & Pen",
        secondary: "Water bottle (at least 1 Litre)",
        details: ["Unlined or lined notebook", "Comfortable pen or pencil"],
      },
      {
        index: "04",
        tag: "WEAR",
        primary: "Comfortable Clothing",
        secondary: "Suitable trekking footwear with solid grip",
      },
    ],
  },
  notebook: {
    title: "BRING A NOTEBOOK. AND A PEN.",
    lines: [
      "You may not know yet why you'll need them.",
      "That's okay.",
    ],
    closing: "Some observations exist only in ink before the sun climbs.",
    imageCaption: "A silent companion for thoughts that don't belong on a screen.",
  },
  preparation: {
    label: "PREPARATION",
    title: "WHAT TO CARRY",
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
    year: "2026",
  },
};
