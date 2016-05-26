var previousYearTop = 0;
var previousYearBottom = 0;
var decadeForLyricsTOP=2010;
var decadeForLyricsBOT=2010;

$('.decade').click(function () {
    var thisId = $(this).attr('id');
    var decade = thisId.slice(0, 4);
    var tOrB = thisId.slice(5);

    if (tOrB == 'Top') {
        decadeForLyricsTOP=decade;
        topStart = ((decade - 1960) * 10);
        topEnd = topStart + 99;
        //$('#topLeftBound').css('left', topStart ); 
        $('#topRange').css({
            marginLeft: topStart + 'px',
            width: topEnd - topStart + 'px'
        });
        // $('#topRightBound').css('left', topEnd );
        $('#topStart').text((topStart / 10) + 1960);
        $('#topEnd').text(Math.floor((topEnd / 10) + 1960));
    } else {

        decadeForLyricsBOT=decade;
        bottomStart = ((decade - 1960) * 10);
        bottomEnd = bottomStart + 99;
        //$('#bottomLeftBound').css('left', bottomStart ); 
        $('#bottomRange').css({
            marginLeft: bottomStart + 'px',
            width: bottomEnd - bottomStart + 'px'
        });
        // $('#bottomRightBound').css('left', bottomEnd );
        $('#bottomStart').text((bottomStart / 10) + 1960);
        $('#bottomEnd').text(Math.floor((bottomEnd / 10) + 1960));
    };
    lyricsUpdate();
});

$('#allDecadesButtonTop').click(function () {
    topStart = 0;
    topEnd = 499;
    $('#topRange').css({
        marginLeft: topStart + 'px',
        width: topEnd - topStart + 'px'
    });

    decadeForLyricsTOP=2010;
    $('#topStart').text((topStart / 10) + 1960);
    $('#topEnd').text(Math.floor((topEnd / 10) + 1960));
    lyricsUpdate();

});
$('#allDecadesButtonBottom').click(function () {
    bottomStart = 0;
    bottomEnd = 499;
    $('#bottomRange').css({
        marginLeft: bottomStart + 'px',
        width: bottomEnd - bottomStart + 'px'
    });
    decadeForLyricsBOT=2010;
    $('#bottomStart').text((bottomStart / 10) + 1960);
    $('#bottomEnd').text(Math.floor((bottomEnd / 10) + 1960));
    lyricsUpdate();

});