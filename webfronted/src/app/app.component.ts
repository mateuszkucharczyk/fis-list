import {Component, OnInit} from '@angular/core';
import {Commission} from './commission.model'
import {CommissionService} from './commission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommissionService]
})
export class AppComponent implements OnInit {
  title = 'FIS Techology';
  commissions: Commission[] = [];
  newCommission: Commission = new Commission();
  isLoading: boolean;

  constructor(private commissionService: CommissionService) { }

  getCommissions(): void {
    if (this.isLoading === true) {
      return;
    }
    this.isLoading = true;
    this.commissionService.getCommissions()
      .then(commissions => {
        this.commissions = commissions;
        this.isLoading = false;
      }).catch(reason => {
      console.error('An error on refresh: ', reason);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.getCommissions();
  }

  onDelete(commission: Commission): void {
    if (this.isLoading === true) {
      return;
    }
    this.isLoading = true;
    this.commissionService.delete(commission).then(
      isDeleted => {
        if (isDeleted) {
          const index = this.commissions.findIndex(d => d.id === commission.id);
          this.commissions.splice(index, 1);
        }
        this.isLoading = false;
      }
    );
  }

  onAdd(newCommission: Commission) {
    if (this.isLoading === true) {
      return;
    }
    this.isLoading = true;
    this.commissionService.add(newCommission).then(
      commission => {
        this.commissions.push(commission);
        this.isLoading = false;
      }).catch(reason => {
        console.error('An error on add: ', reason);
        this.isLoading = false;
    });
  }
}
