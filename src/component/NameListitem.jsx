import React from 'react';
import moment from 'moment';
function NameListitem(props) {
    return (
        <li>
            <p><img src={props.avatar} /> </p>
            <p>{props.name} </p>
            <p>City : {props.city} </p>
            <p>Email : {props.mail} </p>
            <p>Birthday : {moment(props.birthday).format('DD-MM-YYYY')} </p>
        </li>);
}
export default NameListitem;