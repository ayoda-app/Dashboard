<script>
// import _ from "lodash";
import { getMonth } from "../../utils";
import { COLORS } from "../../constants";
import pizzaData from "../../assets/data/pizza_sales_daily.json";
// import forecastData from "../../assets/data/model_preds.json";

export default {
    name: "Chart",
    props: {
        aggregationPeriod: {
            type: String,
            default: "daily"
        }
    },
    computed: {
        actualData() {
            const aggregate = {};
            Object.keys(pizzaData).forEach(date => {
                console.log(date);
                const [month, day, year] = date.split("/");
                const key = `${getMonth(month)} ${year}`;

                if(!aggregate[key]){
                    aggregate[key] = 0;
                }
                aggregate[key] += pizzaData[date];
            });

            switch(this.aggregationPeriod) {
                case "monthly":
                    return aggregate;
                default:
                    return pizzaData;
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
                    type: "line",
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
    <div id="line">
        <apexchart
            type="area"
            height="500"
            width="1100"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>