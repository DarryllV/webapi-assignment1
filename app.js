const tt = require("./Darryll_TT-Service");


//Function 1: Add Tutor info
//AddTutor(tutName, tutCourse)
console.log("Add Tutor Info: ") //function output headers

console.log(tt.AddTutor("Mr David", "Science"));


//Function 2: Add Student Info
//AddStudent(studName, studAge, admNo)
console.log("\nAdd Student Info: ")

console.log(tt.AddStudent("Denise", 16, "269283C"));


//Function 3: Schedule Session
//scheduleSession(student, tutor, day, session)
console.log("\nSchedule Session: ")

console.log(tt.scheduleSession("Denise", "Mr David", "Wednesday", "AM"))



//Function 4: Show entire Schedule
console.log("\nShow entire schedule: ") 

console.log(tt.showSchedule());


//Function 5: Edit Schedule
//editSchedule(oldDay, oldSession, newStud, newTut)

console.log(tt.editSchedule("Tuesday", "PM", "Denise", "Mr David"))


//Function 5.1 Show updated schedule again
//This is here just to run the show schdule again to check if its updated
console.log("\n Show updated schedule")
console.log(tt.showSchedule());

