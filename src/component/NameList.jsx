import React, { Fragment } from 'react';
import NameListitem from './NameListitem';

function NameList() {
    const nameList = [{
        name: { title: "mr", first: "Brad", last: "Gibson" },
        location: { city: "kilcoole", },
        email: "brad.gibson@example.com",
        dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg", },

    },
    {
        name: { title: "Mr", first: "Christopher", last: "Steinnes" },
        location: { city: "Namsos", },
        email: "christopher.steinnes@example.com",
        dob: { date: "1977-01-10T10:02:55.573Z", age: 43 },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/66.jpg", },

    },
    {
        name: { title: "Mrs", first: "Eva", last: "Bouchard" },
        location: { city: "Sherbrooke", },
        email: "eva.bouchard@example.com",
        dob: { date: "2008-08-06T02:16:52.832Z", age: 12 },
        picture: { medium: "https://randomuser.me/api/portraits/med/women/3.jpg", },

    }];

    const nameListComponent = () => {
        return nameList.map((aName) => {
            return (
                <NameListitem
                    name={aName.name.first + ' ' + aName.name.last}
                    city={aName.location.city}
                    mail={aName.email}
                    birthday={aName.dob.date}
                    avatar={aName.picture.medium}
                />

            );
        }
        );
    };

    return (
        <div>
            <h1>Name List</h1>
            <hr />

            <ul>
                {nameListComponent()}

            </ul>
        </div>);

}
export default NameList;