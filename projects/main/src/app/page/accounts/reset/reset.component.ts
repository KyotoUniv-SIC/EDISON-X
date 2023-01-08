import { Component, OnInit } from '@angular/core';
import { AuthApplicationService } from 'projects/shared/src/lib/services/auth/auth.application.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
  constructor(private auth: AuthApplicationService) {}

  ngOnInit(): void {}

  async onSubmit($event: string) {
    this.auth.resetPassword($event);
  }
}
