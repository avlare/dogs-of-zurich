import type { Pivot } from "react-flexmonster";
import Highcharts from "highcharts";


export function createBarChart(pivot: Pivot) {
  pivot.flexmonster.highcharts?.getData(
    { type: "bar" },
    (data: any) => Highcharts.chart("highcharts-container", data),
    (data: any) => Highcharts.chart("highcharts-container", data)
  );
}

export default createBarChart;