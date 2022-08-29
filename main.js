//write your code here to make the tests pass
class Document {
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name){
        this.name = name
    }
    work(office){

    }
}

class Manager {
    constructor(employees,name){
        this.employees = []
        this.name = name
    }
    
    hireEmployee(name){

    }
    askEmployeesToWork(office){

    }
}

class Cleaner{
    constructor(name){
        this.name=name
    }

    clean(){
        console.log("Clean")
    }
}

class Office {
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireManager(name){

    }

    hireCleaner(name){

    }

    startWorkDay()
}