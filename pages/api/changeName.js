import nextConnect from 'next-connect';

const models = require('../../db/models/index');

const handler = nextConnect()

.post(async(req, res) => {
  const body = JSON.parse(req.body)
    const { currentName, newName } = body;

    const allUsers = await models.users.findOne({
      where: {
        name: newName
      }
    });

    if (allUsers != null) {
     return res.status(201).json({ message: 'find' });
   }

    const updatedRows = await models.users.update(
    {
      name: newName,
    },
    {
      where: { name: currentName },
    }
  );

    return res.status(200).json({
      status: 'success',
      message: 'done',
      data: newName,
    });
})


export default handler
