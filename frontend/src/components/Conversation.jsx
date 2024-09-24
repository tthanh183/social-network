import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
  WrapItem,
} from '@chakra-ui/react';

const Conversation = () => {
  return (
    <Flex
      gap={4}
      alignItems={'center'}
      p={1}
      _hover={{
        cursor: 'pointer',
        bg: useColorModeValue('gray.600', 'gray.dark'),
        color: 'white',
      }}
      borderRadius={'md'}
    >
      <WrapItem>
        <Avatar
          size={{
            base: 'sx',
            sm: 'sm',
            md: 'md',
          }}
          src="http://bit.ly/broken-link"
        >
          <AvatarBadge boxSize={'1em'} bgColor={'green.500'} />
        </Avatar>
      </WrapItem>

      <Stack direction={'column'} fontSize={'sm'}>
        <Text fontWeight={'700'} display={'flex'} alignItems={'center'}>
          john_doe <Image src="/verified.png" w={1} ml={1} />
        </Text>
        <Text fontSize={'xs'} display={'flex'} alignItems={'center'} gap={1}>
          Hello some messages
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversation;
