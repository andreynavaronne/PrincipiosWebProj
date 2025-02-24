import sequelize from "./config/database";
import express from "express";
import * as dotenv from "dotenv";
import { UserRepository } from "./repository/userReposytory";

dotenv.config();

const app = express();
app.use(express.json());

const userRepo = new UserRepository();

interface UserRequestBody {
  name: string;
  email: string;
  password: string;
}

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body as UserRequestBody;
    const user = await userRepo.create(name, email, password);
    res.json(user);
  } catch (error) {
    res
      .status(500)

      .json({
        mesnsage: "Erro ao criar uma usuário",
        error: (error as Error).message,
      });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await userRepo.getAllUsers();
    res.json(users); //Retorna todos os usuários
  } catch (error) {
    res
      .status(500)

      .json({
        message: "Erro ao buscar os usuários",
        error: (error as Error).message,
      });
  }
});

//Testando a conexão com o banco de dados
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  })
  .catch((error) => {
    console.log("Erro ao conectar ao banco de dados", error);
  });
