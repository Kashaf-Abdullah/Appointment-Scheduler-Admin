import React from 'react'
import { Container } from 'react-bootstrap'
import MeineVortragsthemenCard from './cards/MeineVortragsthemenCard'

const MeineVortragsthemen = () => {
  const  first= [
    'Lorem Ipsum',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is',
    'Lorem Ipsum is simply dummy text of the printing',
    'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing',
 
  ];
  const second=[
   'Lorem Ipsum',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is',
    'Lorem Ipsum is simply dummy text of the printing',
    'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing',

  ]
  const third=[
    'Lorem Ipsum',
    'Lorem Ipsum is simply dummy text',
    'Lorem Ipsum is',
    'Lorem Ipsum is simply dummy text of the printing',
    'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing',
  ]
 
  return (
    <Container>
    <h3 className="heading"  style={{margin:"4rem 0 3rem 0"}}>
 Lorem ipsum dolor sit.
</h3>
        <div className="row">
        <MeineVortragsthemenCard topics={first} heading="lorem ipsum"/>
        <MeineVortragsthemenCard topics={second}  heading="lorem ipsum"/>
        <MeineVortragsthemenCard topics={third}  heading="lorem ipsum"/>
   </div>
    </Container>
  )
}

export default MeineVortragsthemen
