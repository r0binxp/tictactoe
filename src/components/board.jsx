import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CropFreeIcon from '@material-ui/icons/CropFree';
const Board = () => {
    const [renderIcon, setRenderIcon] = useState([
                                                [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>],
                                                [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>],
                                                [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>]
                                            ]);
    const [buttonPresed, setPepe] = useState([
        [false,false,false],
        [false,false,false],
        [false,false,false]
    ]);
    const [endgame, setEndGame] = useState(false);
    const [user, setUser] = useState(true);
    const [board, setBoard] = useState([['1','2','3'],
                                        ['4','5','6'],
                                        ['7','8','9']]);
    function resetBoard(){
        setEndGame(true)
    }
    useEffect(() => {
        setPepe([   [false,false,false],
                    [false,false,false],
                    [false,false,false]
                ]);
        setBoard([  
                ['1','2','3'],
                ['4','5','6'],
                ['7','8','9']
                ])
        setRenderIcon([
            [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>],
            [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>],
            [<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>,<CropFreeIcon style={{ fontSize: 100 }}/>]
        ])
        setEndGame(false)
        setUser(true)
    },[endgame])


    function check(posx, posy,event) {
        setUser(!user);
        let copy = [...board];
        let icon = [...renderIcon];
        let buttonPress = [...buttonPresed];
        buttonPress[posx][posy] = true
       console.log(event)
       
        if(user) {
            copy[posx][posy] = 'X'
        } else {
            copy[posx][posy] = 'O'
        }
        
        if(user){
            icon[posx][posy] = (<ClearIcon style={{ fontSize: 100 }}/>)
        } else {
            icon[posx][posy] = (<RadioButtonUncheckedIcon style={{ fontSize: 100 }}/>)
        }
        setBoard(copy)
        if(board[0][0] === board[0][1] && board[0][2] === board[0][0]){
            console.log("TREE IN A ROW winner player"+ (user ? 'player1' : 'player2'))
            resetBoard()
            setEndGame(true);
        }
        else if(board[1][0] === board[1][1] && board[1][2] === board[1][0]){
            console.log("TREE IN A ROW SECOND winner player"+ (user ? 'player1' : 'player2'))
            resetBoard()
            setEndGame(true);
        }
        else if(board[2][0] === board[2][1] && board[2][2] === board[2][0]){
            console.log("TREE IN A ROW THIRD winner player"+ (user ? 'player1' : 'player2'))
            resetBoard()
            setEndGame(true);
        }
        else if(board[0][0] === board[1][0] && board[2][0] === board[0][0]){
            console.log("TREE IN A COLUMN ONE winner player"+ (user ? 'player1' : 'player2'))
            resetBoard()
            setEndGame(true);
        }
        else if(board[1][0] === board[1][1] && board[2][1] === board[1][0]){
            console.log("TREE IN A COLUMN ONE winner player"+ (user ? 'player1' : 'player2'))
            resetBoard()
            setEndGame(true);
        }
        setPepe(buttonPress)
        console.log(copy)
        console.log(board)
    }


    
   
    return (
        <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid 
            item xs={4}>
                <Button color='primary' fullWidth={true} size='large' className={buttonPresed[0][0] ? 'buttonTic Mui-disabled' : 'buttonTic'} onClick={(e) => check(0,0,e)}> {renderIcon[0][0]} </Button>
            </Grid>
            <Grid 
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' className={buttonPresed[0][1] ? 'buttonTic Mui-disabled' : 'buttonTic'} onClick={(e) => check(0,1,e)}>{renderIcon[0][1]}</Button>
            </Grid>
            <Grid
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' className={buttonPresed[0][2] ? 'buttonTic Mui-disabled' : 'buttonTic'} onClick={(e) => check(0,2,e)}>{renderIcon[0][2]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                <Button color='primary' fullWidth={true} size='large' className={buttonPresed[1][0] ? 'buttonTic Mui-disabled' : 'buttonTic'} onClick={(e) => check(1,0,e)}>{renderIcon[1][0]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' disabled={buttonPresed[1][1]} className="buttonTic" onClick={(e) => check(1,1,e)}>{renderIcon[1][1]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' disabled={buttonPresed[1][2]} className="buttonTic" onClick={(e) => check(1,2,e)}>{renderIcon[1][2]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                <Button color='primary' fullWidth={true} size='large' disabled={buttonPresed[2][0]} className="buttonTic" onClick={(e) => check(2,0,e)}>{renderIcon[2][0]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' disabled={buttonPresed[2][1]} className="buttonTic" onClick={(e) => check(2,1,e)}>{renderIcon[2][1]}</Button>
            </Grid>
            <Grid 
            item xs={4}>
                 <Button color='primary' fullWidth={true} size='large' disabled={buttonPresed[2][2]} className="buttonTic" onClick={(e) => check(2,2,e)}>{renderIcon[2][2]}</Button>
            </Grid>
            <Grid item xs={12}>
                    <h1>Player turn: {user ? "Player 1" : "Player 2"}</h1>
            </Grid>
        </Grid>
    );
};
export default Board;