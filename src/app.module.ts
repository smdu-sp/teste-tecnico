import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OperacoesModule } from './operacoes/operacoes.module';

@Module({
  imports: [PrismaModule, OperacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
