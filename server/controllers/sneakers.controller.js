import asyncHandler from 'express-async-handler';
import SneakersModel from "../models/sneakers-model.js";
import SneakersDTO from '../dtos/sneakers-dto.js';
class SneakersController{

    // @desc Get sneakers
    // @route GET/api/sneakers
    // @access Public
    getAll = asyncHandler(async(req, res)=> {
        const items = await SneakersModel.find();
        let array = items.map(item => new SneakersDTO(item));
        res.status(200).json(array);
    });

    // @desc Get filtered sneakers
    // @route POST/api/sneakers/filter
    // @access Public
    getFiltered = asyncHandler(async(req, res)=> {
        const filterObj = this.queryMaker(req.body);
        let items = await SneakersModel.find(filterObj).skip(req.body.offset).limit(req.body.limit);
        let array = items.map(item => new SneakersDTO(item));
        res.status(200).json(array);
    });



/*
* sex
* brand
* colors
* sizes
* prices
* https://www.mongodb.com/docs/compass/current/query/filter/?utm_source=compass&utm_medium=product
* */
    queryMaker = (object)=> {
        let conditions = {};
        for(let key in object){
            if(key === 'prices'){
                conditions.prices = {$elemMatch: { $gt: object[key][0], $lt: object[key][1] }}
            }else if(key === 'query'){
                conditions.fullname = {$regex: object[key]};
            }
            else if(key !== 'offset' && key !== 'limit'){
                conditions[key] = object[key];
            }
        }
        if (Object.keys(conditions).length > 1)
        return {
            $and: [conditions]
        }
        else return  conditions;
    }
}
export default new SneakersController();