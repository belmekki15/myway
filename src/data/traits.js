// Seven trait dimensions used everywhere: questions add to them, fields/careers are profiled on them.
export const TRAIT_INFO = {
  L: { label: "Logic",       skill: "structured problem-solving", vibe: "methodical and calm with complexity", drive: "likes having a clear answer to work toward" },
  T: { label: "Technical",   skill: "technical and digital skills", vibe: "curious about tools and systems", drive: "learns by building and testing things" },
  C: { label: "Creativity",  skill: "creative thinking", vibe: "imaginative and open to new angles", drive: "needs room to make something original" },
  P: { label: "People",      skill: "communication and empathy", vibe: "warm, attentive and easy to talk to", drive: "is motivated by the difference made to others" },
  O: { label: "Leadership",  skill: "planning and leadership", vibe: "organised and comfortable taking charge", drive: "enjoys turning a goal into a plan that people follow" },
  R: { label: "Research",    skill: "analysis and research", vibe: "curious, patient and detail-minded", drive: "wants to understand why things work before acting" },
  H: { label: "Practical",   skill: "hands-on and practical skills", vibe: "energetic and down-to-earth", drive: "prefers real, tangible results over pure theory" },
};
export const TRAITS = Object.keys(TRAIT_INFO);