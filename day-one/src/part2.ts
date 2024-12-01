export const day1part2 = async (fPath: string): Promise<number> => {
  const file: string = await Deno.readTextFile(fPath); //read the file
  const lines: string[] = file.split("\n"); //split by new line
  lines.pop(); //remove the ending newline (it is blank and will parse incorrectly)
  const pairs: number[][] = lines.map(
    (line) => line.split("   ").map((number) => Number(number)) //split by "   " and convert both in the pair to numbers
  );
  const set1: number[] = pairs.map((pair) => pair[0]); //select the only the first numbers in the pairs
  const set2: number[] = pairs.map((pair) => pair[1]); //select the only the second numbers in the pairs
  const scores: number[] = set1.map((searchNum) => {
    if (set2.includes(searchNum)) {
      //only score the number if it is in the second set
      const count = set2.filter((number) => number === searchNum).length; //take a count of how many times the number shows up
      return searchNum * count; //return the score (number * freq) for that number
    } else {
      return 0; //number * 0 would always be 0 so return 0 (lol)
    }
  });
  const sum: number = scores.reduce((acc, score) => acc + score, 0); //sum the scores
  return sum; //return the sum
};
