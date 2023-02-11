import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggIn } from '../modules/auth';
import { useDispatch } from "react-redux";
import '../components/navbar/navbar.css'
import TodoInput from "../components/todo/TodoInput"
import { familyToken } from "../modules/token";
import "../components/todo/todo.css";
import axios from "axios";
import StyledEngine, { StyledEngineProvider } from "@mui/styled-engine";
import { Card, CardHeader, CardContent, CardActions, TextField, Typography, Grid, Icon, Button,  } from '@mui/material';



const Todo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fatkn = localStorage.getItem('facesstoken')

    return (
        <div>
            <StyledEngineProvider injectFirst>
                <section className = "todo temp container" id ="todo">
                    <Grid container spacing={2}>
                        <Grid item xs={1} />
                        <TodoInput className="temp"/>
                        <Grid item xs={1} />
                        <Grid item xs={1} />
                        <Grid item xs={1} />
                    </Grid>
                </section>
            </StyledEngineProvider>
        </div>
    )

}

export default Todo;