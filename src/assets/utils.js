export const space = (s) => {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};

export const NWC = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
