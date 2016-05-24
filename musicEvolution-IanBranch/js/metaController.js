///////////////////////////////
//Function to get Genre Changes
///////////////////////////////
$('document').ready(function() {
            $('#genre1').on('change', function(){
                var genreSelect1;
                genreSelect1 = $( "#genre1 option:selected" ).text();
                var select = genreSelect1;
                if(select = "Rock") {
                    $('.topBars').css("color", "steelblue");
                    $('#genre1').css("background-color", "steelblue");
                    $('#genre1').css("color", "white");
                }else if(select = "Pop"){
                    $('.topBars').css("color", "steelblue");
                    $('#genre1').css("background-color", "rgb(0, 100, 0)");
                };

            });

            $('#genre2').change(function(){
                var genreSelect2;
                genreSelect2 = $("#genre2 option:selected").text();
                var select = genreSelect2;
                
                if(select = "Pop"){
                    $('.topBars').css("color", "steelblue");
                    $('#genre2').css("background-color", "rgb(0, 100, 0)");
                    $('#genre2').css("color", "white");
                };

            });
        });    


///////////////////////////////
//Function to get the data
///////////////////////////////

var getData = function(displaySelect){
    
    d3.csv('data/metadata/' + genre1Selected + '.csv', function(data) {
      
        
        
     
            
        

        //Set number of songs
        $('#numSongs1').text(Math.floor(data[0].Songs * 1));


        //Set Average Length
        //var lengthArray = _.pluck(year, 'Duration');
        //convert to integers
        //for(var i=lengthArray.length; i--;) lengthArray[i] = lengthArray[i]|0;
        //var lengthMean = (d3.mean(lengthArray)).toFixed(2);
        //var minutes = Math.floor(lengthMean / 60);
        //var seconds = Math.floor(lengthMean % 60);
        //if (seconds < 10){
        //    seconds = "0" + seconds;
        //}

        var durVal = data[0].Duration;
        var minutes = Math.floor(durVal / 60);
        var seconds = Math.floor(durVal % 60);
        $('#averageDur1').text(minutes + ":" + seconds+" mins");
    
        //Get the Average Loudness
        //var loudArray = _.sortBy((_.pluck(year, 'Loudness')));
        //for(var i=loudArray.length; i--;) loudArray[i] = loudArray[i]|0;
        //var loudMean = (d3.mean(loudArray)).toFixed(2);
        $('#averageLoud1').text(Math.floor(data[0].Loudness * 1 ) + " dB");


        //Get the Average Temp
        //var tempoArray = _.sortBy((_.pluck(year, 'Tempo')));
        //for(var i=tempoArray.length; i--;) tempoArray[i] = tempoArray[i]|0;
        //var tempoMean = (d3.mean(tempoArray)).toFixed(2);
        $('#averageTempo1').text(Math.floor(data[0].Tempo * 1) + " BPM");
    
        //Get the Average Hotness
        //var hotnessArray = _.sortBy((_.pluck(year, 'Hotness')));
        //for(var i=hotnessArray.length; i--;) hotnessArray[i] = hotnessArray[i] / 1;

        //var hotnessMean = (d3.mean(hotnessArray)).toFixed(2);
        $('#averageHotness1').text(Math.floor(data[0].Hotness*100)+"%");
    

    });
    
    d3.csv('data/metadata/' + genre2Selected + '.csv', function(data) {
            
       
        
        $('#numSongs2').text(data[0].Songs);

        //Set Average Length
        //var lengthArray = _.pluck(year, 'Duration');
        //convert to integers
        //for(var i=lengthArray.length; i--;) lengthArray[i] = lengthArray[i]|0;
        //var lengthMean = (d3.mean(lengthArray)).toFixed(2);
        //var minutes = Math.floor(lengthMean / 60);
        //var seconds = Math.floor(lengthMean % 60);
        //if (seconds < 10){
        //    seconds = "0" + seconds;
        //}

        var durVal = data[0].Duration;
        var minutes = Math.floor(durVal / 60);
        var seconds = Math.floor(durVal % 60);

        $('#averageDur2').text(minutes +":"+seconds+ "mins");
        //if ((data[0].Duration).contains(":")){
        //    $('#averageDur2').text(yearBottom[0].Duration);  
        //} else{
        //   var durVal = yearBottom[0].Duration;
        //    var minutes = Math.floor(durVal / 60);
        //    var seconds = Math.floor(durVal % 60);
        //    $('#averageDur2').text(minutes + ":" + seconds);  
        ////    
        //}
        //Get the Average Loudness
        //var loudArray = _.sortBy((_.pluck(year, 'Loudness')));
        //for(var i=loudArray.length; i--;) loudArray[i] = loudArray[i]|0;
        //var loudMean = (d3.mean(loudArray)).toFixed(2);
        var loudsss=Math.floor(data[0].Loudness* 1.0);
        $('#averageLoud2').text(loudsss + " dB");

        //Get the Average Temp
        //var tempoArray = _.sortBy((_.pluck(year, 'Tempo')));
        //for(var i=tempoArray.length; i--;) tempoArray[i] = tempoArray[i]|0;
        //var tempoMean = (d3.mean(tempoArray)).toFixed(2);

        $('#averageTempo2').text(Math.floor(data[0].Tempo * 1 )+ " BPM");
        //Get the Average Hotness
        //var hotnessArray = _.sortBy((_.pluck(year, 'Hotness')));
        //for(var i=hotnessArray.length; i--;) hotnessArray[i] = hotnessArray[i] / 1;

        //var hotnessMean = (d3.mean(hotnessArray)).toFixed(2);

        $('#averageHotness2').text(Math.floor(data[0].Hotness*100)+"%");        
        
    });
};

getData();

