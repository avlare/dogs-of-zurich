import tinycolor from "tinycolor2";

const colorScheme = [
  "#DF3800",
  "#FF6D1E",
  "#FF9900",
  "#FFB600",
  "#A5CE31",
  "#6CBD05",
  "#00A45A",
];

const minValue = 0;
const maxValue = 120;

const customizeCellFunction = (cell: Flexmonster.CellBuilder, data: Flexmonster.CellData) => {
  if (data.measure && !data.isGrandTotal) {
    let backgroundColor = getColorFromRange(data.value!);
    let textShadowColor = tinycolor(backgroundColor).darken(15).toString();
    let borderColor = tinycolor(backgroundColor).darken(10).toString();

    cell.style = {
      ...cell.style,
      "background": backgroundColor,
      "color": "white",
      "font-weight": "bold",
      "text-shadow": `0px 2px 3px ${textShadowColor}`,
      "border-bottom": `1px solid ${borderColor}`,
      "border-right": `1px solid ${borderColor}`,
    };
  }
}

function getColorFromRange(value: number): string {
  if (isNaN(value)) {
    value = minValue;
  }
  value = Math.max(minValue, Math.min(value, maxValue));
  const perc = (value - minValue) / (maxValue - minValue);
  const colorIdx = Math.round((colorScheme.length - 1) * perc);
  return colorScheme[colorIdx];
}

export default customizeCellFunction;