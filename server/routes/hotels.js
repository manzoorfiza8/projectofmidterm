import  express  from "express";
import Hotel from "../Models/Hotel.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel,countByCity,
    countByType,getHotelRooms } from "../controllers/hotel.js";


const router =express.Router();

//CREATE
router.post("/",createHotel);
//UPDATE
router.put("/:id",updateHotel);
//DELETE
router.delete("find/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL
router.get("/",getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
    







export default router