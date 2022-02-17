// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Blog {
    string public name;
    address public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _postIds;

    struct Post {
        uint256 id;
        string title;
        string content;
        bool published;
    }

    mapping(uint256 => Post) private idToPost;
    mapping(string => Post) private hashToPost;

    /* events facilitate communication between smart contractsand their user interfaces  */
    /* i.e. we can create listeners for events in the client and also use them in The Graph  */
    event PostCreated(uint256 id, string title, string hash);
    event PostUpdated(uint256 id, string title, string hash, bool published);

    constructor(string memory _name) {
        console.log("Deploying Blog with name:", _name);
        name = _name;
        owner = msg.sender;
    }

    function updateBlogName(string memory _name) public {
        name = _name;
    }

    /* transfers ownership of the contract to another address */
    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }

    /* fetches an individual post by the content hash */
    function fetchPost(string memory hash) public view returns (Post memory) {
        return hashToPost[hash];
    }

       /* creates a new post */
        function createPost(string memory title, string memory hash) public onlyOwner {
            _postIds.increment();
            uint256 postId = _postIds.current();
            Post storage post = idToPost[postId];
            post.id = postId;
            post.title = title;
            post.content = hash;
            post.published = true;
            hashToPost[hash] = post;
            emit PostCreated(postId, title, hash);

        }

    /* updates an existing post */
    function updatePost(uint256 postId, string memory title, string memory hash, bool published) public onlyOwner {
        Post storage post = idToPost[postId];
        post.title = title;
        post.content = hash;
        post.published = published;
        idToPost[postId] = post;
        hashToPost[hash] = post;
        emit PostUpdated(postId, title, hash, published);
    }

    /* fetches all posts */
    function fetchAllPost() public view returns(Post[] memory) {
        uint256 itemCount = _postIds.current();
        uint256 currentIndex = 0;
        Post[] memory posts = new Post[](itemCount);
        for(uint256 i = 0; i < itemCount; i++) {
            uint256 createdId = i + 1;
            Post storage currentItem = idToPost[createdId];
            posts[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return posts;
    }

    /* this modifier means only the contract owner can */
    /* invoke the function */
    modifier onlyOwner() {
      require(msg.sender == owner, "you are not an owner");
       _;
    }
}
