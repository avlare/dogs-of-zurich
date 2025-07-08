import dataSourceConfig from "../dataSourceConfig";

const firstReport = {
  dataSource: dataSourceConfig,
  slice: {
    rows: [
      { uniqueName: "STADTKREIS" },
      { uniqueName: "RASSE1" },
    ],
    measures: [
      {
        uniqueName: "HALTER_ID",
        aggregation: "count"
      }
    ],
    expands: {
      rows: [
        {
          tuple: [ "STADTKREIS.[3]" ]
        }
      ]
    }
  },
  options: {
    grid: {
      type: "classic"
    }
  }
};

export default firstReport;