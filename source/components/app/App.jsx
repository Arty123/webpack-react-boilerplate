// Dependencies
import React from 'react';

// Components
import Header   from '../header/Header.jsx';
import Content  from '../content/Content.jsx';
import Sidebar  from '../sidebar/Sidebar.jsx';
import Footer   from '../footer/Footer.jsx';

// Styles
import './App.scss';

class App extends  React.Component {
    render() {
        return (
            <div className="site-wrapper">
                <Header />
                <div className="main-content">
                    <Sidebar content={"Content of Sidebar..."} />
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;