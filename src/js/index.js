
$( document ).ready(function() {
    $('#myLinks').hide();
});

function showOrHideMenu() {
    if ($('#myLinks').css("display") === "none") {
        $('#myLinks').show();    
    } else {
        $('#myLinks').hide();
    }
    
}