import createHttpError from 'http-errors';
import { contactsCollection } from '../db/models/contacts.js';

export const checkUser = async (req, res, next) => {
  const { user } = req;

  if (!user) {
    next(createHttpError(401, 'Access denied: No user logged in'));
    return;
  }

  const { contactId } = req.params;
  if (!contactId) {
    next(createHttpError(400, 'ContactID is required'));
    return;
  }

  const checkContact = await contactsCollection.findOne({
    _id: contactId,
    userId: user._id,
  });

  if (!checkContact) {
    next(
      createHttpError(404, 'You do not have permission to access this contact'),
    );
    return;
  }

  next();
};
