import './App.css';
import MapTest from './componenent/MapTest'
import Banner from './componenent/Banner';
import Menu from './componenent/Menu';

function App() {
    return (
        <div>
            <Banner/>
            <div id='ww'>
                <Menu/>
                <MapTest/>
            </div>
        </div>
    );
}

export default App;
