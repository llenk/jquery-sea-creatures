$(document).ready(onReady);
    
function onReady() {
    console.log('jQuery has been sourced');
    $('#clickButt').on('click', clickButtOnClick);
    $('#clickButt').on('click', seaCreatureAdd);
}

function clickButtOnClick() {
    // console.log('clickButt');
    clickButtCount++;
    $('#numCount').text('Total Count: ' + clickButtCount);
    $('#numCount').css('color', pickColor()); //sets the number to display as a random color
    $('#seaCreatures').css('border', '5px ridge ' + pickColor()); //sets the table border to a random color
}

function pickColor() {
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let colorString = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return colorString;
}

function seaCreatureAdd() {
    // console.log($(nameInput).val());
    let tableString = '<tr><td>' + $(nameInput).val() + '</td><td>' + $(sizeInput).val();
    tableString += '</td><td>' + $(typeInput).val() + '</td><td>' + $(speedInput).val() + '</tr>';
    $('#seaCreatures').append(tableString);
    changeTableElementColors();
}

function changeTableElementColors() {
    $( "th" ).each(function(i) {
        this.style.color = pickColor();
        this.style.background = pickColor();
    });
    $( "td" ).each(function(i) {
        this.style.color = pickColor();
        this.style.background = pickColor();
    });
    
}

console.log('script.js has been sourced');
let clickButtCount = 0;