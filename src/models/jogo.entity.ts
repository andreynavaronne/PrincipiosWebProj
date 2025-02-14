import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "src/config/database";

interface JogoAttributes {
  id: number;
  numeroJogadores: number;
  nome: string;
  tempoDeJogo: number;
  idadeMinima: number;
}

export class Jogo
  extends Model<JogoAttributes, Optional<JogoAttributes, "id">>
  implements JogoAttributes
{
  public id!: number;
  public numeroJogadores!: number;
  public nome!: string;
  public tempoDeJogo!: number;
  public idadeMinima!: number;
}

Jogo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    numeroJogadores: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempoDeJogo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idadeMinima: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "jogo",
    timestamps: false,
  },
);

export default Jogo;
