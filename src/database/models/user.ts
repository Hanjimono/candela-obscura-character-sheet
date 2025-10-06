import { Model, DataTypes, Sequelize, Optional } from "sequelize"
import sequelize from "@/lib/sequelize"

export class User extends Model {
  public id!: string
  public name!: string
  public email!: string
  public email_verified!: Date
  public image!: string | null

  public static async getUserByEmail(email: string) {
    return await User.findOne({ where: { email } })
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email_verified: {
      type: DataTypes.DATE,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    tableName: "users",
    timestamps: false,
    sequelize
  }
)
