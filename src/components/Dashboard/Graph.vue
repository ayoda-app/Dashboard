<script>
import _ from "lodash";
import moment from "moment";
import { getMonth } from "../../utils";
import { COLORS } from "../../constants";
import actualJSON from "../../assets/data/pizza_sales_daily.json";
import forecastJSON from "../../assets/data/model_preds.json";

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
        aggregate(data) {
            const agg = {};

            Object.keys(data).forEach(date => {
                const dateMoment = moment(date, "MM/DD/YYYY")
                const quarter = Math.floor((dateMoment.month() - 1) / 3) + 1;
                const month = dateMoment.month();
                const year = dateMoment.year();
                const week = (moment(date, "MM/DD/YYYY").week() % 4) + 1;
                let key;

                switch(this.aggregateInterval) {
                    case "annually":
                        key = year;
                        break;
                    case "quarterly":
                        // Need to validate or fix
                        key = `Q${quarter} ${year}`;
                        break;
                    case "monthly":
                        key = `${getMonth(month)} ${year}`;
                        break;
                    case "weekly":
                        // Need to validate or fix
                        key = `Week ${week} ${getMonth(month)} ${year}`;
                        break;
                    default:
                        key = date;
                }

                // Initialize key as null
                if(!agg[key]){
                    agg[key] = null;
                }

                // If the data point is not null, add it to the aggregate at the key
                if(data[date] !== null){
                    agg[key] += data[date];
                }
            });

            return agg;
        },
    },
    computed: {
        actualData() {
            if(this.aggregateInterval === "daily") {
                return actualJSON;
            }
            else {
                return this.aggregate(actualJSON);
            }
        },
        forecastedData() {
            const startIndex = Object.keys(actualJSON).length - forecastJSON["model predictions"].length;

            const data = _.reduce(
                Object.keys(actualJSON),
                (result, date, index) => {
                    const currentDate = moment(date, "MM/DD/YYYY").format("MM/DD/YYYY");

                    const datapoint = (index - startIndex) >= 0
                        ? Math.floor(forecastJSON["model predictions"][index - startIndex])
                        : null;

                    result[currentDate] = datapoint;
                    return result;
                },
                {}
            );

            if(this.aggregateInterval === "daily") {
                return data;
            }
            else {
                return this.aggregate(data);
            }
            
        },
        series() {
            return [
                {
                    name: "Actual Sales",
                    data: Object.values(this.actualData)
                },
                {
                    name: "Forcasted Sales",
                    data: Object.values(this.forecastedData)
                }
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