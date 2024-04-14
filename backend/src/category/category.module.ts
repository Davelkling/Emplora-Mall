import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SupabaseModule } from 'src/microservices/supabase/supabase.module';


@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [PrismaModule, SupabaseModule],
})
export class CategoryModule {}
