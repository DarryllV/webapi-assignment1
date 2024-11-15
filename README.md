# Assignment 1 (WIP Documentation)

This project is a simplified **Timetabling system** to schedule tutoring sessions (AM/PM) between a tutor, student and respective subject.


# Usage

app.js provides examples. Just run ```node app.js``` in the terminal to see the sample outputs.

All outputs are labelled with headers to allow for readability of outputs.


# Functions

### 1. `AddTutor(tutName, tutCourse)`
- **Purpose**: Adds a new tutor's details to the tutors array.

- **Parameters**: 

    * `tutName` -> Tutor Name
    
    * `tutCourse` -> The course that is taught by the tutor (i.e Math, Science etc)

- **Output**: 
    * Returns a confirmation message that the tutor has been added.


### 2. `AddStudent(studName, studAge, admNo)`
- **Purpose**: Adds a new student's details to the students array.

- **Parameters**: 

    * `studName` -> Student Name

    * `studAge` -> Student Age
    
    * `admNo` -> Admin number of the student

- **Output**: Returns a confirmation message that the student has been added.


### 3. `scheduleSession(student, tutor, day, session)`
- **Purpose**: Schedules a new session by adding the details to the schedule array.

- **Parameters**:
    * `student` -> name of student

    * `tutor` -> name of tutor
    
    * `day` -> the day you want to schedule the session (i.e Monday, Tuesday etc)
    
    * `session` -> The time of session (AM/PM)

- **Output**:
    * Returns a confirmation message with the session details.


### 4. `showSchedule()`
- **Purpose**: Displays the entire schedule array.

- **Output**: Displays all scheduled sessions in json format


### 5. `editSchedule(oldDay, oldSession, newStud, newTut)`
- **Purpose**: Edits an existing schedule entry based on the specified day (oldDay) and session (oldSession).

- **Parameters**:

    * `oldDay` -> day of scheduled session you wish to modify

    * `oldSession` -> session of the scheduled session you wish to modify

    * `newStud` -> new student name that you want to change to

    * `newTut` -> new tutor name that you want to change to

- **Output**:

    * A success message if the entry is found and updated.

    * An error message if no matching entry is found.

# References
MDN Web Docs [Array.prototype.find() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
