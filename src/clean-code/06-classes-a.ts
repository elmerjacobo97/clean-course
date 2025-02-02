(() => {

    // No aplicando el principio de responsabilidad única.
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
        ) {}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ) {
            super(name, gender, birthday);
            this.lastAccess = new Date();
        }

        checkingCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ) {
            super(email, role, name, gender, birthday);
        }
    }

    const useSettings = new UserSettings(
        '/user/home',
        '/home',
        'elmer@google.com',
        'admin',
        'Elmer',
        'M',
        new Date('1997-10-18')
    )

    console.log({useSettings})

})()
