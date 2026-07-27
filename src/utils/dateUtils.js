export function getCurrentMonth() {
  return new Date().toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });
}

export function getToday() {
  const today = new Date();

  return today.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}