"use client"
import * as React from "react";
import dynamic from "next/dynamic";
import type { Pivot } from "react-flexmonster";

import firstReport from "@/lib/reports/firstReport";
import secondReport from "@/lib/reports/secondReport";
import thirdReport from "@/lib/reports/thirdReport";

import customizeCellFunction from "@/lib/customizeCell";

import { createBarChart } from "@/lib/createChart";


const FlexmonsterPivot = dynamic(() => import('@/lib/PivotWrapper'), {
  ssr: false,
  loading: () => <h1>Loading Flexmonster...</h1>
});


export default function Dashboard() {
  const pivotRef1 = React.useRef<Pivot>(null);
  const pivotRef2 = React.useRef<Pivot>(null);
  const pivotRef3 = React.useRef<Pivot>(null);

  const reportComplete = () => {
    pivotRef3.current!.flexmonster.off("reportComplete", reportComplete);
    createBarChart(pivotRef3.current!);
  }

  return (
    <div className="page-container">
      <div>
        <h2 className="pivot-title">
          1. How many dogs of a specific breed live in each city district?
        </h2>
        <div>
          <FlexmonsterPivot
            ref={pivotRef1}
            height="900"
            width="650"
            toolbar={true}
            report={firstReport}
            licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
          />
        </div>
      </div>
      <div className="right-panel">
        <h2 className="pivot-title">
          2. How does the popularity of the top dog breeds vary across different age groups of dog owners in Zurich?
        </h2>
        <FlexmonsterPivot
          ref={pivotRef2}
          height="400"
          customizeCell={customizeCellFunction}
          report={secondReport}
          licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        />
        <h2 className="pivot-title">
          3. What are the top 10 most popular breeds born in 2010-2015?
        </h2>
        <div style={{ visibility: "hidden" }}>
          <FlexmonsterPivot
            ref={pivotRef3}
            height="0"
            report={thirdReport}
            reportcomplete={reportComplete}
            licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
          />
        </div>
        <div id="highcharts-container"></div>
      </div>
    </div>
  );
}
