export function filterEmptyKey(obj: any) {
  const keys: string[] = Object.keys(obj).filter(
    (key) => obj[key] !== '' && obj[key],
  );
  const newObj: any = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
