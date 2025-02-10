import { Test, TestingModule } from "@nestjs/testing";
import { JogoController } from "../controllers/jogoController/jogo.controller";
import { JogoService } from "../services/jogoService/jogo.service";

describe("JogoController", () => {
  let controller: JogoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JogoController],
      providers: [JogoService],
    }).compile();

    controller = module.get<JogoController>(JogoController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
