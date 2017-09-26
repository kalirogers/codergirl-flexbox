console.log("This file is linked!");

var teacher = "Professor McGonagall";
var title = "Tranfiguration";
var rating = [3.4, 5.0, 4.2];

console.log(
  "Teacher: " + teacher + "\n"+ "Department: " + title + "\n" + "Rating: " + rating
);


var avgRating = (3.4 + 5.0 + 4.2)/3;
rdAvgRating = avgRating.toFixed(2);

console.log("Average Rating: " + rdAvgRating);

var studName = "Harry Potter";
var studMajor = "Defense Against the Dark Arts";
var studEmail = "harry@hogwarts.com";
var studGpa = 3.7;
var studCourses = "Defense 101";

console.log(
  "Name: " + studName + "\n"+ "Major: " + studMajor + "\n" + "Email: " + studEmail + "\nGPA: " + studGpa + "\nCourses: " + studCourses
);

function getRatingAvg(rating[]) {
  var total = 0;
  for(i=0, i<=rating.length, i++){
    total = total + rating[i];
  }
  console.log(total/rating.length);
}

getRatingAvg(rating[1.5, 2.5, 3.5, 4.5, 7.0]);
