import { Validator } from "../../../config"


export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ){}

    static create(object: {[key: string]: any}): [string?, RegisterUserDto?]{

        const { name, email, password } = object
        
        if(!name) return ['Missing name', undefined]
        if(!email) return ['Missing email', undefined]

        if(!Validator.email.test(email)) return ['Email is not valid']

        if(!password) return ['Missing password']
        if(password.length < 4) return ['Password is too short']


        return [
            undefined,
            new RegisterUserDto(name, email, password)
        ]
    }

}