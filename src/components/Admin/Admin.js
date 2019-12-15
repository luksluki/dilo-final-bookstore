import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import TransactionList from "./TransactionList";
import axios from "axios";

const Home = () => {

    const userData = window.localStorage.getItem("userData")
        ? JSON.parse(window.localStorage.getItem("userData"))
        : {};
    axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`
    };

    const [users, setUsers] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const redirect = () => {
        window.location.replace('/admin')
    }

    async function addNewBook(e) {
        var title = e.target["title"].value;
        var author = e.target["author"].value;
        var price = e.target["price"].value;
        var description = e.target["description"].value;
        var category = e.target["category"].value;
        var stock = e.target["stock"].value;

        const request = await axios.post('http://localhost:3000/books', {
            title,
            author,
            price,
            description,
            category,
            stock
        })
        redirect()

    }

    async function fetchData() {
        const request1 = await axios.get("http://localhost:3000/users");
        const users = request1.data;
        setUsers(users);

        const request2 = await axios.get("http://localhost:3000/transactions");
        const transactions = request2.data;
        setTransactions(transactions);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <h3>Add a new book</h3>
                <form onSubmit={e => {
                    e.preventDefault();
                    addNewBook(e);
                }}>
                    <div className="form-group" >
                        <input type="text" name="title" placeholder="Book Name" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="author" placeholder="Author" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" placeholder="Description" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="category" placeholder="Category" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="price" placeholder="Price" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="number" name="stock" placeholder="Stock" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success" >Submit </button>
                    </div>
                </form>
            </div>
            <div class="col-md-12">
                <div class="col-md-6">
                    <h2>List All User</h2>
                    <div>
                        <UserList users={users} />
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>List All Transaction</h2>
                    <div>
                        <TransactionList transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;