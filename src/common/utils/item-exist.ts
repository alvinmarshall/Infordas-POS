const valueStrExists = (payload: string, match: string) => {
  if (payload.includes(match)) return true;
  return false;
};
export default valueStrExists;
