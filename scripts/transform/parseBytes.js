const ethers = require("ethers");

const parseBytes = async (args) => {
  const bytes = args[0];
  const name = ethers.utils.parseBytes32String(bytes);
  console.log(`name: ${name}`);
};

parseBytes(process.argv.slice(2));
