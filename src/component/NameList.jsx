import React, { Fragment, useState, useEffect } from 'react';
import NameListitem from './NameListitem';

function NameList() {

    const [loadData, setLoadData] = useState(new Date());

    const [nameList, setNameList] = useState([{

        id: 1,
        name: { title: "mr", first: "Brad", last: "Gibson" },
        location: { city: "kilcoole", },
        email: "brad.gibson@example.com",
        dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/75.jpg", },

    },
    {
        id: 2,
        name: { title: "Mr", first: "Christopher", last: "Steinnes" },
        location: { city: "Namsos", },
        email: "christopher.steinnes@example.com",
        dob: { date: "1977-01-10T10:02:55.573Z", age: 43 },
        picture: { medium: "https://randomuser.me/api/portraits/med/men/66.jpg", },

    },
    {
        id: 3,
        name: { title: "Mrs", first: "Eva", last: "Bouchard" },
        location: { city: "Sherbrooke", },
        email: "eva.bouchard@example.com",
        dob: { date: "2008-08-06T02:16:52.832Z", age: 12 },
        picture: { medium: "https://randomuser.me/api/portraits/med/women/3.jpg", },

    }]);

    useEffect(() => {
        fetch("https://randomuser.me/api").then(
            response => {
                return response.json();
            }
        ).then((responseData) => {
            setNameList(nameList => [...nameList, responseData.results[0]]);
        });
    }, [loadData]);

    const nameListComponent = () => {
        return nameList.map((aName) => {
            return (
                <NameListitem
                    key={aName.id}
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

    const addUserHandler = () => {
        setLoadData(new Date());
    };

    return (
        <div>

            <div className="container mt-4">
                <button className="btn btn-primary mb-2 ml-5" onClick={addUserHandler} >Add Name</button>
                <ul className="List-group">
                    {nameListComponent()}

                </ul>
            </div>

        </div>);

}
export default NameList;