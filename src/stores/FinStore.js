import { action, computed, makeObservable, observable, toJS } from 'mobx';

class FinStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _endTime = 25;

  @observable
  _minute = Array.from({ length: this._endTime }, (_, i) => i);

  @observable
  _second = Array.from({ length: 60 }, (_, i) => i);

  @observable
  _fins = [];

  @observable
  _isActive = false;

  @observable
  _isFast = false;

  @observable
  _reset = false;

  get endTime() {
    return this._endTime;
  }

  @computed
  get minute() {
    return toJS(this._minute);
  }

  get second() {
    return toJS(this._second);
  }

  @computed
  get fins() {
    return toJS(this._fins);
  }

  get isActive() {
    return this._isActive;
  }

  get isFast() {
    return this._isFast;
  }

  get reset() {
    return this._reset;
  }

  @action
  setEndTime(endTime) {
    this._endTime = endTime;
  }

  @action
  setFins(fins) {
    this._fins = fins;
  }

  @action
  setIsActive(isActive) {
    this._isActive = isActive;
  }

  @action
  setIsFast(isFast) {
    this._isFast = isFast;
  }

  @action
  setReset(reset) {
    this._reset = reset;
  }
}

export default new FinStore();
