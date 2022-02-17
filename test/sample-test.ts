import { Blog__factory } from './../typechain-types/factories/Blog__factory';
import { ethers } from 'hardhat';
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const { expect } = chai;

describe("Blog", async () => {
  it("Should create a post", async () => {
    const BlogF = await ethers.getContractFactory("Blog") as Blog__factory
    const blog = await BlogF.deploy("My Blog")
    await blog.deployed()
    await blog.createPost("ABC", "1234")

    const post = await blog.fetchAllPost()
    expect(post[0].title).to.eq("ABC")
  })

  it("Should edit a post", async function () {
    const Blog = await ethers.getContractFactory("Blog") as Blog__factory
    const blog = await Blog.deploy("My blog")
    await blog.deployed()
    await blog.createPost("My Second post", "12345")

    await blog.updatePost(1, "My updated post", "23456", true)

    const posts = await blog.fetchAllPost()
    expect(posts[0].title).to.equal("My updated post")
  })

  it("Should add update the name", async function () {
    const Blog = await ethers.getContractFactory("Blog") as Blog__factory
    const blog = await Blog.deploy("My blog")
    await blog.deployed()

    expect(await blog.name()).to.equal("My blog")
    await blog.updateBlogName('My new blog')
    expect(await blog.name()).to.equal("My new blog")
  })
})