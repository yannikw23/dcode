import React, { useState } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import CodeInput from '../components/CodeInput';
import CodeContext from '../components/context/CodeContext';
import HomeLayout from '../components/layouts/HomeLayout';
import Explanation from '../components/Explanation';
import Footer from '../components/Footer';

const Home = () => {
  const [explanation, setExplanation] = useState(null);

  return (
    <CodeContext.Provider
      value={{
        explanation,
        setExplanation,
      }}
    >
      <Stack minH='90vh' justifyContent='space-between' w='full'>
        <Stack spacing={10}>
          <Stack spacing={0}>
            <Heading fontSize='6xl' textAlign='center'>
              Code explained.
            </Heading>
            <Text textAlign='center' fontSize='xl'>
              Understand code in seconds - powered by AI.
            </Text>
          </Stack>
          <CodeInput />
          <Explanation />
        </Stack>
        <Footer />
      </Stack>
    </CodeContext.Provider>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
