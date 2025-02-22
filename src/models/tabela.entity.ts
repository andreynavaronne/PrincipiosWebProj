import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";
import { Campeonato } from "./campeonato.entity";
import { Jogo } from "./jogo.entity";

interface TabelaAttributes {
  id: number;
  campeonato_id: number;
  jogo_id: number;
}

export class Tabela
  extends Model<TabelaAttributes, Optional<TabelaAttributes, "id">>
  implements TabelaAttributes
{
  public id!: number;
  public campeonato_id!: number;
  public jogo_id!: number;
}

Tabela.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    jogo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Jogo,
        key: "id",
      },
    },
    campeonato_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Campeonato,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "tabela",
    timestamps: false,
  },
);

Tabela.belongsTo(Campeonato, { foreignKey: "campeonato_id", as: "Campeonato" });
Tabela.belongsTo(Jogo, { foreignKey: "jogo_id", as: "Jogo" });

Campeonato.hasMany(Tabela, { foreignKey: "campeonato_id", as: "Tabela" });
Jogo.hasMany(Tabela, { foreignKey: "jogo_id", as: "Tabela" });

export default Tabela;
