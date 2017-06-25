var expect = require('expect');

var {Users} = require('./users');
describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'A'
        }, {
            id: '2',
            name: 'BK',
            room: 'A'
        }, {
            id: '3',
            name: 'ABC',
            room: 'B'
        }];
    });
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Yen',
            room: 'FFI'
        }
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove user', () => {
        var userID = '1';
        var user = users.removeUser(userID);
        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userID = '4';
        var user = users.removeUser(userID);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userID = '1';
        var user = users.getUser(userID);
        expect(user.id).toBe(userID);
    });

    it('should not find user', () => {
        var userID = '4';
        var user = users.getUser(userID);
        expect(user).toNotExist();
    });


    it('should return users name', () => {
        var userList = users.getUserList('A');
        expect(userList).toEqual(['Mike', 'BK']);
    });

    it('should return users name', () => {
        var userList = users.getUserList('B');
        expect(userList).toEqual(['ABC']);
    });
});