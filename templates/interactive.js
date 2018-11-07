function plotHorizontalBarChart(data){
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 100
        };

        var width = 600 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#barchart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(data, function (d) {
                return d.population_2012;
            })]);
        var y = d3.scale.ordinal()
            .rangeRoundBands([height/2, 0], .1)
            .domain(data.map(function (d) {
                return d.city;
            }));
        //make y axis to show bar names
        var yAxis = d3.svg.axis()
            .scale(y)
            //no tick marks
            .tickSize(0)
            .orient("left");

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.city);
            })
            .attr("fill","grey")
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .attr("width", function (d) {
                return x(d.population_2012);
            })
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);

        //add a value label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.city) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return margin.left/16;
            })
            .style("fill","white")
            .text(function (d) {
                return d.population_2012;
            });

        function handleMouseOver(d, i) {
            d3.select(this).attr({
              fill: "orange"
            });
            drawLineChart(d,i);
          }

      function handleMouseOut(d, i) {
            d3.select(this).attr({
              fill: "grey",
            });
            d3.select("#t"+"textbox" + "-" + i).remove();
            d3.select("#t"+"label" + "-" + i).remove();
            d3.select("#t"+"linechart" + "-" + i).remove();
          }

}

function drawLineChart(d,i){
        var pops= [];
        pops= [data[i]["population_2012"]+data[i]["growth"].year_2013,
                   data[i]["population_2012"]+data[i]["growth"].year_2013+data[i]["growth"].year_2014,
                   data[i]["population_2012"]+data[i]["growth"].year_2013+data[i]["growth"].year_2014+data[i]["growth"].year_2015,
                   data[i]["population_2012"]+data[i]["growth"].year_2013+data[i]["growth"].year_2014+data[i]["growth"].year_2015+data[i]["growth"].year_2016,
                   data[i]["population_2012"]+data[i]["growth"].year_2013+data[i]["growth"].year_2014+data[i]["growth"].year_2015+data[i]["growth"].year_2016+data[i]["growth"].year_2017];
        var increments=[];
        increments=[{year : "2013" , perc : Math.round(data[i]["growth"].year_2013/pops[0]*10000)/100},
                        {year : "2014" , perc : Math.round(data[i]["growth"].year_2014/pops[1]*10000)/100},
                        {year : "2015" , perc : Math.round(data[i]["growth"].year_2015/pops[2]*10000)/100},
                        {year : "2016" , perc : Math.round(data[i]["growth"].year_2016/pops[3]*10000)/100},
                        {year : "2017" , perc : Math.round(data[i]["growth"].year_2017/pops[4]*10000)/100}];

        var years =["2013","2014","2015","2016","2017"];
        var	margin = {top: 30, right: 20, bottom: 30, left: 50},
        	width = 230 - margin.left - margin.right,
        	height = 230 - margin.top - margin.bottom;

        // Parse the date / time
        // var	parseDate = d3.time.format("%d-%b-%y").parse;

        // Set the ranges
        var years = ["2013","2014","2015","2016","2017"];
        var x = d3.scale.ordinal()
          .domain(years)
          .rangePoints([0, width]);
        var	y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var	xAxis = d3.svg.axis().scale(x)
        	.orient("bottom").ticks(5);

        var	yAxis = d3.svg.axis().scale(y)
        	.orient("left").ticks(5);

      var	valueline = d3.svg.line()
        	.x(function(d) { return x(d.year); })
        	.y(function(d) {return y(d.perc); });

        var	svg = d3.select("#linechart")
          	.append("svg")
            .attr({
              id : "t"+"linechart"+ "-" + i
              })
            .attr("stroke","black")
            .attr("stroke-width",1)
        		.attr("width", width + margin.left + margin.right)
        		.attr("height", height + margin.top + margin.bottom)
        	.append("g")
        		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      y.domain([d3.min(increments, function(d) { return d.perc; }), d3.max(increments, function(d) { return d.perc; })]);

        	// Add the valueline path.
        	svg.append("path")
        		.attr("class", "line")
        		.attr("d", valueline(increments))
            .attr("stroke", "green")
            .attr("fill","none");
        	// Add the X Axis
        	svg.append("g")
        		.attr("class", "x axis")
        		.attr("transform", "translate(0," + height + ")")
        		.call(xAxis);

        	// Add the Y Axis
        	svg.append("g")
        		.attr("class", "y axis")
        		.call(yAxis);
}
