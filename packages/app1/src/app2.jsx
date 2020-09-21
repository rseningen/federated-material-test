import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default function App2() {
    return (<Box display="flex" flexDirection="column" flex={1}>
        <Paper style={{width: 200, height: 200}}>
            <h3>Defect App</h3>
            <div>
                AppBar turns white, notice duplicate Paper style sheets loaded in 'head'
            </div>
        </Paper>
    </Box>);
}