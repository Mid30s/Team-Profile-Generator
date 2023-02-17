const Intern = require('../lib/Intern.js');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school if provided valid arguments', () => {
      const intern = new Intern('Bob', 3, 'bob@test.com', 'Harvard');

      expect(intern.name).toEqual('Bob');
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual('bob@test.com');
      expect(intern.school).toEqual('Harvard');
    });
  });

  describe('Details', () => {
    it('should return the school of the intern when calling getSchool()', () => {
      const intern = new Intern('Bob', 2, 'bob@test.com', 'Harvard');

      expect(intern.getSchool()).toEqual('Harvard');
    });

    it('should return the role of the intern when calling getRole()', () => {
      const intern = new Intern('Bob', 2, 'bob@test.com', 'Harvard');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
