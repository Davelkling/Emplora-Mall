import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService){}
  async create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File) {
    if (!image) {
      return await this.prisma.category.create({ data: createCategoryDto });
    }
    const imageLink = await this.supabase.uploadImage(image);
    return await this.prisma.category.create({ data: { ...createCategoryDto, icon: imageLink } });
  }

  async findAll() {
    return `This action returns all category`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
