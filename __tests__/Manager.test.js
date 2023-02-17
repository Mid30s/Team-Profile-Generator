const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager("Austin", 2, "austin@email.com", 808);

            expect(manager.name).toEqual("Austin");
            expect(manager.id).toEqual(2);
            expect(manager.email).toEqual("austin@email.com");
            expect(manager.officeNumber).toEqual(808);
        });
    });

    describe("Details", () => {
        it("should return the office number of the manager when calling getOfficeNumber()", () => {
            const manager = new Manager("Austin", 2, "austin@email.com", 808);
            expect(manager.getOfficeNumber()).toEqual(808);
        });

        it("should return the role of the manager when calling getRole()", () => {
            const manager = new Manager("Austin", 2, "austin@email.com", 808);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});