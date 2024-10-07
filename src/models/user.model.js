// USUARIOS
const { Sequelize, Model, DataTypes } = require("sequelize");

const tableName = "MASTER_USER";
const modelName = "modelMasterUser";

const masterUserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  email_address: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  id_department: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  user_rol: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  user_crea: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  user_mod: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
};

class MasterUser extends Model {
  static associate() {
    // associate
  }  

  static config(sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      createdAt: "create_date",
      updatedAt: "update_date"
    };    
  }
}

module.exports = {
  tableName,
  masterUserSchema,
  MasterUser,
};
