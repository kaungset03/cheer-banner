declare global {
  interface TextConfig {
    fontSize: number;
    fontFamily: string;
    textColor: string;
    bgColor: string;
  }

  interface AnimationConfig {
    animation: "left_to_right" | "right_to_left" | "scale" | "fade";
    speed: number;
  }
}

export {};
