import { Compatibility } from './interface';

const supportedCars = [
    {
        "Make": "Acura",
        "Model (US Market Reference)": "ILX 2016-19",
        "Supported Package": "AcuraWatch Plus",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "25mph"
    },
    {
        "Make": "Acura",
        "Model (US Market Reference)": "RDX 2016-18",
        "Supported Package": "AcuraWatch Plus",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Acura",
        "Model (US Market Reference)": "RDX 2019-21",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "3mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Accord 2018-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "3mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Accord Hybrid 2018-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "3mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Civic Hatchback 2017-21",
        "Supported Package": "Honda Sensing",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Civic Sedan/Coupe 2016-18",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Civic Sedan/Coupe 2019-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "2mph<sup>2</sup>"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "CR-V 2015-16",
        "Supported Package": "Touring",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "CR-V 2017-20",
        "Supported Package": "Honda Sensing",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "CR-V Hybrid 2017-2019",
        "Supported Package": "Honda Sensing",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Fit 2018-19",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "HR-V 2019-20",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Insight 2019-21",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "3mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Inspire 2018",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "3mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Odyssey 2018-20",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Passport 2019",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Pilot 2016-19",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Honda",
        "Model (US Market Reference)": "Ridgeline 2017-21",
        "Supported Package": "Honda Sensing",
        "ACC": "openpilot",
        "No ACC accel below": "25mph<sup>1</sup>",
        "No ALC below": "12mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Palisade 2020-21",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Hyundai",
        "Model (US Market Reference)": "Sonata 2020-21",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "CT Hybrid 2017-18",
        "Supported Package": "LSS",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "ES 2019-20",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "ES Hybrid 2017-18",
        "Supported Package": "LSS",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "ES Hybrid 2019",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "IS 2017-2019",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "22mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "IS Hybrid 2017",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "NX 2018",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "NX Hybrid 2018",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "RX 2016-18",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "RX 2020-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "RX Hybrid 2016-19",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Lexus",
        "Model (US Market Reference)": "RX Hybrid 2020",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Avalon 2016-21",
        "Supported Package": "TSS-P",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "20mph<sup>1</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Camry 2018-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph<sup>4</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Camry 2021",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Camry Hybrid 2018-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph<sup>4</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Camry Hybrid 2021",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "C-HR 2017-20",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "C-HR Hybrid 2017-19",
        "Supported Package": "All",
        "ACC": "Stock",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Corolla 2017-19",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "20mph<sup>1</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Corolla 2020-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Corolla Hatchback 2019-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Corolla Hybrid 2020-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Highlander 2017-19",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Highlander 2020-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Highlander Hybrid 2017-19",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Highlander Hybrid 2020-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Mirai 2021",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Prius 2016-20",
        "Supported Package": "TSS-P",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Prius 2021",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Prius Prime 2017-20",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Prius Prime 2021",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Rav4 2016-18",
        "Supported Package": "TSS-P",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "20mph<sup>1</sup>",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Rav4 2019-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Rav4 Hybrid 2016-18",
        "Supported Package": "TSS-P",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Rav4 Hybrid 2019-21",
        "Supported Package": "All",
        "ACC": "openpilot",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    },
    {
        "Make": "Toyota",
        "Model (US Market Reference)": "Sienna 2018-20",
        "Supported Package": "All",
        "ACC": "Stock<sup>3</sup>",
        "No ACC accel below": "0mph",
        "No ALC below": "0mph"
    }
]

export const officalCars = supportedCars.map(car => {       
    return { ...car, Compatibility: Compatibility.Supported }
});