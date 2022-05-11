/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              firstname:
 *                  type: string
 *                  description: First Name of the user
 *              lastname:
 *                  type: string
 *                  description: Last Name of the user
 *          required:
 *              - firstname
 *              - lastname
 *          example:
 *              firstname: Andres
 *              lastname: Hernandez
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: get all users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: List all users
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: get a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: number
 *            required: true
 *            description: id of the user
 *      responses:
 *          200:
 *              description: List one user
 *          204:
 *              description: No Content
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Create a new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: new user was created
 */