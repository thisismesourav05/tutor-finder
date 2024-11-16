"use client";

import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TransitionalText() {
  const TEXTS = [
    "Guru",
    "Tutor",
    "Instructor ",
    "Master",
    "Educationist",
    "Trainer",
    "Coach",
    "Professor",
    " Teacher",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 1 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span className="text-sky-500 mr-2">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </span>
  );
}
