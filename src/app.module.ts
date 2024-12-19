import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandasModule } from './bandas/bandas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BandasModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
