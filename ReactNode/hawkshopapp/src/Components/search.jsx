import {Component} from "react";
import ItemDisplay from "./itemDisplay";
import item from "./item";


class Search extends Component{
    constructor() {
        super();

        var mysql = require('mysql');
        var con = mysql.createConnection({
            host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
            user: "admin",
            password: "password", 
            port: '3306',
            database: "hs_db"
        });
        con.connect(function(err) {
            if (err) 
                throw err;
            else
                console.log("Connected!");
        });

        this.state = {value: '',
                orgitems:[
                    // dummy data
                    {id:'1230', name:'Laptop', price:23, condition:'Bad' },
                    {id:'1231', name:'English Book', price:450, condition:'Fair' },
                    {id:'1232', name:'Fridge', price:203, condition:'Good' },
                    {id:'1233', name:'Brand New Fridge', price:23, condition:'Bad' },
                    {id:'1234', name:'Math 251 Book', price:450, condition:'Fair' },
                    {id:'1235', name:'TI-84 Calculator', price:203, condition:'Good' },
                    {id:'1236', name:'MacBook Laptop', price:23, condition:'Bad' },
                    {id:'1237', name:'Samsung Fridge', price:450, condition:'Fair' },
                    {id:'1238', name:'Vaccum', price:203, condition:'Good' },
                    {id:'1239', name:'Small Rug', price:23, condition:'Bad' },
                    {id:'1240', name:'Hello', price:450, condition:'Fair' },
                    {id:'1241', name:'Dyson Vaccum', price:203, condition:'Good' },
                    {id:'1242', name:'Big Rug', price:23, condition:'Bad' },
                    {id:'1243', name:'CS 351 book', price:450, condition:'Fair' },
                    {id:'1244', name:'HP Laptop', price:203, condition:'Good' },
                    {id:'1245', name:'Basic Calculator', price:23, condition:'Bad' },
                    {id:'1246', name:'Dell Laptop', price:450, condition:'Fair' },
                    {id:'1247', name:'Rug', price:203, condition:'Good' },
                ],
                // where the searched data should go to
                items:[]

                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        alert('A name was submitted: ' + this.state.value);// instead of this we send this.state.val to back
        
        var input = this.state.value.toLowerCase()
        //search in aws
        var sql = "SELECT * FROM customers WHERE name = ${input}"
        con.query(sql, function(err, result)
        {
            if (err) 
                throw err;
            else
                usersRows = JSON.parse(JSON.stringify(result));
                for (let i = 0; i<usersRows.length; i++){
                    if(usersRows[i]['name'].includes(input));{
                        console.log(usersRows[i]['name'])
                        items.push(usersRows[i]['name']);
                    }
                }
                console.log(usersRows);
        })


        // // this was demo search
        // const items = [];
        // for (let i = 0; i<this.state.orgitems.length; i++){
        //     if (this.state.orgitems[i].name.toLowerCase().includes(this.state.value.toLowerCase())){
        //         console.log(this.state.orgitems[i].name)
        //         items.push(this.state.orgitems[i]);
        //     }
        // }

        this.setState({items});

        // end demo
        event.preventDefault(); // recieve data, and then pass in data
    }

    render() {
        return(

            <div class='m-2'>


                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-outline-dark">search</button>
                </div>
                <ItemDisplay items={this.state.items}></ItemDisplay>
            </div>
        );
    }
}




export default Search;