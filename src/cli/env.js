const parseEnv = () => {
  const envVars = process.env
  const result = Object.entries(envVars).reduce((acc, [key, val]) => 
    key.includes('RSS_') ? acc + `${key}=${val};\n` : acc
  , '')
  console.log(result)
};

parseEnv();
