import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id: any;
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private orderService: OrderService,
    private toastr: ToastrManager,
    ) { }

  ngOnInit() {
    if (localStorage.getItem('storeLogin')) {
      const data = JSON.parse(localStorage.getItem('storeLogin'));
      if (data.id) {
        this.id = data.id;
      }
    }
    this.orderService.newStoreOrder().subscribe((res: any) => {
      console.log(res, res['data'], JSON.parse(res.data), 'new order');
      if (res && res['data']) {
        const response = JSON.parse(res.data);
        if (response && response['storeId'] === this.id) {
          this.toastr.successToastr('New Store Order Received');
        }
      }
    });
  }
  logout() {
    this.localStorage.clear();
    localStorage.clear();
    document.getElementById('closeLogoutModal').click();
    this.router.navigateByUrl('/login');
  }
}
