const Intern = require('../lib/Intern.js');

describe('Intern', () => {
  // Test for all use cases when initializing a new employee object
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school if provided valid arguments', () => {
      // Create new objects to test with
      const intern = new Intern('Bob', 3, 'bob@test.com', 'Harvard');

      // Verify that the new object has the correct properties
      expect(intern.name).toEqual('Bob');
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual('bob@test.com');
      expect(intern.school).toEqual('Harvard');
    });
  });

  describe('Details', () => {
    // test for all use cases when calling getSchool()
    it('should return the school of the intern when calling getSchool()', () => {
      const intern = new Intern('Bob', 3, 'bob@test.com', 'Harvard');

      expect(intern.getSchool()).toEqual('Harvard');
    });
    
    // test for all use cases when calling getRole()
    it('should return the role of the intern when calling getRole()', () => {
      const intern = new Intern('Bob', 3, 'bob@test.com', 'Harvard');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
