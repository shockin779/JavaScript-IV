// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }

    listSubjects() {
        console.log('My favorite subjects are:');
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attrs) {
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//create Person objects
const person1 = new Person({
    name: "Joe Person",
    age: 21,
    location: 'Nowhere, US',
    gender: "Male"
});

const person2 = new Person({
    name: "Matt Myers",
    age: 34,
    location: 'Brooklyn, NY',
    gender: "Male"
});

const person3 = new Person({
    name: "Sally Sue",
    age: 19,
    location: 'Oakland, CA',
    gender: "Female"
});

//create Student Objects
const student1 = new Student({
    name: "Sean Hockin",
    age: 28,
    location: 'West Valley City, UT',
    gender: "Male",
    previousBackground: 'IT',
    className: 'WEBPT5',
    favSubjects: ['HTML','Javascript','Python']
});

const student2 = new Student({
    name: "John Jacob",
    age: 54,
    location: 'Athens, Greece',
    gender: "Male",
    previousBackground: 'Fast food',
    className: 'CS14',
    favSubjects: ['CSS','React','Node JS']
});

const student3 = new Student({
    name: "Krysta Justice",
    age: 26,
    location: 'Somewhere, NM',
    gender: "Female",
    previousBackground: 'Construction',
    className: 'WEBPT3',
    favSubjects: ['C','React','Redux', 'Perl','Ruby on Rails']
});

//create Instructor Objects
const instructor1 = new Instructor({
    name: "Josh Front-end",
    age: 23,
    location: 'Ireland',
    gender: "Male",
    specialty: 'Front-end',
    favLanguage: 'React',
    catchPhrase: 'Come at me bro!'
});

const instructor2 = new Instructor({
    name: "Brianna Newman",
    age: 33,
    location: 'Salt Lake City, UT',
    gender: "Female",
    specialty: 'Back-end',
    favLanguage: 'Node JS',
    catchPhrase: 'We cannot grow without learning first'
});

const instructor3 = new Instructor({
    name: "Shirley Temple",
    age: 25,
    location: 'Phoenix, AZ',
    gender: "Female",
    specialty: 'Full Stack',
    favLanguage: 'Javascript',
    catchPhrase: 'Saving the day, one line at a time!'
});

//create PM Objects
const pm1 = new ProjectManager({
    name: "Dil Someone",
    age: 24,
    location: 'Bakersfield, CA',
    gender: "Female",
    specialty: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: 'Creativity is key to success!',
    gradClassName: 'CS10',
    favInstructor: 'Cam'
});

const pm2 = new ProjectManager({
    name: "Karen Smith",
    age: 35,
    location: 'Italy',
    gender: "Female",
    specialty: 'Full Stack',
    favLanguage: 'SQL',
    catchPhrase: 'Data creates a need.',
    gradClassName: 'CS4',
    favInstructor: 'Ryan'
});

const pm3 = new ProjectManager({
    name: "McTeacherson",
    age: 20,
    location: 'Ogden, UT',
    gender: "Male",
    specialty: 'Back-end',
    favLanguage: 'C#',
    catchPhrase: 'L33t',
    gradClassName: 'CS6',
    favInstructor: 'Kristine'
});



//Logging statements for all the objects. Use console to check.
console.log(person1.name); // 'Joe Person'
console.log(person2.gender); //'Male'
person3.speak(); // 'Hello my name is Sally Sue, I am from Oakland, CA'

student1.sprintChallenge('Javascript-IV'); // 'Sean Hockin has begun sprint challenge on Javascript-IV'
student2.PRAssignment('Redux'); // 'John Jacob has submitted a PR for Redux'
student3.listSubjects(); // -- the array of subjects, one per line

console.log(instructor1.favLanguage); // 'React'
instructor2.demo('Node JS'); // `Today we are learning about Node JS`
instructor3.grade(student1, 'Javascript-IV'); // `Sean Hockin receives a perfect score on Javascript-IV`

pm1.standUp('WEBPT5_Dil'); // 'Dil Somone announces to WEBPT5_Dil, @channel standy times!'
pm2.debugsCode(student2, 'HTML'); // `Karen Smith debugs John Jacob's code on HTML`
console.log(pm3.gradClassName); // 'CS6'