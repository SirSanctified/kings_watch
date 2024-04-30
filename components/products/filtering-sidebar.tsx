const FilteringSidebar = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {/* By Category */}
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="category"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      {/* By Price */}
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="price"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Price
        </label>
        <input
          id="price"
          name="price"
          type="range"
          min="0"
          max="100"
          step="10"
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      {/* By oldest/newest */}
      <div className="w-auto md:w-full flex flex-col space-y-1">
        <label
          htmlFor="sorting"
          className="text-lg font-medium text-gray-800 dark:text-white"
        >
          Sort By
        </label>
        <select
          id="sorting"
          name="sorting"
          className="max-w-40 md:max-w-md w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select an option</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default FilteringSidebar;
