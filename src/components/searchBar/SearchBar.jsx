import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { toast } from "sonner";
import { useApp } from "../../hooks";
import { SearchBarContainer, SearchInputContainer } from "./style";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const { startGetWeatherByCity } = useApp();

  const onSubmit = (e) => {
    e.preventDefault();

    if (search === "") {
      toast.error("Please provide a city name");
      return;
    }

    startGetWeatherByCity(search);
  };

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        <label htmlFor="searchId">Search by city name</label>
        <form onSubmit={onSubmit}>
          <input
            type="search"
            name="search"
            id="searchId"
            placeholder="Example: new york"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            maxLength={35}
            minLength={3}
          />
          <button type="submit">
            <MdSearch />
          </button>
        </form>
      </SearchInputContainer>
    </SearchBarContainer>
  );
};
