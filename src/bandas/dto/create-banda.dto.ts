import { ApiProperty } from "@nestjs/swagger";

export class CreateBandaDto {
    @ApiProperty()
    name : String;

    @ApiProperty()
    yearoffoundation: String;

    @ApiProperty()
    bestsellingalbum: String;

    @ApiProperty()
    members: String;

    @ApiProperty() 
    cityoffoundation: String  
}
