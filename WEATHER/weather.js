// const express=require("express")
// const app=express();
// const axios=require('axios')
// const path=require('path')


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'form1.html'));
// })
// app.get('/weather',async(req,res)=>{
//     const city=req.query.city;
    
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9c7bbc3007895c211a8a2279ae035a67`
//     try{
//         const response=await axios.get(url);
//       const  weather=response.data
//       (res.json(weather))

//     }catch(err){
//         res.send(err.message)

        

//     }
// })
// app.listen(3001,()=>{
//     console.log('Hi Deepak Shuru ho raha hai');
// })

const express = require("express");
const app = express();
const axios = require('axios');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form1.html'));
});

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send('City parameter is missing');
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=9c7bbc3007895c211a8a2279ae035a67`;
        const response = await axios.get(url);
        const weather = response.data;
        res.json(weather); // Send weather data back as JSON response
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});


