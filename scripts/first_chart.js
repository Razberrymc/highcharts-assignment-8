Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Peaches','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Susan and Scott\'s house'
      }
    },
    series: [{
      name: 'Jeremy',
      data: [4, 1, 0, 4]
    }, {
      name: 'Christine',
      data: [3, 5, 7, 3]
    }]
  });
