import { typeAppInitState } from './types';

export const getApp = (state: any): typeAppInitState => state.app;
export const getNumber = (state: any): number => state.app.number;
