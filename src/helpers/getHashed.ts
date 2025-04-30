export default function idToNumberHash(str = ''): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  const fullHash = hash >>> 0;
  return fullHash % 100_000;
}
