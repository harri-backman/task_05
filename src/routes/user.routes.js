import userController from "../controllers/user.controller.js"


const routes = (app) => {
    app.post("/user", userController.createUser)
    app.get("/user", userController.getAllUsers)
    app.get("/user/:userId", userController.getUserByID)
    app.get("/searchuser", userController.getUserByUsernameQuery)
    app.put("/user/:userId", userController.updateUser)
    app.delete("/user/:userId", userController.deleteUser)
}


export default {
    routes
}
