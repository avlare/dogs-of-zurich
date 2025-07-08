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
                    members: [
                        "geburtsjahr_hund.[2010]",
                        "geburtsjahr_hund.[2011]",
                        "geburtsjahr_hund.[2012]",
                        "geburtsjahr_hund.[2013]",
                        "geburtsjahr_hund.[2014]",
                        "geburtsjahr_hund.[2015]"
                    ]
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