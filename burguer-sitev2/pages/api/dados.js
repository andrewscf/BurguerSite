import { MongoClient } from 'mongodb'

function handler(req, res){
    
    MongoClient.connect('mongodb+srv://Eu:mxwars@cluster0.onlq28g.mongodb.net/?retryWrites=true&w=majority')
}