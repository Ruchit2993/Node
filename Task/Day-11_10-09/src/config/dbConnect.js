import Sequelize from 'sequelize';
// import { createUser } from '../controllers/userUtil.js';

const sequelize = new Sequelize('devit', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
(async () => {
    try {
            await sequelize.authenticate();
            // await sequelize.sync({force: true})
            // await createUser({firstName: "Demo"})
            console.log('Connection has been established successfully.');
        } catch(error) {
            console.error('Unable to connect to the database:', error);
        }

})();

export {
    // dbConn,
    sequelize};