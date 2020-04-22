import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  PageContainer,
  NumberContentBox,
  InputBox,
  InputLabel,
  InputField,
  SwitchRepeat,
  SwitchRepeatBtn,
  SwitchRepeatText,
  MainButton,
  TextButton,
  ResultBox,
  ResultText,
  ResultBooble,
} from '../../styles';

export default function Number() {
  const [minNumber, setMinNumber] = useState('1');
  const [maxNumber, setMaxNumber] = useState('10');
  const [numResult, setNumResult] = useState('1');
  const [canRepeatNum, setCanRepeatNum] = useState(true);

  const [numbersResult, setNumbersResult] = useState([])
  const [resultList, setResultList] = useState([])


  function handleDrawNumber() {
    let newNumbersResults = []

    for (let i = 0; i < numResult; i++) {
      const min = Math.ceil(minNumber);
      const max = Math.floor(maxNumber) + 1;
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      
      newNumbersResults = [...newNumbersResults, randomNumber]
    }

    setNumbersResult(newNumbersResults)
    setResultList([newNumbersResults, ...resultList])
  }

  return (
    <PageContainer>
      <NumberContentBox style={{elevation: 3}}>
        <InputBox>
          <InputLabel>Min.</InputLabel>
          <InputField 
            value={minNumber}
            maxLength={3}
            keyboardType='numeric'
            onChangeText={num => setMinNumber(num)}
            />
        </InputBox>
        <InputBox>
          <InputLabel>Max.</InputLabel>
          <InputField 
            value={maxNumber}
            maxLength={3}
            keyboardType='numeric'
            onChangeText={num => setMaxNumber(num)}
          />
        </InputBox>
        <InputBox>
          <InputLabel>Number of Result</InputLabel>
          <InputField 
            value={numResult}
            keyboardType='numeric'
            maxLength={2}
            onChangeText={num => setNumResult(num)}
          />
        </InputBox>
        {/* Can Repeat Buttons */}
        {/* <InputBox>
          <InputLabel>Repeat Number</InputLabel>
          <SwitchRepeat>
            <SwitchRepeatBtn 
              title="YES"
              onPress={() => setCanRepeatNum(!canRepeatNum)}
            >
              <SwitchRepeatText>Yes</SwitchRepeatText>
            </SwitchRepeatBtn>
            <SwitchRepeatBtn 
              title="NO"
              onPress={() => setCanRepeatNum(!canRepeatNum)}
            >
              <SwitchRepeatText>No</SwitchRepeatText>
            </SwitchRepeatBtn>
          </SwitchRepeat>
        </InputBox> */}
      </NumberContentBox>

      <MainButton
        onPress={() => handleDrawNumber()}
      >
        <TextButton>Draw</TextButton>
      </MainButton>

      <ResultBox style={{elevation: 3}}>
        <ResultText>Result:</ResultText>
        {numbersResult.map((result, index) => (
          <ResultBooble key={index}>{result}</ResultBooble>
        ))}
      </ResultBox>
    </PageContainer>
  );
}