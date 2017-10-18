/* ---------------TEACHERs ---------------*/

var teacher = {
  name: "Professor McGonagall",
  department: "Tranfiguration",
  ratings: [3.4, 5.0, 4.2],

  addTeacherRating: function(rate) {
    this.ratings.push(rate);
  },

  getRatingAvg: function() {
    var total = 0;
    //console.log(this.ratings.length);
    for(i=0; i < this.ratings.length; i++) {
      total = total + this.ratings[i];
      //console.log(total);
    }
  //console.log(total/this.ratings.length);
  return total/this.ratings.length;
  }
}

//var avgRating = (3.4 + 5.0 + 4.2)/3;
//var rdAvgRating = avgRating.toFixed(2);
//var rateArray = [1.5, 2.5, 3.5, 4.5, 7.0];

/*instructions*/
//console.log("Teacher: " + teacher + "\n"+ "Department: " + title + "\n" + "Rating: " + rating);
//console.log("Average Rating: " + rdAvgRating);

var newRate = prompt("We would like for you to review. Please enter a rating between 0.0-5.0");
var newRateNum = parseInt(newRate);

while (newRateNum !== null)
 {
  if(newRateNum <= 5.0) {
    teacher.addTeacherRating(newRateNum);
    alert("Thanks for your review! " + teacher.name + " average is now " + teacher.getRatingAvg().toFixed(2));
    newRateNum = null;
}
 else {
   newRateNum = prompt("Pleaes try again. Please enter a Please enter a rating between 0.0-5.0");
 }
};

/* ---------------COURSES ---------------*/
var course = {
  name: "Transfiguration 101",
  department: "Transfiguration",
  teacher: "Professor McGonagall",
  semester: 1
}

/* uses string for teacher
var allCourses =
[
  {name: "Transfiguration 101", department: "Transfiguration", teacher: "Professor McGonagall", sememster: 1},
  {name: "Potions 101", department: "Potions", teacher: "Professor Slughorn", semester: 2},
  {name: "Defense Against the Dark Arts 101", department: "Dark Arts", teacher: "Professor Snape", semember: 1},
  {name: "Charms 101", department: "Charms", teacher: "Professor Flitwick", semester: 2},
  {name: "Astronomy", department: "Astronomy", teacher: "Professor Sinistra", sememster: 2},
  {name: "Herbology 101", department: "Herbology", teacher: "Professor Sprout", sememster: 1},
  {name: "Transfiguration 102", department: "Transfiguration", teacher: "Professor McGonagall", sememster: 2},
];*/

var allCourses =
[
  {name: "Transfiguration 101", department: "Transfiguration", teacher: teacher, sememster: 1},
  {name: "Potions 101", department: "Potions", teacher: teacher, semester: 2},
  {name: "Defense Against the Dark Arts 101", department: "Dark Arts", teacher: teacher, semember: 1},
  {name: "Charms 101", department: "Charms", teacher: teacher, semester: 2},
  {name: "Astronomy", department: "Astronomy", teacher: teacher, sememster: 2},
  {name: "Herbology 101", department: "Herbology", teacher: teacher, sememster: 1},
  {name: "Transfiguration 102", department: "Transfiguration", teacher: teacher, sememster: 2},
];

console.log(allCourses[0].teacher.name);

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



function filterDepartment(courseArray, department) {
  var newCourseArray = [];
  for(var i=0; i<courseArray.length; i++){

      var course = courseArray[i].department;
      console.log(course);
      //console.log(department);
        if(course == department){
          newCourseArray.push(courseArray[i].name);
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
  if(month === "december" || month === "may"){ //if december
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
  }// end if dec or may
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
