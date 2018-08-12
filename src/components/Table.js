/**
 * Created by rpowar on 8/11/18.
 */
import React, {Component} from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let salesData = this.props.tableData.sales;

        let tableData  = salesData.map((items, i) => {
            return [
                <tr>
                    <td>{items.weekEnding}</td>
                    <td>{items.retailSales}</td>
                    <td>{items.wholesaleSales}</td>
                    <td>{items.unitsSold}</td>
                    <td>{items.retailerMargin}</td>
                </tr>
            ]
        });

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Week Ending</th>
                        <th scope="col">Retail Sales</th>
                        <th scope="col">Whole Sales</th>
                        <th scope="col">Units Sold</th>
                        <th scope="col">Retailer Margin</th>
                    </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>



        )
    }
}

export default Table;