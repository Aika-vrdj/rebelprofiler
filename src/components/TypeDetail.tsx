"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface TypeDetailProps {
  typeNumber: number;
}

interface WingData {
  name: string;
  traits: string[];
  description: string;
}

interface TypeData {
  name: string;
  summary: string;
  traits: string[];
  wings: { [key: string]: WingData };
  integration: string;
  disintegration: string;
  healthLevels: {
    healthy: string[];
    average: string[];
    unhealthy: string[];
  };
  strengths: string[];
  challenges: string[];
  examples: string[];
  subtypes: {
    selfPreservation: string;
    sexual: string;
    social: string;
  };
  coreBelief: string;
  commonLie: string;
  color: string;
}

const typeData: { [key: number]: TypeData } = {
  1: {
    name: "The Crusader",
    summary: "Ethical, dedicated and reliable, Ones are motivated by a desire to live the right way, improve the world, and avoid fault and blame.",
    traits: ["Principled and purposeful", "Self-controlled and perfectionistic", "Rational and idealistic", "Organized and orderly", "Critical (of self and others)", "Gut Center: Processes the world via their instincts."],
    wings: {
      "1w9": {
        name: "Type 1 wing 9 - The Vanguard",
        traits: ["More introverted", "Calmer", "Less confrontational", "More philosophical"],
        description: "Combines One's perfectionism with Nine's desire for peace and harmony. The steadfast visionary, leading with unyielding ideals, bridging the gap between peace and action."
      },
      "1w2": {
        name: "Type 1 wing 2 - The Justicar",
        traits: ["More extroverted", "People-oriented", "More emotional", "Service-focused"],
        description: "Combines One's idealism with Two's desire to help others. The enforcer of justice and protector of the cause, standing firm in the face of moral conflict."
      }
    },
    integration: "In growth moves to Type 7 - The Maverick: Becomes more spontaneous, joyful, and open-minded, allowing for creativity and flexibility.",
    disintegration: "In stress moves to Type 4 - The Trailblazer: Becomes overly self-critical, withdrawn, and emotionally turbulent, losing their sense of purpose in frustration.",
    healthLevels: {
      healthy: [
        "Becomes accepting and patient with self and others",
        "Develops wisdom about human nature",
        "Strives for personal growth and improvement"
      ],
      average: [
        "Focuses on maintaining high standards",
        "Becomes critical of self and others",
        "Struggles with perfectionism"
      ],
      unhealthy: [
        "Becomes obsessed with imperfection",
        "Develops rigid, judgmental attitudes",
        "Experiences intense self-criticism"
      ]
    },
    strengths: ["Honest", "Responsible", "Improvement-oriented", "Ethical"],
    challenges: ["Criticality", "Rigidity", "Impatience", "Self-criticism"],
    examples: ["I must be perfect to be worthy; the truth is, I am enough just as I am."],
    subtypes: {
      selfPreservation: "Focused on personal security and maintaining order in their environment",
      sexual: "Intense about personal relationships and maintaining high standards in partnerships",
      social: "Dedicated to improving social systems and institutions"
    },
    coreBelief: "The world is imperfect and needs to be improved",
    commonLie: "I must be perfect to be worthy of love",
    color: "bg-primary"
  },
  2: {
    name: "The Guardian",
    summary: "Warm, caring, and giving, Twos are motivated by a need to be loved and needed, and to avoid acknowledging their own needs.",
    traits: ["Caring and interpersonal", "Empathetic and sincere", "People-pleasing and possessive", "Generous and self-sacrificing", "Pride in helping others", "Heart Center: Processes the world via their feelings."],
    wings: {
      "2w1": {
        name: "Type 2 wing 1 - The Benevolent",
        traits: ["More organized", "Principled", "Dutiful", "Service-oriented"],
        description: "Combines Two's caring nature with One's sense of duty and ethics. The selfless protector, driven by an unwavering sense of duty and compassion to serve the rebellion’s needs."
      },
      "2w3": {
        name: "Type 2 wing 3 - The Emissary",
        traits: ["More outgoing", "Image-conscious", "Ambitious", "Charming"],
        description: "Combines Two's helpfulness with Three's charm and social adaptability.The charismatic diplomat who fosters relationships and alliances, skilled in the art of persuasion."
      }
    },
    integration: "In growth moves to Type 4 - The Trailblazer: Develops deeper self-awareness and emotional depth, embracing their own needs rather than always prioritizing others.",
    disintegration: "In stress moves to Type 8 - The Warlord: Becomes controlling, demanding, and aggressive when feeling unappreciated.",
    healthLevels: {
      healthy: [
        "Becomes genuinely caring and altruistic",
        "Develops emotional intelligence and boundaries",
        "Shows unconditional love without expecting return"
      ],
      average: [
        "Needs to be needed by others",
        "Struggles with setting boundaries",
        "Represses own needs and feelings"
      ],
      unhealthy: [
        "Becomes manipulative and controlling",
        "Develops martyr-like behavior",
        "Shows extreme neediness and dependency"
      ]
    },
    strengths: ["Empathy", "Generosity", "Emotional Intelligence", "Nurturing"],
    challenges: ["Dependency", "People-pleasing", "Boundary issues", "Pride"],
    examples: ["I must be needed and loved to matter; the truth is, my worth comes from within."],
    subtypes: {
      selfPreservation: "Focused on meeting their own needs through helping others",
      sexual: "Intense in relationships, seeking intimate connections through giving",
      social: "Creates networks of support and friendship through service"
    },
    coreBelief: "I must help others to be worthy of love",
    commonLie: "I must earn love through giving and helping",
    color: "bg-[#991B1B]"
  },
  3: {
    name: "The Trailblazer",
    summary: "Success-oriented, pragmatic, and adaptable, Threes are motivated by a need to be successful, to distinguish themselves from others, and to avoid failure.",
    traits: ["Ambitious and driven", "Image-conscious and adaptable", "Efficient and goal-oriented", "Competitive and status-seeking", "Self-promoting and charming", "Heart Center: Processes the world via their feelings."],
    wings: {
      "3w2": {
        name: "Type 3 wing 2 - The Enchanter",
        traits: ["More people-oriented", "Helpful", "Diplomatic", "Engaging"],
        description: "Combines Three's ambition with Two's desire to be liked and helpful. The charming and commanding presence who wins hearts, while maintaining an aura of authority and leadership."
      },
      "3w4": {
        name: "Type 3 wing 4 - The Ace",
        traits: ["More introspective", "Creative", "Distinguished", "Refined"],
        description: "Combines Three's drive for success with Four's creativity and authenticity. The ambitious and polished strategist, skilled in both the art of success and cultivating a strong personal identity."
      }
    },
    integration: "In growth moves to Type 6 - The Sentinel: Gains loyalty, teamwork, and a sense of responsibility, realizing success is not just personal but collective.",
    disintegration: "In stress moves to Type 9 - The Diplomat: Becomes disengaged, apathetic, and indifferent, losing their drive in exhaustion.",
    healthLevels: {
      healthy: [
        "Becomes self-accepting and authentic",
        "Uses talents to contribute meaningfully",
        "Inspires and motivates others genuinely"
      ],
      average: [
        "Focuses intensely on achievement",
        "Becomes competitive and image-conscious",
        "Struggles with authenticity"
      ],
      unhealthy: [
        "Becomes deceptive and manipulative",
        "Develops narcissistic tendencies",
        "Experiences deep feelings of emptiness"
      ]
    },
    strengths: ["Drive", "Efficiency", "Adaptability", "Leadership"],
    challenges: ["Workaholism", "Image-focus", "Authenticity issues", "Validation-seeking"],
    examples: ["I must achieve to be valued; the truth is, I am valuable for who I am, not what I do."],
    subtypes: {
      selfPreservation: "Focused on security through personal achievement and material success",
      sexual: "Seeks to be the best and most attractive in relationships",
      social: "Strives for status and recognition in groups"
    },
    coreBelief: "I must succeed and appear successful to be worthy",
    commonLie: "My value depends on my achievements and image",
    color: "bg-[#854D0E]"
  },
  4: {
    name: "The Visionary",
    summary: "Sensitive, introspective, and expressive, Fours are motivated by a need to be authentic, special and to avoid being ordinary or mundane.",
    traits: ["Introspective and sensitive", "Creative and expressive", "Melancholic and dramatic", "Self-aware and authentic", "Emotional depth and intensity", "Heart Center: Processes the world via their feelings."],
    wings: {
      "4w3": {
        name: "Type 4 wing 3 - The Patrician",
        traits: ["More ambitious", "Image-conscious", "Success-oriented", "Competitive"],
        description: "Combines Four's creativity with Three's drive for achievement and recognition. The elegant and influential figure, blending artistic vision with the power and poise of a noble leader."
      },
      "4w5": {
        name: "Type 2 wing 5 - The Mystagogue",
        traits: ["More introspective", "Intellectual", "Reserved", "Philosophical"],
        description: "Combines Four's emotional depth with Five's analytical nature and wisdom. The eccentric and introspective visionary, seeking deeper meaning in a world that often misunderstands them."
      }
    },
    integration: "In growth moves to Type 1 - The Crusader: Gains structure, discipline, and clarity, channeling their creativity into tangible action.",
    disintegration: "In stress moves to Type 2 - The Guardian: Becomes emotionally needy, seeking validation and over-investing in relationships to feel worthy.",
    healthLevels: {
      healthy: [
        "Becomes inspired and creative",
        "Transforms personal experiences into universal art",
        "Develops emotional depth and authenticity"
      ],
      average: [
        "Focuses on what's missing or unavailable",
        "Becomes melancholic and self-conscious",
        "Struggles with envy and comparison"
      ],
      unhealthy: [
        "Becomes self-destructive",
        "Develops chronic depression",
        "Experiences extreme alienation"
      ]
    },
    strengths: ["Creativity", "Empathy", "Authenticity", "Emotional depth"],
    challenges: ["Melancholy", "Self-absorption", "Envy", "Mood fluctuations"],
    examples: ["I am different and must be special to be loved; the truth is, I am loved for my true self"],
    subtypes: {
      selfPreservation: "Focused on enduring suffering and finding personal meaning through hardship",
      sexual: "Seeks intense, passionate connections and dramatic emotional experiences",
      social: "Expresses uniqueness through cultural or artistic contributions"
    },
    coreBelief: "I must be unique and special to be worthy",
    commonLie: "Something essential is missing in my life",
    color: "bg-[#064E3B]"
  },
  5: {
    name: "The Strategist",
    summary: "Perceptive, innovative, and isolated, Fives are motivated by a need to gain knowledge, conserve energy, and avoid relying on others.",
    traits: ["Analytical and perceptive", "Private and detached", "Intellectual and innovative", "Conservation of resources", "Minimalist and autonomous", "Head Center: Processes the world via their thinking."],
    wings: {
      "5w4": {
        name: "Type 5 wing 4 - The Strategos",
        traits: ["More creative", "Emotionally aware", "Artistic", "Unconventional"],
        description: "Combines Five's intellect with Four's creativity and emotional depth. The meticulous and tactical mind, always seeking solutions to complex problems with unparalleled precision."
      },
      "5w6": {
        name: "Type 5 wing 6 - The Protector",
        traits: ["More practical", "Security-oriented", "Systematic", "Loyal"],
        description: "Combines Five's knowledge-seeking with Six's need for security and structure. The ever-watchful protector, standing strong as the defense of the rebellion’s core values and mission."
      }
    },
    integration: "In growth moves to Type 8 - The Warlord: Gains confidence, assertiveness, and the courage to act decisively rather than just observing.",
    disintegration: "In stress moves to Type 7 - The Maverick: Becomes scattered, impulsive, and disconnected, overindulging in distractions instead of deep focus.",
    healthLevels: {
      healthy: [
        "Becomes visionary and pioneering",
        "Uses knowledge to benefit others",
        "Develops groundbreaking insights"
      ],
      average: [
        "Focuses on accumulating knowledge",
        "Becomes detached and isolated",
        "Struggles with practical matters"
      ],
      unhealthy: [
        "Becomes extremely withdrawn",
        "Develops paranoid tendencies",
        "Experiences severe isolation"
      ]
    },
    strengths: ["Intelligence", "Objectivity", "Innovation", "Expertise"],
    challenges: ["Isolation", "Detachment", "Hoarding", "Overthinking"],
    examples: ["I must have knowledge and control to feel safe; the truth is, I am safe even in uncertainty."],
    subtypes: {
      selfPreservation: "Focused on maintaining physical security and minimizing needs",
      sexual: "Seeks intense intellectual connections and sharing of knowledge",
      social: "Uses expertise to find a role in society"
    },
    coreBelief: "I must be knowledgeable to be worthy",
    commonLie: "I need to withdraw to be safe",
    color: "bg-[#581C87]"
  },
  6: {
    name: "The Sentinel",
    summary: "Committed, security-oriented, and engaging, Sixes are motivated by a need for security, guidance, and to avoid danger.",
    traits: ["Loyal and committed", "Anxious and vigilant", "Questioning and doubting", "Responsible and dutiful", "Security-seeking and cautious", "Head Center: Processes the world via their thinking."],
    wings: {
      "6w5": {
        name: "Type 6 wing 5 - The Guardian",
        traits: ["More analytical", "Reserved", "Intellectual", "Systematic"],
        description: "Combines Six's loyalty with Five's analytical nature and objectivity. The ever-watchful protector, standing strong as the defense of the rebellion’s core values and mission."
      },
      "6w7": {
        name: "Type 6 wing 7 - The Shieldbearer",
        traits: ["More optimistic", "Sociable", "Adventurous", "Engaging"],
        description: "Combines Six's commitment with Seven's enthusiasm and positivity. The loyal companion, offering support and protection, ensuring the survival of the group through unity and strength."
      }
    },
    integration: "In growth moves to Type 9 - The Diplomat: Gains inner peace, trust, and a sense of calm, learning to rely on intuition instead of constant anxiety.",
    disintegration: "In stress moves to Type 3 - The Trailblazer: Becomes image-conscious, competitive, and overly focused on external validation to combat insecurity.",
    healthLevels: {
      healthy: [
        "Becomes courageous and supportive",
        "Develops inner guidance and trust",
        "Creates stable and secure environments"
      ],
      average: [
        "Seeks security and reassurance",
        "Becomes anxious and doubtful",
        "Struggles with trust and authority"
      ],
      unhealthy: [
        "Becomes paranoid and reactive",
        "Develops extreme anxiety",
        "Experiences decision paralysis"
      ]
    },
    strengths: ["Loyalty", "Responsibility", "Problem-solving", "Perseverance"],
    challenges: ["Anxiety", "Doubt", "Over-thinking", "Reactivity"],
    examples: ["I must be prepared and secure to be worthy; the truth is, I am safe, capable, and worthy on my own."],
    subtypes: {
      selfPreservation: "Focused on physical security and worst-case scenarios",
      sexual: "Seeks strong partnerships and protection through relationships",
      social: "Creates alliances and support systems for security"
    },
    coreBelief: "I must be prepared and secure to be worthy",
    commonLie: "I am not safe or worthy unless I have external validation, support, and certainty.",
    color: "bg-[#7C2D12]"
  },
  7: {
    name: "The Maverick",
    summary: "Busy, fun-loving, and spontaneous, Sevens are motivated by a need to be happy, to plan stimulating experiences, and to avoid pain.",
    traits: ["Enthusiastic and optimistic", "Versatile and spontaneous", "Scattered and distractible", "Adventure-seeking and pleasure-oriented", "Future-focused and planning", "Head Center: Processes the world via their thinking."],
    wings: {
      "7w6": {
        name: "Type 7 wing 6 - The Entertainer",
        traits: ["More responsible", "People-oriented", "Loyal", "Engaging"],
        description: "Combines Seven's enthusiasm with Six's commitment and connection to others. The lively spirit who keeps morale high, yet always vigilant and ready to defend the cause when needed."
      },
      "7w8": {
        name: "Type 7 wing 8 - The Warden",
        traits: ["More assertive", "Goal-oriented", "Independent", "Practical"],
        description: "Combines Seven's versatility with Eight's strength and decisiveness. The practical and driven force, balancing pragmatism with strength, ensuring the rebellion’s strategic advancement."
      }
    },
    integration: "In growth moves to Type 5 - The Strategist: Becomes more introspective, focused, and disciplined, learning to sit with discomfort instead of always seeking novelty.",
    disintegration: "In stress moves to Type 1 - The Crusader: Becomes rigid, critical, and perfectionistic, trying to control everything when overwhelmed.",
    healthLevels: {
      healthy: [
        "Becomes focused and appreciative",
        "Channels energy into meaningful pursuits",
        "Finds joy in depth and commitment"
      ],
      average: [
        "Seeks constant stimulation",
        "Becomes scattered and impulsive",
        "Avoids emotional pain"
      ],
      unhealthy: [
        "Becomes extremely scattered",
        "Develops escapist tendencies",
        "Experiences manic behavior"
      ]
    },
    strengths: ["Optimism", "Versatility", "Enthusiasm", "Vision"],
    challenges: ["Impulsivity", "Commitment issues", "Escapism", "Superficiality"],
    examples: ["I must avoid pain and seek pleasure to be happy; the truth is, embracing discomfort leads to true freedom."],
    subtypes: {
      selfPreservation: "Focused on maintaining comfort and avoiding limitation",
      sexual: "Seeks intense experiences and variety in relationships",
      social: "Creates excitement and possibilities in groups"
    },
    coreBelief: "I must be happy and free to be worthy",
    commonLie: "Pain and limitation must be avoided at all costs",
    color: "bg-[#831843]"
  },
  8: {
    name: "The Warlord",
    summary: "Powerful, dominating, and self-confident, Eights are motivated by a need to be strong, to maintain control over their environment, and to avoid vulnerability.",
    traits: ["Assertive and direct", "Protective and commanding", "Self-confident and decisive", "Confrontational and justice-oriented", "Control-seeking and independent", "Gut Center: Processes the world via their instincts."],
    wings: {
      "8w7": {
        name: "Type 8 wing 7 - The Berserker",
        traits: ["More adventurous", "Fun-loving", "Energetic", "Rebellious"],
        description: "Combines Eight's strength with Seven's enthusiasm and adventurousness. The fierce and unrestrained warrior, acting with wild independence while striking fear into their enemies."
      },
      "8w9": {
        name: "Type 8 wing 9 - The Bear",
        traits: ["More diplomatic", "Calm", "Patient", "Reserved"],
        description: "Combines Eight's power with Nine's desire for peace and harmony. The immovable and indomitable force, bringing strength and calm in equal measure to the heart of the rebellion."
      }
    },
    integration: "In growth moves to Type 2 - Guardian: Gains compassion, empathy, and emotional vulnerability, using their strength to protect rather than dominate.",
    disintegration: "In stress moves to Type 5 - The Strategist: Becomes withdrawn, secretive, and overly suspicious, avoiding vulnerability and detaching from others.",
    healthLevels: {
      healthy: [
        "Becomes heroic and magnanimous",
        "Uses power to protect and empower others",
        "Shows genuine vulnerability and tenderness"
      ],
      average: [
        "Focuses on control and dominance",
        "Becomes confrontational and intimidating",
        "Struggles with vulnerability"
      ],
      unhealthy: [
        "Becomes destructive and ruthless",
        "Develops megalomaniac tendencies",
        "Experiences intense rage"
      ]
    },
    strengths: ["Leadership", "Protection", "Decisiveness", "Justice"],
    challenges: ["Excess", "Domination", "Confrontation", "Vulnerability-avoidance"],
    examples: ["I must be strong and in control to avoid being hurt; the truth is, vulnerability is a source of power."],
    subtypes: {
      selfPreservation: "Focused on survival and material security through strength",
      sexual: "Seeks intense, passionate connections and possession in relationships",
      social: "Creates and maintains power structures and influence"
    },
    coreBelief: "I must be strong and in control to be worthy",
    commonLie: "Vulnerability is weakness",
    color: "bg-[#312E81]"
  },
  9: {
    name: "The Diplomat",
    summary: "Easygoing, self-effacing, and receptive, Nines are motivated by a need to keep the peace, merge with others, and avoid conflict.",
    traits: ["Peaceful and accommodating", "Harmonizing and mediating", "Comfortable and steady", "Conflict-avoidant and stubborn", "Self-forgetting and merging", "Gut Center: Processes the world via their instincts."],
    wings: {
      "9w8": {
        name: "Type 9 wing 8 - The Tower",
        traits: ["More assertive", "Independent", "Physical", "Grounded"],
        description: "Combines Nine's peace-seeking with Eight's strength and independence. The stabilizing force of the rebellion, offering peace and security to those around them while exuding quiet power."
      },
      "9w1": {
        name: "Type 9 wing 1 - The Oracle",
        traits: ["More idealistic", "Principled", "Orderly", "Perfectionist"],
        description: "Combines Nine's acceptance with One's idealism and sense of purpose. The peaceful idealist, envisioning a better world with a quiet yet potent drive for change and justice."
      }
    },
    integration: "In growth moves to Type 3 - The Trailblazer: Becomes more ambitious, energetic, and engaged, taking action rather than avoiding conflict.",
    disintegration: "In stress moves to Type 6 - The Sentinel: Becomes anxious, doubtful, and paranoid, losing trust in themselves and those around them.",
    healthLevels: {
      healthy: [
        "Becomes dynamic and engaged",
        "Takes decisive action",
        "Maintains true inner peace"
      ],
      average: [
        "Seeks comfort and routine",
        "Becomes passive and complacent",
        "Avoids conflict and tension"
      ],
      unhealthy: [
        "Becomes severely disengaged",
        "Develops stubborn resistance",
        "Experiences deep resignation"
      ]
    },
    strengths: ["Mediation", "Acceptance", "Stability", "Understanding"],
    challenges: ["Inertia", "Conflict-avoidance", "Self-forgetting", "Stubbornness"],
    examples: ["I must maintain peace to be at ease; the truth is, I am at peace when I am true to myself."],
    subtypes: {
      selfPreservation: "Focused on physical comfort and maintaining routine",
      sexual: "Seeks union and merger in relationships",
      social: "Creates harmony and connection in groups"
    },
    coreBelief: "I must maintain peace to be worthy",
    commonLie: "Conflict and tension must be avoided",
    color: "bg-[#134E4A]"
  }
};

export default function TypeDetail({ typeNumber}: TypeDetailProps) {
  const typeData = typeData || {};  // ✅ Prevents "undefined" errors
  const type = typeData[typeNumber as keyof typeof typeData];

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Overview
        </Link>
      </motion.div>
    </div>
  
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          Wings
          <Tooltip>
            <TooltipTrigger className="ml-2 text-gray-400 text-sm cursor-pointer leading-none">
              <span className="inline-block px-1 py-0.5 border border-gray-400 rounded-full">?</span>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 text-gray-200 text-sm font-normal px-3 py-1 rounded-md shadow-lg">
              Personalities are often influenced by a neighboring type, creating sub-types.
            </TooltipContent>
          </Tooltip>
        </h2>
        <div className="space-y-4">
          {Object.entries(type.wings).map(([wingKey, wing]) => (
            <div 
              key={wingKey} 
              className="block p-4 rounded-lg bg-secondary hover:bg-gray-600"
            >
              <h3 className="text-xl font-semibold mb-2">{wing.name}</h3>
              <p className="text-sm text-muted-foreground">{wing.description}</p>
              <div className="mt-2">
                <strong>Traits:</strong>
                <ul className="list-disc pl-5">
                  {wing.traits.map((trait, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
        {/* Instinctual Subtypes Section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-card rounded-lg p-6 col-span-2"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            Instinctual Subtypes
            <Tooltip>
              <TooltipTrigger className="ml-2 text-gray-400 text-sm cursor-pointer leading-none">
                <span className="inline-block px-1 py-0.5 border border-gray-400 rounded-full">?</span>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 text-gray-200 text-sm font-normal px-3 py-1 rounded-md shadow-lg">
                The three instinctual subtypes shape how a person directs their energy in life.
              </TooltipContent>
            </Tooltip>
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Self-Preservation</h3>
              <p>{type.subtypes.selfPreservation}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Sexual</h3>
              <p>{type.subtypes.sexual}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Social</h3>
              <p>{type.subtypes.social}</p>
            </div>
          </div>
        </motion.div>

        {/* Core Beliefs & Patterns */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-card rounded-lg p-6 col-span-2"
        >
          <h2 className="text-2xl font-semibold mb-4">Core Beliefs & Patterns</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Belief</h3>
              <p className="text-lg">{type.coreBelief}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Common Lie</h3>
              <p className="text-lg">{type.commonLie}</p>
            </div>
          </div>
        </motion.div>

      </motion.div>  
    </div>  
  );
}
