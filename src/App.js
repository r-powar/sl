import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from './actions/fetchAction';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Graph from './components/Graph';
import Table from './components/Table';


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchData();
    }

    render() {

        if (this.props.serverData.data.length) {
            var serverData = this.props.serverData.data[0];
        }

        return (
            <div>
                <Nav/>
                {(this.props.serverData.data.length > 0) ?
                    <div className="container-fluid">
                        <div className="row sideContent">
                            <Sidebar sideBar={serverData}/>
                            <Graph graphData={serverData}/>
                            <Table tableData={serverData}/>
                        </div>
                    </div> : ""}

            </div>
        )

    }
}

const mapStateToProps = state => ({
    serverData: state.data
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        dispatch(fetchData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
