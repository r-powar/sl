/**
 * Created by rpowar on 8/11/18.
 */
import React, {Component} from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sideBarData = this.props.sideBar;

        let imageSrc = sideBarData.image;
        let title = sideBarData.title;
        let subTitle = sideBarData.subtitle;

        let tags = sideBarData.tags.map(data =>
            <span className="badge badge-light tagVal">{data}</span>
        );

        return (

            <div className="col-sm-3 sideNav">
                <div className="row productDetails">
                    <img src={imageSrc} alt="itemImage" width="150" height="150"/>
                    <h5>{title}</h5>
                    <span>{subTitle}</span>
                </div>
                <div className="row tags">
                    {tags}
                </div>
                <div className="row third">
                    <div>
                        <span className="glyphicon glyphicon-home"></span>
                        <span>Overview</span>
                    </div>
                    <div>
                        <span className="glyphicon glyphicon-signal"></span>
                        <span>Sales</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sidebar;

