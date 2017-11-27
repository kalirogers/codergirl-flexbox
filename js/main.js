
$(document).ready(function(){

/*----------------TEACHERS------------------------------------*/
// teacher object
function Teacher (name, department, ratings, imgId, classes) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
  this.imageId = imgId;
  this.classes = classes;
}
//Teacher protype
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
  return (total/this.ratings.length).toFixed(2);
  },

  getRating: function() {
    var newRate = prompt("We would like for you to review " + this.name +". Please enter a rating between 0.0-5.0");
    var newRateNum = parseFloat(newRate);
    console.log("not in while loop" + newRateNum);
    while (newRateNum !== null) {
        if(newRateNum <= 5.0) {
          this.addTeacherRating(newRateNum);
          alert("Thanks for your review! " + this.name + " average is now " + this.getRatingAvg());
          return newRateNum;
          newRateNum = null;
        }
        else {
          newRateNum = prompt("Pleaes try again. Please enter a rating between 0.0-5.0");
        }
    }

  }
}; //close to Teacher prototype


//new instances of courses
var trans101 = new Course ("Transfiguration 101", "Transfiguration", "Minerva McGonagall", "one");
var potion101 = new Course ("Potions 101", "Potions", "Severus Snape",  "two");
var defense101 = new Course ("Defense Against the Dark Arts 101", "Dark Arts", "Remus Lupin" , "one");
var charms101 = new Course ("Charms 101", "Charms", "Filius Flitwick", "two");
var astronomy101 = new Course ("Astronomy", "Astronomy", "Aurora Sinistra", "two");
var herb101 = new Course ("Herbology 101", "Herbology", "Pomona Sprout", "two");
var trans102 = new Course ("Transfiguration 102", "Transfiguration", "Minerva McGonagall", "two");
var care101 = new Course("Care of Magical Creatives 101", "Care of Magical Creatures", "Rubeus Hagrid", "one")
var care102 = new Course("Care of Magical Creatives 102", "Care of Magical Creatures", "Rubeus Hagrid", "two")
//this is the array of all the courses available
var allCourses = [trans101, potion101, defense101, charms101, astronomy101, herb101, trans102];

//this calls the funciton and places the boxes on the page.
updateCourseArray(allCourses);

//new instances of teachers
var McGonagall = new Teacher ("Minerva McGonagall", "Transfiguration", [5.0, 4.3, 4.0], "mcgonagall", [trans101, trans102]);
var Dumbledore = new Teacher ("Albus Dumbledore", "Headmaster", [5.0, 4.5, 2.0], "dumbledore", []);
var Hagrid = new Teacher ("Rubeus Hagrid", "Care of Magical Creatures", [ 4.2, 5.0, 3.0], "hagrid", [care101, care102]);
var Lupin = new Teacher ("Remus Lupin", "Defense Against the Dark Arts", [3.5, 5.0, 2.8], "lupin", [defense101]);
var Snape = new Teacher ("Severus Snape", "Potions", [2.5, 3.5, 2.8], "snape", [potion101]);
var Flitwick = new Teacher ("Filius Flitwick", "Charms", [5.0, 4.0, 4.8], "flitwick", [charms101]);
var Sinistra = new Teacher ("Aurora Sinistra", "Astronomy", [3.0, 4.0, 5.0], "sinistra", [astronomy101]);
var Sprout = new Teacher ("Pomona Sprout","Herbology", [4.0, 4.5, 5.0], "sprout", [herb101]);

var allTeachers = [McGonagall, Hagrid, Lupin, Snape, Flitwick, Sinistra, Sprout];

//dynmically creates the teachers profile boxes on index.html page
function updateTeacherArray(teacherArray, courseArray) {
  for(var i=0; i<teacherArray.length; i++) {
    var teacherId = 'teacher' + i;
    $("#teachers").append("<box id=" + teacherId + "></box>");
    $("#teachers").find("#" + teacherId).append("<div class='teacher'></div>");
    $("#teachers").find("#" + teacherId).find(".teacher").append("<div class='teacher-image'><img src='images/" + teacherArray[i].imageId +".jpg' /></div>")
    $("#teachers").find("#" + teacherId).find(".teacher").append("<div class='teacher-content'><h1>" + teacherArray[i].name + "</h1><h2>" + teacherArray[i].department + "</h2></div>");
    //console.log(teacherArray[i].classes);
    var courseTitles = getTitle(teacherArray[i].classes).join('<br />');

    $("#teachers").find("#" + teacherId).append("<div class='second-row'><div class='course'><h2>Courses</h2>" + courseTitles + "</div></div>");
    var avgRating = teacherArray[i].getRatingAvg(teacherArray[i].ratings);
    //console.log(avgRating);
    $("#teachers").find("#" + teacherId).find(".second-row").append("<div class='rating'><h2>Rating</h2><h3>" + avgRating + "</h3></div>");
  };
}


function getTitle(classArray) {
  var classTitleArray = []
  for(var i = 0; i < classArray.length; i++){
    //console.log(classArray[i].title);
    classTitleArray.push(classArray[i].title);
  }
  console.log(classTitleArray);
  return classTitleArray;
}

//this function opens the new rating form and adds new rating to teacher
function getNewRating(teacherArray){
  $('#teachers box')
    .on('mouseover', function() {
      var boxId = $(this).attr("id");
      console.log(boxId);
      $('#' + boxId).css({"color": "#ffdc78"});
    })
    .on('click', function(){
      var boxId = $(this).attr("id");
      console.log(boxId);
    //$("body").find("#newRating").addClass("newRating");
      var teacherName = $("#" + boxId + " h1").text();
      console.log(teacherName);
      for(var i=0; i<teacherArray.length; i++) {
        if(teacherName == teacherArray[i].name){
          //console.log(teacherArray[i].ratings);
          var updatedRating = teacherArray[i].getRating();
          var updatedAvg = teacherArray[i].getRatingAvg(updatedRating);
          console.log(updatedRating);
          console.log(updatedAvg);
          $("#" + boxId).find(".rating h3").text(updatedAvg);
          }
        }
      })
      .on('mouseout', function() {
        var boxId = $(this).attr("id");
        $('#' + boxId).css({"color": "black"});
      });
}
updateTeacherArray(allTeachers, allCourses);
getNewRating(allTeachers);

/* ---------------COURSES ---------------*/
function Course (title, department, teacher, semester) {
  this.title =  title;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
};

function filterDepartment(courseArray, department, sem) {
  var newCourseArray = [];
  //console.log(courseArray);
  //console.log("dept " + department);
  //console.log("sem " + sem);
  for(var i=0; i<courseArray.length; i++){
      var courseDept = courseArray[i].department;
      var availSemester = courseArray[i].semester;
      console.log("in for loop: course " + courseDept);
      console.log("in for loop: avail " + availSemester);
      //console.log(newCourseArray);
      if(department == courseDept && sem == availSemester) {
          console.log(department);
          console.log(courseDept);
          //console.log("true");
        console.log("true");
        newCourseArray.push(courseArray[i]);
        console.log(newCourseArray);
        //return courseArray[i];
      //alert("in if statment and it is true")
          //newCourseArray.push(courseArray[i]);
          //console.log("It was true");
      }
      //else {
        //console.log("false");
        //return newCourseArray;
        //alert("The requested class is not available in semester " + sem)
      //}
  }
  if (newCourseArray.length == 0){
    console.log("no information");
    alert("There are no courses available in " + department + " in semester " + sem);
    return newCourseArray;
  }
  else {
    console.log("else statement outside of loop");
    return newCourseArray;
}
};
//this function uses a loop to get the course information from the course object
function updateCourseArray(courseArray) {
  for(var i=0; i<courseArray.length; i++) {
    var courseId = 'course' + i;
    $("#courses").append("<box id=" + courseId + ' class="courses"></box>');
    $("#courses").find("#" + courseId).append("<div class='course-name'><h2>" + courseArray[i].department + "</h2><p>" + courseArray[i].title + "</p></div>");
    $("#courses").find("#" + courseId).append("<div class='course-info'><p><strong>Teacher: </strong>" + courseArray[i].teacher + "</p><p><strong>Semester: </strong>" + courseArray[i].semester + "</p></div>");
  };
}

$('#filter-button').on('click', function(){
  $('#courses').empty();
  var departVal = $('.department-drop').val();
  var semesterVal = $('.semester-drop').val();
  var oneDepartment = filterDepartment(allCourses, departVal, semesterVal);
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
    //console.log(this.courses);
  },

  changeMajor: function(newMajor){
    this.major = newMajor;
    //console.log(this.major);
  }

}

var potter = new Student("Harry Potter", "Defense Against the Dark Arts", "harry@hogwarts.com", 3.7, ["Defense 101", "Tranfiguration 101", "Potions 101"]);
var granger = new Student("Hermione Granger", "Charms", "hermione@hogwarts.com", 3.7, ["Charms 101", "Tranfiguration 101", "Potions 101"]);
var weasley = new Student("Ron Weasley", "Defense Against the Dark Arts", "ron@hogwarts.com", 3.7, ["Care of Magical Creatures", "Tranfiguration 101", "Potions 101"]);

var allStudents = [potter, granger, weasley];

function updateStudents(studentArray) {
  for(var i = 0; i <studentArray.length; i++) {
    var studentId = 'student' + i;
    console.log(studentId);
      $("#students").append("<box id=" + studentId + "></box>");
      $("#students").find("#" + studentId).append("<div class='student'></div>");
      //$("#students").find("#" + studentId).find(".student").append("<div class='student-image'><img src='images/' /></div>");
      $("#students").find("#" + studentId).find(".student").append("<div class='student-name'><h1>" + studentArray[i].name + "</h1><h2>" + studentArray[i].major + "</h2></div>");
      var coursesList = studentArray[i].courses.join(", ");
      $("#students").find("#" + studentId)
      .append(
        "<div class='second-row left-align'>" +
        "<div class='student-info'>" +
        "<div class='info-label'>Email:</div>" +
        "<div class='info'>" + studentArray[i].email + "</div>" +
        "<div class='info-label'>GPA:</div>" +
        "<div class='info'>" + studentArray[i].avgGpa + "</div>" +
        "<div class='info-label'>Courses:</div>" +
        "<div class='info'>" + coursesList + "</div>" +
        "</div></div>")
  }
}

function addNewStudent() {
  $("#newStudent").on("click", "button", function(){
    $("#newStudentForm").slideDown();
    $(".newStudentButton").css({"display": "none"});
    console.log("open form");
  });
  $("#newStudentForm").on("submit", function(){
    var newStudentInfo = [];
    var studentName = $("#newStudentName").val();
    newStudentInfo.push(studentName);
    console.log(newStudentInfo);
    var studentMajor = $("#newStudentMajor").val();
    newStudentInfo.push(studentMajor);
    console.log(newStudentInfo);
    var studentEmail = $("#newStudentEmail").val();
    newStudentInfo.push(studentEmail);
    console.log(newStudentInfo);
    console.log("Student name is: " + studentName + studentMajor + studentEmail);
    alert("this is a new array:" + newStudentInfo);
    var test = updateStudents(newStudentInfo);
    console.log("this is a test");
  });

}
updateStudents(allStudents);
addNewStudent();
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
}

});
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
