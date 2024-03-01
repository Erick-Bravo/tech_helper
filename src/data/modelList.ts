export type modelListTypes = {
  id: string;
  name: string;
  status: string;
  link: string;
};

enum status {
  Active = "Active",
  Discontinued = "Discontinued"
}

export const modelList: modelListTypes[] = [
  {
    id: "RGH",
    name: "Crossover (RGH) Floor",
    status: status.Active,
    link: "https://htproducts.com/RGH75100-documents.html",
  },
  {
    id: "ELU",
    name: "Elite Ultra Wall and Floor",
    status: status.Active,
    link: "https://htproducts.com/elite-ultra-documents.html",
  },
  {
    id: "ELUD",
    name: "Elite Ultra Duo",
    status: status.Active,
    link: "https://www.htproducts.com/eliteultraduo-documents.html",
  },
  {
    id: "EFTU",
    name: "Elite Fire Tube Ultra",
    status: status.Active,
    link: "https://www.htproducts.com/elite-fire-tube-ultra-documents.html",
  },
  {
    id: "ELX",
    name: "Elite XL Boiler",
    status: status.Active,
    link: "https://www.htproducts.com/elitexl-documents.html",
  },
  {
    id: "ELV",
    name: "Everlast Elevate Residential WH",
    status: status.Active,
    link: "https://www.htproducts.com/everlast-elevate-documents.html",
  },
  {
    id: "SUPR",
    name: "Everlast Elevate Residential WH",
    status: status.Active,
    link: "https://www.htproducts.com/everlast-elevate-documents.html",
  },
  {
    id: "EVR",
    name: "Everlast Residential Electric WH",
    status: status.Active,
    link: "https://www.htproducts.com/everlast-elevate-documents.html",
  },
  {
    id: "EVR",
    name: "Everlast Point of Use Residential Electric WH",
    status: status.Active,
    link: "https://htproducts.com/everlast-residential-point-of-use-documents.html",
  },
  {
    id: "EVR",
    name: "Everlast Mini Tank",
    status: status.Active,
    link: "https://htproducts.com/everlast-residential-point-of-use-documents.html",
  },
  {
    id: "EVC",
    name: "Everlast Medium Duty 3 Element",
    status: status.Active,
    link: "https://www.htproducts.com/everlast-medium-duty-commercial-documents.html",
  },
  {
    id: "EVG",
    name: "Everlast Grid Enabled",
    status: status.Active,
    link: "https://www.htproducts.com/EVG-documents.html",
  },
  {
    id: "PH",
    name: "Pheonix Gas Fired WH",
    status: status.Active,
    link: "http://www.htproducts.com/phoenixdocuments.html",
  },
  {
    id: "PH76",
    name: "Pheonix Gas Fired Light Duty",
    status: status.Active,
    link: "http://www.htproducts.com/phoenixlddocuments.html",
  },
  {
    id: "PHM",
    name: "Pheonix Gas Fired Multi-Fit",
    status: status.Active,
    link: "http://www.htproducts.com/Phoenix-Multi-Fit-documents.html",
  },
  {
    id: "PHP",
    name: "Pheonix Gas Fired Plus",
    status: status.Active,
    link: "http://www.htproducts.com/phoenixplusdocuments.html",
  },
  {
    id: "PHR",
    name: "Pioneer",
    status: status.Active,
    link: "http://www.htproducts.com/pioneerdocuments.html",
  },

  ///////////////////////////////
  /* 
  
  SSC:       Superstor Contender     yes
  SSC-TC:    Superstor Contender     yes
  SSU-N:     Superstor Ultra         yes
  SSU-CB:    Superstor Solar
  
  */
  {
    id: "SSC",
    name: "INDIRECT Superstor Contender Titanium",
    status: status.Active,
    link: "https://www.htproducts.com/superstorcontenderdocuments.html",
  },
  {
    id: "SSC-TC",
    name: "INDIRECT Superstor Contender Titanium",
    status: status.Active,
    link: "https://www.htproducts.com/superstor-contender-titanium-documents.html",
  },
  {
    id: "SSU-N",
    name: "INDIRECT Stainless Steel Superstor Ultra",
    status: status.Active,
    link: "https://htproducts.com/superstorultradocuments.html",
  },
  {
    id: "SSU-CB",
    name: "STORAGE Stainless Steel",
    status: status.Discontinued,
    link: "https://www.htproducts.com/superstorultratankdocuments.html",
  },
  {
    id: "MSSU",
    name: "INDIRECT Superstor Ultra Max",
    status: status.Active,
    link: "https://htproducts.com/superstorultramax-multisource-documents.html",
  },
  {
    id: "MSSU-NSE",
    name: "INDIRECT Superstor Ultra Max",
    status: status.Active,
    link: "https://htproducts.com/superstorultramax-documents.html",
  },
  {
    id: "GL",
    name: "Glass Lined Storage Tank",
    status: status.Active,
    link: "https://www.htproducts.com/glasslinedtankdocuments.html",
  },
  {
    id: "SR",
    name: "Large Volume Storage Tank",
    status: status.Active,
    link: "http://www.htproducts.com/largevolumestoragetanks-documents.html",
  },
  ////////////////////////////////

  {
    id: "RGH",
    name: "Crossover (RGH) Wall",
    status: status.Discontinued,
    link: "https://www.htproducts.com/crossover-documents-dis.html",
  },
  {
    id: "CGH",
    name: "Crossover Commercial",
    status: status.Discontinued,
    link: "http://www.htproducts.com/crossover-commercial-documents-dis.html",
  },
  {
    id: "EFTC",
    name: "EFT Combination Boiler (Wall)",
    status: status.Discontinued,
    link: "http://www.htproducts.com/EFT_Combination_Wall_Dis.html",
  },
  {
    id: "EFTC",
    name: "EFT Combination Boiler (Floor)",
    status: status.Discontinued,
    link: "http://www.htproducts.com/EFT_Combination_Floor_Dis.html",
  },
  {
    id: "EL",
    name: "Elite Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/elite-dis.html",
  },
  {
    id: "EFT",
    name: "Elite FT Heating Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/eft-documents-dis.html",
  },
  {
    id: "EP",
    name: "Elite Premiere Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/elitepremier.html",
  },
  {
    id: "EP-VHW",
    name: "Elite VWH",
    status: status.Discontinued,
    link: "http://www.htproducts.com/elite-premier-vwh-documents-dis.html",
  },
  {
    id: "ETI",
    name: "Endurati Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/EnduroTi-documents-dis.html",
  },
  {
    id: "EV",
    name: "Everlast",
    status: status.Discontinued,
    link: "http://www.htproducts.com/everlast-dis.html",
  },
  {
    id: "EVC",
    name: "Everlast Light Duty, Commercial Electric",
    status: status.Discontinued,
    link: "http://www.htproducts.com/everlast-light-com-documents-dis.html",
  },
  {
    id: "EVC",
    name: "Everlast Medium Duty, Commercial Electric",
    status: status.Discontinued,
    link: "http://www.htproducts.com/everlast-commercial-documents-dis.html",
  },
  {
    id: "RT",
    name: "Hydra Smart RT",
    status: status.Discontinued,
    link: " https://www.htproducts.com/hydrasmart-residential-documents.html",
  },
  {
    id: "RTC",
    name: "Hydra Smart RTC",
    status: status.Discontinued,
    link: "https://www.htproducts.com/hydrasmart-RTC-documents.html",
  },
  {
    id: "MC",
    name: "MC Series",
    status: status.Discontinued,
    link: "http://www.htproducts.com/mcseriesdocuments.html",
  },
  {
    id: "MODCON",
    name: "Commercial Gas Boiler",
    status: status.Discontinued,
    link: "https://www.htproducts.com/modcon-dis.html",
  },
  {
    id: "MODCON-VWH",
    name: "Commercial Volume Water Heater",
    status: status.Discontinued,
    link: "https://www.htproducts.com/modcon-vwh-dis.html",
  },
  {
    id: "MODCON-Double",
    name: "Stacked Gas Boiler",
    status: status.Discontinued,
    link: "https://www.htproducts.com/modcon-ds-dis.html",
  },
  {
    id: "MODCON-Double-VWH",
    name: "Stacked Volume Water Heater",
    status: status.Discontinued,
    link: "https://www.htproducts.com/modcon-dsvwh-dis.html",
  },
  {
    id: "MUNCHKIN Rev-2",
    name: "80m-399m began 12/20/2006 - T50-T80M began 1/4/2007",
    status: status.Discontinued,
    link: "https://www.htproducts.com/literature/lp-185.pdf",
  },
  {
    id: "MUNCHKIN Rev-1",
    name: "began 11/11/2004",
    status: status.Discontinued,
    link: "https://www.htproducts.com/literature/lp-61.pdf",
  },
  {
    id: "MUNCHKIN Pre-Rev",
    name: "'Blinky board' ended/925 began 11/1/2002",
    status: status.Discontinued,
    link: "https://www.htproducts.com/literature/lp-61r.pdf",
  },
  {
    id: "UFT",
    name: "UFT Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/uft-documents-dis.html",
  },
  {
    id: "UFTC",
    name: "UFT Combi Boiler",
    status: status.Discontinued,
    link: "http://www.htproducts.com/UFT-Combination-Documents-dis.html",
  },
  {
    id: "PHE",
    name: "Versa Hydro",
    status: status.Discontinued,
    link: "http://www.htproducts.com/versahydrodocuments-dis.html",
  },
  {
    id: "SSV",
    name: "Voyager",
    status: status.Discontinued,
    link: "http://www.htproducts.com/voyager-dis.html",
  },
];
