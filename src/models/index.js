
const { masterDocumentsSchema, MasterDocuments } = require("./maestroDocumentos.model");
const { masterUserSchema, MasterUser } = require("./user.model")
const { masterProccessSchema, MasterProccess } = require("./proccess.model")
const { mastertypesSchema, MasterTypes } = require("./types.model")
const { masterCommentsSchema, MasterComments } = require("./comments.model")
const { masterNotificationsSchema, MasterNotifications } = require("./notification.model")

function setupModels(sequelize) {

  MasterDocuments.init(masterDocumentsSchema, MasterDocuments.config(sequelize));
  MasterUser.init(masterUserSchema, MasterUser.config(sequelize));
  MasterProccess.init(masterProccessSchema, MasterProccess.config(sequelize));
  MasterTypes.init(mastertypesSchema, MasterTypes.config(sequelize));
  MasterComments.init(masterCommentsSchema, MasterComments.config(sequelize));
  MasterNotifications.init(masterNotificationsSchema, MasterNotifications.config(sequelize));

}

module.exports = setupModels;
