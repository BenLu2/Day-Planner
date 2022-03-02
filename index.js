// use the moment to display the cureent date
$('#currentDay').text(moment().format('dddd, MMMM Do'));

//create show time function to show the current time in hh.mm.ss format
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    if(h == 0){
        h = 12;
    } 
    if(h > 12){
        h = h - 12;
        session = "PM";
    } 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();

//create event listener 
$(document).ready(function() {
    $('.btn').on('click', function() {
        console.log('CLICKED!')
        var description = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id')
    // use local storage storing item
        localStorage.setItem(time, description);
    });

    function hourUpdater() {
        // Retrieves current hours from above
        var currentHour = moment().hours();

        // loop over time blocks
        $('.time-block').each(function() {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);
            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

hourUpdater();

// grabs saved data from localStorage'));
$('#hour-9 .description').val(localStorage.getItem('hour-8'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
});