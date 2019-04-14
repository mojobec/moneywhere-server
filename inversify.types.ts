const TYPES = {
    ITransactionService: Symbol.for("ITransactionService"),
    ILiveLocation: Symbol.for("ILiveLocation"),
    IUserLocationService: Symbol.for("IUserLocationService"),
    IWebServer: Symbol.for("IWebServer"),
    IController: Symbol.for("IController"),
    TransactionController: Symbol.for("TransactionController"),
    UserController: Symbol.for("UserController"),
    TransactionRepository: Symbol.for("TransactionRepository"),
    UserRepository: Symbol.for("UserRepository"),
    UserLocationService: Symbol.for("UserLocationService"),
    UserService: Symbol.for("UserService"),
    TransactionService: Symbol.for("TransactionService")

};

export { TYPES };