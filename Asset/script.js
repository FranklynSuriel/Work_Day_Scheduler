// Wrap all code that interacts with the DOM in a call to jQuery 
// to ensure that the code isn't run until the browser has finished 
// rendering all the elements in the html.
$(function calendar() {
  // hourPm will be use to add the id of the time block after noon.
  var hourPm = 1
  
  // For loop to create each one of time blocks.
  for(var hourId = 9; hourId <= 17; hourId++ ){
    
    // create a variable with the id of each block.
    var timeBlock = $('#hour-' + hourId)
    // create a div element to show time on each block.
    var hour = $('<div>', {
      class:"col-2 col-md-1 hour text-center py-3",
    })
    // create a textarea element for each block.
    var textarea = $('<textarea>', {
      class:"col-8 col-md-10 description",
      rows:"3",
    })
    // Create a  save button element for each block.
    var saveButton = $('<button>', {
      class:"btn saveBtn col-2 col-md-1",
      ariaLabel:"save",
    })
    // Set the icon image for the save button.
    var buttonStatus = $('<i>',{
      class:"fas fa-save",
      ariaHidden:"true"
    })
    
    // append each element  
    timeBlock.append(hour,textarea,saveButton);
    saveButton.append(buttonStatus);
    // create a variable to get the Class of the buttons
    var buttons = $('.saveBtn');
    
    // if statement to assign the time on variable hour.
    // it will create the text for each block time.
    if(hourId < 12){
      hour.text(hourId + 'AM');   //am time   
    }else if (hourId === 12) {    
      hour.text(hourId + 'PM')    //noon
    }else {
      hour.text(hourPm + 'PM');   //pm time
      hourPm++;
    }
    
    // timeOfDay will get the current hour in 24 hour format
    // and will be use to apply the color code of each block.
    var timeOfDay = Number(dayjs().format("H"));
    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    if(hourId < timeOfDay){                   //if time is less than current time.
      timeBlock.addClass("past");             //will add class past.
      timeBlock.removeClass("present future");//and will remove present or future if that class exist.
    }else if (hourId === timeOfDay){          //if time is equal to current time.
      timeBlock.addClass("present");          //will add class present.
      timeBlock.removeClass("past future");   //and will remove past or future if that class exist.
    }else {                                   //if time is not less or not equal to current time.
      timeBlock.addClass("future");           //will add class future.
      timeBlock.removeClass("past present");  //and will remove past or present if that class exist.
    }  
  }
  // Add a listener for click events on the save button.
  buttons.on('click', function(event){
    event.preventDefault();   
    var textarea = $(this).siblings('.description').val(); //get the value of the sibling textarea of the save button that was clicked.
    var time = $(this).parent().attr('id');   //get the id of the parent of the save button that was clicked.
    localStorage.setItem(time, textarea);  
  })
  
  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.  
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
  
  // Add code to display the current date in the header of the page.
  setInterval(function() {
    $('#currentDay').text(dayjs().format("dddd, MMMM Do, YYYY"));
    $('#currentTime').text(dayjs().format("hh:mm:ss"));    
  }, 1000);
});