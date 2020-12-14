import { Component, ViewChild } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { NgbTypeaheadConfig, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';
import { BusinessService } from '../../../services/business.service';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css'],
  providers: [NgbTypeaheadConfig], // add NgbTypeaheadConfig to the component providers
})
export class EngineComponent {
  title = 'Find your business with us';
  slogan = 'We provide the information that you are looking for';
  names = <any>[];
  id = <any>[];
  country = <any>[];
  categories = <any>[];
  data = <any>[];
  results = <any>[];

  constructor(public bussiness: BusinessService, config: NgbTypeaheadConfig) {
    // customize default values of typeaheads used by this component tree
    config.showHint = true;
    // Getting the data from the Business API
    this.bussiness.getData().subscribe((data) => {
      this.data = data;
      // Getting the business name and category
      this.data.forEach(
        (el: { name: any; country: any; categories: any[] }) => {
          this.names.push(el.name);
          this.country.push(el.country);
          el.categories.forEach((el) => {
            this.categories.push({ name: el.name });
          });
        }
      );
    });
  }
  businessSelected: any;
  businessCategory: any;
  model: any;

  getResults() {
    const data = [
      { country: this.businessSelected },
      { category: this.businessCategory },
      { business: this.model },
    ];
    this.results = data;
    console.log(this.results)

  }

  @ViewChild('instance', { static: true })
  instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term, index) =>
        (term === ''
          ? this.names
          : this.names.filter(
              (v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
