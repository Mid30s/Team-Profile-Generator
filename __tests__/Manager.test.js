const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    // Test for all use cases when initializing a new employee object
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            // Create new objects to test with
            const manager = new Manager("Austin", 4, "austin@email.com", 808);

            // Verify that the new object has the correct properties
            expect(manager.name).toEqual("Austin");
            expect(manager.id).toEqual(4);
            expect(manager.email).toEqual("austin@email.com");
            expect(manager.officeNumber).toEqual(808);
        });
    });

    describe("Details", () => {
        //test for all use cases when calling getOfficeNumber()
        it("should return the office number of the manager when calling getOfficeNumber()", () => {
            const manager = new Manager("Austin", 4, "austin@email.com", 808);
            expect(manager.getOfficeNumber()).toEqual(808);
        });

        //test for all use cases when calling getRole()
        it("should return the role of the manager when calling getRole()", () => {
            const manager = new Manager("Austin", 4, "austin@email.com", 808);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});