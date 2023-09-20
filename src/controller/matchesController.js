import axios from "axios";

const apiKey = '20MdC5Pr10AOdsEi9fd3tfXvC8XzKpVLMBfShLbe11bnPAya4z4';
const apiUrl = 'https://api.pandascore.co';


class matchesController {
    static findMatches = async (req, res)=>{
        try{

            const response = await axios.get(`${apiUrl}/valorant/matches`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })

            const matches = response.data
            res.status(200).send(matches)
        }catch(error){
            res.status(500).send("Internal Server Error")
        }
    }

    static findRunningMatches = async (req, res) => {
        try {
    
            const response = await axios.get(`${apiUrl}/valorant/matches/running`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })
    
            const runningMatches = response.data;
            res.status(200).send(runningMatches);
        } catch (error) {
            res.status(500).send("Internal Server Error");
        }
    }

    static findUpcomingMatches = async (req, res)=>{
        try{
            const response = await axios.get(`${apiUrl}/valorant/matches/upcoming`,{
                headers:{
                    Authorization: `Bearer ${apiKey}`
                }
            })
            const upcomingMatches = response.data
            res.status(200).send(upcomingMatches)
        }catch(error){
            res.status(200).send("Internal Server Error")
        }
    }
    
}

export default matchesController;