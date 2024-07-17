import { Module } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';
import { OperacoesController } from './operacoes.controller';

@Module({
  controllers: [OperacoesController],
  providers: [OperacoesService],
})
export class OperacoesModule {}
