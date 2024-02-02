const { Author } = require("../db");

const getAuthors = async () => {
  try {
    let authors = await Author.findAll({});
    return authors;
  } catch (error) {
    throw new Error(error);
  }
}

const createAuthorDB = async (
  name
) => {
  try {
    let newAuthor = Author.create({
      name
    });
    return newAuthor;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAuthor = async (id) => {

    const findAuthor = await Author.findOne({ where: { id } });
    
    if (!findAuthor) throw error("Providen id not found");

    await findAuthor.destroy();
    return {message: "Delete success"}
};

module.exports = {
  getAuthors,
  createAuthorDB,
  deleteAuthor
};