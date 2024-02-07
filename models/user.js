"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM("private", "company"),
        defaultValue: "company",
      },
      isVerified: { type: DataTypes.BOOLEAN, defaultValue: "y" },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "User",
    }
  );
  return User;
};
