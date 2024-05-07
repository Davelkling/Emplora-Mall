import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { SupabaseModule } from './microservices/supabase/supabase.module';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';
import { VendorsModule } from './vendors/vendors.module';
import { VendorProductsModule } from './vendor-products/vendor-products.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  controllers: [AppController],
  providers: [AppService], 
  imports: [UsersModule, AuthModule,PrismaModule, CategoryModule, SupabaseModule, ProductsModule, StoresModule, VendorsModule, VendorProductsModule, BrandsModule],
})
export class AppModule {}
