const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");

            expect(employee.name).toEqual("Gary");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("gary.yanggao@gmail.com");
        });
    });

    describe("Details", () => {
        it("should return the name of the employee when calling getName()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getName()).toEqual("Gary");
        });
    
        it("should return the ID of the employee when calling getId()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getId()).toEqual(1);
        });
    
        it("should return the email of the employee when calling getEmail()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getEmail()).toEqual("gary.yanggao@gmail.com");
        });
        
        it("should return the role of the employee when calling getRole()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});