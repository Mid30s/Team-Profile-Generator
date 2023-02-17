const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and GitHub username if provided valid arguments', () => {
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      expect(engineer.name).toEqual('Jack');
      expect(engineer.id).toEqual(2);
      expect(engineer.email).toEqual('jack@test.com');
      expect(engineer.github).toEqual('jack-github');
    });
  });

  describe('Methods', () => {
    it('should return the GitHub username of the engineer when calling getGithub()', () => {
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      expect(engineer.getGithub()).toEqual('jack-github');
    });

    it('should return the role of the engineer when calling getRole()', () => {
      const engineer = new Engineer('Jack', 2, 'jack@test.com', 'jack-github');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
