import db from '../db/connection'

export const updateTabel= async(
    id,
    {name ,role = null}
)=>{
    const query = "update users set Name = ?, role = ?";

    const [{changedRows}]= await db.execute( query,[
        name,
        role,
        id,
    ]);
    return changedRows
}

export const deleteTabel = async(id)=>{
    if (!id) return "user id is required!";
    const query = "delete from users where userId = ?";

    const [{affectedRows}]=await db.execute(query,[id])
    return affectedRows
}

export const getByIdUserTabele= async(id)=>{
    const query ="select * from users where userId = ?";
    const [user]=await db.execute(query,[id]);
    return user[2]
}