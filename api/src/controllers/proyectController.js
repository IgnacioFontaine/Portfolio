const { Proyect } = require("../db");


const getAllProyects = async () => {
  try {
    let proyects = await Proyect.findAll({});
    return proyects;
  } catch (error) {
    throw new Error(error);
  }

}

const getProyectByName = async (name) => {
  try {
    let proyect = await Proyect.findAll({
      where: {
        name: name,
      },
    });
    return proyect;
  } catch (error) {
    throw new Error(error);
  }
};


const createProyectDB = async (
  name, description
) => {
  try {
    let newProyect = Proyect.create({
      name, description
    });
    return newProyect;
  } catch (error) {
    throw new Error(error);
  }
};


const updateProyect = async (
  id,
  newName,
  newDescription) => {
  try {
    let proyect_modif = await Proyect.findOne({ where: { id } })
    

    if (!proyect_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (proyect_modif) {
      proyect_modif = await Proyect.update({
        name: newName,
        description: newDescription
      },
        { where: { id } }
        );
    }

  } catch (error) {
    throw new Error(error);
  }
};

const updateDescriptionProyect = async (
  id,
  newDescription) => {
  try {
    let proyect_modif = await Proyect.findOne({ where: { id } })

    if (!proyect_modif) {
    throw new Error('The id was not found or it is incorrect');
    }

    if (proyect_modif) {
      proyect_modif = await Proyect.update(
            { description:  newDescription },
            { where: { id } }
        );
    }

  } catch (error) {
    throw new Error(error);
  }
};

const deleteProyect = async (id) => {

    const findProyect = await Proyect.findOne({ where: { id } });
    
    if (!findProyect) throw error("Providen id not found");

    await findProyect.destroy();
    return {message: "Delete success"}
};


module.exports = {
  getAllProyects,
  getProyectByName,
  createProyectDB,
  updateProyect,
  updateDescriptionProyect,
  deleteProyect
};