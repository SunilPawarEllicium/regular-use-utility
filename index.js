import { helperServicesClass } from "./services";

function testNpm() {
  console.log("Hello utility");
}
/**
 * Searches for objects in the given array that contain the specified search term.
 * @param {Array} array - The array of objects to search.
 * @param {string} searchTerm - The search term to look for.
 * @returns {Array} An array containing objects that match the search term.
 */
export const handleGlobalRowSearch = (array, searchTerm) => {
  const results = [];

  if (typeof searchTerm !== "string" || !Array.isArray(array)) return [];
  array.forEach((obj) =>
    helperServicesClass.searchObject(obj, searchTerm.toLowerCase())
  );
  return results;
};
export default regUseUtility = {
  testNpm,
  handleGlobalRowSearch,
};
