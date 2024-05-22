class helperServices {
  searchObject(obj, term, parentObj = null) {
    let isFound = false;
    Object.entries(obj).forEach(([key, value]) => {
      if (!isFound) {
        if (Array.isArray(value)) {
          value.forEach((el) => this.searchObject(el, term, obj));
        } else if (typeof value === "object" && value) {
          this.searchObject(value, term);
        } else if (
          typeof value === "string" &&
          value.toLowerCase().includes(term)
        ) {
          results.push(parentObj ?? obj);
          isFound = true;
        }
      }
    });
  }
}

export default helperServices = new helperServices();