export const sendMessage = async (req, res) =>{
    try {
        console.log('message send', req.params.id)
    } catch (error) {
        res.status(500).json({error: "internal server error"})
    }
}