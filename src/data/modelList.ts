export enum modelStatus {
  Active = "Active",
  Discontinued = "Discontinued",
}

export type modelListTypes = {
  id: string;
  name: string;
  modelStatus: string;
  link: string;
};

const htpBoilerList: modelListTypes[] = [
  {
    id: "RGH-F",
    name: "Crossover (RGH) Floor",
    modelStatus: modelStatus.Active,
    link: "https://htproducts.com/RGH75100-documents.html",
  },
  {
    id: "ELU",
    name: "Elite Ultra Wall and Floor",
    modelStatus: modelStatus.Active,
    link: "https://htproducts.com/elite-ultra-documents.html",
  },
  {
    id: "ELUD",
    name: "Elite Ultra Duo",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/eliteultraduo-documents.html",
  },
  {
    id: "EFTU",
    name: "Elite Fire Tube Ultra",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/elite-fire-tube-ultra-documents.html",
  },
  {
    id: "ELX",
    name: "Elite XL Boiler",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/elitexl-documents.html",
  },
  {
    id: "PH",
    name: "Pheonix Gas Fired WH",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/phoenixdocuments.html",
  },
  {
    id: "PH76",
    name: "Pheonix Gas Fired Light Duty",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/phoenixlddocuments.html",
  },
  {
    id: "PHM",
    name: "Pheonix Gas Fired Multi-Fit",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/Phoenix-Multi-Fit-documents.html",
  },
  {
    id: "PHP",
    name: "Pheonix Gas Fired Plus",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/phoenixplusdocuments.html",
  },
  {
    id: "PHR",
    name: "Pioneer",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/pioneerdocuments.html",
  },
  {
    id: "RGH-W",
    name: "Crossover (RGH) Wall",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/crossover-documents-dis.html",
  },
  {
    id: "CGH",
    name: "Crossover Commercial",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/crossover-commercial-documents-dis.html",
  },
  {
    id: "EFTC-W",
    name: "EFT Combination Boiler (Wall)",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/EFT_Combination_Wall_Dis.html",
  },
  {
    id: "EFTC-F",
    name: "EFT Combination Boiler (Floor)",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/EFT_Combination_Floor_Dis.html",
  },
  {
    id: "EL",
    name: "Elite Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/elite-dis.html",
  },
  {
    id: "EFT",
    name: "Elite FT Heating Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/eft-documents-dis.html",
  },
  {
    id: "EP",
    name: "Elite Premiere Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/elitepremier.html",
  },
  {
    id: "EP-VHW",
    name: "Elite VWH",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/elite-premier-vwh-documents-dis.html",
  },
  {
    id: "ETI",
    name: "Endurati Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/EnduroTi-documents-dis.html",
  },
  {
    id: "RT",
    name: "Hydra Smart RT",
    modelStatus: modelStatus.Discontinued,
    link: " https://www.htproducts.com/hydrasmart-residential-documents.html",
  },
  {
    id: "RTC",
    name: "Hydra Smart RTC",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/hydrasmart-RTC-documents.html",
  },
  {
    id: "MC",
    name: "MC Series",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/mcseriesdocuments.html",
  },
  {
    id: "MODCON",
    name: "Commercial Gas Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/modcon-dis.html",
  },
  {
    id: "MODCON-VWH",
    name: "Commercial Volume Water Heater",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/modcon-vwh-dis.html",
  },
  {
    id: "MODCON-Double",
    name: "Stacked Gas Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/modcon-ds-dis.html",
  },
  {
    id: "MODCON-Double-VWH",
    name: "Stacked Volume Water Heater",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/modcon-dsvwh-dis.html",
  },
  {
    id: "MUNCHKIN Rev-2",
    name: "80m-399m began 12/20/2006 - T50-T80M began 1/4/2007",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/literature/lp-185.pdf",
  },
  {
    id: "MUNCHKIN Rev-1",
    name: "began 11/11/2004",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/literature/lp-61.pdf",
  },
  {
    id: "MUNCHKIN Pre-Rev",
    name: "'Blinky board' ended/925 began 11/1/2002",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/literature/lp-61r.pdf",
  },
  {
    id: "UFT",
    name: "UFT Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/uft-documents-dis.html",
  },
  {
    id: "UFTC",
    name: "UFT Combi Boiler",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/UFT-Combination-Documents-dis.html",
  },
  {
    id: "PHE",
    name: "Versa Hydro",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/versahydrodocuments-dis.html",
  },
  {
    id: "SSV",
    name: "Voyager",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/voyager-dis.html",
  },
];

const htpTankList: modelListTypes[] = [
  {
    id: "SSC",
    name: "INDIRECT Superstor Contender Titanium",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/superstorcontenderdocuments.html",
  },
  {
    id: "SSC-TC",
    name: "INDIRECT Superstor Contender Titanium",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/superstor-contender-titanium-documents.html",
  },
  {
    id: "SSU-N",
    name: "INDIRECT Stainless Steel Superstor Ultra",
    modelStatus: modelStatus.Active,
    link: "https://htproducts.com/superstorultradocuments.html",
  },
  {
    id: "SSU-CB",
    name: "STORAGE Stainless Steel",
    modelStatus: modelStatus.Discontinued,
    link: "https://www.htproducts.com/superstorultratankdocuments.html",
  },
  {
    id: "MSSU",
    name: "INDIRECT Superstor Ultra Max",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/superstorultramax-documents.html",
  },
  {
    id: "MSSU-SE",
    name: "INDIRECT Superstor Ultra Max Multi-Use w/ element",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/superstorultramax-multisource-documents.html",
  },
  {
    id: "GL",
    name: "Glass Lined Storage Tank",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/glasslinedtankdocuments.html",
  },
  {
    id: "SR",
    name: "Large Volume Storage Tank",
    modelStatus: modelStatus.Active,
    link: "http://www.htproducts.com/largevolumestoragetanks-documents.html",
  },
];

const htpElectricList: modelListTypes[] = [
  {
    id: "ELV",
    name: "Everlast Elevate Residential WH",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-elevate-documents.html",
  },
  {
    id: "ELV-DR",
    name: "Everlast Elevate Demand Response",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-elevate-demand-response-documents.html",
  },
  {
    id: "SUPR",
    name: "Everlast Elevate Residential WH",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-elevate-documents.html",
  },
  {
    id: "EVR-N",
    name: "Everlast Residential Electric WH",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-residential-documents.html",
  },
  {
    id: "EVR-DR",
    name: "Everlast Residential Demand Response",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-demand-response-documents.html",
  },
  {
    id: "EVR-10",
    name: "Everlast Point of Use Residential Electric WH",
    modelStatus: modelStatus.Active,
    link: "https://htproducts.com/everlast-residential-point-of-use-documents.html",
  },
  {
    id: "EVR-MINI",
    name: "Everlast Mini Tank",
    modelStatus: modelStatus.Active,
    link: "https://htproducts.com/everlast-residential-point-of-use-documents.html",
  },
  {
    id: "EVG",
    name: "Everlast Grid Enabled",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/EVG-documents.html",
  },
  {
    id: "EV",
    name: "Everlast",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/everlast-dis.html",
  },
  {
    id: "EVC",
    name: "Everlast Medium Duty 3 Element",
    modelStatus: modelStatus.Active,
    link: "https://www.htproducts.com/everlast-medium-duty-commercial-documents.html",
  },
  {
    id: "EVC(2)",
    name: "Everlast Light Duty, Commercial Electric",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/everlast-light-com-documents-dis.html",
  },
  {
    id: "EVC(3)",
    name: "Everlast Medium Duty, Commercial Electric",
    modelStatus: modelStatus.Discontinued,
    link: "http://www.htproducts.com/everlast-commercial-documents-dis.html",
  },
];

export const modelList: modelListTypes[] = [
  ...htpBoilerList,
  ...htpElectricList,
  ...htpTankList,
];
