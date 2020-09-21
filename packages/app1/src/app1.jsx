import React from "react";
import {Paper} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function App1() {
    return (<Box display="flex" flexDirection="column" flex={1}>
        <Paper style={{width: 200, height: 100}}>
            <h3>App1</h3>
        </Paper>
    </Box>);
}