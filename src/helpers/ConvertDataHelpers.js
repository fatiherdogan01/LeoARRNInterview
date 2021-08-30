export function returnDataWithoutKeys(data) {
  return Object.values(data);
}

export function returnDataUniqueArray(data, arrayName = "tags") {
  const x = returnDataWithoutKeys(data);
  let items = [];
  x.map((value) => {
    value[arrayName].map((i) => {
      items.push(i);
    });
  });
  return [...new Set(items)];
}
