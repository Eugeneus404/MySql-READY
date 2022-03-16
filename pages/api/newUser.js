import nextConnect from 'next-connect';

const {secret} = require('../../components/secret.js');
const models = require('../../db/models/index');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');

const handler = nextConnect()

.post(async(req, res) => {
  const body = JSON.parse(req.body)
    const { name, password } = body;

    const allUsers = await models.users.findOne({
      where: {
        name: name
      }
    });
    
    if (allUsers != null) {
     return res.status(201).json({ message: 'find' });
   }

    const hashPassword = bcrypt.hashSync(password, 7);

    const newUser = models.users.create({
      name: name,
      password: hashPassword,
    });

    const payload = body;
    const token = jwt.encode(payload, secret);

    console.log(token);

    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newUser,
    });
})


export default handler
