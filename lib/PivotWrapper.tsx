'use client'
import * as React from 'react';
// FM must be imported like this so we can use refs
import * as FlexmonsterReact from "react-flexmonster";
import Flexmonster from 'flexmonster';
import "flexmonster/lib/flexmonster.highcharts.js";

// A custom type so we can pass a reference along with other Flexmonster params
type PivotProps = Flexmonster.Params & {
    ref?: React.Ref<FlexmonsterReact.Pivot>;
  }
  
const PivotWrapper: React.FC<PivotProps> = ({ ref, ...fmConfigs}) => {
    return (
        <FlexmonsterReact.Pivot
            {...fmConfigs}
            ref={ref}
        />
    )
}

export default PivotWrapper;