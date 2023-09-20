import axios from "axios";

class tournamentsController {
    static findTournaments = async (req, res)=>{
        try{

            const apiKey = '20MdC5Pr10AOdsEi9fd3tfXvC8XzKpVLMBfShLbe11bnPAya4z4';
            const apiUrl = 'https://api.pandascore.co';

            const response = await axios.get(`${apiUrl}/valorant/tournaments`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })

            const tournments = response.data
            res.status(200).send(tournments)
        }catch(error){
            res.status(500).send("Internal Server Error")
        }
    }

    static findUpcomingTournaments = async (req, res)=>{
        try{

            const apiKey = '20MdC5Pr10AOdsEi9fd3tfXvC8XzKpVLMBfShLbe11bnPAya4z4';
            const apiUrl = 'https://api.pandascore.co';

            const response = await axios.get(`${apiUrl}/valorant/tournaments/running`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })

            const tournments = response.data
            res.status(200).send(tournments)
        }catch(error){
            res.status(500).send("Internal Server Error")
        }
    }

}

export default tournamentsController;