import { Compatibility } from '../interface';

export const cars = [
    {
        "Make": "Audi",
        "Model (US Market Reference)": "A3 2014-17",
        "Supported Package": "Prestige",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Audi",
        "Model (US Market Reference)": "A3 Sportback e-tron 2017-18",
        "Supported Package": "Prestige",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Buick",
        "Model (US Market Reference)": "Regal 2018<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Cadillac",
        "Model (US Market Reference)": "ATS 2018<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Chevrolet",
        "Model (US Market Reference)": "Malibu 2017<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Chevrolet",
        "Model (US Market Reference)": "Volt 2017-18<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Chrysler",
        "Model (US Market Reference)": "Pacifica 2017-18",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "9mph"
    },
    {
        "Make": "Chrysler",
        "Model (US Market Reference)": "Pacifica 2020",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "39mph"
    },
    {
        "Make": "Chrysler",
        "Model (US Market Reference)": "Pacifica Hybrid 2017-18",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "9mph"
    },
    {
        "Make": "Chrysler",
        "Model (US Market Reference)": "Pacifica Hybrid 2019-21",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "39mph"
    },
    {
        "Make": "Genesis",
        "Model (US Market Reference)": "G70 2018",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Genesis",
        "Model (US Market Reference)": "G80 2018",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Genesis",
        "Model (US Market Reference)": "G90 2018",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "GMC",
        "Model (US Market Reference)": "Acadia 2018<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Holden",
        "Model (US Market Reference)": "Astra 2017<sup>1</sup>",
        "Supported Package": "Adaptive Cruise",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "7mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Elantra 2017-19",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "19mph",
        "No ALC below": "34mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Genesis 2015-16",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "19mph",
        "No ALC below": "37mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Ioniq Electric 2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "32mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Ioniq Electric 2020",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Kona 2020",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Kona EV 2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Santa Fe 2019-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Sonata 2018-2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Veloster 2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "5mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Jeep",
        "Model (US Market Reference)": "Grand Cherokee 2016-18",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "9mph"
    },
    {
        "Make": "Jeep",
        "Model (US Market Reference)": "Grand Cherokee 2019-20",
        "Supported Package": "Adaptive Cruise",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "39mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Forte 2018-2021",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Niro EV 2020",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Optima 2017",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "32mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Optima 2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Seltos 2021",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Sorento 2018-19",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Stinger 2018",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Kia",
        "Model (US Market Reference)": "Ceed 2019",
        "Supported Package": "SCC + LKAS",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Nissan",
        "Model (US Market Reference)": "Altima 2020",
        "Supported Package": "ProPILOT",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Nissan",
        "Model (US Market Reference)": "Leaf 2018-20",
        "Supported Package": "ProPILOT",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Nissan",
        "Model (US Market Reference)": "Rogue 2018-20",
        "Supported Package": "ProPILOT",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Nissan",
        "Model (US Market Reference)": "X-Trail 2017",
        "Supported Package": "ProPILOT",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "SEAT",
        "Model (US Market Reference)": "Ateca 2018",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Škoda",
        "Model (US Market Reference)": "Kodiaq 2018",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Škoda",
        "Model (US Market Reference)": "Scala 2020",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Škoda",
        "Model (US Market Reference)": "Superb 2015-18",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Subaru",
        "Model (US Market Reference)": "Ascent 2019",
        "Supported Package": "EyeSight",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Subaru",
        "Model (US Market Reference)": "Crosstrek 2018-19",
        "Supported Package": "EyeSight",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Subaru",
        "Model (US Market Reference)": "Forester 2019-21",
        "Supported Package": "EyeSight",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Subaru",
        "Model (US Market Reference)": "Impreza 2017-19",
        "Supported Package": "EyeSight",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Atlas 2018-19",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "e-Golf 2014, 2019-20",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf 2015-19",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf Alltrack 2017-18",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf GTE 2016",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf GTI 2018-19",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf R 2016-19",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Golf SportsVan 2016",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Jetta 2018-20",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Jetta GLI 2021",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Passat 2016-17<sup>2</sup>",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Volkswagen",
        "Model (US Market Reference)": "Tiguan 2020",
        "Supported Package": "Driver Assistance",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    }
];

export const communityMaintainedCars = cars.map(car => {       
    return { ...car, Compatibility: Compatibility.Community }
});