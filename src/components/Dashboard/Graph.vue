<script>
// import _ from "lodash";
import { getMonth } from "../../utils";
import { COLORS } from "../../constants";
import pizzaData from "../../assets/data/pizza_sales_daily.json";
// import forecastData from "../../assets/data/model_preds.json";

export default {
    name: "Graph",
    props: {
        aggregateInterval: {
            type: String,
            required: true
        },
        diagramType: {
            type: String,
            required: true
        }
    },
    methods: {
        aggregate(data, interval) {
            const agg = {};

            Object.keys(data).forEach(date => {
                const [month, day, year] = date.split("/");
                let key;

                switch(interval) {
                    case "annually":
                        key = year;
                        break;
                    case "quarterly":
                        // Need to validate or fix
                        key = `Q${Math.floor((month - 1) / 3) + 1} ${year}`;
                        break;
                    case "monthly":
                        key = `${getMonth(month)} ${year}`;
                        break;
                    case "weekly":
                        // Need to validate or fix
                        console.log(date, Math.floor(day / 7) + 1);
                        key = `Week ${Math.floor(day / 7) + 1} ${getMonth(month)} ${year}`;
                        break;
                    default:
                        key = date;
                }

                if(!agg[key]){
                    agg[key] = 0;
                }
                agg[key] += data[date];
            });

            return agg;
        },
    },
    computed: {
        actualData() {
            if(this.aggregateInterval === "daily") {
                return pizzaData;
            }
            else {
                return this.aggregate(pizzaData, this.aggregateInterval);
            }
        },
        // forecastedData() {
        //     return Object.values(pizzaData).map(s => s + Math.floor(Math.random() * 50));
        // },
        series() {
            return [
                {
                    name: "Actual Sales",
                    data: Object.values(this.actualData)
                },
                // {
                //     name: "Forcasted Sales",
                //     data: this.forecastedData
                // }
            ];
        },
        chartOptions() {
            return {
                chart: {
                    type: this.diagramType,
                    zoom: {
                        enabled: true
                    },
                },
                colors: [COLORS.ORANGE, COLORS.BLUE],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [3, 3],
                    curve: "straight",
                    dashArray: [0, 0],
                },
                title: {
                    text: "Sales Data",
                    align: "left"
                },
                legend: {
                    tooltipHoverFormatter: function(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ""
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: Object.keys(this.actualData)
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " sales"
                                }
                            }
                        }
                    ]
                },
                grid: {
                    borderColor: "#f1f1f1",
                }
            }
        }
    }
};
</script>

<template>
    <apexchart
        height="500"
        width="1100"
        :options="chartOptions"
        :series="series"
    ></apexchart>
</template>