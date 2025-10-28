import { create } from "zustand";
import { persist } from "zustand/middleware";


type LangStore = {
    lang: string;
    x:number;
    y:number;
    q:number;
    changeLang: (newLang:string)=>void;
}

export const useLangStore = create<LangStore>()(persist((set) => ({
  lang: 'en',
  x: 10,
  y:20,
  q:50,
  changeLang: (newLang)=>{set(() => ({lang: newLang}))}
}), {
  name: 'lang',
  partialize:(state)=>({
    lang:state.lang
  })
}))


//!======================================================


export const selectChangeLang = (state:LangStore) => state.changeLang;
export const selectLang = (state:LangStore) => state.lang;

