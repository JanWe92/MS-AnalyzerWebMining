   var color = "#4682b4";

   var genreSelect1;
   genreSelect1 = $("#genre1 option:selected").text();

   var setCurrentGenre = function (genre) {

       if ((color == "#4682b4" && genre == "genre1") || (color == "#006400" && genre == "genre2")) {
           genreSelect1 = $("#" + genre + " option:selected").text();
       }
   };

   var overtimeGraphs = function () {
       $('#attributesPlot').empty();

       var w = 500,
           h = 300,
           pad = 20,
           left_pad = 100;




       //left attribute
       var attributeSelect1 = $("#attribut1 option:selected").text();
       //bottom attribute
       var attributeSelect2 = $("#attribut2 option:selected").text();


       //Append the canvas'
       var attributesCanvas = d3.select('#attributesPlot').append('svg')
           .attr("width", w)
           .attr("id", "attrCanvas")
           .attr("height", h)
           .style("display", "block");


       //Append a line for each year Top
       d3.csv('data/overTime/' + genreSelect1 + '.csv', function (error, data) {

           //Get the data in the right formats
           //Duration
           var durationData = _.pluck(data, "Duration");
           durationData.shift();
           for (i = 0; i < durationData.length; i++) {
               durationData[i] = parseFloat(durationData[i])
               durationData[i] = Math.round(durationData[i]);
           };

           //Loudness
           var loudnessData = _.pluck(data, "Loudness");
           loudnessData.shift();
           for (i = 0; i < loudnessData.length; i++) {
               loudnessData[i] = parseFloat(loudnessData[i]);
               //      loudnessData[i] = Math.round(loudnessData[i]);
           };

           //Tempo
           var tempoData = _.pluck(data, "Tempo");
           tempoData.shift();
           for (i = 0; i < tempoData.length; i++) {
               tempoData[i] = parseFloat(tempoData[i]);
               tempoData[i] = Math.round(tempoData[i]);
           };

           //Hotness
           var hotnessData = _.pluck(data, "Hotness");
           hotnessData.shift();
           for (i = 0; i < hotnessData.length; i++) {
               hotnessData[i] = parseFloat(hotnessData[i]);
               hotnessData[i] = hotnessData[i] * 100;
               hotnessData[i] = Math.round(hotnessData[i]);
           };

           var yearData = _.pluck(data, "Year");
           yearData.shift();

           var familiarityData = _.pluck(data, "Familiarity");
           familiarityData.shift();
           for (i = 0; i < familiarityData.length; i++) {
               familiarityData[i] = parseFloat(familiarityData[i]);
               familiarityData[i] = familiarityData[i] * 100;
               familiarityData[i] = Math.round(familiarityData[i]);
           };


           var xmin;
           var xmax;
           var xData;
           switch (attributeSelect2) {
               case "Duration":
                   xmax = Math.max.apply(Math, durationData);
                   xmin = Math.min.apply(Math, durationData);
                   xData = durationData;
                   break;
               case "Loudness":
                   xmax = Math.max.apply(Math, loudnessData);
                   xmin = Math.min.apply(Math, loudnessData);
                   xData = loudnessData;
                   break;
               case "Tempo":
                   xmax = Math.max.apply(Math, tempoData);
                   xmin = Math.min.apply(Math, tempoData);
                   xData = tempoData;
                   break;
               case "Hotness":
                   xmax = Math.max.apply(Math, hotnessData);
                   xmin = Math.min.apply(Math, hotnessData);
                   xData = hotnessData;
                   break;
               case "Time":
                   xmax = Math.max.apply(Math, yearData);
                   xmin = Math.min.apply(Math, yearData);
                   xData = yearData;
                   break;
               case "Familiarity":
                   xmax = Math.max.apply(Math, familiarityData);
                   xmin = Math.min.apply(Math, familiarityData);
                   xData = familiarityData;
                   break;
           }

           var ymin;
           var ymax;
           var yData;
           switch (attributeSelect1) {
               case "Duration":
                   ymax = Math.max.apply(Math, durationData);
                   ymin = Math.min.apply(Math, durationData);
                   yData = durationData;
                   break;
               case "Loudness":
                   ymax = Math.max.apply(Math, loudnessData);
                   ymin = Math.min.apply(Math, loudnessData);
                   yData = loudnessData;
                   break;
               case "Tempo":
                   ymax = Math.max.apply(Math, tempoData);
                   ymin = Math.min.apply(Math, tempoData);
                   yData = tempoData;
                   break;
               case "Hotness":
                   ymax = Math.max.apply(Math, hotnessData);
                   ymin = Math.min.apply(Math, hotnessData);
                   yData = hotnessData;
                   break;
               case "Time":
                   ymax = Math.max.apply(Math, yearData);
                   ymin = Math.min.apply(Math, yearData);
                   yData = yearData;
                   break;
               case "Familiarity":
                   ymax = Math.max.apply(Math, familiarityData);
                   ymin = Math.min.apply(Math, familiarityData);
                   yData = familiarityData;
                   break;
           }

           var x = d3.scale.linear().domain([xmin, xmax]).range([left_pad, w - pad]);
           var y = d3.scale.linear().domain([ymin, ymax]).range([h - pad * 2, pad]);

           var xAxis = d3.svg.axis().scale(x).orient("bottom"),
               yAxis = d3.svg.axis().scale(y).orient("left");


           attributesCanvas.append("g")
               .attr("class", "axis")
               .attr("transform", "translate(0, " + (h - pad) + ")")
               .call(xAxis);

           attributesCanvas.append("g")
               .attr("class", "axis")
               .attr("transform", "translate(" + (left_pad - pad) + ", 0)")
               .call(yAxis);

           attributesCanvas.selectAll("circle.datapoint")
               .data(d3.zip(xData, yData))
               .enter()
               .append("circle")
               .attr("class", "datapoint")
               .attr("cx", function (d) {
                   return x(d[0]);
               })
               .attr("cy", function (d) {
                   return y(d[1]);
               })
               .attr("r", 2)
               .style("fill", color);

       });
   };
   overtimeGraphs();


   $('#switchGenre').click(function () {
       if (color == "#4682b4") {
           genreSelect1 = $("#genre2 option:selected").text();
           color = "#006400";
       } else {
           color = "#4682b4";
           genreSelect1 = $("#genre1 option:selected").text();
       }

       overtimeGraphs();

   });

   $('#attribut1').on('change', function () {
       overtimeGraphs();
   });
   $('#attribut2').on('change', function () {
       overtimeGraphs();
   });