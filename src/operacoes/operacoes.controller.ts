import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';

export class OperacaoDto {
  valor1: number
  valor2: number
}

@Controller('operacoes')
export class OperacoesController {
  constructor(private readonly operacoesService: OperacoesService) {}

  @Post('adicao')
  adicao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.adicao(operacaoDto);
  }
}
