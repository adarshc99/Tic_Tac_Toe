var Player_start = "1";
var Player_value = {"1":"X","2":"O"};
function New_game()
{
    Tic_Array = [];
}
function Array_Inslize(get_size) // to inslize array with all values as undefined
{
    Temp_array = [];
    for(let i=0;i<get_size;i++)
    {
        Temp_array[i] = null;
    }
    return Temp_array;
}
function Can_write(get_id)
{
    if(Tic_Array[Number(get_id[2])-1] != null)
    {
        document.getElementById(get_id).style.cursor = "not-allowed";
    }
    else
    {
        document.getElementById(get_id).style.cursor = "pointer";
    }
}
function Check_winner()
{
    
    if((Tic_Array[0]!=null && Tic_Array[1]!=null && Tic_Array[2]!=null) && (Tic_Array[0] == Tic_Array[1]==Tic_Array[2]))
    {
        console.log("hello");
        return true;
    }
    if(Tic_Array[3]!=null && Tic_Array[4]!=null && Tic_Array[5]!=null && (Tic_Array[3] == Tic_Array[4]==Tic_Array[5]))
    {
        return true;
    }
    if(Tic_Array[6]!=null && Tic_Array[7]!=null && Tic_Array[8]!=null && (Tic_Array[6] == Tic_Array[7]==Tic_Array[8]))
    {
        return true;
    }
    if(Tic_Array[0]!=null && Tic_Array[3]!=null && Tic_Array[6]!=null && (Tic_Array[0] == Tic_Array[3]==Tic_Array[6]))
    {
        return true;
    }
    if(Tic_Array[1]!=null && Tic_Array[4]!=null && Tic_Array[7]!=null && (Tic_Array[1] == Tic_Array[4]==Tic_Array[7]))
    {
        return true;
    }
    if(Tic_Array[2]!=null && Tic_Array[5]!=null && Tic_Array[8]!=null && (Tic_Array[2] == Tic_Array[5]==Tic_Array[8]))
    {
        return true;
    }
    if(Tic_Array[0]!=null && Tic_Array[4]!=null && Tic_Array[8]!=null && (Tic_Array[0] == Tic_Array[4]==Tic_Array[8]))
    {
        return true;
    }
    if(Tic_Array[6]!=null && Tic_Array[4]!=null && Tic_Array[2]!=null && (Tic_Array[6] == Tic_Array[4]==Tic_Array[2]))
    {
        return true;
    }
    return false;
}
var Tic_Array = Array_Inslize(9);  // array to store all values
console.table(Tic_Array);
function Player_CLick(get_id)
{
    if(Tic_Array[Number(get_id[2])-1] != "X" && Tic_Array[Number(get_id[2])-1] != "O")
   {
    if(Player_start == "1")
        {
            Tic_Array[Number(get_id[2])-1] = document.getElementById(get_id).innerText = Player_value[Player_start];
            console.log(Tic_Array[Number(get_id[2])-1]);
            // if(Check_winner())
            // {
            //     console.log("1");

            // }
            // else{
            //     console.log("no here");
            // }
            console.log(Check_winner());
            // console.table(Tic_Array);
            $(".Player1").css("background","rgb(17, 226, 174)");
            $(".Player2").css({"background":"red","border":"2px solid brown"});
            Player_start = "2";
        }
        else
        {
            Tic_Array[Number(get_id[2])-1] = document.getElementById(get_id).innerText = Player_value[Player_start];
            console.log(Tic_Array[Number(get_id[2])-1]);
            if(Check_winner())
            {
                console.log("2");

            }
            else{
                console.log("no i am here");
            }
            // console.table(Tic_Array);
            $(".Player1").css({"background":"red","border":"2px solid brown"});
            $(".Player2").css("background","rgb(17, 226, 174)");
            Player_start = "1";
        }
    }
    else
    {
        console.log("no");
    } 
}

$(document).ready(function()
{
    $(".Player1").css("background","red");
});
