"use client";

import { useLangStore } from "@/stores/langStore";

const Lang = () => {
  const { lang } = useLangStore();
  return <p>Lang: {lang}</p>;
};

export default Lang;
