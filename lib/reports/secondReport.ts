import dataSourceConfig from "../dataSourceConfig";

const secondReport = {
  dataSource: dataSourceConfig,
  slice: {
    columns: [{ uniqueName: "RASSE1",
             filter: {
                members: [
                  "RASSE1.[Labrador Retriever]",
                  "RASSE1.[Chihuahua]",
                  "RASSE1.[Pudel]",
                  "RASSE1.[Jack Russel Terrier]",
                  "RASSE1.[Yorkshire Terrier]",
                  "RASSE1.[Mops]",
                ]
              }
     }],
    rows: [{ uniqueName: "ALTER" }],
    measures: [
      {
        uniqueName: "HALTER_ID",
        aggregation: "count"
      }
    ],
  }
};

export default secondReport;