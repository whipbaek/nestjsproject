import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }
  //
  // @Get('/hello')
  // getTestBoard(@Query('id') id: string): Board[] {
  //   console.log(id);
  //   return this.boardService.getAllBoards();
  // }
  //
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  //
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }
  //
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }
  //
  // @Patch('/:id/status')
  // updateBoardService(
  //   @Param(':id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
