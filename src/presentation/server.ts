import express, { Router } from 'express';

export class Server {

    public readonly app = express();
    private serverListener?: any;

    constructor(
        private readonly port: number,
        private readonly routes: Router,
    ) { }

    async start() {
        // * Middlewares
        this.app.use(express.json()); //raw
        this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded

        // * Routes
        this.app.use(this.routes);

        //* Public Folder
        // this.app.use( express.static( this.publicPath ) );

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }

    public close() {
        this.serverListener?.close();
    }
}