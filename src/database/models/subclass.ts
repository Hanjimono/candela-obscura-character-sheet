import { Model, DataTypes, Sequelize, Optional } from "sequelize"
import sequelize from "@/lib/sequelize"

export class Subclass extends Model {
  public id!: number
  public name!: string
  public nameRu!: string
  public order!: number
  public classId!: number

  // timestamps
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Subclass.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nameRu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    classId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "subclass",
    timestamps: true,
    paranoid: true,
    sequelize
  }
)
