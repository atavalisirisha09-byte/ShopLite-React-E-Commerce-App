import { useRef } from "react";

const SearchBar = () => {

  const inputRef = useRef();

  const search = () => {
    alert(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={search}>
        Search
      </button>
    </>
  );
};

export default SearchBar;