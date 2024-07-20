import { useRef, useState } from "react";
import Weather from "./Weather";
export default function Form() {
  const [city, setCity] = useState(`Sudan`);

  const inputRef = useRef();
  function clickHandle(e) {
    e.preventDefault();
    setCity(inputRef.current.value);
  }
  // }
  return (
    <>
      <form>
        <div className="flex justify-between">
        <div className="flex gap-x-4 p-2 ">
          <label htmlFor="country" className="font-bold">Country</label>
          <input ref={inputRef} type="text" name="country" id="country" className="rounded-md"/>
        </div>
        <button type="submit" className="bg-black p-2 rounded-md" onClick={clickHandle}>
          Search
        </button>
        </div>
      </form>
      <Weather country={city} />
    </>
  );
}
