import nextConnect from 'next-connect';
import secret from '../../components/secret.js'

const models = require('../../db/models/index');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const handler = nextConnect()

.post(async (req, res) => {
  const body = JSON.parse(req.body)
  const { name, password } = body;

  const users = await models.users.findOne({
    where: {
      name: name
    }
  });

  if (users === null) {
   return res.status(201).json({ message: 'loginError' });
 }

   const validPassword = bcrypt.compareSync(password, users.password);

   if (!validPassword) {
      return res.status(201).json({ status: 'loginError' });
   }
   return res.status(202).json({ status: 'ok' });
})


export default handler
