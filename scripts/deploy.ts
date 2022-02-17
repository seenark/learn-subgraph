import fs from 'fs/promises'
import { Blog__factory } from './../typechain-types/factories/Blog__factory';
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  const BlogF = await ethers.getContractFactory("Blog") as Blog__factory
  const blog = await BlogF.deploy("My Blog")
  await blog.deployed()


  console.log("Blog deployed to:", blog.address);
  fs.writeFile('./config.ts', `
  export const contractAddress = "${blog.address}"
  export const ownerAddress = "${await blog.signer.getAddress()}"
  `)
  // fs.writeFileSync('./config.js', `
  // export const contractAddress = "${blog.address}"
  // export const ownerAddress = "${await blog.signer.getAddress()}"
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
