import sequelize from "../config/database.js";

export async function executarProcedure(param1, param2) {
  return await sequelize.query("EXECUTE MINHA_PROCEDURE(:param1, :param2)", {
    replacements: { param1, param2 },
    type: sequelize.QueryTypes.SELECT,
  });
}
