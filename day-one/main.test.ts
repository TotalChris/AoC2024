import { assertEquals } from "jsr:@std/assert";
import { day1part1 } from "./src/part1.ts";
import { day1part2 } from "./src/part2.ts";

const fileHandle = "./day-one/data/input.test.txt"; //get the file path for the example input

Deno.test("Day 1 Part 1: Example Input", async () => {
  const part1: number = await day1part1(fileHandle); //run part 1
  assertEquals(part1, 11); //check the result
});

Deno.test("Day 1 Part 2: Example Input", async () => {
  const part2: number = await day1part2(fileHandle); //run part 2
  assertEquals(part2, 31); //check the result
});