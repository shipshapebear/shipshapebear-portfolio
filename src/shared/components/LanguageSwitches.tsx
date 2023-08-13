import * as React from "react";
import { navigate } from "gatsby";

import { linkResolver } from "@utils/linkResolver";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/Select"


export const LanguageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta?.lang;
  const currentLangOption = (
    <SelectItem value={currentLang}>{currentLang?.slice(0, 2).toUpperCase()}</SelectItem>
  );

  const alternateLangOptions = activeDocMeta?.alternateLanguages?.map(
    (altLang, index) => (
      <SelectItem value={linkResolver(altLang)} key={`alt-lang-${index}`}>
        {altLang.lang.slice(0, 2).toUpperCase()}
      </SelectItem>
    )
  );

  const handleLangChange = (event) => {
    navigate(event)
  };



  return (
    // <select value={currentLang} onChange={handleLangChange}>
    //   {currentLangOption}
    //   {alternateLangOptions}
    // </select>
    <Select onValueChange={handleLangChange} defaultValue={currentLang}>
      <SelectTrigger className="w-[40px]">
        <SelectValue placeholder="Select" className=" font-bold" />
      </SelectTrigger>
      <SelectContent position="popper">
        {currentLangOption}
        {alternateLangOptions}
      </SelectContent>
    </Select>

  );
};
