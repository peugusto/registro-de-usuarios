export default function validate(req,res,next){
    const { firstname, lastname, phone, email } = req.body;
    
    if(!firstname.trim() || !lastname.trim() || !phone.trim() || !email.trim()){
        res.status(400)
        console.error('Todos os campos precisam estar preenchidos.')
    }

    
    next();
}