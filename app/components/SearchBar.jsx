const SearchBar = () => {
  return (
    <div className="p-6 w-full flex items-center">
      <svg
       className="-mr-6 z-10"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 11L14 14M2 7.14286C2 7.81823 2.13302 8.48698 2.39148 9.11094C2.64993 9.7349 3.02875 10.3018 3.50631 10.7794C3.98387 11.257 4.55081 11.6358 5.17477 11.8942C5.79873 12.1527 6.46749 12.2857 7.14286 12.2857C7.81823 12.2857 8.48698 12.1527 9.11094 11.8942C9.7349 11.6358 10.3018 11.257 10.7794 10.7794C11.257 10.3018 11.6358 9.7349 11.8942 9.11094C12.1527 8.48698 12.2857 7.81823 12.2857 7.14286C12.2857 5.77889 11.7439 4.47078 10.7794 3.50631C9.81493 2.54184 8.50683 2 7.14286 2C5.77889 2 4.47078 2.54184 3.50631 3.50631C2.54184 4.47078 2 5.77889 2 7.14286V7.14286Z"
          stroke="#0D0D0D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className="pl-8 py-2 placeholder:text-sm text-sm outline-gray-200"
        placeholder="Search Candidates"
      ></input>
    </div>
  );
};
export default SearchBar;
