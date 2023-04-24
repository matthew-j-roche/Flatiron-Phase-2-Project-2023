import React from "react";
import ContainerCard from "./ContainerCard";

function Container () {
    return (
        <div>
            <h2>This is the Container component</h2>
            <ContainerCard />
            <ContainerCard />
            <ContainerCard />
        </div>
    );
};

export default Container;