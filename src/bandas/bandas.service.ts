import { Injectable } from '@nestjs/common';
import { CreateBandaDto } from './dto/create-banda.dto';
import { UpdateBandaDto } from './dto/update-banda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BandasService {
  constructor(private prisma: PrismaService) {}
  create( createBandaDto: CreateBandaDto) {
    return this.prisma.rockbands.create ;
  }

  findAllBands() {
    return this.prisma.rockbands.findMany({
    where: {}
  })
  }

  findOneBand(id: number) {
    return this.prisma.rockbands.findUnique({
      where: {id}
    })
  }

  update(id: number, _updateBandaDto: UpdateBandaDto) {
    return this.prisma.rockbands.update({
      where: {id},
      data: UpdateBandaDto
    })
  }

  remove(id: number) {
    return this.prisma.rockbands.delete({
      where: {id},
    });
  }
}
