import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService){}
  async create(createCategoryDto: CreateCategoryDto, image: Express.Multer.File) {
    // Use Multer to upload the image file
    // Access the file using `image.path` or `image.buffer`
    // Implement your logic to save the image path or buffer to the database using Prisma
    // Return the created category
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
