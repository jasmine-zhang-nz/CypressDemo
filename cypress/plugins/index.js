// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const pdf = require('pdf-parse')
const {Pool} = require('pg')

const pool = new Pool(
    {
        host:'',
        user:'',
        password:'',
        database:'',
        port:'',
        max:20
    }
)

const parsePdf = async(file) =>{
    let dataBuffer = fs.readFileSync(file)
    return await pdf(dataBuffer)
}

module.exports = (on, config) => {
    on('task',{
        getPdf(file)
        {
            return parsePdf(file)
        },
        query({sql, values})
        {
            return pool.query(sql, values)
        }
    })
}
