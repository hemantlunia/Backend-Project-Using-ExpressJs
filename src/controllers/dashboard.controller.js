import mongoose from "mongoose";
import {Video} from "../models/video.model.js"
import {Subscription} from "../models/video.model.js"
import {Like} from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getChannelStats = asyncHandler(async(req,res)=>{
    //TODO: get the channel states like total video views,total subscriber,total videos,total likes etc.

})

const getChannelVideos = asyncHandler(async(req,res)=>{
    //TODO: get all the videos uploaded by the channel
})

export {
    getChannelStats,
    getChannelVideos
}