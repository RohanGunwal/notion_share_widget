export default function SearchBar() {
  return (
    <div className="searchBar_wrapper | flex-1">
      <input
        type="search"
        placeholder="People, emails, groups"
        className="border w-full rounded-l-lg px-4 py-2 focus:outline-none font-semibold hover:cursor-pointer"
      />
    </div>
  );
}
