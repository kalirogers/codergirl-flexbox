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

var userDepartment = prompt("What department are you looking for a course with in?")

while (userDepartment !== null) {
  console.log(userDepartment);
  if(userDepartment == "Transfiguration" || userDepartment == "Potions" || userDepartment == "Dark Arts"){
    var userDepartmentFilter = filterDepartment(allCourses, userDepartment);
    alert(userDepartmentFilter);
    userDepartment = null;
  }
  else {
    userDepartment = prompt("We do not have courses within the department. Try another department.");
  }
}
