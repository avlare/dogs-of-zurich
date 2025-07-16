import dataSourceConfig from "../dataSourceConfig";

const thirdReport = {
  dataSource: dataSourceConfig,
     slice: {
        rows: [
            {
                uniqueName: "RASSE1",
                filter: {
                    measure: {
                        uniqueName: "HALTER_ID",
                        aggregation: "count"
                    },
                    query: {
                        top: 10
                    }
                }
            }
        ],
        columns: [
            {
                uniqueName: "GEBURTSJAHR_HUND",
                filter: {
                   query: {
                        between: [2010, 2015]
                    }
                }
            },
            {
                uniqueName: "[Measures]"
            }
        ],
        measures: [
            {
                uniqueName: "HALTER_ID",
                aggregation: "count"
            }
        ],
    },
};

export default thirdReport;