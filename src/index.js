import { run } from "./App/app";
import "./main.css";
import { ComponentService } from './App/compononent.service';
import { AlertService } from './App/alert.service';

const alertService = new AlertService();
const componentService = new ComponentService();
console.log("hashed");
run(alertService, componentService);