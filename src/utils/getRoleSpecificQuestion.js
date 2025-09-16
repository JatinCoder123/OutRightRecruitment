import {
  SEOQuestions,
  QAQuestions,
  UIUXQuestions,
  FrontendQuestions,
  BackendQuestions,
  CRMQuestions,
  WordPressQuestions,
  AppScriptQuestions,
} from "../assets/assests";

// Utility function to shuffle an array randomly
const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export default function getRoleSpecificQuestions(role) {
  let questions = [];

  switch (role) {
    case "SEO":
      questions = SEOQuestions;
      break;
    case "Frontend Developer":
      questions = FrontendQuestions;
      break;
    case "Backend Developer":
      questions = BackendQuestions;
      break;
    case "WordPress Developer":
      questions = WordPressQuestions;
      break;
    case "CRM":
      questions = CRMQuestions;
      break;
    case "QA":
      questions = QAQuestions;
      break;
    case "UI/UX":
      questions = UIUXQuestions;
      break;
    case "App Script":
      questions = AppScriptQuestions;
      break;
    default:
      questions = [];
  }

  // Shuffle the questions before returning
  return shuffleArray(questions);
}
