import React from 'react';
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import MastHead from '../components/masthead';
import LinkButton from '../components/link-button';
import Masthead from '../components/masthead';
import { TextInput } from 'react-native-gesture-handler';

const AboutScreen = () => {
  return (

    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
//        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/vincent.jpg')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full" textAlign={'center'}>
            Simple to-do app developed by Vincent Camacho.
          </Text>
          <LinkButton
            colorScheme="pink"
            size="lg"
            borderRadius="full"
            href="https://instagram.com/joyousdevil"
            leftIcon={
              <Icon as={Feather} name="instagram" size="sm" opacity={0.5} />
            }
          >
            Instagram
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size="lg"
            borderRadius="full"
            href="https://vinceportfolio.vercel.app/"
            leftIcon={
              <Icon as={FontAwesome5} name="rainbow" size="sm" opacity={0.5} />
            }
          >
            Portfolio
          </LinkButton>
          <LinkButton
            colorScheme="green"
            size="lg"
            borderRadius="full"
            href="https://open.spotify.com/artist/4TaQ5CVmdda0G3JrK5BftH?si=USt6IlEYT7O3wT7CyiiFRA"
            leftIcon={
              <Icon as={Feather} name="speaker" size="sm" opacity={0.5} />
            }
          >
            Music
          </LinkButton>
          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://github.com/joyousdevil/"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Github
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen;
