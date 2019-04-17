class Person {
	constructor(name, age) {
	  this.name = name;
	  this.age = age;
	}
  }

class Student extends Person {
	constructor(name, age, enrollment) {
	  super(name, age);
	  this.enrollment = enrollment;
	}
  }
  
  var jenny = new Student("jenny", 21, "CS101");
  console.log (jenny);