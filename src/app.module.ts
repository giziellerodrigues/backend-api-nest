import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Categoria } from './models/categoria.model'
import { ConfigModule } from '@nestjs/config'
import { CategoriaController } from './categoria/categoria.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Categoria],
    }),
    TypeOrmModule.forFeature([Categoria])
  ],
  controllers: [AppController, CategoriaController],
  providers: [AppService],
})
export class AppModule {}
