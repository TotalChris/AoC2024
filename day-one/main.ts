import { day1part1 } from "./src/part1.ts";
import { day1part2 } from "./src/part2.ts";

if(!Deno.args[0]) Deno.exit(1); //exit if no file path is provided
const fileHandle: string = Deno.args[0]; //get the file path from the command line arguments

const part1: number = await day1part1(fileHandle); //run part 1
const part2: number = await day1part2(fileHandle); //run part 2
console.log(`Part 1 Sum: ${part1}`);
console.log(`Part 2 Total Score: ${part2}`);
