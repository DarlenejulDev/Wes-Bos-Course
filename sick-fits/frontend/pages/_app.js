import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData'
import Header from '../components/Header';
import Nav from '../components/Nav';

class MyApp extends App {
  // This will expose page numbers
  static async getInitialProps({ Component, ctx}) {
    let pageProps= {};
    // if component has the initial props  then we will surface them via the page props
    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
 render(){
    const { Component, apollo, pageProps } = this.props;
  return(
    <Container>
     <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
     </ApolloProvider>
    </Container>
   );
  }
}

export default withData(MyApp);
