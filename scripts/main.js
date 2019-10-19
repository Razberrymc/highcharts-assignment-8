Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Household Median Income by Age'
    },
    subtitle: {
        text: 'Source: <a href="https://www.census.gov/data/tables/2019/demo/income-poverty/p60-266.html">United States Census Burea</a>'
    },
    xAxis: {
        categories: ['15 to 24 years', '25 to 34 years', '35 to 44 years', '45 to 54 years', '55 to 64 years', '65 years and older'],
        title: {
            text: null
        }
    },
    yAxis: {
        tickPositions: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000],
        title: {
            text: 'Median Income (dollars)',
            align: 'low'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' dollars'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 2017',
        data: [39901, 62732, 80768, 82111, 70576, 42303]
    }, {
        name: 'Year 2018',
        data: [43531, 65890, 80743, 84464, 68951, 43696]
    }]
});



Highcharts.chart('container2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Household Median Income by Race'
    },
    subtitle: {
        text: 'Source: <a href="https://www.census.gov/data/tables/2019/demo/income-poverty/p60-266.html">census.gov</a>'
    },
    xAxis: {
        categories: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        tickPositions: [35000, 45000, 55000, 65000, 75000, 85000],
        title: {
            text: 'Median Income (dollars)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' dollars'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asian',
        data: [73660, 76231, 76631, 78747, 80200, 80252, 76739, 76810, 74167, 72874]
    }, {
        name: 'Black',
        data: [40628, 40573, 40105, 39774, 39913, 41176, 40006, 38228, 37077, 36061]
    }, {
        name: 'White',
        data: [63107, 62451, 62177, 62584, 63264, 63270, 61160, 60845, 59682, 58423]
    }, {
        name: 'Hispanic',
        data: [46334, 45160, 45670, 46360, 47169, 46958, 44326, 44628, 43433, 43217]
    }]
});
