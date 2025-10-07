export const colors = {
  primary: "#0a0a0a",
  textGray: "#808080",
  grayLight: "#BFBFBF",
  link: "#3B82F6",
  success: "#474747",
  black: "#000000",
  white: "#FFFFFF",
  blue: "#0000FF",
  yellow: "#FFC107"
};


export function hexToRgba(hex: string, alpha: number) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${alpha})`;
}
