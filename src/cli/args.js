const parseArgs = () => {
  const args = process.argv.slice(2).reduce((acc, cur, index, arr) => {
    return index % 2 ? acc + cur + `${arr[index + 1] ? ', ' : ''}` : acc + cur.slice(2) + " is ";
  }, "");
  console.log(args);
};

parseArgs();
