import App, { Container } from 'next/app';
import Page from '../components/Page';
import Header from '../components/Header';
import Nav from '../components/Nav';

class MyApp extends App {
 render(){
    const { Component } = this.props;
return(
    <Container>
      <page>
        <Component />
     </page>
    </Container>
)
}



}

export default MyApp;