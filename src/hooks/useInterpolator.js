export default function useInterpolator({ x, up, down }) {
  const interpolate = (x, x1, x2, y1, y2) => {
    return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
  };

  const value = interpolate(x, up, down, 50, 0);

  return { value };
}
