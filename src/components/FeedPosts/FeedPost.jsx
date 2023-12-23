import {Box,Image} from "@chakra-ui/react";
import PostHeader from "../FeedPosts/PostHeader";
import PostFooter from "../FeedPosts/PostFooter";

export default function FeedPost() {
  return <>
  <PostHeader />
  <Box my={2}>
    <Image src="img1.png" alt="user profile pic"/>
  </Box>
  <PostFooter />
  </>

}
