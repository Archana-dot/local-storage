import React from 'react';

class Array extends React.Component {
    setData() {

        var colors = ["red", "blue", "green"];
        localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors

    }
    getData() {
        var storedColors = JSON.parse(localStorage.getItem("my_colors"));


        console.log(storedColors)
    }
    render() {
        return (
            <div >
                <button onClick={() => this.setData()}>set Data</button>
                <button onClick={() => this.getData()}>get Data</button>

            </div>
        );
    }
}

export default Array;