import Sequelize from 'sequelize';
const sequelize = new Sequelize('devit2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
(async () => {
    try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch(error) {
            console.error('Unable to connect to the database:', error);
        }

})();

export {sequelize};