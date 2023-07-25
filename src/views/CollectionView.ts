import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");

    for (let model of this.collection.models) {
      console.log("model", model);
    }

    for (let model of this.collection.models) {
      const itemParent = document.createElement("div");
      console.log("Render Item");
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
      console.log(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}
