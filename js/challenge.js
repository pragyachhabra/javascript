function myFunction() {

    var dob = document.getElementById("userDateOfBirth").value;
    
    //Validation for checking whether date format
    if (isValidDate(dob) == false) {
    	alert("Enter a valid DOB in format YYYY-MM-DD e.g. 9 May 1990 should be 1990-05-09");
	    return false;
    }

    // Return error if User's age is less than 18 years
	if( getAge(dob) < 18 ) {
	    alert("Input DOB: "+dob+" should be atleast 18 years old");
	    return false;
	}

}

//This function will check whether date is in valid format
function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if(!dateString.match(regEx)) return false;  // Invalid format
  var d = new Date(dateString);
  if(!d.getTime() && d.getTime() !== 0) return false; // Invalid date
  return d.toISOString().slice(0,10) === dateString;
}

//This function will calculate age of user on basis of birth date
function getAge(DOB) {
	var today = new Date()
	var year = DOB.substr(0,4);
	var month = DOB.substr(5,2);
	var dateOfMonth = DOB.substr(8,2);
    var age = today.getFullYear() - year;
    if (today.getMonth()+1 < month) {
    	age--;
    }
    else if (today.getMonth()+1 == month && today.getDate() < dateOfMonth) {
    	age--;
    }
    return age;
}