import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { SupabaseModule } from './microservices/supabase/supabase.module';

@Module({
  controllers: [AppController],
  providers: [AppService], 
  imports: [UsersModule, AuthModule,PrismaModule, CategoryModule, SupabaseModule],
})
export class AppModule {}
