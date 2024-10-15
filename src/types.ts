export type QuestionType = "inputPrompt" | "tpsuggester" | "indexedManual" | "checkbox" | "multiSelect";

export interface BaseQuestion {
  type: QuestionType;
  prompt: string;
  answerId: string;
  defaultValue?: string | boolean;
}

export interface InputPromptQuestion extends BaseQuestion {
  type: "inputPrompt";
}

export interface TpSuggesterQuestion extends BaseQuestion {
  type: "tpsuggester";
  options?: string[];
  indexPath?: string;
  allowNewEntry?: boolean;
}

export interface IndexedManualQuestion extends BaseQuestion {
  type: "indexedManual";
  indexPath: string;
  allowNewEntry?: boolean;
}

export interface CheckboxQuestion extends BaseQuestion {
  type: "checkbox";
  defaultValue?: boolean;
}

export interface MultiSelectQuestion extends BaseQuestion {
  type: "multiSelect";
  options?: string[];
  indexPath?: string;
  allowNewEntry?: boolean;
  min?: number;
  max?: number;
}

export type Question =
  | InputPromptQuestion
  | TpSuggesterQuestion
  | IndexedManualQuestion
  | CheckboxQuestion
  | MultiSelectQuestion;

export type Answer = string | string[] | boolean;