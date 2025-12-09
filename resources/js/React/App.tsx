import React from "react";
import Users from "./Pages/Users/Users";
import ProductList from "./components/ProductList/ProductList";
import Chat from "./components/Chat/Chat";

function App() {
    return (
    <div style={{ padding: "20px" }}>
        <h1>Projeto WebSocket</h1>
        <hr />
        <h2>Usuários</h2>
        <Users />
        <hr />
        <h2>Produtos</h2>
        <ProductList products={undefined} />
        <hr />
        <h2>Chat</h2>
        <Chat />
    </div>
    );
}

export default App;

