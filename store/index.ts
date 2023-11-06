import { observable, action, makeAutoObservable } from "mobx";
class Store {
  @observable sample: string = "";

  @action setSampleAction(value: string) {
    this.sample = value;
  }
  constructor() {
    makeAutoObservable(this);
    //   if (typeof window !== "undefined") {
    //     makePersistable(this, {
    //       name: "store",
    //       properties: [""],
    //       storage: window.localStorage,
    //     });
    //   }
    // }
    // dispose() {
    //   stopPersisting(this);
    // }
  }
}
const store = new Store();
export default store;
