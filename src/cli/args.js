const parseArgs = () => {
  const argv = process.argv.slice(2).reduce((acc, cur, index) => {
    return index % 2 ? acc + cur + ", " : acc + cur.slice(2) + " is ";
  }, "");
  console.log(argv);
};

parseArgs();
