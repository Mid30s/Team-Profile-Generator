const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  // Test for all use cases when initializing a new employee object
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and GitHub username if provided valid arguments', () => {
      // Create new objects to test with
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      // Verify that the new object has the correct properties
      expect(engineer.name).toEqual('Jack');
      expect(engineer.id).toEqual(2);
      expect(engineer.email).toEqual('jack@test.com');
      expect(engineer.github).toEqual('jack-github');
    });
  });

  describe('Methods', () => {
    // Test for all use cases when calling getGithub()
    it('should return the GitHub username of the engineer when calling getGithub()', () => {
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      expect(engineer.getGithub()).toEqual('jack-github');
    });
    
    // Test for all use cases when calling getRole()  
    it('should return the role of the engineer when calling getRole()', () => {
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
