import { PerspectiveCamera } from 'three';
import { PerspectiveCameraRatioHelper } from '../helpers/ratio.helper';

export class PerspectiveCameraSingleton {
  
  private static instance: PerspectiveCamera;

  public static getInstance(): PerspectiveCamera {
    if (!PerspectiveCameraSingleton.instance) {
      const ratio: number = PerspectiveCameraRatioHelper.getAspectRatio()
      PerspectiveCameraSingleton.instance = new PerspectiveCamera(75, ratio, 0.1, 100);
    }

    return PerspectiveCameraSingleton.instance;
  }
}
