import DataModel from "../models/datamodel.js";
export const addmoredata = async (req, res) => {
  const { dataarray } = req.body;
  
  const dataitem = await DataModel.create({
    dataarray: dataarray,
  });
   
  res.status(200).json(dataitem);
};
