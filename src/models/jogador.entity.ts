import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import { Tabela } from "./tabela.entity";

interface JogadorAttributes {
  id: number;
  nome: string;
  sobrenome: string;
  idade: number;
  pontos: number;
  tabela_id: number;
}

export class Jogador
  extends Model<JogadorAttributes, Optional<JogadorAttributes, "id">>
  implements JogadorAttributes
{
  public id!: number;
  public nome!: string;
  public sobrenome!: string;
  public idade!: number;
  public pontos!: number;
  public tabela_id!: number;
}

Jogador.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pontos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tabela_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Tabela,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "jogador",
    timestamps: false,
  },
);

Jogador.belongsTo(Tabela, { foreignKey: "tabela_id", as: "Tabela" });

Tabela.hasMany(Jogador, { foreignKey: "tabela_id", as: "Tabela" });

export default Jogador;
