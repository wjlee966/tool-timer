import { action, computed, makeObservable, observable, toJS } from 'mobx';

class TrackStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  _tracks = [];

  @computed
  get tracks() {
    return toJS(this._tracks);
  }

  @action
  setTracks(tracks) {
    this._tracks = tracks;
  }
}

export default new TrackStore();
