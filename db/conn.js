const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('Sistema', 'postgres', 'd3s3nv@lt3c2009', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao PostGres!')
} catch(error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize 