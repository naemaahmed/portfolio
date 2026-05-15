$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginBottom: 90
        },
        exporting: {
        		enabled: false
				},
        credits:{
					enabled: true,
        	text: 'Source: Transportation Security Administration and Law Center to Prevent Gun Violence'
        },
        title: {
            text: 'More Firearms Caught at Airports with Laxer State Gun Laws',
            margin: 20
        },
        subtitle: {
            text:'By Taylor Swaak and Naema Ahmed'+'<br> CAPITAL NEWS SERVICE'+'<br> Within the 25 busiest U.S. airports in 2015, the Transportation Secuirty Administration siezed more firearms in states with more lenient gun laws. The Law Center to Prevent Gun Violence created a Gun Law State Scorecard ranking states on a scale of 1 to 50, with 1 having the strictest gun laws. In comparison with 2015 airport gun seizures, there is a positive correlation between a state\'s scorecard ranking and the number of firearms caught per 10 million passengers at the state\'s airports.'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Number of firearms caught per 10 million passengers'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'State Gun Law Score'
            }  
        },
        legend: {
        		enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                        		text: null,
                            enabled: true
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                        text: null,
                        enabled: false
                        }
                    }
                },
                tooltip: {
                	headerFormat: '<b>{point.s}</b>',
        					//^^idk what this is doing but it makes the legend in the tool tip go awat
                  pointFormatter: function () {
                  return '<b>' + this.s + '</b> <br>' + this.airport + '<br>Number of firearms per 10 million passengers: <b>' + this.x + '</b><br>Gun Strictness Rank: <b>' + this.y + '</b>';
                  }}
            }
        },
        series: [ {
            name: 'Airports',
            color: '#B40404',
            data: [{y: 33, x: 51.1, s: 'Texas', airport: 'George Bush Intercontinental Airport'},
{y: 33, x: 49, s: 'Texas', airport: 'Dallas/Fort Worth International Airport', dataLabels:{enabled: true, formatter: function() { return this.point.s;}}},
{y: 37, x: 47.7, s: 'Utah', airport: 'Salt Lake City International Airport'},
{y: 47, x: 35.8, s: 'Arizona', airport: 'Phoenix Sky Harbor International Airport', dataLabels:{enabled: true, formatter: function() { return this.point.s;}}},
{y: 16, x: 34.3, s: 'Colorado ', airport: 'Denver International Airport'},
{y: 11, x: 32.6, s: 'Washington', airport: 'Seattle–Tacoma International Airport'},
{y: 28, x: 30.7, s: 'Georgia ', airport: 'Hartsfield–Jackson Atlanta International Airport'},
{y: 28, x: 29.1, s: 'Florida', airport: 'Orlando International Airport'},
{y: 20, x: 19.5, s: 'Virginia', airport: 'Washington Dulles International Airport'},
{y: 27, x: 18.1, s: 'Nevada', airport: 'McCarran International Airport'},
{y: 28, x: 18.1, s: 'Florida', airport: 'Fort Lauderdale–Hollywood International Airport'},
{y: 15, x: 17.4, s: 'Michigan', airport: 'Detroit Metropolitan Airport'},
{y: 25, x: 17.3, s: 'North Carolina', airport: 'Charlotte Douglas International Airport'},
{y: 8, x: 14.9, s: 'Illinois', airport: 'Chicago Midway International Airport'},
{y: 4, x: 14.3, s: 'Maryland', airport: 'Baltimore-Washington International Airport', dataLabels:{enabled: true, formatter: function() { return this.point.s;}}},
{y: 12, x: 13.6, s: 'Minnesota', airport: 'Minneapolis–Saint Paul International Airport'},
{y: 28, x: 11.9, s: 'Florida', airport: 'Miami International Airport'},
{y: 1, x: 9.7, s: 'California', airport: 'Los Angeles International Airport'},
{y: 13, x: 8.2, s: 'Pennsylvania', airport: 'Philadelphia International Airport'},
{y: 1, x: 6.8, s: 'California', airport: 'San Francisco International Airport'},
{y: 5, x: 6.3, s: 'Massachusetts', airport: 'Logan International Airport'},
{y: 3, x: 5.1, s: 'New Jersey', airport: 'Newark Liberty International Airport'},
{y: 8, x: 4.8, s: 'Illinois', airport: 'O\'Hare International Airport'},
{y: 6, x: 3.8, s: 'New York', airport: 'John F. Kennedy International Airport'},
{y: 6, x: 3.6, s: 'New York', airport: 'LaGuardia Airport'}]
        }]
    });
});

