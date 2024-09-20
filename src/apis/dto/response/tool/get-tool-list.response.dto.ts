import { Tool } from "src/types";
import ResponseDto from "../response.dto";

// interface: get tool list response body Dto //
export default interface GettoolListResponseDto extends ResponseDto {
    tools: Tool[]
}