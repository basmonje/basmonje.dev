import { Search as IconSearch } from "@basmonje/lib-icon";

const Search = ({ name, value, onChange, placeholder }) => (
  <div className="flex flex-row items-center gap-1 bg-black-50 dark-bg-white-50 overflow-hidden radius-2 py-4 px-5">
    <label htmlFor={name} className="flex items-center">
      <IconSearch />
    </label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="flex w-full py-2 pl-5 pr-3 b-0 bg-transparent outline-transparent"
    />
  </div>
);

export default Search;
