let idCounter = 0;
export function useId(prefix = 'id') {
  const id = `${prefix}-${idCounter++}`;
  return id;
}
