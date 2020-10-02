import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  book: BookModel;
  constructor(private rest: AdminService, private router: Router) {
    this.book = new BookModel('', '', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {}

  editBooks() {
    if (this.rest.isAdminLogged()) {
      this.rest.modifyBook(this.book).subscribe((res: any) => {
        if (res) {
          alert('libro modificado');
        }
      });
    } else {
      alert('Usuario No Autorizado');
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
  }
}
