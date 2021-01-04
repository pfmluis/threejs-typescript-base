import { 
  PerspectiveCamera,
  Renderer,
} from 'three';

export class PerspectiveCameraRatioHelper {

  public static startResizeListener(camera: PerspectiveCamera, renderer: Renderer): void {
    window.addEventListener('resize', () => {
      PerspectiveCameraRatioHelper.resizeRenderer(renderer);
      PerspectiveCameraRatioHelper.resizeCameraAspect(camera);
    });
  }

  public static getAspectRatio(): number {
    return window.innerWidth / window.innerHeight;
  }

  private static resizeRenderer(renderer: Renderer): void {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private static resizeCameraAspect(camera: PerspectiveCamera): void {
    const aspectRatio: number = window.innerWidth / window.innerHeight;
    camera.aspect = aspectRatio
    camera.updateProjectionMatrix();
  }
}
