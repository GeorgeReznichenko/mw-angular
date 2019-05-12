import { ComponentPortal } from '@angular/cdk/portal';

export interface ComplexFilterPortalModel {
  id: string;
  portal: ComponentPortal<any>;
}
