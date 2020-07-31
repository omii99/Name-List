import React from 'react';
import moment from 'moment';
function NameListitem(props) {
    return (
        <li className="list-group-item">

            <div className="row">
                <div className="col-sm">
                    <img src={props.avatar} alt={props.avatar} />
                </div>
                <div className="col-sm">
                    <p> {props.name}  </p>

                    <p>City : {props.city} </p>
                    <p>Email : {props.mail} </p>
                    <p>Birthday : {moment(props.birthday).format('DD-MM-YYYY')} </p>
                </div>
            </div>

        </li>);
}
export default NameListitem;