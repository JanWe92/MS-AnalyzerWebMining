/*Copyright (c) 2013, Jason Davies.  Modifications Made
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
* Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.
* The name Jason Davies may not be used to endorse or promote products
derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL JASON DAVIES BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.*/

var lyricsUpdate = function(){

    d3.csv("data/lyrics/" + genre1Selected +"/"+decadeForLyricsTOP+".csv", function(error, data){
    
    //Empty the clouds previously made. Transition someday...
    $("#genre1cloud").empty();
    
    var wordsTop = [];
    


    for (i = 0; i < data.length; i++){
        if(data[i].count> 8){
            wordsTop.push({"text":data[i].word, "size":data[i].count});
               //push the words in the right number of times
        }
            
    };
 
        var fill = d3.scale.category20();
        d3.layout.cloud().size([350, 500])
            .words(wordsTop.map(function(d) {
                return {text: d.text, size: d.size};
        }))
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 1) * 90; })
        .font("Impact")
        .fontSize(function(d) { return ((d.size) * 2); })
        .on("end", draw)
        .start();
        function draw(words) {
            d3.select("#genre1cloud").append("svg")
            .attr("width", 350)
            .attr("height", 500)
            .append("g")
            .attr("transform", "translate(150,250)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
        }

    });
    
    d3.csv("data/lyrics/" + genre2Selected +"/"+decadeForLyricsBOT+".csv", function(error, data){
    
        
    //Empty the clouds previously made. Transition someday...
    $("#genre2cloud").empty();

    var wordsBottom = [];
    
     for (i = 0; i < data.length; i++){
        if(data[i].count> 8){
            wordsBottom.push({"text":data[i].word, "size":data[i].count});
               //push the words in the right number of times
           }
            
    };
 
        var fill = d3.scale.category20();
        
        
        d3.layout.cloud().size([350, 500])
            .words(wordsBottom.map(function(d) {
                return {text: d.text, size: d.size};
        }))
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 1) * 90; })
        .font("Impact")
        .fontSize(function(d) { return ((d.size) * 2); })
        .on("end", draw)
        .start();
        function draw(words) {
            d3.select("#genre2cloud").append("svg")
            .attr("width", 350)
            .attr("height", 500)
            .append("g")
            .attr("transform", "translate(150,250)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
        }




    });

};

lyricsUpdate();
