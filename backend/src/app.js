// app.js => to create a server

const express= require('express')

const app=express()
app.use(express.json())

const notes=[]

// to post anything on server
app.post('/notes' ,(req, res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })
}
)

// to get anything or fetch anything from server
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

// delete ---> /notes/:index
app.delete('/notes/:index' , (req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:`note of index ${index} deleted `
    })

})

// patch --> to update any existing thing on server
app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index;
    const desc=req.body.description;

    notes[index].description=desc
    res.status(200).json({
        message:`description of note ${index} updated successfully`
    })
})


module.exports=app


// password : 8X9j0PDEGCwq1w4Y




