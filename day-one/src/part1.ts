export const day1part1 = async (fPath: string): Promise<number> => {
  const file: string = await Deno.readTextFile(fPath); //read the file
  const lines: Array<string> = file.split("\n"); //split by new line
  lines.pop(); //remove the ending newline (it is blank and will parse incorrectly)
  const pairs: Array<Array<number>> = lines.map(
    (line) => line.split("   ").map((number) => Number(number)) //split by "   " and convert both in the pair to numbers
  );
  const set1: Array<number> = pairs.map((pair) => pair[0]).sort((a, b) => a - b); //select the only the first numbers in the pairs, sort them ascending
  const set2: Array<number> = pairs.map((pair) => pair[1]).sort((a, b) => a - b); //select the only the second numbers in the pairs, sort them ascending
  const diffs: Array<number> = set1.map((number, index) => {
    return Math.abs(number - set2[index]); //find the absolute difference between the two numbers and store in a diffs array
  });
  const sum: number = diffs.reduce((acc, diff) => acc + diff, 0); //sum the diffs array
  return sum; //return the sum
};
