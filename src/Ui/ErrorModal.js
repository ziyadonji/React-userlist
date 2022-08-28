import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "../Ui/Button";
import Card from "../Ui/Card";

const ErrorModal = (props) => {
    return(<>
        <div className={classes.backdrop} onClick={props.errorHandler}></div>
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>error occured</h1>
            </header>
            <div className={classes.content}>
                <p>please enter valid username and title</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.errorHandler}>Close</Button>
            </footer>
            </Card></>
    );
}

export default ErrorModal;