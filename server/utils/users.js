[{
    id: '123dadsa',
    name: 'Andrew',
    room: 'The Office Fans'
}]

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {
            id,
            name,
            room
        };
        if (this.getUserList(room).indexOf(name) === -1) {
            this.users.push(user);
            return user;
        } else {
            return false;
        }
    }

    removeUser(id) {
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }
    
    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {
    Users
};