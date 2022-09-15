import {ImageBackground} from 'react-native';
import {styles} from './background.styles';
import React from 'react';
import backgroundImg from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode
}

export const Background = ({ children}: Props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      { children}
    </ImageBackground>
  )
}