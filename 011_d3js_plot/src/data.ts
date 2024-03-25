export type coordsType = number[][];

export function generateDataset(): coordsType {
  return Array(20)
    .fill(0)
    .map(() => [Math.random() * 490 + 10, Math.random() * 380]);
}
