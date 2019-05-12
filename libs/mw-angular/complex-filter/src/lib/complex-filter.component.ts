import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComplexFilterComponentModel } from './entities/complex-filter-component.model';
import { ComplexFilterConfigModel } from './entities/complex-filter-config.model';
import { ComplexFilterPortalModel } from './entities/complex-filter-portal.model';
import { ComplexFilterPortalCreationService } from './services/complex-filter-portal-creation.service';

@Component({
  selector: 'mw-complex-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    ComplexFilterPortalCreationService,
  ],
  template: `
    <mw-complex-filter-inner
      [defaultPortalModels]="defaultPortalModelsSubject | async"
      [dynamicPortalModels]="dynamicPortalModelsSubject | async"
    ></mw-complex-filter-inner>
  `,
})
export class ComplexFilterComponent {
  defaultPortalModelsSubject = new BehaviorSubject<ComplexFilterPortalModel[]>([]);
  dynamicPortalModelsSubject = new BehaviorSubject<ComplexFilterPortalModel[]>([]);

  @Input() set config(config: ComplexFilterConfigModel) {
    this.defaultPortalModelsSubject.next(config.defaultFilters
      .map((componentModel: ComplexFilterComponentModel) => this.buildPortalModel(componentModel)));
    this.dynamicPortalModelsSubject.next([]);
  }

  constructor(private complexFilterPortalCreationService: ComplexFilterPortalCreationService) {
  }

  private buildPortalModel(componentModel: ComplexFilterComponentModel): ComplexFilterPortalModel {
    return {
      portal: this.complexFilterPortalCreationService.createPortal(
        componentModel.component,
        componentModel.data,
      ),
    };
  }
}
