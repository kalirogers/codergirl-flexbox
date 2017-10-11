//console.log("This file is linked!");

/* ---------------TEACHERS ---------------*/

/*variables*/

var teacher = "Professor McGonagall";
var title = "Tranfiguration";
var rating = [3.4, 5.0, 4.2];

var avgRating = (3.4 + 5.0 + 4.2)/3;
var rdAvgRating = avgRating.toFixed(2);

var rateArray = [1.5, 2.5, 3.5, 4.5, 7.0];

/*functions*/

function getRatingAvg(rates) {
  var total = 0;
  console.log(rates.length);
  for(i=0; i < rates.length; i++) {
    total = total + rates[i];
  }
console.log(total/rates.length);
return total/rates.length;
}

function addTeacherRating(rateArray, newRate) {
  rateArray.push(newRate);
  console.log(rateArray.length);
  return rateArray;
}

/*instructions*/
console.log("Teacher: " + teacher + "\n"+ "Department: " + title + "\n" + "Rating: " + rating);

console.log("Average Rating: " + rdAvgRating);


/*var newRate = prompt("We would like for you to review. Please enter a rating between 0.0-5.0");
console.log(newRate);

while (newRate !== null) {
  if(newRate <= 5.0) {
    addTeacherRating(rateArray, newRate);
    alert("Thanks for your review! " + teacher + " average is now " + getRatingAvg(rateArray).toFixed(2));
    console.log(newRate);
    newRate = null;
}
 else {
   newRate = prompt("Pleaes try again. Please enter a Please enter a rating between 0.0-5.0");
 }
};*/

/* ---------------STUDENTS ---------------*/
/*declarations*/
var studName = "Harry Potter";
var studMajor = "Defense Against the Dark Arts";
var studEmail = "harry@hogwarts.com";
var studGpa = 3.7;
var studCourses = "Defense 101";

/*instructions*/
console.log(
  "Name: " + studName + "\n"+ "Major: " + studMajor + "\n" + "Email: " + studEmail + "\nGPA: " + studGpa + "\nCourses: " + studCourses
);

var allCourses =
[
  ["Transfiguration 101", "Transfiguration"],
  ["Potions 101", "Potions"],
  ["Defense Against the Dark Arts", "Dark Arts"],
  ["Transfiguration 102", "Transfiguration"]
];

function filterDepartment(courseArray, department) {
  var newCourseArray = [];
  for(var i=0; i<courseArray.length; i++){

      var course = courseArray[i];
      //console.log(course[1]);
      //console.log(department);
        if(course[1] == department){
          newCourseArray.push(course[0]);
      }
    };
  return newCourseArray;
};
var newArray = filterDepartment(allCourses, "Transfiguration");
console.log(newArray);

/* ---------------STUDENT GRADUATION & LEVEL ---------------*/

var gradYear = prompt("What is your expected graduation year?");
var gradMonth = prompt("What month will you graduate?");
var date = new Date();
var currentYear = date.getFullYear();
var currentMonth = date.getMonth();

var welcomeCollegeStudent = function(level) {
    alert("Welcome " + level + " !");
  };

var welcomeHsStudent = function(level) {
  alert("You're still a " + level + " in high school!");
  };

var welcomeYoungStudent = function(level) {
    alert("Whoa, college is some years away");
    };

var gradDate = function(month, year){
  console.log(month + " " + year);
  return month + " " + year;
};

var classLevel = function (month, year) {
  console.log(currentYear);
  var className = "";
  if(month === "december"){ //if december
    if(currentMonth>4){ //if month
      var yearNum = year - currentYear;
      console.log(yearNum);
      if(yearNum == 0 || yearNum == 4){
        className="Senior";
      }
      else if(yearNum == 1 || yearNum == 5){
        className = "Junior";
      }
      else if(yearNum == 2 || yearNum == 6) {
        className = "Sophmore";
      }
      else if(yearNum == 3  || yearNum == 7 ) {
        className = "Freshman";
      }
    } //end month
    else if(currentMonth < 4){ //else if month
      var yearNum = (year-1) - currentYear;
      console.log(yearNum);
      if(yearNum == 0 || yearNum == 4){
        className="Senior";
      }
      else if(yearNum == 1 || yearNum == 5){
        className = "Junior";
      }
      else if(yearNum == 2 || yearNum == 6) {
        className = "Sophmore";
      }
      else if(yearNum == 3  || yearNum == 7 ) {
        className = "Freshman";
      }
      else {
        className = "You are too young to be in high school or college!"
      }
    }// end else if month
  }// end if december

  else if(month === "may"){ //if else may
    if(currentMonth<6){
      var yearNum = year - currentYear;
      if(yearNum == 0 || yearNum == 4){
        className="Senior";
      }
      else if(yearNum == 1 || yearNum == 5){
        className = "Junior";
      }
      else if(yearNum == 2 || yearNum == 6) {
        className = "Sophmore";
      }
      else if(yearNum == 3  || yearNum == 7 ) {
        className = "Freshman";
      }
    } //end if month
    else if(currentMonth > 4){
      var yearNum = (year-1) - currentYear;
      console.log(yearNum);
      if(yearNum == 0 || yearNum == 4){
        className="Senior";
      }
      else if(yearNum == 1 || yearNum == 5){
        className = "Junior";
      }
      else if(yearNum == 2 || yearNum == 6) {
        className = "Sophmore";
      }
      else if(yearNum == 3  || yearNum == 7 ) {
        className = "Freshman";
      }
      else {
        className = "You are too young to be in high school or college!"
      }
    } //else if
  }
  else {
    prompt("Please choose either may or december for graduation month");
  } //end else
  console.log(className);
  return className;
}; //function close

function welcomeStudentsByGraduatingClass(month, year) {
  if(month !== null && year !==null){
    var classResult = classLevel(gradMonth, gradYear);
    if(year-currentYear < 4 && year > currentYear){
      welcomeCollegeStudent(classResult);
    }
    else if (year-currentYear <= 8  && year-currentYear >= 4){
      welcomeHsStudent(classResult);
    }
    else if(year-currentYear > 8){
      welcomeYoungStudent(classResult);
    }
    else if(year < currentYear) {
      alert("You are too old");
    }
  }
  else{
    prompt("Please start over.");
  }
};

welcomeStudentsByGraduatingClass(gradMonth, gradYear);
