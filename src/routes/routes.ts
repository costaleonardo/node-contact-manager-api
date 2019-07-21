import { Request, Response } from 'express'

import { ContactController } from '../controllers/controller';

export class Routes {
  public contactController: ContactController = new ContactController()

  public routes (app): void {
    app.route('/').get(( req: Request, res: Response ) => {
      res.status(200).send({
        message: 'Get request successful.'
      })
    })

    app.route('/contact')
      .get(this.contactController.getContacts)
      .post(this.contactController.addNewContact)

    app.route('/contact/:contactId')
      .get(this.contactController.getContactById)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact)
  }
}