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
    fragments: string[];
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
    fragments: Array<{
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
      "A four-hour morning experience beginning at 5 AM at Kaylana Chouraha. Come prepared. The rest is meant to be discovered.",
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
    fragments: ["WALK", "OBSERVE", "PAUSE", "QUESTION"],
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
    fragments: [
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
    label: "PRACTICAL INFORMATION",
    title: "JUST COME PREPARED.",
    columns: [
      {
        tag: "WHEN",
        title: "Sunday Morning",
        details: "05:00 AM – 09:00 AM",
      },
      {
        tag: "WHERE",
        title: "Kaylana Chouraha",
        details: "Reporting: Sharp 5:00 AM",
        action: {
          label: "OPEN LOCATION →",
          href: "https://maps.google.com/?q=Kaylana+Chouraha+Jodhpur",
        },
      },
      {
        tag: "CARRY",
        title: "Notebook & Pen",
        details: "Water (at least 1 Litre)",
      },
      {
        tag: "WEAR",
        title: "Comfortable Clothing",
        details: "Suitable trekking footwear",
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
    ctaTime: "At 5 AM.",
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
