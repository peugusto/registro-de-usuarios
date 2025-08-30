export default function validate(req,res,next){
    const { firstname, lastname} = req.body;
    
    if( typeof firstname !== 'string' || firstname.trim() === '' ||  
        typeof lastname !== 'string' || lastname.trim() === ''){
        
        console.error('Todos os campos precisam estar preenchidos.')
        return res.status(400).json({ error: 'Todos os campos precisam estar preenchidos.' });
    }

    
    next();
}
