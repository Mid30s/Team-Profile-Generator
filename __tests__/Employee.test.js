const Employee = require('../lib/Employee.js');

describe("Employee", () => {
    // Test for all use cases when initializing a new employee object
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            // Create new objects to test with
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Gary");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("gary.yanggao@gmail.com");
        });
    });

    describe("Details", () => {
        //test for all use cases when calling getName()
        it("should return the name of the employee when calling getName()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getName()).toEqual("Gary");
        });
 
        //test for all use cases when calling getId()
        it("should return the ID of the employee when calling getId()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getId()).toEqual(1);
        });
        
        //test for all use cases when calling getEmail()
        it("should return the email of the employee when calling getEmail()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getEmail()).toEqual("gary.yanggao@gmail.com");
        });
        
        //test for all use cases when calling getRole()
        it("should return the role of the employee when calling getRole()", () => {
            const employee = new Employee("Gary", 1, "gary.yanggao@gmail.com");
    
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});