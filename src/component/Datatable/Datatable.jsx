import React, { Component } from 'react';
import './datatable.css';
import table from '../../assets/icons/icons8-lampe-de-table-64-1.png';


class Datatable extends Component {
    constructor() {
        super();
        this.state = {
            blocs : [
                {id: 1, name: "Orders", percentage: "30%", prix: "10,00" },
                {id: 2, name: "Tax Reduction", percentage: "40%", prix: "10,00" },
                {id: 3, name: "Revenue", percentage: "50%", prix: "10,00" },
                {id: 4, name: "Yearly Sales", percentage: "80%", prix: "10,00" },
            ]

        }

    }
    render() {
        return (
            <div>
            <div className="dataTable">
                <div className="bloc-date">
                <img src={table} alt="data table icon" className="dat-icon" />

                </div>

              <div className="dataContent">

                <h3>Data table</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Porro, aspernatur corrupti.
              </p>
             </div>


</div>

{/* <div className="buttton">
    <button className="btn">Hover me</button>
</div> */}
             <div className="data-bloc">

                 <ul className="bloc-list" >
                     {this.state.blocs.map((bloc, index) => (
                         <li key={index}>{bloc.name}<br/>
                         {bloc.percentage}<br/>
                         {bloc.prix}<br/>
                        </li>
                     ))}
                 </ul>
             </div>
            </div>
        )
    }

}

export default Datatable;
