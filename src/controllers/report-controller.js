const { Op } = require("sequelize");
const { User } = require("../models/User");

module.exports = {
  async show(req, res) {
    // find all users that have email with end @rocketseat.com.br
    // those users i want find all living in street "Rua Guilherme Gembala"
    // those users i want find all techs that begin with React

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@rocketseat.com",
        },
      },
      include: [
        {
          association: "addresses",
          where: { street: "Rua Guilherme Gembala" },
        }, //address
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%",
            },
          },
        }, // techs
      ],
    });

    return res.json(users);
  },
};
