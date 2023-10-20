<script>
import pizzaData from "../../assets/data/pizza_sales_daily.json";
console.log(pizzaData);

export default {
    name: "Chart",
    data() {
        return {
            series: [
                {
                    name: "Sales",
                    data: Object.values(pizzaData)
                },
                // {
                //     name: "Page Views",
                //     data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                // },
                // {
                //     name: "Total Visits",
                //     data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                // }
            ],
            chartOptions: {
                chart: {
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [3, 3, 3],
                    curve: "straight",
                    dashArray: [0, 8, 5]
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
                    // categories: [
                    //     "01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan",
                    //     "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"
                    // ],
                    categories: Object.keys(pizzaData)
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " sales"
                                }
                            }
                        },
                        // {
                        //     title: {
                        //         formatter: function (val) {
                        //             return val + " per session"
                        //         }
                        //     }
                        // },
                        // {
                        //     title: {
                        //         formatter: function (val) {
                        //             return val;
                        //         }
                        //     }
                        // }
                    ]
                },
                grid: {
                    borderColor: "#f1f1f1",
                }
            }
        };
    }
};
</script>

<template>
    <div id="chart">
        <apexchart
            type="line"
            height="500"
            width="1100"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>