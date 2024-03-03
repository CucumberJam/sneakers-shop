export default async (req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:5173');
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
}