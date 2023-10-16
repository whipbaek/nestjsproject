import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { boardProviders } from './board.providers';

@Module({
  controllers: [BoardsController],
  providers: [...boardProviders, BoardsService],
})
export class BoardsModule {}
