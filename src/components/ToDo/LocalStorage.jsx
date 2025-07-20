export const getLocalStorage = () => {
  const rawData = localStorage.getItem("ToDoKey");
  if (!rawData || rawData === "undefined") return [];
  return JSON.parse(rawData);
};

export const setLocalStorage = (items) => {
  return localStorage.setItem("ToDoKey", JSON.stringify(items));
};
