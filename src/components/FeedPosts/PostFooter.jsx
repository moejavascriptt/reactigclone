import { useState } from 'react'
import {
  InputRightElement,
  Button,
  Input,
  InputGroup,
  Text,
  Flex,
  Box
} from '@chakra-ui/react'
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo
} from '../../assets/constants'

export default function PostFooter({ username, isProfile }) {
  const [liked, setLiked] = useState(0)
  const [likes, setLikes] = useState(500)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <Box my={10} marginTop={'auto'}>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes
      </Text>
      <>
        <Text fontSize='sm' fontWeight={700}>
          {username}
          <Text as='span' fontWeight={400}>
            Feeling great
          </Text>
        </Text>
        <Text fontSize='sm' color={'gray'}>
          View all 500 comments
        </Text>
      </>
    
      <Flex
        alignItems={'center'}
        gap={2}
        justifyContent={'space-between'}
        w={'full'}
      >
        <InputGroup>
          <Input
            variant={'flushed'}
            placeholder={'Add a comment...'}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'whote' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}
