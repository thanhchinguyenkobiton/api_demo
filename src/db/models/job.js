const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {
        foreignKey: {
          allowNull: false,
        },
      })
      this.belongsToMany(models.Candidate, {
        through: 'Application',
      })
    }
  }
  Job.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Job',
    }
  )
  return Job
}
