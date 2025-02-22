import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "src/config/database";
import { Criador } from "./criador.entity";

interface CampeonatoAttributes {
  id: number;
  numeroJogadores: number;
  totalPontos: number;
  liderCampeonato: string;
  dono_id: number;
}

export class Campeonato
  extends Model<CampeonatoAttributes, Optional<CampeonatoAttributes, "id">>
  implements CampeonatoAttributes
{
  public id!: number;
  public numeroJogadores!: number;
  public totalPontos!: number;
  public liderCampeonato!: string;
  public dono_id!: number;
}

Campeonato.init(
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
    totalPontos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    liderCampeonato: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dono_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Criador,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "campeonato",
    timestamps: false,
  },
);

Campeonato.belongsTo(Criador, { foreignKey: "dono_id", as: "Criador" });

Criador.hasMany(Campeonato, { foreignKey: "dono_id", as: "Campeonatos" });

export default Campeonato;
