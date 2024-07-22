import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';

export class OperacaoDto {
  valor1: number
  valor2: number
}

@Controller('operacoes')
export class OperacoesController {
  constructor(private readonly operacoesService: OperacoesService) {}

  @Get('listar')
  list(@Query('tipo') tipo?: string) {
   return this.operacoesService.getAllOperations(tipo ? Number(tipo) : undefined);
  }

  @Post('adicao')
  adicao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.adicao(operacaoDto);
  }

  @Post('subtracao')
  subtracao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.subtracao(operacaoDto);
  }

  @Post('multiplicacao')
  multiplicacao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.multiplicacao(operacaoDto);
  }

  @Post('divisao')
  divisao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.divisao(operacaoDto);
  }
}
