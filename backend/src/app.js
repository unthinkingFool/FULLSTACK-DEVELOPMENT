// app.js => to create a server

const express= require('express')

const app=express()

const {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
} = require("./models/note.model");

app.use(express.json())

const notes=[]

// to post anything on server
app.post('/notes' ,async (req, res)=>{
    const note=await createNote(req.body.title, req.body.description)
    res.status(201).json({
        message:"note created successfully",
        note:note
    })
}
)

// to get anything or fetch anything from server
app.get('/notes',async (req,res)=>{
    const notes=await getAllNotes()
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

// delete ---> /notes/:index
app.delete('/notes/:index' , async (req,res)=>{
    const index=req.params.index
    await deleteNote(index)
    res.status(200).json({
        message:`note of index ${index} deleted `
    })

})

// patch --> to update any existing thing on server
app.patch("/notes/:index",async (req,res)=>{
    const index=req.params.index;
    const desc=req.body.description;

    await updateNote(index, req.body.title, desc)
    res.status(200).json({
        message:`description of note ${index} updated successfully`
    })
})


module.exports=app







