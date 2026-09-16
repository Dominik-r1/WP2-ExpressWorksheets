import express, {Application, Request, Response} from "express" ; 

const PORT = process.env.PORT || 5600; 

const app: Application = express(); 

// logging 
app.use((req, _res, next) => {  

     console.log(`${req.method} ${req.originalUrl}`); 

    next(); 

}); 

//routes
app.get("/ping", async (_req : Request, res: Response) => { 

    res.json({ 

    message: "hello from Dominik " 

    }); 

}); 

app.get('/bananas', async (_req : Request, res: Response) => { 

    res.json({ 

    message: "this is bananas", 

    }); 

});

app.get('/hello', async (_req : Request, res: Response) => { 

    res.json({ 

    message: "this is my own route", 

    }); 

});

 
app.listen(PORT, () => { 

console.log("Server is running on port", PORT); 

}); 