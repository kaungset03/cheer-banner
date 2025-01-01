declare global {
  interface TextConfig {
    text: string;
    fontSize: number;
    fontFamily: string;
    textColor: string;
    bgColor: string;
  }

  interface AnimationConfig {
    animationType: string;
    animationSpeed: number;
  }

  interface SavedBanner {
    id: string;
    text: string;
    fontSize: number;
    fontFamily: string;
    textColor: string;
    bgColor: string;
    animationType: string;
    animationSpeed: number;
    savedAt: Date;
    order: number;
  }
}

export {};
