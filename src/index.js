function setKeys(src, dest) {
  const newDest = {};

  Object.entries(src).forEach(([key, value]) => {
    const type = typeof value;
    const destValue = dest[key];
    if (type === "string") return (newDest[key] = destValue || "");
    if (type === "object") {
      newDest[key] = setKeys(value, destValue || {});
      return;
    }
    throw new Error(`Unexpected type ${type} in ${value}`);
  });
  return newDest;
}

module.exports = function msgMergeJson(src, dest) {
  return setKeys(src, dest);
};
