import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './tenants.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Tenant.name, schema: TenantSchema }
    ])
  ],
  providers: [TenantsService],
  controllers: [TenantsController]
})
export class TenantsModule {}
