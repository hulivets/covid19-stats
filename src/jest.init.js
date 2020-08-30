import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';

window.__CONFIG__ = {
    apiUrl : 'https://api.covid19api.com'
};

configure({ adapter: new Adapter() });
