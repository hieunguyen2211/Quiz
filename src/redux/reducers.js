import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { staff } from "./staff/reducer";
import { property } from "./property/reducer";
import { city } from "./city/reducer";
import { propertyType } from "./propertyType/reducer";
import { transaction } from "./transaction/reducer";
import { mail } from "./mail/reducer";
import { realtor } from "./realtor/reducer";
import { admin } from "./admin/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    staff,
    property,
    city,
    propertyType,
    transaction,
    mail,
    realtor,
    admin,

  });
