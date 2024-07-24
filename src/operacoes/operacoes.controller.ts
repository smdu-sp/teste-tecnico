import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { OperacoesService } from './operacoes.service';
import { OperacaoDto} from './operacoes.dto';



@Controller('operacoes')
export class OperacoesController {
  constructor(private readonly operacoesService: OperacoesService) {}

  @Get('listar')
  listar(@Query('tipo' ,ParseIntPipe) tipo:number){
    return this.operacoesService.listar(tipo)
  }

  @Post('adicao')
  adicao(@Body() operacaoDto: OperacaoDto) {
    return this.operacoesService.adicao(operacaoDto);
  }

  @Post('subtracao')
  subtracao(@Body() operacaoDto: OperacaoDto){
    return this.operacoesService.subtracao(operacaoDto)
  }

  @Post('multiplicacao')
  multiplicacao(@Body() operacaoDto: OperacaoDto){
    return this.operacoesService.multiplicacao(operacaoDto)
  }

  @Post('divisao')
  divisao(@Body() operacaoDto: OperacaoDto){
    return this.operacoesService.divisao(operacaoDto)
  }

  @Get('deletar/:id')
  deletar(@Param('id', ParseIntPipe) id:number){
    return this.operacoesService.deletar(id)
  }
}