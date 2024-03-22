export type coordsType = number[][];

export function generateDataset(): coordsType {
  return Array(30)
    .fill(0)
    .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10]);
}
