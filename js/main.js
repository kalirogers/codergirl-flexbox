
$(document).ready(function(){

function Teacher (name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
}

Teacher.prototype = {
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
  },

  getRating: function() {
    var newRate = prompt("We would like for you to review " + this.name +". Please enter a rating between 0.0-5.0");
    var newRateNum = parseInt(newRate);

    while (newRateNum !== null) {
        if(newRateNum <= 5.0) {
          this.addTeacherRating(newRateNum);
          alert("Thanks for your review! " + this.name + " average is now " + this.getRatingAvg().toFixed(2));
          return newRateNum;
          newRateNum = null;
        }
        else {
          newRateNum = prompt("Pleaes try again. Please enter a rating between 0.0-5.0");
        }
    }

  }
}; //close to Teacher prototype

//new instances of teachers
var McGonagall = new Teacher ("Minerva McGonagall", "Transfiguration", [5.0, 4.3, 4.0]);
var Dumbledore = new Teacher ("Albus Dumbledore", "Headmaster", [5.0, 4.5, 2.0]);
var Hagrid = new Teacher ("Rubeus Hagrid", "Care of Magical Creatures", [ 4.2, 5.0, 3.0]);

//console.log (McGonagall.name + "\n" + McGonagall.department + "\nAvg. Rating: " + McGonagall.getRatingAvg() + "\nAdding Rating: " + McGonagall.getRating() + "\nNew Avg. Rating: " + McGonagall.getRatingAvg());
//console.log (Dumbledore.name + "\n" + Dumbledore.department + "\nAvg. Rating: " + Dumbledore.getRatingAvg() + "\nAdding Rating: " + Dumbledore.getRating() + "\nNew Avg. Rating: " + Dumbledore.getRatingAvg());
//console.log (Hagrid.name + "\n" + Hagrid.department + "\nAvg. Rating: " + Hagrid.getRatingAvg() + "\nAdding Rating: " + Hagrid.getRating() + "\nNew Avg. Rating: " + Hagrid.getRatingAvg());


/* ---------------COURSES ---------------*/
function Course (title, department, teacher, semester) {
  this.title =  title;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
};

function filterDepartment(courseArray, department) {
  var newCourseArray = [];
  for(var i=0; i<courseArray.length; i++){
      var course = courseArray[i].department;
      if(course == department){
          //newCourseArray.push(courseArray[i].title);
          newCourseArray.push(courseArray[i]);
      }
    };
  return newCourseArray;
};


function updateCourseArray(courseArray) {
  for(var i=0; i<courseArray.length; i++) {
    console.log(courseArray[i].teacher);
    //$("#test").append("<div>Hello</div");
    var courseId = 'course' + i;
    $("#courses").append("<box id=" + courseId + ' class="courses"></box>');
    $("#courses").find("#" + courseId).append("<div class='course-name'><h2>" + courseArray[i].department + "</h2><p>" + courseArray[i].title + "</p></div>");
    $("#courses").find("#" + courseId).append("<div class='course-info'><p><strong>Teacher: </strong>" + courseArray[i].teacher + "</p><p><strong>Semester: </strong>" + courseArray[i].semester + "</p></div>");
  };
}



var trans101 = new Course ("Transfiguration 101", "Transfiguration", McGonagall.name, 1);
var potion101 = new Course ("Potions 101", "Potions", "Professor Slughorn",  2);
var defense101 = new Course ("Defense Against the Dark Arts 101", "Dark Arts", "Professor Snape", 1);
var charms101 = new Course ("Charms 101", "Charms", "Professor Flitwick", 2);
var astronomy101 = new Course ("Astronomy", "Astronomy", "Professor Sinistra", 2);
var herb101 = new Course ("Herbology 101", "Herbology", "Professor Sprout", 1);
var trans102 = new Course ("Transfiguration 102", "Transfiguration", McGonagall.name, 2);

var allCourses = [trans101, potion101, defense101, charms101, astronomy101, herb101, trans102];

var newArray = filterDepartment(allCourses, "Charms");
//console.log(newArray);
//console.log(potion101);

//updateCourseArray(allCourses);

$('#filter-button').on('click', function(){
  $('#courses').empty();
  var departVal = $('.department-drop').val();
  var semesterVal = $('.semester-drop').val();
      //console.log(departVal);
      //console.log(semesterVal);
      var oneDepartment = filterDepartment(allCourses, departVal);
      //console.log(oneDepartment);
      updateCourseArray(oneDepartment);
});
/* ---------------STUDENTS ---------------*/

function Student(name, major, email, avgGpa, courses){
  this.name = name;
  this.major = major,
  this.email = email;
  this.avgGpa = avgGpa;
  this.courses = courses;
}

Student.prototype = {
  addCourse: function(course){
    this.courses.push(course);
    return this.courses;
  },

  removeCourse: function(course){
    for(var i = 0; i<this.courses.length; i++){
      //console.log(this.courses.length);
      if(this.courses[i] == course){
        //console.log(this.courses[i]);
        this.courses.splice(i, 1);
      }
    }
    console.log(this.courses);
  },

  changeMajor: function(newMajor){
    this.major = newMajor;
    console.log(this.major);
  }

}

var potter = new Student("Harry Potter", "Defense Against the Dark Arts", "harry@hogwarts.com", 3.7, ["Defense 101", "Tranfiguration 101", "Potions 101"]);
var granger = new Student("Hermione Granger", "Charms", "hermione@hogwarts.com", 3.7, ["Charms 101", "Tranfiguration 101", "Potions 101"]);
var weasley = new Student("Ron Weasley", "Defense Against the Dark Arts", "ron@hogwarts.com", 3.7, ["Care of Magical Creatures", "Tranfiguration 101", "Potions 101"]);

console.log("Adding course: Defense 102\n" + "To Student's Courses: " + potter.name + "\nNow they are taking....\n" + potter.addCourse("Defense 102"));

//var gradYear = prompt("What is your expected graduation year?");
//var gradMonth = prompt("What month will you graduate?");
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

//welcomeStudentsByGraduatingClass(gradMonth, gradYear);

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
];

var allCourses =
[
  {name: "Transfiguration 101", department: "Transfiguration", teacher: teacher, sememster: 1},
  {name: "Potions 101", department: "Potions", teacher: teacher, semester: 2},
  {name: "Defense Against the Dark Arts 101", department: "Dark Arts", teacher: teacher, semember: 1},
  {name: "Charms 101", department: "Charms", teacher: teacher, semester: 2},
  {name: "Astronomy", department: "Astronomy", teacher: teacher, sememster: 2},
  {name: "Herbology 101", department: "Herbology", teacher: teacher, sememster: 1},
  {name: "Transfiguration 102", department: "Transfiguration", teacher: teacher, sememster: 2},

];*/
//console.log(allCourses[3].semester);

/*instructions*/
//console.log("Teacher: " + teacher + "\n"+ "Department: " + title + "\n" + "Rating: " + rating);
//console.log("Average Rating: " + rdAvgRating);

/*Adding Course: <course name>
To Student's Courses: <student name>
Now they are taking....
<list course names of all courses the student is taking>*/


/*var studName = "Harry Potter";
var studMajor = "Defense Against the Dark Arts";
var studEmail = "harry@hogwarts.com";
var studGpa = 3.7;
var studCourses = "Defense 101";*/

/*instructions
console.log(
  "Name: " + studName + "\n"+ "Major: " + studMajor + "\n" + "Email: " + studEmail + "\nGPA: " + studGpa + "\nCourses: " + studCourses
);*/
});
