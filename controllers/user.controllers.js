import{
    deleteTabel,
    getByIdUserTabele,
    updateTabel,
} from '../models/user.models';

export const getId = async(req,res)=>{
    try {
        const user = await getByIdUserTabele(req.params.id);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'internal server error'})
    }
}

export const  updateId = async (req, res) => {
    try {
      const response = await updateTabel(req.params.id, req.body);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "updated user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };

  export const deleteId = async (req, res) => {
    try {
      const response = await deleteTabel(req.params.id);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "deleted user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };