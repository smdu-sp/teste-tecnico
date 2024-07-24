import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OperacaoDto} from './operacoes.dto';

@Injectable()
export class OperacoesService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async listar(tipo:number){
    const resultado = await this.prisma.operacao.findMany({where:{tipo: tipo}})
    
    return resultado
  }

  async adicao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 + valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo: 1
      }
    });

    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')

    return { resultado };
  }

  async subtracao(operacaoDto: OperacaoDto){
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 - valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo:2
      }
    });

    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')

    return { resultado };
  }

  async multiplicacao(operacaoDto: OperacaoDto){
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 * valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo:3
      }
    });

    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')

    return { resultado };
  }

  async divisao(operacaoDto: OperacaoDto){
    const { valor1, valor2 } = operacaoDto;
    const resultado = valor1 / valor2;
    const novaOperacao = await this.prisma.operacao.create({
      data: {
        valor1,
        valor2,
        resultado,
        tipo:4
      }
    });

    if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')

    return { resultado };
  }

  async deletar(id:number){
    try{
      const resultado = await this.prisma.operacao.delete({where:{id}})
      return resultado;
    } catch(error){
      if(error) throw new HttpException("Não foi possivel excluir operação pois não foi encontrada", HttpStatus.NOT_FOUND)
  
      }
  }
}
