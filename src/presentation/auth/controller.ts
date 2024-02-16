import { Request, Response } from "express"
import { RegisterUserDto } from "../../domain"

export class AuthController {
    constructor() { }

    registerUser = (req: Request, res: Response) => {

        const [errorDto, registerUserDto] = RegisterUserDto.create(req.body)

        if(errorDto) return res.status(400).json({ error: errorDto })
        
        res.json(registerUserDto!)

    }

    loginUser = (req: Request, res: Response) => {
        res.json('Login')
    }
}