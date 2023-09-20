import axios from "axios"

class oddsController{

    static getOdds = async (req, res) =>{
        try{
            const response = await axios.get("https://odds.data.bet/affiliates/ItOPmBM7HLd-NQngUmT6Cw/json")
            res.status(200).send(response.data)
        }catch(error){
            res.status(500).send("Internal Server Error")
        }
    }

}

export default oddsController;