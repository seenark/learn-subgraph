import { ipfs, json } from "@graphprotocol/graph-ts"
import {
  PostCreated as PostCreatedEvent,
  PostUpdated as PostUpdatedEvent
} from "../generated/Blog/Blog"
import { Post, PostCreated, PostUpdated } from "../generated/schema"

export function handlePostCreated(event: PostCreatedEvent): void {

  let post = new Post(event.params.id.toString())
  post.title = event.params.title
  post.contentHash = event.params.hash
  let data = ipfs.cat(event.params.hash)
  if (data) {
    let value = json.fromBytes(data).toObject()
    if (value) {
      const content = value.get('content')
      if (content) {
        post.postContent = content.toString()
      }
    }
    post.createdAtTimestamp = event.block.timestamp
    post.save()
  }


  // let entity = new PostCreated(
  //   event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  // )
  // entity.id = event.params.id.toString()
  // entity.title = event.params.title
  // entity.hash = event.params.hash
  // entity.save()
}

export function handlePostUpdated(event: PostUpdatedEvent): void {
  
  const post = Post.load(event.params.id.toString())
  if (post) {
    post.title = event.params.title
    post.contentHash = event.params.hash
    post.published = event.params.published
    let data = ipfs.cat(event.params.hash)
    if (data) {
      const value = json.fromBytes(data).toObject()
      if (value) {
        const content = value.get("content")
        if (content) {
          post.postContent = content.toString()
        }
      }
    }
    post.updatedAtTimestamp = event.block.timestamp
    post.save()
  }
  
  // let entity = new PostUpdated(
  //   event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  // )
  // entity.id = event.params.id.toString()
  // entity.title = event.params.title
  // entity.hash = event.params.hash
  // entity.published = event.params.published
  // entity.save()
}
