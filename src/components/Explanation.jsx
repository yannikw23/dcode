import { ScaleFade, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useContext } from 'react';
import CodeContext from './context/CodeContext';

const Explanation = () => {
  const { explanation } = useContext(CodeContext);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (explanation && !isOpen) onToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [explanation]);

  if (!explanation || explanation?.length < 1) return null;

  return (
    <Stack
      bgColor='gray.800'
      p={{ base: 8, md: 6 }}
      px={{ base: 8, md: 20 }}
      rounded='3xl'
      w={{ base: 'full', lg: '50vw' }}
      alignSelf='center'
      spacing={10}
    >
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Stack spacing={4}>
          <Text
            fontWeight='bold'
            textAlign='center'
            fontSize='3xl'
            bgGradient='linear(to-r,#b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
            bgClip='text'
          >
            What it means...
          </Text>
          <Text style={{ whiteSpace: 'pre-line' }}>{`1. ${explanation[0]?.text}`}</Text>
        </Stack>
      </ScaleFade>
    </Stack>
  );
};

export default Explanation;
