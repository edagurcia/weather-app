export const longDate = (val) => {
  const date = new Date(val);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "GMT",
  };

  return date.toLocaleDateString("es-MX", options);
};

export const shortDate = (val) => {
  const date = new Date(val);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "GMT",
  };

  return date.toLocaleDateString("es-MX", options);
};

export const dayMonthDate = (val) => {
  const date = new Date(val);
  const options = {
    month: "2-digit",
    day: "2-digit",
    timeZone: "GMT",
  };

  return date.toLocaleDateString("es-MX", options);
};

export const stringDate = (val) => {
  const date = new Date(val);

  return date.toISOString().split("T")[0];
};

export const actualDate = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "GMT",
  };

  return date.toLocaleDateString("es-MX", options);
};
