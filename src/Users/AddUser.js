import React from "react";
import Card from "../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";

const AddUser = (props) => {
    const [userName, setUserName] = React.useState("");
    const [userAge, setUserAge] = React.useState("");
    const[isValid, setIsValid] = React.useState(true);

    const onChangeUserName = (e) => {
        setUserName(e.target.value);

        
    }
    const onChangeUserAge = (e) => {
        setUserAge(e.target.value);
       
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(userName.trim().length===0 || userAge.trim().length===0){
            setIsValid(false);
            return;
        }
        props.addUser(userName, userAge);
        setUserAge("");
        setUserName("");
        // props.addUser(event.target.name.value,event.target.age.value);
    }
    const errorHandler=()=>{

        setIsValid(true);
    }
    return (<>
    {!isValid && <ErrorModal errorHandler={errorHandler}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
        <label htmlFor="name">username</label>
        <input  type="text" id="name" onChange={onChangeUserName} value={userName}/>
        <label htmlFor="age">Age </label>
        <input  type="number" id="age" onChange={onChangeUserAge} value={userAge}/>
        <Button type="submit" >Add User</Button>
    </form>
        </Card></>
    )

}

export default AddUser;