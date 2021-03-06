import App from 'next/app';
import Layout from '../components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';


class MyApp extends App{
    render(){
        const{component}=this.props
        return (
            <Layout>
                <component />
            </Layout>
        )
    }
}


export default MyApp;
