// Dependencies
import React from 'react';

// Styles
import './Sidebar.scss';

class Sidebar extends React.Component {

    render() {
        return(
            <section className="sidebar">
                <h1 className="sidebar-title">Just sidebar... {this.props.content}</h1>
            </section>
        );
    }
}

export default Sidebar;

