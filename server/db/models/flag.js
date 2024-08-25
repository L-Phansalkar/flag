const Sequelize = require('sequelize')
const db = require('../db')

const Flag = db.define('flag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  altname: {
    type: Sequelize.STRING,
    unique: true
  },
  controversial: {
    type: Sequelize.STRING
  },
  creator: {
    type: Sequelize.STRING
  },
  imageurl: {
    type: Sequelize.STRING,
    unique: true
  },
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.TEXT,
    unique: true
  }
})

Flag.addHook('beforeValidate', flag => {
  const n = flag.name.toLowerCase()
  const y = flag.year
  if (flag.altname) {
    const a = flag.altname.toLowerCase()
    flag.id = n + a + y
  }
  flag.id = n + y
})
module.exports = Flag
