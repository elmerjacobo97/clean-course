(() => {

    // No aplicando el principio de responsabilidad única.
    type Gender = 'M' | 'F';
    interface PersonaProps {
        name: string,
        gender: Gender,
        birthday: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthday: Date;
        constructor({ name, gender, birthday }: PersonaProps) {
            this.name       = name;
            this.gender     = gender;
            this.birthday   = birthday;
        }
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
