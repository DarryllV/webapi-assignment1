let timetabling = {

    //initialized arrays to store data, 1-2 sample data each for testing
    students:[
        {
            studName: "Darryll",
            studAge: 19,
            admNo: "222947U"
        }
    ],

    tutors:[
        {
            tutName: "Mr Howard",
            tutCourse: "Math"
        }
    ],

    schedule:[
        {
            student:"Darryll",
            tutor: "Mr Howard",
            day: "Tuesday",
            session: "AM"
        },
        {
            student:"Darryll",
            tutor: "Mr Howard",
            day: "Tuesday",
            session: "PM"
        }
    ],

    //disclaimer: none of the functions below check for duplicates :<

    // Add tutors
    AddTutor(tutName, tutCourse) {

        const newTut = {tutName: tutName, tutCourse: tutCourse};
        this.tutors.push(newTut);

        return `Tutor ${tutName} teaching ${tutCourse} has been added`;
    },

    // Add Students
    AddStudent(studName, studAge, admNo) {
        const newStudent =
        {
            studName: studName,
            studAge: studAge,
            admNo: admNo
        };

        this.students.push(newStudent);
        return `${studAge} year old Student ${studName} has been added. Admin Number is ${admNo}`;
    },

    //Schedule session
    //session -> AM/PM
    //day -> Mon, Tues, Wed, etc
    scheduleSession(student, tutor, day, session) {
        const newSched = { student: student, tutor: tutor, day: day, session: session};
        this.schedule.push(newSched);

        return `Tutor ${tutor} and student ${student} has been scheduled for the ${session} session on ${day}`
    },

    //Show entire schedule
    showSchedule() {
        schedLength = this.schedule.length;

        for (let i=0; i < schedLength; i++){
            console.log(this.schedule[i]);
        }
    },

    //Edit schedule
    //You only have to provide the old day and session, then you can type in the new values for the selected day and session
    editSchedule(oldDay, oldSession, newStud, newTut) {
        const index = this.schedule.findIndex(o => o.day === oldDay && o.session === oldSession);

        //when no match is found, it returns -1
        if (index !== -1) {
            this.schedule[index] = {student: newStud, tutor: newTut, day: oldDay, session: oldSession};
            return `The ${oldSession} session on ${oldDay} has been modified to tutor ${newTut} and student ${newStud}`;
        } 
        else {
            return `The day or session does not exist in the database, please select another.`;
        }
    }

}


module.exports = timetabling;