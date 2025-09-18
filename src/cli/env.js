const parseEnv = () => {
  const envVars = Object.entries(process.env).reduce(
    (acc, [key, value], index) => {
      return acc.concat(`RSS_${key}${index}=${value};\n`);
    },
    ""
  );
  console.log(envVars);
};

parseEnv();
