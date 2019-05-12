import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComplexFilterComponentModel } from './entities/complex-filter-component.model';
import { ComplexFilterConfigModel } from './entities/complex-filter-config.model';
import { ComplexFilterPortalModel } from './entities/complex-filter-portal.model';

@Component({
  selector: 'mw-complex-filter-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mw-complex-filter
      [defaultPortalModels]="defaultPortalModelsSubject | async"
      [dynamicPortalModels]="dynamicPortalModelsSubject | async"
    ></mw-complex-filter>
  `,
})
export class ComplexFilterContainerComponent {
  defaultPortalModelsSubject = new BehaviorSubject<ComplexFilterPortalModel[]>([]);
  dynamicPortalModelsSubject = new BehaviorSubject<ComplexFilterPortalModel[]>([]);

  @Input() set config(config: ComplexFilterConfigModel) {
    this.defaultPortalModelsSubject.next(config.defaultFilters.map(this.buildPortalModel));
    this.dynamicPortalModelsSubject.next([]);
  }

  private buildPortalModel(componentModel: ComplexFilterComponentModel): ComplexFilterPortalModel {
    return {
      id: componentModel.id,
      portal: new ComponentPortal(componentModel.component),
    };
  }
}
