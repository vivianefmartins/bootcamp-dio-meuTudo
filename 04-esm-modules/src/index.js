/*
import * as database from "./utils/database.js";

database.connectToDatabase("my-database");
database.disconnectDatabase();
*/

//essa chama só uma função e não todas como a de cima.
import { disconnectDatabase } from "./utils/database.js";
import {getDataFromApi} from "./utils/api.js";

getDataFromApi();
disconnectDatabase();
