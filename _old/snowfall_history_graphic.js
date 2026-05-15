$(function () {
    $('#container').highcharts({
        chart: {
            type: 'heatmap',
            marginBottom: 50
          /*  marginTop: 40,
            marginBottom: 50,
            plotBorderWidth: 1*/
        },
        exporting: {
        	enabled: false
				},
        credits: {
        		enabled: true,
          	text: 'Source: National Weather Service' 
        },
        title: {
            text: 'Incoming Winter Storm Could Drop More than a Month\'s Worth of Snow in Maryland This Weekend'
        },
         subtitle: {
            text:'By Naema Ahmed and Catherine Sheffo'+'<br> CAPITAL NEWS SERVICE'+'<br> The first snow storm of the year is on it\'s way this weekend. If meteorologists\' most agressive predictions are correct, this single storm could beat the total snowfall in January in each of the last 11 years. On Wednesday afternoon, the Washington Post Capital Weather Gang was predicting between 12 and 20 inches over much of the state. In the last decade, the Baltimore area has seen the most accumulated snowfall in January and February.'
        },
        yAxis: {
            categories: [ '2004-2005', '2005-2006', '2006-2007', '2007-2008', '2008-2009', '2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015'],
            title: null
            
        },
        xAxis: {
            categories: ['Nov.', 'Dec.', 'Jan.', 'Feb.', 'Mar.'],
            title: {
                    text:'Inches of Snow'
                    }
        },
        /**colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },**/
        
         colorAxis: {
            stops: [
                [0, '#FFFFFF'],
                [0.4, ' #00abe6']
            ],
            min: 0,
            maxColor:' #0083b3',
            minColor: '#FFFFFF'
        }, 
        
        
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle',
            y: 51,
            symbolHeight: 370,
         		
        },
        tooltip: {
            formatter: function () {
                return 'In ' + ' ' + this.series.xAxis.categories[this.point.x] + ' of  ' + this.series.yAxis.categories[this.point.y] + '</b> Baltimore got<br><b>' +
                    this.point.value + '</b> inches of snow.<br><b>' + '</b>';
            }
        },
        series: [{
            name: 'Total Snowfall per Month in Baltimore',
            borderWidth: 1,
            data: [[0, 0, 0] , [0, 1, 0.5] , [0, 2, 0] , [0, 3, 0] , [0, 4, 0] , [0, 5, 0] , [0, 6, 0] , [0, 7, 0] , [0, 8, 0] , [0, 9, 0] , [0, 10, 0.3],[1, 0, 0] , [1, 1, 6] , [1, 2, 0] , [1, 3, 4.8] , [1, 4, 0.6] , [1, 5, 20.1] , [1, 6, 1.2] , [1, 7, 0] , [1, 8, 1.4] , [1, 9, 2.9] , [1, 10, 0.2],[2, 0, 7.6] , [2, 1, 0] , [2, 2, 0.9] , [2, 3, 2.4] , [2, 4, 2.1] , [2, 5, 6.9] , [2, 6, 10.7] , [2, 7, 1.3] , [2, 8, 2.9] , [2, 9, 9.8] , [2, 10, 5.9],[3, 0, 10] , [3, 1, 13.1] , [3, 2, 8.5] , [3, 3, 1.3] , [3, 4, 0.6] , [3, 5, 50] , [3, 6, 2.5] , [3, 7, 0.5] , [3, 8, 0.5] , [3, 9, 14.2] , [3, 10, 14.6],[4, 0, 0.4] , [4, 1, 0] , [4, 2, 1.4] , [4, 3, 0] , [4, 4, 5.8] , [4, 5, 0] , [4, 6, 0] , [4, 7, 0] , [4, 8, 3.2] , [4, 9, 12.1] , [4, 10, 7.7],
],
    dataLabels: {
             enabled: true,
             color: '#000000'
           }
        }]
    });
});