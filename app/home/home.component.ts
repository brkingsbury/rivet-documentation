import { Component } from '@angular/core';
import { versions } from '../changelog/versions/versions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  version = versions;

  private _0x3f66 = ['\x41\x72\x72\x6F\x77\x55\x70\x41\x72\x72\x6F\x77\x55\x70\x41\x72\x72\x6F\x77\x44\x6F\x77\x6E\x41\x72\x72\x6F\x77\x44\x6F\x77\x6E\x41\x72\x72\x6F\x77\x4C\x65\x66\x74\x41\x72\x72\x6F\x77\x52\x69\x67\x68\x74\x41\x72\x72\x6F\x77\x4C\x65\x66\x74\x41\x72\x72\x6F\x77\x52\x69\x67\x68\x74\x62\x61\x45\x6E\x74\x65\x72'];
  private s = this._0x3f66[0];
  //  You didn't think it would be that easy?  ;)
  private t;
  private e = '';

  constructor() {
    // Secret secret, I've got a secret
    document.addEventListener('keydown', e => {
      const i = e.key;
      if (this.t !== undefined) {
        window.clearTimeout(this.t);
      }
      this.t = window.setTimeout(() => {
        this.e = '';
      }, 2000);
      if (this.s.indexOf(this.e) !== -1 && this.s.length >= this.e.length) {
        this.e += i;
      } else {
        this.e = '';
      }
      if (this.s === this.e) {
        alert('You should tell a member of DesignOps what you just did.  ;)');
      }
    });
  }
}
