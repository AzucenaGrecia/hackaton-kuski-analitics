import Image from 'next/image'
import styles from './page.module.css'
import styled from "styled-components";

export default function Home() {
  return (
    <Title>
        HOLA MUNDO~!!
    </Title>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;