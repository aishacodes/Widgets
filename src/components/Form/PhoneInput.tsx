import React, { useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { callingCodes } from "../../../services";
import countries from "../../../services/countries";
import { generateId } from "../../../utils";
import CaretDown from "../../vectors/CaretDown";

interface PropTypes {
  label?: string;
  placeholder?: string;
  code: string | number;
  value?: string;
  codeChange?: Function;
  valueChange?: Function;
}
const PhoneInput = ({
  label = "",
  placeholder = "00 0000 0000",
  code,
  value,
  codeChange = () => {},
  valueChange = () => {},
}: PropTypes) => {
  const [id] = useState(generateId());
  // const [selected, setSelected] = useState({
  //   name: "Nigeria",
  //   alpha3Code: "NGA",
  //   flag: "🇳🇬",
  //   callingCode: "234",
  // });
  const [selectOpen, setSelectOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);
  useClickAway(ref, () => setSelectOpen(false));

  const handleInput = (e: any) => {
    let text = e.target.value;

    text = text.replace(/[\D ]/g, "");

    if (text.trim().length > 2) {
      text = `${text.trim().slice(0, 2)} ${text.trim().slice(2)}`;
    }
    if (text.trim().length > 7) {
      text = `${text.trim().slice(0, 7)} ${text.trim().slice(7)}`;
    }

    valueChange(text);
  };

  const handleSelectCode = (code: string | number) => {
    codeChange(code);
    setSelectOpen(false);
  };

  const selected = callingCodes.find((country) => country.callingCode === code);

  const filteredCallingCodes = query.trim()
    ? callingCodes.filter((country) =>
        country.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : callingCodes;
  // country.callingCode.includes(query.replace(/\D+/g, ""));

  return (
    <div className="flex flex-col space-y-2 w-full md:auto ">
      <label className="font-light text-base">{label}</label>
      <div className="border h-12 rounded border-[#DDE2E5] focus-within:border-[#138EFF] w-full flex items-center text-base font-normal px-4 relative select-none">
        <div
          className="flex items-center space-x-[0.3125rem] mr-3 cursor-pointer"
          onClick={() => setSelectOpen(!selectOpen)}
        >
          {/* {selected?.flag || ""} */}+{selected?.callingCode || ""}
          <CaretDown />
        </div>
        <input
          required={true}
          type="tel"
          autoComplete="phone"
          onInput={handleInput}
          value={value}
          placeholder={placeholder}
          maxLength={12}
          className="outline-none pl-3 border-[#DDE2E5] border-l focus:outline-none flex-grow w-full "
        />
        {selectOpen && (
          <div
            className="w-full rounded absolute top-[100%] left-0 bg-white shadow1 py-2 border border-gray-100 z-10"
            ref={ref}
          >
            <div className="px-2">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="border-[#DDE2E5] rounded border focus:outline-none w-full py-1 px-2 mb-2"
              />
            </div>
            <div className="max-h-48 overflow-y-auto px-1">
              {filteredCallingCodes.map((country, countryIndex) => (
                <div
                  key={`calling_code-${id}_${countryIndex}`}
                  className="flex items-center justify-between w-full py-1 px-2 hover:bg-[#E7F4FF] rounded bg-opacity-25 cursor-pointer"
                  onClick={() => handleSelectCode(country.callingCode)}
                >
                  <span className="text-sm font-medium flex items-center">
                    {country.flag} {country.name}
                  </span>
                  <span>+{country.callingCode}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
