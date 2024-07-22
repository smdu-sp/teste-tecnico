import { ForbiddenException, Injectable } from '@nestjs/common';
import { OperacaoDto } from './operacoes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperacoesService {
  constructor(private prisma: PrismaService) {}

   async getAllOperations(tipo?: number) {
      const where = tipo ? { tipo: Number(tipo) } : {};
      return await this.prisma.operacao.findMany({ where });
   }

  async adicao(operacaoDto: OperacaoDto) {
    const { valor1, valor2 }: OperacaoDto = operacaoDto;
    const resultado: number = valor1 + valor2;
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

  async subtracao(operacaoDto: OperacaoDto) {
   const { valor1, valor2 }: OperacaoDto = operacaoDto;
   const resultado: number = valor1 - valor2;
   const novaOperacao = await this.prisma.operacao.create({
     data: {
       valor1,
       valor2,
       resultado,
       tipo: 2
     }
   });
   if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
   return { resultado };
 }

 async multiplicacao(operacaoDto: OperacaoDto) {
   const { valor1, valor2 }: OperacaoDto = operacaoDto;
   const resultado: number = valor1 * valor2;
   const novaOperacao = await this.prisma.operacao.create({
     data: {
       valor1,
       valor2,
       resultado,
       tipo: 3
     }
   });
   if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
   return { resultado };
 }

 async divisao(operacaoDto: OperacaoDto) {
   const { valor1, valor2 }: OperacaoDto = operacaoDto;
   const resultado: number = valor1 / valor2;
   const novaOperacao = await this.prisma.operacao.create({
     data: {
       valor1,
       valor2,
       resultado,
       tipo: 4
     }
   });
   if (!novaOperacao) throw new ForbiddenException('Não foi possível registrar a operação, tente novamente.')
   return { resultado };
 }
}
