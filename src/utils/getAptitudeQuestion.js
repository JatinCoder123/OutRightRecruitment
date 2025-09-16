import {
  basicQuestions,
  intermediateQuestions,
  advancedQuestions,
} from "../assets/assests.js";
import { profiles } from "../assets/assests.js";

export const getAptitudeQuestions = (role) => {
  // Find the profile object for the given role
  const profile = profiles.find((p) => p.name === role);
  if (!profile) return []; // return empty array if role not found

  const level = profile.aptiLevel.toLowerCase();

  if (level === "basic") {
    return basicQuestions;
  }

  if (level === "intermediate") {
    return intermediateQuestions;
  }

  if (level === "advanced") {
    // Function to get random n elements from array
    const getRandom = (arr, n) => {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    const randomIntermediate = getRandom(intermediateQuestions, 10);
    const randomAdvanced = getRandom(advancedQuestions, 10);

    return [...randomIntermediate, ...randomAdvanced];
  }

  return [];
};
