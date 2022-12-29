// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function createScheduler(){
  
  for(var hourId = 9; hourId <= 17; hourId++ ){
    
    
    var timeBlock = $('#hour-' + hourId)
    var hour = $('<div>', {
      class:"col-2 col-md-1 hour text-center py-3",
    })
    
    var textarea = $('<textarea>', {
      class:"col-8 col-md-10 description",
      rows:"3",
    })
    
    var saveButton = $('<button>', {
      class:"btn saveBtn col-2 col-md-1",
      ariaLabel:"save",
    })
    var buttonStatus = $('<i>',{
      class:"fas fa-save",
      ariaHidden:"true"
    })
   
    hour.text(hourId + 'AM');
    
    timeBlock.append(hour,textarea,saveButton);
    saveButton.append(buttonStatus);
    
    // if(hourId < 12){
    //   hour.text(hourId + 'AM');

    // }else if(hourId = 12){
    //   hour.text(hourId + 'PM');

    // }else if(hourId > 12){
    //   hourId-=12;
    //   hour.text(hourId + 'PM');
    // }
    

  }
}

createScheduler();

$(function calendar() {
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 

  
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function() {
    var today = dayjs();
    $('#currentDay').text(today.format("dddd, MMMM D"));
    
  }, 1000);
});

// calendar();