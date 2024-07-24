import { IsInt, IsNotEmpty, IsNumber, Max, Min } from "class-validator"

const MSG = "O valor deve ser um tipo númerico valído."

export class OperacaoDto {
  @IsNumber({},{message:MSG})
  valor1: number

  @IsNumber({},{message:MSG})
  valor2: number
}