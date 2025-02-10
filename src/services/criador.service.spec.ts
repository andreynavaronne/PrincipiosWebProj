import { Test, TestingModule } from "@nestjs/testing";
import { CriadorService } from "./criador.service";

describe("CriadorService", () => {
  let service: CriadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CriadorService],
    }).compile();

    service = module.get<CriadorService>(CriadorService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
