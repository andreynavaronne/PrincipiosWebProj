import { Test, TestingModule } from "@nestjs/testing";
import { CriadorController } from "./criador.controller";
import { CriadorService } from "./criador.service";

describe("CriadorController", () => {
  let controller: CriadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CriadorController],
      providers: [CriadorService],
    }).compile();

    controller = module.get<CriadorController>(CriadorController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
