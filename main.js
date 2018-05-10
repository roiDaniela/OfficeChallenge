//write your code here to make the tests pass

var Document = function (name) {
    this.employeeName = name;
};

var Employee = function (name) {
    this.name = name;
};

Employee.prototype.work = function(office) {
    for(var i=0; i<10; ++i){
        // if(!office.documents){
        //     office.documents =[];
        // }

        office.documents.push(new Document(this.name));
    }
}

var Manager = function (name) {
    this.name = name;
    this.employees = [];
};

Manager.prototype.hireEmployee = function(name) {
    this.employees.push(new Employee(name));
}

Manager.prototype.askEmployeesToWork = function(office) {
    this.employees.forEach(function (emp) {
        emp.work(office)
    });
}

var Cleaner = function (name) {
    this.name = name;
};

Cleaner.prototype.clean = function(name) {
    console.log("Clean");
}


var Office = function () {
    this.documents = [];
    this.managers = [];
    this.cleaners = [] ;
};

Office.prototype.hireManager = function(name) {
    this.managers.push(new Manager(name));
}

Office.prototype.hireCleaner = function(name) {
    this.cleaners.push(new Cleaner(name));
}

Office.prototype.startWorkDay = function() {
    var that = this;
    this.managers.forEach(function (emp) {
        emp.askEmployeesToWork(that);
    });

    this.cleaners.forEach(function (emp) {
        emp.clean();
    });
}




