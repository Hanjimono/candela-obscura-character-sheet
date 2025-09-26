import { Model, DataTypes, Sequelize, Optional } from "sequelize"
import sequelize from "@/lib/sequelize"

export class Class extends Model {
  public id!: number
  public name!: string
  public nameRu!: string
  public order!: number

  // timestamps
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Class.init(
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "class",
    timestamps: true,
    paranoid: true,
    sequelize
  }
)
