import { Scene } from 'three';

export class SceneSingleton {

  private static instance: Scene;

  public static getInstance(): Scene {
    if (!SceneSingleton.instance) {
      SceneSingleton.instance = new Scene();
    }

    return SceneSingleton.instance;
  }
}
