const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Model = db.define("model", {
  gardener: {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
  },
  plot: {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN,
  },
  vegetable: {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    plant_on: Sequelize.DATE,
  },
});

Vegetable.belongsToMany(Plot, { through: "vegetable_plot" });
Plot.belongsToMany(Vegetable, { through: "vegetable_plot" });
Gardener.belongsTo(Vegetable, { as: "favorite vegetable" });

module.exports = db;
