import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  'First': 0,
  'Second': 10,
  'Third': 30,
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  
});