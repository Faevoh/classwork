import { ballModel } from "../MODEL/model.js";

// add new player
export const newTeam = async(req,res)=>{
    const createTeam = await ballModel.create(req.body);
    const number = req.body.numberOfPlayers;
    // console.log(number)
    if(number >= 22 && number <=25 ){
        res.status(404).json({
            message: "new player",
            data: createTeam
        });
        }else{
           res.status(404).json({
            message: "Wrong numberOfPlayers inserted"
           });
        }
};

//get all registered player
export const allTeam = async(req,res)=>{
    try{
        const allplayer = await ballModel.findAll();
        if(allplayer.length[0] == 0){
            res.status(404).json({
                message: "theres an error"
            });
        }else{
            res.status(200).json({
                message: "All players " + allplayer.length,
                data: allplayer
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

// get each league
export const singleTeam = async(req,res)=>{
    try{
        const id = req.params.id;
        const oneTeam = await ballModel.findAll({
            where:{
                id: id
            }
        });
        if(oneTeam.length[0] === 0 ){
            res.status(404).json({
                message: error.message
            });
        }else{
            res.status(200).json({
                message: "single player of team",
                data: oneTeam
            });
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

//update a team
export const updateTeam =  async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedTeam = await ballModel.update(req.body,{
           where: {
            id: id
           }
        });
        const number = req.body.numberOfPlayers
        console.log(number)
        if(number >=22 && number <=25 && updatedTeam[0] === 0){
            res.status(200).json({
                message: " updated",
            });
        }else{
            res.status(404).json({
                message: "not updated and id doesnt exist"
            });    
        }
    }catch(error){
        res.status(404).json({
            message: error.message
        });
    }
};

//delete player
export const removeTeam = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteTeam = await ballModel.destroy({
            where:{
                id: id
            }
        });
        if(deleteTeam === 0){
            res.status(404).json({
                message: "doesnt exist"
            });
        }else{
            res.status(200).json({
                message: "deleted"
            });
        }
    }catch(error){
        res.status(404).json({
             message: error.message
        });
    }
};
