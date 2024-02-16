import express, { Router } from 'express'

type Option = {
    port?: number
    routes: Router
}

export class Server {

    public readonly app = express()
    private readonly port: number
    private readonly routes: Router

    constructor(option: Option) {
        const { port = 3000, routes } = option
        this.port = port
        this.routes = routes
    }

    async start() {

        // middlewares
        this.app.use(express.json())

        this.app.use(this.routes)

        this.app.listen(this.port, () => {
            console.log(`Server runnig on port ${this.port}`)
        })
    }
}