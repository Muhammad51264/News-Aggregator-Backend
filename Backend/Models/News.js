//ahmad

const mongoose = require('mongoose');


const newsSchema = new mongoose.Schema({
   

 
        category: {
        type:String , 
        required:true 
          },
        img :  {
            type:String , 
            required:true 
              },
        title: {
            type:String , 
            required:true 
              },
        desc: {
            type:String , 
            required:true 
              },
        date : {
            type: Date , 
            required:true 
              },
              comments: [
                {
                  comment: {
                    type: String,
                    required: true,
                  },
                  email: {
                    type: String,
                    required: true,
                  },
                },
              ]

})

const News = new mongoose.model("News", newsSchema)

module.exports = News