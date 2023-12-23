import { Box, Image } from '@chakra-ui/react'
import PostHeader from '../FeedPosts/PostHeader'
import PostFooter from '../FeedPosts/PostFooter'

export default function FeedPost ({ img, username, avatar }) {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={4} overflow={'hidden'}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </>
  )
}
