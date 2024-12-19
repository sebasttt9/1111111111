import { Module } from '@nestjs/common';
import { BandasService } from './bandas.service';
import { BandasController } from './bandas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BandasController],
  providers: [BandasService],
  imports: [PrismaModule]
})
export class BandasModule {}
