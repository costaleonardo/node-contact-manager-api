import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'

import { Routes } from './routes/routes'

class App {
  public app: express.Application
  public routePrv: Routes = new Routes()
  public mongoUrl: string = 'mongodb://contact_user:contact123@ds353457.mlab.com:53457/contact-manager'

  constructor () {
    this.app = express()
    this.config()
    this.routePrv.routes(this.app)
    this.mongoSetup()
  }

  private config (): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mongoSetup (): void {
    mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, () => console.log('Connected to MongoDB.'))
  }
}

export default new App().app