$(function () {
		Highcharts.setOptions({
    	lang: {
        thousandsSep: ','
    	}
		});
    $('#container').highcharts({
				colors: ['#00cc66'],
        exporting:{
					enabled: false
        },
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            
        },
        legend: {
            enabled: false
        },

        title: {
            text: 'Film Productions with More Tax Incentives Hire More Marylanders'
        },

        subtitle: {
            text: 'By Marissa Laliberte, Naema Ahmed and Leo Traub <br> CAPITAL NEWS SERVICE <br> Maryland offers tax breaks for productions filmed in the state, giving incentive for filmers to hire local workers and spend money at businesses in the state. Projects that were given the highest tax credits also visited more state businesses and hired more Maryland technicians, actors and extras. The second season of House of Cards, for instance, received about $14 million in tax breaks, and hired 1,621 Marylanders and spent money at 3,085 in-state vendors.'
        },
        
  credits: {
        enabled: true,
        text: 'Source: Maryland Film Office'
        },
        
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Tax Credit (in Dollars)'
            },
           
            
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Number of Businesses Supported'
            },
          
            maxPadding: 0.2,
            
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Businesses:</th><td>{point.y}</td></tr>' +
                '<tr><th>Tax Credit:</th><td>{point.x:,.0f}</td></tr>' +
                '<tr><th>Maryland Hires:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
                
            }
        },

        series: [{
            data: [
                { x: 3410885, y: 1141, z: 978, name: 'VEEP, season 1'},
{ x: 691189, y: 571, z: 196, name: 'Better Living Through Chemistry'},
{ x: 600000, y: 338, z: 288, name: 'Jamesy Boy'},
{ x: 11676029, y: 1814, z: 2198, name: 'House of Cards, season 1'},
{ x: 231250, y: 421, z: 69, name: 'Ping Pong Summer'},
{ x: 5415019, y: 1033, z: 1079, name: 'VEEP, season 2'},
{ x: 14397646, y: 3085, z: 1621, name: 'House of Cards, season 2'},
{ x: 6465148, y: 1100, z: 2188, name: 'VEEP, season 3'},
{ x: 7429091, y: 1100, z: 2188, name: 'VEEP, season 4'},
{ x: 4000000, y: 1800, z: 1850, name: 'House of Cards, season 3'},
            ]
        }]

    });
});