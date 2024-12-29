declare global {
  interface TextConfig {
    fontSize: number;
    fontFamily: string;
    textColor: string;
    bgColor: string;
  }

  interface AnimationConfig {
    animationType: string;
    animationSpeed: number;
  }
}

export {};
