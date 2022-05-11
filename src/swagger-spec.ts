import path from 'path';

export const swaggerSpec = {
    
    definition: {

        openapi: "3.0.0",
        info: {
            title: "API SWAGGER USERS",
            version: "1.0"
        },
        

    },
    apis: [
        `${path.join(__dirname, './routes/*.ts')}`
    ]

}