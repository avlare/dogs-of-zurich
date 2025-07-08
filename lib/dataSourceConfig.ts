const dataSourceConfig = {
  type: "api",
  url: "http://localhost:9500",
  index: "dogs_of_zurich",
  mapping: {
    "HALTER_ID": { caption: "Owner ID" },
    "ALTER": { caption: "Owner Age" },
    "GESCHLECHT": { caption: "Owner Gender" },
    "STADTKREIS": { caption: "City District" },
    "STADTQUARTIER": { caption: "Neighborhood" },
    "RASSE1": { caption: "Breed 1" },
    "RASSE1_MISCHLING": { caption: "Breed 1 Mixed" },
    "RASSE2": { caption: "Breed 2" },
    "RASSE2_MISCHLING": { caption: "Breed 2 Mixed" },
    "RASSENTYP": { caption: "Breed Type" },
    "GEBURTSJAHR_HUND": { caption: "Dog Birth Year" },
    "GESCHLECHT_HUND": { caption: "Dog Gender" },
    "HUNDEFARBE": { caption: "Dog Color" }
  }
};

export default dataSourceConfig;