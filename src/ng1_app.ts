/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import angular1
import * as angular from 'angular'
import 'angular-route'
import {downgradeComponent} from '@angular/upgrade/static';
// import app modules
import {MessagesModule} from './messages';
import {MenuModule} from './menu';
import {RootCmp} from './ng2_app';

export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute', MessagesModule.name, MenuModule.name]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});

Ng1AppModule.directive('rootCmp', downgradeComponent({ component: RootCmp }));
