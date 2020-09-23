import 'reflect-metadata';
import 'dotenv/config';
import { Core } from './Infrastructure/Bootstrap/core';
import { DefaultContainerFactory } from './Infrastructure/IoC/Containers/defaultContainerFactory.js';
import { WikipediaPageRepository } from './Data/Repositories/API/WikipediaPageRepository';
import { RandomPageIntegration } from './Data/Integrations/Wikipedia/RandomPageIntegration';
import { INTERFACE_SYMBOLS } from './Infrastructure/IoC/InterfaceSymbols';
import { IPageRepository } from './Domain/Interfaces/Repositories/IPageRepository';

global.rootFolder = require('path').resolve(__dirname, '..');

let container = new DefaultContainerFactory().create();
var core = new Core(container);
core.start();
