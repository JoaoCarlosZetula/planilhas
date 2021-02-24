module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-google-sheets',
            options: {
                spreadsheetId: '1wwNxAtLzm_1clFI1ql70R-Aab9l_4sCx4E0zEf2ydSE',
                worksheetTitle: 'Vendedores',
                credentials: require('./google-credentials.json')   
            }
        }
    ]
}